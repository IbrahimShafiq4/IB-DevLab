import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
    selector: 'app-solar-system-loading',
    imports: [SharedCodeComponent],
    template: `
    <app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets" [CSSCodeSnippet]="CSSCodeSnippets"
    [projectDate]="projectDate" [projectDescription]="projectDescription" [projectVersion]="projectVersion"
    [projectName]="projectName" [zipFile]="zipFile"  />
    `
})
export class SolarSystemLoadingComponent {
    projectName: string = '🌍🌙 Interactive Solar System Animation with CSS';
    projectDescription: string = `
    This project demonstrates a miniature animated solar system built using only HTML and CSS.`;
    projectDate: string = 'Last updated: May 2025';
    projectVersion: string = 'v1.0.0';
    projectTags: string[] = ['Web Development', 'HTML', 'CSS'];

    /* ─── LIVE PREVIEW ─────────────────────────────────────── */
    liveHtml: string = `
<div class="solar-system">
    <div class="earth-circle"></div>
    <div class="sun"></div>
    <div class="earth">
        <div class="moon-circle"></div>
        <div class="moon"></div>
    </div>
</div>
  `;

    get liveCss(): string { return this.CSSCodeSnippets[0]?.code ?? ''; }

    /* ─── ORIGINAL SNIPPETS ────────────────────────────────── */
    HTMLCodeSnippets: ICodeStructure[] = [
        {
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="solar-system">
        <div class="earth-circle"></div>
        <div class="sun"></div>
        <div class="earth">
            <div class="moon-circle"></div>
            <div class="moon"></div>
        </div>
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
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background-color: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.solar-system {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.earth-circle {
    width: 400px;
    height: 400px;
    border: 2px solid #555;
    border-radius: 50%;
}

.sun {
    position: absolute;
    height: 100px;
    width: 100px;
    background-color: rgba(255, 255, 0, 0.5);
    border-radius: 50%;
    box-shadow: 0 0 50px rgba(255, 255, 0, 0.5), inset 0 0 5px rgba(0, 0, 0, 1);
    animation: 5s increaseBoxShadow linear infinite
}

.earth {
    position: absolute;
    top: -10px;
    width: 45px;
    height: 45px;
    background-color: green;
    border-radius: 50%;
    animation: 18s rotateEarth linear infinite;
    transform-origin: 30px 215px;
}

.moon-circle {
    position: absolute;
    top: -20px;
    left: -20px;
    width: 85px;
    height: 85px;
    border-radius: 50%;
    border: 2px solid #555;
}

.moon {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #ccc;
    top: -30px;
    left: 15px;
    border-radius: 50%;
    animation: 1s rotateEarth linear infinite;
}

@keyframes rotateEarth {
    to { rotate: 360deg }
}

@keyframes increaseBoxShadow {
    0%   { box-shadow: 0 0 50px #ff0; }
    50%  { box-shadow: 0 0 100px #ff0; }
    100% { box-shadow: 0 0 50px #ff0; }
}
    `,
            codeTitle: 'style.css'
        }
    ];

    zipFile: string = 'assets/zip-files/solar system.rar';
}