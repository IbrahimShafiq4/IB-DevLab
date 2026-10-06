import {
  Component,
  Input,
  ChangeDetectionStrategy,
  signal,
  inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import Prism from 'prismjs';

@Component({
  selector: 'app-code-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="code-panel" aria-label="لوحة الكود">
  <header class="code-panel__head" dir="ltr">
      <span class="code-panel__label">{{ label }}</span>
      @if (filename) {
      <span class="code-panel__file">{{ filename }}</span>
      }
      <span class="code-panel__lang">{{ language }}</span>

      <button type="button" class="code-panel__copy" (click)="copy()"
          [attr.aria-label]="copied() ? 'تم النسخ' : 'نسخ الكود'">
          <i class="fa-solid" [class.fa-copy]="!copied()" [class.fa-check]="copied()" aria-hidden="true"></i>
          <span>{{ copied() ? 'copied' : 'copy' }}</span>
      </button>
  </header>

  <pre class="code-panel__pre" dir="ltr" tabindex="0"><code
  class="language-{{ language }}"
  [innerHTML]="highlighted"></code></pre>
</section>
  `,
  styles: `
@use "../../../assets/styles/tokens/tokens" as t;

:host {
  display: block;
}

.code-panel {
  background-color: var(--ct-bg);
  border: 1px solid var(--ct-border);
  border-radius: t.$r-sm;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-width: 0;
  transition: background-color 200ms ease-out, border-color 200ms ease-out;

  &__head {
    display: flex;
    align-items: center;
    gap: t.$sp-3;
    padding: t.$sp-2 t.$sp-3;
    background-color: var(--ct-bg-elevated);
    border-bottom: 1px solid var(--ct-border);
    font-family: t.$font-mono;
    font-size: t.$fs-nano;
    letter-spacing: t.$tracking-wide;
    text-transform: lowercase;
    transition: background-color 200ms ease-out, border-color 200ms ease-out;
  }

  &__label {
    color: var(--ink-tertiary);
  }

  &__file {
    color: var(--ink-secondary);
  }

  &__lang {
    color: var(--accent-reference);
  }

  &__copy {
    margin-inline-start: auto;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 3px 8px;
    background-color: transparent;
    border: 1px solid var(--ct-border);
    border-radius: t.$r-sm;
    font-family: inherit;
    font-size: inherit;
    color: var(--ink-secondary);
    cursor: pointer;
    transition:
      border-color t.$dur-fast t.$ease-out,
      color t.$dur-fast t.$ease-out;

    i {
      font-size: 0.65rem;
    }

    &:hover {
      border-color: var(--accent-primary);
      color: var(--accent-primary);
    }
  }

  &__pre {
    margin: 0;
    padding: t.$sp-4;
    overflow-x: auto;
    overflow-y: auto;
    max-height: 480px;
    font-family: t.$font-mono;
    font-size: 0.8125rem;
    line-height: 1.7;
    color: var(--ct-text);
    tab-size: 2;
    -moz-tab-size: 2;
    background-color: var(--ct-bg);
    transition: background-color 200ms ease-out, color 200ms ease-out;

    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    &::-webkit-scrollbar-track {
        background: var(--ct-scroll-track);
    }
    &::-webkit-scrollbar-thumb {
        background: var(--ct-scroll-thumb);
        border-radius: 6px;
        border: 2px solid var(--ct-bg);
        background-clip: padding-box;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: var(--ct-scroll-thumb-hover);
        background-clip: padding-box;
    }

    code {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        background: none;
        padding: 0;
    }
  }
}

:host ::ng-deep {
    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
        background: transparent !important;
        margin: 0;
        padding: 0;
        text-shadow: none;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: var(--ct-comment);
        font-style: italic;
    }

    .token.punctuation {
        color: var(--ct-punctuation);
    }

    .token.property,
    .token.tag,
    .token.constant,
    .token.symbol,
    .token.deleted {
        color: var(--ct-tag);
    }

    .token.boolean,
    .token.number {
        color: var(--ct-number);
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
        color: var(--ct-string);
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
        color: var(--ct-operator);
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
        color: var(--ct-keyword);
        font-weight: 500;
    }

    .token.function,
    .token.class-name {
        color: var(--ct-function);
    }

    .token.regex,
    .token.important,
    .token.variable {
        color: var(--ct-number);
    }
}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodePanelComponent {
  @Input() code = '';
  @Input() language: 'markup' | 'css' | 'javascript' = 'markup';
  @Input() filename = '';
  @Input() label = 'code';

  readonly copied = signal(false);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly sanitizer = inject(DomSanitizer);

  get highlighted(): string {
    if (!isPlatformBrowser(this.platformId)) return this.escape(this.code);
    const grammar = Prism.languages[this.language];
    if (!grammar) return this.escape(this.code);
    return Prism.highlight(this.code, grammar, this.language);
  }

  async copy(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;
    try {
      await navigator.clipboard.writeText(this.code);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 1800);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = this.code;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); this.copied.set(true); setTimeout(() => this.copied.set(false), 1800); } catch { }
      document.body.removeChild(ta);
    }
  }

  private escape(s: string): string {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}