import { Component } from '@angular/core';
import { ICodeStructure } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-loading-v6',
  imports: [],
  templateUrl: './loading-v6.html',
  styleUrl: './loading-v6.scss'
})
export class LoadingV6 {
  projectName: string = 'Diagonal Burst Spiral Loader – Version 6️⃣';
  projectDescription: string = `
This sleek and luminous loader introduces a diagonal spiral animation ✨ using rotate(calc(45deg * var(--i))), giving it a striking starburst-like appearance 🌠. Powered by JavaScript and CSS, each loader dynamically generates 20 glowing orbs 💠 that animate inwards with a trailing, light pulse.      
      <ul>
        <li>🌀 Spiraled layout with 45° rotation increments</li>
        <li>💡 Neon blue glow using layered box shadows</li>
        <li>⏱ Smooth trail motion using animation-delay</li>
        <li>🔄 Multiple loader layers (--j) for added depth and complexity</li>
        <li>🎯 Clean, futuristic aesthetic perfect for tech interfaces or loading dashboards</li>
      </ul>
🔧 Customization Ideas:
<br />
Change rotate(45deg) to a different angle for unique shapes (e.g. 30deg for more density)
Replace orb color from #00ebff to any brand color
Modify translateX distance to alter animation spread
<br />
🎯 Use Cases:
<br />
Preloaders for SaaS apps 💻
Loading overlays for web tools 🛠
Visual intros for portfolios or creative sites 🎨
<br />
💬 Pro Tip: Try animating the --j value dynamically for a pulsating spiral that expands/contracts over time!
`;
  projectDate: string = 'Last updated: June 2025';
  projectVersion: string = 'v1.5.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/loading/06 - loading.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading 06</title>
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
        transform: rotate(calc(45deg * var(--i)));
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

  zipFile: string = 'assets/zip-files/loading/06 - loading.rar';
}
