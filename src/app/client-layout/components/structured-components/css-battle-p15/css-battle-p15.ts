import { Component } from '@angular/core';
import { SharedCodeComponent, ICodeStructure } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p15',
  imports: [SharedCodeComponent],
  template: `
    <app-shared-code
      [tags]="projectTags"
      [HTMLCodeSnippet]="HTMLCodeSnippets"
      [projectDate]="projectDate"
      [projectDescription]="projectDescription"
      [projectVersion]="projectVersion"
      [projectName]="projectName"
      [isItCssBattle]="true"
      [projectOnYoutube]="projectVideoOnYoutube"
      [zipFile]="zipFile"
      [projectVideoSrc]="projectVideSrc"
    />
  `,
  styles: ``
})
export class CssBattleP15 {

  projectName: string = 'CSS Battle – Geometric Temple';

  projectDescription: string = `
  CSS recreation of a simple geometric temple using pure HTML and CSS.

  The design uses:
  - CSS triangles
  - Pseudo-elements
  - Absolute positioning
  - CSS box-reflect
  - Precise dimensions and spacing
  - Minimal HTML structure

  The composition consists of:
  - A large triangular roof
  - Four vertical columns
  - A wide rectangular base
  - A clean geometric layout
  `;

  projectDate: string = 'Last updated: Sep 17, 2026';
  projectVersion: string = 'v1.0.0';

  projectTags: string[] = [
    'Web Development',
    'HTML',
    'CSS',
    'Pseudo-elements',
    'Positioning',
    'CSS Shapes',
    'CSS Battle'
  ];

  projectVideSrc: string =
    './../../../../../assets/video-samples/cssbattle/geometric-temple.png';

  projectVideoOnYoutube: string = 'https://cssbattle.dev/';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<div class="t"></div><div class="c"></div><style>body{display:flex;justify-content:center;align-items:center;background:#7EC3E8}.t{width:0;border-top:100px solid transparent;border-bottom:100px solid #333;border-left:100px solid transparent;border-right:100px solid transparent;position:relative;top:-110px}.t:before,.t:after{content:'';position:absolute;width:10px;height:80px;background:#333;top:100px}.t:before{left:25px;-webkit-box-reflect:right 20px}.t:after{left:-35px;-webkit-box-reflect:left 20px}.c{width:220px;height:40px;position:absolute;top:220px;background:#333}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/15 - p15.zip';
}