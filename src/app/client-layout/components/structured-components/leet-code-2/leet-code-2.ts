import { Component } from '@angular/core';
import { IProblemSolvingContent, SharedCodeComponent } from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-leet-code-2',
  imports: [SharedCodeComponent],
  templateUrl: './leet-code-2.html',
  styles: ``
})
export class LeetCode2 {

  problemSolvingContent: IProblemSolvingContent = {
    problem: `
Given a string s, find the length of the longest substring
without repeating characters.
  `,

    generalIdea: `
We use a Sliding Window to keep track of a substring that contains
only unique characters.

The left and right pointers define the current window.
A Set is used to quickly check whether a character already exists
inside the current window.
  `,

    solutionIdea: `
Move the right pointer through the string and add each character
to the Set.

If the current character already exists, move the left pointer
forward and remove characters from the Set until the duplicate
character is removed.

After every step, calculate the current window length and keep
the maximum length found.
  `,

    steps: [
      'Initialize the left pointer at 0.',
      'Create a Set to store the characters in the current window.',
      'Move the right pointer through the string.',
      'Check if the current character already exists in the Set.',
      'If it exists, remove characters from the left side and move left forward.',
      'Add the current character to the Set.',
      'Calculate the current window length.',
      'Update the maximum length.',
      'Return the maximum length.'
    ],

    example: {
      input: 'abcabcbb',
      output: '3',
      explanation: `
The longest substring without repeating characters is "abc".
Its length is 3.

When another "a" appears, we move the left pointer forward
and remove characters until the window contains unique characters again.
      `
    },

    complexity: {
      time: 'O(n)',
      space: 'O(n)'
    },

    code: [
      {
        codeTitle: 'longest-substring-without-repeating-characters.ts',
        code: `
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLength = 0;
    const characters = new Set();

    for (let right = 0; right < s.length; right++) {
        while (characters.has(s[right])) {
            characters.delete(s[left]);
            left++;
        }

        characters.add(s[right]);

        maxLength = Math.max(
            maxLength,
            right - left + 1
        );
    }

    return maxLength;
};
`
      }
    ],

    learned: [
      'Understanding the Sliding Window technique.',
      'Using two pointers to control a dynamic range.',
      'Using Set to track unique characters.',
      'Handling duplicates by moving the left pointer.',
      'Finding the maximum window length in a single pass.',
      'Understanding O(n) time complexity.'
    ]
  };
}