import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import {
  SharedCodeComponent,
  IProblemSolvingContent
} from '../../../../shared-components/shared-code/shared-code.component';
import { PROBLEM_SOLVING_ENTRIES, ProblemSolvingEntry } from './problem-solving.data';

@Component({
  selector: 'app-problem-solving-page',
  standalone: true,
  imports: [SharedCodeComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
        @if (entry(); as e) {
            <app-shared-code
                [projectName]="e.projectName"
                [projectDescription]="e.projectDescription"
                [projectDate]="e.projectDate"
                [projectVersion]="e.projectVersion"
                [tags]="e.tags"
                [isItProblemSolving]="true"
                [isProjectHasNotAssists]="false"
                [problemSolvingContent]="e.problemSolvingContent"
            />
        } @else {
            <p style="padding: 40px; text-align: center; color: #888;">
                Problem غير موجود.
            </p>
        }
    `
})
export class ProblemSolvingPageComponent {

  private readonly route = inject(ActivatedRoute);

  readonly entry = signal<ProblemSolvingEntry | null>(null);

  constructor() {
    this.route.data
      .pipe(takeUntilDestroyed())
      .subscribe(data => this.loadEntry(data['problemId'] as string));
  }

  private loadEntry(id: string | undefined): void {
    if (!id) return;
    const entry = PROBLEM_SOLVING_ENTRIES[id];
    this.entry.set(entry ?? null);
  }
}