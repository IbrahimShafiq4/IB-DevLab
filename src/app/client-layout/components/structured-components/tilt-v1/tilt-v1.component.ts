import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
    selector: 'app-tilt-v1',
    imports: [SharedCodeComponent],
    template: `
        <app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets" [CSSCodeSnippet]="CSSCodeSnippets"
    [JSCodeSnippet]="JSCodeSnippets" [projectDate]="projectDate" [projectDescription]="projectDescription"
    [projectVersion]="projectVersion" [projectName]="projectName" [zipFile]="zipFile" />
    `
})
export class TiltV1Component {
    projectName: string = '3D Hover Navigation Menu with Tilt & Text Layering Effects';
    projectDescription: string = `
An interactive 3D navigation menu built using HTML, CSS, and Vanilla Tilt.js. As users hover over the links, each text element visually pops with layered color effects and animated depth perception.
  `;
    projectDate: string = 'Last updated: May 2025';
    projectVersion: string = 'v1.1.0';
    projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];

    liveHtml: string = `
<ul>
    <li><a href="#"><span data-text="Home">Home</span></a></li>
    <li><a href="#"><span data-text="About">About</span></a></li>
    <li><a href="#"><span data-text="Services">Services</span></a></li>
    <li><a href="#"><span data-text="Portfolio">Portfolio</span></a></li>
    <li><a href="#"><span data-text="Contact">Contact</span></a></li>
</ul>
  `;

    liveCss: string = `
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #333;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

ul:hover li { opacity: 0.4; }

ul li {
    transition: opacity 0.3s ease;
}

ul li:hover { opacity: 1; }

ul li a {
    display: inline-block;
    text-decoration: none;
    padding: 8px 20px;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 1px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.15s ease-out;
    will-change: transform;
}

ul li a span {
    position: relative;
    display: inline-block;
    transition: transform 0.3s ease;
}

ul li a span::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    color: #ffa901;
    transform: translateZ(-20px);
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

ul li a:hover span::before {
    opacity: 1;
    transform: translateZ(-20px) translateY(-4px);
}
  `;

    liveJs: string = `
// Minimal tilt implementation (replaces vanilla-tilt.js)
function applyTilt(els, opts) {
    const max = (opts && opts.max) || 25;
    els.forEach((el) => {
        el.style.transformStyle = 'preserve-3d';
        el.addEventListener('mousemove', (e) => {
            const r = el.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            el.style.transform =
                'perspective(1000px) rotateX(' + (-y * max) + 'deg) rotateY(' + (x * max) + 'deg)';
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });
}

applyTilt(document.querySelectorAll('ul li a'), { max: 25 });
  `;

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
    <ul>
        <li>
            <a href="#">
                <span data-text="Home">Home</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span data-text="About">About</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span data-text="Services">Services</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span data-text="Portfolio">Portfolio</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span data-text="Contact">Contact</span>
            </a>
        </li>
    </ul>
    <script type="text/javascript" src="vanilla-tilt.js"></script>
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
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #333;
}

ul { list-style: none; }
ul li a {
    text-decoration: none;
    color: #fff;
    font-size: 1.4rem;
}
    `,
            codeTitle: 'style.css'
        }
    ];

    JSCodeSnippets: ICodeStructure[] = [
        {
            code: `
VanillaTilt.init(document.querySelectorAll("ul li a"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  easing: "cubic-bezier(.1,.25,.97,.85)",
});
      `,
            codeTitle: 'main.js'
        },
        {
            code: `
// (vanilla-tilt.js v1.8.1 — minified source omitted here for brevity.
//  Load from a CDN or your local copy in the real project.)
      `,
            codeTitle: 'vanilla-tilt.js'
        }
    ];

    zipFile: string = 'assets/zip-files/tilt 01.rar';
}