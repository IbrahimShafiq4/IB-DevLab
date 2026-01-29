import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p2',
  imports: [SharedCodeComponent],
  templateUrl: './css-battle-p2.html',
  styleUrl: './css-battle-p2.scss'
})
export class CssBattleP2 {
  projectName: string = 'CSS Battle – Circular Shapes Challenge';

  projectDescription: string = `
CSS Battle challenge created using pure HTML and CSS.

The design is composed of nested circular div elements,
using border-radius, absolute positioning, and layering
to recreate the target shape without images or SVGs.
`;


  projectDate: string = 'Last updated: Jan 2026';
  projectVersion: string = 'v1.1.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS'];
  projectVideSrc: string = './../../../../../assets/video-samples/cssbattle/circle.png';
  projectVideoOnYoutube: string = 'https://cssbattle.dev/play/jlB7i2EIFoWvji8scttj';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Battle 1</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div>
        <div class="inside-circle"></div>
        <div class="outer-circle"></div>
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
:root {
    --bg: #D5ACAD;
    --darken_brown: #401C1D;
    --yellow: #F4DA64;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: var(--bg);
}

div:not(.inside-circle, .outer-circle) {
    width: 200px;
    height: 200px;
    background: #dd6b4d;
    transform: translateY(-8px);
    border-radius: 50%;
    background-color: var(--darken_brown);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: relative;
}

.inside-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--yellow);
    position: relative;
    z-index: 1;
}

.outer-circle {
    width: 62.5px;
    height: 40px;
    border-radius: 50%;
    background: var(--darken_brown);
    position: absolute;
    bottom: 40px;
    z-index: 2;
}
    `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/cssBattle/02 - p2.rar';
}

