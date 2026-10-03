import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-menu-indicator-v1',
  imports: [SharedCodeComponent],
  template: `
  <app-shared-code [tags]="projectTags" [HTMLCodeSnippet]="HTMLCodeSnippets" [CSSCodeSnippet]="CSSCodeSnippets"
    [JSCodeSnippet]="JSCodeSnippets" [projectDate]="projectDate" [projectDescription]="projectDescription"
    [projectVersion]="projectVersion" [projectName]="projectName" [zipFile]="zipFile"
    [liveHtml]="liveHtml" [liveCss]="liveCss" [liveJs]="liveJs" />
  `
})
export class MenuIndicatorV1Component {
  projectName: string = 'Animated Vertical Navigation Menu';
  projectDescription: string = `A sleek animated vertical navigation menu with hover effects and dynamic background color changes using HTML, CSS, and JavaScript.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];

  liveHtml: string = `
<div class="navigation">
    <ul>
        <li class="list active" data-color="#f53b57">
            <a href="#"><span class="icon">🏠</span><span class="title">Home</span></a>
        </li>
        <li class="list" data-color="#3c40c6">
            <a href="#"><span class="icon">👤</span><span class="title">Profile</span></a>
        </li>
        <li class="list" data-color="#05c46b">
            <a href="#"><span class="icon">💬</span><span class="title">Message</span></a>
        </li>
        <li class="list" data-color="#0fbcf9">
            <a href="#"><span class="icon">❓</span><span class="title">Help</span></a>
        </li>
        <li class="list" data-color="#ffa901">
            <a href="#"><span class="icon">⚙</span><span class="title">Settings</span></a>
        </li>
        <div class="indicator"></div>
    </ul>
</div>
  `;

  liveCss: string = `
* {
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
  top: 0; left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
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
  height: 100%;
  text-align: center;
  color: #333;
  font-weight: 500;
  text-decoration: none;
}

.navigation ul li a .icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 22px;
  transition: 0.5s linear;
}

.navigation ul li.active a .icon { color: #fff; }

.navigation ul li a .title {
  position: absolute;
  top: 50%;
  left: 110px;
  transform: translateY(-50%);
  background-color: #fff;
  color: #333;
  padding: 5px 10px;
  border-radius: 6px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s linear;
  white-space: nowrap;
  font-size: 14px;
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
.navigation ul li:nth-child(5).active ~ .indicator::before { background-color: #ffa901; }
  `;

  liveJs: string = `
let list = document.querySelectorAll('li');
for (let i = 0; i < list.length; i++) {
    list[i].onmouseover = function () {
        let j = 0;
        while (j < list.length) {
            list[j++].className = "list";
        }
        list[i].className = 'list active';
    }
}

list.forEach(el => {
    el.addEventListener('mouseenter', function (event) {
        let bg = document.querySelector('body');
        let color = event.currentTarget.getAttribute('data-color');
        if (color) bg.style.backgroundColor = color;
    });
});
  `;

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/style.css" type="text/css" />
</head>
<body>
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
  top: 0; left: 0;
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

.navigation ul li.active a .icon { color: #fff; }

.navigation ul li a .icon i { font-size: 24px; transition: 0.5s linear; }

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
.navigation ul li:nth-child(5).active ~ .indicator::before { background-color: #ffa901; }
    `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
let list = document.querySelectorAll('li');
for (let i = 0; i < list.length; i++) {
    list[i].onmouseover = function () {
        let j = 0;
        while (j < list.length) {
            list[j++].className = "list";
        }
        list[i].className = 'list active'
    }
}

list.forEach(elements => {
    elements.addEventListener('mouseenter', function (event) {
        let bg = document.querySelector('body');
        let color = event.target.getAttribute('data-color');
        bg.style.backgroundColor = color;
    })
})
    `,
      codeTitle: 'main.js'
    }
  ];

  zipFile: string = 'assets/zip-files/indicator v1.rar';
}