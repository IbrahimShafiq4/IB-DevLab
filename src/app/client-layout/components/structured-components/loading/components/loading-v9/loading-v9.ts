import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-loading-v9',
  imports: [SharedCodeComponent],
  templateUrl: './loading-v9.html',
  styleUrl: './loading-v9.scss'
})
export class LoadingV9 {
  projectName: string = 'Compact Rotating Spiral Loader – Version 9';
  projectDescription: string = `
This version introduces a scaled-down spiral loader using scale(0.75) combined with four 90°-rotated layers (rotate(calc(90deg * var(--j)))), creating a tighter, crisper animation that is both minimal and futuristic 🌌.
      <ul>
        <li>🔄 4-layer rotation forming a symmetrical spiral cross 🧭</li>
        <li>🔍 Scaled down with scale(0.75) for a more compact visual</li>
        <li>💠 20 dynamically placed span elements per loader, radiating from center</li>
        <li>💡 Each dot is a glowing blue orb with multi-layered shadows</li>
        <li>🔁 Smooth inward ripple animation using keyframes and staggered delay</li>
      </ul>
🎨 Perfect For:
<br />
Splash screens with limited space 🖥
Modern dashboard loaders 💼
Interfaces that demand subtle motion without distraction 🧘‍♂️
<br />
🧪 Pro Tips:
<br />
Want a more intense effect? Increase scale to 1 or 1.2 🔍
Swap blue glow (#00ebff) for your brand’s primary color 🎨
Try transform: scale(0.75) rotateZ(...deg) for layered depth!
🧬 A compact, neon-powered animation that feels alive and techy—perfect for fast, professional-looking loaders!

`;
  projectDate: string = 'Last updated: June 2025';
  projectVersion: string = 'v1.8.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/loading/09 - loading.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading 09</title>
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
    transform: rotate(calc(90deg * var(--j))) scale(0.75);

    span {
        position: absolute;
        top: 0;
        left: 0;
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

  zipFile: string = 'assets/zip-files/loading/09 - loading.rar';
}
