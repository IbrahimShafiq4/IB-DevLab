import { Component } from '@angular/core';
import {
  ICodeStructure,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle-p17',
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
export class CssBattleP17 {

  projectName: string = 'CSS Battle – Envelope Icon';

  projectDescription: string = `
  CSS recreation of a flat envelope icon inside a circular badge using pure HTML and CSS.

  The design uses:
  - A circle shape
  - CSS triangles (borders trick) for the envelope flap
  - Absolute positioning
  - Layered shapes to build the envelope silhouette
  - Minimal HTML structure

  The composition consists of:
  - A dark navy blue background
  - A large orange/peach circle badge
  - A navy blue envelope body (rectangle) centered inside the circle
  - A triangular envelope flap on top, forming the classic mail icon shape
  `;

  projectDate: string = 'Last updated: Sep 19, 2026';
  projectVersion: string = 'v1.0.0';

  projectTags: string[] = [
    'Web Development',
    'HTML',
    'CSS',
    'CSS Triangles',
    'Positioning',
    'CSS Shapes',
    'CSS Battle'
  ];

  projectVideSrc: string =
    './../../../../../assets/video-samples/cssbattle/envelope-icon.png';

  projectVideoOnYoutube: string = 'https://cssbattle.dev/play/LXVlYbdUHfOS5mrqkEh0';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<div class="o">
  <div class="i"></div>
</div>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #485993;
}

.o {
  width: 250px;
  height: 250px;
  background: #FFA173;
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateX(180deg);
    width: 0;
    height: 10px;
    border-top: 20px solid #485993;
    border-right: 90px solid #485993;
    border-left: 90px solid #485993;
    border-bottom: 50px solid #FFA173;
  }

  &::after {
    top: 15px;
    left: 35px;
    border-top: 20px solid #FFA173;
    border-right: 90px solid transparent;
    border-left: 90px solid transparent;
    border-bottom: 50px solid #485993;
  }
}

.i {
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);
  width: 10px;
  height: 80px;
  background: #485993;
  -webkit-box-reflect: right 180px;
}
</style>
      `,
      codeTitle: 'index.html'
    },
  ];


  zipFile: string = 'assets/zip-files/cssBattle/17 - p17.zip';
}