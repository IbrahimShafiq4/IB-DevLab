import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from "../../../../shared-components/shared-code/shared-code.component";

@Component({
  selector: 'app-slider-v1',
  imports: [SharedCodeComponent],
  templateUrl: './slider-v1.component.html',
  styleUrl: './slider-v1.component.scss'
})
export class SliderV1Component {
  projectName: string = '🖼️ 3D Rotating Image Carousel with Perspective Effect';
  projectDescription: string = `A sleek 3D carousel built using HTML, CSS, and vanilla JavaScript, showcasing a series of images with depth, perspective, and rotation. The central image appears in focus, while surrounding images are scaled and rotated to create a visually immersive experience. Users can cycle through images using intuitive navigation arrows. Transitions are smooth and reflect real-time DOM manipulation (appendChild / prepend) for an infinite looping slider effect. A great example of combining CSS transforms (translate3d, rotateY, scale) and JavaScript to create modern, interactive UI components without external libraries.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/3d card aniamtion.mp4';

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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <div class="box">
        <div class="item">
            <figure>
                <img src="./images/img (1).jpg" alt="image Name">
            </figure>
        </div>
        <div class="item">
            <figure>
                <img src="./images/img (2).jpg" alt="image Name">
            </figure>
        </div>
        <div class="item">
            <figure>
                <img src="./images/img (3).jpg" alt="image Name">
            </figure>
        </div>
        <div class="item">
            <figure>
                <img src="./images/img (4).jpg" alt="image Name">
            </figure>
        </div>
        <div class="item">
            <figure>
                <img src="./images/img (5).jpg" alt="image Name">
            </figure>
        </div>
        <div class="item">
            <figure>
                <img src="./images/img (6).jpg" alt="image Name">
            </figure>
        </div>
        <div class="item">
            <figure>
                <img src="./images/img (7).jpg" alt="image Name">
            </figure>
        </div>
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

.box .item:nth-child(1) {
  transform: translate3d(-250px, 0, 0) scale(0.8) rotateY(25deg);
  z-index: 1;
}

.box .item:nth-child(2) {
  transform: translate3d(-250px, 0, 0) scale(0.8) rotateY(25deg);
  z-index: 2;
}

.box .item:nth-child(3) {
  transform: translate3d(-150px, 0, 0) scale(0.9) rotateY(15deg);
  z-index: 3;
}

.box .item:nth-child(4) {
  transform: translate3d(0, 0, 0) scale(1) rotateY(0);
  z-index: 4;
}

.box .item:nth-child(5) {
  transform: translate3d(150px, 0, 0) scale(0.9) rotateY(-15deg);
  z-index: 3;
}

.box .item:nth-child(6) {
  transform: translate3d(250px, 0, 0) scale(0.8) rotateY(-25deg);
  z-index: 2;
}

.box .item:nth-child(7) {
  transform: translate3d(250px, 0, 0) scale(0.8) rotateY(-25deg);
  z-index: -1;
}

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
  color: #fff;
  z-index: 99999999;
  rotate: -45deg;
}

.buttons span:first-child::after {
  content: '';
  position: absolute;
  left: initial;
  right: 20px;
  width: 10px;
  height: 10px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  color: #fff;
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
  color: #fff;
  rotate: 135deg;
}

.buttons span:last-child::after {
  content: '';
  position: absolute;
  left: initial;
  right: 20px;
  width: 10px;
  height: 10px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  color: #fff;
  rotate: 135deg;
}

.buttons span:last-child::before,
.buttons span:last-child::after,
.buttons span:first-child::before,
.buttons span:first-child::after {
  transition: 0.3s linear;
}

.buttons span:last-child:hover::before,
.buttons span:last-child:hover::after,
.buttons span:first-child:hover::before,
.buttons span:first-child:hover::after {
  background-color: #fff;
  border-top: 2px solid #000;
  border-left: 2px solid #000;
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
