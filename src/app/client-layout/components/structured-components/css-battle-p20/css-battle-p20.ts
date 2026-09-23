import { Component } from '@angular/core';
import {
  ICodeStructure,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p20',
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
export class CssBattleP20 {

  projectName: string = 'CSS Battle – Geometric Capsule';

  projectDescription: string = `
  CSS recreation of a geometric capsule-like shape using pure HTML and CSS.

  The design uses:
  - CSS pseudo-elements
  - Border-radius
  - Absolute positioning
  - CSS box-reflect
  - Precise dimensions and spacing
  - Minimal HTML structure

  The composition consists of:
  - A large rounded vertical shape
  - Two horizontal side cutouts
  - Two centered vertical cutouts
  - Symmetrical geometric sections
  `;

  projectDate: string = 'Last updated: Sep 23, 2026';
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
    './../../../../../assets/video-samples/cssbattle/geometric-capsule.png';

  projectVideoOnYoutube: string = 'https://cssbattle.dev/';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<div></div><style>body{background:#8E3B66;display:grid;place-items:center}div{width:20px;height:100px;background:#F5A7A7;border:50px solid #F5A7A7;border-radius:60px;position:relative}div:before,div:after{content:'';position:absolute}div:before{top:50%;left:-50px;transform:translateY(-50%);width:20px;height:40px;background:#8E3B66;-webkit-box-reflect:right 80px}div:after{top:calc(50% - 30px);left:50%;transform:translate(-50%,-50%);width:20px;height:40px;background:#8E3B66;-webkit-box-reflect:below 20px}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/20 - p20.zip';
}