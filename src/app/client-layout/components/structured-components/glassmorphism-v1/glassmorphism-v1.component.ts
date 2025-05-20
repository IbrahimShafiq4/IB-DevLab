import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-glassmorphism-v1',
  imports: [SharedCodeComponent],
  templateUrl: './glassmorphism-v1.component.html',
  styleUrl: './glassmorphism-v1.component.scss'
})
export class GlassmorphismV1Component {
  projectName: string = '✨ Glassmorphism UI Card';
  projectDescription: string = `A modern and minimal glassmorphism-style card built with HTML and CSS. Featuring a semi-transparent, frosted glass effect with blur and soft shadows, this UI component blends beautifully with vibrant backgrounds. Ideal for landing pages, portfolios, or any elegant web interface design that requires a sleek, futuristic look.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS'];
  projectVideSrc: string = './../../../../../assets/video-samples/glassmorphism v1.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glassmorphism</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="glass">
        <h1>Hello</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam assumenda, nisi ut soluta voluptatum
            quidem ducimus dolor quae necessitatibus!
        </p>
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
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #d593e684 20%, #60badbe1 80%);
  width: 100%;
}

.glass {
  border: 1px solid rgba(255, 255, 255, 0.35);
  width: 20rem;
  height: 20rem;
  padding: 2.5rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.8rem);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > * {
      font-family: 'Courier New', Courier, monospace;
  }

  p {
      line-height: 1.5;
  }
}

    `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/glassmorphism v1.rar';
}
