import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-loading-v7',
  imports: [SharedCodeComponent],
  template: `
<app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets" [CSSCodeSnippet]="CSSCodeSnippets"
    [projectDate]="projectDate" [JSCodeSnippet]="JSCodeSnippets" [projectDescription]="projectDescription"
    [projectVersion]="projectVersion" [projectName]="projectName" [zipFile]="zipFile" />
    `
})
export class LoadingV7 {
  projectName: string = 'Interactive Pause Loader – Version 7.0 ⏯️';
  projectDescription: string = `
An interactive loader that lets the user pause and resume the animation with a click
or the spacebar. The pause state is reflected with reduced opacity, and clicking again
resumes from the exact same frame. Great for demos where you want to inspect the motion.
    <ul>
        <li>⏯️ Click anywhere (or press Space) to toggle pause</li>
        <li>🎨 Visual feedback via opacity</li>
        <li>🧊 Preserves animation state — no restart jump</li>
        <li>🔁 Works with all 4 layers simultaneously</li>
    </ul>
    `;
  projectDate: string = 'Last updated: June 2025';
  projectVersion: string = 'v2.3.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading 07 — Interactive Pause</title>
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
    cursor: pointer;
    transition: background-color 0.3s ease;
}

body.paused {
    background-color: #1a0a1f;
}

.loader {
    position: relative;
    transition: opacity 0.3s ease;

    span {
        position: absolute;
        top: 0;
        left: -200px;
        width: 200px;
        height: 2px;
        transform: rotate(calc(90deg * var(--j)));
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

body.paused .loader {
    opacity: 0.35;
}

body.paused .loader span::before {
    animation-play-state: paused;
}

/* Hint text */
.hint {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-family: monospace;
    font-size: 12px;
    color: rgba(0, 235, 255, 0.5);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    user-select: none;
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
        loader.appendChild(span);
    }
}

// ─── Pause / Resume interaction ───
let paused = false;

function togglePause() {
    paused = !paused;
    body.classList.toggle('paused', paused);
}

document.addEventListener('click', togglePause);

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        togglePause();
    }
});

// ─── Hint text ───
const hint = document.createElement('div');
hint.className = 'hint';
hint.textContent = 'click or press space to pause';
body.appendChild(hint);
      `
    }
  ];

  zipFile: string = 'assets/zip-files/loading/07 - loading.rar';
}