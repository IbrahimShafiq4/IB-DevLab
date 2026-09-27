import { Component } from '@angular/core';
import {
  ICodeStructure,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p24',
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
export class CssBattleP24 {

  projectName: string = 'CSS Battle – Geometric Alarm Clock';

  projectDescription: string = `
  CSS recreation of a geometric alarm clock using pure HTML and CSS.

  The design uses:
  - CSS pseudo-elements
  - Absolute positioning
  - Border-radius
  - CSS outline
  - CSS transforms and rotation
  - Precise dimensions and spacing
  - Minimal HTML structure

  The composition consists of:
  - A large circular clock body
  - Two alarm bells at the top
  - Two angled legs at the bottom
  - A centered geometric composition
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
    'CSS Transforms',
    'CSS Battle'
  ];

  projectVideSrc: string =
    './../../../../../assets/video-samples/cssbattle/geometric-alarm-clock.png';

  projectVideoOnYoutube: string = 'https://cssbattle.dev/';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<div class="o"><div class="i"></div></div><style>body{display:grid;place-items:center;background:#D5A06C}.o{width:140px;height:140px;background:inherit;border-radius:50%;border:20px solid #1E2C5C;outline:10px solid #D5A06C;z-index:2;position:relative}.o:before,.o:after{content:'';position:absolute;z-index:-1;top:-40px;width:20px;height:20px;border-radius:50%;border:20px solid #1E2C5C;left:-20px}.o:after{right:-20px;left:unset}.i{position:absolute;top:calc(100% - 2px);left:6px;rotate:45deg;width:20px;height:40px;background:#1E2C5C}.i:after{content:'';position:absolute;top:-76px;right:-76px;width:21px;height:40px;background:#1E2C5C;rotate:90deg}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/24 - p24.zip';
}