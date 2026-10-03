import {
  Component,
  ChangeDetectionStrategy,
  computed
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SpecimenStageComponent } from '../../../shared-components/specimen-stage/specimen-stage';
import { SPECIMENS } from '../home/specimens.data';

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SpecimenStageComponent
  ],
  template: `
<main class="lab">

    <header class="lab__head">
        <div class="lab__id">
            <span class="lab__tick" aria-hidden="true">§00</span>
            <h1 class="lab__title">المعمل الحيّ</h1>
        </div>
        <p class="lab__lead">
            كل عيّنة بتشتغل من كودها الحقيقي. جرّب، عدّل، وشوف النتيجة فورًا.
        </p>
    </header>

    <app-specimen-stage [specimens]="liveSpecimens()" />

</main>
  `,
  styles: `
    @use "../../../../assets/styles/tokens/tokens" as t;

:host {
    display: block;
    max-width: t.$content-max;
    margin-inline: auto;
}

.lab {
    display: flex;
    flex-direction: column;
    gap: t.$sp-6;
    padding-block: t.$sp-6 t.$sp-12;
}

.lab__head {
    display: flex;
    flex-direction: column;
    gap: t.$sp-3;
    padding-bottom: t.$sp-5;
    border-bottom: 1px solid var(--rule-hairline);
}

.lab__id {
    display: inline-flex;
    align-items: baseline;
    gap: t.$sp-3;
}

.lab__tick {
    font-family: t.$font-mono;
    font-size: t.$fs-nano;
    font-weight: 500;
    letter-spacing: t.$tracking-wider;
    color: var(--accent-primary);
}

.lab__title {
    margin: 0;
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 700;
    line-height: 1.15;
    color: var(--ink-primary);
    letter-spacing: -0.01em;
}

.lab__lead {
    margin: 0;
    font-family: t.$font-ui;
    font-size: t.$fs-body;
    line-height: t.$lh-relaxed;
    color: var(--ink-secondary);
    max-width: 62ch;
}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabComponent {
  readonly liveSpecimens = computed(() =>
    SPECIMENS.filter(s => !!s.source)
  );
}