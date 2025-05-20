import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-animated-popup-v1',
  imports: [SharedCodeComponent],
  templateUrl: './animated-popup-v1.component.html',
  styleUrl: './animated-popup-v1.component.scss'
})
export class AnimatedPopupV1Component {
  projectName: string = '🎛️ Interactive Expandable Card UI';
  projectDescription: string = `A stylish, animated expandable card built using HTML, CSS, and JavaScript. Click the toggle button to smoothly reveal or hide content with beautiful scaling and transitions. Perfect for modern UI sections like tooltips, info cards, or onboarding guides. Fully responsive and customizable with sleek visuals and smooth user experience.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/animated popup.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Animated Card & Popup UI</title>
    <link rel="stylesheet" href="css/style.css" type="text/css" />
</head>
<body>
    <div class="container">
        <div class="content">
            <h2>Heading...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam, libero maiores possimus
                perferendis enim harum, fugiat esse laboriosam amet recusandae dolores hic tempore laudantium velit
                eligendi, quia quisquam rerum!</p>
        </div>
        <div class="toggleBtn"></div>
    </div>
    <script src="js/main.js"></script>
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1a242a;
}

.container {
  position: relative;
  width: 0;
  height: 0;
  background-color: #37444b;
  border-radius: 25px;
  transition: 0.5s linear;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container.active {
  width: 400px;
  height: 400px;
  transition-delay: 0.5s;
}

.container::before {
  content: '';
  position: absolute;
  bottom: -15px;
  transform: rotate(45deg);
  width: 40px;
  height: 40px;
  background-color: #37444b;
  border-radius: 5px;
  opacity: 0;
  transition: 0.5s linear;
}

.container.active::before {
  transition-delay: 0.5s;
  opacity: 1;
}

.container .content {
  min-width: 400px;
  padding: 40px;
  color: #fff;
  opacity: 0;
  transition: 0.5s linear;
  transform: scale(0)
}

.container .content p {
  line-height: 35px;
}

.container.active .content {
  opacity: 1;
  transition-delay: 0.5s;
  transform: scale(1);
}

.container .toggleBtn {
  position: absolute;
  bottom: -20px;
  min-width: 60px;
  height: 60px;
  background-color: #0bcf9c;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  transition: 0.5s;
}

.container.active .toggleBtn {
  bottom: -90px;
  transform: rotate(135deg);
  background-color: #ff5a57;
}

.container .toggleBtn::before {
  content: '+';
  font-size: 2.5em;
  color: #fff;
}
    `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
let toggleBtn = document.querySelector('.toggleBtn');
let container = document.querySelector('.container');

toggleBtn.onclick = function () {
  container.classList.toggle('active')
}
    `,
      codeTitle: 'main.js'
    }
  ];

  zipFile: string = 'assets/zip-files/animated popup v1.rar';
}