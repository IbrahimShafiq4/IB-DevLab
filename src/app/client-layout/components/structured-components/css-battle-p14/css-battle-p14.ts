import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p14',
  imports: [SharedCodeComponent],
  template: `
<app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets"
    [projectDate]="projectDate" [projectDescription]="projectDescription" [projectVersion]="projectVersion"
    [projectName]="projectName" [isItCssBattle]="true" [projectOnYoutube]="projectVideoOnYoutube" [zipFile]="zipFile" [projectVideoSrc]="projectVideSrc" />
  `,
  styles: ``
})
export class CssBattleP14 {

  projectName: string = 'CSS Battle – Geometric Arch';

  projectDescription: string = `
  CSS recreation of a simple geometric arch using pure CSS.

  The design uses:
  - CSS pseudo-elements
  - Absolute positioning
  - Precise dimensions and spacing
  - Border-radius for the curved shape
  - Layered geometric shapes
  - Minimal HTML structure

  The composition consists of:
  - A rounded arch
  - A rectangular top section
  - A centered outlined opening
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
    './../../../../../assets/video-samples/cssbattle/geometric-arch.png';

  projectVideoOnYoutube: string = 'https://cssbattle.dev/play/4p0BAlG4T8ddxGUbcOhn';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<div></div><style>body{display:flex;justify-content:center;align-items:center;background:#FAE29E}div{width:230px;height:100px;background:#743F3F;border-radius:50px 50px 0 0;position:relative}div:before,div:after{content:'';position:absolute}div:before{background:#743F3F;width:120px;height:30px;top:-40px;left:55px}div:after{background:#FAE29E;width:100px;height:50px;border:10px solid #743F3F;top:60px;left:55px;z-index:3}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/14 - p14.zip';
}