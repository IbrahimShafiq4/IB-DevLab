import { Component } from '@angular/core';
import {
  ICodeStructure,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p16',
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
export class CssBattleP16 {

  projectName: string = 'CSS Battle – Geometric Hook';

  projectDescription: string = `
  CSS recreation of a geometric hook-like shape using pure HTML and CSS.

  The design uses:
  - CSS pseudo-elements
  - Absolute positioning
  - Border-radius
  - Precise dimensions and spacing
  - CSS transforms
  - Minimal HTML structure

  The composition consists of:
  - A large rounded outer shape
  - A horizontal inner bar
  - A vertical end section
  - Layered shapes using pseudo-elements
  `;

  projectDate: string = 'Last updated: Sep 18, 2026';
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
    './../../../../../assets/video-samples/cssbattle/geometric-hook.png';

  projectVideoOnYoutube: string = 'https://cssbattle.dev/';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<div class="o"><div class="i"></div></div><style>body{display:flex;justify-content:center;align-items:center;background:#4C4C6B}.o{width:120px;height:180px;background:#4C4C6B;border:20px solid #FAE29E;border-radius:40px;position:relative}.o:before{content:'';position:absolute;top:-20px;left:83.7%;width:50px;height:220px;background:#4C4C6B}.i{position:absolute;width:160px;height:20px;background:#FAE29E;top:50%;left:calc(50% + 2px);transform:translate(-20%,-50%)}.i:after{content:'';position:absolute;top:-30px;left:calc(100% - 20px);width:20px;height:80px;background:inherit}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/16 - p16.zip';
}