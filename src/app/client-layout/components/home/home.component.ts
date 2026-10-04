import {
  Component,
  ChangeDetectionStrategy,
  computed,
  signal,
  effect,
  untracked,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedCardComponent } from '../../../shared-components/shared-card/shared-card.component';
import { SPECIMENS, Specimen } from './specimens.data';
import { PaginationService } from '../../services/pagination.service';
import { MetroMapComponent } from '../../../shared-components/metro-map/metro-map';

type Category = 'all' | 'component' | 'css-battle' | 'problem-solving' | 'clean-code' | 'fullstack';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MetroMapComponent,
    SharedCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  private readonly pagination = inject(PaginationService);

  readonly itemsPerPage = 12;
  readonly allSpecimens = SPECIMENS;

  readonly latestSpecimens = computed<Specimen[]>(() =>
    [...SPECIMENS].sort((a, b) => b.sortKey - a.sortKey).slice(0, 4)
  );

  readonly activeCategory = signal<Category>('all');
  readonly searchQuery = signal('');

  readonly categories = signal<{ key: Category; label: string; count: number }[]>([]);

  constructor() {
    this.buildCategories();

    effect(() => {
      const total = this.totalPages();
      const current = untracked(() => this.pagination.page());
      if (current > total) {
        this.pagination.set(total);
      }
    });
  }

  private buildCategories(): void {
    const kinds: Category[] = ['all', 'component', 'css-battle', 'problem-solving', 'clean-code', 'fullstack'];

    const labels: Record<Category, string> = {
      'all': 'جميع العيّنات',
      'component': 'مكوّنات الواجهة',
      'css-battle': 'معارك CSS',
      'problem-solving': 'حل مسائل',
      'clean-code': 'الكود النظيف',
      'fullstack': 'تطبيقات متكاملة'
    };

    const result: { key: Category; label: string; count: number }[] = [];

    kinds.forEach(k => {
      const count = k === 'all'
        ? SPECIMENS.length
        : SPECIMENS.filter(s => s.kind === k).length;
      if (count > 0 || k === 'all') {
        result.push({ key: k, label: labels[k], count });
      }
    });

    this.categories.set(result);
  }

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

  readonly currentPage = computed(() => {
    const total = this.totalPages();
    const cur = this.pagination.page();
    return Math.min(Math.max(1, cur), total);
  });

  readonly paged = computed<Specimen[]>(() => {
    const page = this.currentPage();
    const start = (page - 1) * this.itemsPerPage;
    return this.filtered().slice(start, start + this.itemsPerPage);
  });

  readonly pageNumbers = computed<number[]>(() => {
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
  });

  onSearch(event: Event): void {
    this.searchQuery.set((event.target as HTMLInputElement).value);
    this.pagination.reset();
  }

  setCategory(c: Category): void {
    this.activeCategory.set(c);
    this.pagination.reset();
  }

  resetFilters(): void {
    this.activeCategory.set('all');
    this.searchQuery.set('');
    this.pagination.reset();
  }

  goToPage(page: number): void {
    const max = this.totalPages();
    if (page < 1 || page > max) return;
    this.pagination.set(page);

    if (typeof document !== 'undefined') {
      document.getElementById('catalog')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  nextPage(): void {
    this.goToPage(this.currentPage() + 1);
  }

  prevPage(): void {
    this.goToPage(this.currentPage() - 1);
  }

  fmt(n: number): string {
    return n < 10 ? `0${n}` : String(n);
  }
}