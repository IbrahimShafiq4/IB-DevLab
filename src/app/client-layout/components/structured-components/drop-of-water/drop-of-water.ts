import { Component } from '@angular/core';
import {
  ICodeStructure,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-drop-of-water',
  imports: [SharedCodeComponent],
  template: `
<app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets" [CSSCodeSnippet]="CSSCodeSnippets"
    [projectDate]="projectDate" [projectDescription]="projectDescription" [projectVersion]="projectVersion"
    [projectName]="projectName" [zipFile]="zipFile"  />
  `
})
export class DropOfWater {

  projectName: string = 'Soft Neumorphic Water Drop Animation – Pure CSS 💠';

  projectDescription: string = `
A soothing, organic water drop animation crafted entirely with HTML and CSS, ideal for modern and minimalistic interfaces. This loader simulates the gentle bobbing motion of a water droplet, using creative border-radius techniques and neumorphic-style shadows for a soft, realistic look. A subtle reflective highlight adds depth and realism to the drop, while the animation mimics natural water movement.

<br />
🌟 Highlights:
<ul>
  <li>Pure CSS animation – no JavaScript required</li>
  <li>Realistic water drop shape using advanced border-radius styling</li>
  <li>Neumorphism-inspired shadow layering for soft depth</li>
  <li>Gentle floating animation with translateY and opacity changes</li>
  <li>Polished reflection effect using <code>::before</code> pseudo-element</li>
</ul>

🎨 Customization Tips:
<ul>
  <li>Change drop color for branding or mood (soft blue, gradient, or glassy tone)</li>
  <li>Duplicate <code>.drop</code> elements and stagger animations for ripple effects</li>
  <li>Increase or decrease animation duration for a faster or calmer vibe</li>
  <li>Replace the shape with different <code>border-radius</code> values for abstract blob effects</li>
</ul>

This CSS loader is perfect for preloaders, meditation apps, weather dashboards, or any interface that benefits from a calm, nature-inspired aesthetic.
  `;

  projectDate: string = 'Last updated: June 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS'];

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Water Drop</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="drop"></div>
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
    background-color: #e0e5ec;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.drop {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: #e0e5ec;
    /* Asymmetric radii create the droplet silhouette */
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

    /* Neumorphic lighting: soft inner shadows + outer shadow */
    box-shadow:
        inset -6px -6px 12px rgba(255, 255, 255, 0.9),
        inset  6px  6px 12px rgba(163, 177, 198, 0.4),
        0 8px 20px rgba(163, 177, 198, 0.3);

    animation: float 3s ease-in-out infinite;
    will-change: transform;
}

/* Highlight — small blurred reflective spot */
.drop::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 25%;
    width: 20px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 50%;
    filter: blur(2px);
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-20px); }
}
      `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/drop of water.rar';
}