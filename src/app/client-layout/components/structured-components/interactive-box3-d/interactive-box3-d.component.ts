import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-interactive-box3-d',
  imports: [SharedCodeComponent],
  templateUrl: './interactive-box3-d.component.html',
  styleUrl: './interactive-box3-d.component.scss'
})
export class InteractiveBox3DComponent {
  projectName: string = '🧊 Interactive 3D Cube Grid Animation Using HTML, CSS & JavaScript';
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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D box</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="scene">
        <div class="cube">
            <div class="face front">
                <div class="grid"></div>
            </div>
            <div class="face back">
                <div class="grid"></div>
            </div>
            <div class="face left">
                <div class="grid"></div>
            </div>
            <div class="face right">
                <div class="grid"></div>
            </div>
            <div class="face top">
                <div class="grid"></div>
            </div>
            <div class="face bottom">
                <div class="grid"></div>
            </div>
        </div>
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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #111;
  perspective: 1000px;
}

.scene {
  position: relative;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
}

.cube {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.face {
  position: absolute;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  perspective: 500;
  border: 1px solid #fff;
}

.front {
  transform: rotateY(0deg) translateZ(150px);
}

.back {
  transform: rotateY(180deg) translateZ(150px);
}

.left {
  transform: rotateY(-90deg) translateZ(150px);
}

.right {
  transform: rotateY(90deg) translateZ(150px);
}

.top {
  transform: rotateX(90deg) translateZ(150px);
}

.bottom {
  transform: rotateX(-90deg) translateZ(150px);
}

.grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);

  span {
      width: 30px;
      height: 30px;
      background-color: #333d;
      border: 1px solid #fff1;
      transform-style: preserve-3d;
      perspective: 500px;

      &.active {
          background-color: #fff;
          z-index: 10000;
          filter: drop-shadow(0 0 20px #fff);
      }

      &.active-even {
          background-color: #c43a3abe;
          filter: drop-shadow(0 0 20px #c43a3abe);
      }

      &.active-odd {
          background-color: #68c43abe;
          filter: drop-shadow(0 0 20px #68c43abe);
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
document.addEventListener('DOMContentLoaded', () => {
    let cube = document.querySelector('.cube');
    let grids = document.querySelectorAll('.grid');

    grids.forEach(grid => {
        for (let i = 0; i < 100; i++) {
            let span = document.createElement('span');
            grid.appendChild(span);
        }
    });

    function addRandomActiveClass() {
        grids.forEach((grid) => {
            let spans = grid.querySelectorAll('span');

            let randomIndex = Math.floor(Math.random() * spans.length);
            let randomSpan = spans[randomIndex];
            
            randomSpan.classList.add(randomIndex % 2 === 0 ? 'active-even' : 'active-odd');
            
            let removeTime = Math.floor(Math.random() * 1000) + 500;
            
            setTimeout(() => {
                randomSpan.classList.remove('active-even');
                randomSpan.classList.remove('active-odd');
            }, removeTime);
        });
    }

    function randomInterval() {
        let interval = Math.floor(Math.random() * 200) + 100;
        addRandomActiveClass();
        setTimeout(randomInterval, interval);
    }

    randomInterval();

    document.addEventListener('mousemove', (e) => {
        let x = e.clientX / window.innerWidth - 0.5;
        let y = e.clientY / window.innerHeight - 0.5;
        cube.style.transform = \`rotateX(\${ y * 360}deg) rotateY(\${ x * 360}deg)\`;
    });
});

    `,
      codeTitle: 'main.js'
    }
  ];

  zipFile: string = 'assets/zip-files/3d box.rar';
}
