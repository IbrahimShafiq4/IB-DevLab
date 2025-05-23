import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-mouse-move-v3',
  imports: [SharedCodeComponent],
  templateUrl: './mouse-move-v3.component.html',
  styleUrl: './mouse-move-v3.component.scss'
})
export class MouseMoveV3Component {
  projectName: string = '💡 Dynamic Hover Ripple Boxes';
  projectDescription: string = `
An interactive layout of colorful cards that respond to cursor movement with a ripple-like radial effect. Each card lights up from the exact point of the cursor using smooth transitions and custom highlight colors, creating an elegant and dynamic user experience with pure HTML, CSS, and JavaScript.
`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/mouse move v3.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="box" style="--clr: #2196f3;"></div>
        <div class="box" style="--clr: #f32175;"></div>
        <div class="box" style="--clr: #ff7f20;"></div>
        <div class="box" style="--clr: #9bdc28;"></div>
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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #333;
}

.container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;

    .box {
      position: relative;
      width: 250px;
      height: 300px;
      background-color: #4a4a4a;
      border-radius: 20px;
      overflow: hidden;

      &::before {
          content: '';
          position: absolute;
          top: var(--y);
          left: var(--x);
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          background-color: var(--clr);
          border-radius: 50%;
          transition: 1s, top 0s, left 0s;
          box-shadow: inset 0 0 50px rgba(0, 0, 0, 1);
      }

      &:hover::before {
          width: 400px;
          height: 400px;
      }
    }
}
    `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
let boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.onmousemove = function (e) {
        let rect = box.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        box.style.setProperty('--x', \`\${ x }px\`);
        box.style.setProperty('--y', \`\${ y }px\`);
    }
});

    `,
      codeTitle: 'main.js'
    }
  ];

  zipFile: string = 'assets/zip-files/cursor move.rar';
}