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
            <span class="lab__dot" aria-hidden="true"></span>
            <h1 class="lab__title">المعمل الحيّ</h1>
        </div>
        <p class="lab__lead">
            كل عيّنة بتشتغل من كودها الحقيقي. جرّب، عدّل، وشوف النتيجة فورًا.
        </p>
    </header>

    <app-specimen-stage [specimens]="liveSpecimens()" />

</main>
  `,
    styles: [`
@use "../../../../assets/styles/tokens/tokens" as t;

:host {
    display: block;
    max-width: t.$content-max;
    margin-inline: auto;
}

.lab {
    display: flex;
    flex-direction: column;
    gap: t.$sp-8;
    padding-block: t.$sp-8 t.$sp-12;
    padding-inline: var(--gutter);
}

.lab__head {
    display: flex;
    flex-direction: column;
    gap: t.$sp-3;
    padding-block-end: t.$sp-5;
    border-block-end: 1px solid var(--rule-hairline);
}

.lab__id {
    display: inline-flex;
    align-items: center;
    gap: t.$sp-3;
}

.lab__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--line-algo);
    flex-shrink: 0;
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
    font-family: var(--font-ui);
    font-size: 1rem;
    line-height: t.$lh-relaxed;
    color: var(--ink-secondary);
    max-width: 62ch;
}
  `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabComponent {
    readonly liveSpecimens = computed(() =>
        SPECIMENS.filter(s => !!s.source)
    );
}