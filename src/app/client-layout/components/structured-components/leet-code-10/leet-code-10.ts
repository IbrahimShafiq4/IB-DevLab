import { Component } from '@angular/core';
import {
  IProblemSolvingContent,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-leet-code-10',
  imports: [SharedCodeComponent],
  template: `
    <app-shared-code
      [projectName]="'Search Insert Position'"
      [projectDescription]="'Find the index where the target exists or should be inserted in a sorted array.'"
      [projectDate]="'October 1, 2026'"
      [projectVersion]="'LeetCode #35'"
      [tags]="['Problem Solving', 'JavaScript', 'LeetCode', 'Binary Search']"
      [isItProblemSolving]="true"
      [isProjectHasNotAssists]="false"
      [problemSolvingContent]="problemSolvingContent"
    />
  `,
  styles: ``
})
export class LeetCode10 {

  problemSolvingContent: IProblemSolvingContent = {

    problem: `
عندنا Array مترتبة تصاعديًا
وكل العناصر فيها مختلفة.

المطلوب إننا نرجع الـ index بتاع الـ target
لو موجود.

ولو مش موجود
نرجع الـ index اللي المفروض الـ target يتحط فيه
عشان الـ Array تفضل مترتبة.

مثال:

nums = [1,3,5,6]
target = 5

النتيجة:

2

ولو:

target = 2

فالـ 2 مكانها بين 1 و 3
يعني:

[1,2,3,5,6]

فالنتيجة:

1
    `,

    generalIdea: `
عندنا أكتر من طريقة للحل.

أول طريقة نمشي على الـ Array عنصر عنصر
ونشوف أول عنصر أكبر من أو بيساوي الـ target.

الطريقة دي بسيطة
لكن الـ Time Complexity بتاعتها O(n).

بما إن الـ Array مترتبة
فنقدر نستغل الترتيب ونستخدم Binary Search.

بدل ما نمشي على كل العناصر
كل مرة هنستبعد نص الـ Array.

وبكده نوصل لـ O(log n).
    `,

    solutionIdea: `
Solution 1:

نمشي على الـ Array.

لو لقينا الـ target
نرجع الـ index بتاعه.

ولو لقينا عنصر أكبر من الـ target
يبقى الـ target مكانه قبل العنصر ده.

ولو الـ target أكبر من كل العناصر
مكانه هيكون بعد آخر عنصر.

Solution 2:

نستخدم Binary Search.

نحدد left و right
ونحسب الـ mid.

لو nums[mid] هو الـ target
نرجع mid.

لو nums[mid] أصغر من الـ target
نحرك left للجزء اليمين.

ولو أكبر
نحرك right للجزء الشمال.

في النهاية left هيكون بالظبط
المكان اللي الـ target المفروض يتحط فيه.

Solution 3:

نستخدم نفس فكرة الـ Linear Search
لكن بطريقة أبسط.

أول عنصر يكون أكبر من أو يساوي الـ target
هو مكان الـ target.

ولو مفيش عنصر كده
نرجع nums.length.
    `,

    steps: [
      'نبدأ من أول عنصر في الـ Array.',
      'لو العنصر بيساوي الـ target نرجع الـ index.',
      'لو العنصر أكبر من الـ target نرجع الـ index بتاعه.',
      'لو كل العناصر أصغر من الـ target نرجع nums.length.',
      'في حل الـ Binary Search نحدد left و right.',
      'نحسب الـ mid ونقارن قيمته بالـ target.',
      'نستبعد نصف الـ Array في كل خطوة.',
      'في النهاية left بيمثل مكان الـ target.'
    ],

    example: {
      input: 'nums = [1,3,5,6], target = 4',
      output: '2',
      explanation: `
الـ Array:

[1,3,5,6]

والـ target هو:

4

نمشي على العناصر:

1 < 4

3 < 4

5 > 4

يبقى الـ 4 لازم تتحط قبل الـ 5.

فتكون:

[1,3,4,5,6]

والـ index بتاعها:

2

فالنتيجة:

2
      `
    },

    complexity: {
      time: 'O(log n) باستخدام Binary Search — O(n) في الحلول الـ Linear',
      space: 'O(1)'
    },

    code: [
      {
        codeTitle: 'search-insert-position-original.ts',
        code: `
var searchInsert = function(nums, target) {
    if (target > nums[nums.length - 1])
        return nums.length;

    if (target < nums[0])
        return 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target)
            return i;

        if (nums[i] > target)
            return i;
    }

    return 0;
};
`
      },
      {
        codeTitle: 'search-insert-position-binary-search.ts',
        code: `
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target)
            return mid;

        if (nums[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }

    return left;
};
`
      },
      {
        codeTitle: 'search-insert-position-simple.ts',
        code: `
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target)
            return i;
    }

    return nums.length;
};
`
      }
    ],

    learned: [
      'فهم طريقة تحديد مكان عنصر داخل Array مترتبة.',
      'التعامل مع الحالات اللي الـ target فيها موجود أو مش موجود.',
      'فهم فكرة Linear Search.',
      'فهم Binary Search واستغلال إن الـ Array مترتبة.',
      'استخدام left و right و mid.',
      'فهم ليه Binary Search أسرع من Linear Search.',
      'فهم إن left في نهاية Binary Search بيمثل مكان الإدخال.',
      'فهم O(n) في الـ Linear Search.',
      'فهم O(log n) في الـ Binary Search.',
      'فهم O(1) Space Complexity.'
    ]
  };
}