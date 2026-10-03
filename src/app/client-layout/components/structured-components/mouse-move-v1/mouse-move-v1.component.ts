import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-mouse-move-v1',
  imports: [SharedCodeComponent],
  template: `
  <app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets" [CSSCodeSnippet]="CSSCodeSnippets"
    [JSCodeSnippet]="JSCodeSnippets" [projectDate]="projectDate" [projectDescription]="projectDescription"
    [projectVersion]="projectVersion" [projectName]="projectName" [zipFile]="zipFile"   />
  `
})
export class MouseMoveV1Component {
  projectName: string = '🌀 Interactive Rotating Arrows Animation with CSS & JavaScript';
  projectDescription: string = `
An engaging animation featuring arrows that follow the mouse position. Built with HTML, CSS, and vanilla JavaScript.
`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];

  liveHtml: string = ``;

  get liveCss(): string {
    return this.CSSCodeSnippets[0]?.code ?? '';
  }

  liveJs: string = `
const spark = (event) => {
    let i = document.createElement('i');
    i.style.left = (event.pageX) + 'px';
    i.style.top = (event.pageY) + 'px';

    i.style.scale = \`\${Math.random() * 2 + 1}\`;
    i.style.setProperty('--x', getTransition());
    i.style.setProperty('--y', getTransition());

    document.body.appendChild(i);

    setTimeout(() => {
        document.body.removeChild(i);
    }, 2000)
}

const getTransition = () => {
    return \`\${Math.random() * 400 - 200}px\`
}

document.addEventListener('mousemove', spark)
  `;

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
    background-color: #222;
    overflow: hidden;
}

i {
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: #0f0;
    animation: animate 2s linear forwards;
}

@keyframes animate {
    0% {
        opacity: 1;
        transform: translate(0, 0);
    }

    100% {
        opacity: 0;
        transform: translate(var(--x), var(--y))
    }
}
    `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
const spark = (event) => {
    let i = document.createElement('i');
    i.style.left = (event.pageX) + 'px';
    i.style.top = (event.pageY) + 'px';

    i.style.scale = \`\${Math.random() * 2 + 1}\`;
    i.style.setProperty('--x', getTransition());
    i.style.setProperty('--y', getTransition());

    document.body.appendChild(i);

    setTimeout(() => {
        document.body.removeChild(i);
    }, 2000)
}

const getTransition = () => {
    return \`\${Math.random() * 400 - 200}px\`
}

document.addEventListener('mousemove', spark)
    `,
      codeTitle: 'main.js'
    }
  ];

  zipFile: string = 'assets/zip-files/arrow.rar';
}