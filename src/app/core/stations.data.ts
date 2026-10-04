// ═══════════════════════════════════════════════════════════════════
// الأنواع — Types
// ═══════════════════════════════════════════════════════════════════

export type LineKey = 'algo' | 'ds' | 'api';
export type LevelKey = 'مبتدئ' | 'متوسط' | 'متقدم';

export interface Runnable {
    html: string;
    css: string;
    js: string;
}

export interface CodeBreakdownItem {
    line: string;
    note: string;
}

export interface PracticeTest {
    id: string;
    description: string;
    args: unknown[];
    expected: unknown;
}

export interface Practice {
    prompt: string;
    functionName: string;
    starter: string;
    solution: string;
    tests: PracticeTest[];
}

export interface Quiz {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
}

export interface Station {
    // ─── الهوية والموقع ───
    id: string;
    num: string;
    line: LineKey;
    x: number;
    y: number;
    slug: string;
    href: string;
    level: LevelKey;
    next?: string; // id المحطة اللي بعدها (اختياري)

    // ─── العرض ───
    title: string;
    titleEn: string;
    summary: string;
    date: string;
    tags: string[];

    // ─── المحتوى ───
    whatItDoes: string;
    explanation: string;
    codeBreakdown: CodeBreakdownItem[];

    // ─── التفاعل ───
    live?: Runnable;
    practice: Practice;        // ← إلزامية دلوقتي
    quizzes?: Quiz[];

    // ─── الإثراء ───
    useCases: string[];
    whyItsGoodHere: string;
    relatedIdeas: string[];
    mathProblems: string[];
}

export interface LineMeta {
    key: LineKey;
    label: string;
    labelEn: string;
    y: number;
    colorVar: string;
}

// ═══════════════════════════════════════════════════════════════════
// الخطوط
// ═══════════════════════════════════════════════════════════════════

export const LINES: LineMeta[] = [
    { key: 'algo', label: 'الخط الأزرق', labelEn: 'Algorithms', y: 70, colorVar: '--line-algo' },
    { key: 'ds', label: 'الخط الأحمر', labelEn: 'Data Structures', y: 210, colorVar: '--line-ds' },
    { key: 'api', label: 'الخط الأخضر', labelEn: 'Built-in APIs', y: 350, colorVar: '--line-api' },
];

// ═══════════════════════════════════════════════════════════════════
// Practice فاضية للمحطات اللي لسه previews
// ═══════════════════════════════════════════════════════════════════

const EMPTY_PRACTICE: Practice = {
    prompt: '',
    functionName: '',
    starter: '',
    solution: '',
    tests: [],
};

// ═══════════════════════════════════════════════════════════════════
// الـ previews المصغّرة
// ═══════════════════════════════════════════════════════════════════

const PREVIEW_BARS: Runnable = {
    html: `
    <div class="bars">
      <div style="--h:70%"></div><div style="--h:40%"></div>
      <div style="--h:92%"></div><div style="--h:55%"></div>
      <div style="--h:80%"></div><div style="--h:32%"></div>
      <div style="--h:65%"></div>
    </div>`,
    css: `
    body { margin:0; height:100vh; display:grid; place-items:center; background:#0F1B2D; }
    .bars { display:flex; align-items:end; gap:5px; height:55%; }
    .bars > div { width:10px; background:#5B9DFF; border-radius:2px;
      animation: bounce 1.4s ease-in-out infinite;
      animation-delay: calc(var(--i,0) * 0.08s); height:20%; }
    .bars > div:nth-child(3n)   { background:#4CD08A; }
    .bars > div:nth-child(3n+1) { background:#FF6B57; }
    @keyframes bounce { 0%,100%{height:20%} 50%{height:var(--h)} }`,
    js: `document.querySelectorAll('.bars > div').forEach((el, i) => el.style.setProperty('--i', i));`,
};

const PREVIEW_CHAIN: Runnable = {
    html: `<div class="chain">${'<div class="node"></div>'.repeat(5)}</div>`,
    css: `
    body { margin:0; height:100vh; display:grid; place-items:center; background:#0F1B2D; }
    .chain { display:flex; }
    .node { width:26px; height:26px; border:2px solid #FF6B57; border-radius:50%;
      background:#0F1B2D; position:relative; margin-inline-start:22px;
      animation: pulse 1.6s ease-in-out infinite;
      animation-delay: calc(var(--i,0) * 0.18s); }
    .node:first-child { margin-inline-start:0; }
    .node::before { content:''; position:absolute; top:50%; left:-22px;
      width:22px; height:2px; background:#FF6B57; transform:translateY(-50%); }
    .node:first-child::before { display:none; }
    @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(255,107,87,.55)}
                       50%{box-shadow:0 0 0 9px rgba(255,107,87,0)} }`,
    js: `document.querySelectorAll('.node').forEach((el, i) => el.style.setProperty('--i', i));`,
};

const PREVIEW_NETWORK: Runnable = {
    html: `<div class="wire">${'<div class="pkt"></div>'.repeat(4)}</div>`,
    css: `
    body { margin:0; height:100vh; display:grid; place-items:center; background:#0F1B2D; }
    .wire { display:flex; gap:8px; }
    .pkt { width:12px; height:12px; background:#4CD08A; border-radius:2px;
      animation: send 1.1s ease-in-out infinite;
      animation-delay: calc(var(--i,0) * 0.14s); }
    @keyframes send { 0%,100%{transform:translateX(0); opacity:.35}
                      50%{transform:translateX(-22px); opacity:1} }`,
    js: `document.querySelectorAll('.pkt').forEach((el, i) => el.style.setProperty('--i', i));`,
};

// ═══════════════════════════════════════════════════════════════════
// Binary Search — الـ Visualizer الكامل
// ═══════════════════════════════════════════════════════════════════

const BINARY_SEARCH_RUNNABLE: Runnable = {
    html: `
    <div class="wrap">
      <header class="head">
        <span class="line-dot"></span>
        <span class="label">Binary Search — Visualizer</span>
      </header>

      <div class="controls">
        <label>
          <span>المصفوفة</span>
          <input id="arr" type="text" value="1,3,5,7,9,11,13,15,17,19,21">
        </label>
        <label>
          <span>الهدف</span>
          <input id="target" type="text" value="13">
        </label>
        <div class="btns">
          <button id="play">شغّل</button>
          <button id="step">خطوة</button>
          <button id="reset">رجّع</button>
        </div>
      </div>

      <div id="stage" class="stage"></div>

      <div id="log" class="log"></div>
    </div>
  `,

    css: `
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif;
      background: #0F1B2D;
      color: #E6EDF2;
      padding: 20px;
      min-height: 100vh;
    }

    .wrap {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 720px;
      margin-inline: auto;
    }

    .head {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      color: #5B9DFF;
      letter-spacing: 0.05em;
    }

    .line-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #5B9DFF;
    }

    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: end;
      padding: 16px;
      border: 1px solid #1E2D42;
      border-radius: 2px;
      background: #152236;
    }

    .controls label {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
      min-width: 140px;
    }

    .controls label > span {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10px;
      color: #6B7C92;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .controls input {
      padding: 8px 12px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 13px;
      color: #E6EDF2;
      background: #0A1422;
      border: 1px solid #1E2D42;
      border-radius: 2px;
      outline: none;
    }

    .controls input:focus {
      border-color: #5B9DFF;
    }

    .btns {
      display: flex;
      gap: 6px;
    }

    .btns button {
      padding: 8px 16px;
      font-family: 'IBM Plex Sans Arabic', sans-serif;
      font-size: 13px;
      font-weight: 500;
      color: #0F1B2D;
      background: #F2B200;
      border: 1px solid #F2B200;
      border-radius: 2px;
      cursor: pointer;
      transition: opacity 0.16s;
    }

    .btns button:hover {
      opacity: 0.85;
    }

    .btns button:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    .stage {
      display: flex;
      justify-content: center;
      gap: 4px;
      flex-wrap: wrap;
      padding: 24px 12px;
      background: #0A1422;
      border: 1px solid #1E2D42;
      border-radius: 2px;
      min-height: 120px;
      align-items: center;
      flex-direction: row-reverse;
    }

    .cell {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 44px;
    }

    .cell__value {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 14px;
      font-weight: 600;
      color: #E6EDF2;
      background: #152236;
      border: 1px solid #1E2D42;
      border-radius: 2px;
      transition: all 0.24s ease;
    }

    .cell__index {
      margin-top: 4px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10px;
      color: #6B7C92;
    }

    .cell.in-range .cell__value {
      border-color: #5B9DFF;
      color: #5B9DFF;
    }

    .cell.mid .cell__value {
      background: #5B9DFF;
      color: #0F1B2D;
      border-color: #5B9DFF;
    }

    .cell.found .cell__value {
      background: #4CD08A;
      color: #0F1B2D;
      border-color: #4CD08A;
    }

    .cell.excluded .cell__value {
      opacity: 0.25;
      text-decoration: line-through;
    }

    .cell .pointer {
      position: absolute;
      top: -22px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.05em;
      pointer-events: none;
    }

    .cell .pointer--left  { left: 0;   color: #FF6B57; }
    .cell .pointer--right { right: 0;  color: #FF6B57; }
    .cell .pointer--mid   { left: 50%; transform: translateX(-50%); color: #5B9DFF; }

    .log {
      padding: 16px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      line-height: 1.8;
      color: #9DAEC2;
      background: #0A1422;
      border: 1px solid #1E2D42;
      border-radius: 2px;
      min-height: 80px;
      max-height: 200px;
      overflow-y: auto;
      white-space: pre-wrap;
    }

    .log__line--ok   { color: #4CD08A; }
    .log__line--miss { color: #FF6B57; }
  `,

    js: `
    const $arr = document.getElementById('arr');
    const $target = document.getElementById('target');
    const $play = document.getElementById('play');
    const $step = document.getElementById('step');
    const $reset = document.getElementById('reset');
    const $stage = document.getElementById('stage');
    const $log = document.getElementById('log');

    let state = null;
    let timer = null;

    function parseInputs() {
      const arr = $arr.value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
      const target = Number($target.value);
      return { arr, target };
    }

    function init() {
      const { arr, target } = parseInputs();
      state = {
        arr,
        target,
        left: 0,
        right: arr.length - 1,
        mid: null,
        found: null,
        step: 0,
        done: false,
      };
      render();
      $log.innerHTML = '';
      addLog('جاهز للبحث عن ' + target + ' في مصفوفة بـ ' + arr.length + ' عنصر.');
    }

    function addLog(text, cls) {
      const line = document.createElement('div');
      if (cls) line.className = 'log__line--' + cls;
      line.textContent = text;
      $log.appendChild(line);
      $log.scrollTop = $log.scrollHeight;
    }

    function step() {
      if (!state || state.done) return;

      state.step++;

      if (state.left > state.right) {
        state.done = true;
        addLog('انتهى البحث: القيمة غير موجودة.', 'miss');
        render();
        stop();
        return;
      }

      const mid = Math.floor((state.left + state.right) / 2);
      state.mid = mid;
      const midVal = state.arr[mid];

      addLog(
        'خطوة ' + state.step + ': left=' + state.left +
        ' · right=' + state.right +
        ' · mid=' + mid +
        ' → arr[mid]=' + midVal
      );

      if (midVal === state.target) {
        state.found = mid;
        state.done = true;
        addLog('لقيناه في الموقع ' + mid + '.', 'ok');
        stop();
      } else if (midVal < state.target) {
        state.left = mid + 1;
        addLog('arr[mid] < target → نستبعد النص الشمال، left=' + state.left);
      } else {
        state.right = mid - 1;
        addLog('arr[mid] > target → نستبعد النص اليمين، right=' + state.right);
      }

      render();
    }

    function render() {
      if (!state) return;

      $stage.innerHTML = '';

      state.arr.forEach((val, i) => {
        const cell = document.createElement('div');
        cell.className = 'cell';

        const inRange = i >= state.left && i <= state.right && !state.done;
        const excluded = !inRange && !state.done;
        const isMid = i === state.mid;
        const isFound = i === state.found;

        if (inRange) cell.classList.add('in-range');
        if (excluded) cell.classList.add('excluded');
        if (isMid && !isFound) cell.classList.add('mid');
        if (isFound) cell.classList.add('found');

        if (i === state.left && !state.done) {
          const p = document.createElement('span');
          p.className = 'pointer pointer--left';
          p.textContent = 'L';
          cell.appendChild(p);
        }
        if (i === state.right && !state.done) {
          const p = document.createElement('span');
          p.className = 'pointer pointer--right';
          p.textContent = 'R';
          cell.appendChild(p);
        }
        if (isMid && !isFound) {
          const p = document.createElement('span');
          p.className = 'pointer pointer--mid';
          p.textContent = 'M';
          cell.appendChild(p);
        }

        const v = document.createElement('div');
        v.className = 'cell__value';
        v.textContent = val;

        const idx = document.createElement('div');
        idx.className = 'cell__index';
        idx.textContent = i;

        cell.appendChild(v);
        cell.appendChild(idx);
        $stage.appendChild(cell);
      });

      $step.disabled = state.done;
      $play.textContent = timer ? 'وقّف' : 'شغّل';
    }

    function play() {
      if (timer) {
        stop();
        return;
      }
      if (!state || state.done) init();
      timer = setInterval(() => {
        if (!state || state.done) { stop(); return; }
        step();
      }, 700);
      render();
    }

    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
      render();
    }

    $play.addEventListener('click', play);
    $step.addEventListener('click', step);
    $reset.addEventListener('click', init);
    $arr.addEventListener('change', init);
    $target.addEventListener('change', init);

    init();
  `,
};

// ═══════════════════════════════════════════════════════════════════
// المحطات — 15 محطة
// ═══════════════════════════════════════════════════════════════════

export const STATIONS: Station[] = [
    // ─── الخط الأزرق: خوارزميات ───
    {
        id: 'A-001',
        num: 'A1',
        line: 'algo',
        x: 700,
        y: 70,
        slug: 'binary-search',
        href: '/algorithms/binary-search',
        level: 'مبتدئ',
        next: 'A-002',

        title: 'البحث الثنائي',
        titleEn: 'Binary Search',
        summary: 'ابحث عن قيمة داخل مصفوفة مرتّبة بتقسيم مساحة البحث للنص كل مرة.',
        date: '2026',
        tags: ['searching', 'divide-and-conquer', 'O(log n)'],

        whatItDoes:
            'بيدوّر على قيمة معيّنة جوه مصفوفة مرتّبة تصاعديًا. بدل ما يمشي عنصر عنصر (زي Linear Search)، بيقسم مساحة البحث للنص كل خطوة، فبيوصل للنتيجة في O(log n) بدل O(n).',

        explanation: `تخيّل مكتبة فيها 1000 كتاب مرتّبين أبجديًا. عايز توصل لكتاب واحد.

لو مشيت كتاب كتاب، ممكن توصل بعد 1000 خطوة. ولو عندك 100 ألف كتاب، هتوصل بعد 100 ألف خطوة. يعني لو البيانات زادت 100 ضعف، الوقت بيزيد 100 ضعف كمان. ده اسمه O(n).

البحث الثنائي بيعمل حاجة أذكى: بيفتح الكتاب اللي في نص المكتبة. لو الكتاب اللي بيدوّر عليه أبجديًا بعد النص، يبقى مش محتاج يبص على النص الأول خالص. لو قبله، يبص على النص الأول بس.

كل مرة بيقسّم مساحة البحث للنص. من 1000 → 500 → 250 → 125 → 63 → 32 → 16 → 8 → 4 → 2 → 1. عشر خطوات بس! ولو عندك مليون عنصر، 20 خطوة بس.

الشرط الوحيد: المصفوفة لازم تكون **مرتّبة**. لو مش مرتّبة، البحث الثنائي ما ينفعش، ولازم تستخدم Linear Search أو ترتّب الأول.

الفرق بين الاتنين في الأرقام:
• مصفوفة 10 عناصر → Linear: 10 خطوات أقصى · Binary: 4 خطوات أقصى
• مصفوفة 1,000 → Linear: 1000 · Binary: 10
• مصفوفة 1,000,000 → Linear: مليون · Binary: 20`,

        codeBreakdown: [
            { line: 'function binarySearch(arr, target) {', note: 'الدالة بتاخد حاجتين: المصفوفة المرتّبة `arr`، والقيمة اللي بندوّر عليها `target`. بترجّع الـ index بتاع القيمة، أو -1 لو مش موجودة.' },
            { line: '  let left = 0;', note: 'حدّدنا بداية مساحة البحث — أول عنصر في المصفوفة. اسمها `left` لأنها بتتحرك لليمين لما نستبعد النص الشمال.' },
            { line: '  let right = arr.length - 1;', note: 'حدّدنا نهاية مساحة البحث — آخر عنصر في المصفوفة. اسمها `right` لأنها بتتحرك لليسار لما نستبعد النص اليمين.' },
            { line: '  while (left <= right) {', note: 'بنلف طول ما فيه عناصر في مساحة البحث. لو `left` عدّى `right`، معناها المصفوفة خلصت والقيمة مش موجودة.' },
            { line: '    const mid = Math.floor((left + right) / 2);', note: 'بنحسب العنصر اللي في النص. `Math.floor` بتقرّب لأقرب رقم صحيح لأن المصفوفة مش بتقبل index عشري.' },
            { line: '    if (arr[mid] === target) return mid;', note: 'لو القيمة اللي في النص هي اللي بندوّر عليها — لقيناها، نرجّع الـ index على طول.' },
            { line: '    if (arr[mid] < target) left = mid + 1;', note: 'لو القيمة اللي في النص أصغر من الهدف — الهدف في النص اليمين. نحرّك `left` بعد الـ mid عشان نستبعد النص الشمال كله.' },
            { line: '    else right = mid - 1;', note: 'لو القيمة اللي في النص أكبر من الهدف — الهدف في النص الشمال. نحرّك `right` قبل الـ mid عشان نستبعد النص اليمين كله.' },
            { line: '  }', note: 'نهاية الـ while. لو خلصنا اللفة من غير ما نرجّع حاجة، يبقى القيمة مش موجودة.' },
            { line: '  return -1;', note: 'القيمة مش موجودة في المصفوفة. ده convention شائع في JavaScript (`indexOf` بيعمل كده كمان).' },
            { line: '}', note: 'نهاية الدالة. عندنا دلوقتي دالة بحث كاملة بتشتغل في O(log n).' },
        ],

        live: BINARY_SEARCH_RUNNABLE,

        practice: {
            prompt:
                'اكتب دالة `binarySearch(arr, target)` بترجّع الـ index بتاع `target` لو موجود، أو -1 لو مش موجود. المصفوفة مرتّبة تصاعديًا. لازم تعدّي كل الاختبارات.',
            functionName: 'binarySearch',
            starter: `function binarySearch(arr, target) {
  // اكتب الكود هنا

}`,
            solution: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}`,
            tests: [
                { id: 't1', description: 'الهدف في النص', args: [[1, 3, 5, 7, 9, 11, 13], 7], expected: 3 },
                { id: 't2', description: 'الهدف في الأول', args: [[1, 3, 5, 7, 9], 1], expected: 0 },
                { id: 't3', description: 'الهدف في الآخر', args: [[1, 3, 5, 7, 9], 9], expected: 4 },
                { id: 't4', description: 'الهدف مش موجود', args: [[1, 3, 5, 7, 9], 4], expected: -1 },
                { id: 't5', description: 'مصفوفة عنصر واحد', args: [[7], 7], expected: 0 },
                { id: 't6', description: 'مصفوفة فاضية', args: [[], 5], expected: -1 },
                { id: 't7', description: 'مصفوفة كبيرة', args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8], expected: 7 },
            ],
        },

        quizzes: [
            {
                question: 'لو المصفوفة فيها 1024 عنصر، أقصى عدد خطوات للبحث الثنائي كام؟',
                options: ['10', '32', '512', '1024'],
                correct: 0,
                explanation: 'log₂(1024) = 10. يعني 10 خطوات بس في أسوأ حالة.',
            },
            {
                question: 'ليه `left = mid + 1` مش `left = mid`؟',
                options: [
                    'عشان نكسر اللفة أسرع',
                    'عشان نتجنب الـ infinite loop لما mid يساوي left',
                    'عشان الأرقام تبقى زوجية',
                    'مفيش فرق، الاتنين شغالين',
                ],
                correct: 1,
                explanation:
                    'لو خلّينا `left = mid` والقيمة في النص مش هي الهدف، ممكن نلف على نفس الـ mid للأبد. بنزوّد 1 عشان نستبعد الـ mid اللي عرفنا إنه مش الهدف.',
            },
            {
                question: 'هل البحث الثنائي يشتغل على مصفوفة مش مرتّبة؟',
                options: [
                    'أيوه، بيشتغل عادي',
                    'لأ، بيدي نتائج غلط',
                    'أيوه، بس أبطأ',
                    'بيعتمد على حجم المصفوفة',
                ],
                correct: 1,
                explanation:
                    'البحث الثنائي بيعتمد على إن المصفوفة مرتّبة عشان يعرف يقرّر يروح يمين ولا شمال. لو مش مرتّبة، القرار هيبقى غلط والنتيجة هتبقى عشوائية.',
            },
        ],

        useCases: [
            'البحث في قواعد البيانات المفهرسة (B-tree indexes بتستخدم نفس الفكرة)',
            'أداة `git bisect` — بتستخدم binary search لتحديد أول commit فيه bug',
            'البحث في ملفات log كبيرة مرتّبة بالوقت',
            'الـ autocomplete في الـ editors (بيعمل binary search على قائمة الكلمات المرتّبة)',
            'البحث في الـ Arrays الثابتة اللي بتتغيرش كتير (زي قوائم الأكواد)',
        ],

        whyItsGoodHere:
            'البحث الثنائي هو الخيار الصح لما: (1) الداتا مرتّبة أصلاً، أو (2) الداتا ثابتة مش بتتغير كتير، عشان ترتيبها مرة واحدة يبقى استثمار. لو الداتا كبيرة جدًا (ملايين العناصر) ومرتّبة، الفرق بينه وبين Linear Search هيبقى سنين ضوئية — حرفيًا. أما لو الداتا صغيرة (أقل من 100 عنصر)، الفرق مش هيبان والـ Linear Search هيكون أبسط وأسرع فعليًا بسبب الـ overhead بتاع حساب mid.',

        relatedIdeas: [
            'Linear Search — البحث التقليدي، O(n)، شغال على أي مصفوفة',
            'Jump Search — نسخة وسط، بتقفز كذا خطوة في كل مرة، مناسبة للمصفوفات الكبيرة',
            'Interpolation Search — لو الداتا موزّعة بالتساوي، بيوصل لـ O(log log n)',
            'Exponential Search — بيبدأ بـ 1، 2، 4، 8 لحد ما يوصل للمجال، بعدين binary search',
            'Ternary Search — بيقسّم لـ 3 أجزاء، أبطأ من Binary في العموم',
            'Binary Search on Answer — تقنية متقدّمة، بتستخدم Binary Search على المساحة نفسها',
        ],

        mathProblems: [
            'أثبت إن أقصى عدد خطوات = ⌈log₂(n)⌉ لـ n عنصر.',
            'لو عندك مصفوفة 1,048,576 عنصر، كام خطوة أقصى؟',
            'إيه أصغر n بحيث البحث الثنائي يحتاج 20 خطوة على الأقل؟',
            'إيه العلاقة بين عدد الخطوات وطول المصفوفة؟ ارسم graph للعلاقة دي.',
        ],
    },

    // ─── باقي الخوارزميات (لسه previews) ───
    { id: 'quick-sort', num: 'A2', line: 'algo', x: 560, y: 70, slug: 'quick-sort', href: '/station/quick-sort', level: 'متوسط', next: 'merge-sort', title: 'الترتيب السريع', titleEn: 'Quick Sort', summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_BARS, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },
    { id: 'merge-sort', num: 'A3', line: 'algo', x: 420, y: 70, slug: 'merge-sort', href: '/station/merge-sort', level: 'متوسط', next: 'heap-sort', title: 'الترتيب بالدمج', titleEn: 'Merge Sort', summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_BARS, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },
    { id: 'heap-sort', num: 'A4', line: 'algo', x: 280, y: 70, slug: 'heap-sort', href: '/station/heap-sort', level: 'متقدم', next: 'dijkstra', title: 'الترتيب بالكومة', titleEn: 'Heap Sort', summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_BARS, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },
    { id: 'dijkstra', num: 'A5', line: 'algo', x: 100, y: 70, slug: 'dijkstra', href: '/station/dijkstra', level: 'متقدم', next: 'linked-list', title: 'خوارزمية دايكسترا', titleEn: "Dijkstra's Algorithm", summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_BARS, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },

    // ─── الخط الأحمر: هياكل بيانات ───
    { id: 'linked-list', num: 'D1', line: 'ds', x: 700, y: 210, slug: 'linked-list', href: '/station/linked-list', level: 'مبتدئ', next: 'stack', title: 'القائمة المترابطة', titleEn: 'Linked List', summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_CHAIN, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },
    { id: 'stack', num: 'D2', line: 'ds', x: 560, y: 210, slug: 'stack', href: '/station/stack', level: 'مبتدئ', next: 'hash-table', title: 'المكدس', titleEn: 'Stack', summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_CHAIN, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },
    { id: 'hash-table', num: 'D3', line: 'ds', x: 420, y: 210, slug: 'hash-table', href: '/station/hash-table', level: 'متوسط', next: 'bst', title: 'جدول التقطيع', titleEn: 'Hash Table', summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_CHAIN, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },
    { id: 'bst', num: 'D4', line: 'ds', x: 280, y: 210, slug: 'bst', href: '/station/bst', level: 'متوسط', next: 'trie', title: 'شجرة البحث', titleEn: 'Binary Search Tree', summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_CHAIN, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },
    { id: 'trie', num: 'D5', line: 'ds', x: 100, y: 210, slug: 'trie', href: '/station/trie', level: 'متقدم', next: 'fetch', title: 'شجرة الحروف', titleEn: 'Trie', summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_CHAIN, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },

    // ─── الخط الأخضر: Built-in APIs ───
    { id: 'fetch', num: 'P1', line: 'api', x: 700, y: 350, slug: 'fetch', href: '/station/fetch', level: 'مبتدئ', next: 'promise', title: 'نجيب الداتا من ال api', titleEn: 'fetch()', summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_NETWORK, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },
    { id: 'promise', num: 'P2', line: 'api', x: 560, y: 350, slug: 'promise', href: '/station/promise', level: 'مبتدئ', next: 'array-map', title: 'الوعود', titleEn: 'Promise', summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_NETWORK, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },
    { id: 'array-map', num: 'P3', line: 'api', x: 420, y: 350, slug: 'array-map', href: '/station/array-map', level: 'مبتدئ', next: 'canvas-2d', title: 'التحويل في المصفوفة', titleEn: 'Array.map()', summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_NETWORK, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },
    { id: 'canvas-2d', num: 'P4', line: 'api', x: 280, y: 350, slug: 'canvas-2d', href: '/station/canvas-2d', level: 'متوسط', next: 'intersection-obs', title: 'الرسم على الكانفاس', titleEn: 'Canvas 2D', summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_NETWORK, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },
    { id: 'intersection-obs', num: 'P5', line: 'api', x: 100, y: 350, slug: 'intersection-obs', href: '/station/intersection-obs', level: 'متوسط', title: 'مراقب التمرير', titleEn: 'IntersectionObserver', summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_NETWORK, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },
];

// ═══════════════════════════════════════════════════════════════════
// Helper — دوّر على محطة بالـ id
// ═══════════════════════════════════════════════════════════════════

export function findStationById(id: string): Station | undefined {
    return STATIONS.find(s => s.id === id);
}