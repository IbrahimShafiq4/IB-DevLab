import { Component } from '@angular/core';
import {
  ICodeStructure,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p22',
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
export class CssBattleP22 {

  projectName: string = 'CSS Battle – Geometric Trash Can';

  projectDescription: string = `
  CSS recreation of a geometric trash can using pure HTML and CSS.

  The design uses:
  - CSS pseudo-elements
  - Absolute positioning
  - Border-radius
  - CSS box-reflect
  - Precise dimensions and spacing
  - Minimal HTML structure

  The composition consists of:
  - A rounded rectangular container
  - A top lid
  - A raised handle
  - Three vertical inner sections
  `;

  projectDate: string = 'Last updated: Sep 26, 2026';
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
    './../../../../../assets/video-samples/cssbattle/geometric-trash-can.png';

  projectVideoOnYoutube: string = 'https://cssbattle.dev/';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<div class="o"><div class="i"></div></div><style>body{display:grid;place-items:center;background:#FFF8E1}.o{width:140px;height:180px;transform:translateY(20px);background:#9676CF;border-bottom-left-radius:30px;border-bottom-right-radius:30px;position:relative}.o:before{content:'';position:absolute;top:-20px;left:-16px;width:169px;height:20px;background:#7454B4;border-radius:20px;z-index:3}.i{position:absolute;top:-40px;left:50%;transform:translate(-50%);background:#9676CF;width:70px;height:40px;border-radius:45px}.i:before,.i:after{content:'';position:absolute;top:70px;left:50%;transform:translateX(-50%);height:120px;width:20px;background:#7454B4;border-radius:20px}.i:before{left:-5px;-webkit-box-reflect:right 60px}.i:after{left:calc(50% + .5px)}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/22 - p22.zip';
}