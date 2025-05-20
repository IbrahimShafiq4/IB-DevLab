import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-animated-text',
  imports: [SharedCodeComponent],
  templateUrl: './animated-text.component.html',
  styleUrl: './animated-text.component.scss'
})
export class AnimatedTextComponent {
  projectName: string = 'Animated Typing Text Effect';
  projectDescription: string = `A smooth animated typing text effect using HTML, CSS, and JavaScript. Watch dynamic roles like Freelancer, Developer, and Designer appear one after another with a stylish cursor animation.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/text animation.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Typing Text Effect</title>
    <meta name="description"
        content="A smooth animated typing text effect using HTML, CSS, and JavaScript. Watch dynamic roles like Freelancer, Developer, and Designer appear one after another with a stylish cursor animation.">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <span class="txt first-txt">I'm a</span>
        <span class="txt second-txt"></span>
    </div>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Courier New', Courier, monospace
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #010718;
}
.container .txt {
  position: relative;
  color: #4070f4;
  font-size: 30px;
  font-weight: 600;
}

.container .txt.first-txt {
  color: #fff;
}

.container .txt.second-txt::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #010718;
  border-left: 2px solid #4070f4;
  animation: animate 4s steps(12) infinite;
}

@keyframes animate {
  40%, 60% {
    left: calc(100% + 4px);
  }
  
  100% {
    left: 0%;
  }
}
    `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
const text = document.querySelector('.second-txt');
const textLoad = () => {
  setTimeout(() => {
      text.textContent = "Freelancer";
  }, 0);
  setTimeout(() => {
      text.textContent = "Developer"
  }, 4000);
  setTimeout(() => {
      text.textContent = "Designer"
  }, 8000);
}

textLoad();
setInterval(textLoad, 12000)
    `,
      codeTitle: 'main.js'
    }
  ];

  zipFile: string = 'assets/zip-files/animated-typing-text.rar';
}
