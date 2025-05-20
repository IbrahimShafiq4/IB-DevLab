import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-conic-gradient-generator',
  imports: [SharedCodeComponent],
  templateUrl: './conic-gradient-generator.component.html',
  styleUrl: './conic-gradient-generator.component.scss'
})
export class ConicGradientGeneratorComponent {
  projectName: string = 'Interactive Conic-Gradient Pie Chart Generator';
  projectDescription: string = `This project is a dynamic and responsive pie chart generator using CSS conic-gradient and vanilla JavaScript. Users can interactively add, remove, and customize chart segments by adjusting values and colors in real-time. The chart visually updates instantly and also displays the generated conic-gradient CSS code, making it both educational and functional for front-end developers learning about gradients and visual data representation.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/conic-gradient generator.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" name="anything">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="main.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
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
</html>
    `,
      codeTitle: 'index.html'
    }
  ];

  CSSCodeSnippets: ICodeStructure[] = [
    {
      code: `
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap");
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

h1 {
  padding: 20px;
  line-height: 1;
}

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
.value_button:disabled {
  color: rgba(255, 255, 255, 0.1333333333);
}
.value_color {
  position: absolute;
  top: 0;
  left: 0;
  width: 2em;
  height: 2em;
  opacity: 0;
}
.value_addText {
  margin-left: 0;
}
.value.clickable, .value_button {
  cursor: pointer;
}

.code {
  padding: 30px;
  width: 100%;
  max-width: 500px;
  text-align: left;
  border: 1px solid #111;
  border-radius: 4px;
  margin-top: 1em;
}
@media (max-width: 768px) {
  .code {
    max-width: 320px;
  }
}
.code .indent {
  padding-left: 1em;
}
    `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
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
      if (segment.color === thisColor) {
        OK = false;
      }
    });
  }
  return thisColor;
}

function createNewSegment() {
  const min = 10;
  const max = 100;
  const thisSegments = {
    color: getNewColor(),
    value: min + Math.floor(Math.random() * (max-min))
  }
  segments.push(thisSegments);
}

function start() {
  const initCount = 2 + Math.floor(Math.random() * 4);
  for (let i = 0; i < initCount; i++) {
    createNewSegment();
  }
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
      <button class="value_button" onclick="removeSegment(\${ix})" \${segments.length > 2 ? '' : 'disabled="true"'}"><i class="fas fa-times"></i></button>
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
  valueDiv.onclick = () => { createNewSegment(); drawValues(); drawPie(); }
  values.appendChild(valueDiv);
}

function drawPie() {
  const dials = document.querySelectorAll('.pie_dial');
  let total = 0;

  segments.forEach(segment => {
    total += segment.value;
  });

  let lastDeg = 0;
  let conic = '';
  let codeText = '';

  segments.forEach((segment, ix) => {
    const thisDeg = (segment.value * 360 / total) + lastDeg;
    conic += \`\${segment.color} \${lastDeg}deg, \${segment.color} \${thisDeg}deg, \`;
    codeText += \`\${segment.color} \${Math.round(lastDeg * 1000) / 1000}deg, \${segment.color} \${Math.round(thisDeg * 1000) / 1000}deg, <br>\`
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

function setNewValue(ix, value) {
  segments[ix].value = Number(value);
  drawPie();
}

function setColor(ix, input) {
  segments[ix].color = input.value;
  input.parentElement.parentElement.style.backgroundColor = input.value;
  drawPie();
}

function removeSegment(ix) {
  if (segments.length < 3) {
    return false;
  }
  segments.splice(ix, 1);
  drawValues();
  drawPie();
}
`,
      codeTitle: 'main.js'
    }
  ]

  zipFile: string = 'assets/zip-files/conic generator v1.rar';

}
