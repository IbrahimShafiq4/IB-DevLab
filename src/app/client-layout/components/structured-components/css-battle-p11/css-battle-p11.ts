import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p11',
  imports: [SharedCodeComponent],
  templateUrl: './css-battle-p11.html',
  styleUrl: './css-battle-p11.scss'
})
export class CssBattleP11 {

  projectName: string = 'CSS Battle – Geometric Flag';

  projectDescription: string = `
  CSS recreation of a geometric flag-like shape using pure HTML and CSS.

  The design focuses on:
  - CSS pseudo-elements
  - Absolute positioning
  - Precise dimensions and offsets
  - Layered geometric shapes
  - CSS box reflection
  - Minimal HTML structure
  - Pure CSS without images

  The composition consists of:
  - A vertical dark pole
  - A white geometric flag
  - Dark borders and decorative sections
  - A mirrored reflection below the main shape

  The challenge demonstrates how complex geometric illustrations can be
  recreated using only a few HTML elements and carefully positioned CSS shapes.
  `;

  projectDate: string = 'Last updated: Feb 2026';
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
    './../../../../../assets/video-samples/cssbattle/flag.png';

  projectVideoOnYoutube: string = 'https://cssbattle.dev/play/cubFEvfArqYmYhs3IHF4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<div><div class=f></div><div class=s></div></div><style>body{background:#7253BC;display:grid;place-items:center;}.f{position:relative;top:-15px;width:100px;height:60px;background:#fff}.f:before{content:'';position:absolute;top:-30px;left:-20px;width:20px;height:230px;background:#391B1B}.f:after{content:'';position:absolute;top:-20px;left:0;width:60px;height:20px;background:#391B1B;-webkit-box-reflect:below 60px}.s{position:relative;top:-75px;left:60px;width:50px;height:80px;background:#fff}.s:before{content:'';position:absolute;top:0;left:-20px;width:80px;height:20px;background:#391B1B;-webkit-box-reflect:below 60px}.s:after{content:'';position:absolute;left:40px;width:20px;height:100px;background:#391B1B}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/11 - p11.zip';
}