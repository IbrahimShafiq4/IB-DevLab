import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-loading-v4',
  imports: [SharedCodeComponent],
  templateUrl: './loading-v4.html',
  styleUrl: './loading-v4.scss'
})
export class LoadingV4 {
  projectName: string = 'Neon Spiral Loader – Version 4.0 💠';
  projectDescription: string = `
This glowing neon spiral loader is built with pure JavaScript and CSS, dynamically generating a circular formation of 20 radiant orbs ✨ for each loader instance. Each orb rotates around a center point using the formula rotate(calc(18deg * var(--i) / 2)), forming a hypnotic half-density spiral 🌀 with smooth, trailing motion.      <ul>
        <li>✅ Dynamically generated DOM elements (<div class="loader"> with multiple <span>)</li>
        <li>💡 Each span::before is a glowing neon dot using layered box shadows</li>
        <li>🔁 Smooth staggered animation using animation-delay</li>
        <li>🌌 Ideal for dark-themed designs or futuristic UI</li>
      </ul>
🎯 Use Cases:
<br />
Preloaders for high-tech or data-driven apps 📡
Portfolio intros with motion graphics 🧑‍🎨
Interactive waiting screens ⏳
<br />
🛠 Customizable:
<br />
Change the glow color via background-color and box-shadow
Adjust the spiral density by tweaking the rotate() formula
Add more loader layers by increasing the loop count (j)`;
  projectDate: string = 'Last updated: June 2025';
  projectVersion: string = 'v1.3.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/loading/04 - loading.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading 04</title>
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
        transform: rotate(calc(18deg * var(--i) / 2));
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

  zipFile: string = 'assets/zip-files/loading/04 - loading.rar';
}
