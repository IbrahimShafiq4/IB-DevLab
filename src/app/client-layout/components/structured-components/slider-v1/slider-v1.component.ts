import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from "../../../../shared-components/shared-code/shared-code.component";

@Component({
  selector: 'app-slider-v1',
  imports: [SharedCodeComponent],
  template: `
  <app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets" [CSSCodeSnippet]="CSSCodeSnippets"
    [JSCodeSnippet]="JSCodeSnippets" [projectDate]="projectDate" [projectDescription]="projectDescription"
    [projectVersion]="projectVersion" [projectName]="projectName" [zipFile]="zipFile" />
  `
})
export class SliderV1Component {
  projectName: string = '🖼️ 3D Rotating Image Carousel with Perspective Effect';
  projectDescription: string = `A sleek 3D carousel built using HTML, CSS, and vanilla JavaScript, showcasing a series of images with depth, perspective, and rotation.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];

  liveHtml: string = `
<div class="box">
    <div class="item"><figure><img src="https://picsum.photos/id/1/200/300" alt="1"></figure></div>
    <div class="item"><figure><img src="https://picsum.photos/id/2/200/300" alt="2"></figure></div>
    <div class="item"><figure><img src="https://picsum.photos/id/3/200/300" alt="3"></figure></div>
    <div class="item"><figure><img src="https://picsum.photos/id/4/200/300" alt="4"></figure></div>
    <div class="item"><figure><img src="https://picsum.photos/id/5/200/300" alt="5"></figure></div>
    <div class="item"><figure><img src="https://picsum.photos/id/6/200/300" alt="6"></figure></div>
    <div class="item"><figure><img src="https://picsum.photos/id/7/200/300" alt="7"></figure></div>
</div>
<div class="buttons">
    <span class="prev"></span>
    <span class="next"></span>
</div>
  `;

  get liveCss(): string { return this.CSSCodeSnippets[0]?.code ?? ''; }
  get liveJs(): string { return this.JSCodeSnippets[0]?.code ?? ''; }

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
        <div class="item"><figure><img src="./images/img (1).jpg" alt="image Name"></figure></div>
        <div class="item"><figure><img src="./images/img (2).jpg" alt="image Name"></figure></div>
        <div class="item"><figure><img src="./images/img (3).jpg" alt="image Name"></figure></div>
        <div class="item"><figure><img src="./images/img (4).jpg" alt="image Name"></figure></div>
        <div class="item"><figure><img src="./images/img (5).jpg" alt="image Name"></figure></div>
        <div class="item"><figure><img src="./images/img (6).jpg" alt="image Name"></figure></div>
        <div class="item"><figure><img src="./images/img (7).jpg" alt="image Name"></figure></div>
    </div>
    <div class="buttons">
        <span class="prev"></span>
        <span class="next"></span>
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
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #222;
  transform-style: preserve-3d;
}
.box {
  position: relative;
  display: flex;
  transform-style: preserve-3d;
  perspective: 500px;
}
.item {
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 100px);
  width: 200px;
  height: 300px;
  background-color: #fff;
  transition: 0.5s linear;
  -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, #0002);
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box .item:nth-child(1) { transform: translate3d(-250px, 0, 0) scale(0.8) rotateY(25deg); z-index: 1; }
.box .item:nth-child(2) { transform: translate3d(-250px, 0, 0) scale(0.8) rotateY(25deg); z-index: 2; }
.box .item:nth-child(3) { transform: translate3d(-150px, 0, 0) scale(0.9) rotateY(15deg); z-index: 3; }
.box .item:nth-child(4) { transform: translate3d(0, 0, 0) scale(1) rotateY(0); z-index: 4; }
.box .item:nth-child(5) { transform: translate3d(150px, 0, 0) scale(0.9) rotateY(-15deg); z-index: 3; }
.box .item:nth-child(6) { transform: translate3d(250px, 0, 0) scale(0.8) rotateY(-25deg); z-index: 2; }
.box .item:nth-child(7) { transform: translate3d(250px, 0, 0) scale(0.8) rotateY(-25deg); z-index: -1; }
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
}
.buttons {
  position: absolute;
  bottom: 60px;
  display: flex;
  gap: 20px;
}
.buttons span {
  position: relative;
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  color: #fff;
}
.buttons span:first-child::before {
  content: '';
  position: absolute;
  left: 20px;
  width: 10px;
  height: 10px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  rotate: -45deg;
}
.buttons span:first-child::after {
  content: '';
  position: absolute;
  right: 20px;
  width: 10px;
  height: 10px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  rotate: -45deg;
}
.buttons span:last-child::before {
  content: '';
  position: absolute;
  left: 20px;
  width: 10px;
  height: 10px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  rotate: 135deg;
}
.buttons span:last-child::after {
  content: '';
  position: absolute;
  right: 20px;
  width: 10px;
  height: 10px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  rotate: 135deg;
}
    `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

next.addEventListener('click', () => {
    let items = document.querySelectorAll('.item');
    document.querySelector('.box').appendChild(items[0]);
})

prev.addEventListener('click', () => {
    let items = document.querySelectorAll('.item');
    document.querySelector('.box').prepend(items[items.length - 1]);
})
    `,
      codeTitle: 'main.js'
    }
  ];

  zipFile: string = 'assets/zip-files/slider v1.rar';
}