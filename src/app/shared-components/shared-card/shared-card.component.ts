import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LivePreviewComponent, StageTone } from '../live-preview/live-preview';

export type SpecimenKind =
  | 'component'
  | 'css-battle'
  | 'problem-solving'
  | 'clean-code'
  | 'fullstack';

@Component({
  selector: 'app-shared-card',
  standalone: true,
  imports: [CommonModule, RouterModule, LivePreviewComponent],
  templateUrl: './shared-card.component.html',
  styleUrl: './shared-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedCardComponent {

  @Input() id = '';
  @Input() kind: SpecimenKind | '' = '';
  @Input() index = 0;

  @Input() title = '';
  @Input() description = '';
  @Input() date = '';
  @Input() tags: string[] = [];
  @Input() projectUrl = '#';
  @Input() project_demo = '';

  @Input() liveHtml = '';
  @Input() liveCss = '';
  @Input() liveJs = '';
  @Input() stage: StageTone = 'auto';

  @Input() videoSrc = '';
  @Input() previewSrc = '';
  @Input() visitText = 'افتح';

  get hasLivePreview(): boolean {
    return !!(this.liveHtml || this.liveCss || this.liveJs);
  }

  get internalHref(): string | null {
    return this.project_demo || null;
  }

  get externalHref(): string | null {
    if (this.project_demo) return null;
    if (!this.projectUrl || this.projectUrl === '#') return null;
    return this.projectUrl;
  }
}