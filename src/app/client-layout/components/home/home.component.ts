import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  signal,
  computed,
  inject,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

import { SPECIMENS, Specimen } from './specimens.data';
import { SpecimenStageComponent } from '../../../shared-components/specimen-stage/specimen-stage';
import { SharedCardComponent } from '../../../shared-components/shared-card/shared-card.component';

type Category = 'all' | 'component' | 'css-battle' | 'problem-solving' | 'clean-code';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SharedCardComponent,
    // SpecimenStageComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  private readonly cdr = inject(ChangeDetectorRef);

  readonly allSpecimens = SPECIMENS;

  readonly stageSpecimens = computed(() =>
    SPECIMENS.filter(s => !!s.source)
  );

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

  ngOnDestroy(): void {
    this.searchSub?.unsubscribe();
  }

  private buildCategories(): void {
    const kinds: Category[] = ['all', 'component', 'css-battle', 'problem-solving', 'clean-code'];

    const labels: Record<Category, string> = {
      'all': 'الكل',
      'component': 'مكوّنات',
      'css-battle': 'CSS Battle',
      'problem-solving': 'حل مسائل',
      'clean-code': 'كود نظيف'
    };

    kinds.forEach(k => {
      this.categories.push({
        key: k,
        label: labels[k],
        count: k === 'all'
          ? SPECIMENS.length
          : SPECIMENS.filter(s => s.kind === k).length
      });
    });
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