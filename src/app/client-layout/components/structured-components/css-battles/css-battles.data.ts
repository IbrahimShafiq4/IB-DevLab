export interface CssBattleEntry {
    id: string;
    title: string;
    description: string;
    date: string;
    version: string;
    tags: string[];
    youtube?: string;
    zipFile: string;
    html: string;
    css?: string;
}

export const CSS_BATTLES: Record<string, CssBattleEntry> = {

    // ═══════════════════════════════════════════════════════════════
    // P1 — Layout Blocks
    // ═══════════════════════════════════════════════════════════════
    'p1': {
        id: 'p1',
        title: 'CSS Battle – Layout Blocks Challenge',
        description: `
CSS Battle challenge implemented using pure HTML and CSS.

The solution relies on a minimal HTML structure and uses Flexbox, CSS variables,
and background colors to recreate the target design. All elements are styled
using simple div blocks without images, SVGs, or JavaScript, following CSS Battle
best practices.
        `.trim(),
        date: 'Last updated: Jan 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS'],
        youtube: 'https://cssbattle.dev/play/jcZG5eWb8eLqs2AmUCz4',
        zipFile: 'assets/zip-files/cssBattle/01 - p1.rar',
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Battle 1</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="parent">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
    </div>
</body>
</html>
        `.trim(),
        css: `
:root {
    --white_blue: #37b4bd;
    --white_pink: #f9eaf1;
    --darken_color: #394257;
}

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
    background-color: var(--white_blue);
}

div.parent {
    width: 100px;
    height: 60px;
    background: #dd6b4d;
    transform: translateY(-8px);
    width: 340px;
    padding-left: 20px;
    background: var(--white_pink);
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;
    gap: 30px;

    .block {
        width: 30px;
        height: 30px;
        background-color: var(--darken_color);
    }
}
        `.trim()
    },

    // ═══════════════════════════════════════════════════════════════
    // P2 — Circular Shapes
    // ═══════════════════════════════════════════════════════════════
    'p2': {
        id: 'p2',
        title: 'CSS Battle – Circular Shapes Challenge',
        description: `
CSS Battle challenge created using pure HTML and CSS.

The design is composed of nested circular div elements,
using border-radius, absolute positioning, and layering
to recreate the target shape without images or SVGs.
        `.trim(),
        date: 'Last updated: Jan 2026',
        version: 'v1.1.0',
        tags: ['Web Development', 'HTML', 'CSS'],
        youtube: 'https://cssbattle.dev/play/jlB7i2EIFoWvji8scttj',
        zipFile: 'assets/zip-files/cssBattle/02 - p2.rar',
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Battle 1</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div>
        <div class="inside-circle"></div>
        <div class="outer-circle"></div>
    </div>
</body>
</html>
        `.trim(),
        css: `
:root {
    --bg: #D5ACAD;
    --darken_brown: #401C1D;
    --yellow: #F4DA64;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: var(--bg);
}

div:not(.inside-circle, .outer-circle) {
    width: 200px;
    height: 200px;
    background: #dd6b4d;
    transform: translateY(-8px);
    border-radius: 50%;
    background-color: var(--darken_brown);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: relative;
}

.inside-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--yellow);
    position: relative;
    z-index: 1;
}

.outer-circle {
    width: 62.5px;
    height: 40px;
    border-radius: 50%;
    background: var(--darken_brown);
    position: absolute;
    bottom: 40px;
    z-index: 2;
}
        `.trim()
    },

    // ═══════════════════════════════════════════════════════════════
    // P3 — Percentage
    // ═══════════════════════════════════════════════════════════════
    'p3': {
        id: 'p3',
        title: 'CSS Battle – Percentage Symbol Challenge',
        description: `
CSS Battle challenge built using pure HTML and CSS.

The percentage symbol is created using basic div elements,
skew transforms, border-radius, and positioning.
All shapes are styled without images, SVGs, or JavaScript.
        `.trim(),
        date: 'Last updated: Jan 2026',
        version: 'v1.1.0',
        tags: ['Web Development', 'HTML', 'CSS'],
        youtube: 'https://cssbattle.dev/play/128CkPR5NAg3Cx2nUEYj',
        zipFile: 'assets/zip-files/cssBattle/03 - p3.rar',
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Percentage</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="symbol"></div>
    <div class="circle"></div>
    <div class="circle c"></div>
</body>
</html>
        `.trim(),
        css: `
:root {
    --bg: #4a9a86;
    --obj-colors: #f7cb71;
}

body {
    background-color: var(--bg);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.symbol {
    width: 64px;
    height: 220px;
    background: var(--obj-colors);
    transform: skew(-20deg) translateX(-3px) translateY(-8px);
    position: relative;
    opacity: 1;
}

.circle {
    width: 100px;
    height: 120px;
    position: absolute;
    border-radius: 50%;
    top: 40px;
    left: 12.5%;
    background: var(--obj-colors);

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--bg);
        width: 20px;
        height: 60px;
    }
}

.circle.c {
    top: unset;
    bottom: 40px;
    left: unset;
    right: 12.5%;
    background: var(--obj-colors);
}
        `.trim()
    },

    // ═══════════════════════════════════════════════════════════════
    // P4 — Sticks Reflection
    // ═══════════════════════════════════════════════════════════════
    'p4': {
        id: 'p4',
        title: 'CSS Battle – Sticks Reflection Challenge',
        description: `
CSS Battle challenge using a single HTML element.

The design uses -webkit-box-reflect for mirroring,
and ::before / ::after pseudo-elements with borders
and transforms to create circular shapes.
All visuals are built using pure CSS only.
        `.trim(),
        date: 'Last updated: Jan 2026',
        version: 'v1.1.0',
        tags: ['Web Development', 'HTML', 'CSS'],
        zipFile: 'assets/zip-files/cssBattle/04 - p4.rar',
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sticks</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="project-view">
        <div class="p"></div>
    </div>
</body>
</html>
        `.trim(),
        css: `
:root {
    --bg: #B6EBE7;
    --sticks-bg: #5E2BB7;
    --circled-bg: #9382E4;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: var(--bg);
}

.project-view {
    width: 400px;
    height: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
}

.p {
    position: absolute;
    left: 10px;
    bottom: 0px;
    width: 30px;
    height: 120px;
    background: var(--sticks-bg);
    -webkit-box-reflect: right 320px;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        border: 30px solid var(--circled-bg);
        border-bottom: 30px solid transparent;
        border-right: 30px solid transparent;
        border-radius: 50%;
    }

    &::before {
        top: -70px;
        left: 5px;
        transform: rotate(45deg) translateX(10.5px) translateY(17.5px);
    }

    &::after {
        top: -30px;
        left: 65px;
        transform: rotate(-135deg) translateX(10.5px) translateY(17.5px);
        border: 30px solid var(--circled-bg);
    }
}
        `.trim()
    },

    // ═══════════════════════════════════════════════════════════════
    // P5 — Advanced Reflection
    // ═══════════════════════════════════════════════════════════════
    'p5': {
        id: 'p5',
        title: 'CSS Battle – Sticks Reflection Challenge',
        description: `
CSS Battle challenge using a single HTML element.

The design uses -webkit-box-reflect for mirroring,
and ::before / ::after pseudo-elements with borders
and transforms to create circular shapes.
All visuals are built using pure CSS only.
        `.trim(),
        date: 'Last updated: Jan 2026',
        version: 'v1.1.0',
        tags: ['Web Development', 'HTML', 'CSS'],
        youtube: 'https://cssbattle.dev/play/IelG3AfXdK0yZrjmfuVV',
        zipFile: 'assets/zip-files/cssBattle/05 - p5.rar',
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sticks</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="project-view">
        <div class="p"></div>
    </div>
</body>
</html>
        `.trim(),
        css: `
:root {
    --bg: #B6EBE7;
    --sticks-bg: #5E2BB7;
    --circled-bg: #9382E4;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: var(--bg);
}

.project-view {
    width: 400px;
    height: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
}

.p {
    position: absolute;
    left: 10px;
    bottom: 0px;
    width: 30px;
    height: 120px;
    background: var(--sticks-bg);
    -webkit-box-reflect: right 320px;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        border: 30px solid var(--circled-bg);
        border-bottom: 30px solid transparent;
        border-right: 30px solid transparent;
        border-radius: 50%;
    }

    &::before {
        top: -70px;
        left: 5px;
        transform: rotate(45deg) translateX(10.5px) translateY(17.5px);
    }

    &::after {
        top: -30px;
        left: 65px;
        transform: rotate(-135deg) translateX(10.5px) translateY(17.5px);
        border: 30px solid var(--sticks-bg);
        border-bottom: 30px solid transparent;
        border-right: 30px solid transparent;
    }
}
        `.trim()
    },

    // ═══════════════════════════════════════════════════════════════
    // P6 — Polygon (HTML with inline <style>)
    // ═══════════════════════════════════════════════════════════════
    'p6': {
        id: 'p6',
        title: 'CSS Battle – Polygon Shape Challenge',
        description: `
CSS Battle challenge using a single HTML element and pure CSS.

The design relies on nested universal selectors and
clip-path: polygon() to construct a complex geometric shape.

All visuals are built using only CSS without extra elements.
        `.trim(),
        date: 'Last updated: Feb 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Clip-Path'],
        youtube: 'https://cssbattle.dev/play/OLQMoYRrSGz0ugFpz8AE',
        zipFile: 'assets/zip-files/cssBattle/06 - p6.rar',
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Polygon Shape</title>
    <style>
      *{
        background:#2F434E;
        *{
          background:#6AC09E;
          margin:30 80;
          clip-path:polygon(
            33% 25%,
            66.5% 0%,
            66.5% 25%,
            100% 50%,
            66.5% 75%,
            66.5% 100%,
            33.5% 75%,
            33.5% 25%,
            0% 50%,
            33% 75%,
            0% 100%,
            0% 0%
          )
        }
      }
</style>
</head>
<body>
</body>
</html>
        `.trim()
    },

    // ═══════════════════════════════════════════════════════════════
    // P7 — Burger Layers (minified)
    // ═══════════════════════════════════════════════════════════════
    'p7': {
        id: 'p7',
        title: 'CSS Battle – Burger Layers Challenge',
        description: `
CSS Battle challenge recreating a layered burger-like structure
using pure CSS and minimal HTML.

The design depends on:
- border-block for thick horizontal bars
- border-radius for rounded middle section
- box-shadow for side extensions
- nested universal selectors for compact structure

No images. No extra elements. Just CSS precision.
        `.trim(),
        date: 'Last updated: Feb 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Box-Shadow', 'CSS Battle'],
        youtube: 'https://cssbattle.dev/play/mnsHaKqrtDHd7cphTh0c',
        zipFile: 'assets/zip-files/cssBattle/07 - p7.rar',
        html: `<p><style>*{background:#F7CB71;color:7C3219;+*{border-block:32q solid;margin:90 140;border-radius:32q}}p{padding:20+60;margin:10-0;box-shadow:0 95q,0-95q,0 0 0 22q inset}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P8 — Reflect Shape (minified)
    // ═══════════════════════════════════════════════════════════════
    'p8': {
        id: 'p8',
        title: 'CSS Battle – Reflect Shape Challenge',
        description: `
CSS Battle challenge recreating a mirrored curved shape
using pure CSS and minimal markup.

The design depends on:
- asymmetric border-radius
- thick border manipulation
- -webkit-box-reflect for mirroring
- compact nested universal selector trick

No images. No extra elements.
Just CSS creativity and precision.
        `.trim(),
        date: 'Last updated: Feb 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Border', 'CSS Battle'],
        youtube: 'https://cssbattle.dev/play/6NrSWJ0sN3E4OGFcbeun',
        zipFile: 'assets/zip-files/cssBattle/08 - p8.rar',
        html: `<style>*{background:#B5BD49;*{border:solid #11092D;background:none;border-radius:0 212q 0 0;margin:50 100;border-width:106q 106q 0 0;-webkit-box-reflect:left -212q;}}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P9 — Mirrored Arc
    // ═══════════════════════════════════════════════════════════════
    'p9': {
        id: 'p9',
        title: 'CSS Battle – Mirrored Arc Shape',
        description: `
CSS Battle challenge recreating a symmetric double-arc shape
using pure CSS and minimal markup.

The design depends on:
- large border-radius curves
- thick border trick
- -webkit-box-reflect for mirroring
- precision spacing using q units

No images. No extra elements.
Just CSS creativity and geometry control.
        `.trim(),
        date: 'Last updated: Feb 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Border Radius', 'CSS Battle'],
        youtube: 'https://cssbattle.dev/play/aRotJJFSZF9yoX4o8pZ8',
        zipFile: 'assets/zip-files/cssBattle/09 - p9.rar',
        html: `<p><a><style>*{background:#B6EBE7;border-radius:212q 0 0;+*,a{background:#5370D9;margin:50 20 50 180}+*{-webkit-box-reflect:left -42q}}p,a{position:fixed;padding:50;margin:100;}a{padding:15;margin:20}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P10 — Five Pills
    // ═══════════════════════════════════════════════════════════════
    'p10': {
        id: 'p10',
        title: 'CSS Battle – Five Pill Layout',
        description: `
CSS recreation of a minimal geometric layout featuring five vertical pill shapes.

The design uses:
- Flexbox layout
- Precise spacing
- Large border-radius for capsule shapes
- Clean color contrast
- Pure CSS (no images)

The layout consists of:
- 3 top capsules
- 2 bottom capsules
- Centered composition
        `.trim(),
        date: 'Last updated: Feb 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Flexbox', 'Layout Design', 'CSS Battle'],
        youtube: 'https://cssbattle.dev/play/FpqYKVfnMOUDjVocqaVf',
        zipFile: 'assets/zip-files/cssBattle/10 - p10.zip',
        html: `<style>*{background:#4C4C6B;*{margin:160 60 50 280;border-radius:36q;color:FAE29E;box-shadow:-117q 0,-233q 0,0-116q,-116q -116q,-233q -116q}}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P11 — Geometric Flag
    // ═══════════════════════════════════════════════════════════════
    'p11': {
        id: 'p11',
        title: 'CSS Battle – Geometric Flag',
        description: `
CSS recreation of a geometric flag-like shape using pure HTML and CSS.

The design focuses on:
- CSS pseudo-elements
- Absolute positioning
- Precise dimensions and offsets
- Layered geometric shapes
- CSS box reflection
- Minimal HTML structure
- Pure CSS without images

The composition consists of:
- A vertical dark pole
- A white geometric flag
- Dark borders and decorative sections
- A mirrored reflection below the main shape
        `.trim(),
        date: 'Last updated: Feb 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'CSS Shapes', 'CSS Battle'],
        youtube: 'https://cssbattle.dev/play/cubFEvfArqYmYhs3IHF4',
        zipFile: 'assets/zip-files/cssBattle/11 - p11.zip',
        html: `<div><div class=f></div><div class=s></div></div><style>body{background:#7253BC;display:grid;place-items:center;}.f{position:relative;top:-15px;width:100px;height:60px;background:#fff}.f:before{content:'';position:absolute;top:-30px;left:-20px;width:20px;height:230px;background:#391B1B}.f:after{content:'';position:absolute;top:-20px;left:0;width:60px;height:20px;background:#391B1B;-webkit-box-reflect:below 60px}.s{position:relative;top:-75px;left:60px;width:50px;height:80px;background:#fff}.s:before{content:'';position:absolute;top:0;left:-20px;width:80px;height:20px;background:#391B1B;-webkit-box-reflect:below 60px}.s:after{content:'';position:absolute;left:40px;width:20px;height:100px;background:#391B1B}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P12 — Cross & Circles
    // ═══════════════════════════════════════════════════════════════
    'p12': {
        id: 'p12',
        title: 'CSS Battle – Cross & Circles',
        description: `
CSS recreation of a geometric circular composition using pure HTML and CSS.

The design focuses on:
- CSS pseudo-elements
- Absolute positioning
- CSS borders
- Border-radius
- Layered geometric shapes
- CSS box reflection
- Minimal HTML structure
- Pure CSS without images
        `.trim(),
        date: 'Last updated: Sep 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'CSS Shapes', 'Border-radius', 'CSS Reflection', 'CSS Battle'],
        youtube: 'https://cssbattle.dev/play/9sCBYHjLMHJ372p55cz7',
        zipFile: 'assets/zip-files/cssBattle/11 - p11.zip',
        html: `<div class="parent"><div class="cross"></div><div class="circle"></div></div><style>:root{--bg:#F8B140;--it-clr:#465792;}body{display:flex;justify-content:center;align-items:center;background-color:var(--bg);}.parent{border-radius:50%;background:transparent;width:190px;height:190px;display:flex;justify-content:center;align-items:center;overflow:hidden;border:50px solid var(--bg);z-index:99;position:relative;}.cross{position:relative;&::before,&::after{content:'';position:absolute;top:0;left:0;background-color:var(--it-clr);z-index:2}&::before{left:-15;top:-40;width:30;height:80;}&::after{width:80;height:30;left:-40;top:-15}}.circle{position:relative;z-index:1;&::before,&::after{content:'';position:absolute;top:0;left:0;width:50;height:50;border-radius:50%;}&::before{top:-35;left:-130;border:10px solid transparent;border-right:10px solid var(--it-clr);border-top:10px solid var(--it-clr);transform:rotate(45deg);-webkit-box-reflect: right 64px;}&::after{top:-35;left:60;border:10px solid transparent;border-right:10px solid var(--it-clr);border-top:10px solid var(--it-clr);transform:rotate(-135deg);-webkit-box-reflect:right 65px;}}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P13 — Four Leaf Shape
    // ═══════════════════════════════════════════════════════════════
    'p13': {
        id: 'p13',
        title: 'CSS Battle – Four Leaf Shape',
        description: `
CSS recreation of a four-leaf geometric shape using pure HTML and CSS.

The design uses:
- CSS pseudo-elements
- Absolute positioning
- Border-radius for curved shapes
- Precise spacing and dimensions
- CSS variables for colors
- Minimal HTML structure

The composition consists of:
- Four symmetrical leaf-like shapes
- A centered cross-shaped gap
- Two CSS elements with multiple pseudo-elements
- Pure CSS with no images or SVG
        `.trim(),
        date: 'Last updated: Sep 15, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'Border-radius', 'CSS Shapes', 'CSS Battle'],
        youtube: 'https://cssbattle.dev/play/5ZezM7kuEUF3qoAOjCIx',
        zipFile: 'assets/zip-files/cssBattle/13 - p13.zip',
        html: `<div class="fs"></div><div class="ss"></div><style>:root{--bg:#993576;--i:#5ADAB8}body{display:flex;align-items:center;justify-content:center;background:var(--bg)}.fs{position:relative}.fs:before,.fs:after{content:'';position:absolute;top:0;left:0;width:110px;height:110px;background:var(--i)}.fs:before{top:-120px;left:-120px;border-radius:50% 50% 0 50%}.fs:after{top:10px;left:10px;border-radius:0 50% 50% 50%}.ss{position:relative}.ss:before,.ss:after{content:'';position:absolute;top:0;left:0;width:110px;height:110px;background:var(--i);border-radius:70px 0 70px 0}.ss:before{top:10px;left:-120px}.ss:after{top:-120px;left:10px}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P14 — Geometric Arch
    // ═══════════════════════════════════════════════════════════════
    'p14': {
        id: 'p14',
        title: 'CSS Battle – Geometric Arch',
        description: `
CSS recreation of a simple geometric arch using pure CSS.

The design uses:
- CSS pseudo-elements
- Absolute positioning
- Precise dimensions and spacing
- Border-radius for the curved shape
- Layered geometric shapes
- Minimal HTML structure

The composition consists of:
- A rounded arch
- A rectangular top section
- A centered outlined opening
        `.trim(),
        date: 'Last updated: Sep 17, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'CSS Shapes', 'CSS Battle'],
        youtube: 'https://cssbattle.dev/play/4p0BAlG4T8ddxGUbcOhn',
        zipFile: 'assets/zip-files/cssBattle/14 - p14.zip',
        html: `<div></div><style>body{display:flex;justify-content:center;align-items:center;background:#FAE29E}div{width:230px;height:100px;background:#743F3F;border-radius:50px 50px 0 0;position:relative}div:before,div:after{content:'';position:absolute}div:before{background:#743F3F;width:120px;height:30px;top:-40px;left:55px}div:after{background:#FAE29E;width:100px;height:50px;border:10px solid #743F3F;top:60px;left:55px;z-index:3}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P15 — Geometric Temple
    // ═══════════════════════════════════════════════════════════════
    'p15': {
        id: 'p15',
        title: 'CSS Battle – Geometric Temple',
        description: `
CSS recreation of a simple geometric temple using pure HTML and CSS.

The design uses:
- CSS triangles
- Pseudo-elements
- Absolute positioning
- CSS box-reflect
- Precise dimensions and spacing
- Minimal HTML structure

The composition consists of:
- A large triangular roof
- Four vertical columns
- A wide rectangular base
- A clean geometric layout
        `.trim(),
        date: 'Last updated: Sep 17, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'CSS Shapes', 'CSS Battle'],
        zipFile: 'assets/zip-files/cssBattle/15 - p15.zip',
        html: `<div class="t"></div><div class="c"></div><style>body{display:flex;justify-content:center;align-items:center;background:#7EC3E8}.t{width:0;border-top:100px solid transparent;border-bottom:100px solid #333;border-left:100px solid transparent;border-right:100px solid transparent;position:relative;top:-110px}.t:before,.t:after{content:'';position:absolute;width:10px;height:80px;background:#333;top:100px}.t:before{left:25px;-webkit-box-reflect:right 20px}.t:after{left:-35px;-webkit-box-reflect:left 20px}.c{width:220px;height:40px;position:absolute;top:220px;background:#333}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P16 — Geometric Hook
    // ═══════════════════════════════════════════════════════════════
    'p16': {
        id: 'p16',
        title: 'CSS Battle – Geometric Hook',
        description: `
CSS recreation of a geometric hook-like shape using pure HTML and CSS.

The design uses:
- CSS pseudo-elements
- Absolute positioning
- Border-radius
- Precise dimensions and spacing
- CSS transforms
- Minimal HTML structure
        `.trim(),
        date: 'Last updated: Sep 18, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'Border-radius', 'CSS Shapes', 'CSS Battle'],
        zipFile: 'assets/zip-files/cssBattle/16 - p16.zip',
        html: `<div class="o"><div class="i"></div></div><style>body{display:flex;justify-content:center;align-items:center;background:#4C4C6B}.o{width:120px;height:180px;background:#4C4C6B;border:20px solid #FAE29E;border-radius:40px;position:relative}.o:before{content:'';position:absolute;top:-20px;left:83.7%;width:50px;height:220px;background:#4C4C6B}.i{position:absolute;width:160px;height:20px;background:#FAE29E;top:50%;left:calc(50% + 2px);transform:translate(-20%,-50%)}.i:after{content:'';position:absolute;top:-30px;left:calc(100% - 20px);width:20px;height:80px;background:inherit}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P17 — Envelope Icon
    // ═══════════════════════════════════════════════════════════════
    'p17': {
        id: 'p17',
        title: 'CSS Battle – Envelope Icon',
        description: `
CSS recreation of a flat envelope icon inside a circular badge using pure HTML and CSS.

The design uses:
- A circle shape
- CSS triangles (borders trick) for the envelope flap
- Absolute positioning
- Layered shapes to build the envelope silhouette
- Minimal HTML structure
        `.trim(),
        date: 'Last updated: Sep 19, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'CSS Triangles', 'Positioning', 'CSS Shapes', 'CSS Battle'],
        youtube: 'https://cssbattle.dev/play/LXVlYbdUHfOS5mrqkEh0',
        zipFile: 'assets/zip-files/cssBattle/17 - p17.zip',
        html: `<div class="o"><div class="i"></div></div><style>body{display:flex;justify-content:center;align-items:center;background:#485993}.o{width:250px;height:250px;background:#FFA173;border-radius:50%;position:relative;overflow:hidden}.o::before,.o::after{content:'';position:absolute}.o::before{top:50%;left:50%;transform:translate(-50%,-50%) rotateX(180deg);width:0;height:10px;border-top:20px solid #485993;border-right:90px solid #485993;border-left:90px solid #485993;border-bottom:50px solid #FFA173}.o::after{top:15px;left:35px;border-top:20px solid #FFA173;border-right:90px solid transparent;border-left:90px solid transparent;border-bottom:50px solid #485993}.i{position:absolute;top:50%;left:25px;transform:translateY(-50%);width:10px;height:80px;background:#485993;-webkit-box-reflect:right 180px}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P18 — Geometric H
    // ═══════════════════════════════════════════════════════════════
    'p18': {
        id: 'p18',
        title: 'CSS Battle – Geometric H',
        description: `
CSS recreation of a geometric H-like shape using pure HTML and CSS.

The design uses:
- CSS pseudo-elements
- Absolute positioning
- Precise dimensions and spacing
- CSS box-reflect
- Layered rectangular shapes
- Minimal HTML structure
        `.trim(),
        date: 'Last updated: Sep 20, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'CSS Shapes', 'CSS Battle'],
        zipFile: 'assets/zip-files/cssBattle/18 - p18.zip',
        html: `<div></div><style>body{display:flex;justify-content:center;align-items:center;background:#51A499}div{position:relative;top:105px;left:-110px;width:60px;height:10px;background:#FEE190;-webkit-box-reflect:right 160px}div:before,div:after{content:'';position:absolute;top:0;left:0;background:#FEE190}div:before{top:-200px;left:-180px;width:40px;height:200px;-webkit-box-reflect:right 160px}div:after{width:120px;height:40px;top:-180px;left:20px;-webkit-box-reflect:below 80px}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P19 — Geometric B
    // ═══════════════════════════════════════════════════════════════
    'p19': {
        id: 'p19',
        title: 'CSS Battle – Geometric B',
        description: `
CSS recreation of a geometric B-like shape using pure HTML and CSS.

The design uses:
- CSS pseudo-elements
- Absolute positioning
- Border-radius
- Layered shapes
- Precise dimensions and spacing
- Minimal HTML structure
        `.trim(),
        date: 'Last updated: Sep 22, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'Border-radius', 'CSS Shapes', 'CSS Battle'],
        zipFile: 'assets/zip-files/cssBattle/19 - p19.zip',
        html: `<div class="o"><div class="i"></div></div><style>body{display:flex;justify-content:center;align-items:center;background:#8E7B3B}.o{width:30px;height:200px;position:relative}.o:before,.o:after{content:'';position:absolute;width:75px;height:80px;border-radius:50%;border:10px solid #463C1D}.o:before{border-right:10px solid #8E7B3B;left:-50px}.o:after{border-left:10px solid #8E7B3B;right:-50px;bottom:0}.i{background:#463C1D;width:100%;height:100%;position:relative;z-index:9}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P20 — Geometric Capsule
    // ═══════════════════════════════════════════════════════════════
    'p20': {
        id: 'p20',
        title: 'CSS Battle – Geometric Capsule',
        description: `
CSS recreation of a geometric capsule-like shape using pure HTML and CSS.

The design uses:
- CSS pseudo-elements
- Border-radius
- Absolute positioning
- CSS box-reflect
- Precise dimensions and spacing
- Minimal HTML structure
        `.trim(),
        date: 'Last updated: Sep 23, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'Border-radius', 'CSS Shapes', 'CSS Battle'],
        zipFile: 'assets/zip-files/cssBattle/20 - p20.zip',
        html: `<div></div><style>body{background:#8E3B66;display:grid;place-items:center}div{width:20px;height:100px;background:#F5A7A7;border:50px solid #F5A7A7;border-radius:60px;position:relative}div:before,div:after{content:'';position:absolute}div:before{top:50%;left:-50px;transform:translateY(-50%);width:20px;height:40px;background:#8E3B66;-webkit-box-reflect:right 80px}div:after{top:calc(50% - 30px);left:50%;transform:translate(-50%,-50%);width:20px;height:40px;background:#8E3B66;-webkit-box-reflect:below 20px}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P21 — Geometric Plus
    // ═══════════════════════════════════════════════════════════════
    'p21': {
        id: 'p21',
        title: 'CSS Battle – Geometric Plus',
        description: `
CSS recreation of a geometric plus-like shape using pure HTML and CSS.

The design uses:
- CSS pseudo-elements
- Absolute positioning
- Precise dimensions and spacing
- Layered geometric shapes
- Minimal HTML structure
        `.trim(),
        date: 'Last updated: Sep 24, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'CSS Shapes', 'CSS Battle'],
        zipFile: 'assets/zip-files/cssBattle/21 - p21.zip',
        html: `<div class="o"><div class="i"></div></div><style>body{display:grid;place-items:center;background:#FADE8B}.o{width:80px;height:240px;background:#3A4B86;position:relative}.o:before{content:'';width:240px;height:81px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:inherit}.o:after{content:'';position:absolute;top:0;left:100px;width:60px;height:60px;background:inherit}.i{width:60px;height:60px;background:inherit;position:absolute;bottom:0;left:-80px}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P22 — Trash Can
    // ═══════════════════════════════════════════════════════════════
    'p22': {
        id: 'p22',
        title: 'CSS Battle – Geometric Trash Can',
        description: `
CSS recreation of a geometric trash can using pure HTML and CSS.

The design uses:
- CSS pseudo-elements
- Absolute positioning
- Border-radius
- CSS box-reflect
- Precise dimensions and spacing
- Minimal HTML structure
        `.trim(),
        date: 'Last updated: Sep 26, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'Border-radius', 'CSS Shapes', 'CSS Battle'],
        zipFile: 'assets/zip-files/cssBattle/22 - p22.zip',
        html: `<div class="o"><div class="i"></div></div><style>body{display:grid;place-items:center;background:#FFF8E1}.o{width:140px;height:180px;transform:translateY(20px);background:#9676CF;border-bottom-left-radius:30px;border-bottom-right-radius:30px;position:relative}.o:before{content:'';position:absolute;top:-20px;left:-16px;width:169px;height:20px;background:#7454B4;border-radius:20px;z-index:3}.i{position:absolute;top:-40px;left:50%;transform:translate(-50%);background:#9676CF;width:70px;height:40px;border-radius:45px}.i:before,.i:after{content:'';position:absolute;top:70px;left:50%;transform:translateX(-50%);height:120px;width:20px;background:#7454B4;border-radius:20px}.i:before{left:-5px;-webkit-box-reflect:right 60px}.i:after{left:calc(50% + .5px)}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P23 — Geometric Container
    // ═══════════════════════════════════════════════════════════════
    'p23': {
        id: 'p23',
        title: 'CSS Battle – Geometric Container',
        description: `
CSS recreation of a minimal geometric container using pure HTML and CSS.

The design uses:
- CSS pseudo-elements
- Absolute positioning
- Border-radius
- CSS box-reflect
- Precise dimensions and spacing
- Minimal HTML structure
        `.trim(),
        date: 'Last updated: Sep 27, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'Border-radius', 'CSS Shapes', 'CSS Battle'],
        zipFile: 'assets/zip-files/cssBattle/23 - p23.zip',
        html: `<div></div><style>body{display:grid;place-items:center;background:#747992}div{width:200px;height:100px;background:#EED9D9;border-bottom-left-radius:49px;border-bottom-right-radius:50px;position:relative}div:before,div:after{content:'';position:absolute;top:0;left:0}div:before{width:160px;height:25px;background:#394257;transform:translateX(-50%);left:50%}div:after{width:20px;height:20px;background:#747992;border-radius:50%;top:35px;left:20px;-webkit-box-reflect:right 120px}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P24 — Alarm Clock
    // ═══════════════════════════════════════════════════════════════
    'p24': {
        id: 'p24',
        title: 'CSS Battle – Geometric Alarm Clock',
        description: `
CSS recreation of a geometric alarm clock using pure HTML and CSS.

The design uses:
- CSS pseudo-elements
- Absolute positioning
- Border-radius
- CSS outline
- CSS transforms and rotation
- Precise dimensions and spacing
- Minimal HTML structure
        `.trim(),
        date: 'Last updated: Sep 27, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'Border-radius', 'CSS Shapes', 'CSS Transforms', 'CSS Battle'],
        zipFile: 'assets/zip-files/cssBattle/24 - p24.zip',
        html: `<div class="o"><div class="i"></div></div><style>body{display:grid;place-items:center;background:#D5A06C}.o{width:140px;height:140px;background:inherit;border-radius:50%;border:20px solid #1E2C5C;outline:10px solid #D5A06C;z-index:2;position:relative}.o:before,.o:after{content:'';position:absolute;z-index:-1;top:-40px;width:20px;height:20px;border-radius:50%;border:20px solid #1E2C5C;left:-20px}.o:after{right:-20px;left:unset}.i{position:absolute;top:calc(100% - 2px);left:6px;rotate:45deg;width:20px;height:40px;background:#1E2C5C}.i:after{content:'';position:absolute;top:-76px;right:-76px;width:21px;height:40px;background:#1E2C5C;rotate:90deg}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P25 — Geometric D
    // ═══════════════════════════════════════════════════════════════
    'p25': {
        id: 'p25',
        title: 'CSS Battle – Geometric D',
        description: `
CSS recreation of a geometric D-like shape using pure HTML and CSS.

The design uses:
- CSS pseudo-elements
- Absolute positioning
- Border-radius
- CSS box-reflect
- Precise dimensions and spacing
- Minimal HTML structure
        `.trim(),
        date: 'Last updated: Sep 28, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'Border-radius', 'CSS Shapes', 'CSS Battle'],
        zipFile: 'assets/zip-files/cssBattle/25 - p25.zip',
        html: `<div class="o"><div class="i"></div></div><style>body{display:grid;place-items:center}.o{position:relative;z-index:-1;width:50px;height:100px;border:30px solid #000;left:95px;border-top-left-radius:75px;border-bottom-left-radius:75px}.o:before,.o:after{content:'';position:absolute;z-index:9}.o:before{right:0;top:0;width:10px;height:130px;background:#fff}.o:after{right:-60px;bottom:-30px;width:30px;height:30px;background:#000}.i{position:absolute;top:50%;left:calc(50% - 120px);transform:translate(-50%,-50%);width:90px;height:30px;background:#000;-webkit-box-reflect:left 20px}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P26 — Geometric Bars
    // ═══════════════════════════════════════════════════════════════
    'p26': {
        id: 'p26',
        title: 'CSS Battle – Geometric Bars',
        description: `
CSS recreation of a geometric bar pattern using pure HTML and CSS.

The design uses:
- CSS pseudo-elements
- Box-shadow
- Absolute positioning
- Precise dimensions and spacing
- Minimal HTML structure
        `.trim(),
        date: 'Last updated: Sep 29, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Box-shadow', 'Positioning', 'CSS Shapes', 'CSS Battle'],
        zipFile: 'assets/zip-files/cssBattle/26 - p26.zip',
        html: `<div class="o"></div><style>body{margin:0;background:#C0D6E7}.o{position:absolute;top:0;left:50%;transform:translateX(-50%);width:270px;height:177px;background:#CC5360;box-shadow:0 0 0 0 #CC5360}.o:before{content:'';position:absolute;left:0;top:0;width:36px;height:132px;background:#2D3464;box-shadow:234px 0 #2D3464}.o:after{content:'';position:absolute;left:63px;top:15px;width:144px;height:18px;background:#CC5360;box-shadow:0 36px #CC5360,0 72px #CC5360,0 108px #CC5360}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P27 — Geometric U
    // ═══════════════════════════════════════════════════════════════
    'p27': {
        id: 'p27',
        title: 'CSS Battle – Geometric U Shape',
        description: `
CSS recreation of a geometric U-shaped design using pure HTML and CSS.

The design uses:
- CSS pseudo-elements
- Absolute positioning
- Border-radius
- CSS box-reflect
- Layered shapes
- Precise dimensions and spacing
- Minimal HTML structure
        `.trim(),
        date: 'Last updated: Sep 30, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'Border-radius', 'CSS Shapes', 'CSS Box Reflect', 'CSS Battle'],
        youtube: 'https://cssbattle.dev/play/F8dyF0XEp3g1Ff4mG90c',
        zipFile: 'assets/zip-files/cssBattle/27 - p27.zip',
        html: `<div></div><style>body{display:grid;place-items:center;background:#F8F5F1;position:relative}body:before{content:'';position:absolute;width:100px;height:120px;background:transparent;border:20px solid #FCC9E3;border-top:20px solid transparent;border-bottom-left-radius:80px;border-bottom-right-radius:80px}div{width:80px;height:100px;border-bottom-left-radius:80px;border-bottom-right-radius:80px;border:10px solid #4355CC;border-top:10px solid transparent;position:relative}div:before{content:'';position:absolute;top:-40px;left:-40px;width:20px;height:20px;border:10px solid #4355CC;-webkit-box-reflect:right 80px;background:#F8F5F1}div:after{content:'';position:absolute;top:-10px;left:-40px;height:130px;width:140px;background:transparent;border-bottom-left-radius:80px;border-bottom-right-radius:80px;border:10px solid #4355CC;border-top:10px solid transparent}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P28 — Cassette Tape
    // ═══════════════════════════════════════════════════════════════
    'p28': {
        id: 'p28',
        title: 'CSS Battle – Cassette Tape',
        description: `
CSS recreation of a cassette tape using pure HTML and CSS.

The design uses:
- CSS pseudo-elements
- Absolute positioning
- Border-radius
- CSS box-reflect
- Layered geometric shapes
- Precise sizing and positioning
- Minimal HTML structure
        `.trim(),
        date: 'Last updated: Oct 1, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'Border-radius', 'CSS Shapes', 'CSS Box Reflect', 'CSS Battle'],
        zipFile: 'assets/zip-files/cssBattle/28 - p28.zip',
        html: `<p><i></i></p><style>body{display:grid;place-items:center;background:#7DCB61}p{width:270px;height:190px;background:#454545;border-radius:10px;position:relative}p:before{content:'';position:absolute;top:15px;left:15px;width:calc(100% - 30px);height:100px;background:#D9D9D9}p:after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:40px;height:10px;background:#454545;border-top:20px solid #727272;border-bottom:20px solid #727272;border-right:55px solid #727272;border-left:55px solid #727272}i{position:absolute;top:50%;left:50%;transform:translate(-50%,calc(-50% - 30px));width:150px;height:50px;background:#454545;border-radius:50px}i:before{content:'';position:absolute;top:5px;left:5px;width:40px;height:40px;border-radius:50%;background:#D9D9D9;-webkit-box-reflect:right 60px}</style>`
    },

    // ═══════════════════════════════════════════════════════════════
    // P29 — Burger
    // ═══════════════════════════════════════════════════════════════
    'p29': {
        id: 'p29',
        title: 'CSS Battle – Burger',
        description: `
CSS recreation of a simple burger-like geometric shape using pure HTML and CSS.

The design uses:
- CSS pseudo-elements
- Absolute positioning
- Border-radius
- Layered shapes
- Precise sizing
- Minimal HTML structure
- Pure CSS without images or SVG
        `.trim(),
        date: 'Last updated: Oct 4, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'Border-radius', 'CSS Shapes', 'CSS Battle'],
        zipFile: 'assets/zip-files/cssBattle/29 - p29.zip',
        html: `<div></div><style>body{display:grid;place-items:center;background:#4C7A6F}div{width:175px;height:25px;background:#D6B96F;position:relative;transform:translateY(-5px)}div:before{content:"";position:absolute;width:100%;height:38px;background:#D6B96F;border-radius:100% 100% 0 0/100% 100% 0 0;top:-50px}div:after{content:"";position:absolute;width:100%;height:25px;background:#ddd;top:-38px}</style>`
    },
    // ═══════════════════════════════════════════════════════════════
    // P30 — Reflection Dots & Cross
    // ═══════════════════════════════════════════════════════════════
    'p30': {
        id: 'p30',
        title: 'CSS Battle – Reflection Dots & Cross',
        description: `
CSS recreation of a composition featuring mirrored dots and a cross-like shape using pure HTML and CSS.

The design uses:
- CSS pseudo-elements
- Border-radius for circular dots
- -webkit-box-reflect for mirroring dots
- Absolute positioning
- Layered geometric shapes
- Minimal HTML structure
- Pure CSS without images or SVG
        `.trim(),
        date: 'Last updated: Oct 5, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'Border-radius', 'CSS Box Reflect', 'CSS Battle'],
        zipFile: 'assets/zip-files/cssBattle/30 - p30.zip',
        html: `<p></p><i></i><style>body{display:flex;justify-content:center;align-items:center;gap:100px;background:#F7CB71}i{width:100px;height:100px;position:relative}& i:before,& i:after{content:'';position:absolute;top:-10px;left:10px;width:50px;height:50px;background:#4D52D0;border-radius:50%;-webkit-box-reflect:below 20px}& i:after{left:80px;background:#D16161}p{background:#D16161;width:60px;height:120px;position:relative}p:before{content:'';position:absolute;top:30px;left:-30px;width:120px;height:60px;background:#D16161}</style>`
    },
    // ═══════════════════════════════════════════════════════════════
    // P31 — Geometric Hourglass
    // ═══════════════════════════════════════════════════════════════
    'p31': {
        id: 'p31',
        title: 'CSS Battle – Geometric Hourglass',
        description: `
CSS recreation of a geometric hourglass-like shape using pure HTML and CSS.

The design uses:
- CSS pseudo-elements
- Absolute positioning
- Border-radius with elliptical values
- CSS box-reflect
- Layered geometric shapes
- Precise sizing and positioning
- Minimal HTML structure
- Pure CSS without images or SVG
        `.trim(),
        date: 'Last updated: Oct 6, 2026',
        version: 'v1.0.0',
        tags: ['Web Development', 'HTML', 'CSS', 'Pseudo-elements', 'Positioning', 'Border-radius', 'CSS Box Reflect', 'CSS Battle'],
        zipFile: 'assets/zip-files/cssBattle/31 - p31.zip',
        html: `<p><i></i></p><style>body{display:grid;place-items:center;background:#E98F6B}p{width:60px;height:80px;background:#8B4646;border-right:20px solid #fff;border-left:20px solid #fff;position:relative}p i{position:absolute;width:45px;height:80px;top:0;left:-65px;background:#E98F6B;-webkit-box-reflect:right 100px}p:before,p:after{content:'';position:absolute;top:-60px;left:50%;transform:translateX(-50%);width:145px;height:40px;background:#8B4646;border-radius:50% 50% 0% 0%/100% 100% 0% 0%;border:20px solid #fff;z-index:-1}p::after{top:60px;transform:translateX(-50%) rotate(180deg)}</style>`
    }
};