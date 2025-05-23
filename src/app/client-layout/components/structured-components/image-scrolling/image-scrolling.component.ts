import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-image-scrolling',
  imports: [SharedCodeComponent],
  templateUrl: './image-scrolling.component.html',
  styleUrl: './image-scrolling.component.scss'
})
export class ImageScrollingComponent {
  projectName: string = 'Scroll-Reveal Pixel Explosion Effect';
  projectDescription: string = `
This creative scroll animation disassembles an image into 400 pixel slices using JavaScript and CSS, scattering them randomly across the viewport. As the user scrolls down the page, each piece smoothly transitions back into its correct place, revealing the full image. This engaging effect is perfect for landing pages, intros, or interactive portfolios.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.1.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/image scrolling.mp4';

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
  <section>
      <h2>Scroll Down To see the full image</h2>
      <div class="image-container"></div>
  </section>
  <script src="./main.js"></script>
</body>

</html>
</html>
    `,
      codeTitle: 'index.html'
    }
  ];

  CSSCodeSnippets: ICodeStructure[] = [
    {
      code: `
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body { 
  min-height: 250vh;
  background-color: #363a3b;
  overflow-x: hidden;
}

section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
}

h2 {
  position: absolute;
  top: 100px;
  color: #fff;
  font-size: 3em;
  font-family: Consolas;
  text-wrap: wrap;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.image-container {
  position: absolute;
  top: 60vh;
  width: 400px;
  height: 400px;
  background-color: #3f4445;
}

.image-slice {
  position: absolute;
  transition: all 1s ease-in-out;
}
    `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
let image = "./img.jpg";
let container = document.querySelector(".image-container");
let sliceWidth = 20;
let sliceHeight = 20;

let rows = 20;
let columns = 20;
let slices = [];

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < columns; col++) {
    let span = document.createElement("span");
    span.classList.add("image-slice");
    span.style.top = \`\${ row * sliceHeight}px\`;
    span.style.left = \`\${ col * sliceWidth}px\`;
    span.style.width = \`\${ sliceWidth }px\`;
    span.style.height = \`\${ sliceHeight }px\`;
    span.style.backgroundImage = \`url(\${ image })\`;
    span.style.backgroundPosition = \`- \${ col * sliceWidth}px - \${row * sliceHeight}px\`;
    container.appendChild(span);
    slices.push(span);
  }
}

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;
  slices.forEach((slice, index) => {
      if (scrollPosition >= index) {
        slice.style.transform = \`translate(0, 0) rotate(0deg)\`
      } else {
        slice.style.transform = \`translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh) rotate(${Math.random() * 360}deg)\`
      }
  })
})

window.dispatchEvent(new Event('scroll'))});
      `,
      codeTitle: 'main.js'
    },
  ];

  zipFile: string = 'assets/zip-files/image-scroll.rar';
}
