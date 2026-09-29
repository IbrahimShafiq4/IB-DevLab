import { Component } from '@angular/core';
import {
  IProblemSolvingContent,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-leet-code-8',
  imports: [SharedCodeComponent],
  template: `
  <app-shared-code
  [projectName]="'Remove Element'"
  [projectDescription] = "'Remove all occurrences of a given value in-place from an array and return the number of remaining elements.'"
  [projectDate] = "'September 29, 2026'"
  [projectVersion] = "'LeetCode #27'"
  [tags] = "['Problem Solving', 'TypeScript', 'LeetCode', 'Two Pointers']"
  [isItProblemSolving] = "true"
  [isProjectHasNotAssists] = "false"
  [problemSolvingContent] = "problemSolvingContent"
  />
    `,
  styles: ``
})
export class LeetCode8 {

  problemSolvingContent: IProblemSolvingContent = {

    problem: `
عندنا Array اسمها nums
وعندنا رقم اسمه val.

المطلوب إننا نشيل كل الـ occurrences
من الرقم val من الـ Array
من غير ما نعمل Array جديدة.

لازم أول k عناصر في الـ Array
يكونوا كل العناصر اللي مش بتساوي val.

وفي النهاية نرجع k
وهو عدد العناصر اللي فضلوا.

  مثال:

nums = [3, 2, 2, 3]
val = 3

النتيجة:

k = 2
nums = [2, 2, _, _]

الـ elements بعد الـ index k - 1 مش مهمة.
    `,

    generalIdea: `
هنستخدم Two Pointers.

Pointer اسمه i
هيمشي على كل عناصر الـ Array
عشان يفحص كل عنصر.

و Pointer اسمه k
هيحدد المكان اللي هنحط فيه العنصر
اللي مش بيساوي val.

  لو:

nums[i] !== val

يبقى العنصر ده محتاجين نحتفظ بيه.

نحطه في:

nums[k]

وبعدين نزود k.

أما لو العنصر بيساوي val
بنتجاهله ونكمل.
    `,

    solutionIdea: `
هنبدأ بـ:

k = 0

لأن في البداية
مفيش أي عنصر صالح اتحفظ.

بعد كده i هيمشي من أول Array لآخرها.

في كل خطوة:

لو nums[i] === val
نتجاهل العنصر.

لو nums[i] !== val
يبقى العنصر محتاجين نحتفظ بيه.

فنحطه في:

nums[k]

وبعدين:

k++

في النهاية k
هيكون عدد العناصر اللي مش بتساوي val.

وأول k عناصر في الـ Array
هي العناصر المطلوبة.
    `,

    steps: [
      'نبدأ بـ k = 0 لأن مفيش عناصر محفوظة في البداية.',
      'نبدأ نمشي بـ i من أول عنصر في الـ Array.',
      'نفحص nums[i].',
      'لو nums[i] بيساوي val نتجاهله.',
      'لو nums[i] مختلف عن val يبقى عنصر صالح.',
      'نحط العنصر في nums[k].',
      'نزود k بعد إضافة العنصر.',
      'نكمل لحد نهاية الـ Array.',
      'نرجع k كعدد العناصر اللي مش بتساوي val.'
    ],

    example: {
      input: 'nums = [0,1,2,2,3,0,4,2], val = 2',
      output: 'k = 5, nums = [0,1,3,0,4,_,_,_]',
      explanation: `
نبدأ بـ:

k = 0

نمر على الـ Array عنصر عنصر.

0 مش بيساوي 2
فنحطه في nums[0]
وبالتالي:

k = 1

1 مش بيساوي 2
فنحطه في nums[1]
وبالتالي:

k = 2

أول 2 بنقابله
بنتجاهله لأنه بيساوي val.

نكرر نفس الفكرة مع الـ 2 التاني.

لما نوصل لـ 3
مش بيساوي 2
فنحطه في nums[2].

بعد كده 0
نحطه في nums[3].

بعد كده 4
نحطه في nums[4].

  آخر 2
بنتجاهله.

في النهاية:

k = 5

وأول 5 عناصر ممكن تكون:

[0, 1, 3, 0, 4]

والعناصر بعد أول 5
مش مهمة.
      `
    },

    complexity: {
      time: 'O(n)',
      space: 'O(1)'
    },

    code: [
      {
        codeTitle: 'remove-element.ts',
        code: `
function removeElement(nums: number[], val: number): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}
`
      }
    ],

    learned: [
      'فهم فكرة الـ Two Pointers.',
      'التعامل مع الـ Array In-place.',
      'إزالة عناصر معينة من غير إنشاء Array جديدة.',
      'استخدام Pointer لتحديد مكان العنصر الصحيح.',
      'فهم الفرق بين i و k.',
      'تجاهل العناصر اللي بتساوي val.',
      'الحفاظ على العناصر اللي مش بتساوي val.',
      'فهم إن العناصر بعد k مش مهمة.',
      'فهم O(n) time complexity.',
      'فهم O(1) space complexity.'
    ]
  };
}
