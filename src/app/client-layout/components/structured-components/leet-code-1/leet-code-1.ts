import { Component } from '@angular/core';
import { IProblemSolvingContent, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-leet-code-1',
  imports: [SharedCodeComponent],
  templateUrl: './leet-code-1.html',
  styles: ``
})
export class LeetCode1 {

problemSolvingContent: IProblemSolvingContent = {
  problem: `
Given a Roman numeral, convert it into an integer.
Roman numerals use the symbols I, V, X, L, C, D and M.
  `,

  generalIdea: `
The important observation is that when a smaller value appears before
a larger value, we subtract it instead of adding it.
  `,

  solutionIdea: `
Compare the current Roman value with the next value.
If the current value is smaller, subtract it.
Otherwise, add it.
  `,

  steps: [
    'Read the current Roman symbol.',
    'Convert it to its integer value.',
    'Read the next symbol.',
    'Compare the current value with the next value.',
    'Subtract when current is smaller.',
    'Otherwise add the current value.',
    'Return the final result.'
  ],

  example: {
    input: 'IV',
    output: '4',
    explanation: 'I = 1 and V = 5. Since 1 is smaller than 5, we calculate -1 + 5 = 4.'
  },

  complexity: {
    time: 'O(n)',
    space: 'O(1)'
  },

  code: [
    {
      codeTitle: 'roman-to-integer.ts',
      code: `
var romanToInt = function(s) {
    const romanInteger = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const current = romanInteger[s[i]];
        const next = romanInteger[s[i + 1]];

        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
};
`
    }
  ],

  learned: [
    'Recognizing subtraction patterns.',
    'Comparing the current element with the next element.',
    'Solving the problem in a single pass.',
    'Understanding O(n) time complexity.'
  ]
};
}