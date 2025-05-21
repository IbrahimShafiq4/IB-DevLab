import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-pie-chart',
  imports: [SharedCodeComponent],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  projectName: string = '🎨 Animated Conic Gradient Pie Chart with Legend';
  projectDescription: string = `This project showcases a visually appealing animated pie chart using pure HTML and CSS. The chart is built with conic-gradient to represent data segments in varying colors, and includes a dynamic rotation animation for enhanced visual engagement. A corresponding legend below the chart uses colored labels and percentage values to clearly describe each section. This component is ideal for dashboards or presentations where aesthetic and clarity are key.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS'];
  projectVideoOnYoutube: string = 'https://www.youtube.com/watch?v=yG76tp7NR20&list=PL7S9lp7CuORZGO8goXg2462Cc3dWpisPI&index=8';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pie Chart</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

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
    background-color: #000;
    background-image: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.05) 1px,
            transparent 1px,
            transparent 40px
        ),
        repeating-linear-gradient(
            to right,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.05) 1px,
            transparent 1px,
            transparent 40px
        );
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
    conic-gradient(
        red 0% 30%,
        blue 30% 50%,
        yellow 50% 70%,
        green 70% 100%
    );
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
    0% { transform: rotate(0deg); filter: hue-rotate(0deg); }

    25% { transform: rotate(90deg); filter: hue-rotate(90deg); }

    50% { transform: rotate(180deg); filter: hue-rotate(180deg); }

    75% { transform: rotate(270deg); filter: hue-rotate(270deg); }

    100% { transform: rotate(360deg); filter: hue-rotate(360deg); }
}

@keyframes colored-span-animation {
    0% { filter: hue-rotate(0deg); }

    25% { filter: hue-rotate(90deg); }

    50% { filter: hue-rotate(180deg); }

    75% { filter: hue-rotate(270deg); }

    100% { filter: hue-rotate(360deg); }
}
    `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/PIE CHART.rar';
}
