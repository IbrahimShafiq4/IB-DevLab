import { Component } from '@angular/core';
import {
  ICodeStructure,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p29',
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
export class CssBattleP29 {

  projectName: string = 'CSS Battle – Burger';

  projectDescription: string = `
  CSS recreation of a simple burger-like geometric shape using pure HTML and CSS.

  The design uses:
  - CSS pseudo-elements
  - Absolute positioning
  - Border-radius
  - Layered shapes
  - Precise sizing
  - Minimal HTML structure
  - Pure CSS without images or SVG

  The composition consists of:
  - A rounded top bun
  - A light middle layer
  - A rectangular bottom layer
  `;

  projectDate: string = 'Last updated: Oct 4, 2026';
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

  projectVideoOnYoutube: string = '';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<div></div><style>body{display:grid;place-items:center;background:#4C7A6F}div{width:175px;height:25px;background:#D6B96F;position:relative;transform:translateY(-5px)}div:before{content:"";position:absolute;width:100%;height:38px;background:#D6B96F;border-radius:100% 100% 0 0/100% 100% 0 0;top:-50px}div:after{content:"";position:absolute;width:100%;height:25px;background:#ddd;top:-38px}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/29 - p29.zip';
}