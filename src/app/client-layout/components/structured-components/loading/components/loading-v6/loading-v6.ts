import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
    selector: 'app-loading-v6',
    imports: [SharedCodeComponent],
    template: `
<app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets" [CSSCodeSnippet]="CSSCodeSnippets"
    [projectDate]="projectDate" [JSCodeSnippet]="JSCodeSnippets" [projectDescription]="projectDescription"
    [projectVersion]="projectVersion" [projectName]="projectName" [zipFile]="zipFile" />
    `
})
export class LoadingV6 {
    projectName: string = 'Rainbow Starburst Loader – Version 6.0 🌈';
    projectDescription: string = `
A starburst loader where every orb gets a unique random color from the HSL spectrum.
Instead of a uniform cyan glow, each of the 80 orbs per loader instance shines with
its own hue — creating a festive, rainbow-like effect.
    <ul>
        <li>🌈 Random HSL color per span</li>
        <li>💡 Neon glow with matching box-shadow color</li>
        <li>🌀 45° rotation increments for starburst pattern</li>
        <li>⏱ Smooth staggered animation</li>
    </ul>
    `;
    projectDate: string = 'Last updated: June 2025';
    projectVersion: string = 'v2.2.0';
    projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];

    HTMLCodeSnippets: ICodeStructure[] = [
        {
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading 06 — Rainbow Burst</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <script src="./main.js"></script>
</body>
</html>
    `,
            codeTitle: 'index.html'
        }
    ];

    CSSCodeSnippets: ICodeStructure[] = [
        {
            code: `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #001f25;
    overflow: hidden;
}

.loader {
    position: relative;

    span {
        position: absolute;
        top: 0;
        left: -200px;
        width: 200px;
        height: 2px;
        transform: rotate(calc(45deg * var(--i)));
        transform-origin: right;

        &::before {
            content: '';
            position: absolute;
            width: 15px;
            height: 15px;
            /* ── Color comes from JS via --clr ── */
            background-color: var(--clr, #00ebff);
            border-radius: 50%;
            box-shadow:
                0 0 10px var(--clr, #00ebff),
                0 0 20px var(--clr, #00ebff),
                0 0 40px var(--clr, #00ebff),
                0 0 60px var(--clr, #00ebff),
                0 0 80px var(--clr, #00ebff);
            animation: animate 2s linear infinite;
            animation-delay: calc((-0.1s * var(--i)));
        }
    }
}

@keyframes animate {
    0% {
        transform: translateX(200px) scale(1);
        opacity: 0;
    }
    10% { opacity: 1; }
    80% { opacity: 1; }
    100% {
        transform: translateX(0px) scale(0);
        opacity: 0;
    }
}
    `,
            codeTitle: 'style.css'
        }
    ];

    JSCodeSnippets: ICodeStructure[] = [
        {
            codeTitle: 'main.js',
            code: `
const body = document.body;
let loader;

// Warm + cool palette for variety
function randomColor() {
    const hue = Math.floor(Math.random() * 360);
    return \`hsl(\${hue}, 100%, 60%)\`;
}

function loaderDiv() {
    for (let j = 0; j <= 3; j++) {
        loader = document.createElement('div');
        loader.classList.add('loader');
        loader.style.setProperty('--j', j);
        body.appendChild(loader);
        loaderSpan();
    }
}

loaderDiv();

function loaderSpan() {
    for (let i = 1; i <= 20; i++) {
        const span = document.createElement('span');
        span.style.setProperty('--i', i);
        span.style.setProperty('--clr', randomColor());
        loader.appendChild(span);
    }
}
      `
        }
    ];

    zipFile: string = 'assets/zip-files/loading/06 - loading.rar';
}