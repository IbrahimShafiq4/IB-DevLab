import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';
import { CLEAN_CODE_ENTRIES, CleanCodeEntry } from './clean-code.data.ts';

@Component({
  selector: 'app-clean-code-page',
  standalone: true,
  imports: [SharedCodeComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
        @if (entry(); as e) {
            <app-shared-code
                [tags]="e.projectTags"
                [projectDate]="e.projectDate"
                [projectDescription]="e.projectDescription"
                [projectVersion]="e.projectVersion"
                [projectName]="e.projectName"
                [isItCleanCode]="true"
                [isProjectHasNotAssists]="false"
                [cleanCodeContent]="e.cleanCodeContent"
            />
        } @else {
            <p style="padding: 40px; text-align: center; color: #888;">
                Clean Code chapter غير موجود.
            </p>
        }
    `
})
export class CleanCodePageComponent {

  private readonly route = inject(ActivatedRoute);

  readonly entry = signal<CleanCodeEntry | null>(null);

  constructor() {
    this.route.data
      .pipe(takeUntilDestroyed())
      .subscribe(data => this.load(data['cleanCodeId'] as string));
  }

  private load(id: string | undefined): void {
    if (!id) return;
    this.entry.set(CLEAN_CODE_ENTRIES[id] ?? null);
  }
}