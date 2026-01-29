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
  <title>Battle 1</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="parent">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
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
:root {
    --white_blue: #37b4bd;
    --white_pink: #f9eaf1;
    --darken_color: #394257;
}

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
    background-color: var(--white_blue);
}

div.parent {
    width: 100px;
    height: 60px;
    background: #dd6b4d;
    transform: translateY(-8px);
    width: 340px;
    padding-left: 20px;
    background:
        var(--white_pink);
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;
    gap: 30px;

    .block {
        width: 30px;
        height: 30px;
        background-color: var(--darken_color)
    }
}
    `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/drop of water.rar';
}
