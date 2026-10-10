import type { SpecimenSource } from '../../../../core/specimen-registry'

export const CSS_BATTLE_SOURCES: Record<string, SpecimenSource> = {

  // ═══════════════════════════════════════════════════════════════
  // CB-01 — Layout Blocks
  // ═══════════════════════════════════════════════════════════════
  'CB-01': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Battle 1</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <div class="parent">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
    </div>
</body>
</html>`,
    css: `:root {
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
}

div.parent .block {
    width: 30px;
    height: 30px;
    background-color: var(--darken_color);
}`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-02 — Circular Shapes
  // ═══════════════════════════════════════════════════════════════
  'CB-02': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Battle 1</title>
    <link rel="stylesheet" href="style.css">
</head>

<body style="transform: scale(0.5);">
    <div>
        <div class="inside-circle"></div>
        <div class="outer-circle"></div>
    </div>
</body>

</html>`,
    css: `:root {
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
}`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-03 — Percentage
  // ═══════════════════════════════════════════════════════════════
  'CB-03': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Percentage</title>
    <link rel="stylesheet" href="style.css">
</head>

<body style="transform: scale(0.5);">
    <div class="symbol"></div>
    <div class="circle"></div>
    <div class="circle c"></div>
</body>

</html>`,
    css: `:root {
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
}

.circle::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--bg);
    width: 20px;
    height: 60px;
}

.circle.c {
    top: unset;
    bottom: 40px;
    left: unset;
    right: 12.5%;
    background: var(--obj-colors);
}`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-04 — Sticks Reflection
  // ═══════════════════════════════════════════════════════════════
  'CB-04': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sticks</title>
    <link rel="stylesheet" href="style.css">
</head>

<body style="transform: scale(0.5);">
    <div class="project-view">
        <div class="p"></div>
    </div>
</body>

</html>`,
    css: `:root {
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
}

.p::before,
.p::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border: 30px solid var(--circled-bg);
    border-bottom: 30px solid transparent;
    border-right: 30px solid transparent;
    border-radius: 50%;
}

.p::before {
    top: -70px;
    left: 5px;
    transform: rotate(45deg) translateX(10.5px) translateY(17.5px);
}

.p::after {
    top: -30px;
    left: 65px;
    transform: rotate(-135deg) translateX(10.5px) translateY(17.5px);
    border: 30px solid var(--circled-bg);
}`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-05 — Advanced Reflection
  // ═══════════════════════════════════════════════════════════════
  'CB-05': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sticks</title>
    <link rel="stylesheet" href="style.css">
</head>

<body style="transform: scale(0.5);">
    <div class="project-view">
        <div class="p"></div>
    </div>
</body>

</html>`,
    css: `:root {
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
}

.p::before,
.p::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border: 30px solid var(--circled-bg);
    border-bottom: 30px solid transparent;
    border-right: 30px solid transparent;
    border-radius: 50%;
}

.p::before {
    top: -70px;
    left: 5px;
    transform: rotate(45deg) translateX(10.5px) translateY(17.5px);
}

.p::after {
    top: -30px;
    left: 65px;
    transform: rotate(-135deg) translateX(10.5px) translateY(17.5px);
    border: 30px solid var(--sticks-bg);
    border-bottom: 30px solid transparent;
    border-right: 30px solid transparent;
}`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-06 — Polygon Shape (inline style)
  // ═══════════════════════════════════════════════════════════════
  'CB-06': {
    stage: 'dark',
    html: `<!DOCTYPE html>
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
<body style="transform: scale(0.5);">
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-07 — Burger Layers
  // ═══════════════════════════════════════════════════════════════
  'CB-07': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Burger</title>
    <style>
      *{
        background:#F7CB71;
        color:#7C3219;
      }
      * + *{
        border-block:32q solid;
        margin:90 140;
        border-radius:32q;
      }
      p{
        padding:20 60;
        margin:10 0;
        box-shadow:0 95q, 0 -95q, 0 0 0 22q inset;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <p></p>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-08 — Reflect Shape
  // ═══════════════════════════════════════════════════════════════
  'CB-08': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Reflect Shape</title>
    <style>
      *{
        background:#B5BD49;
      }
      * *{
        border:solid #11092D;
        background:none;
        border-radius:0 212q 0 0;
        margin:50 100;
        border-width:106q 106q 0 0;
        -webkit-box-reflect:left -212q;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-09 — Mirrored Arc
  // ═══════════════════════════════════════════════════════════════
  'CB-09': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mirrored Arc</title>
    <style>
      *{
        background:#B6EBE7;
        border-radius:212q 0 0;
      }
      * + *, a{
        background:#5370D9;
        margin:50 20 50 180;
      }
      * + *{
        -webkit-box-reflect:left -42q;
      }
      p, a{
        position:fixed;
        padding:50;
        margin:100;
      }
      a{
        padding:15;
        margin:20;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <p></p>
    <a></a>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-10 — Five Pills
  // ═══════════════════════════════════════════════════════════════
  'CB-10': {
    stage: 'dark',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Five Pill Layout</title>
    <style>
      *{
        background:#4C4C6B;
      }
      * *{
        margin:160 60 50 280;
        border-radius:36q;
        color:#FAE29E;
        box-shadow:-117q 0, -233q 0, 0 -116q, -116q -116q, -233q -116q;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-11 — Geometric Flag
  // ═══════════════════════════════════════════════════════════════
  'CB-11': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Geometric Flag</title>
    <style>
      body{
        background:#7253BC;
        display:grid;
        place-items:center;
      }
      .f{
        position:relative;
        top:-15px;
        width:100px;
        height:60px;
        background:#fff;
      }
      .f:before{
        content:'';
        position:absolute;
        top:-30px;
        left:-20px;
        width:20px;
        height:230px;
        background:#391B1B;
      }
      .f:after{
        content:'';
        position:absolute;
        top:-20px;
        left:0;
        width:60px;
        height:20px;
        background:#391B1B;
        -webkit-box-reflect:below 60px;
      }
      .s{
        position:relative;
        top:-75px;
        left:60px;
        width:50px;
        height:80px;
        background:#fff;
      }
      .s:before{
        content:'';
        position:absolute;
        top:0;
        left:-20px;
        width:80px;
        height:20px;
        background:#391B1B;
        -webkit-box-reflect:below 60px;
      }
      .s:after{
        content:'';
        position:absolute;
        left:40px;
        width:20px;
        height:100px;
        background:#391B1B;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <div>
        <div class="f"></div>
        <div class="s"></div>
    </div>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-12 — Cross & Circles
  // ═══════════════════════════════════════════════════════════════
  'CB-12': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cross & Circles</title>
    <style>
      :root{
        --bg:#F8B140;
        --it-clr:#465792;
      }
      body{
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:var(--bg);
      }
      .parent{
        border-radius:50%;
        background:transparent;
        width:190px;
        height:190px;
        display:flex;
        justify-content:center;
        align-items:center;
        overflow:hidden;
        border:50px solid var(--bg);
        z-index:99;
        position:relative;
      }
      .cross{
        position:relative;
      }
      .cross::before,
      .cross::after{
        content:'';
        position:absolute;
        top:0;
        left:0;
        background-color:var(--it-clr);
        z-index:2;
      }
      .cross::before{
        left:-15px;
        top:-40px;
        width:30px;
        height:80px;
      }
      .cross::after{
        width:80px;
        height:30px;
        left:-40px;
        top:-15px;
      }
      .circle{
        position:relative;
        z-index:1;
      }
      .circle::before,
      .circle::after{
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:50px;
        height:50px;
        border-radius:50%;
      }
      .circle::before{
        top:-35px;
        left:-130px;
        border:10px solid transparent;
        border-right:10px solid var(--it-clr);
        border-top:10px solid var(--it-clr);
        transform:rotate(45deg);
        -webkit-box-reflect:right 64px;
      }
      .circle::after{
        top:-35px;
        left:60px;
        border:10px solid transparent;
        border-right:10px solid var(--it-clr);
        border-top:10px solid var(--it-clr);
        transform:rotate(-135deg);
        -webkit-box-reflect:right 65px;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <div class="parent">
        <div class="cross"></div>
        <div class="circle"></div>
    </div>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-13 — Four Leaf Shape
  // ═══════════════════════════════════════════════════════════════
  'CB-13': {
    stage: 'dark',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Four Leaf</title>
    <style>
      :root{
        --bg:#993576;
        --i:#5ADAB8;
      }
      body{
        display:flex;
        align-items:center;
        justify-content:center;
        background:var(--bg);
      }
      .fs{
        position:relative;
      }
      .fs:before,
      .fs:after{
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:110px;
        height:110px;
        background:var(--i);
      }
      .fs:before{
        top:-120px;
        left:-120px;
        border-radius:50% 50% 0 50%;
      }
      .fs:after{
        top:10px;
        left:10px;
        border-radius:0 50% 50% 50%;
      }
      .ss{
        position:relative;
      }
      .ss:before,
      .ss:after{
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:110px;
        height:110px;
        background:var(--i);
        border-radius:70px 0 70px 0;
      }
      .ss:before{
        top:10px;
        left:-120px;
      }
      .ss:after{
        top:-120px;
        left:10px;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <div class="fs"></div>
    <div class="ss"></div>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-14 — Geometric Arch
  // ═══════════════════════════════════════════════════════════════
  'CB-14': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Geometric Arch</title>
    <style>
      body{
        display:flex;
        justify-content:center;
        align-items:center;
        background:#FAE29E;
      }
      div{
        width:230px;
        height:100px;
        background:#743F3F;
        border-radius:50px 50px 0 0;
        position:relative;
      }
      div:before,
      div:after{
        content:'';
        position:absolute;
      }
      div:before{
        background:#743F3F;
        width:120px;
        height:30px;
        top:-40px;
        left:55px;
      }
      div:after{
        background:#FAE29E;
        width:100px;
        height:50px;
        border:10px solid #743F3F;
        top:60px;
        left:55px;
        z-index:3;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <div></div>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-15 — Geometric Temple
  // ═══════════════════════════════════════════════════════════════
  'CB-15': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Geometric Temple</title>
    <style>
      body{
        display:flex;
        justify-content:center;
        align-items:center;
        background:#7EC3E8;
      }
      .t{
        width:0;
        border-top:100px solid transparent;
        border-bottom:100px solid #333;
        border-left:100px solid transparent;
        border-right:100px solid transparent;
        position:relative;
        top:-110px;
      }
      .t:before,
      .t:after{
        content:'';
        position:absolute;
        width:10px;
        height:80px;
        background:#333;
        top:100px;
      }
      .t:before{
        left:25px;
        -webkit-box-reflect:right 20px;
      }
      .t:after{
        left:-35px;
        -webkit-box-reflect:left 20px;
      }
      .c{
        width:220px;
        height:40px;
        position:absolute;
        top:220px;
        background:#333;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <div class="t"></div>
    <div class="c"></div>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-16 — Geometric Hook
  // ═══════════════════════════════════════════════════════════════
  'CB-16': {
    stage: 'dark',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Geometric Hook</title>
    <style>
      body{
        display:flex;
        justify-content:center;
        align-items:center;
        background:#4C4C6B;
      }
      .o{
        width:120px;
        height:180px;
        background:#4C4C6B;
        border:20px solid #FAE29E;
        border-radius:40px;
        position:relative;
      }
      .o:before{
        content:'';
        position:absolute;
        top:-20px;
        left:83.7%;
        width:50px;
        height:220px;
        background:#4C4C6B;
      }
      .i{
        position:absolute;
        width:160px;
        height:20px;
        background:#FAE29E;
        top:50%;
        left:calc(50% + 2px);
        transform:translate(-20%,-50%);
      }
      .i:after{
        content:'';
        position:absolute;
        top:-30px;
        left:calc(100% - 20px);
        width:20px;
        height:80px;
        background:inherit;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <div class="o">
        <div class="i"></div>
    </div>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-17 — Envelope Icon
  // ═══════════════════════════════════════════════════════════════
  'CB-17': {
    stage: 'dark',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Envelope</title>
    <style>
      body{
        display:flex;
        justify-content:center;
        align-items:center;
        background:#485993;
      }
      .o{
        width:250px;
        height:250px;
        background:#FFA173;
        border-radius:50%;
        position:relative;
        overflow:hidden;
      }
      .o::before,
      .o::after{
        content:'';
        position:absolute;
      }
      .o::before{
        top:50%;
        left:50%;
        transform:translate(-50%,-50%) rotateX(180deg);
        width:0;
        height:10px;
        border-top:20px solid #485993;
        border-right:90px solid #485993;
        border-left:90px solid #485993;
        border-bottom:50px solid #FFA173;
      }
      .o::after{
        top:15px;
        left:35px;
        border-top:20px solid #FFA173;
        border-right:90px solid transparent;
        border-left:90px solid transparent;
        border-bottom:50px solid #485993;
      }
      .i{
        position:absolute;
        top:50%;
        left:25px;
        transform:translateY(-50%);
        width:10px;
        height:80px;
        background:#485993;
        -webkit-box-reflect:right 180px;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <div class="o">
        <div class="i"></div>
    </div>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-18 — Geometric H
  // ═══════════════════════════════════════════════════════════════
  'CB-18': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Geometric H</title>
    <style>
      body{
        display:flex;
        justify-content:center;
        align-items:center;
        background:#51A499;
      }
      div{
        position:relative;
        top:105px;
        left:-110px;
        width:60px;
        height:10px;
        background:#FEE190;
        -webkit-box-reflect:right 160px;
      }
      div:before,
      div:after{
        content:'';
        position:absolute;
        top:0;
        left:0;
        background:#FEE190;
      }
      div:before{
        top:-200px;
        left:-180px;
        width:40px;
        height:200px;
        -webkit-box-reflect:right 160px;
      }
      div:after{
        width:120px;
        height:40px;
        top:-180px;
        left:20px;
        -webkit-box-reflect:below 80px;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <div></div>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-19 — Geometric B
  // ═══════════════════════════════════════════════════════════════
  'CB-19': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Geometric B</title>
    <style>
      body{
        display:flex;
        justify-content:center;
        align-items:center;
        background:#8E7B3B;
      }
      .o{
        width:30px;
        height:200px;
        position:relative;
      }
      .o:before,
      .o:after{
        content:'';
        position:absolute;
        width:75px;
        height:80px;
        border-radius:50%;
        border:10px solid #463C1D;
      }
      .o:before{
        border-right:10px solid #8E7B3B;
        left:-50px;
      }
      .o:after{
        border-left:10px solid #8E7B3B;
        right:-50px;
        bottom:0;
      }
      .i{
        background:#463C1D;
        width:100%;
        height:100%;
        position:relative;
        z-index:9;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <div class="o">
        <div class="i"></div>
    </div>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-20 — Geometric Capsule
  // ═══════════════════════════════════════════════════════════════
  'CB-20': {
    stage: 'dark',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Geometric Capsule</title>
    <style>
      body{
        background:#8E3B66;
        display:grid;
        place-items:center;
      }
      div{
        width:20px;
        height:100px;
        background:#F5A7A7;
        border:50px solid #F5A7A7;
        border-radius:60px;
        position:relative;
      }
      div:before,
      div:after{
        content:'';
        position:absolute;
      }
      div:before{
        top:50%;
        left:-50px;
        transform:translateY(-50%);
        width:20px;
        height:40px;
        background:#8E3B66;
        -webkit-box-reflect:right 80px;
      }
      div:after{
        top:calc(50% - 30px);
        left:50%;
        transform:translate(-50%,-50%);
        width:20px;
        height:40px;
        background:#8E3B66;
        -webkit-box-reflect:below 20px;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <div></div>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-21 — Geometric Plus
  // ═══════════════════════════════════════════════════════════════
  'CB-21': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Geometric Plus</title>
    <style>
      body{
        display:grid;
        place-items:center;
        background:#FADE8B;
      }
      .o{
        width:80px;
        height:240px;
        background:#3A4B86;
        position:relative;
      }
      .o:before{
        content:'';
        width:240px;
        height:81px;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        background:inherit;
      }
      .o:after{
        content:'';
        position:absolute;
        top:0;
        left:100px;
        width:60px;
        height:60px;
        background:inherit;
      }
      .i{
        width:60px;
        height:60px;
        background:inherit;
        position:absolute;
        bottom:0;
        left:-80px;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <div class="o">
        <div class="i"></div>
    </div>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-22 — Trash Can
  // ═══════════════════════════════════════════════════════════════
  'CB-22': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Trash Can</title>
    <style>
      body{
        display:grid;
        place-items:center;
        background:#FFF8E1;
      }
      .o{
        width:140px;
        height:180px;
        transform:translateY(20px);
        background:#9676CF;
        border-bottom-left-radius:30px;
        border-bottom-right-radius:30px;
        position:relative;
      }
      .o:before{
        content:'';
        position:absolute;
        top:-20px;
        left:-16px;
        width:169px;
        height:20px;
        background:#7454B4;
        border-radius:20px;
        z-index:3;
      }
      .i{
        position:absolute;
        top:-40px;
        left:50%;
        transform:translate(-50%);
        background:#9676CF;
        width:70px;
        height:40px;
        border-radius:45px;
      }
      .i:before,
      .i:after{
        content:'';
        position:absolute;
        top:70px;
        left:50%;
        transform:translateX(-50%);
        height:120px;
        width:20px;
        background:#7454B4;
        border-radius:20px;
      }
      .i:before{
        left:-5px;
        -webkit-box-reflect:right 60px;
      }
      .i:after{
        left:calc(50% + .5px);
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <div class="o">
        <div class="i"></div>
    </div>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-23 — Geometric Container
  // ═══════════════════════════════════════════════════════════════
  'CB-23': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Geometric Container</title>
    <style>
      body{
        display:grid;
        place-items:center;
        background:#747992;
      }
      div{
        width:200px;
        height:100px;
        background:#EED9D9;
        border-bottom-left-radius:49px;
        border-bottom-right-radius:50px;
        position:relative;
      }
      div:before,
      div:after{
        content:'';
        position:absolute;
        top:0;
        left:0;
      }
      div:before{
        width:160px;
        height:25px;
        background:#394257;
        transform:translateX(-50%);
        left:50%;
      }
      div:after{
        width:20px;
        height:20px;
        background:#747992;
        border-radius:50%;
        top:35px;
        left:20px;
        -webkit-box-reflect:right 120px;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <div></div>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-24 — Alarm Clock
  // ═══════════════════════════════════════════════════════════════
  'CB-24': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Alarm Clock</title>
    <style>
      body{
        display:grid;
        place-items:center;
        background:#D5A06C;
      }
      .o{
        width:140px;
        height:140px;
        background:inherit;
        border-radius:50%;
        border:20px solid #1E2C5C;
        outline:10px solid #D5A06C;
        z-index:2;
        position:relative;
      }
      .o:before,
      .o:after{
        content:'';
        position:absolute;
        z-index:-1;
        top:-40px;
        width:20px;
        height:20px;
        border-radius:50%;
        border:20px solid #1E2C5C;
        left:-20px;
      }
      .o:after{
        right:-20px;
        left:unset;
      }
      .i{
        position:absolute;
        top:calc(100% - 2px);
        left:6px;
        rotate:45deg;
        width:20px;
        height:40px;
        background:#1E2C5C;
      }
      .i:after{
        content:'';
        position:absolute;
        top:-76px;
        right:-76px;
        width:21px;
        height:40px;
        background:#1E2C5C;
        rotate:90deg;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <div class="o">
        <div class="i"></div>
    </div>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-25 — Geometric D
  // ═══════════════════════════════════════════════════════════════
  'CB-25': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Geometric D</title>
    <style>
      body{
        display:grid;
        place-items:center;
      }
      .o{
        position:relative;
        z-index:-1;
        width:50px;
        height:100px;
        border:30px solid #000;
        left:95px;
        border-top-left-radius:75px;
        border-bottom-left-radius:75px;
      }
      .o:before,
      .o:after{
        content:'';
        position:absolute;
        z-index:9;
      }
      .o:before{
        right:0;
        top:0;
        width:10px;
        height:130px;
        background:#fff;
      }
      .o:after{
        right:-60px;
        bottom:-30px;
        width:30px;
        height:30px;
        background:#000;
      }
      .i{
        position:absolute;
        top:50%;
        left:calc(50% - 120px);
        transform:translate(-50%,-50%);
        width:90px;
        height:30px;
        background:#000;
        -webkit-box-reflect:left 20px;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <div class="o">
        <div class="i"></div>
    </div>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-26 — Geometric Bars
  // ═══════════════════════════════════════════════════════════════
  'CB-26': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Geometric Bars</title>
    <style>
      body{
        margin:0;
        background:#C0D6E7;
      }
      .o{
        position:absolute;
        top:0;
        left:50%;
        transform:translateX(-50%);
        width:270px;
        height:177px;
        background:#CC5360;
        box-shadow:0 0 0 0 #CC5360;
      }
      .o:before{
        content:'';
        position:absolute;
        left:0;
        top:0;
        width:36px;
        height:132px;
        background:#2D3464;
        box-shadow:234px 0 #2D3464;
      }
      .o:after{
        content:'';
        position:absolute;
        left:63px;
        top:15px;
        width:144px;
        height:18px;
        background:#CC5360;
        box-shadow:0 36px #CC5360, 0 72px #CC5360, 0 108px #CC5360;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <div class="o"></div>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-27 — Geometric U
  // ═══════════════════════════════════════════════════════════════
  'CB-27': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Geometric U</title>
    <style>
      body{
        display:grid;
        place-items:center;
        background:#F8F5F1;
        position:relative;
      }
      body:before{
        content:'';
        position:absolute;
        width:100px;
        height:120px;
        background:transparent;
        border:20px solid #FCC9E3;
        border-top:20px solid transparent;
        border-bottom-left-radius:80px;
        border-bottom-right-radius:80px;
      }
      div{
        width:80px;
        height:100px;
        border-bottom-left-radius:80px;
        border-bottom-right-radius:80px;
        border:10px solid #4355CC;
        border-top:10px solid transparent;
        position:relative;
      }
      div:before{
        content:'';
        position:absolute;
        top:-40px;
        left:-40px;
        width:20px;
        height:20px;
        border:10px solid #4355CC;
        -webkit-box-reflect:right 80px;
        background:#F8F5F1;
      }
      div:after{
        content:'';
        position:absolute;
        top:-10px;
        left:-40px;
        height:130px;
        width:140px;
        background:transparent;
        border-bottom-left-radius:80px;
        border-bottom-right-radius:80px;
        border:10px solid #4355CC;
        border-top:10px solid transparent;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <div></div>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-28 — Cassette Tape
  // ═══════════════════════════════════════════════════════════════
  'CB-28': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cassette Tape</title>
    <style>
      body{
        display:grid;
        place-items:center;
        background:#7DCB61;
      }
      p{
        width:270px;
        height:190px;
        background:#454545;
        border-radius:10px;
        position:relative;
      }
      p:before{
        content:'';
        position:absolute;
        top:15px;
        left:15px;
        width:calc(100% - 30px);
        height:100px;
        background:#D9D9D9;
      }
      p:after{
        content:'';
        position:absolute;
        bottom:0;
        left:50%;
        transform:translateX(-50%);
        width:40px;
        height:10px;
        background:#454545;
        border-top:20px solid #727272;
        border-bottom:20px solid #727272;
        border-right:55px solid #727272;
        border-left:55px solid #727272;
      }
      i{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,calc(-50% - 30px));
        width:150px;
        height:50px;
        background:#454545;
        border-radius:50px;
      }
      i:before{
        content:'';
        position:absolute;
        top:5px;
        left:5px;
        width:40px;
        height:40px;
        border-radius:50%;
        background:#D9D9D9;
        -webkit-box-reflect:right 60px;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <p><i></i></p>
</body>
</html>`
  },

  // ═══════════════════════════════════════════════════════════════
  // CB-29 — Burger
  // ═══════════════════════════════════════════════════════════════
  'CB-29': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Burger</title>
    <style>
      body {
        display: grid;
        place-items: center;
        background: #4C7A6F;
      }

      p {
        width: 139px;
        height: 30px;
        background: #D6BA72;
        position: relative;
        border-radius: 50% 50% 100% 0% / 100% 100% 0% 0%;
        transform: translateY(-30px);

        &:before,
        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 20px;
          background: #D9D9D9;
          bottom: -30px;
        }

        &:after {
          bottom: -60px;
          background: #D6BA72;
        }
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <p></p>
</body>
</html>`
  },
  // ═══════════════════════════════════════════════════════════════
  // CB-30 — Reflection Dots & Cross
  // ═══════════════════════════════════════════════════════════════
  'CB-30': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reflection Dots & Cross</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 100px;
        background: #F7CB71;
      }

      i {
        width: 100px;
        height: 100px;
        position: relative;
      }

      i:before,
      i:after {
        content: '';
        position: absolute;
        top: -10px;
        left: 10px;
        width: 50px;
        height: 50px;
        background: #4D52D0;
        border-radius: 50%;
        -webkit-box-reflect: below 20px;
      }

      i:after {
        left: 80px;
        background: #D16161;
      }

      p {
        background: #D16161;
        width: 60px;
        height: 120px;
        position: relative;
      }

      p:before {
        content: '';
        position: absolute;
        top: 30px;
        left: -30px;
        width: 120px;
        height: 60px;
        background: #D16161;
      }
    </style>
</head>
<body style="transform: scale(0.5);">
    <p></p>
    <i></i>
</body>
</html>`
  },
  // ═══════════════════════════════════════════════════════════════
  // CB-31 — Geometric Hourglass
  // ═══════════════════════════════════════════════════════════════
  'CB-31': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Geometric Hourglass</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="transform: scale(0.5);">
    <p><i></i></p>
</body>
</html>`,
    css: `body {
    display: grid;
    place-items: center;
    background: #E98F6B;
    min-height: 100vh;
}

p {
    width: 60px;
    height: 80px;
    background: #8B4646;
    border-right: 20px solid #fff;
    border-left: 20px solid #fff;
    position: relative;
}

p i {
    position: absolute;
    width: 45px;
    height: 80px;
    top: 0;
    left: -65px;
    background: #E98F6B;
    -webkit-box-reflect: right 100px;
}

p:before,
p:after {
    content: '';
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    width: 145px;
    height: 40px;
    background: #8B4646;
    border-radius: 50% 50% 0% 0% / 100% 100% 0% 0%;
    border: 20px solid #fff;
    z-index: -1;
}

p::after {
    top: 60px;
    transform: translateX(-50%) rotate(180deg);
}`
  },
  /* ═══════════════════════════════════════════════════════════════
     CB-32 — Candy Wrapper
     ═══════════════════════════════════════════════════════════════ */
  'CB-32': {
    stage: 'dark',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Candy Wrapper</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      display: grid;
      place-items: center;
      min-height: 100vh;
      background: #476573;
    }

    p {
      width: 300px;
      height: 200px;
      background: #B8D982;
      position: relative;
    }

    p::before,
    p::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    p::before {
      top: -30px;
      width: 200px;
      height: 200px;
      background: #476573;
      border: 30px solid #B8D982;
      border-radius: 50%;
    }

    p::after {
      top: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      height: 40px;
      background: #B8D982;
    }
  </style>
</head>
<body>
  <p></p>
</body>
</html>`
  },
  // ═══════════════════════════════════════════════════════════════
  // CB-33 — Geometric Dome
  // ═══════════════════════════════════════════════════════════════
  'CB-33': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Geometric Dome</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p></p>
</body>
</html>`,
    css: `body {
    display: grid;
    place-items: center;
    background: #C2C298;
}

p {
    width: 170px;
    height: 100px;
    background: #535FB1;
    position: relative;
    transform: translateY(-50px);
    border-radius: 85px 85px 0 0;
    z-index: -1;
}

p::before,
p::after {
    content: '';
    position: absolute;
}

p::before {
    width: 100px;
    height: 100px;
    background: #D07B5F;
    border-radius: 50%;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
}

p::after {
    z-index: 3;
    width: 20px;
    height: 50px;
    background: #454545;
    top: 140px;
    left: 50%;
    transform: translateX(-50%);
}`
  },
  'CB-34': {
    stage: 'light',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Twin Bars</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p></p>
    <i></i>
</body>
</html>`,
    css: `body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #DFF6FB;
    gap: 20px;
    min-height: 100vh;
    margin: 0;
}

p, i {
    width: 50px;
    height: 100px;
    background: #D07B5F;
    position: relative;
}

p:before,
i:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 20px;
    background: inherit;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    -webkit-box-reflect: below 100px;
}

i {
    height: 170px;
}

i:before {
    height: 40px;
    top: -40px;
    -webkit-box-reflect: below 170px;
}

p {
    background: #4DCB60;
    height: 130px;
}

p:before {
    -webkit-box-reflect: below 130px;
}`
  },
  'CB-35': {
    stage: 'dark',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reflected Beams</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p><i></i></p>
</body>
</html>`,
    css: `body {
    display: grid;
    place-items: center;
    min-height: 100vh;
    margin: 0;
    background: #042F38;
}

p {
    width: 200px;
    height: 20px;
    background: #BFA148;
    position: relative;
    transform: translateX(120px);
}

p:before {
    content: '';
    position: absolute;
    top: 0;
    left: calc(-100% - 30px);
    width: 100%;
    height: 100%;
    background: #D9D9D9;
}

p i {
    position: absolute;
    top: -55px;
    left: 0;
    width: 20px;
    height: 40px;
    background: #D9D9D9;
    -webkit-box-reflect: below 50px;
}

p i:before {
    content: '';
    position: absolute;
    top: 0;
    left: -50px;
    width: 100%;
    height: 100%;
    background: #BFA148;
}`
  },
};