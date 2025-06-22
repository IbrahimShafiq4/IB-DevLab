import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-loading-v8',
  imports: [SharedCodeComponent],
  templateUrl: './loading-v8.html',
  styleUrl: './loading-v8.scss'
})
export class LoadingV8 {
  projectName: string = 'Tilted Spiral Neon Loader – Version 8️⃣';
  projectDescription: string = `
This futuristic loader features a tilted spiral layout created using rotate(calc(90deg * var(--j) / 2)) 🌀. Unlike traditional right-angle symmetry, the / 2 factor gives the loader layers a diagonal twist 🧭—resulting in a smoother, off-axis rotation that feels dynamic and alive!
      <ul>
        <li>⚙️ 4 loader layers, each rotated at a diagonal using custom property --j</li>
        <li>🌟 Each layer contains 20 glowing orbs that animate with a wave effect</li>
        <li>💡 Strong neon blue glow via multiple box-shadow layers</li>
        <li>⏳ Smooth trailing motion using staggered animation delays</li>
        <li>🖤 Built on a deep navy background to emphasize contrast and glow</li>
      </ul>
🎨 Perfect For:
<br />
Advanced loading interfaces in futuristic or sci-fi themes 🧬
Portfolios, data visualizations, and AI/tech apps 🤖
Interactive preloading experiences with motion-based appeal ✨
<br />
🧪 Customization Ideas:
<br />
Adjust the tilt by changing rotate(calc(90deg * var(--j) / 2)) to another fraction
Use multi-colored orbs for a rainbow trail 🌈
Replace dots with emojis or icons (e.g. 🚀, 💥) for extra flair
<br />
💡 Pro Tip: Combine this loader with a subtle zoom-in animation or fading background elements for a next-level immersive effect!
`;
  projectDate: string = 'Last updated: June 2025';
  projectVersion: string = 'v1.7.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/loading/08 - loading.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading 08</title>
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
    transform: rotate(calc(90deg * var(--j) / 2));

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

  zipFile: string = 'assets/zip-files/loading/08 - loading.rar';
}
