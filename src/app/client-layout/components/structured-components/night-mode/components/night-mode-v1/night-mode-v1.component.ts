import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-night-mode-v1',
  imports: [SharedCodeComponent],
  templateUrl: './night-mode-v1.component.html',
  styleUrl: './night-mode-v1.component.scss'
})
export class NightModeV1Component {
  projectName: string = '🌗 Meme-Inspired Day/Night Mode Toggle';
  projectDescription: string = `
    A ✨ visually explosive and meme-worthy Day/Night mode toggle button that goes beyond the basics. Designed with gradient skies, glowing celestial elements, and a bouncy toggle animation, this button transforms from a bright, happy ☀️ day scene to a mysterious, starry 🌌 night. It features:
      <ul>
        <li>🌤️ Custom sun & cloud design</li>
        <li>🌙 Stylized moon & animated stars</li>
        <li>💫 Smooth transitions & layered gradients</li>
        <li>🎨 A toggle that's more designer drama than developer default</li>
      </ul>

      Perfect for portfolios, landing pages, or just flexing your creative CSS skills with a twist of humor and personality. 😎
    `;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/night mode/01 - night mode.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Designer Meme night mode</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
        rel="stylesheet" />
</head>

<body>
    <div class="night-mode" style="--sun-active: false">
        <div class="night-mode-btn">
            <div class="sun-moon-toggler"></div>
            <div class="clouds-stars">
                <div class="clouds-stars-bottom">
                    <span style="--left: 5; --bottom: 10;"></span>
                    <span style="--left: 15; --bottom: 20;"></span>
                    <span style="--left: 25; --bottom: 30;"></span>
                    <span style="--left: 35; --bottom: 15;"></span>
                    <span style="--left: 45; --bottom: 25;"></span>
                    <span style="--left: 55; --bottom: 35;"></span>
                    <span style="--left: 65; --bottom: 20;"></span>
                    <span style="--left: 75; --bottom: 40;"></span>
                    <span style="--left: 85; --bottom: 10;"></span>
                    <span style="--left: 95; --bottom: 5;"></span>
                </div>
                <div class="clouds-stars-top">
                    <span style="--left: 7; --bottom: 80;"></span>
                    <span style="--left: 2; --bottom: 70;"></span>
                    <span style="--left: 3; --bottom: 65;"></span>
                    <span style="--left: 10; --bottom: 90;"></span>
                    <span style="--left: 12; --bottom: 75;"></span>
                    <span style="--left: 87; --bottom: 85;"></span>
                    <span style="--left: 76; --bottom: 60;"></span>
                    <span style="--left: 32; --bottom: 95;"></span>
                    <span style="--left: 27; --bottom: 88;"></span>
                </div>
            </div>
        </div>
    </div>

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
:root {
  --main-background: #d4d4d4;
}

body {
  transition: 0.3s linear;
  background-color: var(--main-background);
}

.night-mode {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  cursor: pointer;
  overflow: hidden;
}

.night-mode-btn {
  width: 90px;
  height: 40px;
  border-radius: 30px;
  background-color: #1e3a8a;
  background-image: radial-gradient(circle at 10% 50%, #ebf4ff 0%, #c3dafe 15%, transparent 16%),
      radial-gradient(circle at 20% 50%, #dbeafe 0%, #93c5fd 25%, transparent 26%),
      radial-gradient(circle at 30% 50%, #bfdbfe 0%, #60a5fa 35%, transparent 36%),
      radial-gradient(circle at 40% 50%, #a5b4fc 0%, #3b82f6 45%, transparent 46%),
      radial-gradient(circle at 50% 50%, #818cf8 0%, #2563eb 55%, transparent 56%),
      radial-gradient(circle at 60% 50%, #6366f1 0%, #1d4ed8 65%, transparent 66%),
      radial-gradient(circle at 70% 50%, #4f46e5 0%, #1e40af 75%, transparent 76%),
      radial-gradient(circle at 80% 50%, #4338ca 0%, #1e3a8a 85%, transparent 86%),
      radial-gradient(circle at 90% 50%, #3730a3 0%, #172554 95%, transparent 96%),
      radial-gradient(circle at 100% 50%, #312e81 0%, #0f172a 100%);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  box-shadow:
      inset 2px 2px 2px rgba(0, 0, 0, 0.4),
      inset -2px -2px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: backgroundImage 0.3s linear;
  transition-delay: 0.3s;
}

.sun-moon-toggler {
  position: relative;
  transform: translate(4px, 5px);
  transition: 0.3s linear;
  z-index: 2;
}

.clouds-stars {
  position: absolute;
  inset: 0;
  z-index: 1;
  transition: all 0.5s ease;
  overflow: hidden;
}

@container style(--sun-active: true) {
  .sun-moon-toggler {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      box-shadow:
          inset -28px -2px 0 3px #f3d076,
          0 0 5px #f3d076,
          0 0 20px #f3d076,
          0 0 50px #f3d076,
          0 0 70px #f3d076;
  }

  .clouds-stars-bottom {
      width: 100%;
      height: 100%;
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      z-index: 9;
      transition: 0.3s linear;

      span {
          position: absolute;
          right: 0;
          bottom: 0px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: rgb(247, 240, 240);

          &:nth-child(2) {
              right: 13px;
              bottom: -5px;
          }

          &:nth-child(3) {
              right: 26px;
              bottom: -10px;
          }

          &:nth-child(4) {
              right: 43px;
              bottom: -14px;
          }
      }
  }

  .clouds-stars-top {
      width: 100%;
      height: 100%;
      position: relative;
      transform: translateY(-49px) translateX(0px);
      border-radius: 20px;
      z-index: 1;
      transition: 0.3s linear;

      span {
          position: absolute;
          right: 0;
          bottom: 0px;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: rgb(247, 240, 240, 0.2);

          &:nth-child(2) {
              right: 13px;
              bottom: -5px;
          }

          &:nth-child(3) {
              right: 26px;
              bottom: -10px;
          }

          &:nth-child(4) {
              right: 37px;
              bottom: -14px;
          }
      }
  }
}

@container style(--sun-active: false) {
  .night-mode-btn {
      background-color: #0f172a;
      background-image: radial-gradient(
              circle at 90% 50%,
              rgba(255, 255, 255, 0.8) 0%,
              rgba(255, 255, 255, 0.6) 15%,
              transparent 16%
          ),
          radial-gradient(
              circle at 80% 50%,
              rgba(255, 255, 255, 0.7) 0%,
              rgba(255, 255, 255, 0.5) 25%,
              transparent 26%
          ),
          radial-gradient(
              circle at 70% 50%,
              rgba(255, 255, 255, 0.6) 0%,
              rgba(255, 255, 255, 0.4) 35%,
              transparent 36%
          ),
          radial-gradient(
              circle at 60% 50%,
              rgba(255, 255, 255, 0.5) 0%,
              rgba(255, 255, 255, 0.3) 45%,
              transparent 46%
          ),
          radial-gradient(
              circle at 50% 50%,
              rgba(255, 255, 255, 0.4) 0%,
              rgba(255, 255, 255, 0.2) 55%,
              transparent 56%
          ),
          radial-gradient(
              circle at 40% 50%,
              rgba(255, 255, 255, 0.3) 0%,
              rgba(255, 255, 255, 0.1) 65%,
              transparent 66%
          ),
          radial-gradient(
              circle at 30% 50%,
              rgba(255, 255, 255, 0.2) 0%,
              rgba(255, 255, 255, 0.05) 75%,
              transparent 76%
          ),
          radial-gradient(
              circle at 20% 50%,
              rgba(255, 255, 255, 0.1) 0%,
              rgba(255, 255, 255, 0.02) 85%,
              transparent 86%
          ),
          radial-gradient(
              circle at 10% 50%,
              rgba(255, 255, 255, 0.05) 0%,
              rgba(255, 255, 255, 0.01) 95%,
              transparent 96%
          ),
          radial-gradient(circle at 0% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 100%);
  }

  .clouds-stars-bottom {
      width: 100%;
      height: 100%;
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      z-index: 9;
      transition: 0.3s linear;
      transform: translateY(10px);

      span {
          position: absolute;
          right: 0;
          bottom: 0px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          left: calc(var(--left) * 1%);
          bottom: calc(var(--bottom) * 1%);
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          background-color: #f3d076;
          box-shadow:
              0 0 5px #f3d076,
              0 0 20px #f3d076,
              0 0 50px #f3d076,
              0 0 70px #f3d076;
      }
  }

  .clouds-stars-top {
      width: 100%;
      height: 100%;
      position: relative;
      transform: translateY(-30px) translateX(0px);
      border-radius: 20px;
      z-index: 1;
      transition: 0.3s linear;

      span {
          position: absolute;
          left: calc(var(--left) * 1%);
          bottom: calc(var(--bottom) * 1%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          background-color: #f3d076;
          box-shadow:
              0 0 5px #f3d076,
              0 0 20px #f3d076,
              0 0 50px #f3d076,
              0 0 70px #f3d076;
      }
  }

  .sun-moon-toggler {
      display: block;
      width: 1.8rem;
      height: 1.8rem;
      background-color: transparent;
      box-shadow:
          inset -8px -2px 0 3px #adadad,
          0 0 5px transparent,
          0 0 20px transparent,
          0 0 50px transparent,
          0 0 70px transparent;
      border-radius: 50%;
      transform: translate(58px, 5px);
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
const nightModeContainer = document.querySelector('.night-mode');
let toggleView = false;
nightModeContainer.addEventListener('click', () => {
  toggleView = !toggleView;
  nightModeContainer.style.setProperty('--sun-active', toggleView);
  document.body.style.setProperty('--main-background', toggleView ? '#080a11' : '#d4d4d4')
});

      `
    }
  ]

  zipFile: string = 'assets/zip-files/night-mode/night mode-v1.rar';
}
