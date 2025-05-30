import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-button-v1',
  imports: [SharedCodeComponent],
  templateUrl: './button-v1.component.html',
  styleUrl: './button-v1.component.scss'
})
export class ButtonV1Component {

  projectName: string = '🎯 Animated Button Hover Effect with CSS';
  projectDescription: string = `
This project demonstrates a sleek and modern hover animation for anchor tags using pure HTML and CSS. The layout centers multiple buttons vertically and horizontally on the screen with a dark background. Each button features a smooth transition effect: when hovered, the background turns white, and the text appears to rise with a subtle transformation, giving a polished, interactive experience. Ideal for stylish landing pages or call-to-action elements.
`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS'];
  projectVideSrc: string = './../../../../../assets/video-samples/buttons/button-v1';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <a href="#">Ibrahim</a>
    <a href="#">Shafiq</a>
    <a href="#">Abd-Elshafy</a>
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
    box-sizing: border;
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


    span {
        display: inline-flex;
        transition: 0.4s linear;
        text-shadow: 0 50px #333;
    }

    &:hover {
        background-color: #fff;

        span {
            color: #333;
            transform: translateY(-50px);
        }
    }
}
    `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/buttons/button-v1.rar';
}
