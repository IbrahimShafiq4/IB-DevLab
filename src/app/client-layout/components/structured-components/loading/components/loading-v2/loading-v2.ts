import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-loading-v2',
  imports: [SharedCodeComponent],
  templateUrl: './loading-v2.html',
  styleUrl: './loading-v2.scss'
})
export class LoadingV2 {
  projectName: string = 'Neon Trail Loader Animation – Version 2 ⚡';
  projectDescription: string = `
This eye-catching CSS + JavaScript-powered loader creates a mesmerizing circular trail effect 🌌. Each loader consists of 20 glowing dots 💠 that rotate and animate in a ripple-like motion, leaving behind a neon trail. Thanks to the use of custom properties (--i, --j) and dynamic element generation via JavaScript, the animation is both flexible and visually rich.      <ul>
      <ul>
        <li>Multiple rotating loaders layered with --j (indexing)</li>
        <li>Glowing neon blue orbs 💙 using multiple box shadows</li>
        <li>Smooth staggered animation with animation-delay for a flowing sequence</li>
        <li>Great for tech-inspired or futuristic UIs 🚀</li>
      </ul>

Perfect for async loading states, splash screens, or interactive preloaders that impress your users! 🔁🌐
    `;
  projectDate: string = 'Last updated: June 2025';
  projectVersion: string = 'v1.1.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/loading/02 - loading.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading 02</title>
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

  zipFile: string = 'assets/zip-files/loading/02 - loading.rar';
}