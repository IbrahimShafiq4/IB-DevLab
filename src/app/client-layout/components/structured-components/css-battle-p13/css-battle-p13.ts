import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p13',
  imports: [SharedCodeComponent],
  template: `
<app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets"
    [projectDate]="projectDate" [projectDescription]="projectDescription" [projectVersion]="projectVersion"
    [projectName]="projectName" [isItCssBattle]="true" [projectOnYoutube]="projectVideoOnYoutube" [zipFile]="zipFile" [projectVideoSrc]="projectVideSrc" />
  `,
  styles: ``
})
export class CssBattleP13 {

  projectName: string = 'CSS Battle – Four Leaf Shape';

  projectDescription: string = `
  CSS recreation of a four-leaf geometric shape using pure HTML and CSS.

  The design uses:
  - CSS pseudo-elements
  - Absolute positioning
  - Border-radius for curved shapes
  - Precise spacing and dimensions
  - CSS variables for colors
  - Minimal HTML structure

  The composition consists of:
  - Four symmetrical leaf-like shapes
  - A centered cross-shaped gap
  - Two CSS elements with multiple pseudo-elements
  - Pure CSS with no images or SVG
  `;

  projectDate: string = 'Last updated: Sep 15, 2026';
  projectVersion: string = 'v1.0.0';

  projectTags: string[] = [
    'Web Development',
    'HTML',
    'CSS',
    'Pseudo-elements',
    'Positioning',
    'Border-radius',
    'CSS Shapes',
    'CSS Battle'
  ];

  projectVideSrc: string =
    './../../../../../assets/video-samples/cssbattle/Four Leaf Shape.png';

  projectVideoOnYoutube: string = 'https://cssbattle.dev/play/5ZezM7kuEUF3qoAOjCIx';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<div class="fs"></div><div class="ss"></div><style>:root{--bg:#993576;--i:#5ADAB8}body{display:flex;align-items:center;justify-content:center;background:var(--bg)}.fs{position:relative}.fs:before,.fs:after{content:'';position:absolute;top:0;left:0;width:110px;height:110px;background:var(--i)}.fs:before{top:-120px;left:-120px;border-radius:50% 50% 0 50%}.fs:after{top:10px;left:10px;border-radius:0 50% 50% 50%}.ss{position:relative}.ss:before,.ss:after{content:'';position:absolute;top:0;left:0;width:110px;height:110px;background:var(--i);border-radius:70px 0 70px 0}.ss:before{top:10px;left:-120px}.ss:after{top:-120px;left:10px}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/13 - p13.zip';
}
