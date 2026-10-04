import {
    Component,
    Input,
    ChangeDetectionStrategy,
    signal,
    computed,
    OnInit,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
    LivePreviewComponent,
    StageTone
} from '../live-preview/live-preview';
import {
    EditableCodePanelComponent,
    CodeFile,
    CodeLanguage
} from '../editable-code-panel/editable-code-panel';
import {
    Specimen,
    SpecimenSource,
    ExtractedSource,
    extractSource
} from '../../core/specimen-registry';

@Component({
    selector: 'app-specimen-stage',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        LivePreviewComponent,
        EditableCodePanelComponent
    ],
    template: `
<section class="stage" aria-labelledby="stage-title">

    <header class="stage__head">
        <div class="stage__id">
            <span class="stage__dot" aria-hidden="true"></span>
            <span class="stage__label">عيّنة حيّة</span>
        </div>

        @if (total() > 0) {
        <div class="stage__counter" aria-live="polite">
            <span>{{ pad(activeIndex() + 1) }}</span>
            <span class="stage__counter-sep">/</span>
            <span>{{ pad(total()) }}</span>
        </div>
        }
    </header>

    @if (activeSpecimen(); as spec) {

    <div class="stage__body">

        <div class="stage__preview-col">
            <div class="stage__viewport">
                <app-live-preview
                    [html]="htmlSource()"
                    [css]="cssSource()"
                    [js]="jsSource()"
                    [title]="spec.title"
                    [tone]="tone()"
                    [interactive]="true" />
            </div>

            <div class="stage__tone" role="radiogroup" aria-label="لون خلفية المعاينة">
                <span class="stage__tone-label">الخلفية</span>
                <div class="stage__tone-options">
                    @for (t of tones; track t.key) {
                    <button type="button"
                            role="radio"
                            class="stage__tone-btn"
                            [class.is-active]="tone() === t.key"
                            [attr.aria-checked]="tone() === t.key"
                            (click)="setTone(t.key)">
                        {{ t.label }}
                    </button>
                    }
                </div>
            </div>
        </div>

        <div class="stage__editor-col">
            <app-editable-code-panel
                [files]="editedFiles()"
                (codeChange)="onCodeChange($event)"
                (resetRequested)="onResetCode()" />
        </div>

    </div>

    <footer class="stage__foot">

        <div class="stage__meta">
            <h2 id="stage-title" class="stage__title">{{ spec.title }}</h2>
            <p class="stage__desc">{{ spec.description }}</p>
        </div>

        <nav class="stage__nav" aria-label="التنقل بين العيّنات">
            <button type="button"
                    class="stage__nav-btn"
                    (click)="prev()"
                    [disabled]="total() < 2"
                    aria-label="العيّنة السابقة">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
                <span>السابق</span>
            </button>

            <a class="stage__nav-btn stage__nav-btn--primary" [routerLink]="spec.href">
                <span>صفحة العيّنة</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </a>

            <button type="button"
                    class="stage__nav-btn"
                    (click)="next()"
                    [disabled]="total() < 2"
                    aria-label="العيّنة التالية">
                <span>التالي</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </button>
        </nav>

    </footer>

    } @else {
    <p class="stage__empty">لا توجد عيّنات حيّة متاحة.</p>
    }

</section>
  `,
    styles: [`
@use "../../../assets/styles/tokens/tokens" as t;

:host {
    display: block;
}

.stage {
    display: flex;
    flex-direction: column;
    gap: t.$sp-6;
    padding-block: t.$sp-6;
    border-block-end: 1px solid var(--rule-hairline);
}

.stage__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: t.$sp-4;
    padding-block-end: t.$sp-3;
    border-block-end: 1px solid var(--rule-hairline);
}

.stage__id {
    display: inline-flex;
    align-items: center;
    gap: t.$sp-2;
}

.stage__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--line-algo);
    flex-shrink: 0;
}

.stage__label {
    font-family: var(--font-ui);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: t.$tracking-wider;
    text-transform: uppercase;
    color: var(--ink-primary);
}

.stage__counter {
    display: inline-flex;
    align-items: baseline;
    gap: 3px;
    padding: 4px 10px;
    border: 1px solid var(--rule-hairline);
    border-radius: t.$r-sm;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--ink-secondary);
    direction: ltr;
    unicode-bidi: isolate;
}

.stage__counter-sep {
    color: var(--ink-tertiary);
    margin-inline: 2px;
}

.stage__body {
    --stage-height: clamp(420px, 42vw, 580px);

    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: t.$sp-4;
    height: var(--stage-height);
    align-items: stretch;
}

.stage__preview-col {
    display: flex;
    flex-direction: column;
    gap: t.$sp-3;
    min-width: 0;
    min-height: 0;
}

.stage__viewport {
    flex: 1 1 auto;
    min-height: 0;
    width: 100%;
    border: 1px solid var(--rule-hairline);
    border-radius: t.$r-sm;
    overflow: hidden;
    background-color: var(--bg-void);
}

.stage__viewport app-live-preview {
    display: block;
    width: 100%;
    height: 100%;
}

.stage__tone {
    display: flex;
    align-items: center;
    gap: t.$sp-3;
    flex-shrink: 0;
}

.stage__tone-label {
    font-family: var(--font-ui);
    font-size: 0.75rem;
    color: var(--ink-tertiary);
}

.stage__tone-options {
    display: inline-flex;
    border: 1px solid var(--rule-hairline);
    border-radius: t.$r-sm;
    overflow: hidden;
}

.stage__tone-btn {
    padding: 5px 12px;
    background-color: transparent;
    border: none;
    border-inline-end: 1px solid var(--rule-hairline);
    font-family: var(--font-ui);
    font-size: 0.75rem;
    color: var(--ink-secondary);
    cursor: pointer;
    transition:
        background-color var(--dur-fast) var(--ease-out),
        color var(--dur-fast) var(--ease-out);

    &:last-child {
        border-inline-end: none;
    }

    &:hover:not(.is-active) {
        background-color: var(--bg-surface);
        color: var(--ink-primary);
    }

    &.is-active {
        background-color: var(--ink-primary);
        color: var(--ink-inverse);
        font-weight: 600;
    }
}

.stage__editor-col {
    min-width: 0;
    min-height: 0;
    display: flex;
}

.stage__editor-col app-editable-code-panel {
    flex: 1 1 auto;
    min-height: 0;
}

.stage__foot {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: t.$sp-6;
    flex-wrap: wrap;
    padding-block-start: t.$sp-5;
    border-block-start: 1px solid var(--rule-hairline);
}

.stage__meta {
    display: flex;
    flex-direction: column;
    gap: t.$sp-2;
    min-width: 0;
    max-width: var(--reading-max);
}

.stage__title {
    margin: 0;
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--ink-primary);
}

.stage__desc {
    margin: 0;
    font-family: var(--font-ui);
    font-size: 0.875rem;
    line-height: t.$lh-relaxed;
    color: var(--ink-secondary);
}

.stage__nav {
    display: flex;
    gap: t.$sp-2;
    flex-shrink: 0;
}

.stage__nav-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    background-color: transparent;
    border: 1px solid var(--rule-hairline);
    border-radius: t.$r-sm;
    font-family: var(--font-ui);
    font-size: 0.875rem;
    color: var(--ink-secondary);
    cursor: pointer;
    text-decoration: none;
    transition:
        border-color var(--dur-fast) var(--ease-out),
        color var(--dur-fast) var(--ease-out);

    svg {
        flex-shrink: 0;
    }

    &:hover:not(:disabled) {
        border-color: var(--ink-primary);
        color: var(--ink-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: not-allowed;
    }

    &--primary {
        background-color: var(--signal);
        border-color: var(--signal);
        color: var(--ink-inverse);
        font-weight: 600;

        &:hover {
            opacity: 0.9;
            color: var(--ink-inverse);
        }
    }
}

.stage__empty {
    margin: 0;
    padding: t.$sp-16;
    text-align: center;
    color: var(--ink-tertiary);
    font-family: var(--font-ui);
    border: 1px dashed var(--rule-solid);
    border-radius: t.$r-sm;
}

@media (max-width: 1024px) {
    .stage__body {
        --stage-height: auto;
        height: auto;
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
    }

    .stage__viewport {
        aspect-ratio: 16 / 10;
        flex: 0 0 auto;
    }

    .stage__editor-col {
        height: 420px;
    }
}

@media (max-width: 640px) {
    .stage__viewport {
        aspect-ratio: 4 / 3;
    }

    .stage__editor-col {
        height: 360px;
    }

    .stage__foot {
        align-items: stretch;
    }

    .stage__nav {
        width: 100%;
        justify-content: space-between;
    }
}

@media (prefers-reduced-motion: reduce) {
    .stage__tone-btn,
    .stage__nav-btn {
        transition: none;
    }
}
  `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpecimenStageComponent implements OnInit, OnChanges {

    @Input() specimens: Specimen[] = [];
    @Input() initialIndex = 0;

    readonly activeIndex = signal(0);
    readonly tone = signal<StageTone>('auto');

    readonly tones: { key: StageTone; label: string }[] = [
        { key: 'auto', label: 'تلقائي' },
        { key: 'light', label: 'فاتح' },
        { key: 'dark', label: 'داكن' }
    ];

    private readonly originalFiles = signal<CodeFile[]>([]);
    readonly editedFiles = signal<CodeFile[]>([]);

    readonly total = computed(() => this.specimens.length);

    readonly activeSpecimen = computed<Specimen | null>(
        () => this.specimens[this.activeIndex()] ?? null
    );

    readonly htmlSource = computed(
        () => this.editedFiles().find(f => f.language === 'markup')?.code ?? ''
    );

    readonly cssSource = computed(
        () => this.editedFiles().find(f => f.language === 'css')?.code ?? ''
    );

    readonly jsSource = computed(
        () => this.editedFiles().find(f => f.language === 'javascript')?.code ?? ''
    );

    ngOnInit(): void {
        if (this.specimens.length) {
            this.loadSpecimen(Math.min(this.initialIndex, this.specimens.length - 1));
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['specimens'] && this.specimens.length) {
            this.loadSpecimen(0);
        }
    }

    loadSpecimen(index: number): void {
        const spec = this.specimens[index];
        if (!spec || !spec.source) return;

        this.activeIndex.set(index);

        const extracted = extractSource(spec.source);
        const files: CodeFile[] = [];

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
        this.tone.set(spec.source.stage ?? 'auto');
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

    next(): void {
        const n = this.total();
        if (!n) return;
        this.loadSpecimen((this.activeIndex() + 1) % n);
    }

    prev(): void {
        const n = this.total();
        if (!n) return;
        this.loadSpecimen((this.activeIndex() - 1 + n) % n);
    }

    setTone(t: StageTone): void {
        this.tone.set(t);
    }

    pad(n: number): string {
        return n < 10 ? `0${n}` : String(n);
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
}