import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from "../../../../shared-components/shared-code/shared-code.component";

@Component({
  selector: 'app-circular-logo',
  imports: [SharedCodeComponent],
  templateUrl: './circular-logo.html',
  styleUrl: './circular-logo.scss'
})
export class CircularLogo {
  projectName: string = 'Conic Gradient Hover Buttons with Social Icons – Pure CSS 🎨';
  projectDescription: string = `
A sleek, modern button set featuring social media icons (LinkedIn, GitHub, Facebook) wrapped in interactive circular borders. When hovered, the buttons animate with a smooth conic gradient fill effect, giving a high-tech, dynamic glow around the icons. This effect is achieved using the experimental CSS @property feature, allowing a custom CSS variable (--fill) to transition seamlessly.
<br />
⚙️ Key Features:
<ul> <li>🌐 Built with **pure HTML & CSS** – no JavaScript needed</li> <li>🔵 **Conic gradient animation** using the \`--fill\` variable and \`@property\`</li> <li>💡 **Font Awesome icons** for instantly recognizable branding</li> <li>🌀 Fully **circular buttons** with centered content and hover transitions</li> <li>🎯 **Clean, scalable design** perfect for footers, portfolios, or contact sections</li> </ul>
<br />
🎨 Customization Tips:
<ul> <li>🎨 Change the gradient color (\`greenyellow\`) to match your brand or theme</li> <li>🔁 Add more icons or wrap them in \`<a>\` tags for direct links</li> <li>🧩 Adjust the size of \`.btn\` and font-size of icons for larger or smaller buttons</li> <li>💥 Add \`box - shadow\` on hover for a glowing ring effect</li> <li>📱 Ensure responsiveness by setting \`rem\` units relative to root font size or using media queries</li> </ul>
<br />
🧪 Note: The @property rule is experimental and may not be supported in all browsers (e.g., Firefox). Consider using fallback hover transitions for broader compatibility.`;
  projectDate: string = 'Last updated: June 2025';
  projectVersion: string = 'v1.0.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS'];
  projectVideSrc: string = './../../../../../assets/video-samples/circular logo.mp4';

  HTMLCodeSnippets: ICodeStructure[] = [
    {
      code: `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
  <title>Circular Logo</title>
</head>

<body>
  <div class="container">
      <button class="outside">
          <div class="btn"><i class="fa-brands fa-linkedin"></i></div>
      </button>
      <button class="outside">
          <div class="btn"><i class="fa-brands fa-github"></i></div>
      </button>
      <button class="outside">
          <div class="btn"><i class="fa-brands fa-facebook"></i></div>
      </button>
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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body{
  width: 100%;
  height: 100%;
  background: #000;
}

.container{
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.btn{
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #2d2a2a;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.btn i{
  font-size: 1.8rem;
  color: #7a7a7a;
  transition: 0.6s;
}

@property --fill {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: true;
}

.outside{
  padding: 3px;
  background: conic-gradient(greenyellow var(--fill), transparent var(--fill));
  border-radius: 50%;
  cursor: pointer;
  border: none;
  outline: none;
  transition: --fill 0.8s ease-in-out;
}

.outside:hover{
  --fill: 100%
}

.outside:hover .btn i{
  color: greenyellow;
}
    `,
      codeTitle: 'style.css'
    }
  ];

  zipFile: string = 'assets/zip-files/circular logo.rar';
}
