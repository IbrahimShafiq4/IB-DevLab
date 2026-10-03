import { Component } from '@angular/core';
import {
  ICodeStructure,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p23',
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
export class CssBattleP23 {

  projectName: string = 'CSS Battle – Geometric Container';

  projectDescription: string = `
  CSS recreation of a minimal geometric container using pure HTML and CSS.

  The design uses:
  - CSS pseudo-elements
  - Absolute positioning
  - Border-radius
  - CSS box-reflect
  - Precise dimensions and spacing
  - Minimal HTML structure

  The composition consists of:
  - A rounded rectangular container
  - A dark top section
  - Two circular side details
  - A simple geometric composition
  `;

  projectDate: string = 'Last updated: Sep 27, 2026';
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
<div></div><style>body{display:grid;place-items:center;background:#747992}div{width:200px;height:100px;background:#EED9D9;border-bottom-left-radius:49px;border-bottom-right-radius:50px;position:relative}div:before,div:after{content:'';position:absolute;top:0;left:0}div:before{width:160px;height:25px;background:#394257;transform:translateX(-50%);left:50%}div:after{width:20px;height:20px;background:#747992;border-radius:50%;top:35px;left:20px;-webkit-box-reflect:right 120px}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/23 - p23.zip';
}