import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subject, Subscription, debounceTime } from 'rxjs';
import Prism from 'prismjs';
import { CodeFormatterService } from '../../core/services/code-formatter.service';

export type CodeLanguage = 'markup' | 'css' | 'javascript';

export interface CodeFile {
  language: CodeLanguage;
  filename: string;
  code: string;
}

@Component({
  selector: 'app-editable-code-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editable-code-panel.html',
  styleUrl: './editable-code-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableCodePanelComponent implements OnInit, OnDestroy, OnChanges {

  @Input() files: CodeFile[] = [];

  @Output() codeChange = new EventEmitter<{ language: CodeLanguage; code: string }>();
  @Output() resetRequested = new EventEmitter<void>();

  readonly activeIndex = signal(0);
  readonly editing = signal(false);
  readonly copied = signal(false);

  private readonly platformId = inject(PLATFORM_ID);
  private readonly formatter = inject(CodeFormatterService);
  private readonly input$ = new Subject<{ language: CodeLanguage; code: string }>();
  private inputSub?: Subscription;
  private copyTimer?: ReturnType<typeof setTimeout>;

  readonly activeFile = computed(() => this.files[this.activeIndex()] ?? null);

  readonly formattedCode = computed(() => {
    const file = this.activeFile();
    if (!file) return '';
    return this.formatter.format(file.code, file.language);
  });

  readonly highlighted = computed(() => {
    const file = this.activeFile();
    if (!file) return '';
    const pretty = this.formatter.format(file.code, file.language);
    if (!isPlatformBrowser(this.platformId)) return this.escape(pretty);
    const grammar = (Prism.languages as Record<string, unknown>)[file.language];
    if (!grammar) return this.escape(pretty);
    return Prism.highlight(pretty, grammar as Prism.Grammar, file.language);
  });

  ngOnInit(): void {
    this.inputSub = this.input$
      .pipe(debounceTime(300))
      .subscribe(evt => this.codeChange.emit(evt));
  }

  ngOnDestroy(): void {
    this.inputSub?.unsubscribe();
    if (this.copyTimer) clearTimeout(this.copyTimer);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['files'] && !changes['files'].firstChange) {
      const prev: CodeFile[] = changes['files'].previousValue ?? [];
      const next: CodeFile[] = changes['files'].currentValue ?? [];
      const changedSpecimen =
        prev.length !== next.length ||
        prev.some((f, i) => f.language !== next[i]?.language);
      if (changedSpecimen) {
        this.activeIndex.set(0);
        this.editing.set(false);
      }
    }
  }

  selectTab(i: number): void {
    this.activeIndex.set(i);
    this.editing.set(false);
  }

  toggleEdit(): void {
    this.editing.update(v => !v);
  }

  onCodeInput(event: Event): void {
    const file = this.activeFile();
    if (!file) return;
    const value = (event.target as HTMLTextAreaElement).value;
    this.input$.next({ language: file.language, code: value });
  }

  onReset(): void {
    this.resetRequested.emit();
  }

  async copy(): Promise<void> {
    const file = this.activeFile();
    if (!file || !isPlatformBrowser(this.platformId)) return;

    try {
      await navigator.clipboard.writeText(this.formattedCode());
      this.copied.set(true);
      this.copyTimer = setTimeout(() => this.copied.set(false), 1800);
    } catch {
      
    }
  }

  private escape(s: string): string {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}