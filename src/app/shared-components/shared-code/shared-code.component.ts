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
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import Prism from 'prismjs';

import { LivePreviewComponent, StageTone } from '../live-preview/live-preview';
import {
  EditableCodePanelComponent,
  CodeFile,
  CodeLanguage
} from '../editable-code-panel/editable-code-panel';
import { EscapeHtmlPipe } from '../../client-layout/pipes/EscapeHtml.pipe';
import { StationStoryComponent } from '../station-story/station-story';
import {
  Specimen,
  SpecimenSource,
  extractSource,
  ExtractedSource,
  QuizQuestion,
  ComplexityInfo,
  PracticeInfo
} from '../../core/specimen-registry';
import { SPECIMENS } from '../../client-layout/components/home/specimens.data';

export interface ICodeLine {
  line: string;
  note: string;
}

export interface ICodeStructure {
  codeTitle: string;
  code: string;
  lines?: ICodeLine[];
  language?: string;
  framework?: string;
}

export interface ICodeSample {
  label: string;
  language: string;
  framework: string;
  code: string;
  notes?: string[];
}

export interface IVisualization {
  kind: 'grid' | 'flow' | 'diagram' | 'ascii' | 'chart';
  title: string;
  caption?: string;
  content: string;
}

export interface ITestingExample {
  title: string;
  framework: string;
  code: string;
}

export interface IApproach {
  name: string;
  tagline: string;
  complexity: { time: string; space: string };
  samples: ICodeSample[];
  tradeoffs: string[];
}

export interface IProblemSolvingRunnable {
  html: string;
  css: string;
  js: string;
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
  approaches?: IApproach[];
  visualization?: IVisualization;
  testing?: ITestingExample[];
  runnable?: IProblemSolvingRunnable;
}

export interface ICleanCodePrinciple {
  title: string;
  icon: string;
  description: string;
  badExample: { title: string; code: string };
  goodExample: { title: string; code: string };
  explanation: string;
  tips?: string[];
  samples?: ICodeSample[];
  visualization?: IVisualization;
  testing?: ITestingExample[];
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
    EditableCodePanelComponent,
    StationStoryComponent,
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
  private readonly sanitizer = inject(DomSanitizer);
  private readonly platformId = inject(PLATFORM_ID);

  @ViewChild('sourceElement') sourceElement?: ElementRef;

  readonly currentSpecimen = signal<Specimen | null>(null);

  readonly extracted = computed<ExtractedSource>(() => {
    const src = this.activeSource();
    if (!src) return { bodyHtml: '', styleCss: '', scriptJs: '' };
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

  readonly storyData = computed(() => {
    const s = this.currentSpecimen();
    if (!s) return null;
    return {
      story: s.story ?? '',
      complexity: s.complexity,
      practice: s.practice,
      quiz: s.quiz,
      next: s.next ?? '',
      nextLabel: this.resolveNextLabel(s.next ?? ''),
    };
  });

  private _lastRunnableKey = '';
  private _lastRunnableSrcdoc: SafeHtml | null = null;

  get problemRunnableSrcdoc(): SafeHtml {
    if (!isPlatformBrowser(this.platformId)) {
      if (!this._lastRunnableSrcdoc) {
        this._lastRunnableSrcdoc = this.sanitizer.bypassSecurityTrustHtml('');
      }
      return this._lastRunnableSrcdoc;
    }

    const r = this.problemSolvingContent?.runnable;
    const key = r ? (r.html + '||' + r.css + '||' + r.js) : '';

    if (key === this._lastRunnableKey && this._lastRunnableSrcdoc) {
      return this._lastRunnableSrcdoc;
    }

    this._lastRunnableKey = key;
    this._lastRunnableSrcdoc = this.sanitizer.bypassSecurityTrustHtml(
      r ? this.buildProblemRunnableDoc(r) : ''
    );
    return this._lastRunnableSrcdoc;
  }

  private buildProblemRunnableDoc(runnable: IProblemSolvingRunnable): string {
    const tokens = this.readCodeThemeTokens();

    const csp =
      "default-src 'none'; " +
      "style-src 'unsafe-inline'; " +
      "img-src data: blob: https:; " +
      "font-src data:; " +
      "script-src 'unsafe-inline'; " +
      "connect-src 'none';";

    return `<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Security-Policy" content="${csp}">
<style>
${tokens}
${runnable.css}
</style>
</head>
<body>
${runnable.html}
<script>${runnable.js}<\/script>
</body>
</html>`;
  }

  private readCodeThemeTokens(): string {
    if (!isPlatformBrowser(this.platformId)) return '';
    const styles = getComputedStyle(document.documentElement);
    const keys = [
      '--ct-bg', '--ct-bg-elevated', '--ct-border', '--ct-text',
      '--ct-comment', '--ct-keyword', '--ct-string', '--ct-number',
      '--ct-function', '--ct-tag', '--ct-attr', '--ct-operator',
      '--ct-punctuation', '--ct-selection', '--ct-cursor',
      '--ct-scroll-track', '--ct-scroll-thumb', '--ct-scroll-thumb-hover',
    ];
    return `:root { ${keys
      .map(k => `${k}: ${styles.getPropertyValue(k).trim() || 'initial'};`)
      .join(' ')} }`;
  }

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

    if (spec) {
      this.currentSpecimen.set(spec);
    }

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

  private resolveNextLabel(nextId: string): string {
    if (!nextId) return '';
    const nextSpec = SPECIMENS.find(s => s.id === nextId);
    return nextSpec?.title ?? nextId;
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
      'JavaScript': { icon: 'js', type: 'brands' },
      'TypeScript': { icon: 'code', type: 'brands' },
      'C#': { icon: 'code', type: 'solid' },
      'CSharp': { icon: 'code', type: 'solid' },
      'Angular': { icon: 'angular', type: 'brands' },
      'Database': { icon: 'database', type: 'solid' },
      'SQL': { icon: 'database', type: 'solid' },
      'EFCore': { icon: 'database', type: 'solid' },
      'LINQ': { icon: 'code', type: 'solid' },
      'Problem Solving': { icon: 'brain', type: 'solid' },
      'LeetCode': { icon: 'code', type: 'solid' },
      'Clean Code': { icon: 'broom', type: 'solid' },
      'Formatting': { icon: 'align-left', type: 'solid' },
      'Software Engineering': { icon: 'gears', type: 'solid' },
      'Best Practices': { icon: 'star', type: 'solid' },
      'Refactoring': { icon: 'wrench', type: 'solid' },
      'Linked List': { icon: 'link', type: 'solid' },
      'Two Pointers': { icon: 'arrow-pointer', type: 'solid' },
      'String': { icon: 'font', type: 'solid' },
      'Math': { icon: 'calculator', type: 'solid' },
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