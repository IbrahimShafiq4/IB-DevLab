import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class PaginationService {

  private readonly STORAGE_KEY = 'ibdl:page';
  private readonly platformId = inject(PLATFORM_ID);

  private readonly _page = signal<number>(this.readInitial());

  readonly page = this._page.asReadonly();

  constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      try {
        localStorage.setItem(this.STORAGE_KEY, String(this._page()));
      } catch { }
    });
  }

  set(page: number): void {
    this._page.set(Math.max(1, Math.floor(page)));
  }

  next(): void {
    this._page.update(p => p + 1);
  }

  prev(): void {
    this._page.update(p => Math.max(1, p - 1));
  }

  reset(): void {
    this._page.set(1);
  }

  private readInitial(): number {
    if (!isPlatformBrowser(this.platformId)) return 1;
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (!raw) return 1;
      const n = parseInt(raw, 10);
      return Number.isFinite(n) && n > 0 ? n : 1;
    } catch {
      return 1;
    }
  }
}