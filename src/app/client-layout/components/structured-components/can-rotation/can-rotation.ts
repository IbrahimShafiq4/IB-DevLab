import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-can-rotation',
  imports: [SharedCodeComponent],
  templateUrl: './can-rotation.html',
  styleUrl: './can-rotation.scss'
})
export class CanRotation {
  projectName: string = 'Rotational Image Pack Reveal Animation';
  projectDescription: string = `
This animation creates a sleek and interactive image reveal effect using HTML and CSS. Two layered image elements are masked with a device mockup shape. On hover, the background image of the first "pack" smoothly shifts position, while the second image fades in — giving the illusion of a dynamic content switch or rotation inside the same device frame.
The effect combines background blending, mask-image, and background-position transitions to create a visually engaging UI component.`;
  projectDate: string = 'Last updated: June 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS'];
  projectVideSrc: string = './../../../../../assets/video-samples/can rotation.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rotational Animation</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
      <div class="cane">
          <div class="pack" style="--bg: url(images/bg1.jpeg)"></div>
          <div class="pack" style="--bg: url(images/bg2.jpg)"></div>
      </div>
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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  min-height: 100vh;
  background: #6767f0;
}

.container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.cane {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  z-index: 2;
  transition: 0.7s;
  --left: 230px;
  display: flex;
  background: yellow;
}

.cane .pack{
  position: absolute;
  background: var(--bg) var(--left), url(images/mockup.png);
  background-size: auto 100%;
  width: 280px;
  aspect-ratio: 2/4;
  background-blend-mode: multiply;
  mask-image: url(images/mockup.png);
  mask-size: auto 100%;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.7s;
}

.container .cane:hover {
  --left: -1000px;
  transform: translateX(-50%) translateY(-60%);
}

.container .cane .pack:nth-child(2) {
  opacity: 0;
}


.container .cane:hover .pack:nth-child(2) {
  opacity: 1;
}
    `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/circular logo.rar';
}

