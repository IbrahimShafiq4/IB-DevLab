import {
    Component,
    ChangeDetectionStrategy,
    signal,
    inject,
    DestroyRef,
    NgZone,
    OnInit,
    OnDestroy,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { fromEvent, merge, Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs/operators';
import { ThemeToggleComponent } from '../../../shared-components/theme-toggle/theme-toggle';
import { CodeThemeToggleComponent } from '../../../shared-components/code-theme-toggle/code-theme-toggle';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterModule, ThemeToggleComponent, CodeThemeToggleComponent],
    template: `
<header class="topbar" role="banner">

    <a class="brand" routerLink="/" aria-label="IBDevLab — الرئيسية">
        <span class="brand__marker" aria-hidden="true">
            <span class="brand__dot"></span>
        </span>
        <span class="brand__text">
            <span class="brand__mark">IB</span><span class="brand__slash">/</span><span class="brand__name">Dev.Lab</span>
        </span>
    </a>

    <nav class="nav" aria-label="التنقل الرئيسي">
        <a class="nav__link"
           routerLink="/"
           routerLinkActive="is-active"
           [routerLinkActiveOptions]="{ exact: true }">
            <span class="nav__marker" aria-hidden="true"></span>
            <span class="nav__label">الرئيسية</span>
        </a>
        <a class="nav__link"
           routerLink="/lab"
           routerLinkActive="is-active">
            <span class="nav__marker" aria-hidden="true"></span>
            <span class="nav__label">المعمل</span>
        </a>
        <a class="nav__link"
           routerLink="/exp"
           routerLinkActive="is-active">
            <span class="nav__marker" aria-hidden="true"></span>
            <span class="nav__label">الشروحات</span>
        </a>
        <a class="nav__link nav__link--ext"
           href="https://ib-portfolio-indol.vercel.app/workspace"
           target="_blank"
           rel="noopener noreferrer">
            <span class="nav__label">الأعمال</span>
            <svg class="nav__ext" width="10" height="10" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
            </svg>
        </a>
    </nav>

    <div class="actions">
        <app-code-theme-toggle />
        <app-theme-toggle />

        <button type="button"
                class="menu-btn"
                (click)="toggleMenu()"
                [attr.aria-expanded]="isMenuOpen()"
                aria-label="القائمة">
            <span class="menu-btn__icon" aria-hidden="true">
                @if (isMenuOpen()) {
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                } @else {
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="3" y1="8" x2="21" y2="8" />
                    <line x1="3" y1="16" x2="21" y2="16" />
                </svg>
                }
            </span>
        </button>
    </div>

    @if (isMenuOpen()) {
    <nav class="drawer" aria-label="القائمة الجانبية">
        <a class="drawer__link"
           routerLink="/"
           routerLinkActive="is-active"
           [routerLinkActiveOptions]="{ exact: true }"
           (click)="closeMenu()">
            <span class="drawer__dot" data-line="algo" aria-hidden="true"></span>
            <span>الرئيسية</span>
        </a>
        <a class="drawer__link"
           routerLink="/lab"
           routerLinkActive="is-active"
           (click)="closeMenu()">
            <span class="drawer__dot" data-line="algo" aria-hidden="true"></span>
            <span>المعمل</span>
        </a>
        <a class="drawer__link"
           routerLink="/exp"
           routerLinkActive="is-active"
           (click)="closeMenu()">
            <span class="drawer__dot" data-line="ds" aria-hidden="true"></span>
            <span>الشروحات</span>
        </a>
        <a class="drawer__link drawer__link--ext"
           href="https://ib-portfolio-indol.vercel.app/workspace"
           target="_blank"
           rel="noopener noreferrer"
           (click)="closeMenu()">
            <span class="drawer__dot" data-line="api" aria-hidden="true"></span>
            <span>الأعمال</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
            </svg>
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
    z-index: var(--z-sticky);
}

.topbar {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: t.$sp-6;
    height: 64px;
    padding-inline: var(--gutter);
    background-color: var(--bg-void);
    border-block-end: 1px solid var(--rule-hairline);
}

.brand {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-family: var(--font-ui);
    color: var(--ink-primary);
    transition: opacity var(--dur-fast) var(--ease-out);

    &:hover {
        opacity: 0.85;
    }
}

.brand__marker {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border: 1.5px solid var(--line-algo);
    border-radius: 50%;
    flex-shrink: 0;

    &::before {
        content: "";
        position: absolute;
        inset: 3px;
        border-radius: 50%;
        background-color: var(--line-algo);
        opacity: 0.15;
    }
}

.brand__dot {
    position: relative;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--line-algo);
}

.brand__text {
    display: inline-flex;
    align-items: baseline;
    gap: 3px;
    font-size: 0.9375rem;
}

.brand__mark {
    font-family: var(--font-mono);
    font-weight: 600;
    color: var(--line-algo);
    letter-spacing: t.$tracking-wide;
}

.brand__slash {
    color: var(--ink-tertiary);
    font-weight: 300;
    font-family: var(--font-mono);
}

.brand__name {
    font-family: var(--font-display);
    font-weight: 700;
    color: var(--ink-primary);
    letter-spacing: -0.01em;
}

.nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 0;
}

.nav__link {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border-radius: var(--r-sm);
    font-family: var(--font-ui);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--ink-secondary);
    white-space: nowrap;
    transition: color var(--dur-fast) var(--ease-out), background-color var(--dur-fast) var(--ease-out);

    &:hover {
        color: var(--ink-primary);
        background-color: color-mix(in oklab, var(--ink-primary) 4%, transparent);
    }

    &.is-active {
        color: var(--ink-primary);

        .nav__marker {
            background-color: var(--line-algo);
            box-shadow: 0 0 0 3px color-mix(in oklab, var(--line-algo) 18%, transparent);
        }
    }

    &--ext {
        color: var(--ink-tertiary);

        .nav__ext {
            opacity: 0.6;
        }

        &:hover {
            color: var(--line-api);
        }
    }
}

.nav__marker {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--ink-tertiary);
    flex-shrink: 0;
    transition: background-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
}

.nav__label {
    line-height: 1;
}

.nav__ext {
    flex-shrink: 0;
    transition: opacity var(--dur-fast) var(--ease-out);
}

.actions {
    display: flex;
    align-items: center;
    gap: t.$sp-2;
}

.menu-btn {
    display: none;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    background-color: transparent;
    border: 1px solid var(--rule-hairline);
    border-radius: var(--r-sm);
    color: var(--ink-secondary);
    transition:
        border-color var(--dur-fast) var(--ease-out),
        color var(--dur-fast) var(--ease-out),
        background-color var(--dur-fast) var(--ease-out);

    &:hover {
        border-color: var(--ink-primary);
        color: var(--ink-primary);
    }
}

.menu-btn__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.drawer {
    position: absolute;
    inset-inline: 0;
    top: 100%;
    background-color: var(--bg-elevated);
    border-block-end: 1px solid var(--rule-hairline);
    box-shadow: var(--ticket-shadow);
    padding: t.$sp-3 var(--gutter) t.$sp-4;
    display: flex;
    flex-direction: column;
    gap: 2px;
    z-index: var(--z-drawer);
    animation: drawer-slide var(--dur-base) var(--ease-out);
}

@keyframes drawer-slide {
    from {
        opacity: 0;
        transform: translateY(-8px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.drawer__link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 14px;
    border-radius: var(--r-sm);
    font-family: var(--font-ui);
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--ink-secondary);
    transition:
        background-color var(--dur-fast) var(--ease-out),
        color var(--dur-fast) var(--ease-out);

    &:hover,
    &.is-active {
        background-color: var(--bg-surface);
        color: var(--ink-primary);
    }

    &--ext {
        color: var(--ink-tertiary);
    }
}

.drawer__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;

    &[data-line="algo"] { background-color: var(--line-algo); }
    &[data-line="ds"]   { background-color: var(--line-ds); }
    &[data-line="api"]  { background-color: var(--line-api); }
}

@media (max-width: 720px) {
    .topbar {
        gap: t.$sp-3;
        padding-inline: 20px;
        height: 60px;
    }

    .nav {
        display: none;
    }

    .menu-btn {
        display: inline-flex;
    }
}

@media (prefers-reduced-motion: reduce) {
    .drawer {
        animation: none;
    }
}
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {

    readonly isMenuOpen = signal(false);

    private readonly destroyRef = inject(DestroyRef);
    private readonly ngZone = inject(NgZone);

    private readonly menuClosed$ = new Subject<void>();

    ngOnInit(): void {
        this.ngZone.runOutsideAngular(() => {
            const click$ = fromEvent<MouseEvent>(document, 'click');
            const escape$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
                filter((e: KeyboardEvent) => e.key === 'Escape')
            );

            merge(click$, escape$)
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe((event: Event) => this.onGlobalEvent(event));
        });
    }

    ngOnDestroy(): void {
        this.menuClosed$.complete();
    }

    toggleMenu(): void {
        this.isMenuOpen.update(v => !v);
    }

    closeMenu(): void {
        if (!this.isMenuOpen()) return;
        this.isMenuOpen.set(false);
    }

    private onGlobalEvent(event: Event): void {
        if (!this.isMenuOpen()) return;

        if (event instanceof KeyboardEvent && event.key === 'Escape') {
            this.closeInsideZone();
            return;
        }

        if (event instanceof MouseEvent) {
            const el = event.target as HTMLElement | null;
            if (!el) return;

            if (el.closest('.drawer') || el.closest('.menu-btn')) return;

            this.closeInsideZone();
        }
    }

    private closeInsideZone(): void {
        this.ngZone.run(() => this.isMenuOpen.set(false));
    }
}