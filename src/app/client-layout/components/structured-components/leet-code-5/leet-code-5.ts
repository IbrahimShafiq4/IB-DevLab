import { Component } from '@angular/core';
import {
  IProblemSolvingContent,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-leet-code-5',
  imports: [SharedCodeComponent],
  template: `
    <app-shared-code
      [projectName]="'Valid Parentheses'"
      [projectDescription]="'Check if brackets are opened and closed in the correct order.'"
      [projectDate]="'September 17, 2026'"
      [projectVersion]="'LeetCode #20'"
      [tags]="['Problem Solving', 'JavaScript', 'LeetCode']"
      [isItProblemSolving]="true"
      [isProjectHasNotAssists]="false"
      [problemSolvingContent]="problemSolvingContent"
    />
  `,
  styles: ``
})
export class LeetCode5 {

  problemSolvingContent: IProblemSolvingContent = {

    problem: `
عندنا String فيها أقواس بس:
(), [], {}

ومطلوب نحدد هل الأقواس دي Valid ولا لأ.

عشان تكون Valid:
- كل قوس مفتوح لازم يتقفل بنفس النوع.
- الأقواس لازم تتقفل بالترتيب الصح.
- كل قوس قفل لازم يكون ليه قوس فتح قبله.
    `,

    generalIdea: `
هنستخدم Stack عشان نتابع الأقواس المفتوحة.

كل ما نقابل قوس فتح
نحطه في الـ Stack.

ولما نقابل قوس قفل
نبص على آخر قوس موجود في الـ Stack.

لو هو القوس المناسب ليه
نشيله ونكمل.

لو مش مناسب
يبقى الترتيب غلط ونرجع false.
    `,

    solutionIdea: `
الـ Stack مناسب جدًا للمشكلة دي
لأن آخر قوس فتحناه لازم يكون أول قوس نقفله.

لو قابلنا:
"([])"

هنحط:
(
وبعدين [

لما نوصل لـ ]
هنلاقي [ هو آخر عنصر في الـ Stack
فنشيله.

وبعدين ) يقفل (
وبكده الـ Stack يبقى فاضي
فنرجع true.

لكن لو قابلنا قوس قفل مش مطابق لآخر قوس مفتوح
نرجع false على طول.
    `,

    steps: [
      'نبدأ بـ Stack فاضي.',
      'نمشي على الـ String حرف حرف.',
      'لو الحرف قوس فتح نحطه في الـ Stack.',
      'لو الحرف قوس قفل نقارن مع آخر عنصر في الـ Stack.',
      'لو القوس مش مطابق نرجع false.',
      'لو مطابق نشيله من الـ Stack.',
      'بعد ما نخلص لازم الـ Stack يكون فاضي.',
      'لو فاضي نرجع true.'
    ],

    example: {
      input: '"([])"',
      output: 'true',
      explanation: `
نبدأ بالقوس "(" ونحطه في الـ Stack.

بعده "[" فنحطه فوقه.

لما نوصل لـ "]"
نلاقي إن آخر قوس في الـ Stack هو "["
فنشيله.

بعد كده ")" ونلاقي إن آخر قوس هو "("
فنشيله برضه.

في النهاية الـ Stack فاضي
يبقى كل الأقواس اتقفلت بالترتيب الصح
فالنتيجة true.
      `
    },

    complexity: {
      time: 'O(n)',
      space: 'O(n)'
    },

    code: [
      {
        codeTitle: 'valid-parentheses.ts',
        code: `
var isValid = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (
            char === "(" ||
            char === "[" ||
            char === "{"
        ) {
            stack.push(char);
        } else {
            if (
                (char === ")" && stack[stack.length - 1] !== "(") ||
                (char === "]" && stack[stack.length - 1] !== "[") ||
                (char === "}" && stack[stack.length - 1] !== "{")
            ) {
                return false;
            }

            stack.pop();
        }
    }

    return stack.length === 0;
};
`
      }
    ],

    learned: [
      'فهم فكرة الـ Stack واستخدامه.',
      'فهم مبدأ Last In First Out.',
      'مطابقة الأقواس حسب النوع والترتيب.',
      'استخدام stack.push() لإضافة العناصر.',
      'استخدام stack.pop() لإزالة آخر عنصر.',
      'استخدام early return لما نلاقي قوس غير صحيح.',
      'فهم O(n) time complexity.'
    ]
  };
}