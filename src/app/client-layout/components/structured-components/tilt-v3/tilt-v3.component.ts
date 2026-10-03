import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
    selector: 'app-tilt-v3',
    imports: [SharedCodeComponent],
    template: `
        <app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets" [CSSCodeSnippet]="CSSCodeSnippets"
    [JSCodeSnippet]="JSCodeSnippets" [projectDate]="projectDate" [projectDescription]="projectDescription"
    [projectVersion]="projectVersion" [projectName]="projectName" [zipFile]="zipFile" />
    `
})
export class TiltV3Component {
    projectName: string = '3D Interactive Social Media Icons with Tilt & Color Hover Effects';
    projectDescription: string = `
This vibrant UI component features a horizontal list of social media icons enhanced with VanillaTilt.js for a 3D tilt effect and dynamic color transitions on hover. Each icon uses a unique brand color that changes the background of the entire page.
  `;
    projectDate: string = 'Last updated: May 2025';
    projectVersion: string = 'v1.2.0';
    projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];

    liveHtml: string = `
<ul class="sci">
    <li style="--clr: #ff0000">
        <a href="#"><i class="fa-brands fa-youtube"></i></a>
    </li>
    <li style="--clr: #333">
        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
    </li>
    <li style="--clr: #25d366">
        <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
    </li>
    <li style="--clr: #4285f4">
        <a href="#"><i class="fa-brands fa-google"></i></a>
    </li>
    <li style="--clr: #c32aa3">
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
    </li>
</ul>
  `;

    liveCss: string = `
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css");

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    transition: 0.5s linear;
    background-color: #fff;
}

.sci {
    position: relative;
    list-style: none;
    display: flex;
    gap: 40px;
}

.sci:hover li {
    transform: scale(0.7);
    opacity: 0.5;
}

.sci li {
    transition: 0.5s linear;
}

.sci li:hover {
    transform: scale(1);
    opacity: 1;
}

.sci li a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 150px;
    height: 150px;
    color: #333;
    font-size: 4em;
    text-decoration: none;
    box-shadow:
        0 0 10px rgba(0, 0, 0, 0.1),
        inset 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    transform-style: preserve-3d;
    transition: 0.25s linear;
}

.sci li a i {
    transition: 0.5s linear;
    pointer-events: none;
}

.sci li:hover a {
    background-color: var(--clr);
    box-shadow:
        0 0 10px rgba(0, 0, 0, 0.25),
        inset 0 0 10px rgba(0, 0, 0, 0.25);
    border: 5px solid var(--clr);
}

.sci li:hover a i {
    transform: scale(1.5) translateZ(50px);
    color: #fff;
}
  `;

    liveJs: string = `
let ulList = document.querySelectorAll('ul li');
let body = document.body;

ulList.forEach((el) => {
    el.addEventListener('mouseenter', (e) => {
        let target = e.currentTarget;
        let color = target.style.getPropertyValue('--clr');
        body.style.background = color;
    });

    el.addEventListener('mouseleave', () => {
        body.style.background = '#fff';
    });
});

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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <ul class="sci">
        <li style="--clr: #ff0000">
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
        </li>
        <li style="--clr: #333">
            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
        </li>
        <li style="--clr: #25d366">
            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
        </li>
        <li style="--clr: #4285f4">
            <a href="#"><i class="fa-brands fa-google"></i></a>
        </li>
        <li style="--clr: #c32aa3">
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
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
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  transition: 0.5s linear;
  filter: hue-rotate(20deg);
}

.sci {
  position: relative;
  list-style: none;
  display: flex;
  gap: 40px;
}

.sci li a {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 150px;
  height: 150px;
  color: #333;
  font-size: 4em;
  text-decoration: none;
  box-shadow:
      0 0 10px rgba(0, 0, 0, 0.1),
      inset 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: 0.25s linear;
}
    `,
            codeTitle: 'style.css'
        }
    ];

    JSCodeSnippets: ICodeStructure[] = [
        {
            code: `
let ulList = document.querySelectorAll('ul li');
let body = document.body;

ulList.forEach((el) => {
    el.addEventListener('mouseenter', (e) => {
        let color = e.target.style.getPropertyValue('--clr');
        body.style.background = color;
    })

    el.addEventListener('mouseleave', () => {
        body.style.background = '#fff'
    })
})

VanillaTilt.init(document.querySelectorAll("ul li a"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.7
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

    zipFile: string = 'assets/zip-files/tilt 03.rar';
}