import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
    selector: 'app-tilt-v2',
    imports: [SharedCodeComponent],
    template: `
        <app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets" [CSSCodeSnippet]="CSSCodeSnippets"
    [JSCodeSnippet]="JSCodeSnippets" [projectDate]="projectDate" [projectDescription]="projectDescription"
    [projectVersion]="projectVersion" [projectName]="projectName" [zipFile]="zipFile" />
    `
})
export class TiltV2Component {
    projectName: string = '3D Tilt Card with Image & Profile Content';
    projectDescription: string = `
This stylish 3D card component uses VanillaTilt.js to create a dynamic tilt effect on hover, enhancing interactivity and depth. The card features a clean layout with a profile image, name, and description.
  `;
    projectDate: string = 'Last updated: May 2025';
    projectVersion: string = 'v1.1.0';
    projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];

    liveHtml: string = `
<div class="container">
    <div class="box">
        <div class="imgBx">
            <img src="https://i.pravatar.cc/200?img=12" alt="Profile">
        </div>
        <div class="contentBx">
            <h2>Ibrahim Shafiq</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui alias ab sunt aut nisi facere
                deserunt officia, obcaecati eius distinctio doloremque odit amet dicta delectus facilis possimus
                nihil. Culpa?
            </p>
        </div>
    </div>
</div>
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

.container {
    perspective: 1000px;
}

.box {
    position: relative;
    width: 280px;
    background-color: #4a4a4a;
    border-radius: 20px;
    overflow: hidden;
    transform-style: preserve-3d;
    transition: transform 0.15s ease-out;
    will-change: transform;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.imgBx {
    width: 100%;
    height: 220px;
    overflow: hidden;
}

.imgBx img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.contentBx {
    padding: 20px;
    color: #fff;
}

.contentBx h2 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: #ffa901;
}

.contentBx p {
    font-size: 0.85rem;
    line-height: 1.6;
    color: #c9c9c9;
}
  `;

    liveJs: string = `
function applyTilt(el, opts) {
    const max = (opts && opts.max) || 25;
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
}

applyTilt(document.querySelector('.box'), { max: 20 });
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
    <div class="container">
        <div class="box">
            <div class="imgBx">
                <img src="./img.jpg" alt="">
            </div>
            <div class="contentBx">
                <h2>Ibrahim Shafiq</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui alias ab sunt aut nisi facere
                    deserunt officia, obcaecati eius distinctio doloremque odit amet dicta delectus facilis possimus
                    nihil. Culpa?
                </p>
            </div>
        </div>
    </div>
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

.box {
    position: relative;
    width: 280px;
    background-color: #4a4a4a;
    border-radius: 20px;
    overflow: hidden;
}

.imgBx img { width: 100%; display: block; }
    `,
            codeTitle: 'style.css'
        }
    ];

    JSCodeSnippets: ICodeStructure[] = [
        {
            code: `
VanillaTilt.init(document.querySelector(".box"), {
  max: 25,
  speed: 400,
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

    zipFile: string = 'assets/zip-files/tilt 02.rar';
}