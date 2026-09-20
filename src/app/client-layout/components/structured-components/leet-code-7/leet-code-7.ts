import { Component } from '@angular/core';
import {
  IProblemSolvingContent,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-leet-code-7',
  imports: [SharedCodeComponent],
  template: `
    <app-shared-code
      [projectName]="'Remove Duplicates from Sorted Array'"
      [projectDescription]="'Remove duplicates in-place from a sorted array and return the number of unique elements.'"
      [projectDate]="'September 20, 2026'"
      [projectVersion]="'LeetCode #26'"
      [tags]="['Problem Solving', 'JavaScript', 'LeetCode', 'Two Pointers']"
      [isItProblemSolving]="true"
      [isProjectHasNotAssists]="false"
      [problemSolvingContent]="problemSolvingContent"
    />
  `,
  styles: ``
})
export class LeetCode7 {

  problemSolvingContent: IProblemSolvingContent = {

    problem: `
عندنا Array مترتبة تصاعديًا وممكن يكون فيها أرقام مكررة.

المطلوب إننا نشيل التكرار من الـ Array
من غير ما نعمل Array جديدة.

لازم كل رقم يظهر مرة واحدة بس
ونرجع عدد العناصر المختلفة اللي موجودة.

مثال:

nums = [1,1,2]

النتيجة:

k = 2
nums = [1,2,_]

الـ elements بعد الـ index k - 1 مش مهمة.
    `,

    generalIdea: `
بما إن الـ Array مترتبة
فكل الأرقام المكررة هتكون جنب بعض.

وده بيسهل علينا نعرف الرقم الجديد
عن طريق مقارنته بالرقم اللي قبله.

هنستخدم Pointer اسمه k
عشان يحدد المكان اللي هنحط فيه الرقم الجديد.

وفي نفس الوقت i هيمشي على الـ Array
عشان نكتشف الأرقام المختلفة.
    `,

    solutionIdea: `
هنبدأ بـ k = 1
لأن أول عنصر في الـ Array أكيد unique.

بعد كده نمشي بـ i من العنصر التاني.

في كل خطوة نقارن:

nums[i]
مع
nums[i - 1]

لو الاتنين زي بعض
يبقى الرقم Duplicate
ومش محتاجين نعمل حاجة.

لو مختلفين
يبقى لقينا رقم جديد.

نحطه في:

nums[k]

وبعدين نزود k.

في النهاية k هيكون عدد العناصر المختلفة
وأول k عناصر في الـ Array هي العناصر الـ unique.
    `,

    steps: [
      'نبدأ بـ k = 1 لأن أول عنصر unique.',
      'نبدأ نمشي بـ i من العنصر التاني.',
      'نقارن nums[i] مع nums[i - 1].',
      'لو الرقمين زي بعض نتجاهل الرقم الحالي.',
      'لو مختلفين يبقى لقينا رقم جديد.',
      'نحط الرقم الجديد في nums[k].',
      'نزود k.',
      'نكمل لحد نهاية الـ Array.',
      'نرجع k كعدد العناصر المختلفة.'
    ],

    example: {
      input: 'nums = [0,0,1,1,1,2,2,3,3,4]',
      output: 'k = 5, nums = [0,1,2,3,4,_,_,_,_,_]',
      explanation: `
الـ Array مترتبة
فالأرقام المكررة موجودة جنب بعض.

نبدأ بـ:

k = 1

أول رقم 0 موجود بالفعل.

لما نقابل 0 تاني
نكتشف إنه نفس الرقم اللي قبله
فنتجاهله.

لما نوصل لـ 1
نلاقي إنه مختلف عن الرقم اللي قبله
فنحطه في nums[k].

ونكرر نفس الفكرة مع:

2
3
4

في النهاية أول 5 عناصر تبقى:

[0,1,2,3,4]

وبالتالي:

k = 5
      `
    },

    complexity: {
      time: 'O(n)',
      space: 'O(1)'
    },

    code: [
      {
        codeTitle: 'remove-duplicates-from-sorted-array.ts',
        code: `
var removeDuplicates = function(nums) {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};
`
      }
    ],

    learned: [
      'فهم فكرة الـ Two Pointers.',
      'استغلال إن الـ Array مترتبة عشان نكتشف التكرار بسهولة.',
      'التعامل مع الـ Array In-place.',
      'استخدام Pointer لتحديد مكان العنصر الجديد.',
      'تجاهل العناصر المكررة من غير إنشاء Array جديدة.',
      'فهم الفرق بين i و k.',
      'الحفاظ على ترتيب العناصر الـ unique.',
      'فهم O(n) time complexity.',
      'فهم O(1) space complexity.'
    ]
  };
}