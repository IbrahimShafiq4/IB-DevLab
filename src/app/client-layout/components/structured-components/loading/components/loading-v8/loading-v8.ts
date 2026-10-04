import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
    selector: 'app-loading-v8',
    imports: [SharedCodeComponent],
    template: `
<app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets" [CSSCodeSnippet]="CSSCodeSnippets"
    [projectDate]="projectDate" [JSCodeSnippet]="JSCodeSnippets" [projectDescription]="projectDescription"
    [projectVersion]="projectVersion" [projectName]="projectName" [zipFile]="zipFile" />
    `
})
export class LoadingV8 {
    projectName: string = 'Organic Spiral Loader – Version 8.0 🌱';
    projectDescription: string = `
A spiral loader where each orb has a slightly randomized animation delay and duration,
breaking the mechanical uniformity of the original and giving the motion an organic,
breathing quality. Some orbs trail behind, others rush ahead — like fireflies.
    <ul>
        <li>🎲 Random delay per span (±50% variance)</li>
        <li>⏱ Random duration per span (1.5s – 2.5s)</li>
        <li>🌊 Organic, non-mechanical motion</li>
        <li>🎯 Preserves the underlying spiral structure</li>
    </ul>
    `;
    projectDate: string = 'Last updated: June 2025';
    projectVersion: string = 'v2.4.0';
    projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];

    HTMLCodeSnippets: ICodeStructure[] = [
        {
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading 08 — Organic Spiral</title>
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
    transform: rotate(calc(45deg * var(--j)));

    span {
        position: absolute;
        top: 0;
        left: -200px;
        width: 200px;
        height: 2px;
        transform: rotate(calc(18deg * var(--i)));
        transform-origin: right;

        &::before {
            content: '';
            position: absolute;
            width: 15px;
            height: 15px;
            background-color: #00ebff;
            border-radius: 50%;
            box-shadow:
                0 0 10px #00ebff,
                0 0 20px #00ebff,
                0 0 40px #00ebff,
                0 0 60px #00ebff,
                0 0 80px #00ebff;

            /* ── Duration and delay set per-span by JS ── */
            animation: animate var(--dur, 2s) linear infinite;
            animation-delay: var(--delay, calc(-0.1s * var(--i)));
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

// Random duration between min and max (in seconds)
function randomDuration(min, max) {
    return (min + Math.random() * (max - min)).toFixed(2) + 's';
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

        // ── Organic variance: random duration + random delay ──
        span.style.setProperty('--dur', randomDuration(1.4, 2.6));

        const baseDelay = -0.1 * i;
        const jitter = (Math.random() - 0.5) * 0.6;
        span.style.setProperty('--delay', (baseDelay + jitter).toFixed(2) + 's');

        loader.appendChild(span);
    }
}
      `
        }
    ];

    zipFile: string = 'assets/zip-files/loading/08 - loading.rar';
}