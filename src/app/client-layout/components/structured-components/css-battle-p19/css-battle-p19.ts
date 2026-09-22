import { Component } from '@angular/core';
import {
  ICodeStructure,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p19',
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
export class CssBattleP19 {

  projectName: string = 'CSS Battle – Geometric B';

  projectDescription: string = `
  CSS recreation of a geometric B-like shape using pure HTML and CSS.

  The design uses:
  - CSS pseudo-elements
  - Absolute positioning
  - Border-radius
  - Layered shapes
  - Precise dimensions and spacing
  - Minimal HTML structure

  The composition consists of:
  - A vertical central bar
  - Two curved circular sections
  - Overlapping shapes with pseudo-elements
  - A simple geometric composition
  `;

  projectDate: string = 'Last updated: Sep 22, 2026';
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
    './../../../../../assets/video-samples/cssbattle/geometric-b.png';

  projectVideoOnYoutube: string = 'https://cssbattle.dev/';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<div class="o"><div class="i"></div></div><style>body{display:flex;justify-content:center;align-items:center;background:#8E7B3B}.o{width:30px;height:200px;position:relative}.o:before,.o:after{content:'';position:absolute;width:75px;height:80px;border-radius:50%;border:10px solid #463C1D}.o:before{border-right:10px solid #8E7B3B;left:-50px}.o:after{border-left:10px solid #8E7B3B;right:-50px;bottom:0}.i{background:#463C1D;width:100%;height:100%;position:relative;z-index:9}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/19 - p19.zip';
}