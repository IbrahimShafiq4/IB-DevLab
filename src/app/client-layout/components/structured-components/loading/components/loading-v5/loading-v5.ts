import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
    selector: 'app-loading-v5',
    imports: [SharedCodeComponent],
    template: `
<app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets" [CSSCodeSnippet]="CSSCodeSnippets"
    [projectDate]="projectDate" [JSCodeSnippet]="JSCodeSnippets" [projectDescription]="projectDescription"
    [projectVersion]="projectVersion" [projectName]="projectName" [zipFile]="zipFile" />
    `
})
export class LoadingV5 {
    projectName: string = 'Emoji Burst Loader – Version 5.0 🌟';
    projectDescription: string = `
A playful loader that bursts emojis from a spiral formation. Each of the 20 spans
per layer picks a random emoji from a small pool, creating a chaotic, joyful motion
that feels alive rather than mechanical.
    <ul>
        <li>🎨 Random emoji per span (🔥 ✨ 💎 🌟 ⭐ 👌)</li>
        <li>🔁 4 layers with staggered animation</li>
        <li>💫 Glow effect via box-shadow</li>
        <li>🕓 Smooth trailing motion</li>
        <li>🎯 Perfect for playful or meme-y projects</li>
    </ul>
    `;
    projectDate: string = 'Last updated: June 2025';
    projectVersion: string = 'v2.1.0';
    projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];

    HTMLCodeSnippets: ICodeStructure[] = [
        {
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading 05 — Emoji Burst</title>
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
        transform-origin: right;

        &::before {
            content: attr(data-emoji);
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.6rem;
            width: 22px;
            height: 22px;
            background-color: #fff;
            border-radius: 50%;
            box-shadow:
                0 0 10px #fff,
                0 0 20px #fff,
                0 0 40px #fff,
                0 0 60px #fff;
            animation: animate 1s linear infinite;
            animation-delay: calc((-0.1s * var(--i)));
        }
    }
}

@keyframes animate {
    0% {
        transform: translateX(400px) scale(1);
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

const EMOJIS = ['👌', '🔥', '✨', '💎', '🌟', '⭐', '💫', '🎯'];

function randomEmoji() {
    return EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
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
        span.dataset.emoji = randomEmoji();
        loader.appendChild(span);
    }
}
      `
        }
    ];

    zipFile: string = 'assets/zip-files/loading/05 - loading.rar';
}