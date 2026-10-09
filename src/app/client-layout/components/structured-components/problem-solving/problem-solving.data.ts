import type { IProblemSolvingContent } from '../../../../shared-components/shared-code/shared-code.component';

export interface ProblemSolvingEntry {
    id: string;
    projectName: string;
    projectDescription: string;
    projectDate: string;
    projectVersion: string;
    tags: string[];
    problemSolvingContent: IProblemSolvingContent;
}

export const PROBLEM_SOLVING_ENTRIES: Record<string, ProblemSolvingEntry> = {

    // ═══════════════════════════════════════════════════════════════
    // 1. Roman to Integer — LeetCode #13
    // ═══════════════════════════════════════════════════════════════
    'roman-to-integer': {
        id: 'roman-to-integer',
        projectName: 'Roman to Integer',
        projectDescription: 'Convert a Roman numeral into an integer — with multiple approaches, visualization, and testing across C#, JS, TS, and ASP.NET.',
        projectDate: 'October 10, 2026',
        projectVersion: 'LeetCode #13',
        tags: ['Problem Solving', 'JavaScript', 'TypeScript', 'CSharp', 'LeetCode'],

        problemSolvingContent: {
            problem: `
Given a Roman numeral, convert it into an integer.

Symbols: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000.

Rule: When a smaller value appears before a larger value, subtract it
instead of adding it (e.g., IV = 4, IX = 9, XL = 40).
    `,

            generalIdea: `
The interesting part of this problem is the subtraction rule.

The naive approach walks the string left to right and adds every symbol —
that gives the wrong answer for IV, IX, XL, XC, CD, CM.

The fix is one insight: when current < next, subtract current instead of adding it.

This single comparison turns a 20-line switch statement into a 6-line loop.
    `,

            solutionIdea: `
Walk the string once. For each symbol, compare its value to the next symbol's value.
If current < next, subtract. Otherwise, add.

The last symbol always has no "next", so it always gets added.

The cleaner mental model: treat the string as a sequence of values,
and let each value decide its sign based on the value that follows it.
    `,

            steps: [
                'Build a lookup map: symbol to value.',
                'Initialize result = 0.',
                'Walk through the string from index 0.',
                'Read current value from map.',
                'Read next value from map (may be undefined).',
                'If current < next, subtract current.',
                'Otherwise, add current.',
                'Return result.'
            ],

            example: {
                input: 'MCMXCIV',
                output: '1994',
                explanation: `الـ String: M C M X C I V
القيم:    1000 100 1000 10 100 1 5

المقارنات:
M (1000) vs C (100)  -> 1000 >= 100 -> + 1000
C (100)  vs M (1000) -> 100 < 1000  -> - 100
M (1000) vs X (10)   -> 1000 >= 10  -> + 1000
X (10)   vs C (100)  -> 10 < 100    -> - 10
C (100)  vs I (1)    -> 100 >= 1    -> + 100
I (1)    vs V (5)    -> 1 < 5       -> - 1
V (5)    vs (لا يوجد) ->              + 5

المجموع: 1000 - 100 + 1000 - 10 + 100 - 1 + 5 = 1994 ✓`
            },

            complexity: {
                time: 'O(n)',
                space: 'O(1)'
            },

            visualization: {
                kind: 'diagram',
                title: 'مسار التنفيذ على MCMXCIV',
                content: `String:  M    C    M    X    C    I    V
Index:   0    1    2    3    4    5    6

Step 1:  M=1000, next C=100    -> 1000 >= 100  ->  ADD 1000   -> result=1000
Step 2:  C=100,  next M=1000   -> 100 <  1000  ->  SUB 100    -> result=900
Step 3:  M=1000, next X=10     -> 1000 >= 10   ->  ADD 1000   -> result=1900
Step 4:  X=10,   next C=100    -> 10 <  100    ->  SUB 10     -> result=1890
Step 5:  C=100,  next I=1      -> 100 >= 1     ->  ADD 100    -> result=1990
Step 6:  I=1,    next V=5      -> 1 <  5       ->  SUB 1      -> result=1989
Step 7:  V=5,    next none     ->               ->  ADD 5      -> result=1994

                                                              OK 1994`,
                caption: 'كل حرف يقرر إشارته بناءً على الحرف اللي بعده.'
            },

            approaches: [
                {
                    name: 'Approach 1 - Linear scan with lookahead',
                    tagline: 'الطريقة الكلاسيكية: امرّ على الـ string مرة واحدة، قارن كل حرف بالحرف اللي بعده.',
                    complexity: { time: 'O(n)', space: 'O(1)' },
                    tradeoffs: [
                        'الأبسط والأسرع — خطوة واحدة على الـ string.',
                        'بتشتغل على كل الأرقام الرومانية بغض النظر عن طولها.',
                        'مش محتاجة memory إضافية.',
                        'أسهل واحدة تتكتب وتتقرا.'
                    ],
                    samples: [
                        {
                            label: 'roman-to-integer.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `function romanToInt(s: string): number {
  const values: Record<string, number> = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const current = values[s[i]];
    const next = values[s[i + 1]];

    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
}`,
                            notes: [
                                'بنستخدم Record<string, number> كـ lookup table — O(1) للوصول.',
                                'الـ loop من 0 لآخر حرف. مفيش special case للآخر لأن s[i+1] هيرجع undefined، والمقارنة current < undefined هتطلع false.',
                                'المقارنة الأساسية: current < next -> subtract.',
                                'Complexity O(n) time, O(1) space (الـ map ثابت).'
                            ]
                        },
                        {
                            label: 'roman-to-integer.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `function romanToInt(s) {
  const values = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const current = values[s[i]];
    const next = values[s[i + 1]];
    result += current < next ? -current : current;
  }

  return result;
}`,
                            notes: [
                                'نفس الفكرة بـ JS.',
                                'الـ ternary operator بيخلي الـ loop نضيف.',
                                'الفايدة: less code, same logic.'
                            ]
                        },
                        {
                            label: 'RomanConverter.cs',
                            language: 'csharp',
                            framework: 'C#',
                            code: `public static class RomanConverter
{
    private static readonly Dictionary<char, int> Values = new()
    {
        ['I'] = 1,   ['V'] = 5,   ['X'] = 10,
        ['L'] = 50,  ['C'] = 100, ['D'] = 500, ['M'] = 1000
    };

    public static int RomanToInt(string s)
    {
        var result = 0;

        for (var i = 0; i < s.Length; i++)
        {
            var current = Values[s[i]];
            var next = i + 1 < s.Length ? Values[s[i + 1]] : 0;

            result += current < next ? -current : current;
        }

        return result;
    }
}`,
                            notes: [
                                'static readonly Dictionary — built once, reused.',
                                'Ternary operator بيخلي الـ loop نضيف.',
                                'بنستخدم i + 1 < s.Length عشان نتجنب IndexOutOfRange لو الـ string خلص.'
                            ]
                        },
                        {
                            label: 'roman.controller.ts',
                            language: 'typescript',
                            framework: 'Angular Service',
                            code: `import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RomanService {
  private readonly values: Record<string, number> = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
  };

  romanToInt(input: string): number {
    if (!input) throw new Error('Roman numeral required');

    const s = input.toUpperCase();
    let result = 0;

    for (let i = 0; i < s.length; i++) {
      const current = this.values[s[i]];
      if (current === undefined) {
        throw new Error(\`Invalid symbol: \${s[i]}\`);
      }
      const next = this.values[s[i + 1]] ?? 0;
      result += current < next ? -current : current;
    }

    return result;
  }
}`,
                            notes: [
                                'نفس الفكرة، بس في سياق Angular Service.',
                                'بنضيف validation: لو الرمز مش معروف، نرمي error.',
                                'بنستخدم toUpperCase عشان نقبل input بأي حالة.'
                            ]
                        }
                    ]
                },

                {
                    name: 'Approach 2 - Pair-based scan',
                    tagline: 'بدل ما تقارن كل حرف باللي بعده، شوف كل اتنين مع بعض كـ pair.',
                    complexity: { time: 'O(n)', space: 'O(1)' },
                    tradeoffs: [
                        'نفس Complexity بس فكرة مختلفة — بعض الناس بتلاقيها أوضح.',
                        'مفيدة لو هتحل variants معقدة.',
                        'محتاجة handling خاص لآخر حرف لو عدد الحروف فردي.'
                    ],
                    samples: [
                        {
                            label: 'roman-to-integer-window.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `function romanToInt(s: string): number {
  const values: Record<string, number> = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
  };

  let result = 0;
  let i = 0;

  while (i < s.length) {
    const a = values[s[i]];
    const b = values[s[i + 1]] ?? 0;

    if (a < b) {
      result += b - a;
      i += 2;
    } else {
      result += a;
      i += 1;
    }
  }

  return result;
}`,
                            notes: [
                                'بنمشي على الـ string بـ step variable (1 أو 2).',
                                'لو a < b -> pair (IV, IX) -> نضيف (b - a) ونتخطى حرفين.',
                                'لو a >= b -> single symbol -> نضيف a ونتخطى حرف واحد.',
                                'نفس النتيجة، بس الفكرة مختلفة.'
                            ]
                        }
                    ]
                },

                {
                    name: 'Approach 3 - EF Core + SQL integration',
                    tagline: 'لو الأرقام الرومانية محفوظة في database (مثلاً في جدول currencies أو chapters).',
                    complexity: { time: 'O(n)', space: 'O(1) (بعد ما الـ map يتحمّل)' },
                    tradeoffs: [
                        'بيدمج الحل مع البنية التحتية الحقيقية (DB).',
                        'بيوضّح إزاي تحوّل الـ algorithm لـ query.',
                        'مناسب للمشاريع اللي فيها التحويل جزء من data pipeline.',
                        'بطيء أكتر من الحل المباشر لأن في DB round-trip، بس relevant في بعض السيناريوهات.'
                    ],
                    samples: [
                        {
                            label: 'RomanNumerals.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `CREATE TABLE RomanNumerals (
    Id       INT IDENTITY PRIMARY KEY,
    Symbol   CHAR(1) NOT NULL UNIQUE,
    Value    INT NOT NULL
);

INSERT INTO RomanNumerals (Symbol, Value) VALUES
    ('I', 1),   ('V', 5),   ('X', 10),
    ('L', 50),  ('C', 100), ('D', 500), ('M', 1000);

CREATE OR ALTER FUNCTION dbo.RomanToInt (@roman VARCHAR(64))
RETURNS INT
AS
BEGIN
    DECLARE @result INT = 0;
    DECLARE @i INT = 1;
    DECLARE @len INT = LEN(@roman);

    WHILE @i <= @len
    BEGIN
        DECLARE @cur CHAR(1) = SUBSTRING(@roman, @i, 1);
        DECLARE @nxt CHAR(1) = CASE WHEN @i < @len
                                    THEN SUBSTRING(@roman, @i + 1, 1)
                                    ELSE NULL END;

        DECLARE @curVal INT = (SELECT Value FROM RomanNumerals WHERE Symbol = @cur);
        DECLARE @nxtVal INT = (SELECT Value FROM RomanNumerals WHERE Symbol = @nxt);

        IF @nxtVal IS NOT NULL AND @curVal < @nxtVal
            SET @result = @result - @curVal;
        ELSE
            SET @result = @result + @curVal;

        SET @i = @i + 1;
    END

    RETURN @result;
END;`
                        },
                        {
                            label: 'RomanRepository.cs',
                            language: 'csharp',
                            framework: 'EF Core',
                            code: `public class RomanNumeral
{
    public int Id { get; set; }
    public char Symbol { get; set; }
    public int Value { get; set; }
}

public class RomanNumeralRepository
{
    private readonly AppDbContext _context;

    public RomanNumeralRepository(AppDbContext context)
        => _context = context;

    public async Task<int> RomanToIntAsync(string roman)
    {
        var map = await _context.RomanNumerals
            .AsNoTracking()
            .ToDictionaryAsync(x => x.Symbol, x => x.Value);

        var s = roman.ToUpperInvariant();
        var result = 0;

        for (var i = 0; i < s.Length; i++)
        {
            var current = map[s[i]];
            var next = i + 1 < s.Length ? map[s[i + 1]] : 0;
            result += current < next ? -current : current;
        }

        return result;
    }
}`,
                            notes: [
                                'بنستخدم ToDictionaryAsync عشان نجيب الـ map من DB في query واحد.',
                                'AsNoTracking لأننا بنقرا بس (مش بنعدّل).',
                                'باقي المنطق زي Approach 1 بالظبط.'
                            ]
                        },
                        {
                            label: 'RomanController.cs',
                            language: 'csharp',
                            framework: 'ASP.NET Core Web API',
                            code: `[ApiController]
[Route("api/roman")]
public class RomanController : ControllerBase
{
    private readonly RomanNumeralRepository _repo;

    public RomanController(RomanNumeralRepository repo)
        => _repo = repo;

    [HttpGet("to-int/{roman}")]
    public async Task<IActionResult> ToInt(string roman)
    {
        if (string.IsNullOrWhiteSpace(roman))
            return BadRequest(new { error = "Roman numeral required" });

        try
        {
            var value = await _repo.RomanToIntAsync(roman);
            return Ok(new { roman, value });
        }
        catch (KeyNotFoundException)
        {
            return BadRequest(new { error = $"Invalid symbol in '{roman}'" });
        }
    }
}`,
                            notes: [
                                'endpoint واحد: GET /api/roman/to-int/MCMXCIV',
                                'بيرجع JSON: { roman: "MCMXCIV", value: 1994 }',
                                'بيتعامل مع الأخطاء بـ BadRequest + رسالة واضحة.'
                            ]
                        }
                    ]
                },

                {
                    name: 'Approach 4 - LINQ + functional style',
                    tagline: 'استخدم LINQ عشان تعبّر عن الحل بشكل declarative — كل حرف بيقرر إشارته.',
                    complexity: { time: 'O(n)', space: 'O(n)' },
                    tradeoffs: [
                        'أسلوب functional — أنيق لو الفريق بيحب الـ LINQ.',
                        'بينشئ IEnumerable وسيطة (memory أعلى شوية).',
                        'قابل للقراءة جدًا لو الفريق متعوّد على الـ functional patterns.'
                    ],
                    samples: [
                        {
                            label: 'RomanLinq.cs',
                            language: 'csharp',
                            framework: 'C# / LINQ',
                            code: `public static class RomanConverterLinq
{
    private static readonly Dictionary<char, int> Values = new()
    {
        ['I'] = 1,   ['V'] = 5,   ['X'] = 10,
        ['L'] = 50,  ['C'] = 100, ['D'] = 500, ['M'] = 1000
    };

    public static int RomanToInt(string s)
    {
        return s
            .Select((c, i) =>
            {
                var current = Values[c];
                var next = i + 1 < s.Length ? Values[s[i + 1]] : 0;
                return current < next ? -current : current;
            })
            .Sum();
    }
}`,
                            notes: [
                                'Select بياخد (element, index) — ده اللي بيسهل المقارنة.',
                                'كل حرف بيتحول لقيمته (positive أو negative) بناءً على الحرف اللي بعده.',
                                'Sum() بتجمع كل القيم.',
                                'نفس النتيجة بس declarative — بتوصف إيه اللي بتعمله مش إزاي.'
                            ]
                        }
                    ]
                }
            ],

            testing: [
                {
                    title: 'Jest',
                    framework: 'Jest (JS/TS)',
                    code: `import { romanToInt } from './roman-to-integer';

describe('romanToInt', () => {
  it.each([
    ['I', 1],
    ['III', 3],
    ['IV', 4],
    ['IX', 9],
    ['LVIII', 58],
    ['MCMXCIV', 1994],
  ])('converts %s to %i', (roman, expected) => {
    expect(romanToInt(roman)).toBe(expected);
  });

  it('handles lowercase input', () => {
    expect(romanToInt('mcmxciv')).toBe(1994);
  });

  it('returns 0 for empty string', () => {
    expect(romanToInt('')).toBe(0);
  });
});`
                },
                {
                    title: 'xUnit',
                    framework: 'xUnit (C#)',
                    code: `public class RomanConverterTests
{
    [Theory]
    [InlineData("I", 1)]
    [InlineData("III", 3)]
    [InlineData("IV", 4)]
    [InlineData("IX", 9)]
    [InlineData("LVIII", 58)]
    [InlineData("MCMXCIV", 1994)]
    public void RomanToInt_ReturnsExpected(string roman, int expected)
    {
        Assert.Equal(expected, RomanConverter.RomanToInt(roman));
    }

    [Fact]
    public void RomanToInt_HandlesLowercase()
    {
        Assert.Equal(1994, RomanConverter.RomanToInt("mcmxciv"));
    }
}`
                },
                {
                    title: 'LINQ Test',
                    framework: 'C# / LINQ',
                    code: `[Fact]
public void RomanToInt_AllCases_Pass()
{
    var cases = new (string Roman, int Expected)[]
    {
        ("I", 1), ("IV", 4), ("IX", 9),
        ("LVIII", 58), ("MCMXCIV", 1994),
    };

    var failures = cases
        .Where(c => RomanConverter.RomanToInt(c.Roman) != c.Expected)
        .Select(c => $"{c.Roman}: expected {c.Expected}, got {RomanConverter.RomanToInt(c.Roman)}")
        .ToList();

    Assert.Empty(failures);
}`
                },
                {
                    title: 'xUnit + EF Core InMemory',
                    framework: 'xUnit + EF Core',
                    code: `public class RomanRepositoryTests
{
    [Theory]
    [InlineData("III", 3)]
    [InlineData("IV", 4)]
    [InlineData("MCMXCIV", 1994)]
    public async Task RomanToIntAsync_ReturnsExpected(string roman, int expected)
    {
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString())
            .Options;

        using var db = new AppDbContext(options);
        db.RomanNumerals.AddRange(
            new() { Symbol = 'I', Value = 1 },
            new() { Symbol = 'V', Value = 5 },
            new() { Symbol = 'X', Value = 10 },
            new() { Symbol = 'L', Value = 50 },
            new() { Symbol = 'C', Value = 100 },
            new() { Symbol = 'D', Value = 500 },
            new() { Symbol = 'M', Value = 1000 }
        );
        await db.SaveChangesAsync();

        var repo = new RomanNumeralRepository(db);
        var result = await repo.RomanToIntAsync(roman);

        Assert.Equal(expected, result);
    }
}`
                }
            ],

            code: [
                {
                    codeTitle: 'roman-to-integer.ts',
                    language: 'typescript',
                    code: `function romanToInt(s: string): number {
  const values: Record<string, number> = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = values[s[i]];
    const next = values[s[i + 1]];
    result += current < next ? -current : current;
  }
  return result;
}`
                }
            ],

            learned: [
                'Subtraction rule في الأرقام الرومانية.',
                'Lookahead pattern: قارن العنصر الحالي باللي بعده.',
                'استخدام lookup table (hash map) عشان O(1) lookup.',
                'Single-pass solution بتعقيد O(n).',
                'Testing عبر Jest و xUnit و LINQ.',
                'دمج الـ algorithm مع EF Core و ASP.NET Core Web API.'
            ]
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // 2. Longest Substring — LeetCode #3
    // ═══════════════════════════════════════════════════════════════
    'longest-substring': {
        id: 'longest-substring',
        projectName: 'Longest Substring',
        projectDescription: 'Find the longest substring without repeating characters.',
        projectDate: 'September 13, 2026',
        projectVersion: 'LeetCode #3',
        tags: ['Problem Solving', 'JavaScript', 'LeetCode'],
        problemSolvingContent: {
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
                explanation: `الـ String هو: "abcabcbb"

الخطوة 1: right=0, char='a'
الـ Set فاضي → نضيف 'a'.
Window = "a" → length = 1
maxLength = 1

الخطوة 2: right=1, char='b'
'b' مش في الـ Set → نضيفها.
Window = "ab" → length = 2
maxLength = 2

الخطوة 3: right=2, char='c'
'c' مش في الـ Set → نضيفها.
Window = "abc" → length = 3
maxLength = 3

الخطوة 4: right=3, char='a'
'a' موجودة في الـ Set!
نشيل من اليسار لحد ما 'a' تخرج:
- نشيل 'a' (left=0) ونحرّك left=1
بس لسه فيه 'a' → نكمل شيل
- نشيل 'b' (left=1) ونحرّك left=2
بس لسه فيه 'a' → نكمل شيل
- نشيل 'c' (left=2) ونحرّك left=3
دلوقتي 'a' اتشالت من الـ Set
نضيف 'a' تاني → Window = "a" من index 3
length = 1
maxLength لسه 3

الخطوة 5: right=4, char='b'
'b' مش في الـ Set → نضيفها
Window = "ab" → length = 2
maxLength لسه 3

الخطوة 6: right=5, char='c'
'c' مش في الـ Set → نضيفها
Window = "abc" → length = 3
maxLength لسه 3

الخطوة 7: right=6, char='b'
'b' موجودة → نشيل من اليسار لحد ما تخرج
النتيجة النهائية: أطول substring بدون تكرار = "abc"
الطول = 3`
            },

            complexity: {
                time: 'O(n)',
                space: 'O(n)'
            },

            code: [
                {
                    codeTitle: 'longest-substring-without-repeating-characters.ts',
                    code: `var lengthOfLongestSubstring = function(s) {
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
};`,
                    lines: [
                        {
                            line: 'var lengthOfLongestSubstring = function(s) {',
                            note: 'تعريف الدالة. بتاخد string s وبترجّع عدد صحيح (طول أطول substring بدون تكرار).'
                        },
                        {
                            line: '    let left = 0;',
                            note: 'الـ pointer الأيسر للـ window. بيبدأ من أول الـ string.'
                        },
                        {
                            line: '    let maxLength = 0;',
                            note: 'بنحفظ فيه أطول طول لقيناه لحد دلوقتي. بنبدأ من صفر.'
                        },
                        {
                            line: '    const characters = new Set();',
                            note: 'الـ Set بيحفظ الحروف اللي في الـ window الحالي. البحث فيه O(1).'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    for (let right = 0; right < s.length; right++) {',
                            note: 'الـ pointer الأيمن بيمشي على كل حرف في الـ string. ده الـ loop الأساسي.'
                        },
                        {
                            line: '        while (characters.has(s[right])) {',
                            note: 'لو الحرف الحالي موجود بالفعل في الـ Set → فيه تكرار، لازم نصلّح الـ window.'
                        },
                        {
                            line: '            characters.delete(s[left]);',
                            note: 'بنشيل الحرف الأيسر من الـ Set (بنضيّق الـ window من الشمال).'
                        },
                        {
                            line: '            left++;',
                            note: 'بنحرّك الـ left خطوة لليمين.'
                        },
                        {
                            line: '        }',
                            note: 'نهاية الـ while. دلوقتي الحرف الحالي مش موجود في الـ Set.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '        characters.add(s[right]);',
                            note: 'بنضيف الحرف الحالي للـ Set. كده الـ window دلوقتي كل حروفها unique.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '        maxLength = Math.max(',
                            note: 'بنحدّث الـ maxLength لو لقينا طول أكبر.'
                        },
                        {
                            line: '            maxLength,',
                            note: 'الطول القديم.'
                        },
                        {
                            line: '            right - left + 1',
                            note: 'طول الـ window الحالي = (right - left + 1).'
                        },
                        {
                            line: '        );',
                            note: 'نهاية الـ Math.max.'
                        },
                        {
                            line: '    }',
                            note: 'نهاية الـ for. لفينا على كل الـ string.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    return maxLength;',
                            note: 'بنرجّع أطول طول لقيناه.'
                        },
                        {
                            line: '};',
                            note: 'نهاية الدالة.'
                        }
                    ]
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
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // 3. Palindrome Number — LeetCode #9
    // ═══════════════════════════════════════════════════════════════
    'palindrome-number': {
        id: 'palindrome-number',
        projectName: 'Palindrome Number',
        projectDescription: 'Check if an integer reads the same forward and backward.',
        projectDate: 'September 15, 2026',
        projectVersion: 'LeetCode #9',
        tags: ['Problem Solving', 'JavaScript', 'LeetCode'],
        problemSolvingContent: {
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
                explanation: `الـ String بعد التحويل: "121"
الطول = 3، والنص = 3 / 2 = 1.5 → يعني هنلف على i=0 بس

الخطوة 1: i = 0
الرقم من البداية: str[0] = '1'
الرقم من النهاية: str[3-1-0] = str[2] = '1'
المقارنة: '1' === '1' ✓
نكمل

الـ Loop خلصت (i=1 مش < 1.5)

كل المقارنات نجحت → الرقم Palindrome
النتيجة: true

التحقق: 121 يقرأ من اليمين بنفس الشكل → 121 ✓

مثال معاكس: 123
الخطوة 1: i=0, str[0]='1', str[2]='3'
1 ≠ 3 → نرجع false فوراً`
            },

            complexity: {
                time: 'O(n)',
                space: 'O(n)'
            },

            code: [
                {
                    codeTitle: 'palindrome-number.ts',
                    code: `var isPalindrome = function(x) {
    const palindromNum = x.toString();

    for (let i = 0; i < palindromNum.length / 2; i++) {
        const j = palindromNum.length - 1 - i;

        if (palindromNum[i] !== palindromNum[j]) {
            return false;
        }
    }

    return true;
};`,
                    lines: [
                        {
                            line: 'var isPalindrome = function(x) {',
                            note: 'تعريف الدالة. بتاخد number x وبترجّع boolean.'
                        },
                        {
                            line: '    const palindromNum = x.toString();',
                            note: 'بنحوّل الرقم لـ string عشان نقدر نوصل لكل رقم بالـ index. مثال: 121 → "121".'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    for (let i = 0; i < palindromNum.length / 2; i++) {',
                            note: 'بنلف لحد نص الطول بس. مش محتاجين نقارن النص التاني لأنه هيكون نفس المقارنات بس معكوسة.'
                        },
                        {
                            line: '        const j = palindromNum.length - 1 - i;',
                            note: 'بنحسب الـ index المقابل من النهاية. لو i=0، يبقى j = آخر index.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '        if (palindromNum[i] !== palindromNum[j]) {',
                            note: 'بنقارن الرقم من البداية بالرقم المقابل من النهاية. لو مختلفين يبقى مش palindrome.'
                        },
                        {
                            line: '            return false;',
                            note: 'نرجع false على طول. مش محتاجين نكمل باقي المقارنات.'
                        },
                        {
                            line: '        }',
                            note: 'نهاية الـ if. لو الاتنين زي بعض، نكمل للـ i اللي بعده.'
                        },
                        {
                            line: '    }',
                            note: 'نهاية الـ for. لو وصلنا هنا يبقى كل المقارنات نجحت.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    return true;',
                            note: 'الرقم Palindrome فعلاً.'
                        },
                        {
                            line: '};',
                            note: 'نهاية الدالة.'
                        }
                    ]
                },
                {
                    codeTitle: 'palindrome-number-alt.ts',
                    code: `var isPalindrome = function(x) {
    const str = x.toString();
    return str === str.split('').reverse().join('');
};`,
                    lines: [
                        {
                            line: 'var isPalindrome = function(x) {',
                            note: 'تعريف الدالة. نفس الفكرة بس بطريقة مختلفة.'
                        },
                        {
                            line: '    const str = x.toString();',
                            note: 'بنحوّل الرقم لـ string.'
                        },
                        {
                            line: "    return str === str.split('').reverse().join('');",
                            note: "الحل السريع: بنعمل 3 خطوات ورا بعض — split('') بتحوّل الـ string لـ array من الحروف، reverse() بتعكس الـ array، join('') بترجّعه string تاني. لو النتيجة معكوسة = النتيجة الأصلية → palindrome."
                        },
                        {
                            line: '};',
                            note: 'نهاية الدالة. سطر واحد بس في الحل ده.'
                        }
                    ]
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
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // 4. Longest Common Prefix — LeetCode #14
    // ═══════════════════════════════════════════════════════════════
    'longest-common-prefix': {
        id: 'longest-common-prefix',
        projectName: 'Longest Common Prefix',
        projectDescription: 'Find the longest prefix shared by all strings.',
        projectDate: 'September 16, 2026',
        projectVersion: 'LeetCode #14',
        tags: ['Problem Solving', 'JavaScript', 'LeetCode'],
        problemSolvingContent: {
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
                explanation: `الـ Strings: ["flower", "flow", "flight"]

الخطوة 1: i = 0
حرف أول String: 'f'
بنقارنه مع 'f' في "flow" ✓
بنقارنه مع 'f' في "flight" ✓
كلهم زي بعض → نضيف 'f' للـ result
result = "f"

الخطوة 2: i = 1
حرف أول String: 'l'
بنقارنه مع 'l' في "flow" ✓
بنقارنه مع 'l' في "flight" ✓
كلهم زي بعض → نضيف 'l' للـ result
result = "fl"

الخطوة 3: i = 2
حرف أول String: 'o'
بنقارنه مع 'o' في "flow" ✓
بنقارنه مع 'i' في "flight" ✗ مختلف!
→ نوقف ونرجع الـ result الحالي

النتيجة النهائية: "fl"`
            },

            complexity: {
                time: 'O(n × m)',
                space: 'O(1)'
            },

            code: [
                {
                    codeTitle: 'longest-common-prefix.ts',
                    code: `var longestCommonPrefix = function(strs) {
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
};`,
                    lines: [
                        {
                            line: 'var longestCommonPrefix = function(strs) {',
                            note: 'تعريف الدالة. بتاخد Array من strings وبترجّع string.'
                        },
                        {
                            line: "    let result = '';",
                            note: 'الـ accumulator. بنبدأ بـ string فاضي وبنجمّع فيه الـ common prefix.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    for (let i = 0; i < strs[0].length; i++) {',
                            note: 'بنلف على حروف أول String (اللي هنستخدمها كمرجع). بنبدأ من أول حرف.'
                        },
                        {
                            line: '        for (let j = 1; j < strs.length; j++) {',
                            note: 'بنلف على باقي الـ strings (بنبدأ من index 1 لأن index 0 هو المرجع).'
                        },
                        {
                            line: '            if (strs[0][i] !== strs[j][i]) {',
                            note: 'بنقارن الحرف الحالي من أول string بنفس الـ index في الـ string اللي بعدها. لو مختلفين، يبقى الـ prefix خلص.'
                        },
                        {
                            line: '                return result;',
                            note: 'نرجع النتيجة اللي جمعناها لحد دلوقتي فوراً.'
                        },
                        {
                            line: '            }',
                            note: 'نهاية الـ if. لو الحرفين زي بعض، نكمل للـ j اللي بعده.'
                        },
                        {
                            line: '        }',
                            note: 'نهاية الـ for الداخلي. لو وصلنا هنا يبقى الحرف ده موجود في كل الـ strings في نفس المكان.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '        result += strs[0][i];',
                            note: 'بنضيف الحرف الحالي للـ result — لأنه موجود في كل الـ strings في نفس المكان.'
                        },
                        {
                            line: '    }',
                            note: 'نهاية الـ for الخارجي. لو وصلنا هنا يبقى كل حروف أول String كانت common prefix.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    return result;',
                            note: 'نرجع النتيجة (اللي ممكن تكون كل أول string).'
                        },
                        {
                            line: '};',
                            note: 'نهاية الدالة.'
                        }
                    ]
                },
                {
                    codeTitle: 'longest-common-prefix-alt.ts',
                    code: `var longestCommonPrefix = function(strs) {
  strs.sort();

  const first = strs[0];
  const last = strs[strs.length - 1];

  let i = 0;

  while (i < first.length && i < last.length && first[i] === last[i]) {
      i++;
  }

  return first.slice(0, i);
};`,
                    lines: [
                        {
                            line: 'var longestCommonPrefix = function(strs) {',
                            note: 'تعريف الدالة. نفس المدخل والمخرج، بس بفكرة أذكى.'
                        },
                        {
                            line: '  strs.sort();',
                            note: 'بنرتّب الـ array أبجديًا. الفايدة: لو رتّبنا، أول string وآخر string هما اللي بيحددوا الـ prefix المشترك. لو أول وآخر string بينهم prefix مشترك، يبقى كل الـ strings اللي بينهم هيشاركوهم نفس الـ prefix.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '  const first = strs[0];',
                            note: 'أول string بعد الترتيب (الأصغر أبجديًا).'
                        },
                        {
                            line: '  const last = strs[strs.length - 1];',
                            note: 'آخر string بعد الترتيب (الأكبر أبجديًا).'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '  let i = 0;',
                            note: 'الـ pointer. بنبدأ من أول حرف في الاتنين.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '  while (i < first.length && i < last.length && first[i] === last[i]) {',
                            note: 'بنلف طول ما إحنا لسه جوه حدود الاتنين، والحرف الحالي في first = الحرف الحالي في last. ده معناه إن الحرف ده مشترك.'
                        },
                        {
                            line: '      i++;',
                            note: 'بنحرّك الـ pointer خطوة لليمين ونكرر.'
                        },
                        {
                            line: '  }',
                            note: 'نهاية الـ while. أول ما أي شرط يفشل، بنوقف.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '  return first.slice(0, i);',
                            note: 'بنرجع أول i حروف من first — دي الـ common prefix.'
                        },
                        {
                            line: '};',
                            note: 'نهاية الدالة. حل أنضف وأسرع من الحل الأول.'
                        }
                    ]
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
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // 5. Valid Parentheses — LeetCode #20
    // ═══════════════════════════════════════════════════════════════
    'valid-parentheses': {
        id: 'valid-parentheses',
        projectName: 'Valid Parentheses',
        projectDescription: 'Check if brackets are opened and closed in the correct order.',
        projectDate: 'September 17, 2026',
        projectVersion: 'LeetCode #20',
        tags: ['Problem Solving', 'JavaScript', 'LeetCode'],
        problemSolvingContent: {
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
                explanation: `الـ String: "([])"
الـ Stack بيبدأ فاضي: []

الخطوة 1: char = '('
ده قوس فتح → نحطه في الـ Stack
Stack = ["("]

الخطوة 2: char = '['
ده قوس فتح → نحطه فوقه
Stack = ["(", "["]

الخطوة 3: char = ']'
ده قوس قفل
آخر عنصر في الـ Stack: '['
هل ']' بيقفل '['؟ أيوه ✓
نشيله من الـ Stack
Stack = ["("]

الخطوة 4: char = ')'
ده قوس قفل
آخر عنصر في الـ Stack: '('
هل ')' بيقفل '('؟ أيوه ✓
نشيله من الـ Stack
Stack = []

خلصنا الـ String، والـ Stack فاضي
النتيجة: true

مثال فاشل: "([)]"
الخطوة 3: char = ')'
آخر عنصر في الـ Stack: '['
هل ')' بيقفل '['؟ لأ ✗
نرجع false فوراً`
            },

            complexity: {
                time: 'O(n)',
                space: 'O(n)'
            },

            code: [
                {
                    codeTitle: 'valid-parentheses.ts',
                    code: `var isValid = function(s) {
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
};`,
                    lines: [
                        {
                            line: 'var isValid = function(s) {',
                            note: 'تعريف الدالة. بتاخد string فيه أقواس وبترجّع boolean.'
                        },
                        {
                            line: '    const stack = [];',
                            note: 'بنعمل Stack فاضي باستخدام array عادي. بنستخدم push/pop عليه.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    for (let i = 0; i < s.length; i++) {',
                            note: 'بنلف على كل حرف في الـ string.'
                        },
                        {
                            line: '        const char = s[i];',
                            note: 'بناخد الحرف الحالي في متغير عشان نستخدمه بسهولة.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '        if (',
                            note: 'بداية الـ if. بنفحص: هل الحرف ده قوس فتح؟'
                        },
                        {
                            line: '            char === "(" ||',
                            note: 'لو الحرف "(" → قوس فتح.'
                        },
                        {
                            line: '            char === "[" ||',
                            note: 'لو الحرف "[" → قوس فتح.'
                        },
                        {
                            line: '            char === "{"',
                            note: 'لو الحرف "{" → قوس فتح.'
                        },
                        {
                            line: '        ) {',
                            note: 'لو أي واحد من الشروط دي اتحقق، يبقى ده قوس فتح.'
                        },
                        {
                            line: '            stack.push(char);',
                            note: 'بنضيف القوس في الـ Stack (بنحفظه عشان نتأكد إنه يتقفل بعدين).'
                        },
                        {
                            line: '        } else {',
                            note: 'لو الحرف مش قوس فتح، يبقى قوس قفل — لازم نتحقق إنه بيقفل آخر قوس فتحناه.'
                        },
                        {
                            line: '            if (',
                            note: 'بداية الـ if الداخلي. بنفحص: هل القوس الحالي بيقفل آخر قوس في الـ Stack؟'
                        },
                        {
                            line: '                (char === ")" && stack[stack.length - 1] !== "(") ||',
                            note: 'لو الحرف ")" وآخر عنصر في الـ Stack مش "(" → القوسين مش متطابقين.'
                        },
                        {
                            line: '                (char === "]" && stack[stack.length - 1] !== "[") ||',
                            note: 'لو الحرف "]" وآخر عنصر في الـ Stack مش "[" → مش متطابقين.'
                        },
                        {
                            line: '                (char === "}" && stack[stack.length - 1] !== "{")',
                            note: 'لو الحرف "}" وآخر عنصر في الـ Stack مش "{" → مش متطابقين.'
                        },
                        {
                            line: '            ) {',
                            note: 'لو أي شرط من دول اتحقق، يبقى فيه خطأ في الترتيب.'
                        },
                        {
                            line: '                return false;',
                            note: 'نرجع false على طول — مفيش فايدة نكمل.'
                        },
                        {
                            line: '            }',
                            note: 'نهاية الـ if الداخلي. لو القوس مطابق، نكمّل.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '            stack.pop();',
                            note: 'بنشيل القوس المطابق من الـ Stack (اتقفل بنجاح).'
                        },
                        {
                            line: '        }',
                            note: 'نهاية الـ if/else.'
                        },
                        {
                            line: '    }',
                            note: 'نهاية الـ for. لفينا على كل الـ string.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    return stack.length === 0;',
                            note: 'لو الـ Stack فاضي في الآخر، يبقى كل الأقواس اتقفلت صح → true. لو فيه أي قوس لسه فيه، يبقى فيه قوس مفتوح ماقفلش → false.'
                        },
                        {
                            line: '};',
                            note: 'نهاية الدالة.'
                        }
                    ]
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
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // 6. Merge Two Sorted Lists — LeetCode #21
    // ═══════════════════════════════════════════════════════════════
    'merge-two-sorted-lists': {
        id: 'merge-two-sorted-lists',
        projectName: 'Merge Two Sorted Lists',
        projectDescription: 'Merge two sorted linked lists into one sorted linked list.',
        projectDate: 'September 18, 2026',
        projectVersion: 'LeetCode #21',
        tags: ['Problem Solving', 'JavaScript', 'LeetCode', 'Linked List'],
        problemSolvingContent: {
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
                explanation: `الحالة الأولية:
list1 = 1 → 2 → 4
list2 = 1 → 3 → 4
dummy = [?], current = dummy

الخطوة 1: list1.val = 1, list2.val = 1
1 <= 1 → ناخد من list1
current.next = list1 (Node 1)
list1 = list1.next → (2 → 4)
current = Node 1
Result: dummy → 1

الخطوة 2: list1.val = 2, list2.val = 1
2 > 1 → ناخد من list2
current.next = list2 (Node 1)
list2 = list2.next → (3 → 4)
current = Node 1 (التاني)
Result: dummy → 1 → 1

الخطوة 3: list1.val = 2, list2.val = 3
2 <= 3 → ناخد من list1
current.next = list1 (Node 2)
list1 = list1.next → (4)
current = Node 2
Result: dummy → 1 → 1 → 2

الخطوة 4: list1.val = 4, list2.val = 3
4 > 3 → ناخد من list2
current.next = list2 (Node 3)
list2 = list2.next → (4)
current = Node 3
Result: dummy → 1 → 1 → 2 → 3

الخطوة 5: list1.val = 4, list2.val = 4
4 <= 4 → ناخد من list1
current.next = list1 (Node 4)
list1 = list1.next → null
current = Node 4
Result: dummy → 1 → 1 → 2 → 3 → 4

الآن list1 خلصت (null)
نربط current.next = list2 (الباقي = 4)

النتيجة النهائية (بدون dummy):
[1,1,2,3,4,4]`
            },

            complexity: {
                time: 'O(n + m)',
                space: 'O(1)'
            },

            code: [
                {
                    codeTitle: 'merge-two-sorted-lists.ts',
                    code: `var mergeTwoLists = function(list1, list2) {
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
};`,
                    lines: [
                        {
                            line: 'var mergeTwoLists = function(list1, list2) {',
                            note: 'تعريف الدالة. بتاخد head of list1 و head of list2، وبترجّع head of the merged list.'
                        },
                        {
                            line: '    var dummy = new ListNode();',
                            note: 'بنعمل Node وهمي (dummy) في البداية. الـ Node ده مش جزء من النتيجة النهائية، بس بيسهّل علينا نبني الـ Linked List بدون special cases (زي لما نكون لسه في أول Node).'
                        },
                        {
                            line: '    var current = dummy;',
                            note: 'الـ pointer current بيشاور على آخر Node بنيناها. بنبدأ من الـ dummy.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    while (list1 && list2) {',
                            note: 'بنلف طول ما الاتنين لسه فيهم Nodes (يعني الاتنين مش null).'
                        },
                        {
                            line: '        if (list1.val <= list2.val) {',
                            note: 'بنقارن القيمة الحالية في list1 مع القيمة الحالية في list2. لو list1 أصغر أو تساوي، ناخد منها.'
                        },
                        {
                            line: '            current.next = list1;',
                            note: 'بنربط آخر Node في النتيجة بـ list1 الحالية.'
                        },
                        {
                            line: '            list1 = list1.next;',
                            note: 'بنحرّك list1 للـ Node اللي بعدها.'
                        },
                        {
                            line: '        } else {',
                            note: 'لو list2 أصغر، ناخد منها بدل.'
                        },
                        {
                            line: '            current.next = list2;',
                            note: 'بنربط آخر Node في النتيجة بـ list2 الحالية.'
                        },
                        {
                            line: '            list2 = list2.next;',
                            note: 'بنحرّك list2 للـ Node اللي بعدها.'
                        },
                        {
                            line: '        }',
                            note: 'نهاية الـ if/else. أي كان اللي اخدناه، الـ Node اتضافت للنتيجة.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '        current = current.next;',
                            note: 'بنحرّك الـ current للـ Node اللي ضفناها (عشان في اللفة الجاية نضيف بعده).'
                        },
                        {
                            line: '    }',
                            note: 'نهاية الـ while. الـ loop بتقف لما أي واحدة من القائمتين تخلص.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    current.next = list1 || list2;',
                            note: 'بنربط باقي القائمة اللي لسه فيها Nodes. لو list1 لسه فيها → نستخدمها، وإلا نستخدم list2 (لو الاتنين خلصوا، هيرجع null وخلاص).'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    return dummy.next;',
                            note: 'بنرجّع dummy.next (الـ head الحقيقي). الـ dummy نفسه مجرد placeholder، فبنرجع اللي بعده.'
                        },
                        {
                            line: '};',
                            note: 'نهاية الدالة.'
                        }
                    ]
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
        }
    },
    // ═══════════════════════════════════════════════════════════════
    // 7. Remove Duplicates from Sorted Array — LeetCode #26
    // ═══════════════════════════════════════════════════════════════
    'remove-duplicates-from-sorted-array': {
        id: 'remove-duplicates-from-sorted-array',
        projectName: 'Remove Duplicates from Sorted Array',
        projectDescription: 'Remove duplicates in-place from a sorted array and return the number of unique elements.',
        projectDate: 'September 20, 2026',
        projectVersion: 'LeetCode #26',
        tags: ['Problem Solving', 'JavaScript', 'LeetCode', 'Two Pointers'],
        problemSolvingContent: {
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
                explanation: `الـ Array: [0,0,1,1,1,2,2,3,3,4]
k = 1

الخطوة 1: i=1
nums[1] = 0, nums[0] = 0
0 === 0 → duplicate → نتجاهل

الخطوة 2: i=2
nums[2] = 1, nums[1] = 0
1 !== 0 → رقم جديد
nums[1] = 1, k = 2

الخطوة 3: i=3
nums[3] = 1, nums[2] = 1
1 === 1 → duplicate → نتجاهل

الخطوة 4: i=4
nums[4] = 1, nums[3] = 1
1 === 1 → duplicate → نتجاهل

الخطوة 5: i=5
nums[5] = 2, nums[4] = 1
2 !== 1 → رقم جديد
nums[2] = 2, k = 3

الخطوة 6: i=6
nums[6] = 2, nums[5] = 2
2 === 2 → duplicate → نتجاهل

الخطوة 7: i=7
nums[7] = 3, nums[6] = 2
3 !== 2 → رقم جديد
nums[3] = 3, k = 4

الخطوة 8: i=8
nums[8] = 3, nums[7] = 3
3 === 3 → duplicate → نتجاهل

الخطوة 9: i=9
nums[9] = 4, nums[8] = 3
4 !== 3 → رقم جديد
nums[4] = 4, k = 5

النتيجة النهائية:
k = 5
أول 5 عناصر = [0,1,2,3,4]`
            },

            complexity: {
                time: 'O(n)',
                space: 'O(1)'
            },

            code: [
                {
                    codeTitle: 'remove-duplicates-from-sorted-array.ts',
                    code: `var removeDuplicates = function(nums) {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};`,
                    lines: [
                        {
                            line: 'var removeDuplicates = function(nums) {',
                            note: 'تعريف الدالة. بتاخد array nums (مترتبة)، وبترجّع عدد العناصر المختلفة.'
                        },
                        {
                            line: '    let k = 1;',
                            note: 'الـ pointer اللي بيحدد مكان الرقم الجديد. بنبدأ بـ 1 لأن أول عنصر دايماً unique (مفيش حاجة قبله نقارن بيها).'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    for (let i = 1; i < nums.length; i++) {',
                            note: 'بنلف على الـ array بدءاً من العنصر التاني (i=1). العنصر الأول مش محتاج فحص.'
                        },
                        {
                            line: '        if (nums[i] !== nums[i - 1]) {',
                            note: 'بنقارن العنصر الحالي بالعنصر اللي قبله. لو مختلفين، يبقى ده رقم جديد (مش مكرر).'
                        },
                        {
                            line: '            nums[k] = nums[i];',
                            note: 'بنحط الرقم الجديد في المكان k (مكان مخصص في أول الـ array). ده هو الـ in-place modification.'
                        },
                        {
                            line: '            k++;',
                            note: 'بنزود الـ k عشان نجهّز المكان الجاي.'
                        },
                        {
                            line: '        }',
                            note: 'نهاية الـ if. لو الرقم مكرر، بنتجاهله وخلاص.'
                        },
                        {
                            line: '    }',
                            note: 'نهاية الـ for. لفينا على كل الـ array.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    return k;',
                            note: 'بنرجّع عدد العناصر المختلفة. أول k عناصر في الـ array هما العناصر الـ unique.'
                        },
                        {
                            line: '};',
                            note: 'نهاية الدالة.'
                        }
                    ]
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
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // 8. Remove Element — LeetCode #27
    // ═══════════════════════════════════════════════════════════════
    'remove-element': {
        id: 'remove-element',
        projectName: 'Remove Element',
        projectDescription: 'Remove all occurrences of a given value in-place from an array and return the number of remaining elements.',
        projectDate: 'September 29, 2026',
        projectVersion: 'LeetCode #27',
        tags: ['Problem Solving', 'TypeScript', 'LeetCode', 'Two Pointers'],
        problemSolvingContent: {
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
                explanation: `الـ Array: [0,1,2,2,3,0,4,2]
val = 2
k = 0

الخطوة 1: i=0, nums[0]=0
0 !== 2 → عنصر صالح
nums[0] = 0, k = 1

الخطوة 2: i=1, nums[1]=1
1 !== 2 → عنصر صالح
nums[1] = 1, k = 2

الخطوة 3: i=2, nums[2]=2
2 === 2 → نتجاهل

الخطوة 4: i=3, nums[3]=2
2 === 2 → نتجاهل

الخطوة 5: i=4, nums[4]=3
3 !== 2 → عنصر صالح
nums[2] = 3, k = 3

الخطوة 6: i=5, nums[5]=0
0 !== 2 → عنصر صالح
nums[3] = 0, k = 4

الخطوة 7: i=6, nums[6]=4
4 !== 2 → عنصر صالح
nums[4] = 4, k = 5

الخطوة 8: i=7, nums[7]=2
2 === 2 → نتجاهل

النتيجة النهائية:
k = 5
أول 5 عناصر = [0,1,3,0,4]`
            },

            complexity: {
                time: 'O(n)',
                space: 'O(1)'
            },

            code: [
                {
                    codeTitle: 'remove-element.ts',
                    code: `function removeElement(nums: number[], val: number): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}`,
                    lines: [
                        {
                            line: 'function removeElement(nums: number[], val: number): number {',
                            note: 'تعريف الدالة (بـ TypeScript). بتاخد array من numbers + الرقم val، وبترجّع number (عدد العناصر الباقية).'
                        },
                        {
                            line: '  let k = 0;',
                            note: 'الـ pointer اللي بيحدد مكان العنصر الصالح الجاي. بنبدأ بـ 0 لأن أول مكان فاضي هو index 0.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '  for (let i = 0; i < nums.length; i++) {',
                            note: 'بنلف على كل عنصر في الـ array عشان نفحصه.'
                        },
                        {
                            line: '    if (nums[i] !== val) {',
                            note: 'لو العنصر الحالي مش بيساوي الـ val، يبقى ده عنصر محتاجين نحتفظ بيه.'
                        },
                        {
                            line: '      nums[k] = nums[i];',
                            note: 'بنحط العنصر الصالح في المكان k (مكان محجوز في أول الـ array). ده هو الـ in-place modification.'
                        },
                        {
                            line: '      k++;',
                            note: 'بنزود الـ k عشان نجهّز المكان الجاي.'
                        },
                        {
                            line: '    }',
                            note: 'نهاية الـ if. لو العنصر بيساوي val، بنتجاهله وخلاص.'
                        },
                        {
                            line: '  }',
                            note: 'نهاية الـ for. لفينا على كل الـ array.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '  return k;',
                            note: 'بنرجّع k (عدد العناصر اللي مش بتساوي val). أول k عناصر هما العناصر الصالحة.'
                        },
                        {
                            line: '}',
                            note: 'نهاية الدالة.'
                        }
                    ]
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
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // 9. Find the Index of the First Occurrence — LeetCode #28
    // ═══════════════════════════════════════════════════════════════
    'find-the-index-of-the-first-occurrence': {
        id: 'find-the-index-of-the-first-occurrence',
        projectName: 'Find the Index of the First Occurrence in a String',
        projectDescription: 'Find the first position where one string occurs inside another string.',
        projectDate: 'September 30, 2026',
        projectVersion: 'LeetCode #28',
        tags: ['Problem Solving', 'JavaScript', 'LeetCode', 'String'],
        problemSolvingContent: {
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
                explanation: `الـ haystack: "sadbutsad"
الـ needle: "sad"

بنستخدم:
haystack.indexOf("sad")

الـ indexOf() بتلف على الـ haystack
من أول index وبتحاول تلاقي الـ needle.

sadbutsad
^^^
عند index 0 → لقينا "sad"!
الـ function بترجع 0 فوراً.

مثال تاني:
haystack = "leetcode", needle = "leeto"
haystack.indexOf("leeto")
مش هيلاقيها في أي مكان → -1

مثال تالت:
haystack = "butsad", needle = "sad"
butsad
   ^^^
" sad" موجودة عند index 3
النتيجة: 3`
            },

            complexity: {
                time: 'O(n × m)',
                space: 'O(1)'
            },

            code: [
                {
                    codeTitle: 'find-the-index-of-the-first-occurrence.ts',
                    code: `var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};`,
                    lines: [
                        {
                            line: 'var strStr = function(haystack, needle) {',
                            note: 'تعريف الدالة. بتاخد string haystack و string needle، وبترجّع number (index أول occurrence أو -1).'
                        },
                        {
                            line: '    return haystack.indexOf(needle);',
                            note: 'الحل في سطر واحد: بنستخدم دالة indexOf() الجاهزة في JavaScript. بترجع index أول occurrence، أو -1 لو مش موجودة.'
                        },
                        {
                            line: '};',
                            note: 'نهاية الدالة. حل بسيط وقصير جدًا — بيعتمد على built-in method.'
                        }
                    ]
                }
            ],

            learned: [
                'استخدام indexOf() للبحث داخل الـ String.',
                'فهم معنى First Occurrence.',
                'معرفة إن indexOf() بترجع أول index للمطابقة.',
                'معرفة إن indexOf() بترجع -1 لو الـ String مش موجودة.',
                'التعامل مع Strings في JavaScript.',
                'استخدام JavaScript built-in methods.',
                'فهم O(n × m) time complexity للحل اليدوي.'
            ]
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // 10. Search Insert Position — LeetCode #35
    // ═══════════════════════════════════════════════════════════════
    'search-insert-position': {
        id: 'search-insert-position',
        projectName: 'Search Insert Position',
        projectDescription: 'Find the index where the target exists or should be inserted in a sorted array.',
        projectDate: 'October 1, 2026',
        projectVersion: 'LeetCode #35',
        tags: ['Problem Solving', 'JavaScript', 'LeetCode', 'Binary Search'],
        problemSolvingContent: {
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

النتيجة: 2

ولو:

target = 2

فالـ 2 مكانها بين 1 و 3
يعني:

[1,2,3,5,6]

فالنتيجة: 1
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
                explanation: `الـ Array: [1,3,5,6]
target = 4

الحل بـ Binary Search:
left = 0, right = 3

الخطوة 1:
mid = (0+3)/2 = 1
nums[1] = 3
3 < 4 → نحرّك left = 2

الخطوة 2:
mid = (2+3)/2 = 2
nums[2] = 5
5 > 4 → نحرّك right = 1

الآن left (2) > right (1) → وقفنا

الـ left = 2 = المكان اللي الـ 4 المفروض يتحط فيه

التحقق: [1,3,4,5,6] → 4 عند index 2 ✓

مثال تاني: target = 7
الخطوة 1: mid=1, nums[1]=3 < 7 → left=2
الخطوة 2: mid=2, nums[2]=5 < 7 → left=3
الخطوة 3: mid=3, nums[3]=6 < 7 → left=4
الآن left > right → return 4 (بعد آخر عنصر)`
            },

            complexity: {
                time: 'O(log n) في Binary Search — O(n) في الحلول الـ Linear',
                space: 'O(1)'
            },

            code: [
                {
                    codeTitle: 'search-insert-position-original.ts',
                    code: `var searchInsert = function(nums, target) {
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
};`,
                    lines: [
                        {
                            line: 'var searchInsert = function(nums, target) {',
                            note: 'تعريف الدالة. بتاخد array nums + target، وبترجّع الـ index المناسب.'
                        },
                        {
                            line: '    if (target > nums[nums.length - 1])',
                            note: 'حالة خاصة: لو الـ target أكبر من آخر عنصر في الـ array.'
                        },
                        {
                            line: '        return nums.length;',
                            note: 'لو كده، المكان المناسب هو بعد آخر عنصر (nums.length).'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    if (target < nums[0])',
                            note: 'حالة خاصة تانية: لو الـ target أصغر من أول عنصر.'
                        },
                        {
                            line: '        return 0;',
                            note: 'يبقى مكانه في بداية الـ array عند index 0.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    for (let i = 0; i < nums.length; i++) {',
                            note: 'بنلف على الـ array من الأول.'
                        },
                        {
                            line: '        if (nums[i] === target)',
                            note: 'لو لقينا الـ target في الـ array.'
                        },
                        {
                            line: '            return i;',
                            note: 'نرجع الـ index بتاعه.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '        if (nums[i] > target)',
                            note: 'لو لقينا عنصر أكبر من الـ target، يبقى الـ target مكانه قبل العنصر ده.'
                        },
                        {
                            line: '            return i;',
                            note: 'نرجع الـ index الحالي (المكان المناسب للإدخال).'
                        },
                        {
                            line: '    }',
                            note: 'نهاية الـ for.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    return 0;',
                            note: 'Fallback (مش هيوصل هنا بسبب الحالات الخاصة).'
                        },
                        {
                            line: '};',
                            note: 'نهاية الدالة.'
                        }
                    ]
                },
                {
                    codeTitle: 'search-insert-position-binary-search.ts',
                    code: `var searchInsert = function(nums, target) {
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
};`,
                    lines: [
                        {
                            line: 'var searchInsert = function(nums, target) {',
                            note: 'نفس الدالة بس بـ Binary Search — أسرع (O(log n) بدل O(n)).'
                        },
                        {
                            line: '    let left = 0;',
                            note: 'حد البداية لمساحة البحث.'
                        },
                        {
                            line: '    let right = nums.length - 1;',
                            note: 'حد النهاية لمساحة البحث.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    while (left <= right) {',
                            note: 'بنلف طول ما فيه عناصر في مساحة البحث. لو left عدّى right، خلصنا.'
                        },
                        {
                            line: '        let mid = Math.floor((left + right) / 2);',
                            note: 'بنحسب العنصر اللي في النص. Math.floor عشان يبقى رقم صحيح.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '        if (nums[mid] === target)',
                            note: 'لو لقينا الـ target → نرجّع الـ index بتاعه.'
                        },
                        {
                            line: '            return mid;',
                            note: 'النتيجة: الـ target موجود في الـ array.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '        if (nums[mid] < target)',
                            note: 'لو القيمة في النص أصغر من الـ target → نستبعد النص الشمال ونروح يمين.'
                        },
                        {
                            line: '            left = mid + 1;',
                            note: 'نحرّك left بعد الـ mid.'
                        },
                        {
                            line: '        else',
                            note: 'لو القيمة في النص أكبر من الـ target → نستبعد النص اليمين ونروح شمال.'
                        },
                        {
                            line: '            right = mid - 1;',
                            note: 'نحرّك right قبل الـ mid.'
                        },
                        {
                            line: '    }',
                            note: 'نهاية الـ while. لو وصلنا هنا، يبقى الـ target مش موجود.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    return left;',
                            note: 'الـ trick في المسألة دي: الـ left في نهاية Binary Search بيمثل المكان المناسب لإدخال الـ target.'
                        },
                        {
                            line: '};',
                            note: 'نهاية الدالة.'
                        }
                    ]
                },
                {
                    codeTitle: 'search-insert-position-simple.ts',
                    code: `var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target)
            return i;
    }

    return nums.length;
};`,
                    lines: [
                        {
                            line: 'var searchInsert = function(nums, target) {',
                            note: 'الحل الأبسط: Linear Search بدون حالات خاصة.'
                        },
                        {
                            line: '    for (let i = 0; i < nums.length; i++) {',
                            note: 'بنلف على الـ array من الأول.'
                        },
                        {
                            line: '        if (nums[i] >= target)',
                            note: 'أول عنصر بيساوي أو أكبر من الـ target — ده هو المكان المناسب.'
                        },
                        {
                            line: '            return i;',
                            note: 'نرجع الـ index.'
                        },
                        {
                            line: '    }',
                            note: 'نهاية الـ for.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    return nums.length;',
                            note: 'لو كل العناصر أصغر من الـ target، المكان المناسب هو بعد آخر عنصر.'
                        },
                        {
                            line: '};',
                            note: 'نهاية الدالة. حل في 8 سطور، سهل القراءة.'
                        }
                    ]
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
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // 11. Length of Last Word — LeetCode #58
    // ═══════════════════════════════════════════════════════════════
    'length-of-last-word': {
        id: 'length-of-last-word',
        projectName: 'Length of Last Word',
        projectDescription: 'Find the length of the last word in a string.',
        projectDate: 'October 2, 2026',
        projectVersion: 'LeetCode #58',
        tags: ['Problem Solving', 'JavaScript', 'LeetCode', 'String'],
        problemSolvingContent: {
            problem: `
عندنا String فيها كلمات ومسافات.

المطلوب إننا نجيب طول آخر كلمة في الـ String.

مثال:

s = "Hello World"

آخر كلمة هي:

"World"

وطولها:

5

مثال تاني:

s = "   fly me   to   the moon  "

آخر كلمة هي:

"moon"

وطولها:

4
            `,

            generalIdea: `
عندنا أكتر من طريقة نحل بيها المشكلة.

أبسط طريقة إننا نشيل المسافات من البداية والنهاية
باستخدام trim()
وبعدين نقسم الـ String لكلمات.

ممكن كمان نستخدم split() و filter()
عشان نتخلص من الـ spaces.

وفي حل تالت نقدر نمشي من آخر الـ String
ونتجاهل الـ spaces الأول
وبعدين نعد حروف آخر كلمة.

الحل التالت مش محتاج نعمل Array جديدة
وعشان كده بيستخدم Space أقل.
            `,

            solutionIdea: `
Solution 1:

نستخدم trim() عشان نشيل الـ spaces من البداية والنهاية.

بعد كده نستخدم split(" ")
عشان نقسم الـ String لكلمات.

وبعدين pop()
عشان ناخد آخر كلمة.

وفي النهاية نجيب length بتاعها.

Solution 2:

نستخدم split(" ")
وبعدين filter()
عشان نشيل الـ empty strings اللي ممكن تنتج من المسافات المتكررة.

بعد كده ناخد آخر كلمة باستخدام pop()
ونجيب length بتاعها.

Solution 3:

نبدأ من آخر حرف في الـ String.

أول حاجة نتخطى كل الـ spaces الموجودة في الآخر.

بعد كده نبدأ نعد الحروف
لحد ما نوصل لـ space أو بداية الـ String.

العدد اللي وصلناله هو طول آخر كلمة.
            `,

            steps: [
                'نحدد إننا محتاجين آخر كلمة بس.',
                'في الحل الأول نستخدم trim() لإزالة المسافات من الأطراف.',
                'نستخدم split(" ") عشان نقسم الـ String لكلمات.',
                'نستخدم pop() عشان ناخد آخر كلمة.',
                'في الحل التاني نستخدم filter() لإزالة الـ empty strings.',
                'في الحل التالت نبدأ من آخر الـ String.',
                'نتخطى الـ spaces الموجودة في النهاية.',
                'نبدأ نعد حروف آخر كلمة.',
                'نوقف لما نوصل لـ space أو بداية الـ String.',
                'نرجع عدد الحروف.'
            ],

            example: {
                input: 's = "   fly me   to   the moon  "',
                output: '4',
                explanation: `الـ String: "   fly me   to   the moon  "

آخر كلمة هي: "moon"
طولها: 4

تفصيل الحل بـ trim + split:
1) trim() بنشيل المسافات من الأطراف:
"fly me   to   the moon"

2) split(" ") بنقسم لكلمات:
["fly", "me", "", "", "to", "", "", "the", "moon"]

3) pop() بناخد آخر كلمة:
"moon"

4) .length → 4

الحل بـ two pointers:
نبدأ من آخر index (s.length - 1)

نتخطى الـ spaces:
i=27 → space
i=26 → space
i=25 → 'n' (بدأنا نعد)

نعد الحروف لحد space أو بداية:
'n' → count=1
'o' → count=2
'o' → count=3
'm' → count=4
نتوقف عند space

النتيجة: 4 ✓`
            },

            complexity: {
                time: 'O(n)',
                space: 'O(n) في الحلول التي تستخدم split/filter — O(1) في الحل الثالث'
            },

            code: [
                {
                    codeTitle: 'length-of-last-word-trim.ts',
                    code: `var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};`,
                    lines: [
                        {
                            line: 'var lengthOfLastWord = function(s) {',
                            note: 'تعريف الدالة. بتاخد string s وبترجّع number (طول آخر كلمة).'
                        },
                        {
                            line: '    return s.trim().split(" ").pop().length;',
                            note: 'سطر واحد بيعمل 4 خطوات ورا بعض: (1) trim() بتشيل المسافات من الأطراف، (2) split(" ") بتقسم الـ string لكلمات، (3) pop() بتاخد آخر كلمة، (4) length بترجع طولها.'
                        },
                        {
                            line: '};',
                            note: 'نهاية الدالة. حل method-chaining بسيط وأنيق.'
                        }
                    ]
                },
                {
                    codeTitle: 'length-of-last-word-filter.ts',
                    code: `var lengthOfLastWord = function(s) {
    return s
        .split(" ")
        .filter(word => word !== "")
        .pop()
        .length;
};`,
                    lines: [
                        {
                            line: 'var lengthOfLastWord = function(s) {',
                            note: 'نفس الدالة بس بطريقة أوضح.'
                        },
                        {
                            line: '    return s',
                            note: 'بنبدأ بالـ string.'
                        },
                        {
                            line: '        .split(" ")',
                            note: 'بنقسم الـ string لـ array من الكلمات — بما فيها الـ empty strings اللي بتنتج من المسافات المتكررة.'
                        },
                        {
                            line: '        .filter(word => word !== "")',
                            note: 'بنشيل الـ empty strings عشان يبقى عندنا الكلمات الحقيقية بس.'
                        },
                        {
                            line: '        .pop()',
                            note: 'بناخد آخر عنصر في الـ array (آخر كلمة).'
                        },
                        {
                            line: '        .length;',
                            note: 'بنجيب طول آخر كلمة.'
                        },
                        {
                            line: '};',
                            note: 'نهاية الدالة. الحل ده أوضح من trim + split، بس بيستهلك memory أكتر.'
                        }
                    ]
                },
                {
                    codeTitle: 'length-of-last-word-two-pointers.ts',
                    code: `var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    let count = 0;

    while (s[i] === " ") {
        i--;
    }

    while (i >= 0 && s[i] !== " ") {
        count++;
        i--;
    }

    return count;
};`,
                    lines: [
                        {
                            line: 'var lengthOfLastWord = function(s) {',
                            note: 'الحل الـ optimal — space complexity O(1)، مش محتاج arrays إضافية.'
                        },
                        {
                            line: '    let i = s.length - 1;',
                            note: 'بنبدأ من آخر حرف في الـ string.'
                        },
                        {
                            line: '    let count = 0;',
                            note: 'عداد حروف آخر كلمة.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    while (s[i] === " ") {',
                            note: 'بنلف طول ما إحنا عند مسافات في الآخر. الهدف: نتخطى كل المسافات دي.'
                        },
                        {
                            line: '        i--;',
                            note: 'بنحرّك الـ pointer خطوة شمال.'
                        },
                        {
                            line: '    }',
                            note: 'نهاية الـ while. الـ i دلوقتي عند آخر حرف في آخر كلمة.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    while (i >= 0 && s[i] !== " ") {',
                            note: 'بنلف على حروف آخر كلمة. بنتوقف لو الـ i وصل لبداية الـ string أو لقينا space.'
                        },
                        {
                            line: '        count++;',
                            note: 'نحسب الحرف ده ضمن آخر كلمة.'
                        },
                        {
                            line: '        i--;',
                            note: 'نحرّك الـ pointer خطوة شمال.'
                        },
                        {
                            line: '    }',
                            note: 'نهاية الـ while. وصلنا لبداية آخر كلمة.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    return count;',
                            note: 'بنرجّع عدد حروف آخر كلمة.'
                        },
                        {
                            line: '};',
                            note: 'نهاية الدالة. أحسن حل من ناحية memory.'
                        }
                    ]
                }
            ],

            learned: [
                'التعامل مع الـ Strings والمسافات.',
                'استخدام trim() لإزالة المسافات من البداية والنهاية.',
                'استخدام split() لتقسيم الـ String.',
                'استخدام filter() للتخلص من الـ empty strings.',
                'استخدام pop() للوصول لآخر عنصر.',
                'التعامل مع الـ String من النهاية باستخدام index.',
                'فهم فكرة العد من آخر كلمة.',
                'تقليل الـ Space Complexity باستخدام الحل الثالث.',
                'فهم O(n) Time Complexity.',
                'فهم الفرق بين O(n) و O(1) في الـ Space.'
            ]
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // 12. Add Binary — LeetCode #67 🆕
    // ═══════════════════════════════════════════════════════════════
    'add-binary': {
        id: 'add-binary',
        projectName: 'Add Binary',
        projectDescription: 'Add two binary strings and return their sum as a binary string.',
        projectDate: 'October 6, 2026',
        projectVersion: 'LeetCode #67',
        tags: ['Problem Solving', 'JavaScript', 'LeetCode', 'String', 'Math'],
        problemSolvingContent: {
            problem: `
عندنا String اسمه a و String اسمه b
الاتنين بيمثلوا أرقام binary (مكوّنين من 0 و 1 بس).

المطلوب نرجّع مجموعهم كـ binary string.

مثال:
a = "11" (اللي هو 3 في الـ decimal)
b = "1"  (اللي هو 1 في الـ decimal)

الناتج: "100" (اللي هو 4)
            `,

            generalIdea: `
الجمع في الـ binary بيشتغل بنفس طريقة الجمع العادي
في الـ decimal، بس بدل ما نحمل 10، بنحمل 2.

القواعد:
- 0 + 0 = 0
- 0 + 1 = 1
- 1 + 1 = 10 (نكتب 0 ونحمل 1)
- 1 + 1 + carry = 11 (نكتب 1 ونحمل 1)

بنبدأ من آخر رقم في الاتنين (rightmost)
ونكمل لليسار، وبنحمل الـ carry معانا.
            `,

            solutionIdea: `
هنستخدم مؤشرين من نهاية الـ strings:
- i بيبدأ من نهاية a
- j بيبدأ من نهاية b

في كل خطوة:
1. نجمع carry + الرقم من a (لو i لسه valid) + الرقم من b (لو j لسه valid)
2. نحط (sum % 2) في بداية النتيجة
3. نحسب الـ carry الجديد = sum > 1 ? 1 : 0
4. نحوّل الرقم من character لـ number باستخدام unary plus (+) أو Number()
5. ننقص من i و j

بنكمل لحد ما:
- i خلص AND
- j خلص AND
- carry = 0

فيه كمان حل سريع جدًا بـ BigInt:
BigInt('0b' + a) + BigInt('0b' + b) → toString(2)
بس ده بيتخطى فكرة "الحل اليدوي".
            `,

            steps: [
                'نبدأ i من آخر index في a، و j من آخر index في b.',
                'نبدأ carry = 0، و result = "".',
                'بنلف طول ما: i >= 0 أو j >= 0 أو carry = 1.',
                'في كل لفة: sum = carry.',
                'لو i >= 0 → sum += a[i] ونقص i.',
                'لو j >= 0 → sum += b[j] ونقص j.',
                'نضيف (sum % 2) في بداية الـ result.',
                'نحدّث الـ carry: sum > 1 ? 1 : 0.',
                'بعد ما الـ while تخلص، نرجع الـ result.'
            ],

            example: {
                input: 'a = "1010", b = "1011"',
                output: '"10101"',
                explanation: `نبدأ من اليمين (rightmost).

الخطوة 1: i=3, j=3
sum = carry + a[3] + b[3] = 0 + 0 + 1 = 1
result = "1"
carry = 0

الخطوة 2: i=2, j=2
sum = carry + a[2] + b[2] = 0 + 1 + 1 = 2
result = "01"
carry = 1

الخطوة 3: i=1, j=1
sum = carry + a[1] + b[1] = 1 + 0 + 0 = 1
result = "101"
carry = 0

الخطوة 4: i=0, j=0
sum = carry + a[0] + b[0] = 0 + 1 + 1 = 2
result = "0101"
carry = 1

الخطوة 5: i=-1, j=-1
sum = carry + 0 + 0 = 1 + 0 + 0 = 1
result = "10101"
carry = 0

النتيجة النهائية:
"10101"

التحقق:
1010 (10) + 1011 (11) = 10101 (21) ✓`
            },

            complexity: {
                time: 'O(max(n, m))',
                space: 'O(max(n, m))'
            },

            code: [
                {
                    codeTitle: 'add-binary.ts',
                    code: `var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = '';

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;

        if (i >= 0) sum += +a[i--];
        if (j >= 0) sum += +b[j--];

        result = (sum % 2) + result;
        carry = sum > 1 ? 1 : 0;
    }

    return result;
};`,
                    lines: [
                        {
                            line: 'var addBinary = function(a, b) {',
                            note: 'تعريف الدالة. بتاخد string a و string b (binary)، وبترجّع الناتج كـ binary string.'
                        },
                        {
                            line: '    let i = a.length - 1;',
                            note: 'الـ pointer i بيبدأ من آخر index في a (rightmost bit). بنبدأ من اليمين لأن الجمع في الـ binary بيتحسب من اليمين لليسار.'
                        },
                        {
                            line: '    let j = b.length - 1;',
                            note: 'نفس الفكرة لـ b. الـ pointer j بيبدأ من آخر index في b.'
                        },
                        {
                            line: '    let carry = 0;',
                            note: 'الـ carry هي القيمة اللي بنحملها لما المجموع يبقى 2 أو أكتر. بنبدأ بـ 0.'
                        },
                        {
                            line: "    let result = '';",
                            note: 'الـ result هي الـ binary string النهائية. بنبدأ بـ string فاضي وبنضيف فيه من اليسار.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    while (i >= 0 || j >= 0 || carry) {',
                            note: 'الـ loop بتكمل طول ما: i لسه عندها bits، أو j لسه عندها bits، أو فيه carry متبقي. أي واحد من التلاتة → نكمل.'
                        },
                        {
                            line: '        let sum = carry;',
                            note: 'بنبدأ الـ sum بالـ carry (اللي جه من الخطوة السابقة). بعدين هنضيف عليه قيم a[i] و b[j].'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '        if (i >= 0) sum += +a[i--];',
                            note: 'لو i لسه valid: نحوّل a[i] من character لـ number بـ unary plus (+)، نضيفه للـ sum، وبعدين نقلل i بـ 1.'
                        },
                        {
                            line: '        if (j >= 0) sum += +b[j--];',
                            note: 'نفس الفكرة مع b: لو j لسه valid، نحوّل b[j] لـ number، نضيفه للـ sum، ونقلل j بـ 1.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: "        result = (sum % 2) + result;",
                            note: 'بنحسب الـ bit الحالي (sum % 2 — يعني 0 أو 1) وبنضيفه في بداية الـ result. كده الـ result بتتبني صح من اليمين لليسار.'
                        },
                        {
                            line: '        carry = sum > 1 ? 1 : 0;',
                            note: 'بنحسب الـ carry الجديد: لو sum > 1 (يعني 2 أو 3) → carry = 1، وإلا carry = 0.'
                        },
                        {
                            line: '    }',
                            note: 'نهاية الـ while. الـ loop بتقف لما i و j يخلصوا والـ carry يبقى 0.'
                        },
                        { line: '', note: 'سطر فاضي — للقراءة فقط.' },
                        {
                            line: '    return result;',
                            note: 'بنرجّع الـ binary string النهائية.'
                        },
                        {
                            line: '};',
                            note: 'نهاية الدالة.'
                        }
                    ]
                },
                {
                    codeTitle: 'add-binary-bigint.ts',
                    code: `var addBinary = function(a, b) {
    return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
};`,
                    lines: [
                        {
                            line: 'var addBinary = function(a, b) {',
                            note: 'نفس التعريف — دالة بتاخد string a و string b وبترجّع binary string.'
                        },
                        {
                            line: "    return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);",
                            note: "الحل السريع: بنضيف prefix '0b' للـ strings عشان نقول لـ BigInt إنهم binary، بنحوّلهم لـ BigInt، بنجمعهم، وبعدين نحوّل الناتج لـ string تاني بـ toString(2) — و 2 دي معناها binary."
                        },
                        {
                            line: '};',
                            note: 'نهاية الدالة. حل واحد بس في السطر — بس سريع جدًا.'
                        }
                    ]
                }
            ],

            learned: [
                'فهم الجمع في نظام الـ binary.',
                'التعامل مع الـ carry بشكل صحيح.',
                'استخدام Two Pointers من نهاية الـ strings.',
                'استخدام unary plus (+) لتحويل char لـ number.',
                'بناء الـ result من اليمين لليسار بـ string concatenation.',
                'التعامل مع strings بأطوال مختلفة.',
                'التعامل مع الـ leading zeros المحتملة.',
                'فهم O(max(n, m)) time complexity.',
                'فهم O(max(n, m)) space complexity.',
                'التعامل مع BigInt كحل بديل لـ learning.'
            ]
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // 13. Sqart X — LeetCode #69 🆕
    // ═══════════════════════════════════════════════════════════════

    'sqrt-x': {
        id: 'sqrt-x',
        projectName: 'Sqrt(x)',
        projectDescription: 'احسب الجذر التربيعي لعدد صحيح بدون استخدام دوال جاهزة — باستخدام Binary Search.',
        projectDate: 'October 8, 2026',
        projectVersion: 'LeetCode #69',
        tags: ['Problem Solving', 'JavaScript', 'TypeScript', 'LeetCode', 'Binary Search'],

        problemSolvingContent: {
            problem: `
Given a non-negative integer x, return the square root of x rounded down
to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in C++ or x ** 0.5 in Python.

Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down
to the nearest integer, 2 is returned.

Constraints:
0 <= x <= 2^31 - 1
            `,

            generalIdea: `
الفكرة الجوهرية: إيجاد أكبر عدد صحيح mid بحيث mid * mid <= x.

لو مشينا خطوة خطوة من 0 لحد x، هناخد O(x) في أسوأ حالة — بطيء جدًا لـ x كبير.

لكن فيه ملاحظة مهمة: الدالة f(mid) = mid * mid monotonic increasing على [0, x].
دي إشارة إن Binary Search هو الحل المثالي.

الفكرة:
- ابحث في الـ range [0, x] عن أكبر mid يحقق mid * mid <= x.
- لو mid * mid <= x → we might have found it، save as result و search right.
- لو mid * mid > x → search left.

Complexity بينزل من O(x) لـ O(log x).
            `,

            solutionIdea: `
بنستخدم Binary Search على الـ range من 0 لـ x.

في كل خطوة:
1. نحسب mid = floor((left + right) / 2).
2. نقارن mid * mid مع x:
   - لو mid * mid <= x → ده مرشح صالح. نحفظه في result ونحرك left = mid + 1.
   - لو mid * mid > x → نحن في المنطقة الكبيرة. نحرك right = mid - 1.
3. نكرر لحد ما left يعدي right.

ليه بنحفظ mid في result بدل ما نرجعه فورًا؟
عشان الـ problem بتطلب "rounded down". لو رجعناه فورًا ونحن عند mid صغير، ممكن يفوتنا mid أكبر يحقق نفس الشرط.

مثال: x = 8، في خطوة mid = 2 → 4 <= 8 ✓ (result = 2).
بعدها mid = 3 → 9 > 8 ✗ (right = 2). left = 3 > right = 2 → توقف.
return result = 2. ✓

الحل مايستخدمش أي built-in exponent function — بس ضرب عادي.
            `,

            steps: [
                'حدد left = 0 و right = x (الـ range اللي هنبحث فيه).',
                'حدد result = 0 (أكبر mid صالح لقيناه لحد دلوقتي).',
                'احسب mid = floor((left + right) / 2).',
                'قارن mid * mid مع x.',
                'لو mid * mid <= x → result = mid، و left = mid + 1 (ابحث في اليمين عشان possible أكبر).',
                'لو mid * mid > x → right = mid - 1 (ابحث في الشمال).',
                'كرر لحد ما left > right.',
                'أرجع result.'
            ],

            example: {
                input: '8',
                output: '2',
                explanation: `الهدف: أكبر عدد صحيح mid بحيث mid * mid <= 8

Initial: left = 0, right = 8, result = 0

الخطوة 1:
mid = floor((0 + 8) / 2) = 4
4 * 4 = 16 > 8  →  right = 4 - 1 = 3
result لسه 0

الخطوة 2:
mid = floor((0 + 3) / 2) = 1
1 * 1 = 1 <= 8  →  result = 1، left = 1 + 1 = 2

الخطوة 3:
mid = floor((2 + 3) / 2) = 2
2 * 2 = 4 <= 8  →  result = 2، left = 2 + 1 = 3

الخطوة 4:
left = 3, right = 3
mid = floor((3 + 3) / 2) = 3
3 * 3 = 9 > 8  →  right = 3 - 1 = 2

الآن: left (3) > right (2) → توقف

النتيجة النهائية: result = 2 ✓

التحقق: √8 = 2.828... → round down = 2 ✓`
            },

            complexity: {
                time: 'O(log x)',
                space: 'O(1)'
            },

            visualization: {
                kind: 'diagram',
                title: 'مسار البحث على x = 8',
                content: `Range: [0, 8],  result = 0

Step 1:  L=0  R=8  mid=4
         ┌──────┐
         4*4=16 > 8  →  R = 3

Step 2:  L=0  R=3  mid=1
         ┌──┐
         1*1=1 <= 8  →  result=1, L=2

Step 3:  L=2  R=3  mid=2
           ┌┐
         2*2=4 <= 8  →  result=2, L=3

Step 4:  L=3  R=3  mid=3
           │
         3*3=9 > 8   →  R=2

Stop: L(3) > R(2)
Return: result = 2

Final: √8 ≈ 2.828  →  rounded down = 2`,
                caption: 'Binary Search بتستبعد نص المساحة في كل خطوة → O(log x)'
            },

            approaches: [
                {
                    name: 'Approach 1 - Binary Search (الأمثل)',
                    tagline: 'أسرع حل — O(log x). بيستغل إن الدالة monotonic.',
                    complexity: { time: 'O(log x)', space: 'O(1)' },
                    tradeoffs: [
                        'أسرع حل ممكن للـ problem دي.',
                        'مايستخدمش أي built-in function.',
                        'شغال لأي x في حدود 2^31 - 1 بدون overflow (لأن mid * mid هيكون في نطاق Number الآمن في JavaScript).',
                        'منطقي وفهمه سهل.',
                        'مش محتاج أي memory إضافية.'
                    ],
                    samples: [
                        {
                            label: 'sqrt-x.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `function mySqrt(x: number): number {
  let left = 0;
  let right = x;
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid <= x) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}`,
                            notes: [
                                'بنبدأ من range [0, x] — الحل مضمون إنه فيه.',
                                'بنحسب mid آمن (floor) عشان الـ index.',
                                'بنحفظ result في كل مرة نلاقي mid صالح — مش بنرجع فورًا.',
                                'بنحرك left = mid + 1 عشان ممكن يكون فيه mid أكبر.',
                                'الـ loop بتوقف لما left > right — يعني result فيه القيمة الصح.',
                                'Complexity O(log x) time، O(1) space.'
                            ]
                        },
                        {
                            label: 'sqrt-x.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `var mySqrt = function(x) {
    let left = 0;
    let right = x;
    let result = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (mid * mid <= x) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
};`,
                            notes: [
                                'نفس الحل بـ JavaScript.',
                                'بيشتغل صح مع x = 0 (return 0) و x = 1 (return 1).',
                                'مع x = 2^31 - 1 = 2147483647، mid * mid بتوصل لـ ~10^18 وهي في نطاق Number الآمن (2^53).',
                                'عكس C++، JavaScript مش محتاج long long عشان avoid overflow.'
                            ]
                        },
                        {
                            label: 'SqrtCalculator.cs',
                            language: 'csharp',
                            framework: 'C#',
                            code: `public static class SqrtCalculator
{
    public static int MySqrt(int x)
    {
        if (x < 2) return x;

        int left = 0;
        int right = x;
        int result = 0;

        while (left <= right)
        {
            int mid = left + (right - left) / 2;

            if ((long)mid * mid <= x)
            {
                result = mid;
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }

        return result;
    }
}`,
                            notes: [
                                'في C#، بنستخدم (long)mid * mid عشان نتجنب integer overflow.',
                                'لو x قريب من int.MaxValue، mid * mid ممكن يتخطى int.MaxValue.',
                                'left + (right - left) / 2 أأمن من (left + right) / 2 لو الاتنين قريبين من الحد الأقصى.',
                                'بنستخدم if (x < 2) return x كـ optimization صغير.'
                            ]
                        },
                        {
                            label: 'newton-sqrt.cs',
                            language: 'csharp',
                            framework: 'C# / Newton\'s Method',
                            code: `public static int NewtonSqrt(int x)
{
    if (x < 2) return x;

    long guess = x;
    while (guess * guess > x)
    {
        guess = (guess + x / guess) / 2;
    }

    return (int)guess;
}`,
                            notes: [
                                'طريقة نيوتن — تعقيد O(log log x) تقريبًا (أسرع من Binary Search في الواقع).',
                                'الفكرة: x_{n+1} = (x_n + x / x_n) / 2.',
                                'بتتقارب بسرعة رهيبة — عمليًا 6-7 iterations لأي x في نطاق int.',
                                'بس أصعب شوية في الشرح من Binary Search.',
                                'في interviews، Binary Search هو الاختيار الافتراضي عشان وضوحه.'
                            ]
                        }
                    ]
                },
                {
                    name: 'Approach 2 - Linear Search',
                    tagline: 'أبسط حل — O(√x). مقبول للـ x صغيرة بس بطيء للكبيرة.',
                    complexity: { time: 'O(√x)', space: 'O(1)' },
                    tradeoffs: [
                        'أبسط في الكتابة والفهم.',
                        'مقبول لو x صغير (أقل من 10^6).',
                        'بطيء جدًا للـ x الكبيرة (x = 2^31 - 1 → ~46341 iteration).',
                        'مش recommended في الـ interviews.'
                    ],
                    samples: [
                        {
                            label: 'sqrt-linear.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `function mySqrtLinear(x: number): number {
  if (x < 2) return x;

  let i = 1;
  while (i * i <= x) {
    i++;
  }

  return i - 1;
}`,
                            notes: [
                                'بنلف من 1 لحد ما i * i > x.',
                                'بنرجع i - 1 (آخر قيمة كانت صحيحة).',
                                'بسيط بس بطيء لـ x كبير.',
                                'مش بيستخدم أي built-in function.'
                            ]
                        }
                    ]
                }
            ],

            testing: [
                {
                    title: 'Jest',
                    framework: 'Jest (TS/JS)',
                    code: `import { mySqrt } from './sqrt-x';

describe('mySqrt', () => {
  it.each([
    [0, 0],
    [1, 1],
    [4, 2],
    [8, 2],
    [9, 3],
    [15, 3],
    [16, 4],
    [100, 10],
    [2147395599, 46339],
  ])('sqrt(%i) = %i', (input, expected) => {
    expect(mySqrt(input)).toBe(expected);
  });

  it('handles x = 2^31 - 1', () => {
    expect(mySqrt(2147483647)).toBe(46340);
  });
});`
                },
                {
                    title: 'xUnit',
                    framework: 'xUnit (C#)',
                    code: `public class SqrtTests
{
    [Theory]
    [InlineData(0, 0)]
    [InlineData(1, 1)]
    [InlineData(4, 2)]
    [InlineData(8, 2)]
    [InlineData(9, 3)]
    [InlineData(15, 3)]
    [InlineData(16, 4)]
    [InlineData(100, 10)]
    public void MySqrt_ReturnsFloorOfSquareRoot(int x, int expected)
    {
        Assert.Equal(expected, SqrtCalculator.MySqrt(x));
    }

    [Fact]
    public void MySqrt_AtIntMaxValue_Returns46340()
    {
        Assert.Equal(46340, SqrtCalculator.MySqrt(int.MaxValue));
    }
}`
                }
            ],

            code: [
                {
                    codeTitle: 'sqrt-x.ts',
                    language: 'typescript',
                    code: `function mySqrt(x: number): number {
  let left = 0;
  let right = x;
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid <= x) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}`,
                    lines: [
                        { line: 'function mySqrt(x: number): number {', note: 'تعريف الدالة. بتاخد integer x (non-negative)، وبترجّع integer = الجذر التربيعي rounded down.' },
                        { line: '  let left = 0;', note: 'حد البداية لمساحة البحث. أصغر جذر ممكن هو 0.' },
                        { line: '  let right = x;', note: 'حد النهاية. أكبر جذر ممكن هو x نفسها (لأن √x <= x دائمًا لـ x >= 1).' },
                        { line: '  let result = 0;', note: 'بنحفظ فيه أكبر mid صالح لقيناه لحد دلوقتي. بنبدأ بـ 0 عشان x = 0.' },
                        { line: '', note: '—' },
                        { line: '  while (left <= right) {', note: 'الـ loop الأساسية. بنكمل طول ما فيه عناصر في مساحة البحث.' },
                        { line: '    const mid = Math.floor((left + right) / 2);', note: 'بنحسب العنصر اللي في النص. Math.floor عشان نتجنب العشريات.' },
                        { line: '', note: '—' },
                        { line: '    if (mid * mid <= x) {', note: 'بنقارن مربع الـ mid مع x. لو أصغر أو يساوي، ده مرشح صالح.' },
                        { line: '      result = mid;', note: 'بنحفظ mid في result — يمكن يطلع هو الأكبر.' },
                        { line: '      left = mid + 1;', note: 'بنحرك left لليمين — يمكن يكون فيه mid أكبر لسه يحقق الشرط.' },
                        { line: '    } else {', note: 'لو mid * mid > x، يبقى الجذر أقل من mid.' },
                        { line: '      right = mid - 1;', note: 'بنحرك right للشمال عشان نستبعد النص اليمين.' },
                        { line: '    }', note: 'نهاية الـ if/else.' },
                        { line: '  }', note: 'نهاية الـ while. الـ loop بتوقف لما left > right.' },
                        { line: '', note: '—' },
                        { line: '  return result;', note: 'بنرجّع أكبر mid لسه محقق mid * mid <= x. ده الجذر rounded down.' },
                        { line: '}', note: 'نهاية الدالة. Complexity O(log x) time، O(1) space.' }
                    ]
                }
            ],

            learned: [
                'فهم فكرة Binary Search on Answer — إننا نبحث عن قيمة في مساحة logically مرتبة.',
                'استغلال الـ monotonic property (mid * mid monotonic increasing) لتحويل مشكلة quadratic لـ logarithmic.',
                'التعامل مع الـ rounded down condition عن طريق حفظ result بدل الرجوع الفوري.',
                'التعامل مع edge cases (x = 0، x = 1، x = 2).',
                'الفرق بين الـ approaches: Binary Search vs Linear vs Newton\'s Method.',
                'فهم ازاي نتجنب الـ integer overflow في اللغات المُعرّضة (زي C#).',
                'اختبار الحل بـ test cases وحالات حافة (2147395599 و 2147483647).',
                'المقارنة: O(log x) vs O(√x) — الفرق في الأداء لـ x كبير.',
                'الـ interview tip: اشرحليه إنك بتستخدم Binary Search على مساحة القيم، مش على array.'
            ]
        }
    },
};