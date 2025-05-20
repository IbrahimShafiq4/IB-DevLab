import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-text-stroke-animation',
  imports: [SharedCodeComponent],
  templateUrl: './text-stroke-animation.component.html',
  styleUrl: './text-stroke-animation.component.scss'
})
export class TextStrokeAnimationComponent {
  projectName: string = '🖋️ Animated SVG Stroke Text with Dashed Motion Effect';
  projectDescription: string = `This sleek SVG animation brings the text “Ibrahim Shafiq” to life with a dynamic dashed stroke effect. Using stroke-dasharray and stroke-dashoffset, the animation simulates continuous motion across the outlined text path. The design is fully responsive, centered on a dark background, and styled with the Poppins font for a modern, clean aesthetic. Ideal for signatures, logos, or intro screens.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.2.0';
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

    <svg width="100%" height="100%">
        <text class="stroke-animation" x="50%" y="50%" text-anchor="middle">
            Ibrahim Shafiq
        </text>
    </svg>
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

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #555;
}

.stroke-animation {
    font-size: 3rem;
    fill: none;
    stroke: #fff;
    stroke-dasharray: 20 10;
    stroke-dashoffset: 100;
    animation: animateStroke 10s linear infinite;
}

@keyframes animateStroke {
    0%, 100% {
        stroke-dashoffset: 100;
    }
    20% {
        stroke-dashoffset: 20;
    }
    40% {
        stroke-dashoffset: 40;
    }
    60% {
        stroke-dashoffset: 60;
    }
    80% {
        stroke-dashoffset: 80;
    }
}
    `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/text-stroke animation.rar';
}