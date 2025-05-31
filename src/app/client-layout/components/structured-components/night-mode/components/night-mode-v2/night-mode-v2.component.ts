import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-night-mode-v2',
  imports: [SharedCodeComponent],
  templateUrl: './night-mode-v2.component.html',
  styleUrl: './night-mode-v2.component.scss'
})
export class NightModeV2Component {
  projectName: string = '🌗 Meme-Inspired Day/Night Mode Toggle – V2';
  projectDescription: string = `
This isn't just a toggle—it’s a whole celestial performance. The Cosmic Chaos Edition takes the original meme-inspired concept and supercharges it with polished visuals, buttery-smooth transitions, and interstellar flair.
      <br>✨ What's new and fabulous:
      <ul>
        <li>🌤️ A radiant sun with animated bouncy rays</li>
        <li>☁️ Whimsical clouds that float away dramatically at night</li>
        <li>🌙 A soft-glowing moon with crater realism</li>
        <li>🌌 Animated stars twinkling into position</li>
        <li>🎨 Designer-grade gradients with layered depth</li>
        <li>💫 A toggle animation so smooth it could win an Oscar😂</li>
        <li>🕹️ All powered by creative CSS wizardry, no JavaScript needed!</li>
      </ul>

      Perfect for portfolios, landing pages, or just flexing your creative CSS skills with a twist of humor and personality. 😎
    `;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.1.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS'];
  projectVideSrc: string = './../../../../../assets/video-samples/night mode/02 night mode v2.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>dark mode v2 meme</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
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

</html>
      `,
      codeTitle: 'index.html'
    }
  ];

  CSSCodeSnippets: ICodeStructure[] = [
    {
      code: `
* {
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.075);
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
  background: rgb(217, 222, 230);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

body:has(input:checked) {
  background-color: #080a11;
}

label {
  user-select: none;
  display: flex;
  align-items: center;
}

input {
  display: none;
}

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

.container:has(input:checked) {
  background-color: #080a11;
}

.container:before {
  z-index: 10;
  content: "";
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  border-radius: 100px;
  box-shadow: inset 0px 10px 15px rgba(0, 0, 0, 0.6);
  pointer-events: none;
}

.bg {
  width: 100%;
  height: 100%;
  background: rgb(78, 134, 181);
}

input:checked ~ .container .bg {
  background: rgb(31, 34, 51);
}

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

input:checked ~ .container .sun {
  left: 209px;
}

.ray-inner {
  top: -42.5px;
  left: -42.5px;
  width: 230px;
  height: 230px;
}

.ray-medium {
  top: -88.5px;
  left: -88.5px;
  width: 322px;
  height: 322px;
}

.ray-far {
  top: -136.5px;
  left: -136.5px;
  width: 418px;
  height: 418px;
}
input:checked ~ .container .ray-inner {
  top: -42.5px;
  left: 181.5px;
}

input:checked ~ .container .ray-medium {
  top: -88.5px;
  left: 135.5px;
}

input:checked ~ .container .ray-far {
  top: -136.5px;
  left: 87.5px;
}

.ray {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 100%;
  filter: blur(2px);
}
input:checked ~ .container .ray {
  background: rgba(255, 255, 255, 0.1);
}

.cloud,
.cloud-shadow {
  background: #fff;
  position: absolute;
  border-radius: 100%;
}

input:checked ~ .container .cloud,
input:checked ~ .container .cloud-shadow {
  transform: translateY(140px);
}

.cloud-shadows {
  opacity: 0.6;
}

.cloud-shadow {
  transform: translateY(-15px) translateX(-2px);
  background: rgb(214, 225, 238);
}

.cloud-1 {
  width: 134px;
  height: 134px;
  right: -70px;
  bottom: -10px;
}

.cloud-2 {
  width: 95px;
  height: 95px;
  border-radius: 100%;
  right: -10px;
  bottom: -10px;
}

.cloud-3 {
  width: 87px;
  height: 87px;
  border-radius: 100%;
  right: 50px;
  bottom: -40px;
}

.cloud-4 {
  width: 78px;
  height: 78px;
  border-radius: 100%;
  right: 100px;
  bottom: -45px;
}

.cloud-5 {
  width: 87px;
  height: 87px;
  border-radius: 100%;
  right: 150px;
  bottom: -45px;
}

.cloud-6 {
  width: 78px;
  height: 78px;
  border-radius: 100%;
  right: 220px;
  bottom: -45px;
}

.cloud-7 {
  width: 78px;
  height: 78px;
  border-radius: 100%;
  right: 280px;
  bottom: -50px;
}

.cloud-shadow.cloud-1 {
  bottom: 20px;
  right: -60px;
}

.cloud-shadow.cloud-2 {
  bottom: 0px;
  right: 30px;
}

.cloud-shadow.cloud-3 {
  bottom: -5px;
  right: 75px;
}

.cloud-shadow.cloud-4 {
  bottom: -20px;
  right: 110px;
}

.cloud-shadow.cloud-5 {
  bottom: -30px;
  right: 150px;
}

.cloud-shadow.cloud-6 {
  bottom: -40px;
  right: 220px;
}

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

input:checked ~ .container .moon {
  left: 0;
}

.crater {
  background: rgb(160, 168, 182);
  border-radius: 100%;
  position: absolute;
  box-shadow: inset 1px 1px 2px rgba(44, 44, 44, 0.2);
}

.crater-1 {
  width: 40px;
  height: 40px;
  top: 50px;
  left: 25px;
}

.crater-2 {
  width: 25px;
  height: 25px;
  top: 17px;
  left: 50px;
}

.crater-3 {
  width: 25px;
  height: 25px;
  top: 68px;
  left: 78px;
}

.star {
  background: #fff;
  position: absolute;
  border-radius: 100%;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 50H0A50 50 0 0 0 50 0m0 50H0a50 50 0 0 1 50 50m0-50h50A50 50 0 0 1 50 0m0 50h50a50 50 0 0 0-50 50Z' fill='%23FFF'/%3E%3C/svg%3E");
  filter: drop-shadow(0px 0px 2px #fff);
  transform: translateY(-130px);
}

input:checked ~ .container .star {
  transform: translateY(0px);
}

.star-1 {
  top: 40px;
  right: 155px;
  width: 25px;
  height: 25px;
}

.star-2 {
  top: 40px;
  right: 205px;
  width: 8px;
  height: 8px;
}

.star-3 {
  top: 88px;
  right: 170px;
  width: 8px;
  height: 8px;
}

.star-4 {
  top: 70px;
  right: 220px;
  width: 8px;
  height: 8px;
}

.star-5 {
  top: 105px;
  right: 200px;
  width: 15px;
  height: 15px;
}

.star-6 {
  top: 15px;
  right: 285px;
  width: 22px;
  height: 22px;
}

.star-7 {
  top: 45px;
  right: 320px;
  width: 10px;
  height: 10px;
}

.star-8 {
  top: 60px;
  right: 290px;
  width: 10px;
  height: 10px;
}

.star-9 {
  top: 95px;
  right: 310px;
  width: 6px;
  height: 6px;
}

.star-10 {
  top: 110px;
  right: 325px;
  width: 6px;
  height: 6px;
}

.star-11 {
  top: 120px;
  right: 285px;
  width: 6px;
  height: 6px;
}

      `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/night-mode/02 - night mode.rar';
}