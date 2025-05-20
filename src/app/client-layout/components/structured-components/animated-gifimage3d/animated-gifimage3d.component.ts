import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-animated-gifimage3d',
  imports: [SharedCodeComponent],
  templateUrl: './animated-gifimage3d.component.html',
  styleUrl: './animated-gifimage3d.component.scss'
})
export class AnimatedGIFImage3dComponent {
  projectName: string = '🧩 Animated Grid Image Reveal with Hover Effect';
  projectDescription: string = `A creative image reveal effect using a 4x4 grid of boxes, where each piece is a section of a larger image (humonster.gif). When hovered, the entire grid expands and each box rotates for a dynamic, animated transformation. Built with HTML, CSS, and JavaScript, this project showcases a clever way to deconstruct and animate a single image into interactive tiles — perfect for modern UI interactions or portfolio highlights.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/animated popup.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3d Animation</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="boxes"></div>
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
  box-sizing: border-box;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --light-black: rgba(28, 36, 39, 0.5);
}

body {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.boxes {
  position: relative;
  width: 500px;
  height: 500px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  transition: 0.5s ease-out;
}

.boxes:hover {
  width: 600px;
  height: 600px;
}

.box { 
  width: 125px;
  height: 125px;
  background-image: url(./humonster.gif);
  background-repeat: no-repeat;
  background-size: 500px 500px;
  transition: 0.5s ease-out;
  box-shadow: 5px 5px 5px var(--light-black);
}

.boxes:hover .box {
  transform: rotateZ(360deg);
}
    `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
const boxesContainer = document.querySelector('.boxes');
function renderBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const singleBox = document.createElement('div');
            singleBox.classList.add('box');
            singleBox.style.backgroundPosition = \`-\${j * 125}px -\${i * 125}px\`
            boxesContainer.appendChild(singleBox);
        }
    }
}
renderBoxes();
    `,
      codeTitle: 'main.js'
    }
  ];

  zipFile: string = 'assets/zip-files/3d animation v1.rar';
}