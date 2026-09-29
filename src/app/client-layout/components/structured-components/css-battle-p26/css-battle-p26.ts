import { Component } from '@angular/core';
import {
  ICodeStructure,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p26',
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
export class CssBattleP26 {

  projectName: string = 'CSS Battle – Geometric Bars';

  projectDescription: string = `
  CSS recreation of a geometric bar pattern using pure HTML and CSS.

  The design uses:
  - CSS pseudo-elements
  - Box-shadow
  - Absolute positioning
  - Precise dimensions and spacing
  - Minimal HTML structure

  The composition consists of:
  - Two vertical dark sections
  - Four horizontal red bars
  - One long bottom bar
  - A centered geometric layout
  `;

  projectDate: string = 'Last updated: Sep 29, 2026';
  projectVersion: string = 'v1.0.0';

  projectTags: string[] = [
    'Web Development',
    'HTML',
    'CSS',
    'Pseudo-elements',
    'Box-shadow',
    'Positioning',
    'CSS Shapes',
    'CSS Battle'
  ];

  projectVideSrc: string =
    './../../../../../assets/video-samples/cssbattle/geometric-bars.png';

  projectVideoOnYoutube: string = 'https://cssbattle.dev/';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<div class="o"></div><style>body{margin:0;background:#C0D6E7}.o{position:absolute;top:0;left:50%;transform:translateX(-50%);width:270px;height:177px;background:#CC5360;box-shadow:0 0 0 0 #CC5360}.o:before{content:'';position:absolute;left:0;top:0;width:36px;height:132px;background:#2D3464;box-shadow:234px 0 #2D3464}.o:after{content:'';position:absolute;left:63px;top:15px;width:144px;height:18px;background:#CC5360;box-shadow:0 36px #CC5360,0 72px #CC5360,0 108px #CC5360}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/26 - p26.zip';
}