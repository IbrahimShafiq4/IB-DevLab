import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  inject,
  ChangeDetectionStrategy,
  signal,
  computed,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import Prism from 'prismjs';

import { LivePreviewComponent, StageTone } from '../live-preview/live-preview';
import {
  EditableCodePanelComponent,
  CodeFile,
  CodeLanguage
} from '../editable-code-panel/editable-code-panel';
import { EscapeHtmlPipe } from '../../client-layout/pipes/EscapeHtml.pipe';
import {
  Specimen,
  SpecimenSource,
  extractSource,
  ExtractedSource
} from '../../core/specimen-registry';
import { SPECIMENS } from '../../client-layout/components/home/specimens.data';

export interface ICodeStructure {
  codeTitle: string;
  code: string;
}

export interface IProblemSolvingContent {
  problem: string;
  generalIdea: string;
  solutionIdea: string;
  steps: string[];
  example?: { input: string; output: string; explanation: string };
  complexity: { time: string; space: string };
  code: ICodeStructure[];
  learned: string[];
}

export interface ICleanCodePrinciple {
  title: string;
  icon: string;
  description: string;
  badExample: { title: string; code: string };
  goodExample: { title: string; code: string };
  explanation: string;
  tips?: string[];
}

export interface ICleanCodeContent {
  introduction: string;
  story: string;
  principles: ICleanCodePrinciple[];
  quote?: { text: string; author: string };
  keyTakeaways: string[];
  references?: string[];
  hashtags?: string[];
}

@Component({
  selector: 'app-shared-code',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    EscapeHtmlPipe,
    LivePreviewComponent,
    EditableCodePanelComponent
  ],
  templateUrl: './shared-code.component.html',
  styleUrls: ['./shared-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedCodeComponent implements OnInit, AfterViewInit {

  @Input() HTMLCodeSnippet: ICodeStructure[] = [];
  @Input() CSSCodeSnippet: ICodeStructure[] = [];
  @Input() JSCodeSnippet: ICodeStructure[] = [];

  @Input() projectName = '';
  @Input() projectDescription = '';
  @Input() projectVersion = '';
  @Input() projectDate = '';
  @Input() zipFile = '';

  @Input() isProjectHasNotAssists = true;
  @Input() projectOnYoutube = '';
  @Input() project_demo = '';

  @Input() isItCssBattle = false;
  @Input() isItProblemSolving = false;
  @Input() isItCleanCode = false;

  @Input() problemSolvingContent: IProblemSolvingContent | null = null;
  @Input() cleanCodeContent: ICleanCodeContent | null = null;

  @Input() tags: string[] = [];
  @Input() initialTone: StageTone = 'auto';

  @Input() liveHtml = '';
  @Input() liveCss = '';
  @Input() liveJs = '';

  isItCopied = false;
  copiedIndex: number | null = null;

  readonly tone = signal<StageTone>('auto');
  readonly editedFiles = signal<CodeFile[]>([]);
  private readonly originalFiles = signal<CodeFile[]>([]);
  readonly activeSource = signal<SpecimenSource | null>(null);

  readonly tones: { key: StageTone; label: string }[] = [
    { key: 'auto', label: 'تلقائي' },
    { key: 'light', label: 'فاتح' },
    { key: 'dark', label: 'داكن' }
  ];

  private readonly _router = inject(Router);
  private readonly _route = inject(ActivatedRoute);

  @ViewChild('sourceElement') sourceElement?: ElementRef;

  readonly extracted = computed<ExtractedSource>(() => {
    const src = this.activeSource();
    if (!src) {
      return { bodyHtml: '', styleCss: '', scriptJs: '' };
    }
    return extractSource(src);
  });

  readonly hasLive = computed(() => {
    const e = this.extracted();
    return !!(e.bodyHtml || e.styleCss || e.scriptJs);
  });

  readonly liveHtmlSource = computed(
    () => this.editedFiles().find(f => f.language === 'markup')?.code ?? ''
  );
  readonly liveCssSource = computed(
    () => this.editedFiles().find(f => f.language === 'css')?.code ?? ''
  );
  readonly liveJsSource = computed(
    () => this.editedFiles().find(f => f.language === 'javascript')?.code ?? ''
  );

  get hasYoutubePreview(): boolean {
    return !!this.projectOnYoutube && !this.isItProblemSolving && !this.isItCleanCode;
  }

  ngOnInit(): void {
    this.tone.set(this.initialTone);
    this.loadFromRegistry();
  }

  ngAfterViewInit(): void {
    Prism.highlightAll();
  }

  private loadFromRegistry(): void {
    const url = this._router.url.split('?')[0].split('#')[0];
    const spec = SPECIMENS.find(s => s.href === url) as Specimen | undefined;

    if (spec?.source) {
      this.activeSource.set(spec.source);
      this.tone.set(spec.source.stage ?? this.initialTone);
      this.rebuildFromSource(spec.source);
      return;
    }

    if (this.liveHtml || this.liveCss || this.liveJs) {
      this.rebuildFromLegacy();
      return;
    }

    if (this.HTMLCodeSnippet.length || this.CSSCodeSnippet.length || this.JSCodeSnippet.length) {
      this.rebuildFromSnippets();
    }
  }

  private reconstructHtml(extracted: ExtractedSource): string {
    const lines: string[] = [
      '<!DOCTYPE html>',
      '<html lang="en">',
      '<head>',
      '  <meta charset="UTF-8">',
      '  <meta name="viewport" content="width=device-width, initial-scale=1.0">'
    ];

    if (extracted.styleCss) {
      lines.push('  <link rel="stylesheet" href="style.css">');
    }

    lines.push('</head>', '<body>');

    if (extracted.bodyHtml) {
      lines.push(this.indent(extracted.bodyHtml, 2));
    }

    if (extracted.scriptJs) {
      lines.push('  <script src="main.js"><\/script>');
    }

    lines.push('</body>', '</html>');
    return lines.join('\n');
  }

  private indent(text: string, spaces: number): string {
    const pad = ' '.repeat(spaces);
    return text.split('\n').map(line => pad + line).join('\n');
  }

  private rebuildFromSource(src: SpecimenSource): void {
    const files: CodeFile[] = [];
    const extracted = extractSource(src);

    if (extracted.bodyHtml) {
      files.push({
        language: 'markup',
        filename: 'index.html',
        code: this.reconstructHtml(extracted)
      });
    }

    if (extracted.styleCss) {
      files.push({
        language: 'css',
        filename: 'style.css',
        code: extracted.styleCss
      });
    }

    if (extracted.scriptJs) {
      files.push({
        language: 'javascript',
        filename: 'main.js',
        code: extracted.scriptJs
      });
    }

    this.originalFiles.set(files.map(f => ({ ...f })));
    this.editedFiles.set(files.map(f => ({ ...f })));
  }

  private rebuildFromLegacy(): void {
    const files: CodeFile[] = [];
    if (this.liveHtml) files.push({ language: 'markup', filename: 'index.html', code: this.liveHtml });
    if (this.liveCss) files.push({ language: 'css', filename: 'style.css', code: this.liveCss });
    if (this.liveJs) files.push({ language: 'javascript', filename: 'main.js', code: this.liveJs });
    this.originalFiles.set(files.map(f => ({ ...f })));
    this.editedFiles.set(files.map(f => ({ ...f })));
  }

  private rebuildFromSnippets(): void {
    const files: CodeFile[] = [];
    const html = this.HTMLCodeSnippet[0]?.code;
    const css = this.CSSCodeSnippet[0]?.code;
    const js = this.JSCodeSnippet[0]?.code;

    if (html) files.push({ language: 'markup', filename: 'index.html', code: html });
    if (css) files.push({ language: 'css', filename: 'style.css', code: css });
    if (js) files.push({ language: 'javascript', filename: 'main.js', code: js });

    this.originalFiles.set(files.map(f => ({ ...f })));
    this.editedFiles.set(files.map(f => ({ ...f })));
  }

  onCodeChange(evt: { language: CodeLanguage; code: string }): void {
    this.editedFiles.set(
      this.editedFiles().map(f =>
        f.language === evt.language ? { ...f, code: evt.code } : f
      )
    );
  }

  onResetCode(): void {
    this.editedFiles.set(this.originalFiles().map(f => ({ ...f })));
  }

  setTone(t: StageTone): void {
    this.tone.set(t);
  }

  scrollToSource(): void {
    setTimeout(() => {
      this.sourceElement?.nativeElement?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  }

  getTagIcon(tag: string): string {
    const iconMap: Record<string, { icon: string; type: 'solid' | 'brands' }> = {
      'Web Development': { icon: 'desktop', type: 'solid' },
      'HTML': { icon: 'html5', type: 'brands' },
      'CSS': { icon: 'css3-alt', type: 'brands' },
      'JS': { icon: 'js', type: 'brands' },
      'Angular': { icon: 'angular', type: 'brands' },
      'React': { icon: 'react', type: 'brands' },
      'Database': { icon: 'database', type: 'solid' },
      'API': { icon: 'server', type: 'solid' },
      'Problem Solving': { icon: 'brain', type: 'solid' },
      'LeetCode': { icon: 'code', type: 'solid' },
      'TypeScript': { icon: 'code', type: 'brands' },
      'JavaScript': { icon: 'js', type: 'brands' },
      'Clean Code': { icon: 'broom', type: 'solid' },
      'CleanCode': { icon: 'broom', type: 'solid' },
      'Software Engineering': { icon: 'gears', type: 'solid' },
      'Best Practices': { icon: 'star', type: 'solid' },
      'Refactoring': { icon: 'wrench', type: 'solid' },
      'Design Patterns': { icon: 'shapes', type: 'solid' },
      'Uncle Bob': { icon: 'book', type: 'solid' },
      'MeaningfulNames': { icon: 'tag', type: 'solid' },
      'DomainDrivenDesign': { icon: 'landmark', type: 'solid' },
      'DDD': { icon: 'landmark', type: 'solid' },
      'Domain': { icon: 'landmark', type: 'solid' },
      'Functions': { icon: 'code', type: 'solid' },
      'Comments': { icon: 'comment-slash', type: 'solid' },
      'Documentation': { icon: 'file-lines', type: 'solid' },
      'CSharp': { icon: 'microsoft', type: 'brands' },
      'C#': { icon: 'microsoft', type: 'brands' },
      'DotNet': { icon: 'microsoft', type: 'brands' },
      'ChatterHub': { icon: 'comments', type: 'solid' },
      'SOLID': { icon: 'cubes-stacked', type: 'solid' },
      'ASP.NET': { icon: 'microsoft', type: 'brands' },
      'Battle': { icon: 'palette', type: 'solid' },
      'UI': { icon: 'palette', type: 'solid' },
      'Text': { icon: 'font', type: 'solid' },
      'Animation': { icon: 'wand-magic-sparkles', type: 'solid' },
      'Hover': { icon: 'hand-pointer', type: 'solid' },
      '3D': { icon: 'cube', type: 'solid' },
      'Scroll': { icon: 'arrows-up-down', type: 'solid' },
      'SVG': { icon: 'bezier-curve', type: 'solid' },
      'Mask': { icon: 'mask', type: 'solid' },
      'Utility': { icon: 'toolbox', type: 'solid' },
      'Tool': { icon: 'wrench', type: 'solid' },
      'Linked List': { icon: 'link', type: 'solid' },
      'Two Pointers': { icon: 'arrow-pointer', type: 'solid' },
      'String': { icon: 'font', type: 'solid' },
      'Binary Search': { icon: 'magnifying-glass', type: 'solid' },
      'عربي': { icon: 'language', type: 'solid' }
    };
    const selected = iconMap[tag] ?? { icon: 'tag', type: 'solid' as const };
    return `fa-${selected.type} fa-${selected.icon}`;
  }

  onCopy(text: string, index?: number): void {
    if (index !== undefined) {
      this.copiedIndex = index;
      setTimeout(() => { this.copiedIndex = null; }, 2000);
    } else {
      this.isItCopied = !this.isItCopied;
      setTimeout(() => { this.isItCopied = !this.isItCopied; }, 3000);
    }
    navigator.clipboard.writeText(text);
  }

  async downloadZip(): Promise<void> {
    try {
      const response = await fetch(this.zipFile);
      if (!response.ok) throw new Error('File not found');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${this.projectName.replace(/\s+/g, '_')}.rar`;
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download unavailable. Please try again later.');
    }
  }

  onNavigateBack(): void {
    this._router.navigate(['/'], { relativeTo: this._route });
  }
}