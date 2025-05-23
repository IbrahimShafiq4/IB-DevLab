import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-tilt-v3',
  imports: [SharedCodeComponent],
  templateUrl: './tilt-v3.component.html',
  styleUrl: './tilt-v3.component.scss'
})
export class TiltV3Component {
  projectName: string = '3D Interactive Social Media Icons with Tilt & Color Hover Effects';
  projectDescription: string = `
This vibrant UI component features a horizontal list of social media icons enhanced with VanillaTilt.js for a 3D tilt effect and dynamic color transitions on hover. Each icon uses a unique brand color (--clr) that changes the background of the entire page on hover, creating an engaging and responsive interaction. Perfect for portfolios, contact sections, or landing pages that need a creative social media touch.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.2.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/tilt v3.mp4';

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
            <a href="#">
                <i class="fa-brands fa-youtube"></i>
            </a>
        </li>
        <li style="--clr: #333">
            <a href="#">
                <i class="fa-brands fa-x-twitter"></i>
            </a>
        </li>
        <li style="--clr: #25d366">
            <a href="#">
                <i class="fa-brands fa-whatsapp"></i>
            </a>
        </li>
        <li style="--clr: #4285f4">
            <a href="#">
                <i class="fa-brands fa-google"></i>
            </a>
        </li>
        <li style="--clr: #c32aa3">
            <a href="#">
                <i class="fa-brands fa-instagram"></i>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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

  &:hover {
      li {
          transform: scale(0.7);
          opacity: 0.5;
      }
  }

  li {
      transition: 0.5s linear;
      a {
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

          i {
              transition: 0.5s linear;
              pointer-events: none;
          }
      }

      &:hover {
          transform: scale(1);
          opacity: 1;

          a {
              &:hover {
                  background-color: var(--clr);
                  box-shadow:
                      0 0 10px rgba(0, 0, 0, 0.25),
                      inset 0 0 10px rgba(0, 0, 0, 0.25);
                  border: 5px solid var(--clr);
  
                  i {
                      transform: scale(1.5) translateZ(50px);
                      color: #fff;
                  }
              }
          }
      }
  }
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
var VanillaTilt = (function () {
  "use strict";
  class t {
    constructor(e, i = {}) {
      if (!(e instanceof Node))
        throw "Can't initialize VanillaTilt because " + e + " is not a Node.";
      (this.width = null),
        (this.height = null),
        (this.clientWidth = null),
        (this.clientHeight = null),
        (this.left = null),
        (this.top = null),
        (this.gammazero = null),
        (this.betazero = null),
        (this.lastgammazero = null),
        (this.lastbetazero = null),
        (this.transitionTimeout = null),
        (this.updateCall = null),
        (this.event = null),
        (this.updateBind = this.update.bind(this)),
        (this.resetBind = this.reset.bind(this)),
        (this.element = e),
        (this.settings = this.extendSettings(i)),
        (this.reverse = this.settings.reverse ? -1 : 1),
        (this.resetToStart = t.isSettingTrue(this.settings["reset-to-start"])),
        (this.glare = t.isSettingTrue(this.settings.glare)),
        (this.glarePrerender = t.isSettingTrue(
          this.settings["glare-prerender"]
        )),
        (this.fullPageListening = t.isSettingTrue(
          this.settings["full-page-listening"]
        )),
        (this.gyroscope = t.isSettingTrue(this.settings.gyroscope)),
        (this.gyroscopeSamples = this.settings.gyroscopeSamples),
        (this.elementListener = this.getElementListener()),
        this.glare && this.prepareGlare(),
        this.fullPageListening && this.updateClientSize(),
        this.addEventListeners(),
        this.reset(),
        !1 === this.resetToStart &&
          ((this.settings.startX = 0), (this.settings.startY = 0));
    }
    static isSettingTrue(t) {
      return "" === t || !0 === t || 1 === t;
    }
    getElementListener() {
      if (this.fullPageListening) return window.document;
      if ("string" == typeof this.settings["mouse-event-element"]) {
        const t = document.querySelector(this.settings["mouse-event-element"]);
        if (t) return t;
      }
      return this.settings["mouse-event-element"] instanceof Node
        ? this.settings["mouse-event-element"]
        : this.element;
    }
    addEventListeners() {
      (this.onMouseEnterBind = this.onMouseEnter.bind(this)),
        (this.onMouseMoveBind = this.onMouseMove.bind(this)),
        (this.onMouseLeaveBind = this.onMouseLeave.bind(this)),
        (this.onWindowResizeBind = this.onWindowResize.bind(this)),
        (this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this)),
        this.elementListener.addEventListener(
          "mouseenter",
          this.onMouseEnterBind
        ),
        this.elementListener.addEventListener(
          "mouseleave",
          this.onMouseLeaveBind
        ),
        this.elementListener.addEventListener(
          "mousemove",
          this.onMouseMoveBind
        ),
        (this.glare || this.fullPageListening) &&
          window.addEventListener("resize", this.onWindowResizeBind),
        this.gyroscope &&
          window.addEventListener(
            "deviceorientation",
            this.onDeviceOrientationBind
          );
    }
    removeEventListeners() {
      this.elementListener.removeEventListener(
        "mouseenter",
        this.onMouseEnterBind
      ),
        this.elementListener.removeEventListener(
          "mouseleave",
          this.onMouseLeaveBind
        ),
        this.elementListener.removeEventListener(
          "mousemove",
          this.onMouseMoveBind
        ),
        this.gyroscope &&
          window.removeEventListener(
            "deviceorientation",
            this.onDeviceOrientationBind
          ),
        (this.glare || this.fullPageListening) &&
          window.removeEventListener("resize", this.onWindowResizeBind);
    }
    destroy() {
      clearTimeout(this.transitionTimeout),
        null !== this.updateCall && cancelAnimationFrame(this.updateCall),
        (this.element.style.willChange = ""),
        (this.element.style.transition = ""),
        (this.element.style.transform = ""),
        this.resetGlare(),
        this.removeEventListeners(),
        (this.element.vanillaTilt = null),
        delete this.element.vanillaTilt,
        (this.element = null);
    }
    onDeviceOrientation(t) {
      if (null === t.gamma || null === t.beta) return;
      this.updateElementPosition(),
        this.gyroscopeSamples > 0 &&
          ((this.lastgammazero = this.gammazero),
          (this.lastbetazero = this.betazero),
          null === this.gammazero
            ? ((this.gammazero = t.gamma), (this.betazero = t.beta))
            : ((this.gammazero = (t.gamma + this.lastgammazero) / 2),
              (this.betazero = (t.beta + this.lastbetazero) / 2)),
          (this.gyroscopeSamples -= 1));
      const e =
          this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX,
        i = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY,
        s = e / this.width,
        n = i / this.height,
        l = (t.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero)) / s,
        a = (t.beta - (this.settings.gyroscopeMinAngleY + this.betazero)) / n;
      null !== this.updateCall && cancelAnimationFrame(this.updateCall),
        (this.event = { clientX: l + this.left, clientY: a + this.top }),
        (this.updateCall = requestAnimationFrame(this.updateBind));
    }
    onMouseEnter() {
      this.updateElementPosition(),
        (this.element.style.willChange = "transform"),
        this.setTransition();
    }
    onMouseMove(t) {
      null !== this.updateCall && cancelAnimationFrame(this.updateCall),
        (this.event = t),
        (this.updateCall = requestAnimationFrame(this.updateBind));
    }
    onMouseLeave() {
      this.setTransition(),
        this.settings.reset && requestAnimationFrame(this.resetBind);
    }
    reset() {
      this.onMouseEnter(),
        this.fullPageListening
          ? (this.event = {
              clientX:
                ((this.settings.startX + this.settings.max) /
                  (2 * this.settings.max)) *
                this.clientWidth,
              clientY:
                ((this.settings.startY + this.settings.max) /
                  (2 * this.settings.max)) *
                this.clientHeight,
            })
          : (this.event = {
              clientX:
                this.left +
                ((this.settings.startX + this.settings.max) /
                  (2 * this.settings.max)) *
                  this.width,
              clientY:
                this.top +
                ((this.settings.startY + this.settings.max) /
                  (2 * this.settings.max)) *
                  this.height,
            });
      let t = this.settings.scale;
      (this.settings.scale = 1),
        this.update(),
        (this.settings.scale = t),
        this.resetGlare();
    }
    resetGlare() {
      this.glare &&
        ((this.glareElement.style.transform =
          "rotate(180deg) translate(-50%, -50%)"),
        (this.glareElement.style.opacity = "0"));
    }
    getValues() {
      let t, e;
      return (
        this.fullPageListening
          ? ((t = this.event.clientX / this.clientWidth),
            (e = this.event.clientY / this.clientHeight))
          : ((t = (this.event.clientX - this.left) / this.width),
            (e = (this.event.clientY - this.top) / this.height)),
        (t = Math.min(Math.max(t, 0), 1)),
        (e = Math.min(Math.max(e, 0), 1)),
        {
          tiltX: (
            this.reverse *
            (this.settings.max - t * this.settings.max * 2)
          ).toFixed(2),
          tiltY: (
            this.reverse *
            (e * this.settings.max * 2 - this.settings.max)
          ).toFixed(2),
          percentageX: 100 * t,
          percentageY: 100 * e,
          angle:
            Math.atan2(
              this.event.clientX - (this.left + this.width / 2),
              -(this.event.clientY - (this.top + this.height / 2))
            ) *
            (180 / Math.PI),
        }
      );
    }
    updateElementPosition() {
      let t = this.element.getBoundingClientRect();
      (this.width = this.element.offsetWidth),
        (this.height = this.element.offsetHeight),
        (this.left = t.left),
        (this.top = t.top);
    }
    update() {
      let t = this.getValues();
      (this.element.style.transform =
        "perspective(" +
        this.settings.perspective +
        "px) rotateX(" +
        ("x" === this.settings.axis ? 0 : t.tiltY) +
        "deg) rotateY(" +
        ("y" === this.settings.axis ? 0 : t.tiltX) +
        "deg) scale3d(" +
        this.settings.scale +
        ", " +
        this.settings.scale +
        ", " +
        this.settings.scale +
        ")"),
        this.glare &&
          ((this.glareElement.style.transform = \`rotate(\${t.angle}deg) translate(-50%, -50%)\`),
          (this.glareElement.style.opacity = \`\${
            (t.percentageY * this.settings["max-glare"]) / 100
          }\`)),
        this.element.dispatchEvent(
          new CustomEvent("tiltChange", { detail: t })
        ),
        (this.updateCall = null);
    }
    prepareGlare() {
      if (!this.glarePrerender) {
        const t = document.createElement("div");
        t.classList.add("js-tilt-glare");
        const e = document.createElement("div");
        e.classList.add("js-tilt-glare-inner"),
          t.appendChild(e),
          this.element.appendChild(t);
      }
      (this.glareElementWrapper = this.element.querySelector(".js-tilt-glare")),
        (this.glareElement = this.element.querySelector(
          ".js-tilt-glare-inner"
        )),
        this.glarePrerender ||
          (Object.assign(this.glareElementWrapper.style, {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "pointer-events": "none",
            "border-radius": "inherit",
          }),
          Object.assign(this.glareElement.style, {
            position: "absolute",
            top: "50%",
            left: "50%",
            "pointer-events": "none",
            "background-image":
              "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
            transform: "rotate(180deg) translate(-50%, -50%)",
            "transform-origin": "0% 0%",
            opacity: "0",
          }),
          this.updateGlareSize());
    }
    updateGlareSize() {
      if (this.glare) {
        const t =
          2 *
          (this.element.offsetWidth > this.element.offsetHeight
            ? this.element.offsetWidth
            : this.element.offsetHeight);
        Object.assign(this.glareElement.style, {
          width: \`\${t}px\`,
          height: \`\${t}px\`,
        });
      }
    }
    updateClientSize() {
      (this.clientWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth),
        (this.clientHeight =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight);
    }
    onWindowResize() {
      this.updateGlareSize(), this.updateClientSize();
    }
    setTransition() {
      clearTimeout(this.transitionTimeout),
        (this.element.style.transition =
          this.settings.speed + "ms " + this.settings.easing),
        this.glare &&
          (this.glareElement.style.transition = \`opacity \${this.settings.speed}ms \${this.settings.easing}\`),
        (this.transitionTimeout = setTimeout(() => {
          (this.element.style.transition = ""),
            this.glare && (this.glareElement.style.transition = "");
        }, this.settings.speed));
    }
    extendSettings(t) {
      let e = {
          reverse: !1,
          max: 15,
          startX: 0,
          startY: 0,
          perspective: 1e3,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          scale: 1,
          speed: 300,
          transition: !0,
          axis: null,
          glare: !1,
          "max-glare": 1,
          "glare-prerender": !1,
          "full-page-listening": !1,
          "mouse-event-element": null,
          reset: !0,
          "reset-to-start": !0,
          gyroscope: !0,
          gyroscopeMinAngleX: -45,
          gyroscopeMaxAngleX: 45,
          gyroscopeMinAngleY: -45,
          gyroscopeMaxAngleY: 45,
          gyroscopeSamples: 10,
        },
        i = {};
      for (var s in e)
        if (s in t) i[s] = t[s];
        else if (this.element.hasAttribute("data-tilt-" + s)) {
          let t = this.element.getAttribute("data-tilt-" + s);
          try {
            i[s] = JSON.parse(t);
          } catch (e) {
            i[s] = t;
          }
        } else i[s] = e[s];
      return i;
    }
    static init(e, i) {
      e instanceof Node && (e = [e]),
        e instanceof NodeList && (e = [].slice.call(e)),
        e instanceof Array &&
          e.forEach((e) => {
            "vanillaTilt" in e || (e.vanillaTilt = new t(e, i));
          });
    }
  }
  return (
    "undefined" != typeof document &&
      ((window.VanillaTilt = t),
      t.init(document.querySelectorAll("[data-tilt]"))),
    t
  );
})();

    `,
      codeTitle: 'vanilla-tilt.js'
    }
  ];

  zipFile: string = 'assets/zip-files/tilt 03.rar';
}