import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from "../../../../shared-components/shared-code/shared-code.component";

@Component({
  selector: 'app-clip-path-scrolling',
  imports: [SharedCodeComponent],
  templateUrl: './clip-path-scrolling.component.html',
  styleUrl: './clip-path-scrolling.component.scss'
})
export class ClipPathScrollingComponent {
  projectName: string = '🌀 Scroll-Reveal Circular Image Animation';
  projectDescription: string = `A visually dynamic scrolling experience where images are revealed in a circular motion as the user scrolls down the page. Built using vanilla JavaScript, HTML, and CSS clip-path, each section animates smoothly based on scroll position, offering a creative storytelling or showcase layout. Ideal for portfolios, landing pages, or interactive storytelling designs.`;
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
    <title>scrolling</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section data-start="0" data-end="1000">
        <figure>
            <img src="./images/(1).jpg" alt="">
        </figure>
    </section>
    <section data-start="1000" data-end="2000">
        <figure>
            <img src="./images/(2).jpg" alt="">
        </figure>
    </section>
    <section data-start="2000" data-end="3000">
        <figure>
            <img src="./images/(3).jpg" alt="">
        </figure>
    </section>
    <section data-start="3000" data-end="4000">
        <figure>
            <img src="./images/(4).jpg" alt="">
        </figure>
    </section>
    <section data-start="4000" data-end="5000">
        <figure>
            <img src="./images/(5).jpg" alt="">
        </figure>
    </section>
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
  min-height: 6000px;
}

section {
  position: fixed;
  inset: 0;
  clip-path: circle(0 at center);
  transition: 0.5s linear;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
    `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
document.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let scrollPosition = window.scrollY;
    sections.forEach((section) => {
        let start = parseInt(section.getAttribute('data-start'));
        let end = parseInt(section.getAttribute('data-end'));

        if (scrollPosition >= start && scrollPosition <= end) {
            let progress = (scrollPosition - start) / (end - start);
            let clipPathSize = Math.max(0, 1000 * progress);
            section.style.clipPath = \`circle(\${ clipPathSize }px at center)\`
        } else if (scrollPosition < start) {
            section.style.clipPath = \`circle(0px at center)\`
        } else if (scrollPosition > end) {
            section.style.clipPath = \`circle(1000px at center)\`
        }
    })
}
    `,
      codeTitle: 'main.js'
    }
  ];

  zipFile: string = 'assets/zip-files/scrolling clip-path.rar';
}