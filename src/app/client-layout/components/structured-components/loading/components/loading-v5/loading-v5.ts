import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-loading-v5',
  imports: [SharedCodeComponent],
  templateUrl: './loading-v5.html',
  styleUrl: './loading-v5.scss'
})
export class LoadingV5 {
  projectName: string = 'Emoji Pulse Spiral Loader – Version 5️.0 🌟';
  projectDescription: string = `
This fun and creative loader brings a playful twist to animation by using emojis as moving particles 🎉. Each loader layer is made up of 20 rotating spans, with each span::before containing an emoji (👌) wrapped in a glowing white circle 💡. The emoji trails inward with a ripple effect, creating a vibrant spiral motion that’s both eye-catching and unique.
      <ul>
        <li>🔁 Pure HTML, CSS, and JavaScript – no libraries needed</li>
        <li>✨ Emojis replace traditional shapes for a friendly and expressive touch</li>
        <li>💫 Multi-layer glow effect adds depth and brightness</li>
        <li>🕓 Staggered animation for smooth, fluid motion</li>
        <li>🎨 Customizable: Replace 👌 with any emoji for themed loaders (e.g. ❤️, 🛸, 🐱‍👓)</li>
      </ul>
🎯 Best For:
<br />
Light-hearted or playful web projects 🎮
Personal portfolios and creative agency sites 🎨
Splash/loading screens that want to add some personality 😎
<br />
🔧 Pro Tip: Adjust translateX, font-size, or emoji type to tailor the loader to your brand’s vibe!
`;
  projectDate: string = 'Last updated: June 2025';
  projectVersion: string = 'v1.4.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/loading/05 - loading.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading 05</title>
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
        transform-origin: right;

        &::before {
            content: '👌';
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            width: 15px;
            height: 15px;
            background-color: #fff;
            border-radius: 50%;
            box-shadow: 
                        0 0 10px #fff,
                        0 0 20px #fff,
                        0 0 40px #fff,
                        0 0 60px #fff,
                        0 0 80px #fff,
                        0 0 100px #fff;
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

  zipFile: string = 'assets/zip-files/loading/05 - loading.rar';
}