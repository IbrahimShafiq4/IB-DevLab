import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-css-battle',
  imports: [SharedCodeComponent],
  templateUrl: './css-battle.html',
  styles: ``
})
export class CssBattle {

  projectName: string = 'CSS Battle – Cross & Circles';

  projectDescription: string = `
  CSS recreation of a geometric circular composition using pure HTML and CSS.

  The design focuses on:
  - CSS pseudo-elements
  - Absolute positioning
  - CSS borders
  - Border-radius
  - Layered geometric shapes
  - Precise positioning and dimensions
  - CSS box reflection
  - Minimal HTML structure
  - Pure CSS without images

  The composition consists of:
  - A large circular container
  - A centered cross shape
  - Four curved circular elements around the center
  - Layered shapes created using pseudo-elements
  - CSS reflections to mirror the decorative elements

  The challenge demonstrates how complex geometric patterns can be
  recreated using only a few HTML elements and carefully positioned CSS shapes.
  `;

  projectDate: string = 'Last updated: Sep 2026';
  projectVersion: string = 'v1.0.0';

  projectTags: string[] = [
    'Web Development',
    'HTML',
    'CSS',
    'Pseudo-elements',
    'CSS Shapes',
    'Border-radius',
    'Positioning',
    'CSS Reflection',
    'CSS Battle'
  ];

  projectVideSrc: string =
    './../../../../../assets/video-samples/cssbattle/cross-circle.png';

  projectVideoOnYoutube: string =
    'https://cssbattle.dev/play/9sCBYHjLMHJ372p55cz7';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `<div class="parent"><div class="cross"></div><div class="circle"></div></div><style>:root{--bg:#F8B140;--it-clr:#465792;}body{display:flex;justify-content:center;align-items:center;background-color:var(--bg);}.parent{border-radius:50%;background:transparent;width:190px;height:190px;display:flex;justify-content:center;align-items:center;overflow:hidden;border:50px solid var(--bg);z-index:99;position:relative;}.cross{position:relative;&::before,&::after{content:'';position:absolute;top:0;left:0;background-color:var(--it-clr);z-index:2}&::before{left:-15;top:-40;width:30;height:80;}&::after{width:80;height:30;left:-40;top:-15}}.circle{position:relative;z-index:1;&::before,&::after{content:'';position:absolute;top:0;left:0;width:50;height:50;border-radius:50%;}&::before{top:-35;left:-130;border:10px solid transparent;border-right:10px solid var(--it-clr);border-top:10px solid var(--it-clr);transform:rotate(45deg);-webkit-box-reflect: right 64px;}&::after{top:-35;left:60;border:10px solid transparent;border-right:10px solid var(--it-clr);border-top:10px solid var(--it-clr);transform:rotate(-135deg);-webkit-box-reflect:right 65px;}}</style>`,
      codeTitle: 'index.html'
    },
  ];

  zipFile: string = 'assets/zip-files/cssBattle/11 - p11.zip';
}