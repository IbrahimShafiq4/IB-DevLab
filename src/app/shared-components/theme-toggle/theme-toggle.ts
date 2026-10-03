import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  template: `
<button type="button"
        class="toggle"
        (click)="onToggle()"
        [attr.aria-label]="theme() === 'night' ? 'التبديل للوضع النهاري' : 'التبديل للوضع الليلي'"
        [attr.title]="theme() === 'night' ? 'وضع نهاري' : 'وضع ليلي'">
    <span class="toggle__icon" aria-hidden="true">
        @if (theme() === 'night') {
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
        } @else {
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
        }
    </span>
</button>
  `,
  styles: [`
:host {
    display: inline-flex;
}

.toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    background: transparent;
    border: 1px solid var(--rule-hairline);
    border-radius: var(--r-1);
    color: var(--ink-secondary);
    cursor: pointer;
    transition:
        border-color var(--dur-fast) var(--ease-out),
        color var(--dur-fast) var(--ease-out),
        background-color var(--dur-fast) var(--ease-out);
}

.toggle__icon {
    display: inline-flex;
    transition: transform var(--dur-base) var(--ease-out);
}

.toggle:hover {
    border-color: var(--accent-primary);
    color: var(--accent-primary);
}

.toggle:hover .toggle__icon {
    transform: rotate(20deg);
}

.toggle:active {
    transform: scale(0.95);
}

@media (prefers-reduced-motion: reduce) {
    .toggle__icon {
        transition: none;
    }
}
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggleComponent {
  private readonly themeService = inject(ThemeService);
  readonly theme = this.themeService.theme;

  onToggle(): void {
    this.themeService.toggle();
  }
}