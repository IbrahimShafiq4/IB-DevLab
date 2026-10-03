import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-rains',
  imports: [SharedCodeComponent],
  template: `
  <app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets" [CSSCodeSnippet]="CSSCodeSnippets"
    [JSCodeSnippet]="JSCodeSnippets" [projectDate]="projectDate" [projectDescription]="projectDescription"
    [projectVersion]="projectVersion" [projectName]="projectName" [zipFile]="zipFile"   />
  `
})
export class RainsComponent {
  projectName: string = '🌈 Colorful Rains Animation with JavaScript and CSS';
  projectDescription: string = `
This visual animation project creates a beautiful rain of glowing, colorful circles falling from the top of the screen.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.3.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];

  liveHtml: string = `<h2>Colorful Rains</h2>`;

  get liveCss(): string { return this.CSSCodeSnippets[0]?.code ?? ''; }
  get liveJs(): string { return this.JSCodeSnippets[0]?.code ?? ''; }

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
  <h2>Colorful Rains</h2>
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
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #262626;
  background-image: linear-gradient(to right, #333 1px, transparent 1px),
      linear-gradient(to bottom, #333 1px, transparent 1px);
  background-size: 5vh 5vh;
  overflow: hidden;
}
h2 {
  font-family: Consolas;
  font-size: 8em;
  color: #fff;
  text-shadow: 1px 1px 5px #FFFAE6;
  filter: drop-shadow(1px 1px 5px #fffae6);
}
.circle {
  position: absolute;
  top: 0;
  width: 20px;
  aspect-ratio: 1 / 1;
  border: 5px solid rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  background-color: #0f0;
  animation: animate 10s linear forwards;
  transform-origin: top;
}
@keyframes animate {
  0%   { transform: translateY(0vh) scale(0); }
  10%  { transform: translateY(0vh) scale(1); }
  45%  { transform: translateY(0vh) scale(1); }
  55%  { transform: translateY(calc(100vh - 100%)) scale(1); }
  90%  { transform: translateY(calc(100vh - 100%)) scale(1); transform-origin: bottom; }
  100% { transform: translateY(calc(100vh - 100%)) scale(0); transform-origin: bottom; }
}
      `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
function falling() {
    let divEl = document.createElement('div');
    divEl.setAttribute('class', 'circle');
    document.body.appendChild(divEl);

    let size = Math.random() * 50;
    divEl.style.width = \\\`\\\${5 + size}px\\\`;

    divEl.style.left = Math.random() * innerWidth + 'px';

    let angle = Math.random() * 360;

    divEl.style.boxShadow = '0 0 20px #0f0'
    divEl.style.filter = \\\`hue-rotate(\\\${angle}deg)\\\`;

    setTimeout(() => {
        document.body.removeChild(divEl)
    }, 10000)
}

setInterval(() => {
    falling()
}, 200)
      `,
      codeTitle: 'main.js'
    }
  ];

  zipFile: string = 'assets/zip-files/colorful rains.rar';
}