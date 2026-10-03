import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

export type ThemeMode = 'night' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly STORAGE_KEY = 'ibdl-theme';

  private readonly _theme = signal<ThemeMode>(this.resolveInitial());
  readonly theme = this._theme.asReadonly();

  constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      const mode = this._theme();
      this.doc.documentElement.setAttribute('data-theme', mode);
      try {
        localStorage.setItem(this.STORAGE_KEY, mode);
      } catch {  }
    });
  }

  toggle(): void {
    this._theme.update(v => (v === 'night' ? 'light' : 'night'));
  }

  set(mode: ThemeMode): void {
    this._theme.set(mode);
  }

  private resolveInitial(): ThemeMode {
    if (!isPlatformBrowser(this.platformId)) return 'night';
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw === 'archive') return 'night';
      if (raw === 'reference') return 'light';
      if (raw === 'night' || raw === 'light') return raw;
    } catch {  }
    const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'night';
  }
}