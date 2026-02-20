import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p6',
  imports: [SharedCodeComponent],
  templateUrl: './css-battle-p6.html',
  styleUrl: './css-battle-p6.scss'
})
export class CssBattleP6 {

    projectName: string = 'CSS Battle – Polygon Shape Challenge';

    projectDescription: string = `
CSS Battle challenge using a single HTML element and pure CSS.

The design relies on nested universal selectors and
clip-path: polygon() to construct a complex geometric shape.

All visuals are built using only CSS without extra elements.
`;

    projectDate: string = 'Last updated: Feb 2026';
    projectVersion: string = 'v1.0.0';
    projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'Clip-Path'];

    projectVideSrc: string =
      './../../../../../assets/video-samples/cssbattle/p6.png';

    projectVideoOnYoutube: string =
      'https://cssbattle.dev/play/OLQMoYRrSGz0ugFpz8AE';

    HTMLCodeSnippets: ICodeStructure[] = [
        {
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Polygon Shape</title>
    <style>
      *{
        background:#2F434E;
        *{
          background:#6AC09E;
          margin:30 80;
          clip-path:polygon(
            33% 25%, 
            66.5% 0%,
            66.5% 25%, 
            100% 50%, 
            66.5% 75%, 
            66.5% 100%, 
            33.5% 75%, 
            33.5% 25%, 
            0% 50%, 
            33% 75%, 
            0% 100%, 
            0% 0%
          )
        }
      }
</style>
</head>
<body>
</body>
</html>
            `,
            codeTitle: 'index.html'
        }
    ];

    CSSCodeSnippets: ICodeStructure[] = [
        {
            code: `
<style>
*{
  background:#2F434E;
  *{
    background:#6AC09E;
    margin:30 80;
    clip-path:polygon(
      33% 25%, 
      66.5% 0%,
      66.5% 25%, 
      100% 50%, 
      66.5% 75%, 
      66.5% 100%, 
      33.5% 75%, 
      33.5% 25%, 
      0% 50%, 
      33% 75%, 
      0% 100%, 
      0% 0%
    )
  }
}
</style>
            `,
            codeTitle: 'style.css'
        }
    ];

    zipFile: string = 'assets/zip-files/cssBattle/06 - p6.rar';
}