import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
  signal,
  computed,
  inject,
  ElementRef,
  PLATFORM_ID,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';


import { SPECIMENS, Specimen } from './specimens.data';
import { SpecimenStageComponent } from '../../../shared-components/specimen-stage/specimen-stage';
import { SharedCardComponent } from '../../../shared-components/shared-card/shared-card.component';

type Category = 'all' | 'component' | 'css-battle' | 'problem-solving' | 'clean-code' | 'fullstack';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    SharedCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  private readonly cdr = inject(ChangeDetectorRef);

  readonly allSpecimens = SPECIMENS;

  // Static — SPECIMENS never mutates at runtime, no need for computed()
  private readonly _liveSpecimens = SPECIMENS.filter(s => !!s.source);
  readonly stageSpecimens = signal(this._liveSpecimens);
  readonly stripSpecimens = signal(this._liveSpecimens.slice(0, 6));

  readonly activeCategory = signal<Category>('all');
  readonly searchQuery = signal('');

  private readonly searchInput$ = new Subject<string>();
  private searchSub?: Subscription;

  readonly categories: { key: Category; label: string; count: number }[] = [];

  readonly itemsPerPage = 12;
  readonly currentPage = signal(1);

  readonly filtered = computed<Specimen[]>(() => {
    const cat = this.activeCategory();
    const q = this.searchQuery().trim().toLowerCase();

    return SPECIMENS
      .filter(s => cat === 'all' || s.kind === cat)
      .filter(s => !q
        || s.title.toLowerCase().includes(q)
        || s.description.toLowerCase().includes(q)
        || s.tags.some(t => t.toLowerCase().includes(q)))
      .sort((a, b) => a.sortKey - b.sortKey);
  });

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filtered().length / this.itemsPerPage))
  );

  readonly paged = computed<Specimen[]>(() => {
    const page = this.currentPage();
    const start = (page - 1) * this.itemsPerPage;
    return this.filtered().slice(start, start + this.itemsPerPage);
  });

  readonly marqueeCategories = signal<{ key: Category; label: string; count: number }[]>([]);

  private resizeObserver?: ResizeObserver;
  private readonly elRef = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.buildCategories();

    this.searchSub = this.searchInput$
      .pipe(debounceTime(180), distinctUntilChanged())
      .subscribe(q => {
        this.searchQuery.set(q);
        this.currentPage.set(1);
        this.cdr.markForCheck();
      });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.updateMarqueeRepeat();

    if (typeof ResizeObserver !== 'undefined') {
      const marqueeEl = this.elRef.nativeElement.querySelector('.marquee');
      if (marqueeEl) {
        this.resizeObserver = new ResizeObserver(() => {
          this.updateMarqueeRepeat();
        });
        this.resizeObserver.observe(marqueeEl);
      }
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        this.updateMarqueeRepeat();
      });
    }
  }

  ngOnDestroy(): void {
    this.searchSub?.unsubscribe();
    this.resizeObserver?.disconnect();
  }

  private buildCategories(): void {
    const kinds: Category[] = ['all', 'component', 'css-battle', 'problem-solving', 'clean-code', 'fullstack'];

    const labels: Record<Category, string> = {
      'all': 'جميع العيّنات',
      'component': 'مكوّنات الواجهة',
      'css-battle': 'معارك CSS Battles',
      'problem-solving': 'حل مسائل البرمجة',
      'clean-code': 'دروس الكود النظيف',
      'fullstack': 'تطبيقات متكاملة'
    };

    kinds.forEach(k => {
      const count = k === 'all'
        ? SPECIMENS.length
        : SPECIMENS.filter(s => s.kind === k).length;
      if (count > 0 || k === 'all') {
        this.categories.push({
          key: k,
          label: labels[k],
          count
        });
      }
    });

    this.updateMarqueeRepeat();
  }

  private updateMarqueeRepeat(): void {
    if (!this.categories.length) return;

    // Each item is roughly 180px wide (label + count + gap + divider).
    // We need ONE group to be >= widest supported viewport (2560px).
    // The HTML template renders TWO identical groups back-to-back.
    // The animation moves the track -50% (= one full group width) then loops.
    const itemWidth = 200; // conservative px estimate per item
    const targetWidth = isPlatformBrowser(this.platformId)
      ? Math.max(window.screen.width, window.innerWidth, 1280)
      : 2560;
    const baseLen = this.categories.length;
    const copiesNeeded = Math.max(2, Math.ceil(targetWidth / (baseLen * itemWidth)));

    const result: { key: Category; label: string; count: number }[] = [];
    for (let i = 0; i < copiesNeeded; i++) {
      result.push(...this.categories);
    }
    this.marqueeCategories.set(result);
    this.cdr.markForCheck();
  }

  onSearch(event: Event): void {
    this.searchInput$.next((event.target as HTMLInputElement).value);
  }

  setCategory(c: Category): void {
    this.activeCategory.set(c);
    this.currentPage.set(1);
    this.cdr.markForCheck();
  }

  resetFilters(): void {
    this.activeCategory.set('all');
    this.searchQuery.set('');
    this.currentPage.set(1);
    this.searchInput$.next('');
    this.cdr.markForCheck();
  }

  goToPage(p: number): void {
    const max = this.totalPages();
    if (p < 1 || p > max) return;
    this.currentPage.set(p);
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  nextPage(): void {
    this.goToPage(this.currentPage() + 1);
  }

  prevPage(): void {
    this.goToPage(this.currentPage() - 1);
  }

  pageNumbers(): number[] {
    const total = this.totalPages();
    const cur = this.currentPage();
    const max = 5;

    if (total <= max) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    let start = Math.max(1, cur - 2);
    let end = Math.min(total, start + max - 1);
    if (end - start + 1 < max) {
      start = end - max + 1;
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  fmt(n: number): string {
    return n < 10 ? `0${n}` : String(n);
  }
}