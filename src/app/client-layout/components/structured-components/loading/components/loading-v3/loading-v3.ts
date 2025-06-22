import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-loading-v3',
  imports: [SharedCodeComponent],
  templateUrl: './loading-v3.html',
  styleUrl: './loading-v3.scss'
})
export class LoadingV3 {
  projectName: string = 'Advanced Neon Spiral Loader – Version 3.0 ✨';
  projectDescription: string = `
This enhanced loading animation takes a creative twist on the spiral effect 🌀. Built with pure JavaScript and CSS, it dynamically generates multiple layered loaders, each composed of 20 glowing orbs 💎. The orbs rotate around a center point, giving a sense of depth and motion, like a cyberpunk vortex 🌌.
      <ul>
        <li>✅ Uses custom properties --i and --j for fine-tuned rotation control</li>
        <li>🧮 The rotation angle dynamically changes using:
transform: rotate(calc(18deg * var(--i) / calc(var(--j))))
— this creates more dynamic, variable spirals</li>
        <li>🌈 Each glowing orb emits multi-layered neon shadows</li>
        <li>⏱️ Animation delay is staggered for a smooth trailing effect</li>
      </ul>

🎯 Perfect for:
<br />
Futuristic UIs 🧬
AI/data-driven dashboards 📊
Preloaders in high-tech apps ⚙️
Digital portfolios or creative landing pages 🎨    `;
  projectDate: string = 'Last updated: June 2025';
  projectVersion: string = 'v1.2.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/loading/03 - loading.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading 03</title>
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
}

.loader {
    position: relative;

    span {
        position: absolute;
        top: 0;
        left: -200px;
        width: 200px;
        height: 2px;
        transform: rotate(calc(18deg * var(--i) / calc(var(--j))));
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
                        0 0 80px #00ebff,
                        0 0 100px #00ebff;
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

    10% {
        opacity: 1;
    }

    80% {
        opacity: 1;
    }

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
        loaderSpan()
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
      `
    }
  ]

  zipFile: string = 'assets/zip-files/loading/03 - loading.rar';
}