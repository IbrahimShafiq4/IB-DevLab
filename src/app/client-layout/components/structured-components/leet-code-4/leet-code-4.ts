import { Component } from '@angular/core';
import {
  IProblemSolvingContent,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-leet-code-4',
  imports: [SharedCodeComponent],
  template: `
    <app-shared-code
      [projectName]="'Longest Common Prefix'"
      [projectDescription]="'Find the longest prefix shared by all strings.'"
      [projectDate]="'September 16, 2026'"
      [projectVersion]="'LeetCode #14'"
      [tags]="['Problem Solving', 'JavaScript', 'LeetCode']"
      [isItProblemSolving]="true"
      [isProjectHasNotAssists]="false"
      [problemSolvingContent]="problemSolvingContent"
    />
  `,
  styles: ``
})
export class LeetCode4 {

  problemSolvingContent: IProblemSolvingContent = {

    problem: `
عندنا Array فيها شوية Strings
ومطلوب نطلع أطول جزء موجود في بداية كل الـ Strings.

يعني لو عندنا:
["flower", "flow", "flight"]

الـ common prefix بينهم هو:
"fl"

ولو مفيش أي حروف مشتركة في البداية
نرجع String فاضية.
    `,

    generalIdea: `
هنمشي على حروف أول String واحدة واحدة
ونقارن كل حرف بنفس الـ position في باقي الـ Strings.

أول ما نلاقي حرف مختلف في أي String
نرجع الـ prefix اللي جمعناه لحد اللحظة دي.

لو كل الـ Strings كملت بنفس الحروف
نكمل لحد نهاية أول String.
    `,

    solutionIdea: `
هنستخدم أول String كمرجع للمقارنة.

لكل حرف فيها:
- نقارنه بنفس الـ index في باقي الـ Strings.
- لو لقينا اختلاف نرجع النتيجة اللي جمعناها.
- لو كل الـ Strings عندها نفس الحرف نضيفه للـ result.

بكده أول ما يحصل اختلاف بنوقف على طول
ومش محتاجين نكمل باقي الحروف.
    `,

    steps: [
      'نبدأ بـ result فاضي.',
      'نمشي على حروف أول String.',
      'نقارن الحرف الحالي بنفس الـ index في باقي الـ Strings.',
      'لو لقينا اختلاف نرجع result على طول.',
      'لو كل الـ Strings فيها نفس الحرف نضيفه للـ result.',
      'نكمل لحد نهاية أول String.',
      'في الآخر نرجع الـ result.'
    ],

    example: {
      input: '["flower", "flow", "flight"]',
      output: '"fl"',
      explanation: `
نبدأ بأول حرف وهو "f".

بنلاقي "f" موجود في نفس المكان
في flower و flow و flight
فنكمل.

الحرف اللي بعده "l"
وبرضه موجود في الـ 3 Strings.

بعد كده بنوصل للحرف "o"
لكن flight عندها "i" في نفس المكان.

يبقى هنا حصل اختلاف
فنوقف ونرجع "fl".
      `
    },

    complexity: {
      time: 'O(n × m)',
      space: 'O(1)'
    },

    code: [
      {
        codeTitle: 'longest-common-prefix.ts',
        code: `
var longestCommonPrefix = function(strs) {
    let result = '';

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return result;
            }
        }

        result += strs[0][i];
    }

    return result;
};
`
      },
      {
        codeTitle: 'longest-common-prefix.ts',
        code: `
var longestCommonPrefix = function(strs) {
  strs.sort();

  const first = strs[0];
  const last = strs[strs.length - 1];

  let i = 0;

  while (i < first.length && i < last.length && first[i] === last[i]) {
      i++;
  }

  return first.slice(0, i);
};
`
      }
    ],

    learned: [
      'فهم فكرة الـ Common Prefix.',
      'استخدام أول String كمرجع للمقارنة.',
      'المقارنة بين الـ Strings باستخدام الـ index.',
      'استخدام Nested Loops للمقارنة بين الحروف.',
      'إيقاف الـ Loop أول ما نلاقي اختلاف.',
      'التعامل مع Arrays of Strings.',
      'فهم O(n × m) time complexity.'
    ]
  };
}