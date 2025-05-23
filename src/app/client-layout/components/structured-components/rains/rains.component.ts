import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-rains',
  imports: [SharedCodeComponent],
  templateUrl: './rains.component.html',
  styleUrl: './rains.component.scss'
})
export class RainsComponent {
  projectName: string = '🌈 Colorful Rains Animation with JavaScript and CSS';
  projectDescription: string = `
This visual animation project creates a beautiful rain of glowing, colorful circles falling from the top of the screen. Each circle has a unique size and hue, simulating a magical "color rain" effect. The animation is built using vanilla JavaScript to dynamically generate elements and CSS for styling and smooth falling transitions. Ideal for landing pages, creative backgrounds, or coding showcases.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.3.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/rains.mp4';

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
  <h2>Colorful Rains</h2>
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
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #262626;
  background-image: linear-gradient(to right, #333 1px, transparent 1px),
      linear-gradient(to bottom, #333 1px, transparent 1px);
  background-size: 5vh 5vh;
  overflow: hidden;
}

h2 {
  font-family: Consolas;
  font-size: 8em;
  color: #fff;
  text-shadow: 1px 1px 5px #FFFAE6;
  filter: drop-shadow(1px 1px 5px #fffae6);
}

.circle {
  position: absolute;
  top: 0;
  width: 20px;
  aspect-ratio: 1 / 1;
  border: 5px solid rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  background-color: #0f0;
  animation: animate 10s linear forwards;
  transform-origin: top;
}

@keyframes animate {
  0% {
      transform: translateY(0vh) scale(0);
  }

  10% {
      transform: translateY(0vh) scale(1);
  }

  45% {
      transform: translateY(0vh) scale(1);
  }

  55% {
      transform: translateY(calc(100vh - 100%)) scale(1);
  }

  90% {
      transform: translateY(calc(100vh - 100%)) scale(1);
      transform-origin: bottom;
  }

  100% {
      transform: translateY(calc(100vh - 100%)) scale(0);
      transform-origin: bottom;
  }
}
    `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
function falling() {
    // هنا بعمل عنصر جديد من نوع div
    let divEl = document.createElement('div');
    
    // بضيف للعنصر class اسمه 'circle' علشان يديله التنسيقات المطلوب
    divEl.setAttribute('class', 'circle');
    
    // بعد كده بضيف العنصر ده للصفحة علشان يظهر فيها
    document.body.appendChild(divEl);
    
    // بحسب حجم عشوائي للعنصر عشان كل دايرة تبقى بحجم مختلف
    let size = Math.random() * 50;
    
    // بحدد عرض العنصر بحيث يكون على الأقل 5px ويزيد بالرقم العشوائي اللي حسبناه
    divEl.style.width = \`\${5 + size}px\`;
    
    // بحدد مكان العنصر بشكل عشوائي في العرض بتاع الشاشة
    divEl.style.left = Math.random() * innerWidth + 'px';
    
    // بجيب زاوية عشوائية من 0 لـ 360 درجة لتغيير اللون
    let angle = Math.random() * 360;

    // بضيف للعنصر تأثير ضوء أخضر حوالين الدائرة
    divEl.style.boxShadow = '0 0 20px #0f0'
    
    // بغير لون الدائرة باستخدام الفلتر hue-rotate بزاوية عشوائية
    divEl.style.filter = \`hue-rotate(\${angle}deg)\`;

    // بعد 10 ثواني بشيل العنصر من الصفحة علشان مايتراكمش
    setTimeout(() => {
        document.body.removeChild(divEl)
    }, 10000)
}

// بكرر عملية إنشاء الدوائر كل 200 ملي ثانية
setInterval(() => {
    falling()
}, 200)
      `,
      codeTitle: 'main.js'
    },
  ];

  zipFile: string = 'assets/zip-files/colorful rains.rar';
}
