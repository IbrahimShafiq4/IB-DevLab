import { Component } from '@angular/core';
import { SharedCodeComponent, ICodeStructure } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-loading-v1',
  imports: [SharedCodeComponent],
  template: `
<app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets" [CSSCodeSnippet]="CSSCodeSnippets"
  [projectDate]="projectDate" [projectDescription]="projectDescription"
  [projectVersion]="projectVersion" [projectName]="projectName" [zipFile]="zipFile"
/>
  `
})
export class LoadingV1 {
  projectName: string = '🌈 Animated Neon Glow Loading Spinner';
  projectDescription: string = `
    A visually captivating, circular loading animation built entirely with HTML and CSS.
Highlights:
<ul>
  <li>Pure CSS animation (no JavaScript)</li>
  <li>Circular conic-gradient spinner with rotating effect</li>
  <li>Hue-rotate background animation for color cycling</li>
  <li>Smooth hover transitions for interactive feedback</li>
</ul>
This spinner is perfect for loading screens, preloaders, or futuristic UIs.
`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS'];

  liveHtml: string = `<div></div>`;

  get liveCss(): string {
    return this.CSSCodeSnippets[0]?.code ?? '';
  }

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading Animation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div></div>
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
    background-color: #181818;
    animation: hue-rotate 3.5s linear infinite;
}

div {
    width: 200px;
    height: 200px;
    box-shadow: 16px 14px 20px #0000008c;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: 0.3s linear;
}

div:hover {
    box-shadow: 0 0 10px #0000008c;
}

div::before {
    content: "";
    position: absolute;
    background-image: conic-gradient(#ff0052 20deg, transparent 120deg);
    width: 150%;
    height: 150%;
    animation: rotate 3s linear infinite;
}

div::after {
    content: "Loading";
    width: 190px;
    height: 190px;
    text-transform: uppercase;
    letter-spacing: 3px;
    background-color: #2e2e2e;
    position: absolute;
    border-radius: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff0052;
    font-size: larger;
    font-family: cursive;
    letter-spacing: 5px;
    box-shadow:
        inset 20px 20px 20px #0000008c,
        inset -20px -20px 20px #0000008c;
    font-weight: 900;
    transition: 0.3s linear;
}

div:hover::after {
    letter-spacing: -2px;
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes hue-rotate {
    0%, 100% { filter: hue-rotate(0deg); }
    50% { filter: hue-rotate(360deg); }
}
    `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/border.rar';
}