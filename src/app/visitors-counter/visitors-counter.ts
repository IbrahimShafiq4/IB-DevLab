import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Database, ref, objectVal } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-visitors-counter',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="visitor">
      <span class="visitor__icon" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.75">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </span>
      <span class="visitor__label">Visitors</span>
      <span class="visitor__count ltr">{{ (visitorCount$ | async) ?? '—' }}</span>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .visitor {
      display: grid;
      grid-template-columns: 20px 1fr auto;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      background-color: var(--bg-surface);
      border: 1px solid var(--rule-hairline);
      border-radius: var(--r-sm);
      transition: border-color var(--dur-fast) var(--ease-out);

      &:hover {
        border-color: var(--rule-solid);
      }
    }

    .visitor__icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      color: var(--line-api);
      flex-shrink: 0;
    }

    .visitor__label {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      font-weight: 500;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--ink-tertiary);
    }

    .visitor__count {
      font-family: var(--font-mono);
      font-size: 0.875rem;
      font-weight: 700;
      color: var(--signal);
      direction: ltr;
      unicode-bidi: isolate;
      letter-spacing: 0.02em;
    }
  `]
})
export class VisitorsCounterComponent {
  private readonly db = inject(Database);

  readonly visitorCount$: Observable<number | null> = objectVal<number>(
    ref(this.db, 'visits')
  );
}