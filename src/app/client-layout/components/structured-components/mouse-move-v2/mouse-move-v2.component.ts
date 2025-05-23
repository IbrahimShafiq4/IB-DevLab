import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-mouse-move-v2',
  imports: [SharedCodeComponent],
  templateUrl: './mouse-move-v2.component.html',
  styleUrl: './mouse-move-v2.component.scss'
})
export class MouseMoveV2Component {
  projectName: string = '🧨 Mouse Trail Spark Effect with JavaScript and CSS';
  projectDescription: string = `
A visually striking, interactive mouse trail effect that generates glowing green sparks at the cursor's location. Each spark fades and moves in a random direction using CSS variables and keyframe animations.
Highlights:
<ul>
  <li>Sparks are <i> elements positioned at the cursor</li>
  <li>Randomized direction using --x and --y CSS variables</li>
  <li>Dynamic scaling for each spark for visual variety</li>
  <li>Fades out and is removed after 2 seconds to maintain performance</li>
  <li>Fully implemented with vanilla JavaScript and CSS only</li>
</ul>  
Use Cases

<ul>
  <li>Creative cursor effects for games or portfolio websites</li>
  <li>Interactive backgrounds for landing pages</li>
  <li>Minimal yet effective UI enhancements</li>
</ul>
`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/mouse move v2.mp4';

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
    <script src="./main.js"></script>
</body>
</html>
    `,
      codeTitle: 'index.html'
    }
  ];

  CSSCodeSnippets: ICodeStructure[] = [
    {
      code: `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #222;
    overflow: hidden;
}

i {
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: #0f0;
    animation: animate 2s linear forwards;
}

@keyframes animate {
    0% {
        opacity: 1;
        transform: translate(0, 0);
    }

    100% {
        opacity: 0;
        transform: translate(var(--x), var(--y))
    }
}
    `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
const spark = (event) => {
    let i = document.createElement('i');
    i.style.left = (event.pageX) + 'px';
    i.style.top = (event.pageY) + 'px';

    i.style.scale = \`${Math.random() * 2 + 1}\`;
    i.style.setProperty('--x', getTransition());
    i.style.setProperty('--y', getTransition());

    document.body.appendChild(i);

    setTimeout(() => {
        document.body.removeChild(i);
    }, 2000)
}

const getTransition = () => {
    return \`${Math.random() * 400 - 200}px\`
}

document.addEventListener('mousemove', spark)
    `,
      codeTitle: 'main.js'
    }
  ];

  zipFile: string = 'assets/zip-files/cursor move.rar';
}
