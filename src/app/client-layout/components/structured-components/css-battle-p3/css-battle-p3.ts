import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p3',
  imports: [SharedCodeComponent],
  templateUrl: './css-battle-p3.html',
  styleUrl: './css-battle-p3.scss'
})
export class CssBattleP3 {
  projectName: string = 'CSS Battle – Percentage Symbol Challenge';

  projectDescription: string = `
CSS Battle challenge built using pure HTML and CSS.

The percentage symbol is created using basic div elements,
skew transforms, border-radius, and positioning.
All shapes are styled without images, SVGs, or JavaScript.
`;

  projectDate: string = 'Last updated: Jan 2026';
  projectVersion: string = 'v1.1.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS'];
  projectVideSrc: string = './../../../../../assets/video-samples/cssbattle/percentage.png';
  projectVideoOnYoutube: string = 'https://cssbattle.dev/play/128CkPR5NAg3Cx2nUEYj';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Percentage</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="symbol"></div>
    <div class="circle"></div>
    <div class="circle c"></div>
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
    --bg: #4a9a86;
    --obj-colors: #f7cb71;
}

body {
    background-color: var(--bg);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.symbol {
    width: 64px;
    height: 220px;
    background: var(--obj-colors);
    transform: skew(-20deg) translateX(-3px) translateY(-8px);
    position: relative;
    opacity: 1;
}

.circle {
    width: 100px;
    height: 120px;
    position: absolute;
    border-radius: 50%;
    top: 40px;
    left: 12.5%;
    background: var(--obj-colors);

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--bg);
        width: 20px;
        height: 60px;
    }
}

.circle.c {
    top: unset;
    bottom: 40px;
    left: unset;
    right: 12.5%;
    background: var(--obj-colors);
}
    `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/cssBattle/03 - p3.rar';
}
