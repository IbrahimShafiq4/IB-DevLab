import {
  Component,
  inject,
  signal,
  ChangeDetectionStrategy,
  HostListener,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeThemeService, CodeThemeId } from '../../core/services/code-theme.service';

@Component({
  selector: 'app-code-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ct-toggle" [class.is-open]="open()">
      <button
        type="button"
        class="ct-toggle__btn"
        (click)="toggle($event)"
        [attr.aria-expanded]="open()"
        [attr.aria-label]="'ثيم الكود: ' + current().label"
        [attr.title]="'ثيم الكود: ' + current().label"
      >
        <span class="ct-toggle__swatch" [style.background]="current().swatch"></span>
        <span class="ct-toggle__label">{{ current().label }}</span>
        <svg class="ct-toggle__chev" width="10" height="10" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2.5" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      @if (open()) {
        <ul class="ct-menu" role="listbox" aria-label="اختر ثيم الكود">
          @for (t of themes; track t.id) {
            <li>
              <button
                type="button"
                class="ct-menu__item"
                [class.is-active]="t.id === current().id"
                (click)="select(t.id, $event)"
                role="option"
                [attr.aria-selected]="t.id === current().id"
              >
                <span class="ct-menu__swatch" [style.background]="t.swatch"></span>
                <span class="ct-menu__name">{{ t.label }}</span>
                @if (t.id === current().id) {
                  <svg class="ct-menu__check" width="12" height="12" viewBox="0 0 24 24"
                       fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                }
              </button>
            </li>
          }
        </ul>
      }
    </div>
  `,
  styles: [`
    :host {
      display: inline-flex;
      position: relative;
    }

    .ct-toggle {
      position: relative;
    }

    .ct-toggle__btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 36px;
      padding: 0 10px;
      background: transparent;
      border: 1px solid var(--rule-hairline);
      border-radius: var(--r-sm);
      color: var(--ink-secondary);
      font-family: var(--font-ui);
      font-size: 0.75rem;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
      transition: border-color 160ms ease-out, color 160ms ease-out;

      &:hover {
        border-color: var(--rule-solid);
        color: var(--ink-primary);
      }
    }

    .ct-toggle__swatch {
      width: 14px;
      height: 14px;
      border-radius: 3px;
      flex-shrink: 0;
      border: 1px solid var(--rule-hairline);
    }

    .ct-toggle__chev {
      opacity: 0.7;
      transition: transform 160ms ease-out;
    }

    .ct-toggle.is-open .ct-toggle__chev {
      transform: rotate(180deg);
    }

    @media (max-width: 720px) {
      .ct-toggle__label {
        display: none;
      }
      .ct-toggle__btn {
        padding: 0 8px;
      }
    }

    .ct-menu {
      position: absolute;
      top: calc(100% + 6px);
      inset-inline-end: 0;
      min-width: 180px;
      padding: 4px;
      margin: 0;
      list-style: none;
      background: var(--bg-elevated);
      border: 1px solid var(--rule-hairline);
      border-radius: var(--r-sm);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
      z-index: 100;
      animation: ct-slide 140ms ease-out;
    }

    @keyframes ct-slide {
      from { opacity: 0; transform: translateY(-4px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .ct-menu__item {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      border: none;
      border-radius: 3px;
      color: var(--ink-secondary);
      font-family: var(--font-ui);
      font-size: 0.8125rem;
      text-align: start;
      cursor: pointer;
      transition: background-color 120ms ease-out, color 120ms ease-out;

      &:hover {
        background: var(--bg-surface);
        color: var(--ink-primary);
      }

      &.is-active {
        color: var(--ink-primary);
        font-weight: 600;
      }
    }

    .ct-menu__swatch {
      width: 16px;
      height: 16px;
      border-radius: 3px;
      flex-shrink: 0;
      border: 1px solid var(--rule-hairline);
    }

    .ct-menu__name {
      flex: 1;
    }

    .ct-menu__check {
      color: var(--accent-primary, var(--line-algo));
      flex-shrink: 0;
    }

    @media (prefers-reduced-motion: reduce) {
      .ct-menu { animation: none; }
      .ct-toggle__chev { transition: none; }
    }
  `],
})
export class CodeThemeToggleComponent {
  private readonly service = inject(CodeThemeService);
  private readonly elRef = inject(ElementRef<HTMLElement>);

  readonly themes = this.service.themes;
  readonly current = signal(this.service.currentMeta());
  readonly open = signal(false);

  toggle(event: Event): void {
    event.stopPropagation();
    this.open.update(v => !v);
  }

  select(id: CodeThemeId, event: Event): void {
    event.stopPropagation();
    this.service.set(id);
    this.current.set(this.service.currentMeta());
    this.open.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.open()) return;
    const target = event.target as Node | null;
    if (target && !this.elRef.nativeElement.contains(target)) {
      this.open.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open()) this.open.set(false);
  }
}