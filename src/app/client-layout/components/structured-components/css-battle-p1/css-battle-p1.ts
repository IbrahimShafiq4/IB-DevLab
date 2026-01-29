import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p1',
  imports: [SharedCodeComponent],
  templateUrl: './css-battle-p1.html',
  styleUrl: './css-battle-p1.scss'
})
export class CssBattleP1 {
  projectName: string = 'CSS Battle – Layout Blocks Challenge';
  projectDescription: string = `
CSS Battle challenge implemented using pure HTML and CSS.

The solution relies on a minimal HTML structure and uses Flexbox,
CSS variables, and background colors to recreate the target design.
All elements are styled using simple div blocks without images,
SVGs, or JavaScript, following CSS Battle best practices.
`;

  projectDate: string = 'Last updated: Jan 2026';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS'];
  projectVideSrc: string = './../../../../../assets/video-samples/cssbattle/Piano.png';
  projectVideoOnYoutube: string = 'https://cssbattle.dev/play/jcZG5eWb8eLqs2AmUCz4';
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
    <div class="parent">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
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
    --white_blue: #37b4bd;
    --white_pink: #f9eaf1;
    --darken_color: #394257;
}

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
    background-color: var(--white_blue);
}

div.parent {
    width: 100px;
    height: 60px;
    background: #dd6b4d;
    transform: translateY(-8px);
    width: 340px;
    padding-left: 20px;
    background:
        var(--white_pink);
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;
    gap: 30px;

    .block {
        width: 30px;
        height: 30px;
        background-color: var(--darken_color)
    }
}
    `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/cssBattle/01 - p1.rar';
}
