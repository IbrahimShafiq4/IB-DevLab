import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
    selector: 'app-css-battle-p4',
    imports: [SharedCodeComponent],
    templateUrl: './css-battle-p4.html',
    styleUrl: './css-battle-p4.scss'
})
export class CssBattleP4 {
    projectName: string = 'CSS Battle – Sticks Reflection Challenge';
    projectDescription: string = `
CSS Battle challenge using a single HTML element.

The design uses -webkit-box-reflect for mirroring,
and ::before / ::after pseudo-elements with borders
and transforms to create circular shapes.
All visuals are built using pure CSS only.
`;

    projectDate: string = 'Last updated: Jan 2026';
    projectVersion: string = 'v1.1.0';
    projectTags: string[] = ['Web Development', 'HTML', 'CSS'];
    projectVideSrc: string = './../../../../../assets/video-samples/cssbattle/reflect_1.png';

    HTMLCodeSnippets: ICodeStructure[] = [
        {
            code: `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sticks</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="project-view">
        <div class="p"></div>
    </div>
</body>

</html>
    `,
            codeTitle: 'index.html'
        }
    ];

    CSSCodeSnippets: ICodeStructure[] = [
        {
            code: `
:root {
    --bg: #B6EBE7;
    --sticks-bg: #5E2BB7;
    --circled-bg: #9382E4;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: var(--bg);
}

.project-view {
    width: 400px;
    height: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    border-radius: 5px;

}

.p {
    position: absolute;
    left: 10px;
    bottom: 0px;
    width: 30px;
    height: 120px;
    background: var(--sticks-bg);
    -webkit-box-reflect: right 320px;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        border: 30px solid var(--circled-bg);
        border-bottom: 30px solid transparent;
        border-right: 30px solid transparent;
        border-radius: 50%;
    }

    &::before {
        top: -70px;
        left: 5px;
        transform: rotate(45deg) translateX(10.5px) translateY(17.5px);
    }

    &::after {
        top: -30px;
        left: 65px;
        transform: rotate(-135deg) translateX(10.5px) translateY(17.5px);
        border: 30px solid var(--circled-bg);
    }
}
    `,
            codeTitle: 'style.css'
        }
    ];

    zipFile: string = 'assets/zip-files/cssBattle/04 - p4.rar';
}

