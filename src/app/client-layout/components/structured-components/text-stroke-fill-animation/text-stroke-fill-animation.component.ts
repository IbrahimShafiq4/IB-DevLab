import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from "../../../../shared-components/shared-code/shared-code.component";

@Component({
  selector: 'app-text-stroke-fill-animation',
  imports: [SharedCodeComponent],
  templateUrl: './text-stroke-fill-animation.component.html',
  styleUrl: './text-stroke-fill-animation.component.scss'
})
export class TextStrokeFillAnimationComponent {
  projectName: string = '🎨 Animated Text Stroke Reveal with Sliding Cursor Effect';
  projectDescription: string = `This creative animation uses a combination of -webkit-text-stroke and pseudo-elements (::before, ::after) to simulate a typewriter-style text reveal. The ::before element gradually fills the outlined "Hello" text with color using a keyframe animation, while the ::after element acts like a sliding cursor that travels across the text, enhancing the dynamic motion effect. Built with pure CSS and powered by the Poppins font, this design adds modern flair to simple headings.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.1.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS'];
  projectVideSrc: string = './../../../../../assets/video-samples/text animation v2.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Hello</h2>
  <script src="main.js"></script>
</body>
</html>
    `,
      codeTitle: 'index.html'
    }
  ];

  CSSCodeSnippets: ICodeStructure[] = [
    {
      code: `
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

h2 {
  margin: 0 10px;
  font-size: 4em;
  -webkit-text-stroke: 2px;
  -webkit-text-stroke-color: #000e30;
  -webkit-text-fill-color: transparent;
  position: relative;
  width: fit-content;

  &::before {
      content: "Hello";
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 100%;
      animation: animateTextStrokeColor 3s linear infinite;
      overflow: hidden;
  }

  &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: -5px;
      width: 5px;
      height: 70%;
      background-color: #000e30;
      animation: animateTextStroke 3s linear infinite;
      transform: translateY(-50%);
  }
}

@keyframes animateTextStroke {
  0%,
  100% {
      left: -5px;
  }
  20% {
      left: 25%;
  }
  40% {
      left: 50%;
  }
  60% {
      left: 75%;
  }
  80% {
      left: 100%;
  }
}

@keyframes animateTextStrokeColor {
  0%,
  100% {
      width: 0;
      -webkit-text-fill-color: #000e30;
  }
  20% {
      width: 25%;
      -webkit-text-fill-color: #000e30;
  }
  40% {
      width: 50%;
      -webkit-text-fill-color: #000e30;
  }
  60% {
      width: 75%;
      -webkit-text-fill-color: #000e30;
  }
  80% {
      width: 100%;
      -webkit-text-fill-color: #000e30;
  }
}

    `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/text-stroke fill.rar';
}