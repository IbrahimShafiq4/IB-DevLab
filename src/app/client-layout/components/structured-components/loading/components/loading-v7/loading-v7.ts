import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-loading-v7',
  imports: [SharedCodeComponent],
  templateUrl: './loading-v7.html',
  styleUrl: './loading-v7.scss'
})
export class LoadingV7 {
  projectName: string = 'Rotational Cross Spiral Loader – Version 6 Enhanced 🧊';
  projectDescription: string = `
This stunning loader creates a four-directional spiral effect by rotating each .loader instance at 90° increments (rotate(calc(90deg * var(--j)))) 🔄. Combined with 20 rotating spans per loader, this forms a symmetrical cross-like motion 🧭—a powerful visual for modern UIs that want to stand out!      
      <ul>
        <li>🧬 Four loader layers (thanks to loop on --j) rotated at 0°, 90°, 180°, 270°</li>
        <li>💠 Each loader contains 20 radial orbs with glowing blue neon trails</li>
        <li>⏱ Orbs animate from the outer edge inward using staggered delays (animation-delay)</li>
        <li>🌌 Designed on a dark background for perfect glow contrast</li>
      </ul>
🛠️ Customization Tips:
<br />
Change rotate(18deg * var(--i)) for more/less span density
Try different glow colors like neon green #00ff87 or purple #cc00ff 🎨
Adjust translateX(200px) for tighter or wider animations
<br />
🎯 Use Cases:
<br />
Futuristic dashboards and splash screens 🚀
AI tools, crypto platforms, or digital portfolios 🔮
Web projects that need a unique & eye-catching loader ⚡
<br />
💡 Pro Tip: Combine this effect with a fading title or progress text (e.g. "Loading...") for an even more dynamic feel!
`;
  projectDate: string = 'Last updated: June 2025';
  projectVersion: string = 'v1.6.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/loading/07 - loading.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading 07</title>
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
  transform: rotate(calc(90deg * var(--j)));

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

  zipFile: string = 'assets/zip-files/loading/07 - loading.rar';
}

