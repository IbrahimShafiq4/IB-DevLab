import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-loading-v2',
  imports: [SharedCodeComponent],
  templateUrl: './loading-v2.component.html',
  styleUrl: './loading-v2.component.scss'
})
export class LoadingV2Component {
  projectName: string = '🎨 Glowing Animated Name Loader';
  projectDescription: string = `
This creative loader animation displays the name "IBRAHIM" with each letter glowing in different colors. The letters animate vertically with a smooth bounce effect and a neon-like glow, achieved using CSS keyframe animations and text stroke effects. Perfect for personal websites, portfolios, or creative loading screens to captivate visitors with stylish typography.
`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.1.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS'];
  projectVideSrc: string = './../../../../../assets/video-samples/loading v2.mp4';

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
    
    <div class="loader">
        <span style="--i: 1; --clr: #1A3636;">I</span>
        <span style="--i: 2; --clr: #134B70;">B</span>
        <span style="--i: 3; --clr: #508C9B;">R</span>
        <span style="--i: 4; --clr: #EF5A6F;">A</span>
        <span style="--i: 5; --clr: #B5CFB7;">H</span>
        <span style="--i: 6; --clr: #D1E9F6;">I</span>
        <span style="--i: 7; --clr: #433D8B;">M</span>
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
    font-family: cursive;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #111;
    min-height: 100vh;
}

.loader {
    position: relative;
    cursor: default;
    -webkit-box-reflect: below -25px linear-gradient(transparent, #0005);
    span {
        position: relative;
        display: inline-flex;
        font-size: 3em;
        color: transparent;
        -webkit-text-stroke: 1px var(--clr);
        text-transform: uppercase;
        font-weight: bolder;
        animation: animate 2s ease-in-out infinite;
        animation-delay: calc(0.2s * var(--i));
    }
}

@keyframes animate {
    0%, 40%, 100% {
        transform: translateY(0px);
        color: transparent;
        text-shadow: none;
    }

    20% {
        transform: translateY(-60px);
        color: var(--clr);
        text-shadow: 
                    0 0 5px var(--clr),
                    0 0 25px var(--clr),
                    0 0 50px var(--clr);
    }
}
    `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/loading.rar';
}
