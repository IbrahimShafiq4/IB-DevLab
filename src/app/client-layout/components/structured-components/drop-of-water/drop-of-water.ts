import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-drop-of-water',
  imports: [SharedCodeComponent],
  templateUrl: './drop-of-water.html',
  styleUrl: './drop-of-water.scss'
})
export class DropOfWater {
  projectName: string = 'Soft Neumorphic Water Drop Animation – Pure CSS 💠';
  projectDescription: string = `
A soothing, organic water drop animation crafted entirely with HTML and CSS, ideal for modern and minimalistic interfaces. This loader simulates the gentle bobbing motion of a water droplet, using creative border-radius techniques and neumorphic-style shadows for a soft, realistic look. A subtle reflective highlight adds depth and realism to the drop, while the animation mimics natural water movement, perfect for serene or nature-inspired web themes.

<br />
🌟 Highlights:
<ul> <li>Pure CSS animation – no JavaScript required</li> <li>Realistic water drop shape using advanced border-radius styling</li> <li>Neumorphism-inspired shadow layering for soft depth</li> <li>Gentle floating animation with translateY and opacity changes</li> <li>Polished reflection effect using \`::before\` pseudo-element</li> </ul>
🎨 Customization Tips:
<ul> <li>Change drop color for branding or mood (e.g., soft blue, gradient, or glassy tone)</li> <li>Duplicate \`.drop\` elements and stagger animations for ripple or rain-like effects</li> <li>Increase or decrease animation duration for a faster or calmer vibe</li> <li>Replace the shape with different \`border - radius\` values for abstract blob effects</li> </ul>
This CSS loader is perfect for preloaders, meditation apps, weather dashboards, or any interface that benefits from a calm, nature-inspired aesthetic.
`;
  projectDate: string = 'Last updated: June 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS'];
  projectVideSrc: string = './../../../../../assets/video-samples/drop of water.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Drop of Water</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="drops">
      <div class="drop"></div>
  </div>
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
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #eee;
}

.drops {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .drop {
      position: absolute;
      top: 0;

      position: absolute;
      width: 150px;
      height: 150px;
      background-color: transparent;
      border-radius: 57% 43% 37% 63% / 45% 52% 48% 55%;
      box-shadow:
          inset 10px 10px 10px rgba(0, 0, 0, 0.05),
          15px 25px 10px rgba(0, 0, 0, 0.1),
          15px 20px 20px rgba(0, 0, 0, 0.05),
          inset -10px -10px 15px rgba(255, 255, 255, 0.05);

      animation: waterDrop 1.5s ease-in-out infinite;

      &::before {
          content: '';
          position: absolute;
          top: 25px;
          left: 35px;
          background-color: #ffffff59;
          height: 20px;
          width: 20px;
          border-radius: 42% 58% 37% 63% / 40% 43% 57% 60%;

      }

  }
}

@keyframes waterDrop {
  0% {
      transform: translateY(-20px);
      opacity: 1;
  }

  50% {
      transform: translateY(10px);
      opacity: 0.5;
  }

  100% {
      transform: translateY(-20px);
      opacity: 1;
  }
}
    `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/drop of water.rar';
}
