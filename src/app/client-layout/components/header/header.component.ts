import {
    Component,
    ChangeDetectionStrategy,
    signal,
    inject,
    DestroyRef,
    NgZone,
    OnInit,
    OnDestroy,
    ElementRef,
    ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { fromEvent, merge, Subject, takeUntil, filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ThemeToggleComponent } from '../../../shared-components/theme-toggle/theme-toggle';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterModule, ThemeToggleComponent],
    template: `
<header class="topbar" role="banner">

    <a class="brand" routerLink="/" aria-label="IBDevLab — الرئيسية">
        <span class="brand__dot" aria-hidden="true"></span>
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
            <span>الأعمال</span>
            <i class="fa-solid fa-arrow-up-left" aria-hidden="true"></i>
        </a>
    </nav>

    <div class="actions">
        <app-theme-toggle />

        <button type="button"
                class="menu-btn"
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
            <span class="drawer__dot" data-line="algo" aria-hidden="true"></span>
            الرئيسية
        </a>
        <a class="drawer__link"
           routerLink="/lab"
           routerLinkActive="is-active"
           (click)="closeMenu()">
            <span class="drawer__dot" data-line="algo" aria-hidden="true"></span>
            المعمل
        </a>
        <a class="drawer__link"
           routerLink="/exp"
           routerLinkActive="is-active"
           (click)="closeMenu()">
            <span class="drawer__dot" data-line="algo" aria-hidden="true"></span>
            الشروحات
        </a>
        <a class="drawer__link drawer__link--ext"
           href="https://ib-portfolio-indol.vercel.app/workspace"
           target="_blank"
           rel="noopener noreferrer"
           (click)="closeMenu()">
            <span class="drawer__dot" data-line="api" aria-hidden="true"></span>
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
    z-index: var(--z-sticky);
}

.topbar {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: t.$sp-6;
    height: 56px;
    padding-inline: var(--gutter);
    background-color: var(--bg-void);
    border-block-end: 1px solid var(--rule-hairline);
}

.brand {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-ui);
    font-size: 0.9375rem;
    color: var(--ink-primary);
    transition: color var(--dur-fast) var(--ease-out);
}

.brand__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--line-algo);
    flex-shrink: 0;
}

.brand__mark {
    font-family: var(--font-mono);
    font-weight: 600;
    color: var(--line-algo);
    letter-spacing: 0.02em;
}

.brand__slash {
    color: var(--ink-tertiary);
    font-weight: 300;
}

.brand__name {
    font-family: var(--font-display);
    font-weight: 700;
    color: var(--ink-primary);
}

.brand:hover .brand__mark {
    color: var(--signal);
}

.nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: t.$sp-6;
    min-width: 0;
}

.nav__link {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding-block: 4px;
    font-family: var(--font-ui);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--ink-secondary);
    white-space: nowrap;
    transition: color var(--dur-fast) var(--ease-out);

    &::after {
        content: "";
        position: absolute;
        inset-inline: 0;
        bottom: -1px;
        height: 1px;
        background-color: var(--line-algo);
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

    &--ext {
        color: var(--ink-tertiary);

        i {
            font-size: 0.65em;
            opacity: 0.7;
        }

        &:hover {
            color: var(--line-api);

            &::after {
                background-color: var(--line-api);
            }
        }
    }
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
    width: 36px;
    height: 36px;
    background-color: transparent;
    border: 1px solid var(--rule-hairline);
    border-radius: t.$r-sm;
    color: var(--ink-secondary);
    transition:
        border-color var(--dur-fast) var(--ease-out),
        color var(--dur-fast) var(--ease-out);

    &:hover {
        border-color: var(--rule-solid);
        color: var(--ink-primary);
    }
}

.drawer {
    position: absolute;
    inset-inline: 0;
    top: 100%;
    background-color: var(--bg-elevated);
    border-block-end: 1px solid var(--rule-hairline);
    box-shadow: var(--ticket-shadow);
    padding: t.$sp-3 var(--gutter);
    display: flex;
    flex-direction: column;
    gap: 2px;
    z-index: var(--z-drawer);
    animation: drawer-slide var(--dur-base) var(--ease-out);
}

@keyframes drawer-slide {
    from {
        opacity: 0;
        transform: translateY(-6px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.drawer__link {
    display: flex;
    align-items: center;
    gap: t.$sp-3;
    padding: t.$sp-3;
    border-radius: t.$r-sm;
    font-family: var(--font-ui);
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--ink-secondary);
    transition:
        background-color var(--dur-fast) var(--ease-out),
        color var(--dur-fast) var(--ease-out);

    i {
        font-size: 0.7em;
        opacity: 0.7;
    }

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
        padding-inline: 16px;
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