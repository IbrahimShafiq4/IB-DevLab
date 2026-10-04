import {
    Component,
    ChangeDetectionStrategy,
    signal,
    HostListener
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from '../../../shared-components/theme-toggle/theme-toggle';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterModule, ThemeToggleComponent],
    template: `
<header class="topbar" role="banner">

    <a class="brand" routerLink="/" aria-label="IBDevLab — الرئيسية">
        <span class="brand__mark">IB</span>
        <span class="brand__slash" aria-hidden="true">/</span>
        <span class="brand__name">Dev.Lab</span>
    </a>

    <nav class="nav" aria-label="التنقل الرئيسي">
        <a class="nav__link"
           routerLink="/"
           routerLinkActive="is-active"
           [routerLinkActiveOptions]="{ exact: true }">
            الرئيسية
        </a>

        <a class="nav__link"
           routerLink="/lab"
           routerLinkActive="is-active">
            المعمل
        </a>

        <a class="nav__link"
           routerLink="/exp"
           routerLinkActive="is-active">
            الشروحات
        </a>

        <a class="nav__link nav__link--ext"
           href="https://ib-portfolio-indol.vercel.app/workspace"
           target="_blank"
           rel="noopener noreferrer">
            الأعمال
            <i class="fa-solid fa-arrow-up-left" aria-hidden="true"></i>
        </a>
    </nav>

    <div class="actions">

        <app-theme-toggle />

        <button type="button"
                class="icon-btn icon-btn--menu"
                (click)="toggleMenu()"
                [attr.aria-expanded]="isMenuOpen()"
                aria-label="القائمة">
            @if (isMenuOpen()) {
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            } @else {
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            }
        </button>
    </div>

    @if (isMenuOpen()) {
    <nav class="drawer" aria-label="القائمة الجانبية">
        <a class="drawer__link"
           routerLink="/"
           routerLinkActive="is-active"
           [routerLinkActiveOptions]="{ exact: true }"
           (click)="closeMenu()">
            الرئيسية
        </a>
        <a class="drawer__link"
           routerLink="/lab"
           routerLinkActive="is-active"
           (click)="closeMenu()">
            المعمل
        </a>
        <a class="drawer__link"
           routerLink="/exp"
           routerLinkActive="is-active"
           (click)="closeMenu()">
            الشروحات
        </a>
        <a class="drawer__link drawer__link--ext"
           href="https://ib-portfolio-indol.vercel.app/workspace"
           target="_blank"
           rel="noopener noreferrer"
           (click)="closeMenu()">
            الأعمال
            <i class="fa-solid fa-arrow-up-left" aria-hidden="true"></i>
        </a>
    </nav>
    }

</header>
  `,
    styles: [`
@use "../../../../assets/styles/tokens/tokens" as t;

:host {
    display: block;
    position: sticky;
    top: 0;
    z-index: var(--z-sticky, 100);
}

.topbar {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1.5rem;
    height: 52px;
    padding-inline: clamp(1rem, 3vw, 1.5rem);
    background-color: color-mix(in oklab, var(--bg-void) 88%, transparent);
    backdrop-filter: saturate(140%) blur(12px);
    -webkit-backdrop-filter: saturate(140%) blur(12px);
    border-bottom: 1px solid var(--rule-hairline);
}

.brand {
    display: inline-flex;
    align-items: baseline;
    gap: 2px;
    font-family: var(--font-code);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--ink-primary);
    letter-spacing: -0.02em;
    padding: 4px 0;

    &__mark {
        color: var(--accent-primary);
        font-weight: 700;
    }

    &__slash {
        color: var(--ink-tertiary);
        font-weight: 300;
        margin-inline: 2px;
    }

    &__name {
        font-family: var(--font-ui);
        font-weight: 500;
        color: var(--ink-primary);
    }

    &:hover .brand__mark {
        color: var(--accent-reference);
    }
}

.nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(1rem, 2.5vw, 1.75rem);
}

.nav__link {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 6px 0;
    font-family: var(--font-ui);
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--ink-secondary);
    transition: color var(--dur-fast) var(--ease-out);
    white-space: nowrap;

    i {
        font-size: 0.65rem;
        opacity: 0.7;
    }

    &::after {
        content: "";
        position: absolute;
        inset-inline: 0;
        bottom: -18px;
        height: 2px;
        background-color: var(--accent-primary);
        transform: scaleX(0);
        transform-origin: center;
        transition: transform var(--dur-base) var(--ease-out);
    }

    &:hover {
        color: var(--ink-primary);
    }

    &.is-active {
        color: var(--ink-primary);

        &::after {
            transform: scaleX(1);
        }
    }

    &--ext:hover {
        color: var(--accent-primary);
    }
}

.actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    background: transparent;
    border: 1px solid var(--rule-hairline);
    border-radius: t.$r-sm;
    color: var(--ink-secondary);
    cursor: pointer;
    transition:
        border-color var(--dur-fast) var(--ease-out),
        color var(--dur-fast) var(--ease-out);

    &:hover {
        border-color: var(--accent-reference);
        color: var(--accent-reference);
    }

    &--menu {
        display: none;
    }
}

.drawer {
    position: absolute;
    top: 100%;
    inset-inline: 0;
    background-color: var(--surface-raised);
    border-bottom: 1px solid var(--rule-hairline);
    box-shadow: var(--shadow-popover);
    padding: t.$sp-3 t.$sp-4;
    display: flex;
    flex-direction: column;
    gap: 2px;
    z-index: 200;
    animation: drawerSlide var(--dur-base) var(--ease-out);
}

.drawer__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: t.$sp-3;
    padding: t.$sp-3;
    border-radius: t.$r-sm;
    font-family: var(--font-ui);
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--ink-secondary);
    transition:
        background-color var(--dur-fast) var(--ease-out),
        color var(--dur-fast) var(--ease-out);

    i {
        font-size: 0.7rem;
        opacity: 0.7;
    }

    &:hover,
    &.is-active {
        background-color: color-mix(in oklab, var(--accent-primary) 8%, transparent);
        color: var(--accent-primary);
    }

    &--ext {
        color: var(--ink-tertiary);
    }
}

@keyframes drawerSlide {
    from {
        opacity: 0;
        transform: translateY(-8px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 720px) {
    .topbar {
        gap: 0.75rem;
        padding-inline: 1rem;
    }

    .brand__name,
    .brand__slash {
        display: none;
    }

    .nav {
        gap: 0.875rem;
    }

    .nav__link {
        font-size: 0.825rem;
    }

    .icon-btn--menu {
        display: inline-flex;
    }
}

@media (max-width: 480px) {
    .nav {
        display: none;
    }

    .actions {
        justify-self: end;
    }
}

@media (prefers-reduced-motion: reduce) {
    .drawer {
        animation: none;
    }
}
  `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

    readonly isMenuOpen = signal(false);

    toggleMenu(): void {
        this.isMenuOpen.update(v => !v);
    }

    closeMenu(): void {
        this.isMenuOpen.set(false);
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        const el = event.target as HTMLElement;
        if (el.closest('.drawer') || el.closest('.icon-btn--menu')) return;
        this.isMenuOpen.set(false);
    }

    @HostListener('document:keydown.escape')
    onEscape(): void {
        this.isMenuOpen.set(false);
    }
}