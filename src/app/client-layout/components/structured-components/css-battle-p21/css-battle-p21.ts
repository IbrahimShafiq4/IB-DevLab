import { Component } from '@angular/core';
import {
  ICodeStructure,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p21',
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
export class CssBattleP21 {

  projectName: string = 'CSS Battle – Geometric Plus';

  projectDescription: string = `
  CSS recreation of a geometric plus-like shape using pure HTML and CSS.

  The design uses:
  - CSS pseudo-elements
  - Absolute positioning
  - Precise dimensions and spacing
  - Layered geometric shapes
  - Minimal HTML structure

  The composition consists of:
  - A vertical main section
  - A horizontal center section
  - Two additional square sections
  - A simple geometric composition
  `;

  projectDate: string = 'Last updated: Sep 24, 2026';
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
    './../../../../../assets/video-samples/cssbattle/geometric-plus.png';

  projectVideoOnYoutube: string = 'https://cssbattle.dev/';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<div class="o"><div class="i"></div></div><style>body{display:grid;place-items:center;background:#FADE8B}.o{width:80px;height:240px;background:#3A4B86;position:relative}.o:before{content:'';width:240px;height:81px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:inherit}.o:after{content:'';position:absolute;top:0;left:100px;width:60px;height:60px;background:inherit}.i{width:60px;height:60px;background:inherit;position:absolute;bottom:0;left:-80px}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/21 - p21.zip';
}