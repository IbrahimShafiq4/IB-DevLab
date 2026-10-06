import type { ICodeStructure } from '../../../../shared-components/shared-code/shared-code.component';

export interface ComponentEntry {
    id: string;
    slug: string;
    projectName: string;
    projectDescription: string;
    projectDate: string;
    projectVersion: string;
    projectTags: string[];
    liveHtml?: string;
    liveCss?: string;
    liveJs?: string;
    HTMLCodeSnippets?: ICodeStructure[];
    CSSCodeSnippets?: ICodeStructure[];
    JSCodeSnippets?: ICodeStructure[];
    zipFile: string;
    projectOnYoutube?: string;
}

export const COMPONENT_ENTRIES: Record<string, ComponentEntry> = {

    /* ═══════════════════════════════════════════════════════════════
       TABS
       ═══════════════════════════════════════════════════════════════ */
    'tabs': {
        id: 'tabs',
        slug: 'tabs',
        projectName: 'Tab Navigation System',
        projectDescription: 'A responsive tab navigation component built with vanilla JavaScript that smoothly transitions between content sections with animated underline effect.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/tabs.rar',
        liveHtml: `
<div class="container">
    <div class="tab_box">
        <button class="tab_btn active">Home</button>
        <button class="tab_btn">About</button>
        <button class="tab_btn">Blogs</button>
        <button class="tab_btn">Contact us</button>
        <div class="line"></div>
    </div>
    <div class="content_box">
        <div class="content active"><h2>Home</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
        <div class="content"><h2>About</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
        <div class="content"><h2>Blogs</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
        <div class="content"><h2>Contact us</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
    </div>
</div>`,
        liveCss: `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background-color: #deeeff; display: flex; align-items: center; justify-content: center; height: 100vh; font-family: "Poppins", sans-serif; }
.container { width: 600px; background-color: #fff; padding: 30px; box-shadow: 0 2px 16px rgba(0,0,0,0.1); border-radius: 20px; }
.tab_box { width: 100%; display: flex; justify-content: space-around; align-items: center; border-bottom: 2px solid rgb(229,229,229); font-size: 18px; font-weight: 600; margin-bottom: 10px; position: relative; }
.tab_box .tab_btn { font-size: inherit; font-weight: inherit; color: #919191; background-color: transparent; border: none; outline: none; padding: 18px; cursor: pointer; }
.tab_box .tab_btn.active { color: #7460ff; }
.tab_box .line { position: absolute; top: calc(100% - 1px); left: 17px; width: 90px; height: 5px; background-color: #7460ff; transition: all 0.3s linear; }
.content_box { padding: 20px; }
.content_box .content { transition: 0.3s linear; display: none; margin: 20px 0; animation: moving 0.5s ease; }
.content_box .content.active { display: block; }
.content_box .content h2 { margin-bottom: 10px; }
@keyframes moving { from { transform: translateX(50px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`,
        liveJs: `const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');
tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        let line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + 'px';
        line.style.left = e.target.offsetLeft + 'px';
        all_content.forEach(c => c.classList.remove('active'));
        all_content[index].classList.add('active');
    });
});`
    },

    /* ═══════════════════════════════════════════════════════════════
       ANIMATED TYPING TEXT
       ═══════════════════════════════════════════════════════════════ */
    'animated-typing-text': {
        id: 'animated-typing-text',
        slug: 'animated-typing-text',
        projectName: 'Animated Typing Text Effect',
        projectDescription: 'A smooth animated typing text effect using HTML, CSS, and JavaScript. Watch dynamic roles like Freelancer, Developer, and Designer appear one after another with a stylish cursor animation.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/animated-typing-text.rar',
        liveHtml: `<div class="container"><span class="txt first-txt">I'm a</span><span class="txt second-txt"></span></div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Courier New', Courier, monospace; }
body { min-height: 100vh; display: flex; justify-content: center; align-items: center; background-color: #010718; }
.container .txt { position: relative; color: #4070f4; font-size: 30px; font-weight: 600; }
.container .txt.first-txt { color: #fff; }
.container .txt.second-txt::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: #010718; border-left: 2px solid #4070f4; animation: animate 4s steps(12) infinite; }
@keyframes animate { 40%, 60% { left: calc(100% + 4px); } 100% { left: 0%; } }`,
        liveJs: `const text = document.querySelector('.second-txt');
const textLoad = () => {
    setTimeout(() => { text.textContent = "Freelancer"; }, 0);
    setTimeout(() => { text.textContent = "Developer"; }, 4000);
    setTimeout(() => { text.textContent = "Designer"; }, 8000);
};
textLoad();
setInterval(textLoad, 12000);`
    },

    /* ═══════════════════════════════════════════════════════════════
       CUBE
       ═══════════════════════════════════════════════════════════════ */
    'cube': {
        id: 'cube',
        slug: 'cube',
        projectName: 'Animated 3D Cube Grid',
        projectDescription: 'A dynamic 3D cube grid rendered using pure HTML, CSS (with advanced 3D transforms), and vanilla JavaScript.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/animated cubes.rar',
        liveHtml: `<div class="container" style="--clr: #f00;"></div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background-color: #555; overflow: hidden; }
.container { position: relative; transform: skewY(-20deg); }
.container .cube { position: relative; transform: translate(calc(var(--z) * 60px), calc(var(--z) * 60px)); }
.container .cube > div { position: absolute; transform: translateX(calc(-70px * var(--x))) translateY(calc(-70px * var(--y))); }
.container .cube > div > span { position: relative; display: inline-block; width: 50px; height: 50px; background-color: #dcdcdc; transition: 1.5s linear; }
.container .cube > div > span::before { content: ""; position: absolute; left: -40px; width: 40px; height: 100%; background-color: #c8c8c8; transform: skewY(45deg); transition: 1.5s linear; transform-origin: right; }
.container .cube > div > span::after { content: ""; position: absolute; top: -40px; left: 0; background-color: #f2f2f2; transform-origin: bottom; width: 100%; height: 40px; transform: skewX(45deg); box-shadow: -100px 100px 5px rgba(0,0,0,0.15); transition: 1.5s linear; }
.container .cube > div > span.active-span { background-color: #f00; animation: animate 3s linear infinite alternate-reverse; }
.container .cube > div > span.active-span.active-even-span { transform: translate(0, -50px); }
.container .cube > div > span.active-span.active-odd-span { transform: translate(0, 50px); }
.container .cube > div > span.active-span::before { background-color: #f75d64; }
.container .cube > div > span.active-span::after { background-color: #f13e55; box-shadow: -150px 150px 5px rgba(0,0,0,0.15); }
@keyframes animate { 0%, 100% { filter: hue-rotate(0deg); } 20% { filter: hue-rotate(45deg); } 40% { filter: hue-rotate(90deg); } 60% { filter: hue-rotate(-90deg); } 80% { filter: hue-rotate(-45deg); } }`,
        liveJs: `function createCube() {
    let container = document.querySelector(".container");
    [-3, -2, -1, 0, 1, 2, 3].forEach((z) => {
        let cube = document.createElement("div");
        cube.style.setProperty("--z", z);
        cube.classList.add('cube');
        for (let x = -3; x <= 3; x++) {
            let div = document.createElement("div");
            div.style.setProperty("--x", x);
            div.style.setProperty("--y", 0);
            let span = document.createElement("span");
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
        setTimeout(() => { randomSpan.classList.remove('active-span'); }, 2000);
    }, 500);
}
createCube();
randomCubeActivation();`
    },

    /* ═══════════════════════════════════════════════════════════════
       MOUSE MOVE V1 — ARROW
       ═══════════════════════════════════════════════════════════════ */
    'mouse-move-v1': {
        id: 'mouse-move-v1',
        slug: 'mouse-move-v1',
        projectName: 'Interactive Rotating Arrow Trail',
        projectDescription: 'A glowing green arrow trail that follows the cursor in real time. Each arrow rotates based on the direction of mouse movement.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/arrow.rar',
        liveHtml: ``,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { background-color: #222; overflow: hidden; height: 100vh; }
i { position: absolute; width: 18px; height: 18px; background-color: #0f0; clip-path: polygon(0 0, 100% 50%, 0 100%, 25% 50%); transform: translate(-50%, -50%) rotate(var(--rot, 0deg)) scale(var(--scale, 1)); filter: drop-shadow(0 0 6px #0f0) drop-shadow(0 0 12px #0f0); animation: fadeOut 0.8s linear forwards; pointer-events: none; }
@keyframes fadeOut { to { opacity: 0; transform: translate(-50%, -50%) rotate(var(--rot, 0deg)) scale(0); } }`,
        liveJs: `let lastX = 0;
let lastY = 0;
const spawnArrow = (event) => {
    const arrow = document.createElement('i');
    arrow.style.left = event.pageX + 'px';
    arrow.style.top = event.pageY + 'px';
    const dx = event.pageX - lastX;
    const dy = event.pageY - lastY;
    const rot = Math.atan2(dy, dx) * 180 / Math.PI;
    arrow.style.setProperty('--rot', rot + 'deg');
    const scale = 0.6 + Math.random() * 0.8;
    arrow.style.setProperty('--scale', scale.toString());
    document.body.appendChild(arrow);
    setTimeout(() => { document.body.removeChild(arrow); }, 800);
    lastX = event.pageX;
    lastY = event.pageY;
};
document.addEventListener('mousemove', spawnArrow);`
    },

    /* ═══════════════════════════════════════════════════════════════
       MOUSE MOVE V2 — SPARK
       ═══════════════════════════════════════════════════════════════ */
    'mouse-move-v2': {
        id: 'mouse-move-v2',
        slug: 'mouse-move-v2',
        projectName: 'Mouse Trail Spark Effect',
        projectDescription: 'A visually striking, interactive mouse trail effect that generates glowing green sparks at the cursor location.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/cursor move.rar',
        liveHtml: ``,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { background-color: #222; overflow: hidden; }
i { position: absolute; width: 4px; height: 4px; background-color: #0f0; animation: animate 2s linear forwards; }
@keyframes animate { 0% { opacity: 1; transform: translate(0, 0); } 100% { opacity: 0; transform: translate(var(--x), var(--y)); } }`,
        liveJs: `const spark = (event) => {
    let i = document.createElement('i');
    i.style.left = (event.pageX) + 'px';
    i.style.top = (event.pageY) + 'px';
    i.style.scale = Math.random() * 2 + 1;
    i.style.setProperty('--x', (Math.random() * 400 - 200) + 'px');
    i.style.setProperty('--y', (Math.random() * 400 - 200) + 'px');
    document.body.appendChild(i);
    setTimeout(() => { document.body.removeChild(i); }, 2000);
};
document.addEventListener('mousemove', spark);`
    },

    /* ═══════════════════════════════════════════════════════════════
       MOUSE MOVE V3 — RIPPLE BOXES
       ═══════════════════════════════════════════════════════════════ */
    'mouse-move-v3': {
        id: 'mouse-move-v3',
        slug: 'mouse-move-v3',
        projectName: 'Dynamic Hover Ripple Boxes',
        projectDescription: 'An interactive layout of colorful cards that respond to cursor movement with a ripple-like radial effect.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/cursor move.rar',
        liveHtml: `
<div class="container">
    <div class="box" style="--clr: #2196f3;"></div>
    <div class="box" style="--clr: #f32175;"></div>
    <div class="box" style="--clr: #ff7f20;"></div>
    <div class="box" style="--clr: #9bdc28;"></div>
</div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background-color: #333; }
.container { position: relative; display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 40px; }
.container .box { position: relative; width: 250px; height: 300px; background-color: #4a4a4a; border-radius: 20px; overflow: hidden; }
.container .box::before { content: ''; position: absolute; top: var(--y); left: var(--x); transform: translate(-50%, -50%); width: 0; height: 0; background-color: var(--clr); border-radius: 50%; transition: 1s, top 0s, left 0s; box-shadow: inset 0 0 50px rgba(0,0,0,1); }
.container .box:hover::before { width: 400px; height: 400px; }`,
        liveJs: `let boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.onmousemove = function (e) {
        let rect = box.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        box.style.setProperty('--x', x + 'px');
        box.style.setProperty('--y', y + 'px');
    };
});`
    },

    /* ═══════════════════════════════════════════════════════════════
       RAINS
       ═══════════════════════════════════════════════════════════════ */
    'rains': {
        id: 'rains',
        slug: 'rains',
        projectName: 'Colorful Rains Animation',
        projectDescription: 'A visual animation project creates a beautiful rain of glowing, colorful circles falling from the top of the screen.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.3.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/colorful rains.rar',
        liveHtml: `<h2>Colorful Rains</h2>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background-color: #262626; background-image: linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px); background-size: 5vh 5vh; overflow: hidden; }
h2 { font-family: Consolas; font-size: 8em; color: #fff; text-shadow: 1px 1px 5px #FFFAE6; filter: drop-shadow(1px 1px 5px #fffae6); }
.circle { position: absolute; top: 0; width: 20px; aspect-ratio: 1 / 1; border: 5px solid rgba(0,0,0,0.6); border-radius: 50%; background-color: #0f0; animation: animate 10s linear forwards; transform-origin: top; }
@keyframes animate { 0% { transform: translateY(0vh) scale(0); } 10% { transform: translateY(0vh) scale(1); } 45% { transform: translateY(0vh) scale(1); } 55% { transform: translateY(calc(100vh - 100%)) scale(1); } 90% { transform: translateY(calc(100vh - 100%)) scale(1); transform-origin: bottom; } 100% { transform: translateY(calc(100vh - 100%)) scale(0); transform-origin: bottom; } }`,
        liveJs: `function falling() {
    let divEl = document.createElement('div');
    divEl.setAttribute('class', 'circle');
    document.body.appendChild(divEl);
    let size = Math.random() * 50;
    divEl.style.width = (5 + size) + 'px';
    divEl.style.left = Math.random() * innerWidth + 'px';
    let angle = Math.random() * 360;
    divEl.style.boxShadow = '0 0 20px #0f0';
    divEl.style.filter = 'hue-rotate(' + angle + 'deg)';
    setTimeout(() => { document.body.removeChild(divEl); }, 10000);
}
setInterval(() => { falling(); }, 200);`
    },

    /* ═══════════════════════════════════════════════════════════════
       LOADING V1 — NEON SPINNER
       ═══════════════════════════════════════════════════════════════ */
    'loading-v1': {
        id: 'loading-v1',
        slug: 'loading-v1',
        projectName: 'Animated Neon Glow Loading Spinner',
        projectDescription: 'A visually captivating, circular loading animation built entirely with HTML and CSS.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS'],
        zipFile: 'assets/zip-files/border.rar',
        liveHtml: `<div></div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background-color: #181818; animation: hue-rotate 3.5s linear infinite; }
div { width: 200px; height: 200px; box-shadow: 16px 14px 20px #0000008c; border-radius: 50%; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; transition: 0.3s linear; }
div:hover { box-shadow: 0 0 10px #0000008c; }
div::before { content: ""; position: absolute; background-image: conic-gradient(#ff0052 20deg, transparent 120deg); width: 150%; height: 150%; animation: rotate 3s linear infinite; }
div::after { content: "Loading"; width: 190px; height: 190px; text-transform: uppercase; background-color: #2e2e2e; position: absolute; border-radius: inherit; display: flex; align-items: center; justify-content: center; color: #ff0052; font-size: larger; font-family: cursive; letter-spacing: 5px; box-shadow: inset 20px 20px 20px #0000008c, inset -20px -20px 20px #0000008c; font-weight: 900; transition: 0.3s linear; }
div:hover::after { letter-spacing: -2px; }
@keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
@keyframes hue-rotate { 0%, 100% { filter: hue-rotate(0deg); } 50% { filter: hue-rotate(360deg); } }`
    },

    /* ═══════════════════════════════════════════════════════════════
       GLASSMORPHISM V1
       ═══════════════════════════════════════════════════════════════ */
    'glassmorphism-v1': {
        id: 'glassmorphism-v1',
        slug: 'glassmorphism-v1',
        projectName: 'Glassmorphism UI Card',
        projectDescription: 'A modern and minimal glassmorphism-style card built with HTML and CSS. Featuring a semi-transparent, frosted glass effect.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS'],
        zipFile: 'assets/zip-files/glassmorphism v1.rar',
        liveHtml: `
<div class="glass">
    <h1>Hello</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam assumenda, nisi ut soluta voluptatum quidem ducimus dolor quae necessitatibus!</p>
</div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background-image: linear-gradient(90deg, #d593e684 20%, #60badbe1 80%); width: 100%; }
.glass { border: 1px solid rgba(255,255,255,0.35); width: 20rem; height: 20rem; padding: 2.5rem; border-radius: 1rem; background-color: rgba(255,255,255,0.1); box-shadow: 0 4px 30px rgba(0,0,0,0.1); backdrop-filter: blur(2.8rem); display: flex; flex-direction: column; gap: 0.8rem; }
.glass > * { font-family: 'Courier New', Courier, monospace; }
.glass p { line-height: 1.5; }`
    },

    /* ═══════════════════════════════════════════════════════════════
       SOLAR SYSTEM LOADING
       ═══════════════════════════════════════════════════════════════ */
    'solar-system-loading': {
        id: 'solar-system-loading',
        slug: 'solar-system-loading',
        projectName: 'Solar System Animation',
        projectDescription: 'A miniature animated solar system built using only HTML and CSS.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS'],
        zipFile: 'assets/zip-files/solar system.rar',
        liveHtml: `
<div class="solar-system">
    <div class="earth-circle"></div>
    <div class="sun"></div>
    <div class="earth">
        <div class="moon-circle"></div>
        <div class="moon"></div>
    </div>
</div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { background-color: #222; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
.solar-system { position: relative; display: flex; align-items: center; justify-content: center; }
.earth-circle { width: 400px; height: 400px; border: 2px solid #555; border-radius: 50%; }
.sun { position: absolute; height: 100px; width: 100px; background-color: rgba(255,255,0,0.5); border-radius: 50%; box-shadow: 0 0 50px rgba(255,255,0,0.5), inset 0 0 5px rgba(0,0,0,1); animation: 5s increaseBoxShadow linear infinite; }
.earth { position: absolute; top: -10px; width: 45px; height: 45px; background-color: green; border-radius: 50%; animation: 18s rotateEarth linear infinite; transform-origin: 30px 215px; }
.moon-circle { position: absolute; top: -20px; left: -20px; width: 85px; height: 85px; border-radius: 50%; border: 2px solid #555; }
.moon { position: absolute; width: 20px; height: 20px; background-color: #ccc; top: -30px; left: 15px; border-radius: 50%; animation: 1s rotateEarth linear infinite; }
@keyframes rotateEarth { to { rotate: 360deg; } }
@keyframes increaseBoxShadow { 0% { box-shadow: 0 0 50px #ff0; } 50% { box-shadow: 0 0 100px #ff0; } 100% { box-shadow: 0 0 50px #ff0; } }`
    },

    /* ═══════════════════════════════════════════════════════════════
       PIE CHART
       ═══════════════════════════════════════════════════════════════ */
    'pie-chart': {
        id: 'pie-chart',
        slug: 'pie-chart',
        projectName: 'Animated Conic Gradient Pie Chart',
        projectDescription: 'A visually appealing animated pie chart using pure HTML and CSS, with a dynamic rotation animation.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS'],
        zipFile: 'assets/zip-files/PIE CHART.rar',
        projectOnYoutube: 'https://www.youtube.com/watch?v=yG76tp7NR20&list=PL7S9lp7CuORZGO8goXg2462Cc3dWpisPI&index=8',
        liveHtml: `
<div class="conic-container">
    <figure>
        <div class="conic-gradient"></div>
        <div class="charts-number">
            <figcaption><span class="colored-span" style="--clr: red;"></span><span class="chart-number">30%</span></figcaption>
            <figcaption><span class="colored-span" style="--clr: blue;"></span><span class="chart-number">20%</span></figcaption>
            <figcaption><span class="colored-span" style="--clr: yellow;"></span><span class="chart-number">20%</span></figcaption>
            <figcaption><span class="colored-span" style="--clr: green;"></span><span class="chart-number">30%</span></figcaption>
        </div>
    </figure>
</div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { background-color: #000; background-image: repeating-linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 40px); background-size: 40px 40px; height: 100vh; display: flex; align-items: center; justify-content: center; }
.conic-gradient { width: 300px; height: 300px; background-image: radial-gradient(#000 0% 60%, transparent 0%), conic-gradient(red 0% 30%, blue 30% 50%, yellow 50% 70%, green 70% 100%); border-radius: 50%; animation: conic-gradient-animation 4s linear infinite; }
.charts-number { margin: 20px auto; display: flex; align-items: center; gap: 1rem; }
figcaption { display: flex; align-items: center; gap: 0.5rem; }
.colored-span { width: 20px; height: 10px; border-radius: 2px; background-color: var(--clr); animation: colored-span-animation 4s linear infinite; }
.chart-number { font-size: 1rem; color: #fff; font-weight: bold; font-family: cursive; }
@keyframes conic-gradient-animation { 0% { transform: rotate(0deg); filter: hue-rotate(0deg); } 100% { transform: rotate(360deg); filter: hue-rotate(360deg); } }
@keyframes colored-span-animation { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }`
    },

    /* ═══════════════════════════════════════════════════════════════
       SLIDER V1
       ═══════════════════════════════════════════════════════════════ */
    'slider-v1': {
        id: 'slider-v1',
        slug: 'slider-v1',
        projectName: '3D Rotating Image Carousel',
        projectDescription: 'A sleek 3D carousel built using HTML, CSS, and vanilla JavaScript, showcasing a series of images with depth, perspective, and rotation.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/slider v1.rar',
        liveHtml: `
<div class="box">
    <div class="item"><figure><img src="https://picsum.photos/id/1/200/300" alt="1"></figure></div>
    <div class="item"><figure><img src="https://picsum.photos/id/2/200/300" alt="2"></figure></div>
    <div class="item"><figure><img src="https://picsum.photos/id/3/200/300" alt="3"></figure></div>
    <div class="item"><figure><img src="https://picsum.photos/id/4/200/300" alt="4"></figure></div>
    <div class="item"><figure><img src="https://picsum.photos/id/5/200/300" alt="5"></figure></div>
    <div class="item"><figure><img src="https://picsum.photos/id/6/200/300" alt="6"></figure></div>
    <div class="item"><figure><img src="https://picsum.photos/id/7/200/300" alt="7"></figure></div>
</div>
<div class="buttons"><span class="prev"></span><span class="next"></span></div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #222; transform-style: preserve-3d; }
.box { position: relative; display: flex; transform-style: preserve-3d; perspective: 500px; }
.item { position: absolute; top: calc(50% - 150px); left: calc(50% - 100px); width: 200px; height: 300px; background-color: #fff; transition: 0.5s linear; -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, #0002); user-select: none; display: flex; align-items: center; justify-content: center; }
.box .item:nth-child(1) { transform: translate3d(-250px, 0, 0) scale(0.8) rotateY(25deg); z-index: 1; }
.box .item:nth-child(2) { transform: translate3d(-250px, 0, 0) scale(0.8) rotateY(25deg); z-index: 2; }
.box .item:nth-child(3) { transform: translate3d(-150px, 0, 0) scale(0.9) rotateY(15deg); z-index: 3; }
.box .item:nth-child(4) { transform: translate3d(0, 0, 0) scale(1) rotateY(0); z-index: 4; }
.box .item:nth-child(5) { transform: translate3d(150px, 0, 0) scale(0.9) rotateY(-15deg); z-index: 3; }
.box .item:nth-child(6) { transform: translate3d(250px, 0, 0) scale(0.8) rotateY(-25deg); z-index: 2; }
.box .item:nth-child(7) { transform: translate3d(250px, 0, 0) scale(0.8) rotateY(-25deg); z-index: -1; }
img { object-fit: cover; width: 100%; height: 100%; position: absolute; top: 0%; left: 0%; }
.buttons { position: absolute; bottom: 60px; display: flex; gap: 20px; }
.buttons span { position: relative; width: 50px; height: 50px; border: 2px solid #fff; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; opacity: 0.5; color: #fff; }
.buttons span:first-child::before, .buttons span:first-child::after, .buttons span:last-child::before, .buttons span:last-child::after { content: ''; position: absolute; width: 10px; height: 10px; border-top: 2px solid #fff; border-left: 2px solid #fff; }
.buttons span:first-child::before { left: 20px; rotate: -45deg; }
.buttons span:first-child::after { right: 20px; rotate: -45deg; }
.buttons span:last-child::before { left: 20px; rotate: 135deg; }
.buttons span:last-child::after { right: 20px; rotate: 135deg; }`,
        liveJs: `let prev = document.querySelector('.prev');
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

    /* ═══════════════════════════════════════════════════════════════
       PASSWORD GENERATOR
       ═══════════════════════════════════════════════════════════════ */
    'password-generator-v1': {
        id: 'password-generator-v1',
        slug: 'password-generator-v1',
        projectName: 'Password Generator',
        projectDescription: 'A modern and interactive password generator built with HTML, CSS, and JavaScript.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/password generator v1.rar',
        liveHtml: `
<div class="container">
    <div class="password-box">
        <h2 class="heading">Password Generator</h2>
        <div class="box">
            <input type="text" placeholder="Password Generator" class="result-input">
            <button type="button" class="copy-btn" title="Copy">Copy</button>
        </div>
        <h4 class="pass-length">Password Length</h4>
        <div class="range-box">
            <input type="range" min="1" max="40" value="10" class="range-btn">
            <p class="range-num">10</p>
        </div>
        <div class="include-input-box"><input type="checkbox" class="checkbox-input" checked id="uppercase"><label for="uppercase">Include Uppercase Letters</label></div>
        <div class="include-input-box"><input type="checkbox" class="checkbox-input" id="lowercase"><label for="lowercase">Include Lowercase Letters</label></div>
        <div class="include-input-box"><input type="checkbox" class="checkbox-input" id="numbers"><label for="numbers">Include Numbers</label></div>
        <div class="include-input-box"><input type="checkbox" class="checkbox-input" id="symbols"><label for="symbols">Include Symbols</label></div>
        <button class="generate-btn">Generate Password</button>
    </div>
</div>`,
        liveCss: `* { font-family: system-ui, sans-serif; margin: 0; padding: 0; box-sizing: border-box; }
body { margin: 0; min-height: 100vh; overflow-y: auto; }
.container { background-color: #eef0f5; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 10px; }
.password-box { padding: 20px; background-color: #1c2136; color: #fff; border-radius: 20px; max-width: 400px; width: 100%; }
.heading { border-left: 6px solid #5d33f8; padding-left: 10px; margin: 10px 0 30px; font-size: 1.3rem; }
.box { display: flex; align-items: center; border: 2px solid #5d33f8; height: 50px; padding: 0 15px; border-radius: 6px; }
.box .result-input { width: 100%; background-color: transparent; border: none; color: #fff; outline: none; font-size: 1rem; }
.box .copy-btn { background-color: transparent; outline: none; border: none; color: #fff; cursor: pointer; font-size: 1.1rem; }
.pass-length { margin-block: 20px 10px; font-size: 1rem; }
.range-box { display: flex; align-items: center; margin-block: 10px 20px; }
.range-box .range-btn { width: 100%; height: 2px; cursor: pointer; accent-color: #5d33f8; }
.range-box .range-num { margin-left: 10px; }
.include-input-box { display: flex; align-items: center; transition: 0.3s linear; font-size: 0.9rem; }
.include-input-box .checkbox-input { width: 15px; height: 15px; margin: 10px 0; margin-right: 10px; }
.generate-btn { width: 100%; height: 40px; background-color: #5d33f8; color: #fff; font-size: 16px; border: none; outline: none; border-radius: 6px; margin-top: 20px; cursor: pointer; }`,
        liveJs: `let rangeBtn = document.querySelector('.range-btn');
let rangeNum = document.querySelector('.range-num');
let resultInput = document.querySelector('.result-input');
let copyBtn = document.querySelector('.copy-btn');
let generateBtn = document.querySelector('.generate-btn');
let uppercaseCheckbox = document.querySelector('#uppercase');
let lowercaseCheckbox = document.querySelector('#lowercase');
let numbersCheckbox = document.querySelector('#numbers');
let symbolsCheckbox = document.querySelector('#symbols');

let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '1234567890';
let symbols = '!@#$%^&*()_+=';

rangeBtn.addEventListener('input', (e) => { rangeNum.innerHTML = e.target.value; });

function generatePassword(alphabets, length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        password += alphabets[Math.floor(Math.random() * alphabets.length)];
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

generateBtn.addEventListener('click', () => {
    let alphabets = '';
    alphabets += uppercaseCheckbox.checked ? uppercase : '';
    alphabets += lowercaseCheckbox.checked ? lowercase : '';
    alphabets += numbersCheckbox.checked ? numbers : '';
    alphabets += symbolsCheckbox.checked ? symbols : '';
    if (alphabets === '') {
        resultInput.value = 'Select at least one option';
        return;
    }
    let attempts = 0;
    let password = '';
    do {
        password = generatePassword(alphabets, rangeBtn.value);
        attempts++;
    } while (!isValidPassword(password) && attempts < 100);
    resultInput.value = password;
});

copyBtn.addEventListener('click', () => {
    if (resultInput.value.length == 0) return;
    resultInput.select();
    try { navigator.clipboard.writeText(resultInput.value); } catch (e) {}
    copyBtn.textContent = 'Copied';
    setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1500);
});`
    },

    /* ═══════════════════════════════════════════════════════════════
       ANIMATED POPUP V1
       ═══════════════════════════════════════════════════════════════ */
    'animated-popup-v1': {
        id: 'animated-popup-v1',
        slug: 'animated-popup-v1',
        projectName: 'Interactive Expandable Card UI',
        projectDescription: 'A stylish, animated expandable card built using HTML, CSS, and JavaScript. Click the toggle button to smoothly reveal or hide content.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/animated popup v1.rar',
        liveHtml: `
<div class="container">
    <div class="content">
        <h2>Heading...</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam, libero maiores possimus perferendis enim harum, fugiat esse laboriosam amet recusandae dolores hic tempore laudantium velit eligendi, quia quisquam rerum!</p>
    </div>
    <div class="toggleBtn"></div>
</div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #1a242a; }
.container { position: relative; width: 0; height: 0; background-color: #37444b; border-radius: 25px; transition: 0.5s linear; display: flex; justify-content: center; align-items: center; }
.container.active { width: 400px; height: 400px; transition-delay: 0.5s; }
.container::before { content: ''; position: absolute; bottom: -15px; transform: rotate(45deg); width: 40px; height: 40px; background-color: #37444b; border-radius: 5px; opacity: 0; transition: 0.5s linear; }
.container.active::before { transition-delay: 0.5s; opacity: 1; }
.container .content { min-width: 400px; padding: 40px; color: #fff; opacity: 0; transition: 0.5s linear; transform: scale(0); }
.container .content p { line-height: 35px; }
.container.active .content { opacity: 1; transition-delay: 0.5s; transform: scale(1); }
.container .toggleBtn { position: absolute; bottom: -20px; min-width: 60px; height: 60px; background-color: #0bcf9c; border-radius: 50%; cursor: pointer; text-align: center; transition: 0.5s; }
.container.active .toggleBtn { bottom: -90px; transform: rotate(135deg); background-color: #ff5a57; }
.container .toggleBtn::before { content: '+'; font-size: 2.5em; color: #fff; }`,
        liveJs: `let toggleBtn = document.querySelector('.toggleBtn');
let container = document.querySelector('.container');
toggleBtn.onclick = function () {
    container.classList.toggle('active');
};`
    },

    /* ═══════════════════════════════════════════════════════════════
       MENU INDICATOR V1
       ═══════════════════════════════════════════════════════════════ */
    'menu-indicator-v1': {
        id: 'menu-indicator-v1',
        slug: 'menu-indicator-v1',
        projectName: 'Animated Vertical Navigation Menu',
        projectDescription: 'A sleek animated vertical navigation menu with hover effects and dynamic background color changes.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/indicator v1.rar',
        liveHtml: `
<div class="navigation">
    <ul>
        <li class="list active" data-color="#f53b57"><a href="#"><span class="icon">🏠</span><span class="title">Home</span></a></li>
        <li class="list" data-color="#3c40c6"><a href="#"><span class="icon">👤</span><span class="title">Profile</span></a></li>
        <li class="list" data-color="#05c46b"><a href="#"><span class="icon">💬</span><span class="title">Message</span></a></li>
        <li class="list" data-color="#0fbcf9"><a href="#"><span class="icon">❓</span><span class="title">Help</span></a></li>
        <li class="list" data-color="#ffa901"><a href="#"><span class="icon">⚙</span><span class="title">Settings</span></a></li>
        <div class="indicator"></div>
    </ul>
</div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #333; transition: 0.5s linear; }
.navigation { position: relative; width: 70px; height: 350px; background: #fff; border-radius: 35px; box-shadow: 0 15px 25px rgba(0,0,0,0.1); }
.navigation ul { position: absolute; top: 0; left: 0; width: 100%; display: flex; flex-direction: column; list-style: none; }
.navigation ul li { position: relative; list-style: none; width: 70px; height: 70px; z-index: 1; }
.navigation ul li a { position: relative; display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; text-align: center; color: #333; font-weight: 500; text-decoration: none; }
.navigation ul li a .icon { position: relative; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; font-size: 22px; transition: 0.5s linear; }
.navigation ul li.active a .icon { color: #fff; }
.navigation ul li a .title { position: absolute; top: 50%; left: 110px; transform: translateY(-50%); background-color: #fff; color: #333; padding: 5px 10px; border-radius: 6px; box-shadow: 0 5px 15px rgba(0,0,0,0.5); opacity: 0; visibility: hidden; transition: 0.3s linear; white-space: nowrap; font-size: 14px; }
.navigation ul li:hover a .title { opacity: 1; visibility: visible; transform: translateX(-25px) translateY(-50%); }
.navigation ul li a .title::before { content: ''; position: absolute; left: -6px; top: 50%; transform: translateY(-50%) rotate(45deg); width: 12px; height: 12px; background-color: #fff; }
.navigation ul .indicator { position: absolute; left: 0; width: 70px; height: 70px; transition: 0.5s linear; }
.navigation ul .indicator::before { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 50px; height: 50px; background: #333; border-radius: 50%; transition: 0.5s linear; }
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
        liveJs: `let list = document.querySelectorAll('li');
for (let i = 0; i < list.length; i++) {
    list[i].onmouseover = function () {
        let j = 0;
        while (j < list.length) { list[j++].className = "list"; }
        list[i].className = 'list active';
    };
}
list.forEach(el => {
    el.addEventListener('mouseenter', function (event) {
        let bg = document.querySelector('body');
        let color = event.currentTarget.getAttribute('data-color');
        if (color) bg.style.backgroundColor = color;
    });
});`
    },

    /* ═══════════════════════════════════════════════════════════════
       CONIC GRADIENT GENERATOR
       ═══════════════════════════════════════════════════════════════ */
    'conic-gradient-generator': {
        id: 'conic-gradient-generator',
        slug: 'conic-gradient-generator',
        projectName: 'Interactive Conic-Gradient Pie Chart Generator',
        projectDescription: 'A dynamic and responsive pie chart generator using CSS conic-gradient and vanilla JavaScript. Users can interactively add, remove, and customize chart segments.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/conic generator v1.rar',
        liveHtml: `
<h1>conic-gradient pie chart</h1>
<div class="container chart">
    <div class="pie_wrapper"><div class="pie"></div></div>
    <div class="values"></div>
</div>
<div class="container code"><code></code></div>`,
        liveCss: `*, *::before, *::after { padding: 0; margin: 0 auto; box-sizing: border-box; }
body { font-family: system-ui, sans-serif; background-color: #333; color: #fff; text-align: center; padding: 1.5em 1em; min-height: 100vh; overflow-y: auto; }
input, button { font-size: inherit; font-family: inherit; }
h1 { padding: 10px; line-height: 1; font-size: 1.3rem; }
.chart { display: grid; grid-template-columns: 240px 170px; grid-gap: 20px; padding: 20px; width: 100%; max-width: 500px; text-align: center; border: 1px solid #111; border-radius: 4px; }
.pie { width: 240px; height: 240px; border-radius: 50%; position: relative; border: 1px solid white; }
.pie_dial { position: absolute; bottom: 50%; left: calc(50% - 1px); width: 2px; height: 120px; background-color: white; transform-origin: bottom; }
.value { padding: 0.5em; border-radius: 4px; display: flex; align-items: center; margin-bottom: 0.25em; }
.value_input { padding: 0 0.5em; width: 5em; height: 2em; border: none; border-radius: 4px; color: #111; }
.value_button { position: relative; width: 2em; height: 2em; border: none; background-color: rgba(0,0,0,0.2); color: white; border-radius: 4px; margin-left: 0.25em; cursor: pointer; font-size: 1em; display: inline-flex; align-items: center; justify-content: center; }
.value_button:disabled { color: rgba(255,255,255,0.13); }
.value_color { position: absolute; top: 0; left: 0; width: 2em; height: 2em; opacity: 0; cursor: pointer; }
.value_addText { margin-left: 0.5em; }
.value.clickable { cursor: pointer; }
.code { padding: 20px; width: 100%; max-width: 500px; text-align: left; border: 1px solid #111; border-radius: 4px; margin-top: 1em; font-family: 'Courier New', monospace; font-size: 0.75rem; line-height: 1.5; }
.code .indent { padding-left: 1em; }`,
        liveJs: `const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D', '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC'];
const segments = [];
const pie = document.querySelector('.pie');
const values = document.querySelector('.values');
const code = document.querySelector('code');

function getNewColor() {
    let OK = false;
    let thisColor = '';
    while (!OK) {
        OK = true;
        thisColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        segments.forEach(segment => { if (segment.color === thisColor) { OK = false; } });
    }
    return thisColor;
}

function createNewSegment() {
    segments.push({ color: getNewColor(), value: 10 + Math.floor(Math.random() * 90) });
}

function drawValues() {
    values.innerHTML = '';
    pie.innerHTML = '';
    segments.forEach((segment, ix) => {
        const valueDiv = document.createElement('div');
        valueDiv.classList = 'value';
        valueDiv.style.backgroundColor = segment.color;
        valueDiv.innerHTML = '<input type="number" min="1" step="1" class="value_input" value="' + segment.value + '" data-ix="' + ix + '">' +
            '<button class="value_button"><input class="value_color" type="color" value="' + segment.color + '" data-ix="' + ix + '"><span>🎨</span></button>' +
            '<button class="value_button" data-remove="' + ix + '" ' + (segments.length > 2 ? '' : 'disabled') + '>×</button>';
        values.appendChild(valueDiv);
        const dial = document.createElement('div');
        dial.classList = 'pie_dial';
        pie.appendChild(dial);
    });
    const valueDiv = document.createElement('div');
    valueDiv.classList = 'value clickable';
    valueDiv.style.backgroundColor = '#777';
    valueDiv.innerHTML = '<button class="value_button">+</button><div class="value_addText">Add segment</div>';
    valueDiv.addEventListener('click', () => { createNewSegment(); drawValues(); drawPie(); });
    values.appendChild(valueDiv);

    values.querySelectorAll('.value_input').forEach(inp => {
        inp.addEventListener('input', e => {
            const ix = parseInt(e.target.getAttribute('data-ix'));
            segments[ix].value = Number(e.target.value);
            drawPie();
        });
    });
    values.querySelectorAll('.value_color').forEach(inp => {
        inp.addEventListener('input', e => {
            const ix = parseInt(e.target.getAttribute('data-ix'));
            segments[ix].color = e.target.value;
            e.target.parentElement.parentElement.style.backgroundColor = e.target.value;
            drawPie();
        });
    });
    values.querySelectorAll('[data-remove]').forEach(btn => {
        btn.addEventListener('click', e => {
            const ix = parseInt(e.target.getAttribute('data-remove'));
            if (segments.length < 3) return;
            segments.splice(ix, 1);
            drawValues();
            drawPie();
        });
    });
}

function drawPie() {
    const dials = document.querySelectorAll('.pie_dial');
    let total = 0;
    segments.forEach(s => total += s.value);
    let lastDeg = 0, conic = '', codeText = '';
    segments.forEach((segment, ix) => {
        const thisDeg = (segment.value * 360 / total) + lastDeg;
        conic += segment.color + ' ' + lastDeg + 'deg, ' + segment.color + ' ' + thisDeg + 'deg, ';
        codeText += segment.color + ' ' + (Math.round(lastDeg * 1000) / 1000) + 'deg, ' + segment.color + ' ' + (Math.round(thisDeg * 1000) / 1000) + 'deg,<br>';
        if (dials[ix]) dials[ix].style.transform = 'rotate(' + thisDeg + 'deg)';
        lastDeg = thisDeg;
    });
    conic = conic.substr(0, conic.length - 2);
    pie.style.backgroundImage = 'radial-gradient(circle at 45% 55%, transparent 100px, #fff7 130px, transparent 160px), radial-gradient(circle at 55% 45%, transparent 100px, #0007 130px, transparent 160px), conic-gradient(' + conic + ')';
    code.innerHTML = '.pieChart {<div class="indent">background-image: conic-gradient(<div class="indent">' + codeText.substr(0, codeText.length - 4) + '</div>);</div>}';
}

const initCount = 2 + Math.floor(Math.random() * 4);
for (let i = 0; i < initCount; i++) createNewSegment();
drawValues();
drawPie();`
    },

    /* ═══════════════════════════════════════════════════════════════
       INTERACTIVE BOX 3D
       ═══════════════════════════════════════════════════════════════ */
    'interactive-box-3d': {
        id: 'interactive-box-3d',
        slug: 'interactive-box-3d',
        projectName: 'Interactive 3D Cube Grid',
        projectDescription: 'A stylish, interactive 3D cube grid animation using HTML, CSS, and JavaScript.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/3d box.rar',
        liveHtml: `
<div class="scene">
    <div class="cube">
        <div class="face front"><div class="grid"></div></div>
        <div class="face back"><div class="grid"></div></div>
        <div class="face left"><div class="grid"></div></div>
        <div class="face right"><div class="grid"></div></div>
        <div class="face top"><div class="grid"></div></div>
        <div class="face bottom"><div class="grid"></div></div>
    </div>
</div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #111; perspective: 1000px; }
.scene { position: relative; width: 300px; height: 300px; transform-style: preserve-3d; }
.cube { position: absolute; width: 100%; height: 100%; transform-style: preserve-3d; }
.face { position: absolute; width: 300px; height: 300px; transform-style: preserve-3d; perspective: 500; border: 1px solid #fff; }
.front { transform: rotateY(0deg) translateZ(150px); }
.back { transform: rotateY(180deg) translateZ(150px); }
.left { transform: rotateY(-90deg) translateZ(150px); }
.right { transform: rotateY(90deg) translateZ(150px); }
.top { transform: rotateX(90deg) translateZ(150px); }
.bottom { transform: rotateX(-90deg) translateZ(150px); }
.grid { display: grid; grid-template-columns: repeat(10, 1fr); }
.grid span { width: 30px; height: 30px; background-color: #333d; border: 1px solid #fff1; transform-style: preserve-3d; perspective: 500px; }
.grid span.active { background-color: #fff; z-index: 10000; filter: drop-shadow(0 0 20px #fff); }
.grid span.active-even { background-color: #c43a3abe; filter: drop-shadow(0 0 20px #c43a3abe); }
.grid span.active-odd { background-color: #68c43abe; filter: drop-shadow(0 0 20px #68c43abe); }`,
        liveJs: `document.addEventListener('DOMContentLoaded', () => {
    let cube = document.querySelector('.cube');
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        for (let i = 0; i < 100; i++) { grid.appendChild(document.createElement('span')); }
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
        cube.style.transform = 'rotateX(' + y * 360 + 'deg) rotateY(' + x * 360 + 'deg)';
    });
});`
    },

    /* ═══════════════════════════════════════════════════════════════
       NIGHT MODE V1
       ═══════════════════════════════════════════════════════════════ */
    'night-mode-v1': {
        id: 'night-mode-v1',
        slug: 'night-mode-v1',
        projectName: 'Meme-Inspired Day/Night Mode Toggle',
        projectDescription: 'A visually explosive and meme-worthy Day/Night mode toggle button that goes beyond the basics.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/night-mode/01 - night mode.rar',
        liveHtml: `
<div class="night-mode" style="--sun-active: false">
    <div class="night-mode-btn">
        <div class="sun-moon-toggler"></div>
        <div class="clouds-stars">
            <div class="clouds-stars-bottom">
                <span style="--left: 5; --bottom: 10;"></span><span style="--left: 15; --bottom: 20;"></span>
                <span style="--left: 25; --bottom: 30;"></span><span style="--left: 35; --bottom: 15;"></span>
                <span style="--left: 45; --bottom: 25;"></span><span style="--left: 55; --bottom: 35;"></span>
                <span style="--left: 65; --bottom: 20;"></span><span style="--left: 75; --bottom: 40;"></span>
                <span style="--left: 85; --bottom: 10;"></span><span style="--left: 95; --bottom: 5;"></span>
            </div>
            <div class="clouds-stars-top">
                <span style="--left: 7; --bottom: 80;"></span><span style="--left: 2; --bottom: 70;"></span>
                <span style="--left: 3; --bottom: 65;"></span><span style="--left: 10; --bottom: 90;"></span>
                <span style="--left: 12; --bottom: 75;"></span><span style="--left: 87; --bottom: 85;"></span>
                <span style="--left: 76; --bottom: 60;"></span><span style="--left: 32; --bottom: 95;"></span>
                <span style="--left: 27; --bottom: 88;"></span>
            </div>
        </div>
    </div>
</div>`,
        liveCss: `:root { --main-background: #d4d4d4; }
body { transition: 0.3s linear; background-color: var(--main-background); margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center; }
.night-mode { position: relative; width: max-content; cursor: pointer; overflow: hidden; }
.night-mode-btn { width: 90px; height: 40px; border-radius: 30px; background-color: #1e3a8a; background-image: radial-gradient(circle at 10% 50%, #ebf4ff 0%, #c3dafe 15%, transparent 16%), radial-gradient(circle at 20% 50%, #dbeafe 0%, #93c5fd 25%, transparent 26%), radial-gradient(circle at 30% 50%, #bfdbfe 0%, #60a5fa 35%, transparent 36%), radial-gradient(circle at 40% 50%, #a5b4fc 0%, #3b82f6 45%, transparent 46%), radial-gradient(circle at 50% 50%, #818cf8 0%, #2563eb 55%, transparent 56%), radial-gradient(circle at 60% 50%, #6366f1 0%, #1d4ed8 65%, transparent 66%), radial-gradient(circle at 70% 50%, #4f46e5 0%, #1e40af 75%, transparent 76%), radial-gradient(circle at 80% 50%, #4338ca 0%, #1e3a8a 85%, transparent 86%), radial-gradient(circle at 90% 50%, #3730a3 0%, #172554 95%, transparent 96%), radial-gradient(circle at 100% 50%, #312e81 0%, #0f172a 100%); background-repeat: no-repeat; background-size: cover; position: relative; box-shadow: inset 2px 2px 2px rgba(0,0,0,0.4), inset -2px -2px 2px rgba(0,0,0,0.3); overflow: hidden; transition: background-color 0.3s linear; transition-delay: 0.3s; }
.sun-moon-toggler { position: relative; transform: translate(4px, 5px); transition: 0.3s linear; z-index: 2; }
.clouds-stars { position: absolute; inset: 0; z-index: 1; transition: all 0.5s ease; overflow: hidden; }
.night-mode[style*="--sun-active: true"] .sun-moon-toggler { width: 30px; height: 30px; border-radius: 50%; box-shadow: inset -28px -2px 0 3px #f3d076, 0 0 5px #f3d076, 0 0 20px #f3d076, 0 0 50px #f3d076, 0 0 70px #f3d076; }
.night-mode[style*="--sun-active: false"] .sun-moon-toggler { display: block; width: 1.8rem; height: 1.8rem; background-color: transparent; box-shadow: inset -8px -2px 0 3px #adadad; border-radius: 50%; transform: translate(58px, 5px); }
.night-mode[style*="--sun-active: false"] .clouds-stars-bottom span { position: absolute; width: 5px; height: 5px; left: calc(var(--left) * 1%); bottom: calc(var(--bottom) * 1%); clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); background-color: #f3d076; box-shadow: 0 0 5px #f3d076, 0 0 20px #f3d076, 0 0 50px #f3d076; }
.night-mode[style*="--sun-active: false"] .clouds-stars-top span { position: absolute; left: calc(var(--left) * 1%); bottom: calc(var(--bottom) * 1%); width: 5px; height: 5px; clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); background-color: #f3d076; box-shadow: 0 0 5px #f3d076, 0 0 20px #f3d076, 0 0 50px #f3d076; }`,
        liveJs: `const nightModeContainer = document.querySelector('.night-mode');
let toggleView = false;
nightModeContainer.addEventListener('click', () => {
    toggleView = !toggleView;
    nightModeContainer.style.setProperty('--sun-active', toggleView);
    document.body.style.setProperty('--main-background', toggleView ? '#080a11' : '#d4d4d4');
});`
    },

    /* ═══════════════════════════════════════════════════════════════
       NIGHT MODE V2
       ═══════════════════════════════════════════════════════════════ */
    'night-mode-v2': {
        id: 'night-mode-v2',
        slug: 'night-mode-v2',
        projectName: 'Meme-Inspired Day/Night Mode Toggle V2',
        projectDescription: 'Pure CSS wizardry day/night toggle — no JavaScript needed.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.1.0',
        projectTags: ['Web Development', 'HTML', 'CSS'],
        zipFile: 'assets/zip-files/night-mode/02 - night mode.rar',
        liveHtml: `
<label>
  <input type="checkbox" />
  <div class="container" id="button">
    <div class="bg"></div>
    <div class="ray ray-inner"></div>
    <div class="ray ray-medium"></div>
    <div class="ray ray-far"></div>
    <div class="cloud-shadows"><div class="cloud-shadow cloud-1"></div><div class="cloud-shadow cloud-2"></div><div class="cloud-shadow cloud-3"></div><div class="cloud-shadow cloud-4"></div><div class="cloud-shadow cloud-5"></div><div class="cloud-shadow cloud-6"></div><div class="cloud-shadow cloud-7"></div></div>
    <div class="cloud cloud-1"></div><div class="cloud cloud-2"></div><div class="cloud cloud-3"></div><div class="cloud cloud-4"></div><div class="cloud cloud-5"></div><div class="cloud cloud-6"></div><div class="cloud cloud-7"></div>
    <div class="star star-1"></div><div class="star star-2"></div><div class="star star-3"></div><div class="star star-4"></div><div class="star star-5"></div><div class="star star-6"></div><div class="star star-7"></div><div class="star star-8"></div><div class="star star-9"></div><div class="star star-10"></div><div class="star star-11"></div>
    <div class="sun"><div class="moon"><div class="crater crater-1"></div><div class="crater crater-2"></div><div class="crater crater-3"></div></div></div>
  </div>
</label>`,
        liveCss: `* { transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.075); -webkit-tap-highlight-color: transparent; }
html, body { height: 100%; margin: 0; }
body { background: rgb(217, 222, 230); display: flex; align-items: center; justify-content: center; flex-direction: column; }
body:has(input:checked) { background-color: #080a11; }
label { user-select: none; display: flex; align-items: center; }
input { display: none; }
.container { position: relative; width: 369px; height: 145px; border-radius: 100px; overflow: hidden; box-shadow: 0px 5px 5px #fff; filter: drop-shadow(0 0 5px rgba(0,0,0,0.2)); margin: 10px; cursor: pointer; }
.container:has(input:checked) { background-color: #080a11; }
.container:before { z-index: 10; content: ""; position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; border-radius: 100px; box-shadow: inset 0px 10px 15px rgba(0,0,0,0.6); pointer-events: none; }
.bg { width: 100%; height: 100%; background: rgb(78, 134, 181); }
input:checked ~ .container .bg { background: rgb(31, 34, 51); }
.sun { width: 120px; height: 120px; border-radius: 100%; margin: 12.5px; margin-left: 20px; margin-right: 20px; background: rgb(238, 203, 80); filter: drop-shadow(0px 10px 10px rgba(44,44,44,0.8)); box-shadow: inset 0px -5px 3px rgba(100, 40, 80, 0.4), inset 3px 3px 3px #fff; position: absolute; top: 0; left: 0; overflow: hidden; }
input:checked ~ .container .sun { left: 209px; }
.ray-inner { top: -42.5px; left: -42.5px; width: 230px; height: 230px; }
.ray-medium { top: -88.5px; left: -88.5px; width: 322px; height: 322px; }
.ray-far { top: -136.5px; left: -136.5px; width: 418px; height: 418px; }
input:checked ~ .container .ray-inner { top: -42.5px; left: 181.5px; }
input:checked ~ .container .ray-medium { top: -88.5px; left: 135.5px; }
input:checked ~ .container .ray-far { top: -136.5px; left: 87.5px; }
.ray { position: absolute; background: rgba(255,255,255,0.1); border-radius: 100%; filter: blur(2px); }
.cloud, .cloud-shadow { background: #fff; position: absolute; border-radius: 100%; }
input:checked ~ .container .cloud, input:checked ~ .container .cloud-shadow { transform: translateY(140px); }
.cloud-shadows { opacity: 0.6; }
.cloud-shadow { transform: translateY(-15px) translateX(-2px); background: rgb(214, 225, 238); }
.cloud-1 { width: 134px; height: 134px; right: -70px; bottom: -10px; }
.cloud-2 { width: 95px; height: 95px; right: -10px; bottom: -10px; }
.cloud-3 { width: 87px; height: 87px; right: 50px; bottom: -40px; }
.cloud-4 { width: 78px; height: 78px; right: 100px; bottom: -45px; }
.cloud-5 { width: 87px; height: 87px; right: 150px; bottom: -45px; }
.cloud-6 { width: 78px; height: 78px; right: 220px; bottom: -45px; }
.cloud-7 { width: 78px; height: 78px; right: 280px; bottom: -50px; }
input:checked ~ .container:before { box-shadow: inset 0px 10px 15px rgba(20, 33, 45, 1); pointer-events: none; }
.moon { left: 130px; width: 120px; height: 120px; border-radius: 100%; background: rgb(204, 207, 212); filter: drop-shadow(0px 10px 10px rgba(44,44,44,0.8)); box-shadow: inset 0px -5px 3px rgba(40, 40, 80, 0.2), inset 3px 3px 3px #fff; position: absolute; top: 0; }
input:checked ~ .container .moon { left: 0; }
.crater { background: rgb(160, 168, 182); border-radius: 100%; position: absolute; box-shadow: inset 1px 1px 2px rgba(44,44,44,0.2); }
.crater-1 { width: 40px; height: 40px; top: 50px; left: 25px; }
.crater-2 { width: 25px; height: 25px; top: 17px; left: 50px; }
.crater-3 { width: 25px; height: 25px; top: 68px; left: 78px; }
.star { background: #fff; position: absolute; border-radius: 100%; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 50H0A50 50 0 0 0 50 0m0 50H0a50 50 0 0 1 50 50m0-50h50A50 50 0 0 1 50 0m0 50h50a50 50 0 0 0-50 50Z' fill='%23FFF'/%3E%3C/svg%3E"); filter: drop-shadow(0px 0px 2px #fff); transform: translateY(-130px); }
input:checked ~ .container .star { transform: translateY(0px); }
.star-1 { top: 40px; right: 155px; width: 25px; height: 25px; }
.star-2 { top: 40px; right: 205px; width: 8px; height: 8px; }
.star-3 { top: 88px; right: 170px; width: 8px; height: 8px; }
.star-4 { top: 70px; right: 220px; width: 8px; height: 8px; }
.star-5 { top: 105px; right: 200px; width: 15px; height: 15px; }
.star-6 { top: 15px; right: 285px; width: 22px; height: 22px; }
.star-7 { top: 45px; right: 320px; width: 10px; height: 10px; }
.star-8 { top: 60px; right: 290px; width: 10px; height: 10px; }
.star-9 { top: 95px; right: 310px; width: 6px; height: 6px; }
.star-10 { top: 110px; right: 325px; width: 6px; height: 6px; }
.star-11 { top: 120px; right: 285px; width: 6px; height: 6px; }`
    },

    /* ═══════════════════════════════════════════════════════════════
       DROP OF WATER
       ═══════════════════════════════════════════════════════════════ */
    'drop-of-water': {
        id: 'drop-of-water',
        slug: 'drop-of-water',
        projectName: 'Soft Neumorphic Water Drop Animation',
        projectDescription: 'A soothing, organic water drop animation crafted entirely with HTML and CSS.',
        projectDate: 'Last updated: June 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS'],
        zipFile: 'assets/zip-files/drop of water.rar',
        liveHtml: `<div class="drop"></div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background-color: #e0e5ec; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
.drop { position: relative; width: 100px; height: 100px; background-color: #e0e5ec; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; box-shadow: inset -6px -6px 12px rgba(255,255,255,0.9), inset 6px 6px 12px rgba(163,177,198,0.4), 0 8px 20px rgba(163,177,198,0.3); animation: float 3s ease-in-out infinite; will-change: transform; }
.drop::before { content: ''; position: absolute; top: 20%; left: 25%; width: 20px; height: 20px; background-color: rgba(255,255,255,0.85); border-radius: 50%; filter: blur(2px); }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }`
    },

    /* ═══════════════════════════════════════════════════════════════
       CIRCULAR LOGO
       ═══════════════════════════════════════════════════════════════ */
    'circular-logo': {
        id: 'circular-logo',
        slug: 'circular-logo',
        projectName: 'Conic Gradient Hover Buttons with Social Icons',
        projectDescription: 'A sleek, modern button set featuring social media icons wrapped in interactive circular borders with conic gradient fill.',
        projectDate: 'Last updated: June 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS'],
        zipFile: 'assets/zip-files/circular logo.rar',
        liveHtml: `
<div class="container">
    <button class="outside"><div class="btn"><span>in</span></div></button>
    <button class="outside"><div class="btn"><span>GH</span></div></button>
    <button class="outside"><div class="btn"><span>FB</span></div></button>
</div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { width: 100%; height: 100%; background: #000; }
.container { width: 100%; height: 100dvh; display: flex; justify-content: center; align-items: center; gap: 2rem; }
.btn { width: 4rem; height: 4rem; border-radius: 50%; background: #2d2a2a; display: flex; justify-content: center; align-items: center; position: relative; font-family: system-ui, sans-serif; color: #7a7a7a; font-weight: 700; font-size: 1rem; transition: 0.6s; }
@property --fill { syntax: '<percentage>'; initial-value: 0%; inherits: true; }
.outside { padding: 3px; background: conic-gradient(greenyellow var(--fill), transparent var(--fill)); border-radius: 50%; cursor: pointer; border: none; outline: none; transition: --fill 0.8s ease-in-out; }
.outside:hover { --fill: 100%; }
.outside:hover .btn { color: greenyellow; }`
    },

    /* ═══════════════════════════════════════════════════════════════
       CAN ROTATION
       ═══════════════════════════════════════════════════════════════ */
    'can-rotation': {
        id: 'can-rotation',
        slug: 'can-rotation',
        projectName: 'Rotational Image Pack Reveal Animation',
        projectDescription: 'An interactive image reveal effect using HTML and CSS. Two layered image elements are masked with a device mockup shape.',
        projectDate: 'Last updated: June 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS'],
        zipFile: 'assets/zip-files/can rotation.rar',
        liveHtml: `
<div class="container">
    <div class="cane">
        <div class="pack" style="--bg: url('https://picsum.photos/id/1015/400/600')"></div>
        <div class="pack" style="--bg: url('https://picsum.photos/id/1016/400/600')"></div>
    </div>
</div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { min-height: 100vh; background: #6767f0; }
.container { width: 100%; height: 100vh; overflow: hidden; position: relative; }
.cane { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); height: 500px; z-index: 2; transition: 0.7s; --left: 230px; display: flex; }
.cane .pack { position: absolute; background: var(--bg) var(--left); background-size: auto 100%; width: 280px; aspect-ratio: 2/4; background-blend-mode: multiply; left: 50%; transform: translateX(-50%); transition: 0.7s; }
.container .cane:hover { --left: -1000px; transform: translateX(-50%) translateY(-60%); }
.container .cane .pack:nth-child(2) { opacity: 0; }
.container .cane:hover .pack:nth-child(2) { opacity: 1; }`
    },

    /* ═══════════════════════════════════════════════════════════════
       IMAGE LAYER
       ═══════════════════════════════════════════════════════════════ */
    'image-layer': {
        id: 'image-layer',
        slug: 'image-layer',
        projectName: '3D Layered Image Reveal on Hover',
        projectDescription: 'A visually engaging 3D image layering effect using multiple copies of the same image.',
        projectDate: 'Last updated: June 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS'],
        zipFile: 'assets/zip-files/layers/01 - image layers.rar',
        liveHtml: `
<figure>
    <img src="https://picsum.photos/id/1015/400/300" alt="1">
    <img src="https://picsum.photos/id/1015/400/300" alt="2">
    <img src="https://picsum.photos/id/1015/400/300" alt="3">
    <img src="https://picsum.photos/id/1015/400/300" alt="4">
</figure>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background-image: linear-gradient(45deg, #C96868, #624E88); perspective: 800px; }
figure { width: 20rem; height: 10rem; transform-style: preserve-3d; position: relative; }
figure img { width: 100%; height: 100%; object-fit: cover; border-radius: 5px; transform-style: preserve-3d; position: absolute; top: 0; left: 0; transition: 0.3s linear; opacity: 1; transform: translate3d(0, 0, 75px) rotateX(45deg); }
figure:hover img:nth-child(4) { transform: translate3d(0, -100px, 100px) rotateX(45deg); opacity: 1; }
figure:hover img:nth-child(3) { transform: translate3d(0, -80px, 100px) rotateX(45deg); opacity: 0.6; }
figure:hover img:nth-child(2) { transform: translate3d(0, -60px, 100px) rotateX(45deg); opacity: 0.4; }
figure:hover img:nth-child(1) { transform: translate3d(0, -40px, 100px) rotateX(45deg); opacity: 0.2; }`
    },

    /* ═══════════════════════════════════════════════════════════════
       IMAGE SCROLLING
       ═══════════════════════════════════════════════════════════════ */
    'image-scrolling': {
        id: 'image-scrolling',
        slug: 'image-scrolling',
        projectName: 'Scroll-Reveal Pixel Explosion Effect',
        projectDescription: 'A creative scroll animation disassembles an image into 400 pixel slices using JavaScript and CSS.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.1.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/image-scroll.rar',
        liveHtml: `<section><h2>Scroll Down To see the full image</h2><div class="image-container"></div></section>`,
        liveCss: `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
* { margin: 0; padding: 0; box-sizing: border-box; font-family: "Poppins", sans-serif; }
body { min-height: 250vh; background-color: #363a3b; overflow-x: hidden; }
section { position: relative; width: 100%; height: 100vh; display: flex; justify-content: center; }
h2 { position: absolute; top: 100px; color: #fff; font-size: 3em; font-family: Consolas; text-wrap: wrap; text-align: center; text-transform: uppercase; letter-spacing: 0.05em; }
.image-container { position: absolute; top: 60vh; width: 400px; height: 400px; background-color: #3f4445; }
.image-slice { position: absolute; transition: all 1s ease-in-out; }`,
        liveJs: `let image = "https://picsum.photos/id/1039/400/400";
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

    /* ═══════════════════════════════════════════════════════════════
       CLIP PATH SCROLLING
       ═══════════════════════════════════════════════════════════════ */
    'clip-path-scrolling': {
        id: 'clip-path-scrolling',
        slug: 'clip-path-scrolling',
        projectName: 'Scroll-Reveal Circular Image Animation',
        projectDescription: 'Images are revealed in a circular motion as the user scrolls down the page using CSS clip-path.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/scrolling clip-path.rar',
        liveHtml: `
<div class="scroll-hint">مرّر داخل المعاينة لرؤية الصور</div>
<section data-start="0" data-end="1000"><figure><img src="https://picsum.photos/id/1015/1200/800" alt="1"></figure></section>
<section data-start="1000" data-end="2000"><figure><img src="https://picsum.photos/id/1016/1200/800" alt="2"></figure></section>
<section data-start="2000" data-end="3000"><figure><img src="https://picsum.photos/id/1018/1200/800" alt="3"></figure></section>
<section data-start="3000" data-end="4000"><figure><img src="https://picsum.photos/id/1019/1200/800" alt="4"></figure></section>
<section data-start="4000" data-end="5000"><figure><img src="https://picsum.photos/id/1024/1200/800" alt="5"></figure></section>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { min-height: 6000px; position: relative; overflow-x: hidden; overflow-y: auto; }
.scroll-hint { position: fixed; top: 12px; left: 50%; transform: translateX(-50%); z-index: 10; padding: 6px 14px; background-color: rgba(0,0,0,0.6); color: #fff; font-family: system-ui, sans-serif; font-size: 12px; border-radius: 20px; pointer-events: none; }
section { position: fixed; inset: 0; clip-path: circle(0 at center); transition: 0.5s linear; }
img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; }`,
        liveJs: `document.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    sections.forEach((section) => {
        let start = parseInt(section.getAttribute('data-start'));
        let end = parseInt(section.getAttribute('data-end'));
        if (scrollPosition >= start && scrollPosition <= end) {
            let progress = (scrollPosition - start) / (end - start);
            let clipPathSize = Math.max(0, 1000 * progress);
            section.style.clipPath = 'circle(' + clipPathSize + 'px at center)';
        } else if (scrollPosition < start) {
            section.style.clipPath = 'circle(0px at center)';
        } else if (scrollPosition > end) {
            section.style.clipPath = 'circle(1000px at center)';
        }
    });
});
window.dispatchEvent(new Event('scroll'));`
    },

    /* ═══════════════════════════════════════════════════════════════
       ANIMATED 3D GIF IMAGE
       ═══════════════════════════════════════════════════════════════ */
    'animated-3d-gif-image': {
        id: 'animated-3d-gif-image',
        slug: 'animated-3d-gif-image',
        projectName: 'Animated Grid Image Reveal',
        projectDescription: 'A creative image reveal effect using a 4x4 grid of boxes, where each piece is a section of a larger image. When hovered, the entire grid expands.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/3d animation v1.rar',
        liveHtml: `<div class="boxes"></div>`,
        liveCss: `* { box-sizing: border-box; margin: 0; }
:root { --light-black: rgba(28, 36, 39, 0.5); }
body { display: grid; place-items: center; min-height: 100vh; }
.boxes { position: relative; width: 500px; height: 500px; display: grid; place-items: center; grid-template-columns: repeat(4, 1fr); transition: 0.5s ease-out; }
.boxes:hover { width: 600px; height: 600px; }
.box { width: 125px; height: 125px; background-image: url('https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif'); background-repeat: no-repeat; background-size: 500px 500px; transition: 0.5s ease-out; box-shadow: 5px 5px 5px var(--light-black); }
.boxes:hover .box { transform: rotateZ(360deg); }`,
        liveJs: `const boxesContainer = document.querySelector('.boxes');
function renderBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const singleBox = document.createElement('div');
            singleBox.classList.add('box');
            singleBox.style.backgroundPosition = '-' + (j * 125) + 'px -' + (i * 125) + 'px';
            boxesContainer.appendChild(singleBox);
        }
    }
}
renderBoxes();`
    },

    /* ═══════════════════════════════════════════════════════════════
       TEXT STROKE FILL ANIMATION
       ═══════════════════════════════════════════════════════════════ */
    'text-stroke-fill-animation': {
        id: 'text-stroke-fill-animation',
        slug: 'text-stroke-fill-animation',
        projectName: 'Animated Text Stroke Reveal',
        projectDescription: 'A creative animation using -webkit-text-stroke and pseudo-elements to simulate a typewriter-style text reveal.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.1.0',
        projectTags: ['Web Development', 'HTML', 'CSS'],
        zipFile: 'assets/zip-files/text-stroke fill.rar',
        liveHtml: `<h2>Hello</h2>`,
        liveCss: `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
* { margin: 0; padding: 0; box-sizing: border-box; font-family: "Poppins", sans-serif; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background-color: #555; }
h2 { margin: 0 10px; font-size: 4em; -webkit-text-stroke: 2px; -webkit-text-stroke-color: #000e30; -webkit-text-fill-color: transparent; position: relative; width: fit-content; }
h2::before { content: "Hello"; position: absolute; top: 0; left: 0; width: 50px; height: 100%; animation: animateTextStrokeColor 3s linear infinite; overflow: hidden; }
h2::after { content: ""; position: absolute; top: 50%; left: -5px; width: 5px; height: 70%; background-color: #000e30; animation: animateTextStroke 3s linear infinite; transform: translateY(-50%); }
@keyframes animateTextStroke { 0%, 100% { left: -5px; } 20% { left: 25%; } 40% { left: 50%; } 60% { left: 75%; } 80% { left: 100%; } }
@keyframes animateTextStrokeColor { 0%, 100% { width: 0; -webkit-text-fill-color: #000e30; } 20% { width: 25%; -webkit-text-fill-color: #000e30; } 40% { width: 50%; -webkit-text-fill-color: #000e30; } 60% { width: 75%; -webkit-text-fill-color: #000e30; } 80% { width: 100%; -webkit-text-fill-color: #000e30; } }`
    },

    /* ═══════════════════════════════════════════════════════════════
       TEXT STROKE ANIMATION (SVG)
       ═══════════════════════════════════════════════════════════════ */
    'text-stroke-animation': {
        id: 'text-stroke-animation',
        slug: 'text-stroke-animation',
        projectName: 'Animated SVG Stroke Text',
        projectDescription: 'A sleek SVG animation with dashed stroke effect using stroke-dasharray and stroke-dashoffset.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.2.0',
        projectTags: ['Web Development', 'HTML', 'CSS'],
        zipFile: 'assets/zip-files/text-stroke animation.rar',
        liveHtml: `<svg width="100%" height="100%"><text class="stroke-animation" x="50%" y="50%" text-anchor="middle">Ibrahim Shafiq</text></svg>`,
        liveCss: `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
* { margin: 0; padding: 0; box-sizing: border-box; font-family: "Poppins", sans-serif; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background-color: #555; }
.stroke-animation { font-size: 3rem; fill: none; stroke: #fff; stroke-dasharray: 20 10; stroke-dashoffset: 100; animation: animateStroke 10s linear infinite; }
@keyframes animateStroke { 0%, 100% { stroke-dashoffset: 100; } 20% { stroke-dashoffset: 20; } 40% { stroke-dashoffset: 40; } 60% { stroke-dashoffset: 60; } 80% { stroke-dashoffset: 80; } }`
    },

    /* ═══════════════════════════════════════════════════════════════
       TEXT V3 — Typing
       ═══════════════════════════════════════════════════════════════ */
    'text-v3': {
        id: 'text-v3',
        slug: 'text-v3',
        projectName: 'Native Dynamic Typing Animation',
        projectDescription: 'An animated typing effect that dynamically types and erases a set of descriptive words using vanilla JavaScript.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.3.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/native typing text.rar',
        liveHtml: `<p><span class="js">Javascript</span> is <span class="typed-text"></span><span class="cursor">&nbsp;</span></p>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; background-image: linear-gradient(#5c3ec6, #e0969a, #d29b68); height: 100vh; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; }
p { color: #fff; font-size: 5em; }
.typed-text { color: #a574d5; text-shadow: 1px 1px 5px rgba(0,0,0,0.5); }
.cursor { background-color: #a574d5; }`,
        liveJs: `const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');
const words = ['Awesome❤️', 'Fun', 'Weird', 'Famous'];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;
document.addEventListener('DOMContentLoaded', () => {
    if (words.length) { setTimeout(type, typingDelay); }
});
function type() {
    if (charIndex < words[index].length) {
        typedText.innerHTML += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erasing, erasingDelay);
    }
}
function erasing() {
    if (charIndex > 0) {
        typedText.innerHTML = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erasing, erasingDelay);
    } else {
        index++;
        if (index >= words.length) { index = 0; }
        setTimeout(type, typingDelay + 1100);
    }
}`
    },

    /* ═══════════════════════════════════════════════════════════════
       TEXT V4 — Scroll Reveal
       ═══════════════════════════════════════════════════════════════ */
    'text-v4': {
        id: 'text-v4',
        slug: 'text-v4',
        projectName: 'Scroll-Reveal Text Animation',
        projectDescription: 'An interactive scroll animation where each character becomes highlighted as you scroll down the page.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.5.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/scrolling + text.rar',
        liveHtml: `
<div class="box">
    <h2>Hello World🔥</h2>
    <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repellendus laboriosam atque itaque quae suscipit. Sint non voluptas ex soluta ad expedita corrupti ut tempora, reiciendis id perferendis amet, laudantium molestias nemo voluptatum.</p>
</div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; font-family: Arial, Helvetica, sans-serif; }
body { display: flex; background-color: #333; justify-content: center; align-items: center; min-height: 710vh; }
.box { position: fixed; top: 50%; transform: translate(-50%, -50%); left: 50%; width: 50%; max-width: 80%; }
h2 { color: #fff; font-size: 2.5em; font-weight: 600; }
p { color: #fff; }
p span { opacity: 0; transform: translateY(10px); transition: opacity 0.3s ease, transform 0.3s ease; }
p span.active { opacity: 1; transform: translateY(0); color: #0f0; text-shadow: 0 0 5px #0f0; }`,
        liveJs: `let textEl = document.querySelector('.text');
let textContentData = textEl.textContent;
textEl.innerHTML = '';
for (let char of textContentData) {
    let span = document.createElement('span');
    span.textContent = char;
    textEl.appendChild(span);
}
let spans = document.querySelectorAll('.text span');
window.addEventListener('scroll', () => {
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

    /* ═══════════════════════════════════════════════════════════════
       TEXT V5 — Name Scroll
       ═══════════════════════════════════════════════════════════════ */
    'text-v5': {
        id: 'text-v5',
        slug: 'text-v5',
        projectName: 'Scroll-Reveal Name Animation',
        projectDescription: 'A scroll-triggered animation that breaks text into characters and animates each letter from a random position with neon glow.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.5.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/scroll.rar',
        liveHtml: `<div class="box"><h2 class="text">Ibrahim Shafiq</h2></div>`,
        liveCss: `* { box-sizing: border-box; margin: 0; padding: 0; font-family: Consolas; }
body { display: flex; align-items: center; justify-content: center; min-height: 180vh; background-color: #333; }
.box { position: fixed; top: 50%; transform: translateY(-50%); width: 440px; padding: 0 0 25px; display: flex; gap: 20px; }
.box span { position: absolute; color: transparent; -webkit-text-stroke: 0.5px #fff; font-size: 1.5em; transition: 0.25s linear; }
.box span.active { color: #0f0; -webkit-text-stroke: 0.5px #fff0; text-shadow: 0 0 10px #0f0, 0 0 30px #0f0, 0 0 60px #0f0; }`,
        liveJs: `let textEl = document.querySelector('.text');
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
            span.style.transform = 'translate(' + (index * 20) + 'px, 0)';
            span.classList.add('active');
        } else {
            span.style.transform = 'translate(' + (Math.random() * 100 - 50) + 'vw, ' + (Math.random() * 100 - 50) + 'vh)';
            span.classList.remove('active');
        }
    });
});
window.dispatchEvent(new Event('scroll'));`
    },

    /* ═══════════════════════════════════════════════════════════════
       TILT V1 — Menu
       ═══════════════════════════════════════════════════════════════ */
    'tilt-v1': {
        id: 'tilt-v1',
        slug: 'tilt-v1',
        projectName: '3D Hover Navigation Menu',
        projectDescription: 'An interactive 3D navigation menu with text layering effects and animated depth.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.1.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/tilt 01.rar',
        liveHtml: `
<ul>
    <li><a href="#"><span data-text="Home">Home</span></a></li>
    <li><a href="#"><span data-text="About">About</span></a></li>
    <li><a href="#"><span data-text="Services">Services</span></a></li>
    <li><a href="#"><span data-text="Portfolio">Portfolio</span></a></li>
    <li><a href="#"><span data-text="Contact">Contact</span></a></li>
</ul>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background-color: #333; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
ul { list-style: none; display: flex; flex-direction: column; gap: 12px; }
ul:hover li { opacity: 0.4; }
ul li { transition: opacity 0.3s ease; }
ul li:hover { opacity: 1; }
ul li a { display: inline-block; text-decoration: none; padding: 8px 20px; color: #fff; font-size: 1.4rem; font-weight: 600; letter-spacing: 1px; position: relative; transform-style: preserve-3d; transition: transform 0.15s ease-out; will-change: transform; }
ul li a span { position: relative; display: inline-block; transition: transform 0.3s ease; }
ul li a span::before { content: attr(data-text); position: absolute; top: 0; left: 0; color: #ffa901; transform: translateZ(-20px); opacity: 0; transition: opacity 0.3s ease, transform 0.3s ease; }
ul li a:hover span::before { opacity: 1; transform: translateZ(-20px) translateY(-4px); }`,
        liveJs: `function applyTilt(els, opts) {
    const max = (opts && opts.max) || 25;
    els.forEach((el) => {
        el.style.transformStyle = 'preserve-3d';
        el.addEventListener('mousemove', (e) => {
            const r = el.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            el.style.transform = 'perspective(1000px) rotateX(' + (-y * max) + 'deg) rotateY(' + (x * max) + 'deg)';
        });
        el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
}
applyTilt(document.querySelectorAll('ul li a'), { max: 25 });`
    },

    /* ═══════════════════════════════════════════════════════════════
       TILT V2 — Card
       ═══════════════════════════════════════════════════════════════ */
    'tilt-v2': {
        id: 'tilt-v2',
        slug: 'tilt-v2',
        projectName: '3D Tilt Card with Profile',
        projectDescription: 'A stylish 3D card component that creates a dynamic tilt effect on hover, enhancing interactivity and depth.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.1.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/tilt 02.rar',
        liveHtml: `
<div class="container">
    <div class="box">
        <div class="imgBx"><img src="https://i.pravatar.cc/200?img=12" alt="Profile"></div>
        <div class="contentBx">
            <h2>Ibrahim Shafiq</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui alias ab sunt aut nisi facere deserunt officia.</p>
        </div>
    </div>
</div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background-color: #333; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
.container { perspective: 1000px; }
.box { position: relative; width: 280px; background-color: #4a4a4a; border-radius: 20px; overflow: hidden; transform-style: preserve-3d; transition: transform 0.15s ease-out; will-change: transform; box-shadow: 0 10px 30px rgba(0,0,0,0.4); }
.imgBx { width: 100%; height: 220px; overflow: hidden; }
.imgBx img { width: 100%; height: 100%; object-fit: cover; display: block; }
.contentBx { padding: 20px; color: #fff; }
.contentBx h2 { font-size: 1.25rem; font-weight: 700; margin-bottom: 8px; color: #ffa901; }
.contentBx p { font-size: 0.85rem; line-height: 1.6; color: #c9c9c9; }`,
        liveJs: `function applyTilt(el, opts) {
    const max = (opts && opts.max) || 25;
    el.style.transformStyle = 'preserve-3d';
    el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = 'perspective(1000px) rotateX(' + (-y * max) + 'deg) rotateY(' + (x * max) + 'deg)';
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
}
applyTilt(document.querySelector('.box'), { max: 20 });`
    },

    /* ═══════════════════════════════════════════════════════════════
       TILT V3 — Social Icons
       ═══════════════════════════════════════════════════════════════ */
    'tilt-v3': {
        id: 'tilt-v3',
        slug: 'tilt-v3',
        projectName: '3D Interactive Social Media Icons',
        projectDescription: 'A horizontal list of social media icons enhanced with tilt effect and dynamic color transitions on hover.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.2.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/tilt 03.rar',
        liveHtml: `
<ul class="sci">
    <li style="--clr: #ff0000"><a href="#"><span>YT</span></a></li>
    <li style="--clr: #333"><a href="#"><span>X</span></a></li>
    <li style="--clr: #25d366"><a href="#"><span>WA</span></a></li>
    <li style="--clr: #4285f4"><a href="#"><span>G</span></a></li>
    <li style="--clr: #c32aa3"><a href="#"><span>IG</span></a></li>
</ul>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; min-height: 100vh; transition: 0.5s linear; background-color: #fff; }
.sci { position: relative; list-style: none; display: flex; gap: 40px; }
.sci:hover li { transform: scale(0.7); opacity: 0.5; }
.sci li { transition: 0.5s linear; }
.sci li:hover { transform: scale(1); opacity: 1; }
.sci li a { position: relative; display: flex; align-items: center; justify-content: center; background-color: #fff; width: 150px; height: 150px; color: #333; font-size: 2em; font-weight: 700; font-family: system-ui, sans-serif; text-decoration: none; box-shadow: 0 0 10px rgba(0,0,0,0.1), inset 0 0 10px rgba(0,0,0,0.1); border-radius: 10px; transform-style: preserve-3d; transition: 0.25s linear; }
.sci li a span { transition: 0.5s linear; pointer-events: none; }
.sci li:hover a { background-color: var(--clr); box-shadow: 0 0 10px rgba(0,0,0,0.25), inset 0 0 10px rgba(0,0,0,0.25); border: 5px solid var(--clr); }
.sci li:hover a span { transform: scale(1.5) translateZ(50px); color: #fff; }`,
        liveJs: `let ulList = document.querySelectorAll('ul li');
let body = document.body;
ulList.forEach((el) => {
    el.addEventListener('mouseenter', (e) => {
        let color = e.currentTarget.style.getPropertyValue('--clr');
        body.style.background = color;
    });
    el.addEventListener('mouseleave', () => { body.style.background = '#fff'; });
});
function applyTilt(els, opts) {
    const max = (opts && opts.max) || 25;
    els.forEach((el) => {
        el.style.transformStyle = 'preserve-3d';
        el.addEventListener('mousemove', (e) => {
            const r = el.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            el.style.transform = 'perspective(1000px) rotateX(' + (-y * max) + 'deg) rotateY(' + (x * max) + 'deg)';
        });
        el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
}
applyTilt(document.querySelectorAll('ul li a'), { max: 25 });`
    },

    /* ═══════════════════════════════════════════════════════════════
       BLOCKS (BACKGROUND GENERATOR)
       ═══════════════════════════════════════════════════════════════ */
    'blocks': {
        id: 'blocks',
        slug: 'blocks',
        projectName: 'Dynamic Animated Blocks',
        projectDescription: 'An interactive animation that generates dynamic and colorful block movements across the screen with each click of a button.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/blocks.rar',
        liveHtml: `<div class="container"><button>Generate</button></div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Roboto', sans-serif; }
body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #202020; overflow: hidden; }
.container { position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
button { position: relative; z-index: 10; margin: 10px; border: none; outline: none; background-color: #fff; font-size: 1.2em; padding: 15px 30px; cursor: pointer; box-shadow: 10px 10px 30px rgba(0,0,0,0.25); border-radius: 4px; transition: transform 0.15s ease; }
button:active { transform: scale(0.96); }
.block { position: absolute; width: 50px; height: 50px; background-color: #fff; box-shadow: 10px 10px 30px rgba(0,0,0,0.25); transition: all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1); will-change: transform, opacity; }
.block:nth-child(3n + 2) { background-color: #444; }
.block:nth-child(3n + 3) { background-color: #ff9213; }`,
        liveJs: `const container = document.querySelector('.container');
const button = document.querySelector('button');
for (let i = 1; i <= 200; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    container.appendChild(block);
}
function generate() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        const tx = Math.random() * 2000 - 1000;
        const ty = Math.random() * 2000 - 1000;
        const scale = 1 + Math.random() * 4;
        const opacity = Math.random();
        block.style.transform = 'translate(' + tx + 'px, ' + ty + 'px) scale(' + scale + ')';
        block.style.opacity = opacity;
    });
}
button.addEventListener('click', generate);`
    },

    /* ═══════════════════════════════════════════════════════════════
       BUTTON V1
       ═══════════════════════════════════════════════════════════════ */
    'button-v1': {
        id: 'button-v1',
        slug: 'button-v1',
        projectName: 'Animated Button Hover Effect',
        projectDescription: 'A sleek and modern hover animation for anchor tags using pure HTML and CSS.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS'],
        zipFile: 'assets/zip-files/buttons/button-v1.rar',
        liveHtml: `<a href="#"><span>Ibrahim</span></a><a href="#"><span>Shafiq</span></a><a href="#"><span>Abd-Elshafy</span></a>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; font-family: Arial, Helvetica, sans-serif; }
body { display: flex; justify-content: center; align-items: center; min-height: 100vh; flex-direction: column; gap: 40px; background-color: #333; }
a { color: #fff; text-decoration: none; font-size: 1.25em; letter-spacing: 0.1em; border: 1px solid #fff; padding: 10px 30px; display: inline-block; text-transform: uppercase; transition: 0.5s; border-radius: 30px; overflow: hidden; }
a span { display: inline-flex; transition: 0.4s linear; text-shadow: 0 50px #333; }
a:hover { background-color: #fff; }
a:hover span { color: #333; transform: translateY(-50px); }`
    },
    /* ═══════════════════════════════════════════════════════════════
   HTML CSS JS — Showcase
   ═══════════════════════════════════════════════════════════════ */
    'html-css-js': {
        id: 'html-css-js',
        slug: 'html-css-js',
        projectName: '{ HTML, CSS, JS } PROJECTS SHOWCASE',
        projectDescription: 'A curated playlist of mini-projects built using HTML, CSS, and JavaScript. These projects range from beginner to intermediate level and demonstrate various UI/UX patterns, animations, and interactive elements.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/html-css-js.rar',
        projectOnYoutube: 'https://www.youtube.com/watch?v=9IXZ_qEvF-w&list=PL7S9lp7CuORZGO8goXg2462Cc3dWpisPI'
    },

    /* ═══════════════════════════════════════════════════════════════
       NEWS APP
       ═══════════════════════════════════════════════════════════════ */
    'news-app': {
        id: 'news-app',
        slug: 'news-app',
        projectName: 'NEWS APP',
        projectDescription: 'A news application built with modern frontend technologies. It fetches real-time news from an API and displays it in a clean and responsive layout. Key features include categorized news sections, search functionality, and embedded videos.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS', 'API'],
        zipFile: 'assets/zip-files/Latest news.rar',
        projectOnYoutube: 'https://www.youtube.com/watch?v=9IXZ_qEvF-w&list=PL7S9lp7CuORbIPgqN7TrnlaboZ_Mos9TD',
        liveHtml: `<div class="news-container"><h1>Latest News Application</h1><h3 class="news-header">News of Business</h3><div class="loading-animation"><div class="spinner"></div></div><div class="news-articles"></div></div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; }
body { background-color: #202020; min-height: 100vh; display: flex; justify-content: center; align-items: center; }
.news-container { background-color: #ffffff; background-image: repeating-linear-gradient(to bottom, rgba(0,0,0,0.13), rgba(0,0,0,0.13) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(to right, rgba(0,0,0,0.13), rgba(0,0,0,0.13) 1px, transparent 1px, transparent 20px); background-size: 20px 20px; width: 100%; min-height: 100vh; padding: 20px; }
h1 { color: #2e2e2e; background-color: #ffffff; padding: 20px; text-align: center; box-shadow: 0 2px 1px rgba(0,0,0,0.5); font-size: 1.5rem; }
.news-header { font-size: 1.5rem; color: #2e2e2e; margin: 20px auto; text-align: center; }
.loading-animation { display: flex; justify-content: center; align-items: center; padding: 2rem; min-height: 200px; }
.spinner { width: 50px; height: 50px; border: 5px solid rgba(0,0,0,0.1); border-radius: 50%; border-top-color: #ff6b6b; animation: spin 1s ease-in-out infinite; }
@keyframes spin { to { transform: rotate(360deg); } }`,
        liveJs: `console.log('News app requires an API key — see source for full implementation.');`
    },

    /* ═══════════════════════════════════════════════════════════════
       LOADING V2 — Glowing Name
       ═══════════════════════════════════════════════════════════════ */
    'loading-v2': {
        id: 'loading-v2',
        slug: 'loading-v2',
        projectName: 'Glowing Animated Name Loader',
        projectDescription: 'This creative loader animation displays the name "IBRAHIM" with each letter glowing in different colors, animated vertically with a neon-like glow.',
        projectDate: 'Last updated: May 2025',
        projectVersion: 'v1.1.0',
        projectTags: ['Web Development', 'HTML', 'CSS'],
        zipFile: 'assets/zip-files/loading.rar',
        liveHtml: `<div class="loader"><span style="--i: 1; --clr: #1A3636;">I</span><span style="--i: 2; --clr: #134B70;">B</span><span style="--i: 3; --clr: #508C9B;">R</span><span style="--i: 4; --clr: #EF5A6F;">A</span><span style="--i: 5; --clr: #B5CFB7;">H</span><span style="--i: 6; --clr: #D1E9F6;">I</span><span style="--i: 7; --clr: #433D8B;">M</span></div>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; font-family: cursive; }
body { display: flex; align-items: center; justify-content: center; background-color: #111; min-height: 100vh; }
.loader { position: relative; cursor: default; -webkit-box-reflect: below -25px linear-gradient(transparent, #0005); }
.loader span { position: relative; display: inline-flex; font-size: 3em; color: transparent; -webkit-text-stroke: 1px var(--clr); text-transform: uppercase; font-weight: bolder; animation: animate 2s ease-in-out infinite; animation-delay: calc(0.2s * var(--i)); }
@keyframes animate { 0%, 40%, 100% { transform: translateY(0px); color: transparent; text-shadow: none; } 20% { transform: translateY(-60px); color: var(--clr); text-shadow: 0 0 5px var(--clr), 0 0 25px var(--clr), 0 0 50px var(--clr); } }`
    },

    /* ═══════════════════════════════════════════════════════════════
       LOADING V3 — Neon Spiral
       ═══════════════════════════════════════════════════════════════ */
    'loading-v3': {
        id: 'loading-v3',
        slug: 'loading-v3',
        projectName: 'Advanced Neon Spiral Loader',
        projectDescription: 'A cyberpunk vortex built with pure JavaScript and CSS, generating multiple layered loaders each composed of 20 glowing orbs.',
        projectDate: 'Last updated: June 2025',
        projectVersion: 'v1.2.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/loading/03 - loading.rar',
        liveHtml: `<script src="main.js"><\/script>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #001f25; overflow: hidden; }
.loader { position: relative; }
.loader span { position: absolute; top: 0; left: -200px; width: 200px; height: 2px; transform: rotate(calc(18deg * var(--i) / var(--j))); transform-origin: right; }
.loader span::before { content: ''; position: absolute; width: 15px; height: 15px; background-color: #00ebff; border-radius: 50%; box-shadow: 0 0 10px #00ebff, 0 0 20px #00ebff, 0 0 40px #00ebff, 0 0 60px #00ebff, 0 0 80px #00ebff, 0 0 100px #00ebff; animation: animate 2s linear infinite; animation-delay: calc(-0.1s * var(--i)); }
@keyframes animate { 0% { transform: translateX(200px) scale(1); opacity: 0; } 10% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translateX(0px) scale(0); opacity: 0; } }`,
        liveJs: `const body = document.body;
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
    },

    /* ═══════════════════════════════════════════════════════════════
       LOADING V4 — Dual Spiral
       ═══════════════════════════════════════════════════════════════ */
    'loading-v4': {
        id: 'loading-v4',
        slug: 'loading-v4',
        projectName: 'Neon Dual Spiral Loader',
        projectDescription: 'A hypnotic dual-spiral loader where alternating layers rotate in opposite directions, creating an interleaved vortex effect.',
        projectDate: 'Last updated: June 2025',
        projectVersion: 'v2.0.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/loading/04 - loading.rar',
        liveHtml: `<script src="main.js"><\/script>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #001f25; overflow: hidden; }
.loader { position: relative; }
.loader span { position: absolute; top: 0; left: -200px; width: 200px; height: 2px; transform: rotate(calc(18deg * var(--i))); transform-origin: right; }
.loader span::before { content: ''; position: absolute; width: 15px; height: 15px; background-color: #00ebff; border-radius: 50%; box-shadow: 0 0 10px #00ebff, 0 0 20px #00ebff, 0 0 40px #00ebff, 0 0 60px #00ebff; animation: animate 2s linear infinite; animation-delay: calc(-0.1s * var(--i)); }
.loader.reverse span { transform: rotate(calc(-18deg * var(--i))); }
.loader.reverse span::before { background-color: #ff44aa; box-shadow: 0 0 10px #ff44aa, 0 0 20px #ff44aa, 0 0 40px #ff44aa, 0 0 60px #ff44aa; }
@keyframes animate { 0% { transform: translateX(200px) scale(1); opacity: 0; } 10% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translateX(0px) scale(0); opacity: 0; } }`,
        liveJs: `const body = document.body;
let loader;
function loaderDiv() {
    for (let j = 0; j <= 3; j++) {
        loader = document.createElement('div');
        loader.classList.add('loader');
        if (j % 2 === 1) loader.classList.add('reverse');
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
    },

    /* ═══════════════════════════════════════════════════════════════
       LOADING V5 — Emoji Burst
       ═══════════════════════════════════════════════════════════════ */
    'loading-v5': {
        id: 'loading-v5',
        slug: 'loading-v5',
        projectName: 'Emoji Burst Loader',
        projectDescription: 'A playful loader that bursts emojis from a spiral formation, creating a chaotic, joyful motion that feels alive.',
        projectDate: 'Last updated: June 2025',
        projectVersion: 'v2.1.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/loading/05 - loading.rar',
        liveHtml: `<script src="main.js"><\/script>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #001f25; overflow: hidden; }
.loader { position: relative; }
.loader span { position: absolute; top: 0; left: -200px; width: 200px; height: 2px; transform-origin: right; }
.loader span::before { content: attr(data-emoji); position: absolute; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; width: 22px; height: 22px; background-color: #fff; border-radius: 50%; box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff; animation: animate 1s linear infinite; animation-delay: calc(-0.1s * var(--i)); }
@keyframes animate { 0% { transform: translateX(400px) scale(1); opacity: 0; } 10% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translateX(0px) scale(0); opacity: 0; } }`,
        liveJs: `const body = document.body;
let loader;
const EMOJIS = ['👌', '🔥', '✨', '💎', '🌟', '⭐', '💫', '🎯'];
function randomEmoji() { return EMOJIS[Math.floor(Math.random() * EMOJIS.length)]; }
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
        span.dataset.emoji = randomEmoji();
        loader.appendChild(span);
    }
}`
    },

    /* ═══════════════════════════════════════════════════════════════
       LOADING V6 — Rainbow Starburst
       ═══════════════════════════════════════════════════════════════ */
    'loading-v6': {
        id: 'loading-v6',
        slug: 'loading-v6',
        projectName: 'Rainbow Starburst Loader',
        projectDescription: 'A starburst loader where every orb gets a unique random color from the HSL spectrum.',
        projectDate: 'Last updated: June 2025',
        projectVersion: 'v2.2.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/loading/06 - loading.rar',
        liveHtml: `<script src="main.js"><\/script>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #001f25; overflow: hidden; }
.loader { position: relative; }
.loader span { position: absolute; top: 0; left: -200px; width: 200px; height: 2px; transform: rotate(calc(45deg * var(--i))); transform-origin: right; }
.loader span::before { content: ''; position: absolute; width: 15px; height: 15px; background-color: var(--clr, #00ebff); border-radius: 50%; box-shadow: 0 0 10px var(--clr, #00ebff), 0 0 20px var(--clr, #00ebff), 0 0 40px var(--clr, #00ebff), 0 0 60px var(--clr, #00ebff), 0 0 80px var(--clr, #00ebff); animation: animate 2s linear infinite; animation-delay: calc(-0.1s * var(--i)); }
@keyframes animate { 0% { transform: translateX(200px) scale(1); opacity: 0; } 10% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translateX(0px) scale(0); opacity: 0; } }`,
        liveJs: `const body = document.body;
let loader;
function randomColor() { return 'hsl(' + Math.floor(Math.random() * 360) + ', 100%, 60%)'; }
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
        span.style.setProperty('--clr', randomColor());
        loader.appendChild(span);
    }
}`
    },

    /* ═══════════════════════════════════════════════════════════════
       LOADING V7 — Interactive Pause
       ═══════════════════════════════════════════════════════════════ */
    'loading-v7': {
        id: 'loading-v7',
        slug: 'loading-v7',
        projectName: 'Interactive Pause Loader',
        projectDescription: 'An interactive loader that lets the user pause and resume the animation with a click or the spacebar.',
        projectDate: 'Last updated: June 2025',
        projectVersion: 'v2.3.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/loading/07 - loading.rar',
        liveHtml: `<script src="main.js"><\/script>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #001f25; overflow: hidden; cursor: pointer; transition: background-color 0.3s ease; }
body.paused { background-color: #1a0a1f; }
.loader { position: relative; transition: opacity 0.3s ease; }
.loader span { position: absolute; top: 0; left: -200px; width: 200px; height: 2px; transform: rotate(calc(90deg * var(--j))); transform-origin: right; }
.loader span::before { content: ''; position: absolute; width: 15px; height: 15px; background-color: #00ebff; border-radius: 50%; box-shadow: 0 0 10px #00ebff, 0 0 20px #00ebff, 0 0 40px #00ebff, 0 0 60px #00ebff; animation: animate 2s linear infinite; animation-delay: calc(-0.1s * var(--i)); }
body.paused .loader { opacity: 0.35; }
body.paused .loader span::before { animation-play-state: paused; }
.hint { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); font-family: monospace; font-size: 12px; color: rgba(0, 235, 255, 0.5); letter-spacing: 0.15em; text-transform: uppercase; user-select: none; }
@keyframes animate { 0% { transform: translateX(200px) scale(1); opacity: 0; } 10% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translateX(0px) scale(0); opacity: 0; } }`,
        liveJs: `const body = document.body;
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
}
let paused = false;
function togglePause() {
    paused = !paused;
    body.classList.toggle('paused', paused);
}
document.addEventListener('click', togglePause);
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') { e.preventDefault(); togglePause(); }
});
const hint = document.createElement('div');
hint.className = 'hint';
hint.textContent = 'click or press space to pause';
body.appendChild(hint);`
    },

    /* ═══════════════════════════════════════════════════════════════
       LOADING V8 — Organic Spiral
       ═══════════════════════════════════════════════════════════════ */
    'loading-v8': {
        id: 'loading-v8',
        slug: 'loading-v8',
        projectName: 'Organic Spiral Loader',
        projectDescription: 'A spiral loader where each orb has a slightly randomized animation delay and duration, giving the motion an organic quality.',
        projectDate: 'Last updated: June 2025',
        projectVersion: 'v2.4.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/loading/08 - loading.rar',
        liveHtml: `<script src="main.js"><\/script>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #001f25; overflow: hidden; }
.loader { position: relative; transform: rotate(calc(45deg * var(--j))); }
.loader span { position: absolute; top: 0; left: -200px; width: 200px; height: 2px; transform: rotate(calc(18deg * var(--i))); transform-origin: right; }
.loader span::before { content: ''; position: absolute; width: 15px; height: 15px; background-color: #00ebff; border-radius: 50%; box-shadow: 0 0 10px #00ebff, 0 0 20px #00ebff, 0 0 40px #00ebff, 0 0 60px #00ebff, 0 0 80px #00ebff; animation: animate var(--dur, 2s) linear infinite; animation-delay: var(--delay, calc(-0.1s * var(--i))); }
@keyframes animate { 0% { transform: translateX(200px) scale(1); opacity: 0; } 10% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translateX(0px) scale(0); opacity: 0; } }`,
        liveJs: `const body = document.body;
let loader;
function randomDuration(min, max) {
    return (min + Math.random() * (max - min)).toFixed(2) + 's';
}
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
        span.style.setProperty('--dur', randomDuration(1.4, 2.6));
        const baseDelay = -0.1 * i;
        const jitter = (Math.random() - 0.5) * 0.6;
        span.style.setProperty('--delay', (baseDelay + jitter).toFixed(2) + 's');
        loader.appendChild(span);
    }
}`
    },

    /* ═══════════════════════════════════════════════════════════════
       LOADING V9 — Responsive
       ═══════════════════════════════════════════════════════════════ */
    'loading-v9': {
        id: 'loading-v9',
        slug: 'loading-v9',
        projectName: 'Responsive Spiral Loader',
        projectDescription: 'A fully responsive and self-adjusting version of the spiral loader that scales based on the viewport size.',
        projectDate: 'Last updated: June 2025',
        projectVersion: 'v2.5.0',
        projectTags: ['Web Development', 'HTML', 'CSS', 'JS'],
        zipFile: 'assets/zip-files/loading/09 - loading.rar',
        liveHtml: `<script src="main.js"><\/script>`,
        liveCss: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #001f25; overflow: hidden; }
.loader { position: relative; transform: rotate(calc(90deg * var(--j))) scale(var(--scale, 1)); }
.loader span { position: absolute; top: 0; left: -200px; width: 200px; height: 2px; transform: rotate(calc(18deg * var(--i))); transform-origin: right; }
.loader span::before { content: ''; position: absolute; width: 15px; height: 15px; background-color: #00ebff; border-radius: 50%; box-shadow: 0 0 10px #00ebff, 0 0 20px #00ebff, 0 0 40px #00ebff, 0 0 60px #00ebff, 0 0 80px #00ebff; animation: animate 2s linear infinite; animation-delay: calc(-0.1s * var(--i)); }
@keyframes animate { 0% { transform: translateX(200px) scale(1); opacity: 0; } 10% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translateX(0px) scale(0); opacity: 0; } }`,
        liveJs: `const body = document.body;
function loaderDiv() {
    document.querySelectorAll('.loader').forEach(el => el.remove());
    for (let j = 0; j <= 3; j++) {
        const loader = document.createElement('div');
        loader.classList.add('loader');
        loader.style.setProperty('--j', j);
        body.appendChild(loader);
        loaderSpan(loader);
    }
}
function loaderSpan(loader) {
    for (let i = 1; i <= 20; i++) {
        const span = document.createElement('span');
        span.style.setProperty('--i', i);
        loader.appendChild(span);
    }
}
function computeScale() {
    const minDim = Math.min(window.innerWidth, window.innerHeight);
    return Math.max(0.5, Math.min(1.2, minDim / 800)).toFixed(2);
}
function applyScale() {
    const scale = computeScale();
    document.querySelectorAll('.loader').forEach(loader => {
        loader.style.setProperty('--scale', scale);
    });
}
let resizeTimer;
function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(applyScale, 150);
}
loaderDiv();
applyScale();
window.addEventListener('resize', handleResize);`
    }

};