import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
    selector: 'app-cube',
    imports: [SharedCodeComponent],
    templateUrl: './cube.component.html',
    styleUrl: './cube.component.scss'
})
export class CubeComponent {
    projectName: string = '🔺 3D Animated Cube Grid with Interactive Highlighting';
    projectDescription: string = `
    This project features a dynamic 3D cube grid rendered using pure HTML, CSS (with advanced 3D transforms), and vanilla JavaScript. Each cube is composed of multiple layered span elements to simulate depth and lighting effects. The grid animates over time with randomly activated cubes that pop in or out based on their index. Each active cube uses CSS animations, color transitions, and shadow manipulations to create a vibrant, rotating highlight effect. The structure is fully responsive and demonstrates creative use of custom properties (--x, --y, --z) for positioning and animation control.
Key Features:
<ul>
    <li>Pure HTML/CSS 3D perspective cube grid</li>
    <li>Animated lighting and hue-shifting effects</li>
    <li>Random interactive element activation with different animation paths</li>
    <li>Highly visual, dynamic, and scalable design pattern</li>
    <li>Perfect for visual showcases, interactive installations, or learning complex CSS transforms.</li>
</ul>  `;
    projectDate: string = 'Last updated: May 2025';
    projectVersion: string = 'v1.0.0';
    projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
    projectVideSrc: string = './../../../../../assets/video-samples/3d cubes.mp4';

    HTMLCodeSnippets: ICodeStructure[] = [
        {
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated 3d Cube</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container" style="--clr: #f00;"></div>
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
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #555;
    overflow: hidden;
}

.container {
    position: relative;
    transform: skewY(-20deg);

    .cube {
        position: relative;
        transform: translate(calc(var(--z) * 60px), calc(var(--z) * 60px));

        div {
            position: absolute;
            transform: translateX(calc(-70px * var(--x))) translateY(calc(-70px * var(--y)));

            span {
                position: relative;
                display: inline-block;
                width: 50px;
                height: 50px;
                background-color: #dcdcdc;
                transition: 1.5s linear;

                &::before {
                    content: "";
                    position: absolute;
                    left: -40px;
                    width: 40px;
                    height: 100%;
                    background-color: #c8c8c8;
                    transform: skewY(45deg);
                    transition: 1.5s linear;
                    transform-origin: right;
                }

                &::after {
                    content: "";
                    position: absolute;
                    top: -40px;
                    left: 0;
                    background-color: #f2f2f2;
                    transform-origin: bottom;
                    width: 100%;
                    height: 40px;
                    transform: skewX(45deg);
                    box-shadow: -100px 100px 5px rgba(0, 0, 0, 0.15);
                    transition: 1.5s linear
                }

                &.active-span {
                    background-color: #f00;
                    animation: animate 3s linear infinite alternate-reverse;

                    &.active-even-span {
                        transform: translate(0, -50px);
                    }

                    &.active-odd-span {
                        transform: translate(0, 50px);
                    }

                    &::before {
                        background-color: #f75d64;
                    }

                    &::after {
                        background-color: #f13e55;
                        box-shadow: -150px 150px 5px rgba(0, 0, 0, 0.15);
                    }

                    &.active-odd-span {
                        &::after {
                            box-shadow: -75px 75px 5px 5px rgba(0, 0, 0, 0.25);
                        }
                    }
                }
            }
        }
    }
}


@keyframes animate {
    0%, 100% {
        filter: hue-rotate(0deg);
    }

    20% {
        filter: hue-rotate(45deg);
    }

    40% {
        filter: hue-rotate(90deg);
    }

    60% {
        filter: hue-rotate(-90deg);
    }

    80% {
        filter: hue-rotate(-45deg);
    }
}
    `,
            codeTitle: 'style.css'
        }
    ];

    JSCodeSnippets: ICodeStructure[] = [
        {
            code: `
function createCube() {
    let container = document.querySelector(".container");
    let zValues = [-3, -2, -1, 0, 1, 2, 3];

    zValues.forEach((z) => {
        let cube = document.createElement("div");
        cube.style.setProperty("--z", z);
        cube.classList.add('cube');

        for (let x = -3; x <= 3; x++) {
            let div = document.createElement("div");
            div.style.setProperty("--x", x);
            div.style.setProperty("--y", 0);
            let span = document.createElement("span");
            span.style.setProperty("--i", 3);
            div.appendChild(span);
            cube.appendChild(div);
        }
        container.appendChild(cube);
    });
}

function randomCubeActivation() {
    let spans = document.querySelectorAll('.cube span');
    setInterval(() => {
        let randomIndex = Math.floor(Math.random() * spans.length);
        let randomSpan = spans[randomIndex];

        randomSpan.classList.add('active-span');
        randomIndex % 2 == 0 ? randomSpan.classList.add('active-even-span') : randomSpan.classList.add('active-odd-span'); 

        setTimeout(() => {
            randomSpan.classList.remove('active-span');
        }, 2000)
        
    }, 500)
}
createCube()
randomCubeActivation()

    `,
            codeTitle: 'main.js'
        }
    ];

    zipFile: string = 'assets/zip-files/animated cubes.rar';
}
