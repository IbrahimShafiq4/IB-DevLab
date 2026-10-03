import { Component } from '@angular/core';
import {
  IProblemSolvingContent,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-leet-code-11',
  imports: [SharedCodeComponent],
  template: `
    <app-shared-code
      [projectName]="'Length of Last Word'"
      [projectDescription]="'Find the length of the last word in a string.'"
      [projectDate]="'October 2, 2026'"
      [projectVersion]="'LeetCode #58'"
      [tags]="['Problem Solving', 'JavaScript', 'LeetCode', 'String']"
      [isItProblemSolving]="true"
      [isProjectHasNotAssists]="false"
      [problemSolvingContent]="problemSolvingContent"
    />
  `,
  styles: ``
})
export class LeetCode11 {

  problemSolvingContent: IProblemSolvingContent = {

    problem: `
عندنا String فيها كلمات ومسافات.

المطلوب إننا نجيب طول آخر كلمة في الـ String.

مثال:

s = "Hello World"

آخر كلمة هي:

"World"

وطولها:

5

مثال تاني:

s = "   fly me   to   the moon  "

آخر كلمة هي:

"moon"

وطولها:

4
    `,

    generalIdea: `
عندنا أكتر من طريقة نحل بيها المشكلة.

أبسط طريقة إننا نشيل المسافات من البداية والنهاية
باستخدام trim()
وبعدين نقسم الـ String لكلمات.

ممكن كمان نستخدم split() و filter()
عشان نتخلص من الـ spaces.

وفي حل تالت نقدر نمشي من آخر الـ String
ونتجاهل الـ spaces الأول
وبعدين نعد حروف آخر كلمة.

الحل التالت مش محتاج نعمل Array جديدة
وعشان كده بيستخدم Space أقل.
    `,

    solutionIdea: `
Solution 1:

نستخدم trim() عشان نشيل الـ spaces من البداية والنهاية.

بعد كده نستخدم split(" ")
عشان نقسم الـ String لكلمات.

وبعدين pop()
عشان ناخد آخر كلمة.

وفي النهاية نجيب length بتاعها.

Solution 2:

نستخدم split(" ")
وبعدين filter()
عشان نشيل الـ empty strings اللي ممكن تنتج من المسافات المتكررة.

بعد كده ناخد آخر كلمة باستخدام pop()
ونجيب length بتاعها.

Solution 3:

نبدأ من آخر حرف في الـ String.

أول حاجة نتخطى كل الـ spaces الموجودة في الآخر.

بعد كده نبدأ نعد الحروف
لحد ما نوصل لـ space أو بداية الـ String.

العدد اللي وصلناله هو طول آخر كلمة.
    `,

    steps: [
      'نحدد إننا محتاجين آخر كلمة بس.',
      'في الحل الأول نستخدم trim() لإزالة المسافات من الأطراف.',
      'نستخدم split(" ") عشان نقسم الـ String لكلمات.',
      'نستخدم pop() عشان ناخد آخر كلمة.',
      'في الحل التاني نستخدم filter() لإزالة الـ empty strings.',
      'في الحل التالت نبدأ من آخر الـ String.',
      'نتخطى الـ spaces الموجودة في النهاية.',
      'نبدأ نعد حروف آخر كلمة.',
      'نوقف لما نوصل لـ space أو بداية الـ String.',
      'نرجع عدد الحروف.'
    ],

    example: {
      input: 's = "   fly me   to   the moon  "',
      output: '4',
      explanation: `
عندنا:

"   fly me   to   the moon  "

آخر كلمة هي:

"moon"

عدد حروفها:

m → 1
o → 2
o → 3
n → 4

إذن النتيجة:

4
      `
    },

    complexity: {
      time: 'O(n)',
      space: 'O(n) في الحلول التي تستخدم split/filter — O(1) في الحل الثالث'
    },

    code: [
      {
        codeTitle: 'length-of-last-word-trim.ts',
        code: `
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};
`
      },
      {
        codeTitle: 'length-of-last-word-filter.ts',
        code: `
var lengthOfLastWord = function(s) {
    return s
        .split(" ")
        .filter(word => word !== "")
        .pop()
        .length;
};
`
      },
      {
        codeTitle: 'length-of-last-word-two-pointers.ts',
        code: `
var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    let count = 0;

    while (s[i] === " ") {
        i--;
    }

    while (i >= 0 && s[i] !== " ") {
        count++;
        i--;
    }

    return count;
};
`
      }
    ],

    learned: [
      'التعامل مع الـ Strings والمسافات.',
      'استخدام trim() لإزالة المسافات من البداية والنهاية.',
      'استخدام split() لتقسيم الـ String.',
      'استخدام filter() للتخلص من الـ empty strings.',
      'استخدام pop() للوصول لآخر عنصر.',
      'التعامل مع الـ String من النهاية باستخدام index.',
      'فهم فكرة العد من آخر كلمة.',
      'تقليل الـ Space Complexity باستخدام الحل الثالث.',
      'فهم O(n) Time Complexity.',
      'فهم الفرق بين O(n) و O(1) في الـ Space.'
    ]
  };
}