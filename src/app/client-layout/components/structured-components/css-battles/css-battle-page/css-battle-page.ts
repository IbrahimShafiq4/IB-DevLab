import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SharedCodeComponent, ICodeStructure } from '../../../../../shared-components/shared-code/shared-code.component';
import { CssBattleEntry, CSS_BATTLES } from '../css-battles.data';

@Component({
  selector: 'app-css-battle-page',
  standalone: true,
  imports: [SharedCodeComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
        @if (battle(); as b) {
            <app-shared-code
                [tags]="b.tags"
                [HTMLCodeSnippet]="htmlSnippets()"
                [CSSCodeSnippet]="cssSnippets()"
                [projectDate]="b.date"
                [projectDescription]="b.description"
                [projectVersion]="b.version"
                [projectName]="b.title"
                [isItCssBattle]="true"
                [projectOnYoutube]="b.youtube ?? ''"
                [zipFile]="b.zipFile"
            />
        } @else {
            <p style="padding: 40px; text-align: center; color: #888;">
                CSS Battle غير موجود.
            </p>
        }
    `
})
export class CssBattlePageComponent {

  private readonly route = inject(ActivatedRoute);

  readonly battle = signal<CssBattleEntry | null>(null);

  readonly htmlSnippets = signal<ICodeStructure[]>([]);
  readonly cssSnippets = signal<ICodeStructure[]>([]);

  constructor() {
    this.route.data
      .pipe(takeUntilDestroyed())
      .subscribe(data => this.loadBattle(data['battleId'] as string));
  }

  private loadBattle(id: string | undefined): void {
    if (!id) return;

    const battle = CSS_BATTLES[id];
    if (!battle) {
      this.battle.set(null);
      return;
    }

    this.battle.set(battle);

    this.htmlSnippets.set([
      { code: battle.html, codeTitle: 'index.html' }
    ]);

    this.cssSnippets.set(
      battle.css
        ? [{ code: battle.css, codeTitle: 'style.css' }]
        : []
    );
  }
}