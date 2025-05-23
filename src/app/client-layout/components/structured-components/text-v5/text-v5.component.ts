import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-text-v5',
  imports: [SharedCodeComponent],
  templateUrl: './text-v5.component.html',
  styleUrl: './text-v5.component.scss'
})
export class TextV5Component {
  projectName: string = 'Scroll-Reveal Name Animation with Glowing Text';
  projectDescription: string = `
This scroll-triggered animation breaks the text “Ibrahim Shafiq” into individual characters and animates each letter from a random position into place as the user scrolls down. When activated, each letter glows with a neon green effect, creating a futuristic and dynamic user experience. Built using vanilla JavaScript and CSS transitions for lightweight performance.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.5.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/text animation v5.mp4';

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
    <div class="box">
        <h2 class="text">Ibrahim Shafiq</h2>
    </div>
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
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Consolas
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 180vh;
    background-color: #333;
}

.box {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    width: 440px;
    padding: 0 0 25px;
    display: flex;
    gap: 20px;

    span {
        position: absolute;
        color: transparent;
        -webkit-text-stroke: 0.5px #fff;
        font-size: 1.5em;
        transition: 0.25s linear;

        &.active {
            color: #0f0;
            -webkit-text-stroke: 0.5px #fff0;
            text-shadow: 0 0 10px #0f0,
                        0 0 30px #0f0,
                        0 0 60px #0f0
        }
    }
}
    `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
let textEl = document.querySelector('.text');
let textContent = textEl.textContent;
textEl.innerHTML = '';
let spans = [];
for (let char of textContent) {
    let span = document.createElement('span');
    span.textContent = char;
    textEl.appendChild(span);
    spans.push(span);
}
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    spans.forEach((span, index) => {
        if (scrollDistance >= (index + 1) * 50) {
            span.style.transform = \`translate(\${index * 20}px, 0)\`;
            span.classList.add('active');
        } else {
            span.style.transform = \`translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh)\`;
            span.classList.remove('active');
        }
    });
});

window.dispatchEvent(new Event('scroll'));

      `,
      codeTitle: 'main.js'
    },
  ];

  zipFile: string = 'assets/zip-files/scroll.rar';
}
