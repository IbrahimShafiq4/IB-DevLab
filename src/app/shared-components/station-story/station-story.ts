import {
  Component,
  Input,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  QuizQuestion,
  ComplexityInfo,
  PracticeInfo,
} from '../../core/specimen-registry';

@Component({
  selector: 'app-station-story',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
@if (story || complexity || practice || quiz?.length || next) {
<section class="story" aria-label="تفاصيل المحطة">

  @if (story) {
  <article class="sect">
    <header class="sect__head">
      <span class="sect__dot" data-line="algo" aria-hidden="true"></span>
      <h2 class="sect__title">الحكاية</h2>
      <span class="sect__rule" aria-hidden="true"></span>
    </header>
    <div class="sect__body" dir="rtl">
      @for (paragraph of storyParagraphs(); track $index) {
        <p>{{ paragraph }}</p>
      }
    </div>
  </article>
  }

  @if (complexity) {
  <article class="sect">
    <header class="sect__head">
      <span class="sect__dot" data-line="ds" aria-hidden="true"></span>
      <h2 class="sect__title">Complexity</h2>
      <span class="sect__rule" aria-hidden="true"></span>
    </header>
    <div class="complexity">
      <div class="complexity__card">
        <span class="complexity__label">الوقت</span>
        <strong class="complexity__value ltr">{{ complexity.time }}</strong>
      </div>
      <div class="complexity__card">
        <span class="complexity__label">المساحة</span>
        <strong class="complexity__value ltr">{{ complexity.space }}</strong>
      </div>
    </div>
    <p class="complexity__explanation" dir="rtl">{{ complexity.explanation }}</p>
  </article>
  }

  @if (practice) {
  <article class="sect">
    <header class="sect__head">
      <span class="sect__dot" data-line="api" aria-hidden="true"></span>
      <h2 class="sect__title">جرّب بنفسك</h2>
      <span class="sect__rule" aria-hidden="true"></span>
    </header>
    <div class="practice" dir="rtl">
      <p>{{ practice.prompt }}</p>
      @if (practice.hint) {
        <details class="practice__hint">
          <summary>شوف التلميح</summary>
          <p>{{ practice.hint }}</p>
        </details>
      }
    </div>
  </article>
  }

  @if (quiz?.length) {
  <article class="sect">
    <header class="sect__head">
      <span class="sect__dot" data-line="algo" aria-hidden="true"></span>
      <h2 class="sect__title">اختبار سريع</h2>
      <span class="sect__rule" aria-hidden="true"></span>
    </header>

    <ol class="quiz" dir="rtl">
      @for (q of quiz; track $index; let qi = $index) {
        <li class="quiz__item">
          <p class="quiz__question">{{ q.question }}</p>
          <ul class="quiz__options">
            @for (opt of q.options; track $index; let oi = $index) {
              <li>
                <button type="button"
                        class="quiz__option"
                        [class.is-selected]="selectedAnswers()[qi] === oi"
                        [class.is-correct]="revealed()[qi] && oi === q.correct"
                        [class.is-wrong]="revealed()[qi] && selectedAnswers()[qi] === oi && oi !== q.correct"
                        [disabled]="revealed()[qi] || false"
                        (click)="pick(qi, oi)">
                  <span class="quiz__option-marker ltr">
                    {{ ['A','B','C','D'][oi] }}
                  </span>
                  <span class="quiz__option-text">{{ opt }}</span>
                </button>
              </li>
            }
          </ul>

          @if (revealed()[qi]) {
            <div class="quiz__explain" [class.is-correct]="isCorrect(qi)">
              <strong>{{ isCorrect(qi) ? '✓ صح' : '✕ غلط' }}</strong>
              <p>{{ q.explanation }}</p>
            </div>
          }
        </li>
      }
    </ol>
  </article>
  }

  @if (next) {
  <nav class="next" aria-label="المحطة الجاية">
    <span class="next__label">المحطة الجاية</span>
    <a class="next__link" [routerLink]="next">
      <span>{{ nextLabel }}</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" aria-hidden="true">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </a>
  </nav>
  }

</section>
}
  `,
  styleUrl: './station-story.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StationStoryComponent {

  @Input() story = '';
  @Input() complexity?: ComplexityInfo;
  @Input() practice?: PracticeInfo;
  @Input() quiz?: QuizQuestion[];
  @Input() next = '';
  @Input() nextLabel = '';

  readonly selectedAnswers = signal<Record<number, number>>({});
  readonly revealed = signal<Record<number, boolean>>({});

  readonly storyParagraphs = computed(() => {
    if (!this.story) return [];
    return this.story
      .split(/\n\s*\n/)
      .map(p => p.trim())
      .filter(Boolean);
  });

  pick(questionIndex: number, optionIndex: number): void {
    if (this.revealed()[questionIndex]) return;
    this.selectedAnswers.update(m => ({ ...m, [questionIndex]: optionIndex }));
    this.revealed.update(m => ({ ...m, [questionIndex]: true }));
  }

  isCorrect(questionIndex: number): boolean {
    const q = this.quiz?.[questionIndex];
    if (!q) return false;
    return this.selectedAnswers()[questionIndex] === q.correct;
  }
}