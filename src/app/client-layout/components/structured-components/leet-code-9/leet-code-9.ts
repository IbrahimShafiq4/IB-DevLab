import { Component } from '@angular/core';
import {
  IProblemSolvingContent,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-leet-code-9',
  imports: [SharedCodeComponent],
  template: `
    <app-shared-code
      [projectName]="'Find the Index of the First Occurrence in a String'"
      [projectDescription]="'Find the first position where one string occurs inside another string.'"
      [projectDate]="'September 30, 2026'"
      [projectVersion]="'LeetCode #28'"
      [tags]="['Problem Solving', 'JavaScript', 'LeetCode', 'String']"
      [isItProblemSolving]="true"
      [isProjectHasNotAssists]="false"
      [problemSolvingContent]="problemSolvingContent"
    />
  `,
  styles: ``
})
export class LeetCode9 {

  problemSolvingContent: IProblemSolvingContent = {

    problem: `
عندنا String اسمها haystack
و String تانية اسمها needle.

المطلوب إننا نعرف أول مكان
الـ needle ظهرت فيه جوه الـ haystack.

لو موجودة نرجع الـ index بتاع أول occurrence.

ولو مش موجودة نرجع -1.

مثال:

haystack = "sadbutsad"
needle = "sad"

النتيجة:

0
    `,

    generalIdea: `
هنستخدم indexOf() الموجودة في JavaScript.

الـ indexOf() بتدور على الـ needle
جوه الـ haystack.

لو لقتها بترجع index أول occurrence.

ولو ملقتهاش بترجع -1.
    `,

    solutionIdea: `
الحل بسيط جدًا.

نستخدم:

haystack.indexOf(needle)

الـ function هتدور على الـ needle
وترجع أول index ظهرت فيه.

ولو مش موجودة هترجع -1 تلقائيًا.
    `,

    steps: [
      'ناخد الـ haystack والـ needle.',
      'نستخدم indexOf() على الـ haystack.',
      'نبعت الـ needle للـ indexOf().',
      'لو موجودة نرجع أول index ظهرت فيه.',
      'لو مش موجودة indexOf() هترجع -1.',
      'نرجع النتيجة مباشرة.'
    ],

    example: {
      input: 'haystack = "sadbutsad", needle = "sad"',
      output: '0',
      explanation: `
الـ needle وهي "sad"
موجودة في الـ haystack أكتر من مرة.

أول مرة موجودة عند index 0
ومرة تانية عند index 6.

إحنا محتاجين أول occurrence بس.

عشان كده:

haystack.indexOf(needle)

هترجع:

0
      `
    },

    complexity: {
      time: 'O(n)',
      space: 'O(1)'
    },

    code: [
      {
        codeTitle: 'find-the-index-of-the-first-occurrence.ts',
        code: `
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};
`
      }
    ],

    learned: [
      'استخدام indexOf() للبحث داخل الـ String.',
      'فهم معنى First Occurrence.',
      'معرفة إن indexOf() بترجع أول index للمطابقة.',
      'معرفة إن indexOf() بترجع -1 لو الـ String مش موجودة.',
      'التعامل مع Strings في JavaScript.',
      'استخدام JavaScript built-in methods.',
      'فهم O(n) time complexity.',
      'فهم O(1) space complexity.'
    ]
  };
}