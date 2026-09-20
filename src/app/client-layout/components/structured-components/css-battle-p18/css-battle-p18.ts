import { Component } from '@angular/core';
import {
  ICodeStructure,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p18',
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
export class CssBattleP18 {

  projectName: string = 'CSS Battle – Geometric H';

  projectDescription: string = `
  CSS recreation of a geometric H-like shape using pure HTML and CSS.

  The design uses:
  - CSS pseudo-elements
  - Absolute positioning
  - Precise dimensions and spacing
  - CSS box-reflect
  - Layered rectangular shapes
  - Minimal HTML structure

  The composition consists of:
  - Two vertical side sections
  - Top and bottom horizontal bars
  - A centered opening
  - Small extensions created with CSS reflection
  `;

  projectDate: string = 'Last updated: Sep 20, 2026';
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
    './../../../../../assets/video-samples/cssbattle/geometric-h.png';

  projectVideoOnYoutube: string = 'https://cssbattle.dev/';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<div></div><style>body{display:flex;justify-content:center;align-items:center;background:#51A499}div{position:relative;top:105px;left:-110px;width:60px;height:10px;background:#FEE190;-webkit-box-reflect:right 160px}div:before,div:after{content:'';position:absolute;top:0;left:0;background:#FEE190}div:before{top:-200px;left:-180px;width:40px;height:200px;-webkit-box-reflect:right 160px}div:after{width:120px;height:40px;top:-180px;left:20px;-webkit-box-reflect:below 80px}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/18 - p18.zip';
}