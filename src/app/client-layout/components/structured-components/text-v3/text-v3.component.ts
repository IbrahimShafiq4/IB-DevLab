import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-text-v3',
  imports: [SharedCodeComponent],
  templateUrl: './text-v3.component.html',
  styleUrl: './text-v3.component.scss'
})
export class TextV3Component {
  projectName: string = 'Native Dynamic Typing Animation with JavaScript';
  projectDescription: string = `
This animated typing effect dynamically types and erases a set of descriptive words next to the word “JavaScript” using vanilla JavaScript. The design features a vibrant gradient background and a blinking cursor for a classic typing experience. Perfect for landing pages, portfolios, or banners to add personality and motion.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.3.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/text v3.mp4';

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
    <p>
        <span class="js">Javascript</span> is <span class="typed-text"></span>
        <span class="cursor">&nbsp;</span>
    </p>
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
    background-image: linear-gradient(#5c3ec6,#e0969a, #d29b68);
    height: 100vh;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

p {
    color: #fff;
    font-size: 5em;
}

.typed-text {
    color: #a574d5;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}

.cursor {
    background-color: #a574d5;
}
    `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Awesome❤️', 'Fun', 'Weird', 'Famous'];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000;

let index = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    if (words.length) {
        setTimeout(type, typingDelay)
    }
})

function type() {
    if (charIndex < words[index].length) {
        typedText.innerHTML += words[index].charAt(charIndex)
        charIndex++;
        setTimeout(type, typingDelay)
    } else {
        setTimeout(erasing, erasingDelay)
    }
}

function erasing() {
    if (charIndex > 0) {
        typedText.innerHTML = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erasing, erasingDelay)
    } else {
        index++;
        if (index >= words.length) {
            index = 0;
        }
        setTimeout(type, typingDelay + 1100)
    }
}
      `,
      codeTitle: 'main.js'
    },
  ];

  zipFile: string = 'assets/zip-files/native typing text.rar';
}
