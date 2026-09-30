import { Component } from '@angular/core';
import {
  ICodeStructure,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p27',
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
export class CssBattleP27 {

  projectName: string = 'CSS Battle – Geometric U Shape';

  projectDescription: string = `
  CSS recreation of a geometric U-shaped design using pure HTML and CSS.

  The design uses:
  - CSS pseudo-elements
  - Absolute positioning
  - Border-radius
  - CSS box-reflect
  - Layered shapes
  - Precise dimensions and spacing
  - Minimal HTML structure

  The composition consists of:
  - A large U-shaped outline
  - A pink inner section
  - Symmetrical vertical sides
  - Rounded bottom sections
  - Small decorative geometric elements
  `;

  projectDate: string = 'Last updated: Sep 30, 2026';
  projectVersion: string = 'v1.0.0';

  projectTags: string[] = [
    'Web Development',
    'HTML',
    'CSS',
    'Pseudo-elements',
    'Positioning',
    'Border-radius',
    'CSS Shapes',
    'CSS Box Reflect',
    'CSS Battle'
  ];

  projectVideSrc: string =
    './../../../../../assets/video-samples/cssbattle/geometric-u-shape.png';

  projectVideoOnYoutube: string =
    'https://cssbattle.dev/play/F8dyF0XEp3g1Ff4mG90c';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<div></div><style>body{display:grid;place-items:center;background:#F8F5F1;position:relative}body:before{content:'';position:absolute;width:100px;height:120px;background:transparent;border:20px solid #FCC9E3;border-top:20px solid transparent;border-bottom-left-radius:80px;border-bottom-right-radius:80px}div{width:80px;height:100px;border-bottom-left-radius:80px;border-bottom-right-radius:80px;border:10px solid #4355CC;border-top:10px solid transparent;position:relative}div:before{content:'';position:absolute;top:-40px;left:-40px;width:20px;height:20px;border:10px solid #4355CC;-webkit-box-reflect:right 80px;background:#F8F5F1}div:after{content:'';position:absolute;top:-10px;left:-40px;height:130px;width:140px;background:transparent;border-bottom-left-radius:80px;border-bottom-right-radius:80px;border:10px solid #4355CC;border-top:10px solid transparent}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/27 - p27.zip';
}