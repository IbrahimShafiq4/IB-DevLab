import { Component } from '@angular/core';
import {
  ICodeStructure,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p28',
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
export class CssBattleP28 {

  projectName: string = 'CSS Battle – Cassette Tape';

  projectDescription: string = `
  CSS recreation of a cassette tape using pure HTML and CSS.

  The design uses:
  - CSS pseudo-elements
  - Absolute positioning
  - Border-radius
  - CSS box-reflect
  - Layered geometric shapes
  - Precise sizing and positioning
  - Minimal HTML structure

  The composition consists of:
  - A dark cassette body
  - A light rectangular label
  - Two circular tape reels
  - A bottom cassette section
  - Pure CSS without images or SVG
  `;

  projectDate: string = 'Last updated: Oct 1, 2026';
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
    './../../../../../assets/video-samples/cssbattle/cassette-tape.png';

  projectVideoOnYoutube: string = '';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<p><i></i></p><style>body{display:grid;place-items:center;background:#7DCB61}p{width:270px;height:190px;background:#454545;border-radius:10px;position:relative}p:before{content:'';position:absolute;top:15px;left:15px;width:calc(100% - 30px);height:100px;background:#D9D9D9}p:after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:40px;height:10px;background:#454545;border-top:20px solid #727272;border-bottom:20px solid #727272;border-right:55px solid #727272;border-left:55px solid #727272}i{position:absolute;top:50%;left:50%;transform:translate(-50%,calc(-50% - 30px));width:150px;height:50px;background:#454545;border-radius:50px}i:before{content:'';position:absolute;top:5px;left:5px;width:40px;height:40px;border-radius:50%;background:#D9D9D9;-webkit-box-reflect:right 60px}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/28 - p28.zip';
}