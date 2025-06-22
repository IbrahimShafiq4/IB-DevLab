import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-image-layer',
  imports: [SharedCodeComponent],
  templateUrl: './image-layer.html',
  styleUrl: './image-layer.scss'
})
export class ImageLayer {
  projectName: string = '🌗 Meme-Inspired Day/Night Mode Toggle';
  projectDescription: string = `
This HTML & CSS project creates a visually engaging 3D image layering effect using multiple copies of the same image. When hovered, the images separate in 3D space, giving a stacked-paper or parallax-like visual using transform: translate3d() and rotateX() for depth and angle. Each image fades out gradually with different opacities, enhancing the layered illusion.
      <br>🔧 Key Features:
      <ul>
        <li>3D perspective enabled via perspective on the body.</li>
        <li>transform-style: preserve-3d for realistic 3D stacking.</li>
        <li>Smooth hover animation with varying depth and opacity.</li>
        <li>Fully responsive and centered layout with Flexbox</li>
        <li>Uses SCSS nesting for cleaner and structured styling</li>
      </ul>

💡 Use Case Ideas:
      Creative photo galleries
      Portfolio image showcase
      Interactive cover reveals    `;
  projectDate: string = 'Last updated: JUNE 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS'];
  projectVideSrc: string = './../../../../../assets/video-samples/layers/01 - image layer.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Layer</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <figure>
      <img src="./image.jpg" alt="image">
      <img src="./image.jpg" alt="image">
      <img src="./image.jpg" alt="image">
      <img src="./image.jpg" alt="image">
  </figure>
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
    background-image: linear-gradient(45deg, #C96868, #624E88);
    perspective: 800px;
}

figure {
    width: 20rem;
    height: 10rem;
    transform-style: preserve-3d;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        transform-style: preserve-3d;
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.3s linear;
        opacity: 1;

        &:nth-child(4) {
            transform: translate3d(0, 0, 75px) rotateX(45deg);
        }

        &:nth-child(3) {
            transform: translate3d(0, 0, 75px) rotateX(45deg);
        }

        &:nth-child(2) {
            transform: translate3d(0, 0, 75px) rotateX(45deg);
        }

        &:nth-child(1) {
            transform: translate3d(0, 0, 75px) rotateX(45deg);
        }
    }

    &:hover {
        img {
            &:nth-child(4) {
                transform: translate3d(0, -100px, 100px) rotateX(45deg);
                opacity: 1;
            }

            &:nth-child(3) {
                transform: translate3d(0, -80px, 100px) rotateX(45deg);
                opacity: 0.6;
            }

            &:nth-child(2) {
                transform: translate3d(0, -60px, 100px) rotateX(45deg);
                opacity: 0.4;
            }

            &:nth-child(1) {
                transform: translate3d(0, -40px, 100px) rotateX(45deg);
                opacity: 0.2;
            }
        }
    }
}
    `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/layers/01 - image layers.rar';
}
