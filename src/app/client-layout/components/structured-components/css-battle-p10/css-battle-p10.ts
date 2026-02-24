import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p10',
  imports: [SharedCodeComponent],
  templateUrl: './css-battle-p10.html',
  styleUrl: './css-battle-p10.scss'
})
export class CssBattleP10 {

  projectName: string = 'CSS Battle – Five Pill Layout';

  projectDescription: string = `
  CSS recreation of a minimal geometric layout featuring five vertical pill shapes.
  
  The design uses:
  - Flexbox layout
  - Precise spacing
  - Large border-radius for capsule shapes
  - Clean color contrast
  - Pure CSS (no images)

  The layout consists of:
  - 3 top capsules
  - 2 bottom capsules
  - Centered composition
  `;

  projectDate: string = 'Last updated: Feb 2026';
  projectVersion: string = 'v1.0.0';

  projectTags: string[] = [
    'Web Development',
    'HTML',
    'CSS',
    'Flexbox',
    'Layout Design',
    'CSS Battle'
  ];

  projectVideSrc: string =
    './../../../../../assets/video-samples/cssbattle/p10.png';

  projectVideoOnYoutube: string = 'https://cssbattle.dev/play/FpqYKVfnMOUDjVocqaVf';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<style>*{background:#4C4C6B;*{margin:160 60 50 280;border-radius:36q;color:FAE29E;box-shadow:-117q 0,-233q 0,0-116q,-116q -116q,-233q -116q}}</style>
      `,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/10 - p10.zip';
}