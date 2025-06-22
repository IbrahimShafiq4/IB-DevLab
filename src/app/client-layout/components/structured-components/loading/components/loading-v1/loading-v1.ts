import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-loading-v1',
  imports: [SharedCodeComponent],
  templateUrl: './loading-v1.html',
  styleUrl: './loading-v1.scss'
})
export class LoadingV1 {
  projectName: string = 'Creative CSS Blob Loader Animation – Version 1 💫';
  projectDescription: string = `
    This stylish loader animation features three rotating organic blob shapes 🌐 created using clever CSS border-radius tricks. Each span spins at different speeds and directions 🔃 to create a smooth, hypnotic, and fluid motion 🌀. In the center, a bold "Loading" text ⏳ clearly communicates the state to users.
Perfect for dark-themed interfaces 🌑, this animation is ideal for splash screens or data-fetching loaders, offering a modern look without any JavaScript ⚡. Lightweight, responsive, and visually appealing – just plug and play! 💻✨
    `;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS'];
  projectVideSrc: string = './../../../../../assets/video-samples/loading/01 - loading.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Loading 01</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <h2>Loading</h2>
  </div>
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
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.loader {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border: 1px solid #fff;
      pointer-events: none;
      animation: animate 5s linear infinite;
  }

  span:nth-child(1) {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }

  span:nth-child(2) {
      animation-direction: reverse;
      border-radius: 30% 70% 6% 94% / 70% 30% 70% 30%;
  }

  span:nth-child(3) {
      animation-duration: 3s;
      border-radius: 56% 44% 59% 41% / 70% 66% 34% 30%;
  }

  h2 {
      font-weight: 600;
      font-family: Consolas;
      color: #fff;
  }
}

@keyframes animate {
  0% {
      transform: rotate(0deg);
  }

  100% {
      transform: rotate(360deg);
  }
}
    `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/loading/01 - loading.rar';
}