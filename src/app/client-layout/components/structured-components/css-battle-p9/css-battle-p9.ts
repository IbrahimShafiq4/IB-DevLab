import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p9',
  imports: [SharedCodeComponent],
  templateUrl: './css-battle-p9.html',
  styleUrl: './css-battle-p9.scss'
})
export class CssBattleP9 {

  projectName: string = 'CSS Battle – Mirrored Arc Shape';

  projectDescription: string = `
CSS Battle challenge recreating a symmetric double-arc shape
using pure CSS and minimal markup.

The design depends on:
- large border-radius curves
- thick border trick
- -webkit-box-reflect for mirroring
- precision spacing using q units

No images. No extra elements.
Just CSS creativity and geometry control.
`;

  projectDate: string = 'Last updated: Feb 2026';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'Border Radius', 'CSS Battle'];

  projectVideSrc: string =
    './../../../../../assets/video-samples/cssbattle/p9.png';

  projectVideoOnYoutube: string =
    'https://cssbattle.dev/play/aRotJJFSZF9yoX4o8pZ8';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<p><a><style>
*{background:#B6EBE7;border-radius:212q 0 0;+*,a{background:#5370D9;margin:50 20 50 180}+*{-webkit-box-reflect:left -42q}}p,a{position:fixed;padding:50;margin:100;}a{padding:15;margin:20}</style>
      `,
      codeTitle: 'index.html'
    }
  ];

  zipFile: string = 'assets/zip-files/cssBattle/09 - p9.rar';
}