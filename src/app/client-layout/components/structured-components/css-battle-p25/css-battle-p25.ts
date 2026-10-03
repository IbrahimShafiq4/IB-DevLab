import { Component } from '@angular/core';
import {
  ICodeStructure,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p25',
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
      
    />
  `,
  styles: ``
})
export class CssBattleP25 {

  projectName: string = 'CSS Battle – Geometric D';

  projectDescription: string = `
  CSS recreation of a geometric D-like shape using pure HTML and CSS.

  The design uses:
  - CSS pseudo-elements
  - Absolute positioning
  - Border-radius
  - CSS box-reflect
  - Precise dimensions and spacing
  - Minimal HTML structure

  The composition consists of:
  - A large curved geometric shape
  - A vertical section
  - A small bottom extension
  - Two horizontal bars
  `;

  projectDate: string = 'Last updated: Sep 28, 2026';
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

  projectVideoOnYoutube: string = 'https://cssbattle.dev/';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<div class="o"><div class="i"></div></div><style>body{display:grid;place-items:center}.o{position:relative;z-index:-1;width:50px;height:100px;border:30px solid #000;left:95px;border-top-left-radius:75px;border-bottom-left-radius:75px}.o:before,.o:after{content:'';position:absolute;z-index:9}.o:before{right:0;top:0;width:10px;height:130px;background:#fff}.o:after{right:-60px;bottom:-30px;width:30px;height:30px;background:#000}.i{position:absolute;top:50%;left:calc(50% - 120px);transform:translate(-50%,-50%);width:90px;height:30px;background:#000;-webkit-box-reflect:left 20px}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/25 - p25.zip';
}