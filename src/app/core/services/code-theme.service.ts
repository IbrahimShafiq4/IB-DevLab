import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

export type CodeThemeId =
  | 'auto'
  | 'dracula'
  | 'monokai'
  | 'one-dark'
  | 'github-light'
  | 'nord';

export interface CodeThemeMeta {
  id: CodeThemeId;
  label: string;
  labelEn: string;
  tone: 'dark' | 'light';
  swatch: string;
}

export const CODE_THEMES: CodeThemeMeta[] = [
  { id: 'auto',         label: 'تلقائي',   labelEn: 'Auto',         tone: 'dark',  swatch: 'linear-gradient(135deg, #5b9dff 0%, #4cd08a 100%)' },
  { id: 'dracula',      label: 'دراكولا',  labelEn: 'Dracula',      tone: 'dark',  swatch: 'linear-gradient(135deg, #ff79c6 0%, #bd93f9 100%)' },
  { id: 'monokai',      label: 'مونوكاي',  labelEn: 'Monokai',      tone: 'dark',  swatch: 'linear-gradient(135deg, #f92672 0%, #e6db74 100%)' },
  { id: 'one-dark',     label: 'One Dark', labelEn: 'One Dark',     tone: 'dark',  swatch: 'linear-gradient(135deg, #c678dd 0%, #61afef 100%)' },
  { id: 'github-light', label: 'GitHub',   labelEn: 'GitHub Light', tone: 'light', swatch: 'linear-gradient(135deg, #cf222e 0%, #0969da 100%)' },
  { id: 'nord',         label: 'Nord',     labelEn: 'Nord',         tone: 'dark',  swatch: 'linear-gradient(135deg, #88c0d0 0%, #a3be8c 100%)' },
];

@Injectable({ providedIn: 'root' })
export class CodeThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly STORAGE_KEY = 'ibdl:code-theme';

  private readonly _theme = signal<CodeThemeId>(this.resolveInitial());
  readonly theme = this._theme.asReadonly();

  readonly themes = CODE_THEMES;

  constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      const id = this._theme();
      this.doc.documentElement.setAttribute('data-code-theme', id);
      try {
        localStorage.setItem(this.STORAGE_KEY, id);
      } catch {  }
    });
  }

  set(id: CodeThemeId): void {
    this._theme.set(id);
  }

  cycle(): void {
    const all = CODE_THEMES.map(t => t.id);
    const current = this._theme();
    const idx = all.indexOf(current);
    const next = all[(idx + 1) % all.length];
    this._theme.set(next);
  }

  currentMeta(): CodeThemeMeta {
    return CODE_THEMES.find(t => t.id === this._theme()) ?? CODE_THEMES[0];
  }

  private resolveInitial(): CodeThemeId {
    if (!isPlatformBrowser(this.platformId)) return 'auto';
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY) as CodeThemeId | null;
      if (raw && CODE_THEMES.some(t => t.id === raw)) return raw;
    } catch {  }
    return 'auto';
  }
}