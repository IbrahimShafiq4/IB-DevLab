import { Component } from '@angular/core';
import {
  IProblemSolvingContent,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-leet-code-6',
  imports: [SharedCodeComponent],
  template: `
    <app-shared-code
      [projectName]="'Merge Two Sorted Lists'"
      [projectDescription]="'Merge two sorted linked lists into one sorted linked list.'"
      [projectDate]="'September 18, 2026'"
      [projectVersion]="'LeetCode #21'"
      [tags]="['Problem Solving', 'JavaScript', 'LeetCode', 'Linked List']"
      [isItProblemSolving]="true"
      [isProjectHasNotAssists]="false"
      [problemSolvingContent]="problemSolvingContent"
    />
  `,
  styles: ``
})
export class LeetCode6 {

  problemSolvingContent: IProblemSolvingContent = {

    problem: `
عندنا اتنين Linked Lists مترتبين تصاعديًا.

المطلوب إننا ندمجهم في Linked List واحدة
وتفضل مترتبة تصاعديًا.

مثال:

list1 = [1,2,4]
list2 = [1,3,4]

النتيجة:

[1,1,2,3,4,4]
    `,

    generalIdea: `
الفكرة إننا هنمشي في الـ two lists في نفس الوقت.

في كل خطوة هنقارن الـ Node الحالية من list1
مع الـ Node الحالية من list2.

ناخد الأصغر ونضيفه للـ Linked List الجديدة.

بعد ما واحدة من القائمتين تخلص
هنضيف باقي الـ Nodes الموجودة في القائمة التانية.
    `,

    solutionIdea: `
هنعمل dummy Node في البداية.

الـ dummy مش جزء من النتيجة النهائية
لكنه بيسهل علينا بناء الـ Linked List.

بعد كده نعمل current يشاور على الـ dummy.

طول ما عندنا Nodes في القائمتين
هنقارن بينهم.

لو قيمة list1 أصغر أو تساوي list2
هنخلي current.next يشاور على list1
وبعدين نحرك list1 للـ Node اللي بعدها.

ولو list2 أصغر
نعمل نفس الفكرة مع list2.

بعد كل عملية نحرك current للـ Node الجديدة.

لما واحدة من القائمتين تخلص
هنربط current.next بباقي القائمة التانية.

وفي النهاية نرجع dummy.next
لأن الـ dummy نفسه مش جزء من النتيجة.
    `,

    steps: [
      'نعمل Dummy Node عشان نبدأ بناء الـ Linked List بسهولة.',
      'نخلي current يشاور على الـ Dummy.',
      'نقارن الـ Node الحالية في list1 مع الـ Node الحالية في list2.',
      'نختار الـ Node الأصغر ونربطها بـ current.next.',
      'نحرّك الـ List اللي أخدنا منها الـ Node للـ Node اللي بعدها.',
      'نحرّك current للـ Node الجديدة.',
      'نكرر لحد ما واحدة من القائمتين تخلص.',
      'نربط باقي الـ Nodes من القائمة التانية.',
      'نرجع dummy.next كـ Head للـ Linked List الجديدة.'
    ],

    example: {
      input: 'list1 = [1,2,4], list2 = [1,3,4]',
      output: '[1,1,2,3,4,4]',
      explanation: `
هنبدأ بالمقارنة بين أول Node في القائمتين:

1 و 1

بما إنهم متساويين هناخد Node من list1.

بعد كده:

list1 = [2,4]
list2 = [1,3,4]

نقارن:

2 و 1

ناخد 1 من list2.

بعدها:

2 و 3

ناخد 2 من list1.

بعدها:

4 و 3

ناخد 3 من list2.

بعدها:

4 و 4

ناخد 4 من list1.

وبعد ما list1 تخلص
نضيف باقي list2.

فتكون النتيجة:

[1,1,2,3,4,4]
      `
    },

    complexity: {
      time: 'O(n + m)',
      space: 'O(1)'
    },

    code: [
      {
        codeTitle: 'merge-two-sorted-lists.ts',
        code: `
var mergeTwoLists = function(list1, list2) {
    var dummy = new ListNode();
    var current = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    current.next = list1 || list2;

    return dummy.next;
};
`
      }
    ],

    learned: [
      'فهم طريقة التعامل مع Linked Lists.',
      'استخدام Pointers للتحرك بين الـ Nodes.',
      'مقارنة عناصر قائمتين في نفس الوقت.',
      'استخدام Dummy Node لتسهيل بناء Linked List.',
      'فهم فكرة إعادة استخدام الـ Nodes بدل إنشاء Nodes جديدة.',
      'التعامل مع باقي الـ Nodes بعد انتهاء إحدى القائمتين.',
      'استخدام current لبناء الـ Linked List.',
      'فهم O(n + m) time complexity.',
      'فهم O(1) space complexity.'
    ]
  };
}