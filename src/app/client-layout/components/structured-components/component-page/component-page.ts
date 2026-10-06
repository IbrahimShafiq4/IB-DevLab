import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';
import { COMPONENT_ENTRIES, ComponentEntry } from './component-sources.data';

@Component({
  selector: 'app-component-page',
  standalone: true,
  imports: [SharedCodeComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
        @if (entry(); as e) {
            <app-shared-code
                [tags]="e.projectTags"
                [HTMLCodeSnippet]="e.HTMLCodeSnippets ?? []"
                [CSSCodeSnippet]="e.CSSCodeSnippets ?? []"
                [JSCodeSnippet]="e.JSCodeSnippets ?? []"
                [projectDate]="e.projectDate"
                [projectDescription]="e.projectDescription"
                [projectVersion]="e.projectVersion"
                [projectName]="e.projectName"
                [zipFile]="e.zipFile"
                [liveHtml]="e.liveHtml ?? ''"
                [liveCss]="e.liveCss ?? ''"
                [liveJs]="e.liveJs ?? ''"
                [projectOnYoutube]="e.projectOnYoutube ?? ''"
            />
        } @else {
            <p style="padding: 40px; text-align: center; color: #888;">
                Component غير موجود.
            </p>
        }
    `
})
export class ComponentPageComponent {

  private readonly route = inject(ActivatedRoute);

  readonly entry = signal<ComponentEntry | null>(null);

  constructor() {
    this.route.data
      .pipe(takeUntilDestroyed())
      .subscribe(data => this.load(data['componentId'] as string));
  }

  private load(id: string | undefined): void {
    if (!id) return;
    this.entry.set(COMPONENT_ENTRIES[id] ?? null);
  }
}