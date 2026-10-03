import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p8',
  imports: [SharedCodeComponent],
  template: `
    <app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets"
    [projectDate]="projectDate" [projectDescription]="projectDescription" [projectVersion]="projectVersion"
    [projectName]="projectName" [isItCssBattle]="true" [projectOnYoutube]="projectVideoOnYoutube" [zipFile]="zipFile"  />
  `
})
export class CssBattleP8 {

  projectName: string = 'CSS Battle – Reflect Shape Challenge';

  projectDescription: string = `
CSS Battle challenge recreating a mirrored curved shape
using pure CSS and minimal markup.

The design depends on:
- asymmetric border-radius
- thick border manipulation
- -webkit-box-reflect for mirroring
- compact nested universal selector trick

No images. No extra elements.
Just CSS creativity and precision.
`;

  projectDate: string = 'Last updated: Feb 2026';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'Border', 'CSS Battle'];

  projectVideoOnYoutube: string =
    'https://cssbattle.dev/play/6NrSWJ0sN3E4OGFcbeun';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<style>*{background:#B5BD49;*{border:solid #11092D;background:none;border-radius:0 212q 0 0;margin:50 100;border-width:106q 106q 0 0;-webkit-box-reflect:left -212q;}}</style>
      `,
      codeTitle: 'index.html'
    }
  ];

  zipFile: string = 'assets/zip-files/cssBattle/08 - p8.rar';
}