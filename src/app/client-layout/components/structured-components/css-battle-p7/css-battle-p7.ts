import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p7',
  imports: [SharedCodeComponent],
  templateUrl: './css-battle-p7.html',
  styleUrl: './css-battle-p7.scss'
})
export class CssBattleP7 {

  projectName: string = 'CSS Battle – Burger Layers Challenge';

  projectDescription: string = `
CSS Battle challenge recreating a layered burger-like structure 
using pure CSS and minimal HTML.

The design depends on:
- border-block for thick horizontal bars
- border-radius for rounded middle section
- box-shadow for side extensions
- nested universal selectors for compact structure

No images. No extra elements. Just CSS precision.
`;

  projectDate: string = 'Last updated: Feb 2026';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'Box-Shadow', 'CSS Battle'];

  projectVideSrc: string =
    './../../../../../assets/video-samples/cssbattle/p7.png';

  projectVideoOnYoutube: string =
    'https://cssbattle.dev/play/mnsHaKqrtDHd7cphTh0c';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<p><style>*{background:#F7CB71;color:7C3219;+*{border-block:32q solid;margin:90 140;border-radius:32q}}p{padding:20+60;margin:10-0;box-shadow:0 95q,0-95q,0 0 0 22q inset}</style>
      `,
      codeTitle: 'index.html'
    }
  ];
  zipFile: string = 'assets/zip-files/cssBattle/07 - p7.rar';
}