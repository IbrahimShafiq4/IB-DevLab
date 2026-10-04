import type { SpecimenSource } from '../../../../core/specimen-registry';

const humonsterGif = './../../../../assets/images/animated-gif/humonster.gif';
const clipPathOne = './../../../../assets/images/clip-path/(1).jpg';
const clipPathTwo = './../../../../assets/images/clip-path/(2).jpg';
const clipPathThree = './../../../../assets/images/clip-path/(3).jpg';
const clipPathFour = './../../../../assets/images/clip-path/(4).jpg';
const clipPathFive = './../../../../assets/images/clip-path/(5).jpg';

/**
 * All S-XXX specimens — interactive UI components and animations.
 * (S-001 → S-040)
 */
export const COMPONENT_SOURCES: Record<string, SpecimenSource> = {

    // ═══════════════════════════════════════════════════════════════
    // S-001 — Tabs
    // ═══════════════════════════════════════════════════════════════
    'S-001': {
        stage: 'light',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabs</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="container">
        <div class="tab_box">
            <button class="tab_btn active">Home</button>
            <button class="tab_btn">About</button>
            <button class="tab_btn">Blogs</button>
            <button class="tab_btn">Contact us</button>
            <div class="line"></div>
        </div>
        <div class="content_box">
            <div class="content active">
                <h2>Home</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa minus eveniet obcaecati, exercitationem eos labore inventore adipisci laborum facere asperiores soluta nulla ut corporis, consectetur praesentium! Dicta, quidem aperiam.</p>
            </div>
            <div class="content">
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa minus eveniet obcaecati, exercitationem eos labore</p>
            </div>
            <div class="content">
                <h2>Blogs</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa minus eveniet obcaecati, exercitationem eos labore inventore adipisci laborum facere asperiores soluta nulla ut corporis, consectetur praesentium! Dicta, quidem aperiam.</p>
            </div>
            <div class="content">
                <h2>Contact us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa minus eveniet obcaecati, exercitationem eos labore inventore adipisci laborum facere asperiores soluta nulla ut corporis, consectetur praesentium! Dicta, quidem aperiam.</p>
            </div>
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #deeeff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: "Poppins", sans-serif;
}

.container {
    width: 600px;
    background-color: #fff;
    padding: 30px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
}

.tab_box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid rgb(229, 229, 229);
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    position: relative;
}

.tab_box .tab_btn {
    font-size: inherit;
    font-weight: inherit;
    color: #919191;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 18px;
    cursor: pointer;
}

.tab_box .tab_btn.active {
    color: #7460ff;
}

.tab_box .line {
    position: absolute;
    top: calc(100% - 1px);
    left: 17px;
    width: 90px;
    height: 5px;
    background-color: #7460ff;
    transition: all 0.3s linear;
}

.content_box {
    padding: 20px;
}

.content_box .content {
    transition: 0.3s linear;
    display: none;
    margin: 20px 0;
    animation: moving 0.5s ease;
}

.content_box .content.active {
    display: block;
}

.content_box .content h2 {
    margin-bottom: 10px;
}

@keyframes moving {
    from {
        transform: translateX(50px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}`,
        js: `const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        removeActiveClass();
        tab.classList.add('active');
        lineWidth(e);
        displayAllContent();
        showContent(index);
    });
});

function removeActiveClass() {
    tabs.forEach((tab) => {
        tab.classList.remove('active');
    });
}

function lineWidth(e) {
    let line = document.querySelector('.line');
    line.style.width = e.target.offsetWidth + 'px';
    line.style.left = e.target.offsetLeft + 'px';
}

function displayAllContent() {
    all_content.forEach((content) => content.classList.remove('active'));
}

function showContent(index) {
    all_content[index].classList.add('active');
}`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-002 — Animated Typing Text
    // ═══════════════════════════════════════════════════════════════
    'S-002': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Typing Text Effect</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="container">
        <span class="txt first-txt">I'm a</span>
        <span class="txt second-txt"></span>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
}

body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #010718;
}

.container .txt {
    position: relative;
    color: #4070f4;
    font-size: 30px;
    font-weight: 600;
}

.container .txt.first-txt {
    color: #fff;
}

.container .txt.second-txt::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #010718;
    border-left: 2px solid #4070f4;
    animation: animate 4s steps(12) infinite;
}

@keyframes animate {
    40%, 60% {
        left: calc(100% + 4px);
    }
    100% {
        left: 0%;
    }
}`,
        js: `const text = document.querySelector('.second-txt');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Designer";
    }, 8000);
};

textLoad();
setInterval(textLoad, 12000);`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-003 — 3D Cube
    // ═══════════════════════════════════════════════════════════════
    'S-003': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated 3d Cube</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="container" style="--clr: #f00;"></div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* {
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
}

.container .cube {
    position: relative;
    transform: translate(calc(var(--z) * 60px), calc(var(--z) * 60px));
}

.container .cube > div {
    position: absolute;
    transform: translateX(calc(-70px * var(--x))) translateY(calc(-70px * var(--y)));
}

.container .cube > div > span {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: #dcdcdc;
    transition: 1.5s linear;
}

.container .cube > div > span::before {
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

.container .cube > div > span::after {
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
    transition: 1.5s linear;
}

.container .cube > div > span.active-span {
    background-color: #f00;
    animation: animate 3s linear infinite alternate-reverse;
}

.container .cube > div > span.active-span.active-even-span {
    transform: translate(0, -50px);
}

.container .cube > div > span.active-span.active-odd-span {
    transform: translate(0, 50px);
}

.container .cube > div > span.active-span::before {
    background-color: #f75d64;
}

.container .cube > div > span.active-span::after {
    background-color: #f13e55;
    box-shadow: -150px 150px 5px rgba(0, 0, 0, 0.15);
}

.container .cube > div > span.active-span.active-odd-span::after {
    box-shadow: -75px 75px 5px 5px rgba(0, 0, 0, 0.25);
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
}`,
        js: `function createCube() {
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
        }, 2000);

    }, 500);
}

createCube();
randomCubeActivation();`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-004 — Mouse Spark
    // ═══════════════════════════════════════════════════════════════
    'S-004': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mouse Spark</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <script src="./main.js"></script>
</body>
</html>`,
        css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #222;
    overflow: hidden;
}

i {
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: #0f0;
    animation: animate 2s linear forwards;
}

@keyframes animate {
    0% {
        opacity: 1;
        transform: translate(0, 0);
    }
    100% {
        opacity: 0;
        transform: translate(var(--x), var(--y));
    }
}`,
        js: `const spark = (event) => {
    let i = document.createElement('i');
    i.style.left = (event.pageX) + 'px';
    i.style.top = (event.pageY) + 'px';

    i.style.scale = \`\${Math.random() * 2 + 1}\`;
    i.style.setProperty('--x', getTransition());
    i.style.setProperty('--y', getTransition());

    document.body.appendChild(i);

    setTimeout(() => {
        document.body.removeChild(i);
    }, 2000);
};

const getTransition = () => {
    return \`\${Math.random() * 400 - 200}px\`;
};

document.addEventListener('mousemove', spark);`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-005 — Ripple Boxes
    // ═══════════════════════════════════════════════════════════════
    'S-005': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ripple Boxes</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="container">
        <div class="box" style="--clr: #2196f3;"></div>
        <div class="box" style="--clr: #f32175;"></div>
        <div class="box" style="--clr: #ff7f20;"></div>
        <div class="box" style="--clr: #9bdc28;"></div>
    </div>
    <script src="./main.js"></script>
</body>
</html>`,
        css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #333;
}

.container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
}

.container .box {
    position: relative;
    width: 250px;
    height: 300px;
    background-color: #4a4a4a;
    border-radius: 20px;
    overflow: hidden;
}

.container .box::before {
    content: '';
    position: absolute;
    top: var(--y);
    left: var(--x);
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    background-color: var(--clr);
    border-radius: 50%;
    transition: 1s, top 0s, left 0s;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 1);
}

.container .box:hover::before {
    width: 400px;
    height: 400px;
}`,
        js: `let boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.onmousemove = function (e) {
        let rect = box.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        box.style.setProperty('--x', \`\${x}px\`);
        box.style.setProperty('--y', \`\${y}px\`);
    };
});`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-006 — Colorful Rains
    // ═══════════════════════════════════════════════════════════════
    'S-006': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colorful Rains</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <h2>Colorful Rains</h2>
    <script src="./main.js"></script>
</body>
</html>`,
        css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #262626;
    background-image: linear-gradient(to right, #333 1px, transparent 1px),
        linear-gradient(to bottom, #333 1px, transparent 1px);
    background-size: 5vh 5vh;
    overflow: hidden;
}

h2 {
    font-family: Consolas;
    font-size: 8em;
    color: #fff;
    text-shadow: 1px 1px 5px #FFFAE6;
    filter: drop-shadow(1px 1px 5px #fffae6);
}

.circle {
    position: absolute;
    top: 0;
    width: 20px;
    aspect-ratio: 1 / 1;
    border: 5px solid rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    background-color: #0f0;
    animation: animate 10s linear forwards;
    transform-origin: top;
}

@keyframes animate {
    0% {
        transform: translateY(0vh) scale(0);
    }
    10% {
        transform: translateY(0vh) scale(1);
    }
    45% {
        transform: translateY(0vh) scale(1);
    }
    55% {
        transform: translateY(calc(100vh - 100%)) scale(1);
    }
    90% {
        transform: translateY(calc(100vh - 100%)) scale(1);
        transform-origin: bottom;
    }
    100% {
        transform: translateY(calc(100vh - 100%)) scale(0);
        transform-origin: bottom;
    }
}`,
        js: `function falling() {
    let divEl = document.createElement('div');
    divEl.setAttribute('class', 'circle');
    document.body.appendChild(divEl);

    let size = Math.random() * 50;
    divEl.style.width = \`\${5 + size}px\`;

    divEl.style.left = Math.random() * innerWidth + 'px';

    let angle = Math.random() * 360;

    divEl.style.boxShadow = '0 0 20px #0f0';
    divEl.style.filter = \`hue-rotate(\${angle}deg)\`;

    setTimeout(() => {
        document.body.removeChild(divEl);
    }, 10000);
}

setInterval(() => {
    falling();
}, 200);`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-007 — Loading V1 (Neon)
    // ═══════════════════════════════════════════════════════════════
    'S-007': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading Animation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div></div>
</body>
</html>`,
        css: `* {
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
}`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-008 — Glassmorphism
    // ═══════════════════════════════════════════════════════════════
    'S-008': {
        stage: 'light',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glassmorphism</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="glass">
        <h1>Hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam assumenda, nisi ut soluta voluptatum quidem ducimus dolor quae necessitatibus!</p>
    </div>
</body>
</html>`,
        css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: linear-gradient(90deg, #d593e684 20%, #60badbe1 80%);
    width: 100%;
}

.glass {
    border: 1px solid rgba(255, 255, 255, 0.35);
    width: 20rem;
    height: 20rem;
    padding: 2.5rem;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.8rem);
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.glass > * {
    font-family: 'Courier New', Courier, monospace;
}

.glass p {
    line-height: 1.5;
}`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-009 — Solar System
    // ═══════════════════════════════════════════════════════════════
    'S-009': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Solar System</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="solar-system">
        <div class="earth-circle"></div>
        <div class="sun"></div>
        <div class="earth">
            <div class="moon-circle"></div>
            <div class="moon"></div>
        </div>
    </div>
</body>
</html>`,
        css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.solar-system {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.earth-circle {
    width: 400px;
    height: 400px;
    border: 2px solid #555;
    border-radius: 50%;
}

.sun {
    position: absolute;
    height: 100px;
    width: 100px;
    background-color: rgba(255, 255, 0, 0.5);
    border-radius: 50%;
    box-shadow: 0 0 50px rgba(255, 255, 0, 0.5), inset 0 0 5px rgba(0, 0, 0, 1);
    animation: 5s increaseBoxShadow linear infinite;
}

.earth {
    position: absolute;
    top: -10px;
    width: 45px;
    height: 45px;
    background-color: green;
    border-radius: 50%;
    animation: 18s rotateEarth linear infinite;
    transform-origin: 30px 215px;
}

.moon-circle {
    position: absolute;
    top: -20px;
    left: -20px;
    width: 85px;
    height: 85px;
    border-radius: 50%;
    border: 2px solid #555;
}

.moon {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #ccc;
    top: -30px;
    left: 15px;
    border-radius: 50%;
    animation: 1s rotateEarth linear infinite;
}

@keyframes rotateEarth {
    to { rotate: 360deg; }
}

@keyframes increaseBoxShadow {
    0%   { box-shadow: 0 0 50px #ff0; }
    50%  { box-shadow: 0 0 100px #ff0; }
    100% { box-shadow: 0 0 50px #ff0; }
}`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-010 — Night Mode V1
    // ═══════════════════════════════════════════════════════════════
    'S-010': {
        stage: 'auto',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Designer Meme night mode</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
</head>
<body style="transform: scale(0.5);">
    <div class="night-mode" style="--sun-active: false">
        <div class="night-mode-btn">
            <div class="sun-moon-toggler"></div>
            <div class="clouds-stars">
                <div class="clouds-stars-bottom">
                    <span style="--left: 5; --bottom: 10;"></span>
                    <span style="--left: 15; --bottom: 20;"></span>
                    <span style="--left: 25; --bottom: 30;"></span>
                    <span style="--left: 35; --bottom: 15;"></span>
                    <span style="--left: 45; --bottom: 25;"></span>
                    <span style="--left: 55; --bottom: 35;"></span>
                    <span style="--left: 65; --bottom: 20;"></span>
                    <span style="--left: 75; --bottom: 40;"></span>
                    <span style="--left: 85; --bottom: 10;"></span>
                    <span style="--left: 95; --bottom: 5;"></span>
                </div>
                <div class="clouds-stars-top">
                    <span style="--left: 7; --bottom: 80;"></span>
                    <span style="--left: 2; --bottom: 70;"></span>
                    <span style="--left: 3; --bottom: 65;"></span>
                    <span style="--left: 10; --bottom: 90;"></span>
                    <span style="--left: 12; --bottom: 75;"></span>
                    <span style="--left: 87; --bottom: 85;"></span>
                    <span style="--left: 76; --bottom: 60;"></span>
                    <span style="--left: 32; --bottom: 95;"></span>
                    <span style="--left: 27; --bottom: 88;"></span>
                </div>
            </div>
        </div>
    </div>
    <script src="./main.js"></script>
</body>
</html>`,
        css: `:root {
    --main-background: #d4d4d4;
}

body {
    transition: 0.3s linear;
    background-color: var(--main-background);
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.night-mode {
    position: relative;
    width: max-content;
    cursor: pointer;
    overflow: hidden;
}

.night-mode-btn {
    width: 90px;
    height: 40px;
    border-radius: 30px;
    background-color: #1e3a8a;
    background-image: radial-gradient(circle at 10% 50%, #ebf4ff 0%, #c3dafe 15%, transparent 16%),
        radial-gradient(circle at 20% 50%, #dbeafe 0%, #93c5fd 25%, transparent 26%),
        radial-gradient(circle at 30% 50%, #bfdbfe 0%, #60a5fa 35%, transparent 36%),
        radial-gradient(circle at 40% 50%, #a5b4fc 0%, #3b82f6 45%, transparent 46%),
        radial-gradient(circle at 50% 50%, #818cf8 0%, #2563eb 55%, transparent 56%),
        radial-gradient(circle at 60% 50%, #6366f1 0%, #1d4ed8 65%, transparent 66%),
        radial-gradient(circle at 70% 50%, #4f46e5 0%, #1e40af 75%, transparent 76%),
        radial-gradient(circle at 80% 50%, #4338ca 0%, #1e3a8a 85%, transparent 86%),
        radial-gradient(circle at 90% 50%, #3730a3 0%, #172554 95%, transparent 96%),
        radial-gradient(circle at 100% 50%, #312e81 0%, #0f172a 100%);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    box-shadow:
        inset 2px 2px 2px rgba(0, 0, 0, 0.4),
        inset -2px -2px 2px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    transition: background-color 0.3s linear;
    transition-delay: 0.3s;
}

.sun-moon-toggler {
    position: relative;
    transform: translate(4px, 5px);
    transition: 0.3s linear;
    z-index: 2;
}

.clouds-stars {
    position: absolute;
    inset: 0;
    z-index: 1;
    transition: all 0.5s ease;
    overflow: hidden;
}

.night-mode[style*="--sun-active: true"] .sun-moon-toggler {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow:
        inset -28px -2px 0 3px #f3d076,
        0 0 5px #f3d076,
        0 0 20px #f3d076,
        0 0 50px #f3d076,
        0 0 70px #f3d076;
}

.night-mode[style*="--sun-active: true"] .clouds-stars-bottom {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    z-index: 9;
    transition: 0.3s linear;
}

.night-mode[style*="--sun-active: true"] .clouds-stars-bottom span {
    position: absolute;
    right: 0;
    bottom: 0px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgb(247, 240, 240);
}

.night-mode[style*="--sun-active: true"] .clouds-stars-top {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateY(-49px);
    border-radius: 20px;
    z-index: 1;
    transition: 0.3s linear;
}

.night-mode[style*="--sun-active: true"] .clouds-stars-top span {
    position: absolute;
    right: 0;
    bottom: 0px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: rgba(247, 240, 240, 0.2);
}

.night-mode[style*="--sun-active: false"] .sun-moon-toggler {
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    background-color: transparent;
    box-shadow:
        inset -8px -2px 0 3px #adadad,
        0 0 5px transparent,
        0 0 20px transparent,
        0 0 50px transparent,
        0 0 70px transparent;
    border-radius: 50%;
    transform: translate(58px, 5px);
}

.night-mode[style*="--sun-active: false"] .clouds-stars-bottom {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    z-index: 9;
    transform: translateY(10px);
}

.night-mode[style*="--sun-active: false"] .clouds-stars-bottom span {
    position: absolute;
    width: 5px;
    height: 5px;
    left: calc(var(--left) * 1%);
    bottom: calc(var(--bottom) * 1%);
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    background-color: #f3d076;
    box-shadow:
        0 0 5px #f3d076,
        0 0 20px #f3d076,
        0 0 50px #f3d076;
}

.night-mode[style*="--sun-active: false"] .clouds-stars-top {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateY(-30px);
    border-radius: 20px;
    z-index: 1;
}

.night-mode[style*="--sun-active: false"] .clouds-stars-top span {
    position: absolute;
    left: calc(var(--left) * 1%);
    bottom: calc(var(--bottom) * 1%);
    width: 5px;
    height: 5px;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    background-color: #f3d076;
    box-shadow:
        0 0 5px #f3d076,
        0 0 20px #f3d076,
        0 0 50px #f3d076;
}`,
        js: `const nightModeContainer = document.querySelector('.night-mode');
let toggleView = false;
nightModeContainer.addEventListener('click', () => {
    toggleView = !toggleView;
    nightModeContainer.style.setProperty('--sun-active', toggleView);
    document.body.style.setProperty('--main-background', toggleView ? '#080a11' : '#d4d4d4');
});`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-011 — Pie Chart
    // ═══════════════════════════════════════════════════════════════
    'S-011': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pie Chart</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="conic-container">
        <figure>
            <div class="conic-gradient"></div>
            <div class="charts-number">
                <figcaption>
                    <span class="colored-span" style="--clr: red;"></span>
                    <span class="chart-number">30%</span>
                </figcaption>
                <figcaption>
                    <span class="colored-span" style="--clr: blue;"></span>
                    <span class="chart-number">20%</span>
                </figcaption>
                <figcaption>
                    <span class="colored-span" style="--clr: yellow;"></span>
                    <span class="chart-number">20%</span>
                </figcaption>
                <figcaption>
                    <span class="colored-span" style="--clr: green;"></span>
                    <span class="chart-number">30%</span>
                </figcaption>
            </div>
        </figure>
    </div>
</body>
</html>`,
        css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #000;
    background-image: repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 40px),
        repeating-linear-gradient(to right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 40px);
    background-size: 40px 40px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.conic-gradient {
    width: 300px;
    height: 300px;
    background-image:
        radial-gradient(#000 0% 60%, transparent 0%),
        conic-gradient(red 0% 30%, blue 30% 50%, yellow 50% 70%, green 70% 100%);
    border-radius: 50%;
    animation: conic-gradient-animation 4s linear infinite;
}

.charts-number {
    margin: 20px auto;
    display: flex;
    align-items: center;
    gap: 1rem;
}

figcaption {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.colored-span {
    width: 20px;
    height: 10px;
    border-radius: 2px;
    background-color: var(--clr);
    animation: colored-span-animation 4s linear infinite;
}

.chart-number {
    font-size: 1rem;
    color: #fff;
    font-weight: bold;
    font-family: cursive;
}

@keyframes conic-gradient-animation {
    0%   { transform: rotate(0deg); filter: hue-rotate(0deg); }
    25%  { transform: rotate(90deg); filter: hue-rotate(90deg); }
    50%  { transform: rotate(180deg); filter: hue-rotate(180deg); }
    75%  { transform: rotate(270deg); filter: hue-rotate(270deg); }
    100% { transform: rotate(360deg); filter: hue-rotate(360deg); }
}

@keyframes colored-span-animation {
    0%   { filter: hue-rotate(0deg); }
    25%  { filter: hue-rotate(90deg); }
    50%  { filter: hue-rotate(180deg); }
    75%  { filter: hue-rotate(270deg); }
    100% { filter: hue-rotate(360deg); }
}`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-012 — Rotating Arrows (was Mouse Spark duplicate)
    // ═══════════════════════════════════════════════════════════════
    'S-012': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rotating Arrows</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <script src="./main.js"></script>
</body>
</html>`,
        css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #222;
    overflow: hidden;
}

i {
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: #0f0;
    animation: animate 2s linear forwards;
}

@keyframes animate {
    0% {
        opacity: 1;
        transform: translate(0, 0);
    }
    100% {
        opacity: 0;
        transform: translate(var(--x), var(--y));
    }
}`,
        js: `const spark = (event) => {
    let i = document.createElement('i');
    i.style.left = (event.pageX) + 'px';
    i.style.top = (event.pageY) + 'px';

    i.style.scale = \`\${Math.random() * 2 + 1}\`;
    i.style.setProperty('--x', getTransition());
    i.style.setProperty('--y', getTransition());

    document.body.appendChild(i);

    setTimeout(() => {
        document.body.removeChild(i);
    }, 2000);
};

const getTransition = () => {
    return \`\${Math.random() * 400 - 200}px\`;
};

document.addEventListener('mousemove', spark);`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-013 — 3D Tilt Card
    // ═══════════════════════════════════════════════════════════════
    'S-013': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Tilt Card</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="container">
        <div class="box">
            <div class="imgBx">
                <img src="https://i.pravatar.cc/200?img=12" alt="Profile">
            </div>
            <div class="contentBx">
                <h2>Ibrahim Shafiq</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui alias ab sunt aut nisi facere deserunt officia, obcaecati eius distinctio doloremque odit amet dicta delectus facilis possimus nihil. Culpa?</p>
            </div>
        </div>
    </div>
    <script src="./main.js"></script>
</body>
</html>`,
        css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

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
}`,
        js: `function applyTilt(el, opts) {
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

applyTilt(document.querySelector('.box'), { max: 20 });`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-014 — Blocks Generator
    // ═══════════════════════════════════════════════════════════════
    'S-014': {
        stage: 'dark',
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blocks Generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="container">
        <button>Generate</button>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #202020;
    overflow: hidden;
}

.container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

button {
    position: relative;
    z-index: 1;
    margin: 10px;
    border: none;
    outline: none;
    background-color: #fff;
    font-size: 1.2em;
    padding: 15px 30px;
    cursor: pointer;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.25);
}

.block {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #fff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.25);
}

.block:nth-child(3n + 2) {
    background-color: #444;
}

.block:nth-child(3n + 3) {
    background-color: #ff9213;
}`,
        js: `
const container = document.querySelector('.container');
const button = document.querySelector('button');

for (var i = 1; i <= 200; i++) {
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    container.appendChild(blocks);
}

function generate() {
    document.querySelectorAll('.block').forEach((block) => {
        const tx = Math.random() * 2000 - 1000;
        const ty = Math.random() * 2000 - 1000;
        const scale = 1 + Math.random() * 4;
        const opacity = Math.random();
        block.style.transform = 'translate(' + tx + 'px, ' + ty + 'px) scale(' + scale + ')';
        block.style.opacity = opacity;
        block.style.transition = '0.3s linear';
    });
}

button.addEventListener('click', generate);`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-015 — Password Generator
    // ═══════════════════════════════════════════════════════════════
    'S-015': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet" />
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="container">
        <div class="password-box">
            <h2 class="heading">Password Generator</h2>
            <div class="box">
                <input type="text" placeholder="Password Generator" class="result-input">
                <button type="button" class="copy-btn">
                    <i class="ri-file-copy-fill"></i>
                </button>
            </div>
            <h4 class="pass-length">Password Length</h4>
            <div class="range-box">
                <input type="range" min="1" max="40" value="10" class="range-btn">
                <p class="range-num">10</p>
            </div>
            <div class="include-input-box">
                <input type="checkbox" name="uppercase" class="checkbox-input" checked id="uppercase">
                <label for="uppercase">Include Uppercase Letters</label>
            </div>
            <div class="include-input-box">
                <input type="checkbox" name="lowercase" class="checkbox-input" id="lowercase">
                <label for="lowercase">Include Lowercase Letters</label>
            </div>
            <div class="include-input-box">
                <input type="checkbox" name="numbers" class="checkbox-input" id="numbers">
                <label for="numbers">Include Numbers</label>
            </div>
            <div class="include-input-box">
                <input type="checkbox" name="symbols" class="checkbox-input" id="symbols">
                <label for="symbols">Include Symbols</label>
            </div>
            <button class="generate-btn">Generate Password</button>
        </div>
        <div class="alert">
            <div class="popup">
                <p>Please Select </p>
            </div>
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    background-color: #eef0f5;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 10px;
}

.password-box {
    padding: 20px;
    background-color: #1c2136;
    color: #fff;
    border-radius: 20px;
    max-width: 400px;
    width: 100%;
}

.heading {
    border-left: 6px solid #5d33f8;
    padding-left: 10px;
    margin: 10px 0 30px;
}

.box {
    display: flex;
    align-items: center;
    border: 2px solid #5d33f8;
    height: 50px;
    padding: 0 15px;
    border-radius: 6px;
}

.box .result-input {
    width: 100%;
    background-color: transparent;
    border: none;
    color: #fff;
    outline: none;
    font-size: 1rem;
}

.box .copy-btn {
    background-color: transparent;
    outline: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
}

.pass-length {
    margin-block: 20px 10px;
}

.range-box {
    display: flex;
    align-items: center;
    margin-block: 10px 20px;
}

.range-box .range-btn {
    width: 100%;
    height: 2px;
    cursor: pointer;
}

.range-box .range-num {
    margin-left: 10px;
}

.include-input-box {
    display: flex;
    align-items: center;
    transition: 0.3s linear;
}

.include-input-box .checkbox-input {
    width: 15px;
    height: 15px;
    margin: 10px 0;
    margin-right: 10px;
}

.generate-btn {
    width: 100%;
    height: 40px;
    background-color: #5d33f8;
    color: #fff;
    font-size: 16px;
    border: none;
    outline: none;
    border-radius: 6px;
    margin-top: 20px;
    cursor: pointer;
}

.alert {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: none;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.alert.active {
    display: flex;
}

.alert .popup {
    width: 400px;
    height: 200px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.alert .popup p {
    background-color: #1c2136;
    padding: 20px;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem;
}`,
        js: `let rangeBtn = document.querySelector('.range-btn');
let rangeNum = document.querySelector(".range-num");
let resultInput = document.querySelector('.result-input');
let copyBtn = document.querySelector('.copy-btn');
let generateBtn = document.querySelector('.generate-btn');
let alertBx = document.querySelector('.alert');
let alertContent = document.querySelector('.alert p');

let uppercaseCheckbox = document.querySelector('#uppercase');
let lowercaseCheckbox = document.querySelector('#lowercase');
let numbersCheckbox = document.querySelector('#numbers');
let symbolsCheckbox = document.querySelector('#symbols');

let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '1234567890';
let symbols = '!@#$%^&*()_+=';

rangeBtn.addEventListener('input', (event) => {
    rangeNum.innerHTML = event.target.value;
});

generateBtn.addEventListener('click', () => {
    let alphabets = '';
    let generatedPassword = resultInput.value;

    alphabets += uppercaseCheckbox.checked ? uppercase : '';
    alphabets += lowercaseCheckbox.checked ? lowercase : '';
    alphabets += numbersCheckbox.checked ? numbers : '';
    alphabets += symbolsCheckbox.checked ? symbols : '';

    if (alphabets === '') {
        alertBx.classList.add('active');
        alertContent.innerHTML = 'Please Select One Checkbox';
    } else {
        do {
            generatedPassword = generatePassword(alphabets, rangeBtn.value, generatedPassword.length);
        } while (!isValidPassword(generatedPassword));

        resultInput.value = generatedPassword;
        logCheckedParents();
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('alert')) {
        alertBx.classList.remove('active');
    }
});

resultInput.addEventListener('input', () => {
    updateCheckboxesAndStyles(resultInput.value);
});

function generatePassword(alphabets, length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * alphabets.length);
        password += alphabets[randomIndex];
    }
    return password;
}

function isValidPassword(password) {
    let hasUppercase = !uppercaseCheckbox.checked || /[A-Z]/.test(password);
    let hasLowercase = !lowercaseCheckbox.checked || /[a-z]/.test(password);
    let hasNumbers = !numbersCheckbox.checked || /[0-9]/.test(password);
    let hasSymbols = !symbolsCheckbox.checked || /[!@#$%^&*()_=+]/.test(password);

    return hasUppercase && hasLowercase && hasNumbers && hasSymbols;
}

function logCheckedParents() {
    let checkboxes = [uppercaseCheckbox, lowercaseCheckbox, numbersCheckbox, symbolsCheckbox];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.parentElement.style.textDecoration = 'line-through';
            checkbox.nextElementSibling.style.color = '#f00';
        } else {
            checkbox.parentElement.style.textDecoration = 'none';
            checkbox.nextElementSibling.style.color = '#fff';
        }
    });
}

function updateCheckboxesAndStyles(value) {
    let checkboxes = [
        { checkbox: uppercaseCheckbox, regex: /[A-Z]/ },
        { checkbox: lowercaseCheckbox, regex: /[a-z]/ },
        { checkbox: numbersCheckbox, regex: /[0-9]/ },
        { checkbox: symbolsCheckbox, regex: /[!@#$%^&*()_=+]/ }
    ];

    checkboxes.forEach(item => {
        if (item.regex.test(value)) {
            item.checkbox.checked = true;
            item.checkbox.parentElement.style.textDecoration = 'line-through';
            item.checkbox.nextElementSibling.style.color = '#f00';
        } else {
            item.checkbox.checked = false;
            item.checkbox.parentElement.style.textDecoration = 'none';
            item.checkbox.nextElementSibling.style.color = 'initial';
        }
    });
}

copyBtn.addEventListener('click', () => {
    if (resultInput.value.length == 0) {
        alertBx.classList.add('active');
        alertContent.innerHTML = 'Please click on Generate Password Button';
    } else {
        resultInput.select();
        resultInput.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(resultInput.value);

        copyBtn.innerHTML = '<i class="ri-check-line"></i>';
        setTimeout(() => {
            copyBtn.innerHTML = '<i class="ri-file-copy-fill"></i>';
        }, 1500);
    }
});`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-016 — Animated Popup V1
    // ═══════════════════════════════════════════════════════════════
    'S-016': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Animated Card & Popup UI</title>
    <link rel="stylesheet" href="css/style.css" type="text/css" />
</head>
<body style="transform: scale(0.5);">
    <div class="container">
        <div class="content">
            <h2>Heading...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam, libero maiores possimus perferendis enim harum, fugiat esse laboriosam amet recusandae dolores hic tempore laudantium velit eligendi, quia quisquam rerum!</p>
        </div>
        <div class="toggleBtn"></div>
    </div>
    <script src="js/main.js"></script>
</body>
</html>`,
        css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #1a242a;
}

.container {
    position: relative;
    width: 0;
    height: 0;
    background-color: #37444b;
    border-radius: 25px;
    transition: 0.5s linear;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container.active {
    width: 400px;
    height: 400px;
    transition-delay: 0.5s;
}

.container::before {
    content: '';
    position: absolute;
    bottom: -15px;
    transform: rotate(45deg);
    width: 40px;
    height: 40px;
    background-color: #37444b;
    border-radius: 5px;
    opacity: 0;
    transition: 0.5s linear;
}

.container.active::before {
    transition-delay: 0.5s;
    opacity: 1;
}

.container .content {
    min-width: 400px;
    padding: 40px;
    color: #fff;
    opacity: 0;
    transition: 0.5s linear;
    transform: scale(0);
}

.container .content p {
    line-height: 35px;
}

.container.active .content {
    opacity: 1;
    transition-delay: 0.5s;
    transform: scale(1);
}

.container .toggleBtn {
    position: absolute;
    bottom: -20px;
    min-width: 60px;
    height: 60px;
    background-color: #0bcf9c;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
    transition: 0.5s;
}

.container.active .toggleBtn {
    bottom: -90px;
    transform: rotate(135deg);
    background-color: #ff5a57;
}

.container .toggleBtn::before {
    content: '+';
    font-size: 2.5em;
    color: #fff;
}`,
        js: `let toggleBtn = document.querySelector('.toggleBtn');
let container = document.querySelector('.container');

toggleBtn.onclick = function () {
    container.classList.toggle('active');
};`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-017 — Menu Indicator V1
    // ═══════════════════════════════════════════════════════════════
    'S-017': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css" type="text/css" />
</head>
<body style="transform: scale(0.5);">
    <div class="navigation">
        <ul>
            <li class="list active" data-color="#f53b57">
                <a href="#">
                    <span class="icon"><i class="fa fa-home"></i></span>
                    <span class="title">Home</span>
                </a>
            </li>
            <li class="list" data-color="#3c40c6">
                <a href="#">
                    <span class="icon"><i class="fa fa-user"></i></span>
                    <span class="title">profile</span>
                </a>
            </li>
            <li class="list" data-color="#05c46b">
                <a href="#">
                    <span class="icon"><i class="fa fa-wechat"></i></span>
                    <span class="title">Message</span>
                </a>
            </li>
            <li class="list" data-color="#0fbcf9">
                <a href="#">
                    <span class="icon"><i class="fa fa-question-circle"></i></span>
                    <span class="title">Help</span>
                </a>
            </li>
            <li class="list" data-color="#ffa901">
                <a href="#">
                    <span class="icon"><i class="fa fa-gear"></i></span>
                    <span class="title">Settings</span>
                </a>
            </li>
            <div class="indicator"></div>
        </ul>
    </div>
    <script src="js/main.js"></script>
</body>
</html>`,
        css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #333;
    transition: 0.5s linear;
}

.navigation {
    position: relative;
    width: 70px;
    height: 350px;
    background: #fff;
    border-radius: 35px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
}

.navigation ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.navigation ul li {
    position: relative;
    list-style: none;
    width: 70px;
    height: 70px;
    z-index: 1;
}

.navigation ul li a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    color: #333;
    font-weight: 500;
}

.navigation ul li a .icon {
    position: relative;
    display: block;
    line-height: 75px;
    text-align: center;
    transition: 0.5s linear;
}

.navigation ul li.active a .icon {
    color: #fff;
}

.navigation ul li a .icon i {
    font-size: 24px;
    transition: 0.5s linear;
}

.navigation ul li a .title {
    position: absolute;
    top: 50%;
    left: 110px;
    transform: translateY(-50%);
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 6px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s linear;
}

.navigation ul li:hover a .title {
    opacity: 1;
    visibility: visible;
    transform: translateX(-25px) translateY(-50%);
}

.navigation ul li a .title::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 12px;
    height: 12px;
    background-color: #fff;
}

.navigation ul .indicator {
    position: absolute;
    left: 0;
    width: 70px;
    height: 70px;
    transition: 0.5s linear;
}

.navigation ul .indicator::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background: #333;
    border-radius: 50%;
    transition: 0.5s linear;
}

.navigation ul li:nth-child(1).active ~ .indicator { transform: translateY(calc(70px * 0)); }
.navigation ul li:nth-child(2).active ~ .indicator { transform: translateY(calc(70px * 1)); }
.navigation ul li:nth-child(3).active ~ .indicator { transform: translateY(calc(70px * 2)); }
.navigation ul li:nth-child(4).active ~ .indicator { transform: translateY(calc(70px * 3)); }
.navigation ul li:nth-child(5).active ~ .indicator { transform: translateY(calc(70px * 4)); }

.navigation ul li:nth-child(1).active ~ .indicator::before { background-color: #f53b57; }
.navigation ul li:nth-child(2).active ~ .indicator::before { background-color: #3c40c6; }
.navigation ul li:nth-child(3).active ~ .indicator::before { background-color: #05c46b; }
.navigation ul li:nth-child(4).active ~ .indicator::before { background-color: #0fbcf9; }
.navigation ul li:nth-child(5).active ~ .indicator::before { background-color: #ffa901; }`,
        js: `let list = document.querySelectorAll('li');
for (let i = 0; i < list.length; i++) {
    list[i].onmouseover = function () {
        let j = 0;
        while (j < list.length) {
            list[j++].className = "list";
        }
        list[i].className = 'list active';
    };
}

list.forEach(elements => {
    elements.addEventListener('mouseenter', function (event) {
        let bg = document.querySelector('body');
        let color = event.target.getAttribute('data-color');
        bg.style.backgroundColor = color;
    });
});`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-018 — Conic Gradient Generator
    // ═══════════════════════════════════════════════════════════════
    'S-018': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Conic Gradient Generator</title>
  <link rel="stylesheet" href="main.css">
</head>
<body style="transform: scale(0.5);">
  <h1>conic-gradient pie&nbsp;chart</h1>
  <div class="container chart">
    <div class="pie_wrapper">
      <div class="pie"></div>
    </div>
    <div class="values"></div>
  </div>

  <div class="container code">
    <code></code>
  </div>
  <script src="main.js"></script>
</body>
</html>`,
        css: `@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap");

*, *::before, *::after {
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
}

body {
  font-family: "Noto Sans JP", sans-serif;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 3em 1em;
}

input, button {
  font-size: inherit;
  font-family: inherit;
}

h1 { padding: 20px; line-height: 1; }

.chart {
  display: grid;
  grid-template-columns: 240px 170px;
  grid-gap: 30px;
  padding: 30px;
  width: 100%;
  max-width: 500px;
  text-align: center;
  border: 1px solid #111;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .chart {
    padding: 30px 0;
    max-width: 320px;
    grid-template-columns: 1fr;
  }
}

.pie {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  position: relative;
  border: 1px solid white;
}

.pie_dial {
  position: absolute;
  bottom: 50%;
  left: calc(50% - 1px);
  width: 2px;
  height: 120px;
  background-color: white;
  transform-origin: bottom;
}

.value {
  padding: 0.5em;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-bottom: 0.25em;
}

.value_input {
  padding: 0 0.5em;
  width: 5em;
  height: 2em;
  border: none;
  border-radius: 4px;
}

.value_button {
  position: relative;
  width: 2em;
  height: 2em;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  border-radius: 4px;
  margin-left: 0.25em;
}

.value_button:disabled { color: rgba(255, 255, 255, 0.13); }

.value_color {
  position: absolute;
  top: 0;
  left: 0;
  width: 2em;
  height: 2em;
  opacity: 0;
}

.value_addText { margin-left: 0; }
.value.clickable, .value_button { cursor: pointer; }

.code {
  padding: 30px;
  width: 100%;
  max-width: 500px;
  text-align: left;
  border: 1px solid #111;
  border-radius: 4px;
  margin-top: 1em;
}

@media (max-width: 768px) { .code { max-width: 320px; } }
.code .indent { padding-left: 1em; }`,
        js: `const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
const segments = [];

const pie = document.querySelector('.pie');
const values = document.querySelector('.values');
const code = document.querySelector('code');

start();

function getNewColor() {
  let OK = false;
  let thisColor = '';
  while (!OK) {
    OK = true;
    thisColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    segments.forEach(segment => {
      if (segment.color === thisColor) { OK = false; }
    });
  }
  return thisColor;
}

function createNewSegment() {
  const min = 10, max = 100;
  segments.push({
    color: getNewColor(),
    value: min + Math.floor(Math.random() * (max - min))
  });
}

function start() {
  const initCount = 2 + Math.floor(Math.random() * 4);
  for (let i = 0; i < initCount; i++) createNewSegment();
  drawValues();
  drawPie();
}

function drawValues() {
  values.innerHTML = '';
  pie.innerHTML = '';

  segments.forEach((segment, ix) => {
    const valueDiv = document.createElement('div');
    valueDiv.classList = 'value';
    valueDiv.style.backgroundColor = segment.color;
    valueDiv.innerHTML = \`
      <input type="number" min="1" step="1" class="value_input" value="\${segment.value}" oninput="setNewValue(\${ix}, this.value)">
      <button class="value_button">
        <input class="value_color" type="color" value="\${segment.color}" oninput="setColor(\${ix}, this)">
        <i class="fas fa-paint-brush"></i>
      </button>
      <button class="value_button" onclick="removeSegment(\${ix})" \${segments.length > 2 ? '' : 'disabled="true"'}><i class="fas fa-times"></i></button>
    \`;
    values.appendChild(valueDiv);

    const dial = document.createElement('div');
    dial.classList = 'pie_dial';
    pie.appendChild(dial);
  });

  const valueDiv = document.createElement('div');
  valueDiv.classList = 'value clickable';
  valueDiv.style.backgroundColor = "#777";
  valueDiv.innerHTML = \`
    <button class="value_button"><i class="fas fa-plus"></i></button>
    <div class="value_addText">Add segment</div>
  \`;
  valueDiv.onclick = () => { createNewSegment(); drawValues(); drawPie(); };
  values.appendChild(valueDiv);
}

function drawPie() {
  const dials = document.querySelectorAll('.pie_dial');
  let total = 0;
  segments.forEach(s => total += s.value);

  let lastDeg = 0;
  let conic = '';
  let codeText = '';

  segments.forEach((segment, ix) => {
    const thisDeg = (segment.value * 360 / total) + lastDeg;
    conic += \`\${segment.color} \${lastDeg}deg, \${segment.color} \${thisDeg}deg, \`;
    codeText += \`\${segment.color} \${Math.round(lastDeg * 1000) / 1000}deg, \${segment.color} \${Math.round(thisDeg * 1000) / 1000}deg, <br>\`;
    dials[ix].style.transform = \`rotate(\${thisDeg}deg)\`;
    lastDeg = thisDeg;
  });

  conic = conic.substr(0, conic.length - 2);
  pie.style.backgroundImage = \`
    radial-gradient(circle at 45% 55%, transparent 100px, #fff7 130px, transparent 160px),
    radial-gradient(circle at 55% 45%, transparent 100px, #0007 130px, transparent 160px),
    conic-gradient(\${conic})\`;

  code.innerHTML = \`
    .pieChart {
      <div class="indent">
      background-image: conic-gradient (
        <div class="indent">
          \${codeText.substr(0, codeText.length - 6)}
        </div>
        );
      </div>
    }\`;
}

function setNewValue(ix, value) { segments[ix].value = Number(value); drawPie(); }
function setColor(ix, input) { segments[ix].color = input.value; input.parentElement.parentElement.style.backgroundColor = input.value; drawPie(); }
function removeSegment(ix) { if (segments.length < 3) return false; segments.splice(ix, 1); drawValues(); drawPie(); }`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-019 — Interactive Box 3D
    // ═══════════════════════════════════════════════════════════════
    'S-019': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D box</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="scene">
        <div class="cube">
            <div class="face front">
                <div class="grid"></div>
            </div>
            <div class="face back">
                <div class="grid"></div>
            </div>
            <div class="face left">
                <div class="grid"></div>
            </div>
            <div class="face right">
                <div class="grid"></div>
            </div>
            <div class="face top">
                <div class="grid"></div>
            </div>
            <div class="face bottom">
                <div class="grid"></div>
            </div>
        </div>
    </div>
    <script src="./main.js"></script>
</body>
</html>`,
        css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #111;
  perspective: 1000px;
}

.scene {
  position: relative;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
}

.cube {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.face {
  position: absolute;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  perspective: 500;
  border: 1px solid #fff;
}

.front {
  transform: rotateY(0deg) translateZ(150px);
}

.back {
  transform: rotateY(180deg) translateZ(150px);
}

.left {
  transform: rotateY(-90deg) translateZ(150px);
}

.right {
  transform: rotateY(90deg) translateZ(150px);
}

.top {
  transform: rotateX(90deg) translateZ(150px);
}

.bottom {
  transform: rotateX(-90deg) translateZ(150px);
}

.grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}

.grid span {
  width: 30px;
  height: 30px;
  background-color: #333d;
  border: 1px solid #fff1;
  transform-style: preserve-3d;
  perspective: 500px;
}

.grid span.active {
  background-color: #fff;
  z-index: 10000;
  filter: drop-shadow(0 0 20px #fff);
}

.grid span.active-even {
  background-color: #c43a3abe;
  filter: drop-shadow(0 0 20px #c43a3abe);
}

.grid span.active-odd {
  background-color: #68c43abe;
  filter: drop-shadow(0 0 20px #68c43abe);
}`,
        js: `document.addEventListener('DOMContentLoaded', () => {
    let cube = document.querySelector('.cube');
    let grids = document.querySelectorAll('.grid');

    grids.forEach(grid => {
        for (let i = 0; i < 100; i++) {
            let span = document.createElement('span');
            grid.appendChild(span);
        }
    });

    function addRandomActiveClass() {
        grids.forEach((grid) => {
            let spans = grid.querySelectorAll('span');

            let randomIndex = Math.floor(Math.random() * spans.length);
            let randomSpan = spans[randomIndex];

            randomSpan.classList.add(randomIndex % 2 === 0 ? 'active-even' : 'active-odd');

            let removeTime = Math.floor(Math.random() * 1000) + 500;

            setTimeout(() => {
                randomSpan.classList.remove('active-even');
                randomSpan.classList.remove('active-odd');
            }, removeTime);
        });
    }

    function randomInterval() {
        let interval = Math.floor(Math.random() * 200) + 100;
        addRandomActiveClass();
        setTimeout(randomInterval, interval);
    }

    randomInterval();

    document.addEventListener('mousemove', (e) => {
        let x = e.clientX / window.innerWidth - 0.5;
        let y = e.clientY / window.innerHeight - 0.5;
        cube.style.transform = \`rotateX(\${y * 360}deg) rotateY(\${x * 360}deg)\`;
    });
});`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-020 — Clip Path Scrolling
    // ═══════════════════════════════════════════════════════════════
    'S-020': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>scrolling</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="scroll-track">
        <section data-start="0" data-end="1000">
            <figure>
                <img src="${clipPathOne}" alt="">
            </figure>
        </section>
        <section data-start="1000" data-end="2000">
            <figure>
                <img src="${clipPathTwo}" alt="">
            </figure>
        </section>
        <section data-start="2000" data-end="3000">
            <figure>
                <img src="${clipPathThree}" alt="">
            </figure>
        </section>
        <section data-start="3000" data-end="4000">
            <figure>
                <img src="${clipPathFour}" alt="">
            </figure>
        </section>
        <section data-start="4000" data-end="5000">
            <figure>
                <img src="${clipPathFive}" alt="">
            </figure>
        </section>
    </div>
    <script src="./main.js"></script>
</body>
</html>`,
        css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.scroll-track {
  position: relative;
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
}`,
        js: `function updateSections() {
    const scrollPosition =
        window.scrollY ||
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        0;

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        const start = parseInt(section.getAttribute('data-start'));
        const end = parseInt(section.getAttribute('data-end'));

        if (scrollPosition >= start && scrollPosition <= end) {
            const progress = (scrollPosition - start) / (end - start);
            const clipPathSize = Math.max(0, 1000 * progress);
            section.style.clipPath = \`circle(\${clipPathSize}px at center)\`;
        } else if (scrollPosition < start) {
            section.style.clipPath = \`circle(0px at center)\`;
        } else if (scrollPosition > end) {
            section.style.clipPath = \`circle(1000px at center)\`;
        }
    });
}

window.addEventListener('scroll', updateSections);
document.body.addEventListener('scroll', updateSections);
document.documentElement.addEventListener('scroll', updateSections);

updateSections();`
    },
    // ═══════════════════════════════════════════════════════════════
    // S-021 — Animated 3D GIF Image
    // ═══════════════════════════════════════════════════════════════
    'S-021': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3d Animation</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="boxes"></div>
    <script src="./main.js"></script>
</body>
</html>`,
        css: `* {
  box-sizing: border-box;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --light-black: rgba(28, 36, 39, 0.5);
}

body {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.boxes {
  position: relative;
  width: 500px;
  height: 500px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  transition: 0.5s ease-out;
}

.boxes:hover {
  width: 600px;
  height: 600px;
}

.box {
  width: 125px;
  height: 125px;
  background-image: url(${humonsterGif});
  background-repeat: no-repeat;
  background-size: 500px 500px;
  transition: 0.5s ease-out;
  box-shadow: 5px 5px 5px var(--light-black);
}

.boxes:hover .box {
  transform: rotateZ(360deg);
}`,
        js: `const boxesContainer = document.querySelector('.boxes');
function renderBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const singleBox = document.createElement('div');
            singleBox.classList.add('box');
            singleBox.style.backgroundPosition = \`-\${j * 125}px -\${i * 125}px\`;
            boxesContainer.appendChild(singleBox);
        }
    }
}
renderBoxes();`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-022 — 3D Image Carousel
    // ═══════════════════════════════════════════════════════════════
    'S-022': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slider</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="box">
        <div class="item"><figure><img src="https://picsum.photos/id/1/200/300" alt="image Name"></figure></div>
        <div class="item"><figure><img src="https://picsum.photos/id/2/200/300" alt="image Name"></figure></div>
        <div class="item"><figure><img src="https://picsum.photos/id/3/200/300" alt="image Name"></figure></div>
        <div class="item"><figure><img src="https://picsum.photos/id/4/200/300" alt="image Name"></figure></div>
        <div class="item"><figure><img src="https://picsum.photos/id/5/200/300" alt="image Name"></figure></div>
        <div class="item"><figure><img src="https://picsum.photos/id/6/200/300" alt="image Name"></figure></div>
        <div class="item"><figure><img src="https://picsum.photos/id/7/200/300" alt="image Name"></figure></div>
    </div>
    <div class="buttons">
        <span class="prev"></span>
        <span class="next"></span>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* {
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
}`,
        js: `let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

next.addEventListener('click', () => {
    let items = document.querySelectorAll('.item');
    document.querySelector('.box').appendChild(items[0]);
});

prev.addEventListener('click', () => {
    let items = document.querySelectorAll('.item');
    document.querySelector('.box').prepend(items[items.length - 1]);
});`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-023 — Text Stroke Fill Animation
    // ═══════════════════════════════════════════════════════════════
    'S-023': {
        stage: 'light',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <h2>Hello</h2>
    <script src="main.js"></script>
</body>
</html>`,
        css: `@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #555;
}

h2 {
  margin: 0 10px;
  font-size: 4em;
  -webkit-text-stroke: 2px;
  -webkit-text-stroke-color: #000e30;
  -webkit-text-fill-color: transparent;
  position: relative;
  width: fit-content;
}

h2::before {
  content: "Hello";
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  animation: animateTextStrokeColor 3s linear infinite;
  overflow: hidden;
}

h2::after {
  content: "";
  position: absolute;
  top: 50%;
  left: -5px;
  width: 5px;
  height: 70%;
  background-color: #000e30;
  animation: animateTextStroke 3s linear infinite;
  transform: translateY(-50%);
}

@keyframes animateTextStroke {
  0%, 100% { left: -5px; }
  20% { left: 25%; }
  40% { left: 50%; }
  60% { left: 75%; }
  80% { left: 100%; }
}

@keyframes animateTextStrokeColor {
  0%, 100% { width: 0; -webkit-text-fill-color: #000e30; }
  20% { width: 25%; -webkit-text-fill-color: #000e30; }
  40% { width: 50%; -webkit-text-fill-color: #000e30; }
  60% { width: 75%; -webkit-text-fill-color: #000e30; }
  80% { width: 100%; -webkit-text-fill-color: #000e30; }
}`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-024 — Text Stroke Animation (SVG)
    // ═══════════════════════════════════════════════════════════════
    'S-024': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <svg width="100%" height="100%">
        <text class="stroke-animation" x="50%" y="50%" text-anchor="middle">
            Ibrahim Shafiq
        </text>
    </svg>
    <script src="main.js"></script>
</body>
</html>`,
        css: `@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #555;
}

.stroke-animation {
    font-size: 3rem;
    fill: none;
    stroke: #fff;
    stroke-dasharray: 20 10;
    stroke-dashoffset: 100;
    animation: animateStroke 10s linear infinite;
}

@keyframes animateStroke {
    0%, 100% { stroke-dashoffset: 100; }
    20% { stroke-dashoffset: 20; }
    40% { stroke-dashoffset: 40; }
    60% { stroke-dashoffset: 60; }
    80% { stroke-dashoffset: 80; }
}`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-025 — News App
    // ═══════════════════════════════════════════════════════════════
    'S-025': {
        stage: 'light',
        html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latest News</title>
    <link rel="stylesheet" href="./styles/style.css">
</head>

<body style="transform: scale(0.5);">
    <div class="hamburger-menu">
        <span class="hamburger-menu-span"></span>
        <span class="hamburger-menu-span"></span>
        <span class="hamburger-menu-span"></span>
    </div>

    <div class="news-container">
        <h1>Latest News Application</h1>
        <h3 class="news-header">News of Business</h3>
        <div class="loading-animation">
            <div class="spinner"></div>
        </div>
        <div class="news-articles"></div>
    </div>

    <aside>
        <div class="categories-list">
            <div class="list-header">
                <h5>Categories</h5>
            </div>
            <div class="list-details"></div>
        </div>
    </aside>

    <script type="module" src="./scripts/main.js"></script>
</body>

</html>`,
        css: `:root {
    --primary-color: #ff6b6b;
    --secondary-color: #5e5757;
    --text-dark: #2e2e2e;
    --text-light: #ffffff;
    --bg-light: #ffffff;
    --bg-dark: #202020;
    --shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
    perspective: 1200px;
    background-color: var(--bg-dark);
    min-height: 100vh;
}

.news-container {
    background-color: var(--bg-light);
    background-image: repeating-linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.13),
            rgba(0, 0, 0, 0.13) 1px,
            transparent 1px,
            transparent 20px
        ),
        repeating-linear-gradient(
            to right,
            rgba(0, 0, 0, 0.13),
            rgba(0, 0, 0, 0.13) 1px,
            transparent 1px,
            transparent 20px
        );
    background-size: 20px 20px;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 2;
    min-height: 100vh;
}

.news-container--active {
    transform: rotateY(45deg) scale(0.6);
}

h1 {
    color: var(--text-dark);
    background-color: var(--bg-light);
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.5);
}

.loading-animation {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    min-height: 200px;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: var(--primary-color);
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

.loading-animation.hidden {
    display: none;
}

.hamburger-menu {
    position: fixed;
    top: 10px;
    left: 10px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: max-content;
    overflow: hidden;
    justify-content: center;
    cursor: pointer;
    z-index: 3;
}

.hamburger-menu span {
    background-color: var(--text-dark);
    width: 20px;
    height: 3px;
    transition: all 0.3s ease;
}

.hamburger-menu span:nth-child(2) {
    background-color: transparent;
    position: relative;
}

.hamburger-menu span:nth-child(2)::before,
.hamburger-menu span:nth-child(2)::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    height: 100%;
    background-color: var(--text-dark);
    transition: all 0.3s ease;
}

.hamburger-menu span:nth-child(2)::before {
    left: 25%;
}

.hamburger-menu span:nth-child(2)::after {
    left: 25%;
    transform: translateX(100%);
}

.hamburger-menu--active span,
.hamburger-menu--active span::before,
.hamburger-menu--active span::after {
    background-color: var(--bg-light);
}

.hamburger-menu--active span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}

.hamburger-menu--active span:nth-child(2)::before {
    left: 0%;
    transform: translateX(-100%);
}

.hamburger-menu--active span:nth-child(2)::after {
    left: 50%;
    transform: translateX(200%);
}

.hamburger-menu--active span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}

aside {
    position: fixed;
    top: 50%;
    right: 50px;
    transform: translateY(-50%) rotateY(-118deg) scale(0.8);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    backdrop-filter: blur(2px);
    z-index: 1;
    transition: transform 0.3s ease;
}

aside.menu--showed {
    transform: translateY(-50%) rotateY(-45deg) scale(0.8);
}

aside > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

aside h5 {
    font-size: 1rem;
    color: var(--text-light);
    text-align: center;
    background-color: var(--text-dark);
    padding: 5px;
    border-radius: 5px;
}

.list-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.list-details span {
    color: var(--text-light);
    position: relative;
    transition: all 0.3s ease;
    padding: 2px;
    width: max-content;
    cursor: pointer;
}

.list-details span::first-letter {
    background-color: var(--primary-color);
    border-radius: 5px;
}

.list-details span::before {
    content: "";
    position: absolute;
    top: 0;
    left: 2px;
    height: 100%;
    width: 0%;
    background-color: var(--primary-color);
    border-radius: 5px;
    z-index: -1;
    transition: width 0.3s ease;
}

.list-details span:hover::first-letter {
    background-color: transparent;
}

.list-details span:hover::before {
    width: 100%;
    pointer-events: none;
}

.list-details span.active--filtration::before {
    width: 100%;
    pointer-events: none;
}

.news-header {
    font-size: 2rem;
    color: var(--text-dark);
    margin: 20px auto;
    text-align: center;
}

.news-articles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
}

.article-div {
    border-radius: 5px;
    box-shadow: var(--shadow);
    overflow: hidden;
    background-color: var(--bg-light);
    transition: transform 0.3s ease;
}

.article-div:hover {
    transform: translateY(-5px);
}

.article-div figure {
    width: 100%;
    margin: 0;
}

.article-div figure img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    display: block;
}

.article-content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.article-div h5 {
    color: var(--text-dark);
    font-size: 1.1rem;
}

.article-div p {
    color: var(--text-dark);
    font-size: 0.9rem;
    line-height: 1.4;
}

.article-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5rem;
}

.article-footer a {
    color: var(--primary-color);
    font-size: 0.85rem;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.article-footer a:hover {
    color: #ff3b3b;
}

.article-footer p {
    font-size: 0.8rem;
    color: #666;
}`,
        js: `export const CONFIG = {
    API_KEY: 'YOUR_API_KEY_HERE',
    DEFAULT_IMAGE: './../images/loading-img.webp',
    PAGE_SIZE: 10,
    CATEGORIES: [
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology",
    ],
    DEFAULT_SETTINGS: {
        lang: 'en',
        country: 'us',
        category: 'business'
    }
};`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-026 — Text V4 (Scroll Reveal Text)
    // ═══════════════════════════════════════════════════════════════
    'S-026': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body style="transform: scale(0.5);">
    <div class="box">
        <h2>Hello World🔥</h2>
        <p class="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repellendus laboriosam atque itaque quae
            suscipit. Sint non voluptas ex soluta ad expedita corrupti ut tempora, reiciendis id perferendis amet,
            laudantium molestias nemo voluptatum fugiat enim at facere consequuntur illum repudiandae odit facilis!
            Delectus beatae quo reprehenderit cum, earum aspernatur totam accusantium suscipit voluptates sed libero
            omnis mollitia neque quisquam dicta. At non voluptas minus veniam pariatur vero, vel neque dicta suscipit
            maiores laborum maxime sit dolorem repellendus magnam eos sint odio placeat laboriosam soluta. Repudiandae
            eveniet alias autem ducimus, mollitia facere, ipsa aut iste rerum, quis harum iusto fugit laborum.
        </p>
    </div>
    <script src="./main.js"></script>
</body>

</html>`,
        css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  display: flex;
  background-color: #333;
  justify-content: center;
  align-items: center;
  min-height: 710vh;
}

.box {
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  width: 50%;
  max-width: 80%;
}

h2 {
  color: #fff;
  font-size: 2.5em;
  font-weight: 600;
}

p {
  color: #fff;
}

p span {
  opacity: 0;
  transform: translateY(10px);
  transition:
      opacity 0.3s ease,
      transform 0.3s ease;
}

p span.active {
  opacity: 1;
  transform: translateY(0);
  color: #0f0;
  text-shadow: 0 0 5px #0f0;
}`,
        js: `let textEl = document.querySelector('.text');
let textContentData = textEl.textContent;
textEl.innerHTML = '';

for (let char of textContentData) {
    let span = document.createElement('span');
    span.textContent = char;
    textEl.appendChild(span);
}

let spans = document.querySelectorAll('span');
window.addEventListener('scroll', (e) => {
    let scrollPosition = window.scrollY;
    spans.forEach((span, index) => {
        if (scrollPosition >= (index + 1) * 10) {
            span.classList.add('active');
        } else {
            span.classList.remove('active');
        }
    });
});`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-027 — Loading V2 (Glowing Name)
    // ═══════════════════════════════════════════════════════════════
    'S-027': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="loader">
        <span style="--i: 1; --clr: #1A3636;">I</span>
        <span style="--i: 2; --clr: #134B70;">B</span>
        <span style="--i: 3; --clr: #508C9B;">R</span>
        <span style="--i: 4; --clr: #EF5A6F;">A</span>
        <span style="--i: 5; --clr: #B5CFB7;">H</span>
        <span style="--i: 6; --clr: #D1E9F6;">I</span>
        <span style="--i: 7; --clr: #433D8B;">M</span>
    </div>
</body>
</html>`,
        css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: cursive;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #111;
    min-height: 100vh;
}

.loader {
    position: relative;
    cursor: default;
    -webkit-box-reflect: below -25px linear-gradient(transparent, #0005);
}

.loader span {
    position: relative;
    display: inline-flex;
    font-size: 3em;
    color: transparent;
    -webkit-text-stroke: 1px var(--clr);
    text-transform: uppercase;
    font-weight: bolder;
    animation: animate 2s ease-in-out infinite;
    animation-delay: calc(0.2s * var(--i));
}

@keyframes animate {
    0%, 40%, 100% {
        transform: translateY(0px);
        color: transparent;
        text-shadow: none;
    }
    20% {
        transform: translateY(-60px);
        color: var(--clr);
        text-shadow:
                    0 0 5px var(--clr),
                    0 0 25px var(--clr),
                    0 0 50px var(--clr);
    }
}`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-028 — Text V5 (Random Letters Scatter)
    // ═══════════════════════════════════════════════════════════════
    'S-028': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="box">
        <h2 class="text">Ibrahim Shafiq</h2>
    </div>
    <script src="./main.js"></script>
</body>
</html>`,
        css: `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Consolas;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 180vh;
    background-color: #333;
}

.box {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    width: 440px;
    padding: 0 0 25px;
    display: flex;
    gap: 20px;
}

.box span {
    position: absolute;
    color: transparent;
    -webkit-text-stroke: 0.5px #fff;
    font-size: 1.5em;
    transition: 0.25s linear;
}

.box span.active {
    color: #0f0;
    -webkit-text-stroke: 0.5px #fff0;
    text-shadow: 0 0 10px #0f0,
                0 0 30px #0f0,
                0 0 60px #0f0;
}`,
        js: `let textEl = document.querySelector('.text');
let textContent = textEl.textContent;
textEl.innerHTML = '';
let spans = [];
for (let char of textContent) {
    let span = document.createElement('span');
    span.textContent = char;
    textEl.appendChild(span);
    spans.push(span);
}
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    spans.forEach((span, index) => {
        if (scrollDistance >= (index + 1) * 50) {
            span.style.transform = \`translate(\${index * 20}px, 0)\`;
            span.classList.add('active');
        } else {
            span.style.transform = \`translate(\${Math.random() * 100 - 50}vw, \${Math.random() * 100 - 50}vh)\`;
            span.classList.remove('active');
        }
    });
});

window.dispatchEvent(new Event('scroll'));`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-029 — Image Scrolling (Pixel Explosion)
    // ═══════════════════════════════════════════════════════════════
    'S-029': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
  <section>
      <h2>Scroll Down To see the full image</h2>
      <div class="image-container"></div>
  </section>
  <script src="./main.js"></script>
</body>
</html>`,
        css: `@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

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
}`,
        js: `let image = "https://picsum.photos/id/1039/400/400";
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
    span.style.top = (row * sliceHeight) + 'px';
    span.style.left = (col * sliceWidth) + 'px';
    span.style.width = sliceWidth + 'px';
    span.style.height = sliceHeight + 'px';
    span.style.backgroundImage = 'url(' + image + ')';
    span.style.backgroundPosition = '-' + (col * sliceWidth) + 'px -' + (row * sliceHeight) + 'px';
    container.appendChild(span);
    slices.push(span);
  }
}

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;
  slices.forEach((slice, index) => {
      if (scrollPosition >= index) {
        slice.style.transform = 'translate(0, 0) rotate(0deg)';
      } else {
        slice.style.transform = 'translate(' + (Math.random() * 100 - 50) + 'vw, ' + (Math.random() * 100 - 50) + 'vh) rotate(' + (Math.random() * 360) + 'deg)';
      }
  });
});

window.dispatchEvent(new Event('scroll'));`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-030 — Tilt V1 (Menu)
    // ═══════════════════════════════════════════════════════════════
    'S-030': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
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
    <script src="./main.js"></script>
</body>
</html>`,
        css: `* { margin: 0; padding: 0; box-sizing: border-box; }

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
}`,
        js: `function applyTilt(els, opts) {
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

applyTilt(document.querySelectorAll('ul li a'), { max: 25 });`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-031 — Tilt V3 (Social Icons)
    // ═══════════════════════════════════════════════════════════════
    'S-031': {
        stage: 'light',
        html: `<!DOCTYPE html>
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
<body style="transform: scale(0.5);">
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
    <script src="./main.js"></script>
</body>
</html>`,
        css: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  transition: 0.5s linear;
  filter: hue-rotate(20deg);
  background-color: #fff;
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
}`,
        js: `let ulList = document.querySelectorAll('ul li');
let body = document.body;

ulList.forEach((el) => {
    el.addEventListener('mouseenter', (e) => {
        let color = e.target.style.getPropertyValue('--clr');
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

applyTilt(document.querySelectorAll('ul li a'), { max: 25 });`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-032 — Loading V1 (Neon Spinner)
    // ═══════════════════════════════════════════════════════════════
    'S-032': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading Animation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div></div>
</body>
</html>`,
        css: `* {
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
}`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-033 — Button V1 (Hover Text Slide)
    // ═══════════════════════════════════════════════════════════════
    'S-033': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <a href="#"><span>Ibrahim</span></a>
    <a href="#"><span>Shafiq</span></a>
    <a href="#"><span>Abd-Elshafy</span></a>
</body>
</html>`,
        css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
    gap: 40px;
    background-color: #333;
}

a {
    color: #fff;
    text-decoration: none;
    font-size: 1.25em;
    letter-spacing: 0.1em;
    border: 1px solid #fff;
    padding: 10px 30px;
    display: inline-block;
    text-transform: uppercase;
    transition: 0.5s;
    border-radius: 30px;
    overflow: hidden;
}

a span {
    display: inline-flex;
    transition: 0.4s linear;
    text-shadow: 0 50px #333;
}

a:hover {
    background-color: #fff;
}

a:hover span {
    color: #333;
    transform: translateY(-50px);
}`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-034 — Night Mode V2
    // ═══════════════════════════════════════════════════════════════
    'S-034': {
        stage: 'auto',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>dark mode v2 meme</title>
  <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
  <label>
      <input type="checkbox" />
      <div class="container" id="button">
          <div class="bg"></div>
          <div class="ray ray-inner"></div>
          <div class="ray ray-medium"></div>
          <div class="ray ray-far"></div>
          <div class="cloud-shadows">
              <div class="cloud-shadow cloud-1"></div>
              <div class="cloud-shadow cloud-2"></div>
              <div class="cloud-shadow cloud-3"></div>
              <div class="cloud-shadow cloud-4"></div>
              <div class="cloud-shadow cloud-5"></div>
              <div class="cloud-shadow cloud-6"></div>
              <div class="cloud-shadow cloud-7"></div>
          </div>
          <div class="cloud cloud-1"></div>
          <div class="cloud cloud-2"></div>
          <div class="cloud cloud-3"></div>
          <div class="cloud cloud-4"></div>
          <div class="cloud cloud-5"></div>
          <div class="cloud cloud-6"></div>
          <div class="cloud cloud-7"></div>
          <div class="star star-1"></div>
          <div class="star star-2"></div>
          <div class="star star-3"></div>
          <div class="star star-4"></div>
          <div class="star star-5"></div>
          <div class="star star-6"></div>
          <div class="star star-7"></div>
          <div class="star star-8"></div>
          <div class="star star-9"></div>
          <div class="star star-10"></div>
          <div class="star star-11"></div>

          <div class="sun">
              <div class="moon">
                  <div class="crater crater-1"></div>
                  <div class="crater crater-2"></div>
                  <div class="crater crater-3"></div>
              </div>
          </div>
      </div>
  </label>
  <script src="./main.js"></script>
</body>
</html>`,
        css: `* {
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.075);
  -webkit-tap-highlight-color: transparent;
}

html, body { height: 100%; }

body {
  margin: 0;
  background: rgb(217, 222, 230);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

body:has(input:checked) { background-color: #080a11; }

label {
  user-select: none;
  display: flex;
  align-items: center;
}

input { display: none; }

.container {
  position: relative;
  width: 369px;
  height: 145px;
  border-radius: 100px;
  overflow: hidden;
  box-shadow: 0px 5px 5px #fff;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
  margin: 10px;
  cursor: pointer;
}

.container:has(input:checked) { background-color: #080a11; }

.container:before {
  z-index: 10;
  content: "";
  position: absolute;
  left: 0px; top: 0px; right: 0px; bottom: 0px;
  border-radius: 100px;
  box-shadow: inset 0px 10px 15px rgba(0, 0, 0, 0.6);
  pointer-events: none;
}

.bg {
  width: 100%;
  height: 100%;
  background: rgb(78, 134, 181);
}

input:checked ~ .container .bg { background: rgb(31, 34, 51); }

.sun {
  width: 120px;
  height: 120px;
  border-radius: 100%;
  margin: 12.5px;
  margin-left: 20px;
  margin-right: 20px;
  background: rgb(238, 203, 80);
  filter: drop-shadow(0px 10px 10px rgba(44, 44, 44, 0.8));
  box-shadow:
      inset 0px -5px 3px rgba(100, 40, 80, 0.4),
      inset 3px 3px 3px #fff;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}

input:checked ~ .container .sun { left: 209px; }

.ray-inner  { top: -42.5px;  left: -42.5px;  width: 230px; height: 230px; }
.ray-medium { top: -88.5px;  left: -88.5px;  width: 322px; height: 322px; }
.ray-far    { top: -136.5px; left: -136.5px; width: 418px; height: 418px; }

input:checked ~ .container .ray-inner  { top: -42.5px;  left: 181.5px; }
input:checked ~ .container .ray-medium { top: -88.5px;  left: 135.5px; }
input:checked ~ .container .ray-far    { top: -136.5px; left: 87.5px; }

.ray {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 100%;
  filter: blur(2px);
}

.cloud, .cloud-shadow { background: #fff; position: absolute; border-radius: 100%; }

input:checked ~ .container .cloud,
input:checked ~ .container .cloud-shadow { transform: translateY(140px); }

.cloud-shadows { opacity: 0.6; }

.cloud-shadow {
  transform: translateY(-15px) translateX(-2px);
  background: rgb(214, 225, 238);
}

.cloud-1 { width: 134px; height: 134px; right: -70px; bottom: -10px; }
.cloud-2 { width: 95px;  height: 95px;  right: -10px; bottom: -10px; }
.cloud-3 { width: 87px;  height: 87px;  right: 50px;  bottom: -40px; }
.cloud-4 { width: 78px;  height: 78px;  right: 100px; bottom: -45px; }
.cloud-5 { width: 87px;  height: 87px;  right: 150px; bottom: -45px; }
.cloud-6 { width: 78px;  height: 78px;  right: 220px; bottom: -45px; }
.cloud-7 { width: 78px;  height: 78px;  right: 280px; bottom: -50px; }

.cloud-shadow.cloud-1 { bottom: 20px;  right: -60px; }
.cloud-shadow.cloud-2 { bottom: 0px;   right: 30px;  }
.cloud-shadow.cloud-3 { bottom: -5px;  right: 75px;  }
.cloud-shadow.cloud-4 { bottom: -20px; right: 110px; }
.cloud-shadow.cloud-5 { bottom: -30px; right: 150px; }
.cloud-shadow.cloud-6 { bottom: -40px; right: 220px; }

input:checked ~ .container:before {
  box-shadow: inset 0px 10px 15px rgba(20, 33, 45, 1);
  pointer-events: none;
}

.moon {
  left: 130px;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background: rgb(204, 207, 212);
  filter: drop-shadow(0px 10px 10px rgba(44, 44, 44, 0.8));
  backdrop-filter: blur(2px);
  box-shadow:
      inset 0px -5px 3px rgba(40, 40, 80, 0.2),
      inset 3px 3px 3px #fff;
  position: absolute;
  top: 0;
}

input:checked ~ .container .moon { left: 0; }

.crater {
  background: rgb(160, 168, 182);
  border-radius: 100%;
  position: absolute;
  box-shadow: inset 1px 1px 2px rgba(44, 44, 44, 0.2);
}

.crater-1 { width: 40px; height: 40px; top: 50px; left: 25px; }
.crater-2 { width: 25px; height: 25px; top: 17px; left: 50px; }
.crater-3 { width: 25px; height: 25px; top: 68px; left: 78px; }

.star {
  background: #fff;
  position: absolute;
  border-radius: 100%;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 50H0A50 50 0 0 0 50 0m0 50H0a50 50 0 0 1 50 50m0-50h50A50 50 0 0 1 50 0m0 50h50a50 50 0 0 0-50 50Z' fill='%23FFF'/%3E%3C/svg%3E");
  filter: drop-shadow(0px 0px 2px #fff);
  transform: translateY(-130px);
}

input:checked ~ .container .star { transform: translateY(0px); }

.star-1  { top: 40px;  right: 155px; width: 25px; height: 25px; }
.star-2  { top: 40px;  right: 205px; width: 8px;  height: 8px; }
.star-3  { top: 88px;  right: 170px; width: 8px;  height: 8px; }
.star-4  { top: 70px;  right: 220px; width: 8px;  height: 8px; }
.star-5  { top: 105px; right: 200px; width: 15px; height: 15px; }
.star-6  { top: 15px;  right: 285px; width: 22px; height: 22px; }
.star-7  { top: 45px;  right: 320px; width: 10px; height: 10px; }
.star-8  { top: 60px;  right: 290px; width: 10px; height: 10px; }
.star-9  { top: 95px;  right: 310px; width: 6px;  height: 6px; }
.star-10 { top: 110px; right: 325px; width: 6px;  height: 6px; }
.star-11 { top: 120px; right: 285px; width: 6px;  height: 6px; }`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-035 — Image Layer
    // ═══════════════════════════════════════════════════════════════
    'S-035': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Layer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <figure>
        <img src="https://picsum.photos/id/1015/400/300" alt="image">
        <img src="https://picsum.photos/id/1015/400/300" alt="image">
        <img src="https://picsum.photos/id/1015/400/300" alt="image">
        <img src="https://picsum.photos/id/1015/400/300" alt="image">
    </figure>
</body>
</html>`,
        css: `* {
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
}

figure img {
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
}

figure img:nth-child(4) {
    transform: translate3d(0, 0, 75px) rotateX(45deg);
}

figure img:nth-child(3) {
    transform: translate3d(0, 0, 75px) rotateX(45deg);
}

figure img:nth-child(2) {
    transform: translate3d(0, 0, 75px) rotateX(45deg);
}

figure img:nth-child(1) {
    transform: translate3d(0, 0, 75px) rotateX(45deg);
}

figure:hover img:nth-child(4) {
    transform: translate3d(0, -100px, 100px) rotateX(45deg);
    opacity: 1;
}

figure:hover img:nth-child(3) {
    transform: translate3d(0, -80px, 100px) rotateX(45deg);
    opacity: 0.6;
}

figure:hover img:nth-child(2) {
    transform: translate3d(0, -60px, 100px) rotateX(45deg);
    opacity: 0.4;
}

figure:hover img:nth-child(1) {
    transform: translate3d(0, -40px, 100px) rotateX(45deg);
    opacity: 0.2;
}`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-036 — Drop of Water
    // ═══════════════════════════════════════════════════════════════
    'S-036': {
        stage: 'light',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Water Drop</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="drop"></div>
</body>
</html>`,
        css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #e0e5ec;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.drop {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: #e0e5ec;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    box-shadow:
        inset -6px -6px 12px rgba(255, 255, 255, 0.9),
        inset  6px  6px 12px rgba(163, 177, 198, 0.4),
        0 8px 20px rgba(163, 177, 198, 0.3);
    animation: float 3s ease-in-out infinite;
    will-change: transform;
}

.drop::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 25%;
    width: 20px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 50%;
    filter: blur(2px);
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-20px); }
}`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-037 — Circular Logo
    // ═══════════════════════════════════════════════════════════════
    'S-037': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
  <title>Circular Logo</title>
</head>

<body style="transform: scale(0.5);">
  <div class="container">
      <button class="outside">
          <div class="btn"><i class="fa-brands fa-linkedin"></i></div>
      </button>
      <button class="outside">
          <div class="btn"><i class="fa-brands fa-github"></i></div>
      </button>
      <button class="outside">
          <div class="btn"><i class="fa-brands fa-facebook"></i></div>
      </button>
  </div>
</body>

</html>`,
        css: `*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body{
  width: 100%;
  height: 100%;
  background: #000;
}

.container{
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.btn{
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #2d2a2a;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.btn i{
  font-size: 1.8rem;
  color: #7a7a7a;
  transition: 0.6s;
}

@property --fill {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: true;
}

.outside{
  padding: 3px;
  background: conic-gradient(greenyellow var(--fill), transparent var(--fill));
  border-radius: 50%;
  cursor: pointer;
  border: none;
  outline: none;
  transition: --fill 0.8s ease-in-out;
}

.outside:hover{
  --fill: 100%;
}

.outside:hover .btn i{
  color: greenyellow;
}`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-038 — Can Rotation
    // ═══════════════════════════════════════════════════════════════
    'S-038': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rotational Animation</title>
  <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
  <div class="container">
      <div class="cane">
          <div class="pack" style="--bg: url('https://picsum.photos/id/1015/400/600')"></div>
          <div class="pack" style="--bg: url('https://picsum.photos/id/1016/400/600')"></div>
      </div>
  </div>
</body>
</html>`,
        css: `*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  min-height: 100vh;
  background: #6767f0;
}

.container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.cane {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  z-index: 2;
  transition: 0.7s;
  --left: 230px;
  display: flex;
}

.cane .pack{
  position: absolute;
  background: var(--bg) var(--left);
  background-size: auto 100%;
  width: 280px;
  aspect-ratio: 2/4;
  background-blend-mode: multiply;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.7s;
}

.container .cane:hover {
  --left: -1000px;
  transform: translateX(-50%) translateY(-60%);
}

.container .cane .pack:nth-child(2) {
  opacity: 0;
}

.container .cane:hover .pack:nth-child(2) {
  opacity: 1;
}`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-039 — Loading V2 (IBRAHIM letters)
    // ═══════════════════════════════════════════════════════════════
    'S-039': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="loader">
        <span style="--i: 1; --clr: #1A3636;">I</span>
        <span style="--i: 2; --clr: #134B70;">B</span>
        <span style="--i: 3; --clr: #508C9B;">R</span>
        <span style="--i: 4; --clr: #EF5A6F;">A</span>
        <span style="--i: 5; --clr: #B5CFB7;">H</span>
        <span style="--i: 6; --clr: #D1E9F6;">I</span>
        <span style="--i: 7; --clr: #433D8B;">M</span>
    </div>
</body>
</html>`,
        css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: cursive;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #111;
    min-height: 100vh;
}

.loader {
    position: relative;
    cursor: default;
    -webkit-box-reflect: below -25px linear-gradient(transparent, #0005);
}

.loader span {
    position: relative;
    display: inline-flex;
    font-size: 3em;
    color: transparent;
    -webkit-text-stroke: 1px var(--clr);
    text-transform: uppercase;
    font-weight: bolder;
    animation: animate 2s ease-in-out infinite;
    animation-delay: calc(0.2s * var(--i));
}

@keyframes animate {
    0%, 40%, 100% {
        transform: translateY(0px);
        color: transparent;
        text-shadow: none;
    }
    20% {
        transform: translateY(-60px);
        color: var(--clr);
        text-shadow:
                    0 0 5px var(--clr),
                    0 0 25px var(--clr),
                    0 0 50px var(--clr);
    }
}`
    },

    // ═══════════════════════════════════════════════════════════════
    // S-040 — Loading V3 (Spiral Loader)
    // ═══════════════════════════════════════════════════════════════
    'S-040': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading 03</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <script src="./main.js"></script>
</body>
</html>`,
        css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #001f25;
    overflow: hidden;
}

.loader {
    position: relative;
}

.loader span {
    position: absolute;
    top: 0;
    left: -200px;
    width: 200px;
    height: 2px;
    transform: rotate(calc(18deg * var(--i) / var(--j)));
    transform-origin: right;
}

.loader span::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #00ebff;
    border-radius: 50%;
    box-shadow:
                0 0 10px #00ebff,
                0 0 20px #00ebff,
                0 0 40px #00ebff,
                0 0 60px #00ebff,
                0 0 80px #00ebff,
                0 0 100px #00ebff;
    animation: animate 2s linear infinite;
    animation-delay: calc(-0.1s * var(--i));
}

@keyframes animate {
    0% {
        transform: translateX(200px) scale(1);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    80% {
        opacity: 1;
    }
    100% {
        transform: translateX(0px) scale(0);
        opacity: 0;
    }
}`,
        js: `const body = document.body;
let loader;

function loaderDiv() {
    for (let j = 0; j <= 3; j++) {
        loader = document.createElement('div');
        loader.classList.add('loader');
        loader.style.setProperty('--j', j);
        body.appendChild(loader);
        loaderSpan();
    }
}

loaderDiv();

function loaderSpan() {
    for (let i = 1; i <= 20; i++) {
        const span = document.createElement('span');
        span.style.setProperty('--i', i);
        loader.appendChild(span);
    }
}`
    }

};