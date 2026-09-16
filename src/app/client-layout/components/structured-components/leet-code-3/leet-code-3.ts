import { Component } from '@angular/core';
import { IProblemSolvingContent, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-leet-code-3',
  imports: [SharedCodeComponent],
  template: `
    <app-shared-code
      [projectName]="'Palindrome Number'"
      [projectDescription]="'Check if an integer reads the same forward and backward.'"
      [projectDate]="'September 15, 2026'"
      [projectVersion]="'LeetCode #9'"
      [tags]="['Problem Solving', 'JavaScript', 'LeetCode']"
      [isItProblemSolving]="true"
      [isProjectHasNotAssists]="false"
      [problemSolvingContent]="problemSolvingContent"
    />
  `,
  styles: ``
})
export class LeetCode3 {

  problemSolvingContent: IProblemSolvingContent = {

    problem: `
Given an integer x, return true لو الرقم Palindrome
يعني بيتقري بنفس الشكل من الناحيتين.

مثال:
121 → true
-121 → false
10 → false
    `,

    generalIdea: `
الفكرة ببساطة إننا محتاجين نقارن أول رقم بآخر رقم
وبعدين الرقم اللي بعده بالرقم اللي قبله من الآخر.

لو كل الأرقام المتقابلة متساوية يبقى الرقم Palindrome.
أول ما نلاقي رقمين مختلفين نرجع false.
    `,

    solutionIdea: `
هنحوّل الرقم لـ String عشان نقدر نوصل لكل رقم بالـ index.

بعد كده هنمشي لحد نص الـ String بس.

في كل مرة هناخد رقم من البداية ورقم من النهاية
ونقارن بينهم.

لو مختلفين نرجع false على طول.

لو خلصنا المقارنات كلها من غير اختلاف
يبقى الرقم Palindrome ونرجع true.
    `,

    steps: [
      'نحوّل الرقم لـ String.',
      'نبدأ Loop من أول الرقم لحد النص بس.',
      'ناخد الرقم الحالي من البداية.',
      'ناخد الرقم المقابل ليه من النهاية.',
      'نقارن بينهم.',
      'لو مختلفين نرجع false على طول.',
      'لو كل المقارنات عدت بنجاح نرجع true.'
    ],

    example: {
      input: '121',
      output: 'true',
      explanation: `
الرقم 121.

أول رقم هو 1 وآخر رقم هو 1
الاتنين زي بعض.

بعد كده الرقم اللي في النص مش محتاج نقارنه
لأنه لوحده في المنتصف.

بالتالي الرقم Palindrome والنتيجة true.
      `
    },

    complexity: {
      time: 'O(n)',
      space: 'O(n)'
    },

    code: [
      {
        codeTitle: 'palindrome-number.ts',
        code: `
var isPalindrome = function(x) {
    const palindromNum = x.toString();

    for (let i = 0; i < palindromNum.length / 2; i++) {
        const j = palindromNum.length - 1 - i;

        if (palindromNum[i] !== palindromNum[j]) {
            return false;
        }
    }

    return true;
};
`
      },
      {
        codeTitle: 'palindrome-number.ts',
        code: `
        var isPalindrome = function(x) { 
          const str = x.toString(); 
          return str === str.split('').reverse().join(''); 
        };
        `
      }
    ],

    learned: [
      'فهم فكرة الـ Palindrome.',
      'مقارنة العناصر من البداية والنهاية.',
      'استخدام الـ index للوصول للعناصر المتقابلة.',
      'تقليل عدد المقارنات للنص فقط.',
      'استخدام early return لما نلاقي اختلاف.',
      'فهم O(n) time complexity.',
      'التعامل مع String كطريقة بسيطة لفحص الرقم.'
    ]
  };
}
