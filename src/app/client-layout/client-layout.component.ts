import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { InfoMenuComponent } from './components/info-menu/info-menu.component';

@Component({
  standalone: true,
  selector: 'app-client-layout',
  imports: [RouterModule, HeaderComponent, InfoMenuComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip-link" href="#main-content">تخطَّ إلى المحتوى</a>

    <div class="lab-shell app-grid">
      <app-header />

      <div class="lab-shell__body">
        <main id="main-content" class="lab-shell__main" role="main">
          <router-outlet />
        </main>

        <aside class="lab-shell__sidebar" role="complementary" aria-label="معلومات شخصية">
          <app-info-menu />
        </aside>
      </div>
    </div>
  `,
  styles: [`
@use '../../assets/styles/tokens/tokens' as t;

:host {
    display: block;
}

.skip-link {
    position: absolute;
    top: -100px;
    inset-inline-start: 1rem;
    padding: 0.5rem 1rem;
    background: var(--accent-primary);
    color: var(--ink-inverse);
    border-radius: t.$r-sm;
    z-index: 999;
    transition: top var(--dur-fast) var(--ease-out);
    font-family: var(--font-ui);
    font-size: 0.9rem;
}

.skip-link:focus {
    top: 0.75rem;
}

.lab-shell {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
}

.lab-shell__body {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 0;
    flex: 1;
    min-height: 0;
}

.lab-shell__main {
    padding: clamp(1.25rem, 3vw, 2.25rem) clamp(1rem, 3vw, 2rem);
    min-width: 0;
}

.lab-shell__sidebar {
    padding: 1.75rem 1.25rem;
    border-inline-start: 1px solid var(--rule-hairline);
    background-color: color-mix(in oklab, var(--bg-void) 88%, transparent);
    backdrop-filter: saturate(140%) blur(8px);
    -webkit-backdrop-filter: saturate(140%) blur(8px);
    position: sticky;
    top: 52px;
    align-self: start;
    max-height: calc(100dvh - 52px);
    overflow-y: auto;
}

@media (max-width: 1024px) {
    .lab-shell__body {
        grid-template-columns: 1fr;
    }

    .lab-shell__sidebar {
        position: static;
        max-height: none;
        border-inline-start: none;
        border-top: 1px solid var(--rule-hairline);
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
    }
}

@media (max-width: 640px) {
    .lab-shell__main {
        padding: 1rem;
    }

    .lab-shell__sidebar {
        padding: 1.25rem 1rem;
    }
}
  `]
})
export class ClientLayoutComponent { }