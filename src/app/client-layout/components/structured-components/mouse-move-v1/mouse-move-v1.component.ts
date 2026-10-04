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
  projectName: string = '🌀 Interactive Rotating Arrow Trail Following the Mouse';
  projectDescription: string = `
A glowing green arrow trail that follows the cursor in real time. Each arrow rotates
based on the direction of mouse movement, creating a dynamic "flowing" effect.
Built with vanilla JavaScript, HTML, and CSS — no libraries needed.
  `;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];

  /* ─── LIVE PREVIEW ─────────────────────────────────────── */
  liveHtml: string = ``;

  get liveCss(): string {
    return this.CSSCodeSnippets[0]?.code ?? '';
  }

  get liveJs(): string {
    return this.JSCodeSnippets[0]?.code ?? '';
  }

  /* ─── ORIGINAL SNIPPETS ────────────────────────────────── */
  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rotating Arrow Trail</title>
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
    height: 100vh;
}

i {
    position: absolute;
    width: 18px;
    height: 18px;
    background-color: #0f0;

    /* Arrow shape via clip-path */
    clip-path: polygon(0 0, 100% 50%, 0 100%, 25% 50%);

    /* Center on cursor, rotate by --rot, scale by --scale */
    transform: translate(-50%, -50%)
               rotate(var(--rot, 0deg))
               scale(var(--scale, 1));

    /* Glowing effect */
    filter: drop-shadow(0 0 6px #0f0)
            drop-shadow(0 0 12px #0f0);

    /* Fade out animation */
    animation: fadeOut 0.8s linear forwards;

    /* Don't intercept mouse events */
    pointer-events: none;
}

@keyframes fadeOut {
    to {
        opacity: 0;
        transform: translate(-50%, -50%)
                   rotate(var(--rot, 0deg))
                   scale(0);
    }
}
    `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
let lastX = 0;
let lastY = 0;

const spawnArrow = (event) => {
    const arrow = document.createElement('i');
    arrow.style.left = event.pageX + 'px';
    arrow.style.top = event.pageY + 'px';

    // Direction of movement → rotation angle
    const dx = event.pageX - lastX;
    const dy = event.pageY - lastY;
    const rot = Math.atan2(dy, dx) * 180 / Math.PI;
    arrow.style.setProperty('--rot', rot + 'deg');

    // Random scale for variety
    const scale = 0.6 + Math.random() * 0.8;
    arrow.style.setProperty('--scale', scale.toString());

    document.body.appendChild(arrow);

    // Clean up after animation ends
    setTimeout(() => {
        document.body.removeChild(arrow);
    }, 800);

    lastX = event.pageX;
    lastY = event.pageY;
};

document.addEventListener('mousemove', spawnArrow);
    `,
      codeTitle: 'main.js'
    }
  ];

  zipFile: string = 'assets/zip-files/arrow.rar';
}