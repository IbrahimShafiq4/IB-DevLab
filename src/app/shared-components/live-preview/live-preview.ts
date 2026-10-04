import {
  Component,
  Input,
  ChangeDetectionStrategy,
  signal,
  computed,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  inject,
  effect,
  Injector,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LivePreviewRegistry } from './live-preview-registry.service';
import { ThemeService } from '../../core/services/theme.service';

export type StageTone = 'auto' | 'light' | 'dark';

@Component({
  selector: 'app-live-preview',
  standalone: true,
  imports: [],
  templateUrl: './live-preview.html',
  styleUrl: './live-preview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LivePreviewComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() html = '';
  @Input() css = '';
  @Input() js = '';
  @Input() title = '';
  @Input() tone: StageTone = 'auto';
  @Input() interactive = false;

  @ViewChild('iframeHost') iframeHost?: ElementRef<HTMLIFrameElement>;

  readonly mounted = signal(false);
  readonly error = signal<string | null>(null);
  readonly reducedMotion = signal(false);
  readonly playing = signal(true);

  private readonly elRef = inject(ElementRef);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly themeService = inject(ThemeService);
  private readonly registry = inject(LivePreviewRegistry);
  private readonly injector = inject(Injector);

  private readonly instanceId = `pv-${Math.random().toString(36).slice(2)}`;

  private observer?: IntersectionObserver;
  private mqMotion?: MediaQueryList;
  private srcdocValue: SafeHtml = this.emptyDoc();

  private cachedTokens: string | null = null;

  private lastBuildHash: string | null = null;

  readonly srcdoc = signal<SafeHtml>(this.srcdocValue);

  readonly resolvedTone = computed<'light' | 'dark'>(() => {
    if (this.tone === 'light') return 'light';
    if (this.tone === 'dark') return 'dark';
    return this.themeService.theme() === 'light' ? 'light' : 'dark';
  });

  constructor() {
    effect(() => {
      const tone = this.resolvedTone();

      this.cachedTokens = null;

      if (this.mounted()) {
        this.sendToneToFrame(tone);
      }
    }, { injector: this.injector });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const sourceChanged = changes['html'] || changes['css'] || changes['js'];
    if (sourceChanged && this.mounted()) {
      this.error.set(null);
      this.rebuild();
    } else if (changes['tone'] && this.mounted()) {
      this.sendToneToFrame(this.resolvedTone());
    }
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.reducedMotion.set(this.mqMotion.matches);
    if (this.mqMotion.matches) this.playing.set(false);
    this.mqMotion.addEventListener('change', this.onMotionChange);

    this.observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.registry.tryMount(this.instanceId, () => {
              this.mounted.set(true);
              this.rebuild();
            });
          } else if (entry.intersectionRatio === 0) {
            this.registry.release(this.instanceId);
            this.mounted.set(false);
            this.error.set(null);
          }
        }
      },
      { rootMargin: '80px 0px', threshold: [0, 0.01] }
    );

    this.observer.observe(this.elRef.nativeElement);
    window.addEventListener('message', this.onMessage);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.mqMotion?.removeEventListener('change', this.onMotionChange);
    window.removeEventListener('message', this.onMessage);
    this.registry.release(this.instanceId);
  }

  retry(): void {
    this.error.set(null);
    this.registry.tryMount(this.instanceId, () => {
      this.mounted.set(true);
      this.rebuild();
    });
  }

  play(): void {
    this.playing.set(true);
    this.rebuild();
  }

  private readonly onMotionChange = (e: MediaQueryListEvent): void => {
    this.reducedMotion.set(e.matches);
    if (e.matches) {
      this.playing.set(false);
      this.rebuild();
    }
  };

  private readonly onMessage = (e: MessageEvent): void => {
    if (!e.data || typeof e.data !== 'object') return;
    if (e.data.__pv !== this.instanceId) return;
    if (e.data.type !== 'error') return;
    this.error.set(String(e.data.message || 'Unknown error'));
  };

  private sanitizeForPreview(rawHtml: string): string {
    if (!rawHtml) return '';
    let s = rawHtml.trim();

    s = s.replace(/<!DOCTYPE[^>]*>/gi, '');
    s = s.replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '');

    s = s.replace(/<script\b[^>]*\bsrc\s*=\s*["'][^"']*["'][^>]*>\s*<\/script>/gi, '');
    s = s.replace(/<script\b[^>]*\bsrc\s*=\s*["'][^"']*["'][^>]*\/>/gi, '');
    s = s.replace(/<script\b[^>]*\bsrc\s*=\s*[^\s>]+[^>]*>\s*<\/script>/gi, '');

    s = s.replace(/<link\b[^>]*\brel\s*=\s*["']stylesheet["'][^>]*>/gi, '');

    const bodyMatch = s.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) s = bodyMatch[1];

    s = s.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');

    return s.trim();
  }

  private sendToneToFrame(tone: string): void {
    try {
      this.iframeHost?.nativeElement?.contentWindow?.postMessage({ type: 'set-tone', tone }, '*');
    } catch (_) { }
  }

  private computeHash(parts: string[]): string {
    const s = parts.join('\u0000');
    let h = 5381;
    for (let i = 0; i < s.length; i++) {
      h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    }
    return String(h);
  }

  private getTokensCached(): string {
    if (this.cachedTokens !== null) return this.cachedTokens;
    this.cachedTokens = this.readTokens();
    return this.cachedTokens;
  }

  private rebuild(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const tone = this.resolvedTone();
    const paused = this.reducedMotion() && !this.playing();

    const hash = this.computeHash([
      this.html, this.css, this.js, tone, paused ? '1' : '0'
    ]);

    if (hash === this.lastBuildHash) return;
    this.lastBuildHash = hash;

    const tokens = this.getTokensCached();
    const html = this.buildDocument({ tone, tokens });
    this.srcdocValue = this.sanitizer.bypassSecurityTrustHtml(html);
    this.srcdoc.set(this.srcdocValue);
  }

  private emptyDoc(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      '<!doctype html><html><head><meta charset="utf-8"></head><body></body></html>'
    );
  }

  private buildDocument(opts: { tone: 'light' | 'dark'; tokens: string }): string {
    const { tone, tokens } = opts;
    const paused = this.reducedMotion() && !this.playing();

    const csp =
      "default-src 'none'; " +
      "base-uri http: https:; " +
      "img-src data: blob: https: http://localhost:* http://127.0.0.1:*; " +
      "style-src 'unsafe-inline' https: http://localhost:* http://127.0.0.1:*; " +
      "script-src 'unsafe-inline'; " +
      "font-src data: https: http://localhost:* http://127.0.0.1:*; " +
      "connect-src 'none';";

    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const cleanHtml = this.sanitizeForPreview(this.html);

    return `<!doctype html>
<html lang="en" dir="ltr" data-tone="${tone}">
<head>
<meta charset="utf-8">
<base href="${origin}/">
<meta http-equiv="Content-Security-Policy" content="${csp}">
<style>
html {
  font-size: 16px;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

${tokens}

:root, :root[data-tone="dark"] {
  --stage-bg: var(--stage-dark, #1E1E1E);
  --preview-scale: 0.5;
  --scroll-track: #1E1E1E;
  --scroll-thumb: #4A4A4A;
  --scroll-thumb-hover: #616161;
}

:root[data-tone="light"] {
  --stage-bg: var(--stage-light, #ECF0F1);
  --preview-scale: 0.5;
  --scroll-track: #ECF0F1;
  --scroll-thumb: #C5C9CC;
  --scroll-thumb-hover: #8F9499;
}

html {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--stage-bg);
  transition: background-color 160ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

body {
  font-family: 'IBM Plex Sans Arabic', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-primary);
  overflow-x: hidden;
  background-color: var(--stage-bg);
  transition: background-color 160ms cubic-bezier(0.2, 0.8, 0.2, 1), color 160ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

* {
  scrollbar-width: thin;
  scrollbar-color: var(--scroll-thumb) var(--scroll-track);
}

*::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

*::-webkit-scrollbar-track {
  background: var(--scroll-track);
}

*::-webkit-scrollbar-thumb {
  background: var(--scroll-thumb);
  border-radius: 2px;
  border: 2px solid var(--scroll-track);
}

*::-webkit-scrollbar-thumb:hover {
  background: var(--scroll-thumb-hover);
}

*::-webkit-scrollbar-corner {
  background: var(--scroll-track);
}

${paused ? `*, *::before, *::after { animation-play-state: paused !important; transition: none !important; }` : ''}

${this.css}

body {
  transform: scale(var(--preview-scale));
  transform-origin: 0 0;
  width: calc(100% / var(--preview-scale));
  min-height: calc(100vh / var(--preview-scale));
  max-height: none;
  max-width: none;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0;
}
</style>
</head>
<body>
${cleanHtml}
<script>
(function () {
  var INSTANCE = ${JSON.stringify(this.instanceId)};

  function report(message) {
    try {
      parent.postMessage({ __pv: INSTANCE, type: 'error', message: String(message) }, '*');
    } catch (_) {}
  }

  window.addEventListener('message', function (e) {
    if (e && e.data && e.data.type === 'set-tone') {
      document.documentElement.setAttribute('data-tone', e.data.tone);
    }
  });

  window.addEventListener('error', function (e) {
    report(e.message || 'Script error');
  }, true);

  window.addEventListener('unhandledrejection', function (e) {
    report((e.reason && e.reason.message) || 'Unhandled rejection');
  });

  try {
    ${this.js || ''}
  } catch (err) {
    report(err && err.message ? err.message : err);
  }
})();
</script>
</body>
</html>`;
  }

  private readTokens(): string {
    if (!isPlatformBrowser(this.platformId)) return '';
    const styles = getComputedStyle(document.documentElement);
    const keys = [
      '--bg-main',
      '--bg-lift',
      '--bg-void',
      '--bg-secondary',
      '--bg-elevated',
      '--surface',
      '--surface-raised',
      '--stage-dark',
      '--stage-light',
      '--stage-grid',
      '--border',
      '--border-strong',
      '--rule-hairline',
      '--rule-solid',
      '--text-primary',
      '--text-secondary',
      '--text-muted',
      '--ink-primary',
      '--ink-secondary',
      '--ink-tertiary',
      '--ink-inverse',
      '--accent-primary',
      '--accent-brass',
      '--on-brass',
      '--accent-reference',
      '--accent-success',
      '--accent-critical',
      '--success',
      '--warning',
      '--error',
      '--info',
      '--code-text',
      '--code-bg',
      '--code-border',
      '--syntax-keyword',
      '--syntax-string',
      '--syntax-number',
      '--syntax-function',
      '--syntax-comment',
      '--grid-1',
      '--grid-2'
    ];
    return `:root { ${keys
      .map(k => `${k}: ${styles.getPropertyValue(k).trim() || 'initial'};`)
      .join(' ')} }`;
  }
}