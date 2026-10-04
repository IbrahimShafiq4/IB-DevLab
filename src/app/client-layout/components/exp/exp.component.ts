import {
  Component,
  ChangeDetectionStrategy,
  computed,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedCardComponent } from '../../../shared-components/shared-card/shared-card.component';
import { PaginationService } from '../../services/pagination.service';

interface ProjectExplanation {
  projectUrl: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  date: string;
  projectRouting: string;
  id: string;
}

@Component({
  selector: 'app-exp',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedCardComponent],
  template: `
    <section class="exp-grid">
      @for (project of paged(); track project.id) {
        <app-shared-card
          [id]="project.id"
          [date]="project.date"
          [projectUrl]="project.projectUrl"
          [description]="project.description"
          [title]="project.title"
          [videoSrc]="project.thumbnail"
          [tags]="project.tags"
          [project_demo]="project.projectRouting"
          visitText="افتح" />
      }
    </section>

    @if (totalPages() > 1) {
      <nav class="pager" aria-label="التنقل بين الصفحات">
        <button
          type="button"
          class="pager__step"
          (click)="prevPage()"
          [disabled]="currentPage() === 1"
          aria-label="الصفحة السابقة">
          السابق
        </button>

        <ul class="pager__nums">
          @for (p of pageNumbers(); track p) {
            <li>
              <button
                type="button"
                class="pager__num"
                [class.pager__num--active]="p === currentPage()"
                [attr.aria-current]="p === currentPage() ? 'page' : null"
                (click)="goToPage(p)">
                {{ fmt(p) }}
              </button>
            </li>
          }
        </ul>

        <button
          type="button"
          class="pager__step"
          (click)="nextPage()"
          [disabled]="currentPage() === totalPages()"
          aria-label="الصفحة التالية">
          التالي
        </button>
      </nav>
    }
  `,
  styles: [`
    :host {
      display: block;
      max-width: var(--content-max);
      margin-inline: auto;
      padding-inline: var(--gutter);
      padding-block: var(--sp-8);
    }

    .exp-grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: var(--sp-5);
    }

    .exp-grid > app-shared-card {
      grid-column: span 12;
    }

    @media (min-width: 768px) {
      .exp-grid > app-shared-card:nth-child(4n + 1) { grid-column: span 7; }
      .exp-grid > app-shared-card:nth-child(4n + 2) { grid-column: span 5; }
      .exp-grid > app-shared-card:nth-child(4n + 3) { grid-column: span 5; }
      .exp-grid > app-shared-card:nth-child(4n)     { grid-column: span 7; }
    }

    .pager {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--sp-3);
      padding-block: var(--sp-10);
      flex-wrap: wrap;
    }

    .pager__step {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 72px;
      height: 40px;
      padding: 0 var(--sp-4);
      background-color: transparent;
      border: 1px solid var(--rule-hairline);
      border-radius: var(--r-sm);
      font-family: var(--font-ui);
      font-size: var(--fs-small);
      font-weight: 500;
      color: var(--ink-secondary);
      transition: border-color var(--dur-fast) var(--ease-out),
                  color var(--dur-fast) var(--ease-out);
    }

    .pager__step:hover:not(:disabled) {
      border-color: var(--ink-primary);
      color: var(--ink-primary);
    }

    .pager__step:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .pager__nums {
      display: flex;
      gap: var(--sp-1);
      list-style: none;
    }

    .pager__num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 40px;
      height: 40px;
      padding: 0 var(--sp-2);
      background-color: transparent;
      border: 1px solid var(--rule-hairline);
      border-radius: var(--r-sm);
      font-family: var(--font-mono);
      font-size: var(--fs-small);
      font-weight: 500;
      color: var(--ink-secondary);
      transition: border-color var(--dur-fast) var(--ease-out),
                  color var(--dur-fast) var(--ease-out),
                  background-color var(--dur-fast) var(--ease-out);
    }

    .pager__num:hover:not(.pager__num--active) {
      border-color: var(--ink-primary);
      color: var(--ink-primary);
    }

    .pager__num--active {
      background-color: var(--ink-primary);
      border-color: var(--ink-primary);
      color: var(--ink-inverse);
    }

    @media (max-width: 640px) {
      .pager {
        gap: var(--sp-2);
      }

      .pager__step {
        min-width: 60px;
        padding: 0 var(--sp-3);
      }

      .exp-grid > app-shared-card {
        grid-column: span 12 !important;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpComponent {

  private readonly pagination = inject(PaginationService);

  readonly itemsPerPage = 4;

  readonly projectsExplanations: ProjectExplanation[] = [
    {
      title: '{ HTML, CSS, JS } PROJECTS SHOWCASE',
      description: `A curated playlist of mini-projects built using HTML, CSS, and JavaScript. These projects range from beginner to intermediate level and demonstrate various UI/UX patterns, animations, and interactive elements. Perfect for sharpening core frontend skills.`,
      date: 'May 3, 2025',
      tags: ['Web Development', 'HTML', 'CSS', 'JS'],
      projectUrl: 'https://www.youtube.com/watch?v=9IXZ_qEvF-w&list=PL7S9lp7CuORZGO8goXg2462Cc3dWpisPI',
      thumbnail: './../../../../assets/images/html-css-js.jpeg',
      projectRouting: '/html-css-js',
      id: 'html_js_id',
    },
    {
      title: '🎨 Animated Conic Gradient Pie Chart with Legend',
      description: `This project showcases a visually appealing animated pie chart using pure HTML and CSS. The chart is built with conic-gradient to represent data segments in varying colors, and includes a dynamic rotation animation for enhanced visual engagement. A corresponding legend below the chart uses colored labels and percentage values to clearly describe each section. This component is ideal for dashboards or presentations where aesthetic and clarity are key.`,
      date: 'May 3, 2025',
      tags: ['Web Development', 'HTML', 'CSS'],
      projectUrl: 'https://www.youtube.com/watch?v=yG76tp7NR20&list=PL7S9lp7CuORZGO8goXg2462Cc3dWpisPI&index=8',
      thumbnail: './../../../../assets/images/piechart.png',
      projectRouting: '/pie-chart',
      id: 'pie-chart',
    },
    {
      title: '📰 NEWS APP',
      description: `A news application built with modern frontend technologies. It fetches real-time news from an API and displays it in a clean and responsive layout. Key features include categorized news sections, search functionality, and embedded videos. Ideal for learning API integration and UI design.`,
      date: 'May 12, 2025',
      tags: ['Web Development', 'HTML', 'CSS', 'JS'],
      projectUrl: 'https://www.youtube.com/watch?v=9IXZ_qEvF-w&list=PL7S9lp7CuORbIPgqN7TrnlaboZ_Mos9TD',
      thumbnail: './../../../../assets/images/news app.gif',
      projectRouting: '/news-app',
      id: 'news_app',
    },
  ];

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.projectsExplanations.length / this.itemsPerPage))
  );

  readonly currentPage = computed(() => {
    const total = this.totalPages();
    const cur = this.pagination.page();
    return Math.min(Math.max(1, cur), total);
  });

  readonly paged = computed<ProjectExplanation[]>(() => {
    const page = this.currentPage();
    const start = (page - 1) * this.itemsPerPage;
    return this.projectsExplanations.slice(start, start + this.itemsPerPage);
  });

  readonly pageNumbers = computed<number[]>(() => {
    const total = this.totalPages();
    const cur = this.currentPage();
    const max = 5;

    if (total <= max) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    let start = Math.max(1, cur - 2);
    let end = Math.min(total, start + max - 1);
    if (end - start + 1 < max) {
      start = end - max + 1;
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  });

  goToPage(page: number): void {
    const max = this.totalPages();
    if (page < 1 || page > max) return;
    this.pagination.set(page);

    if (typeof document !== 'undefined') {
      document.getElementById('exp-top')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  nextPage(): void {
    this.goToPage(this.currentPage() + 1);
  }

  prevPage(): void {
    this.goToPage(this.currentPage() - 1);
  }

  fmt(n: number): string {
    return n < 10 ? `0${n}` : String(n);
  }
}