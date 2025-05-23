import { Component } from '@angular/core';
import { ICodeStructure, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-text-v4',
  imports: [SharedCodeComponent],
  templateUrl: './text-v4.component.html',
  styleUrl: './text-v4.component.scss'
})
export class TextV4Component {
  projectName: string = '🔤 Scroll-Reveal Text Animation with JavaScript and CSS';
  projectDescription: string = `
This interactive scroll animation showcases a glowing text effect where each character in a paragraph becomes highlighted as you scroll down the page. Using only vanilla JavaScript and CSS transitions, this effect creates an engaging experience that draws attention to each letter dynamically. Perfect for portfolios, hero sections, or any project where visual storytelling matters.`;
  projectDate: string = 'Last updated: May 2025';
  projectVersion: string = 'v1.5.0';
  projectTags: string[] = ['Web Development', 'HTML', 'CSS', 'JS'];
  projectVideSrc: string = './../../../../../assets/video-samples/text v4.mp4';

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
    <div class="box">
        <h2>Hello World🔥</h2>
        <p class="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repellendus laboriosam atque itaque quae
            suscipit. Sint non voluptas ex soluta ad expedita corrupti ut tempora, reiciendis id perferendis amet,
            laudantium molestias nemo voluptatum fugiat enim at facere consequuntur illum repudiandae odit facilis!
            Delectus beatae quo reprehenderit cum, earum aspernatur totam accusantium suscipit voluptates sed libero
            omnis mollitia neque quisquam dicta. At non voluptas minus veniam pariatur vero, vel neque dicta suscipit
            maiores laborum maxime sit dolorem repellendus magnam eos sint odio placeat laboriosam soluta. Repudiandae
            eveniet alias autem ducimus, mollitia facere, ipsa aut iste rerum, quis harum iusto fugit laborum.
        </p>
    </div>
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
  font-family: Arial, Helvetica, sans-serif;
}

body {
  display: flex;
  background-color: #333;
  justify-content: center;
  align-items: center;
  min-height: 710vh;
}

.box {
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  width: 50%;
  max-width: 80%;
}

h2 {
  color: #fff;
  font-size: 2.5em;
  font-weight: 600;
}

p {
  color: #fff;
}

p span {
  opacity: 0;
  transform: translateY(10px);
  transition:
      opacity 0.3s ease,
      transform 0.3s ease;
}

p span.active {
  opacity: 1;
  transform: translateY(0);
  color: #0f0;
  text-shadow: 0 0 5px #0f0;
}

    `,
      codeTitle: 'style.css'
    }
  ];

  JSCodeSnippets: ICodeStructure[] = [
    {
      code: `
let textEl = document.querySelector('.text'); // هنا بنجيب العنصر اللي عنده الكلاس "text"
let textContentData = textEl.textContent; // هنا بنخزن النص اللي جوه العنصر في متغير
textEl.innerHTML = ''; // هنا بنفضي المحتوى اللي جوه العنصر

for (let char of textContentData) { 
    // هنا بنلف على كل حرف في النص
    let span = document.createElement('span'); // بنخلق عنصر جديد من نوع "span"
    span.textContent = char; // بنحط الحرف جوه العنصر اللي لسه عملناه
    textEl.appendChild(span); // بنضيف العنصر "span" الجديد ده كطفل للعنصر اللي فيه الكلاس "text"
}

let spans = document.querySelectorAll('span'); // هنا بنجيب كل عناصر الـ "span" اللي لسه ضفناها
window.addEventListener('scroll', (e) => { 
    // بنسمع حدث "السكرول" اللي بيحصل في الويندو
    let scrollPosition = window.scrollY; // هنا بنجيب قيمة السكرول الراسية (Y) يعني قد ايه المستخدم سكرول تحت
    spans.forEach((span, index) => { 
        // هنا بنلف على كل عنصر من عناصر "span" اللي جبناها
        if (scrollPosition >= (index + 1) * 10) { 
            // لو السكرول وصل لمستوى معين بنحسبه على حسب ترتيب الحرف
            span.classList.add('active'); // نضيف كلاس "active" للعنصر "span"
        } else { 
            // لو السكرول مبقاش في المستوى ده
            span.classList.remove('active'); // نشيل كلاس "active" من العنصر "span"
        }
    });
});
      `,
      codeTitle: 'main.js'
    },
  ];

  zipFile: string = 'assets/zip-files/scrolling + text.rar';
}