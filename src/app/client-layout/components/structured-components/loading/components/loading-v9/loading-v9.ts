import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
    selector: 'app-loading-v9',
    imports: [SharedCodeComponent],
    template: `
<app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets" [CSSCodeSnippet]="CSSCodeSnippets"
    [projectDate]="projectDate" [JSCodeSnippet]="JSCodeSnippets" [projectDescription]="projectDescription"
    [projectVersion]="projectVersion" [projectName]="projectName" [zipFile]="zipFile" />
    `
})
export class LoadingV9 {
    projectName: string = 'Responsive Spiral Loader – Version 9.0 📐';
    projectDescription: string = `
The final version of the spiral loader — fully responsive and self-adjusting.
It scales based on the viewport size and re-renders on resize, making it the most
production-ready variant in the series. Works equally well on phones and desktops.
    <ul>
        <li>📱 Auto-scales with viewport (clamp-based)</li>
        <li>🔄 Re-computes on window resize (debounced)</li>
        <li>⚡ Uses ResizeObserver for smooth adaptation</li>
        <li>🎯 Production-ready, drop-in ready</li>
    </ul>
    `;
    projectDate: string = 'Last updated: June 2025';
    projectVersion: string = 'v2.5.0';
    projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];

    HTMLCodeSnippets: ICodeStructure[] = [
        {
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading 09 — Responsive</title>
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
    /* ── Scaled by JS via --scale ── */
    transform: rotate(calc(90deg * var(--j))) scale(var(--scale, 1));

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

function loaderDiv() {
    // Clear any existing loaders (for resize re-render)
    document.querySelectorAll('.loader').forEach(el => el.remove());

    for (let j = 0; j <= 3; j++) {
        const loader = document.createElement('div');
        loader.classList.add('loader');
        loader.style.setProperty('--j', j);
        body.appendChild(loader);
        loaderSpan(loader);
    }
}

function loaderSpan(loader) {
    for (let i = 1; i <= 20; i++) {
        const span = document.createElement('span');
        span.style.setProperty('--i', i);
        loader.appendChild(span);
    }
}

// ─── Responsive scaling ───
function computeScale() {
    const minDim = Math.min(window.innerWidth, window.innerHeight);
    // At 800px+ → scale 1. At 320px → scale ~0.5
    const scale = Math.max(0.5, Math.min(1.2, minDim / 800));
    return scale.toFixed(2);
}

function applyScale() {
    const scale = computeScale();
    document.querySelectorAll('.loader').forEach(loader => {
        loader.style.setProperty('--scale', scale);
    });
}

// ─── Debounced resize handler ───
let resizeTimer;
function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(applyScale, 150);
}

// ─── Init ───
loaderDiv();
applyScale();

window.addEventListener('resize', handleResize);

// ─── ResizeObserver (for containers/iframes) ───
if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(() => handleResize()).observe(document.body);
}
      `
        }
    ];

    zipFile: string = 'assets/zip-files/loading/09 - loading.rar';
}