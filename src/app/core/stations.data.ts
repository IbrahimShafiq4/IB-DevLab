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

// ═══════════════════════════════════════════════════════════════════
// Linked List — الـ Visualizer الكامل
// ═══════════════════════════════════════════════════════════════════

const LINKED_LIST_RUNNABLE: Runnable = {
  html: `
    <div class="wrap">
      <header class="head">
        <span class="line-dot"></span>
        <span class="label">Linked List — Visualizer</span>
      </header>

      <div class="controls">
        <div class="ctrl-group">
          <label>القيمة</label>
          <input id="value-input" type="number" value="40" dir="ltr">
        </div>
        <div class="btns">
          <button id="add-head" class="primary">أضف في الأول</button>
          <button id="add-tail">أضف في الآخر</button>
          <button id="search">ابحث</button>
          <button id="delete" class="danger">احذف</button>
        </div>
        <div class="btns">
          <button id="reverse">اعكس</button>
          <button id="clear">امسح الكل</button>
        </div>
      </div>

      <div class="stage" id="stage"></div>

      <div class="stats">
        <div class="stat">
          <span class="stat-label">الطول</span>
          <span class="stat-value" id="length-val">0</span>
        </div>
        <div class="stat">
          <span class="stat-label">آخر عملية</span>
          <span class="stat-value" id="last-op">—</span>
        </div>
        <div class="stat">
          <span class="stat-label">الحالة</span>
          <span class="stat-value" id="status-val">جاهزة</span>
        </div>
      </div>

      <div id="log" class="log"></div>

      <section class="cheat-sheet">
        <h3 class="cheat-title">مقارنة سريعة مع Array</h3>
        <table class="complexity-table">
          <thead>
            <tr>
              <th>العملية</th>
              <th>Linked List</th>
              <th>Array</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Access by index</td><td class="bad">O(n)</td><td class="good">O(1)</td></tr>
            <tr><td>Insert at head</td><td class="good">O(1)</td><td class="bad">O(n)</td></tr>
            <tr><td>Insert at tail</td><td class="bad">O(n)</td><td class="good">O(1)*</td></tr>
            <tr><td>Delete at head</td><td class="good">O(1)</td><td class="bad">O(n)</td></tr>
            <tr><td>Search</td><td class="bad">O(n)</td><td class="bad">O(n)</td></tr>
          </tbody>
        </table>
        <p class="cheat-foot">* Insert at tail in Array: O(1) amortized</p>
      </section>
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

    .wrap { display: flex; flex-direction: column; gap: 16px; max-width: 900px; margin-inline: auto; }

    .head { display: flex; align-items: center; gap: 8px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #FF6B57; letter-spacing: 0.05em; }
    .line-dot { width: 8px; height: 8px; border-radius: 50%; background: #FF6B57; }

    .controls { display: flex; flex-wrap: wrap; gap: 12px; align-items: end; padding: 16px; border: 1px solid #1E2D42; border-radius: 4px; background: #152236; }
    .ctrl-group { display: flex; flex-direction: column; gap: 4px; min-width: 100px; }
    .ctrl-group label { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: #6B7C92; letter-spacing: 0.08em; text-transform: uppercase; }
    .ctrl-group input { padding: 8px 12px; font-family: 'IBM Plex Mono', monospace; font-size: 14px; color: #E6EDF2; background: #0A1422; border: 1px solid #1E2D42; border-radius: 2px; outline: none; width: 100px; }
    .ctrl-group input:focus { border-color: #FF6B57; }

    .btns { display: flex; gap: 6px; flex-wrap: wrap; }
    .btns button { padding: 8px 14px; font-family: 'IBM Plex Sans Arabic', sans-serif; font-size: 13px; font-weight: 500; color: #E6EDF2; background: #0A1422; border: 1px solid #2A3846; border-radius: 2px; cursor: pointer; transition: all 0.16s; white-space: nowrap; }
    .btns button:hover { border-color: #FF6B57; color: #FF6B57; }
    .btns button.primary { background: #F2B200; border-color: #F2B200; color: #0F1B2D; font-weight: 600; }
    .btns button.primary:hover { opacity: 0.9; color: #0F1B2D; border-color: #F2B200; }
    .btns button.danger { border-color: #F26B62; color: #F26B62; }
    .btns button.danger:hover { background: #F26B62; color: #0F1B2D; }

    .stage { direction: ltr; display: flex; align-items: center; flex-wrap: nowrap; gap: 0; padding: 40px 20px; background: #0A1422; border: 1px solid #1E2D42; border-radius: 4px; min-height: 140px; overflow-x: auto; }
    .empty-msg { width: 100%; text-align: center; color: #6B7C92; font-family: 'IBM Plex Mono', monospace; font-size: 14px; }
    .head-label { color: #4CD08A; font-family: 'IBM Plex Mono', monospace; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; margin-inline-end: 10px; flex-shrink: 0; }
    .node { display: flex; align-items: stretch; border: 2px solid #FF6B57; border-radius: 4px; background: #152236; flex-shrink: 0; transition: all 0.24s ease; }
    .node__value { display: flex; align-items: center; justify-content: center; padding: 12px 20px; font-family: 'IBM Plex Mono', monospace; font-size: 18px; font-weight: 600; color: #E6EDF2; min-width: 70px; transition: all 0.24s ease; }
    .node__next { display: flex; align-items: center; justify-content: center; width: 34px; background: #0A1422; border-inline-start: 1px solid #2A3846; color: #6B7C92; font-size: 18px; font-weight: bold; }
    .node.current { border-color: #F2B200; box-shadow: 0 0 0 4px rgba(242, 178, 0, 0.15); }
    .node.current .node__value { background: #F2B200; color: #0F1B2D; }
    .node.found { border-color: #4CD08A; box-shadow: 0 0 0 4px rgba(76, 208, 138, 0.2); }
    .node.found .node__value { background: #4CD08A; color: #0F1B2D; }
    .arrow { color: #FF6B57; font-size: 22px; padding: 0 6px; flex-shrink: 0; font-family: monospace; }
    .null-tag { color: #6B7C92; font-family: 'IBM Plex Mono', monospace; font-size: 22px; padding: 0 12px; flex-shrink: 0; }

    .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
    .stat { padding: 12px 14px; background: #152236; border: 1px solid #1E2D42; border-radius: 4px; display: flex; flex-direction: column; gap: 4px; }
    .stat-label { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: #6B7C92; letter-spacing: 0.08em; text-transform: uppercase; }
    .stat-value { font-family: 'IBM Plex Mono', monospace; font-size: 15px; font-weight: 600; color: #5B9DFF; }

    .log { padding: 14px 16px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; line-height: 1.8; color: #9DAEC2; background: #0A1422; border: 1px solid #1E2D42; border-radius: 4px; min-height: 100px; max-height: 200px; overflow-y: auto; white-space: pre-wrap; }
    .log__line--ok { color: #4CD08A; }
    .log__line--miss { color: #F26B62; }
    .log__line--info { color: #5B9DFF; }

    .cheat-sheet { padding: 16px; background: #152236; border: 1px solid #1E2D42; border-radius: 4px; }
    .cheat-title { margin: 0 0 12px; font-family: 'IBM Plex Sans Arabic', sans-serif; font-size: 14px; font-weight: 600; color: #E6EDF2; }
    .complexity-table { width: 100%; border-collapse: collapse; font-family: 'IBM Plex Mono', monospace; font-size: 12px; }
    .complexity-table th, .complexity-table td { padding: 8px 12px; text-align: start; border-bottom: 1px solid #1E2D42; }
    .complexity-table th { color: #6B7C92; font-weight: 500; font-size: 11px; letter-spacing: 0.05em; text-transform: uppercase; }
    .complexity-table td { color: #E6EDF2; }
    .complexity-table td.good { color: #4CD08A; font-weight: 600; }
    .complexity-table td.bad { color: #F26B62; }
    .complexity-table tr:last-child td { border-bottom: none; }
    .cheat-foot { margin: 10px 0 0; font-size: 11px; color: #6B7C92; font-family: 'IBM Plex Mono', monospace; }
  `,

  js: `
    class Node {
      constructor(value) {
        this.value = value;
        this.next = null;
      }
    }

    class LinkedList {
      constructor() {
        this.head = null;
      }

      getSize() {
        let n = 0, cur = this.head;
        while (cur) { n++; cur = cur.next; }
        return n;
      }

      addHead(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
      }

      addTail(value) {
        const node = new Node(value);
        if (!this.head) { this.head = node; return; }
        let cur = this.head;
        while (cur.next) cur = cur.next;
        cur.next = node;
      }

      delete(value) {
        if (!this.head) return false;
        if (this.head.value === value) { this.head = this.head.next; return true; }
        let cur = this.head;
        while (cur.next) {
          if (cur.next.value === value) { cur.next = cur.next.next; return true; }
          cur = cur.next;
        }
        return false;
      }

      reverse() {
        let prev = null, cur = this.head;
        while (cur) {
          const next = cur.next;
          cur.next = prev;
          prev = cur;
          cur = next;
        }
        this.head = prev;
      }
    }

    const list = new LinkedList();
    const stageEl = document.getElementById('stage');
    const logEl = document.getElementById('log');
    const lengthVal = document.getElementById('length-val');
    const lastOp = document.getElementById('last-op');
    const statusVal = document.getElementById('status-val');
    const inputEl = document.getElementById('value-input');

    const delay = (ms) => new Promise(r => setTimeout(r, ms));

    function addLog(text, cls) {
      const line = document.createElement('div');
      if (cls) line.className = 'log__line--' + cls;
      line.textContent = text;
      logEl.appendChild(line);
      logEl.scrollTop = logEl.scrollHeight;
    }

    function render(opts) {
      opts = opts || {};
      const currentIdx = (opts.current !== undefined) ? opts.current : -1;
      const foundIdx = (opts.found !== undefined) ? opts.found : -1;

      stageEl.innerHTML = '';

      if (!list.head) {
        const empty = document.createElement('div');
        empty.className = 'empty-msg';
        empty.textContent = '(القائمة فاضية — ضيف Node من الأزرار فوق)';
        stageEl.appendChild(empty);
        lengthVal.textContent = '0';
        return;
      }

      const headLabel = document.createElement('span');
      headLabel.className = 'head-label';
      headLabel.textContent = 'HEAD →';
      stageEl.appendChild(headLabel);

      let idx = 0, cur = list.head;
      while (cur) {
        const nodeEl = document.createElement('div');
        nodeEl.className = 'node';
        if (currentIdx === idx) nodeEl.classList.add('current');
        if (foundIdx === idx) nodeEl.classList.add('found');

        const val = document.createElement('div');
        val.className = 'node__value';
        val.textContent = cur.value;

        const next = document.createElement('div');
        next.className = 'node__next';
        next.textContent = '•';

        nodeEl.appendChild(val);
        nodeEl.appendChild(next);
        stageEl.appendChild(nodeEl);

        if (cur.next) {
          const arrow = document.createElement('span');
          arrow.className = 'arrow';
          arrow.textContent = '→';
          stageEl.appendChild(arrow);
        }

        cur = cur.next;
        idx++;
      }

      const nullEl = document.createElement('span');
      nullEl.className = 'null-tag';
      nullEl.textContent = '∅';
      stageEl.appendChild(nullEl);
      lengthVal.textContent = String(idx);
    }

    async function animateSearch(target) {
      let cur = list.head, idx = 0;
      statusVal.textContent = 'بنلف…';
      while (cur) {
        render({ current: idx });
        addLog('→ نفحص Node #' + idx + ': القيمة = ' + cur.value);
        await delay(450);
        if (cur.value === target) {
          render({ found: idx });
          addLog('✓ لقينا القيمة ' + target + ' عند index ' + idx, 'ok');
          statusVal.textContent = 'لقيناه';
          return idx;
        }
        cur = cur.next;
        idx++;
      }
      render();
      addLog('✕ القيمة ' + target + ' مش موجودة', 'miss');
      statusVal.textContent = 'مش موجودة';
      return -1;
    }

    document.getElementById('add-head').onclick = () => {
      const v = Number(inputEl.value);
      if (isNaN(v)) return;
      list.addHead(v);
      render();
      lastOp.textContent = 'Add Head ' + v;
      statusVal.textContent = 'جاهزة';
      addLog('إضافة ' + v + ' في الأول (O(1))', 'info');
    };

    document.getElementById('add-tail').onclick = () => {
      const v = Number(inputEl.value);
      if (isNaN(v)) return;
      list.addTail(v);
      render();
      lastOp.textContent = 'Add Tail ' + v;
      statusVal.textContent = 'جاهزة';
      addLog('إضافة ' + v + ' في الآخر (O(n))', 'info');
    };

    document.getElementById('search').onclick = async () => {
      const v = Number(inputEl.value);
      if (isNaN(v)) return;
      lastOp.textContent = 'Search ' + v;
      await animateSearch(v);
    };

    document.getElementById('delete').onclick = () => {
      const v = Number(inputEl.value);
      if (isNaN(v)) return;
      const ok = list.delete(v);
      render();
      lastOp.textContent = 'Delete ' + v;
      if (ok) { addLog('✓ حذف ' + v, 'ok'); statusVal.textContent = 'اتحذفت'; }
      else { addLog('✕ القيمة ' + v + ' مش موجودة', 'miss'); statusVal.textContent = 'مش موجودة'; }
    };

    document.getElementById('reverse').onclick = () => {
      list.reverse();
      render();
      lastOp.textContent = 'Reverse';
      statusVal.textContent = 'اتعكست';
      addLog('عكس القائمة (O(n))', 'info');
    };

    document.getElementById('clear').onclick = () => {
      list.head = null;
      render();
      lastOp.textContent = 'Clear';
      statusVal.textContent = 'فاضية';
      addLog('تفريغ القائمة', 'info');
    };

    [10, 20, 30].forEach(v => list.addTail(v));
    render();
    addLog('القائمة جاهزة بـ [10, 20, 30]', 'info');
  `,
};

// ═══════════════════════════════════════════════════════════════════
// Fetch — محطة كاملة بأربع visualization panels
// ═══════════════════════════════════════════════════════════════════

const FETCH_RUNNABLE: Runnable = {
  html: `
    <div class="wrap">
      <header class="head">
        <span class="line-dot"></span>
        <span class="label">fetch() — Interactive Lab</span>
      </header>

      <nav class="tabs" role="tablist">
        <button class="tab active" data-tab="lifecycle" role="tab">
          <span class="tab-num">01</span>
          <span>Lifecycle</span>
        </button>
        <button class="tab" data-tab="explorer" role="tab">
          <span class="tab-num">02</span>
          <span>Live Explorer</span>
        </button>
        <button class="tab" data-tab="playground" role="tab">
          <span class="tab-num">03</span>
          <span>Code Playground</span>
        </button>
        <button class="tab" data-tab="errors" role="tab">
          <span class="tab-num">04</span>
          <span>Error Lab</span>
        </button>
      </nav>

      <!-- ═══════════ PANEL 1: LIFECYCLE ═══════════ -->
      <section class="panel active" data-panel="lifecycle">
        <div class="lifecycle-stage">
          <div class="node client">
            <div class="node-icon">💻</div>
            <div class="node-label">Browser</div>
            <div class="node-sub">fetch(url)</div>
          </div>

          <div class="wire">
            <div class="wire-line"></div>
            <div class="packet" id="packet-req">📤</div>
            <div class="packet-label" id="label-req">GET /posts/1</div>
          </div>

          <div class="node server">
            <div class="node-icon">🌐</div>
            <div class="node-label">Server</div>
            <div class="node-sub">api.example.com</div>
          </div>

          <div class="wire">
            <div class="wire-line"></div>
            <div class="packet" id="packet-res">📥</div>
            <div class="packet-label" id="label-res">200 OK</div>
          </div>

          <div class="node promise">
            <div class="node-icon">⚡</div>
            <div class="node-label">Promise</div>
            <div class="node-sub">.then() / await</div>
          </div>
        </div>

        <div class="lifecycle-controls">
          <button class="btn primary" id="run-lifecycle">شغّل الرحلة</button>
          <button class="btn" id="reset-lifecycle">رجّع</button>
        </div>

        <ol class="lifecycle-steps" id="lifecycle-steps">
          <li class="step" data-step="1">
            <span class="step-num">1</span>
            <div>
              <strong>fetch(url) بيترمي في الـ Network</strong>
              <p>الـ browser بيفتح اتصال TCP مع السيرفر، وبيبعت HTTP request.</p>
            </div>
          </li>
          <li class="step" data-step="2">
            <span class="step-num">2</span>
            <div>
              <strong>fetch() بترجّع Promise فوراً</strong>
              <p>مش بتستنّى الـ Response. بترجّع Promise <em>pending</em> حالاً.</p>
            </div>
          </li>
          <li class="step" data-step="3">
            <span class="step-num">3</span>
            <div>
              <strong>السيرفر بيرد بـ Response</strong>
              <p>حتى لو الـ status = 404، الـ Promise بتتحل بنجاح. لكن!</p>
            </div>
          </li>
          <li class="step" data-step="4">
            <span class="step-num">4</span>
            <div>
              <strong>لازم تتحقق من response.ok</strong>
              <p>fetch() مش بترمي error على 404 أو 500. لازم تتحقق بنفسك.</p>
            </div>
          </li>
          <li class="step" data-step="5">
            <span class="step-num">5</span>
            <div>
              <strong>response.json() = Promise تانية</strong>
              <p>الـ body تيار بيانات. محتاج تقرأه بـ .json() أو .text() وهي كمان Promise.</p>
            </div>
          </li>
        </ol>
      </section>

      <!-- ═══════════ PANEL 2: LIVE EXPLORER ═══════════ -->
      <section class="panel" data-panel="explorer">
        <div class="explorer-grid">
          <div class="presets">
            <h3 class="sub-title">APIs جاهزة</h3>
            <button class="preset" data-url="https://jsonplaceholder.typicode.com/posts/1" data-method="GET">
              <span class="preset-method">GET</span>
              <span class="preset-url">/posts/1</span>
              <span class="preset-tag">JSONPlaceholder</span>
            </button>
            <button class="preset" data-url="https://jsonplaceholder.typicode.com/users" data-method="GET">
              <span class="preset-method">GET</span>
              <span class="preset-url">/users</span>
              <span class="preset-tag">JSONPlaceholder</span>
            </button>
            <button class="preset" data-url="https://jsonplaceholder.typicode.com/todos?_limit=5" data-method="GET">
              <span class="preset-method">GET</span>
              <span class="preset-url">/todos?_limit=5</span>
              <span class="preset-tag">JSONPlaceholder</span>
            </button>
            <button class="preset" data-url="https://api.github.com/users/torvalds" data-method="GET">
              <span class="preset-method">GET</span>
              <span class="preset-url">GitHub /torvalds</span>
              <span class="preset-tag">GitHub API</span>
            </button>
            <button class="preset" data-url="https://jsonplaceholder.typicode.com/posts" data-method="POST">
              <span class="preset-method post">POST</span>
              <span class="preset-url">/posts</span>
              <span class="preset-tag">JSONPlaceholder</span>
            </button>
            <button class="preset" data-url="https://jsonplaceholder.typicode.com/posts/1" data-method="DELETE">
              <span class="preset-method delete">DELETE</span>
              <span class="preset-url">/posts/1</span>
              <span class="preset-tag">JSONPlaceholder</span>
            </button>
          </div>

          <div class="explorer-main">
            <div class="request-bar">
              <select id="method-select" class="method-select">
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
              </select>
              <input id="url-input" class="url-input" type="text"
                value="https://jsonplaceholder.typicode.com/posts/1" dir="ltr">
              <button id="send-btn" class="btn primary">Send</button>
            </div>

            <div class="body-input-wrap" id="body-wrap" style="display:none;">
              <label>Request Body (JSON)</label>
              <textarea id="body-input" class="body-input" dir="ltr" spellcheck="false">{
  "title": "Hello from IBDevLab",
  "body": "Testing POST request",
  "userId": 1
}</textarea>
            </div>

            <div class="response-meta">
              <div class="meta-item">
                <span class="meta-label">Status</span>
                <span class="meta-value" id="res-status">—</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Time</span>
                <span class="meta-value" id="res-time">—</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Size</span>
                <span class="meta-value" id="res-size">—</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Content-Type</span>
                <span class="meta-value" id="res-ctype">—</span>
              </div>
            </div>

            <div class="response-body-wrap">
              <div class="body-tabs">
                <button class="body-tab active" data-body="pretty">Pretty</button>
                <button class="body-tab" data-body="raw">Raw</button>
                <button class="body-tab" data-body="headers">Headers</button>
              </div>
              <pre class="response-body" id="res-body" dir="ltr">اضغط Send عشان تبعت Request.</pre>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════ PANEL 3: CODE PLAYGROUND ═══════════ -->
      <section class="panel" data-panel="playground">
        <div class="pg-header">
          <p class="pg-hint">
            اكتب كود JavaScript بنفسك، اضغط Run، وشوف الناتج فوراً.
            <code>console.log</code> بيطلع في الـ Output.
            <code>await</code> مدعومة (top-level).
          </p>
        </div>

        <div class="pg-examples">
          <span class="pg-examples-label">أمثلة سريعة:</span>
          <button class="chip" data-snippet="basic">Fetch بسيط</button>
          <button class="chip" data-snippet="async">async/await</button>
          <button class="chip" data-snippet="post">POST Request</button>
          <button class="chip" data-snippet="error">Error Handling</button>
          <button class="chip" data-snippet="parallel">Parallel (Promise.all)</button>
          <button class="chip" data-snippet="timeout">Timeout مع AbortController</button>
        </div>

        <div class="pg-split">
          <div class="pg-editor-col">
            <div class="pg-editor-head">
              <span>script.js</span>
              <span class="pg-editor-dot"></span>
            </div>
            <textarea id="pg-code" class="pg-textarea" dir="ltr" spellcheck="false">// اضغط "أمثلة سريعة" فوق أو اكتب كودك هنا

const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const data = await response.json();

console.log('Title:', data.title);
console.log('Body:', data.body);</textarea>
          </div>

          <div class="pg-output-col">
            <div class="pg-output-head">
              <span>Console Output</span>
              <button class="btn small" id="pg-clear">Clear</button>
            </div>
            <pre id="pg-output" class="pg-output">// الناتج هيظهر هنا...</pre>
          </div>
        </div>

        <div class="pg-actions">
          <button class="btn primary" id="pg-run">▶ Run Code</button>
          <button class="btn" id="pg-reset">↺ Reset</button>
        </div>
      </section>

      <!-- ═══════════ PANEL 4: ERROR LAB ═══════════ -->
      <section class="panel" data-panel="errors">
        <p class="err-intro">
          في fetch، فيه نوعين مختلفين من الأخطاء. اختار واحد وشوف الفرق:
        </p>

        <div class="err-grid">
          <button class="err-card" data-err="404">
            <div class="err-icon">🔍</div>
            <div class="err-title">HTTP Error (404)</div>
            <div class="err-desc">السيرفر رد، بس بحالة خطأ</div>
            <div class="err-verdict"><span class="verdict-tag good">Promise resolves</span></div>
          </button>

          <button class="err-card" data-err="500">
            <div class="err-icon">💥</div>
            <div class="err-title">Server Error (500)</div>
            <div class="err-desc">السيرفر وقع</div>
            <div class="err-verdict"><span class="verdict-tag good">Promise resolves</span></div>
          </button>

          <button class="err-card" data-err="network">
            <div class="err-icon">📡</div>
            <div class="err-title">Network Failure</div>
            <div class="err-desc">مفيش اتصال بالإنترنت</div>
            <div class="err-verdict"><span class="verdict-tag bad">Promise rejects</span></div>
          </button>

          <button class="err-card" data-err="timeout">
            <div class="err-icon">⏱️</div>
            <div class="err-title">Timeout</div>
            <div class="err-desc">الـ request خد وقت طويل</div>
            <div class="err-verdict"><span class="verdict-tag bad">Promise rejects</span></div>
          </button>

          <button class="err-card" data-err="json">
            <div class="err-icon">🔤</div>
            <div class="err-title">Invalid JSON</div>
            <div class="err-desc">الـ body مش JSON صالح</div>
            <div class="err-verdict"><span class="verdict-tag bad">json() rejects</span></div>
          </button>

          <button class="err-card" data-err="cors">
            <div class="err-icon">🚫</div>
            <div class="err-title">CORS Blocked</div>
            <div class="err-desc">الـ origin مش مسموح</div>
            <div class="err-verdict"><span class="verdict-tag bad">Promise rejects</span></div>
          </button>
        </div>

        <div class="err-code-block">
          <div class="err-code-head">
            <span>الكود اللي بيتنفّذ</span>
          </div>
          <pre id="err-code" dir="ltr">// اضغط على أي كارت فوق عشان تشوف الكود والنتيجة</pre>
        </div>

        <div class="err-output-wrap">
          <div class="err-output-head">
            <span>النتيجة</span>
          </div>
          <pre id="err-output" dir="ltr">// في انتظار اختيارك...</pre>
        </div>
      </section>
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

    .wrap { max-width: 1000px; margin-inline: auto; display: flex; flex-direction: column; gap: 16px; }

    .head { display: flex; align-items: center; gap: 8px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #4CD08A; letter-spacing: 0.05em; }
    .line-dot { width: 8px; height: 8px; border-radius: 50%; background: #4CD08A; }

    /* ─── Tabs ─── */
    .tabs { display: flex; gap: 4px; flex-wrap: wrap; border-bottom: 1px solid #1E2D42; padding-bottom: 0; }
    .tab { display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: transparent; border: none; border-bottom: 2px solid transparent; color: #6B7C92; font-family: inherit; font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.16s; margin-bottom: -1px; }
    .tab:hover { color: #E6EDF2; }
    .tab.active { color: #4CD08A; border-bottom-color: #4CD08A; }
    .tab-num { font-family: 'IBM Plex Mono', monospace; font-size: 10px; opacity: 0.6; }

    .panel { display: none; padding: 20px 0; animation: fadeIn 0.3s ease; }
    .panel.active { display: block; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }

    /* ─── Buttons ─── */
    .btn { padding: 8px 16px; font-family: inherit; font-size: 13px; font-weight: 500; color: #E6EDF2; background: #0A1422; border: 1px solid #2A3846; border-radius: 4px; cursor: pointer; transition: all 0.16s; }
    .btn:hover { border-color: #4CD08A; color: #4CD08A; }
    .btn.primary { background: #F2B200; border-color: #F2B200; color: #0F1B2D; font-weight: 600; }
    .btn.primary:hover { opacity: 0.9; color: #0F1B2D; }
    .btn.small { padding: 4px 10px; font-size: 11px; }

    /* ═══════════ PANEL 1: LIFECYCLE ═══════════ */
    .lifecycle-stage { position: relative; display: flex; flex-direction: column; align-items: center; gap: 0; padding: 30px 20px; background: #0A1422; border: 1px solid #1E2D42; border-radius: 4px; overflow: hidden; }

    .node { display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 14px 22px; border: 2px solid #2A3846; border-radius: 6px; background: #152236; min-width: 140px; transition: all 0.4s ease; }
    .node-icon { font-size: 26px; }
    .node-label { font-family: 'IBM Plex Sans Arabic', sans-serif; font-size: 13px; font-weight: 600; color: #E6EDF2; }
    .node-sub { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: #6B7C92; }
    .node.active { border-color: #F2B200; box-shadow: 0 0 0 4px rgba(242, 178, 0, 0.15); }
    .node.done { border-color: #4CD08A; }

    .wire { position: relative; width: 4px; height: 60px; background: #1E2D42; margin: 4px 0; transition: all 0.3s; }
    .wire.active { background: #F2B200; }
    .wire-line { display: none; }
    .packet { position: absolute; left: 50%; transform: translateX(-50%); font-size: 20px; opacity: 0; transition: top 1.2s ease-in-out, opacity 0.2s; top: 0; }
    .packet.visible { opacity: 1; }
    .packet-label { position: absolute; top: 50%; left: 40px; transform: translateY(-50%); font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #6B7C92; white-space: nowrap; opacity: 0; transition: opacity 0.3s; }
    .packet-label.visible { opacity: 1; }

    .lifecycle-controls { display: flex; gap: 8px; margin-top: 20px; }

    .lifecycle-steps { display: flex; flex-direction: column; gap: 10px; margin: 20px 0 0; padding: 0; list-style: none; }
    .step { display: flex; gap: 14px; padding: 14px 16px; background: #152236; border: 1px solid #1E2D42; border-radius: 4px; opacity: 0.4; transition: all 0.4s ease; }
    .step.active { opacity: 1; border-color: #F2B200; background: color-mix(in oklab, #F2B200 8%, #152236); }
    .step.done { opacity: 1; border-color: #4CD08A; }
    .step-num { flex-shrink: 0; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; background: #0A1422; border: 1px solid #2A3846; border-radius: 50%; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 600; color: #4CD08A; }
    .step strong { display: block; color: #E6EDF2; font-size: 14px; margin-bottom: 4px; }
    .step p { color: #9DAEC2; font-size: 13px; line-height: 1.6; margin: 0; }
    .step em { color: #F2B200; font-style: normal; }

    /* ═══════════ PANEL 2: EXPLORER ═══════════ */
    .explorer-grid { display: grid; grid-template-columns: 260px 1fr; gap: 20px; }
    @media (max-width: 800px) { .explorer-grid { grid-template-columns: 1fr; } }

    .sub-title { font-family: 'IBM Plex Sans Arabic', sans-serif; font-size: 13px; font-weight: 600; color: #6B7C92; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.05em; }

    .presets { display: flex; flex-direction: column; gap: 6px; }
    .preset { display: flex; flex-direction: column; gap: 4px; padding: 12px 14px; background: #0A1422; border: 1px solid #1E2D42; border-radius: 4px; cursor: pointer; text-align: start; font-family: inherit; transition: all 0.16s; }
    .preset:hover { border-color: #4CD08A; background: #152236; }
    .preset-method { font-family: 'IBM Plex Mono', monospace; font-size: 10px; font-weight: 700; letter-spacing: 0.08em; color: #4CD08A; }
    .preset-method.post { color: #F2B200; }
    .preset-method.delete { color: #F26B62; }
    .preset-url { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #E6EDF2; word-break: break-all; }
    .preset-tag { font-size: 10px; color: #6B7C92; }

    .explorer-main { display: flex; flex-direction: column; gap: 12px; min-width: 0; }

    .request-bar { display: flex; gap: 6px; }
    .method-select, .url-input { padding: 10px 12px; background: #0A1422; border: 1px solid #1E2D42; border-radius: 4px; color: #E6EDF2; font-family: 'IBM Plex Mono', monospace; font-size: 13px; outline: none; }
    .method-select { flex-shrink: 0; font-weight: 600; cursor: pointer; }
    .url-input { flex: 1; min-width: 0; }
    .method-select:focus, .url-input:focus { border-color: #4CD08A; }

    .body-input-wrap { display: flex; flex-direction: column; gap: 4px; }
    .body-input-wrap label { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: #6B7C92; text-transform: uppercase; letter-spacing: 0.08em; }

    /* ─── Theme-aware: body input ─── */
    .body-input {
      width: 100%;
      min-height: 100px;
      padding: 10px 12px;
      background: var(--ct-bg, #0A1422);
      border: 1px solid var(--ct-border, #1E2D42);
      border-radius: 4px;
      color: var(--ct-text, #E6EDF2);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      line-height: 1.6;
      outline: none;
      resize: vertical;
      transition: background-color 200ms ease-out, border-color 200ms ease-out, color 200ms ease-out;
    }
    .body-input:focus { border-color: #4CD08A; }

    .response-meta { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 8px; }
    .meta-item { padding: 10px 12px; background: #152236; border: 1px solid #1E2D42; border-radius: 4px; display: flex; flex-direction: column; gap: 2px; }
    .meta-label { font-family: 'IBM Plex Mono', monospace; font-size: 9px; color: #6B7C92; text-transform: uppercase; letter-spacing: 0.08em; }
    .meta-value { font-family: 'IBM Plex Mono', monospace; font-size: 13px; font-weight: 600; color: #4CD08A; }

    .response-body-wrap { border: 1px solid #1E2D42; border-radius: 4px; overflow: hidden; background: #0A1422; }
    .body-tabs { display: flex; gap: 0; border-bottom: 1px solid #1E2D42; background: #152236; }
    .body-tab { padding: 8px 14px; background: transparent; border: none; border-bottom: 2px solid transparent; color: #6B7C92; font-family: inherit; font-size: 12px; cursor: pointer; transition: all 0.16s; }
    .body-tab:hover { color: #E6EDF2; }
    .body-tab.active { color: #4CD08A; border-bottom-color: #4CD08A; }

    /* ─── Theme-aware: response body ─── */
    .response-body {
      margin: 0;
      padding: 14px 16px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      line-height: 1.6;
      color: var(--ct-text, #E6EDF2);
      background-color: var(--ct-bg, #0A1422);
      max-height: 300px;
      overflow: auto;
      white-space: pre-wrap;
      word-break: break-all;
      transition: background-color 200ms ease-out, color 200ms ease-out;
    }

    /* ═══════════ PANEL 3: PLAYGROUND ═══════════ */
    .pg-header { margin-bottom: 12px; }
    .pg-hint { font-size: 13px; color: #9DAEC2; line-height: 1.7; }
    .pg-hint code { font-family: 'IBM Plex Mono', monospace; font-size: 12px; padding: 2px 6px; background: #152236; border-radius: 3px; color: #4CD08A; }

    .pg-examples { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; margin-bottom: 14px; }
    .pg-examples-label { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #6B7C92; margin-inline-end: 6px; }
    .chip { padding: 5px 12px; background: transparent; border: 1px solid #2A3846; border-radius: 20px; color: #9DAEC2; font-family: inherit; font-size: 12px; cursor: pointer; transition: all 0.16s; }
    .chip:hover { border-color: #4CD08A; color: #4CD08A; }

    .pg-split { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px; }
    @media (max-width: 800px) { .pg-split { grid-template-columns: 1fr; } }

    .pg-editor-col, .pg-output-col { display: flex; flex-direction: column; border: 1px solid #1E2D42; border-radius: 4px; overflow: hidden; background: #0A1422; }

    .pg-editor-head, .pg-output-head { display: flex; align-items: center; justify-content: space-between; padding: 8px 14px; background: #152236; border-bottom: 1px solid #1E2D42; font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #6B7C92; }
    .pg-editor-dot { width: 6px; height: 6px; border-radius: 50%; background: #F2B200; }

    /* ─── Theme-aware: pg textarea ─── */
    .pg-textarea {
      flex: 1;
      min-height: 320px;
      padding: 14px;
      background: var(--ct-bg, #0A1422);
      border: 0;
      color: var(--ct-text, #E6EDF2);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 13px;
      line-height: 1.7;
      outline: none;
      resize: vertical;
      tab-size: 2;
      caret-color: var(--ct-cursor, #F2B200);
      transition: background-color 200ms ease-out, color 200ms ease-out;
    }
    .pg-textarea::selection {
      background-color: var(--ct-selection, rgba(242, 178, 0, 0.3));
    }

    /* ─── Theme-aware: pg output ─── */
    .pg-output {
      flex: 1;
      margin: 0;
      padding: 14px;
      background: var(--ct-bg, #0A1422);
      color: var(--ct-text, #9DAEC2);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      line-height: 1.7;
      overflow: auto;
      white-space: pre-wrap;
      word-break: break-word;
      max-height: 400px;
      transition: background-color 200ms ease-out, color 200ms ease-out;
    }
    .pg-output .out-log { color: var(--ct-text, #E6EDF2); }
    .pg-output .out-err { color: #F26B62; }
    .pg-output .out-ok { color: #4CD08A; }
    .pg-output .out-info { color: #5B9DFF; }

    .pg-actions { display: flex; gap: 8px; }

    /* ═══════════ PANEL 4: ERRORS ═══════════ */
    .err-intro { font-size: 14px; color: #9DAEC2; line-height: 1.7; margin-bottom: 16px; }

    .err-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; margin-bottom: 20px; }

    .err-card { display: flex; flex-direction: column; gap: 6px; padding: 16px; background: #152236; border: 1px solid #1E2D42; border-radius: 4px; cursor: pointer; text-align: start; font-family: inherit; transition: all 0.16s; }
    .err-card:hover { border-color: #F2B200; transform: translateY(-2px); }
    .err-icon { font-size: 24px; }
    .err-title { font-size: 14px; font-weight: 600; color: #E6EDF2; }
    .err-desc { font-size: 12px; color: #9DAEC2; line-height: 1.5; }
    .err-verdict { margin-top: 4px; }
    .verdict-tag { display: inline-block; padding: 3px 10px; border-radius: 3px; font-family: 'IBM Plex Mono', monospace; font-size: 10px; font-weight: 600; letter-spacing: 0.05em; }
    .verdict-tag.good { background: color-mix(in oklab, #4CD08A 15%, transparent); color: #4CD08A; border: 1px solid #4CD08A; }
    .verdict-tag.bad { background: color-mix(in oklab, #F26B62 15%, transparent); color: #F26B62; border: 1px solid #F26B62; }

    .err-code-block, .err-output-wrap { border: 1px solid #1E2D42; border-radius: 4px; overflow: hidden; background: #0A1422; margin-bottom: 12px; }
    .err-code-head, .err-output-head { padding: 8px 14px; background: #152236; border-bottom: 1px solid #1E2D42; font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #6B7C92; }

    /* ─── Theme-aware: error code + output ─── */
    #err-code, #err-output {
      margin: 0;
      padding: 14px 16px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      line-height: 1.7;
      color: var(--ct-text, #E6EDF2);
      background-color: var(--ct-bg, #0A1422);
      white-space: pre-wrap;
      word-break: break-word;
      max-height: 260px;
      overflow: auto;
      transition: background-color 200ms ease-out, color 200ms ease-out;
    }
    #err-output { color: var(--ct-text, #9DAEC2); }

    /* ═══════════ Code-area scrollbars only ═══════════ */
    .body-input,
    .response-body,
    .pg-textarea,
    .pg-output,
    #err-code,
    #err-output {
      scrollbar-width: thin;
      scrollbar-color: var(--ct-scroll-thumb, #2A3846) var(--ct-scroll-track, transparent);
    }
    .body-input::-webkit-scrollbar,
    .response-body::-webkit-scrollbar,
    .pg-textarea::-webkit-scrollbar,
    .pg-output::-webkit-scrollbar,
    #err-code::-webkit-scrollbar,
    #err-output::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    .body-input::-webkit-scrollbar-track,
    .response-body::-webkit-scrollbar-track,
    .pg-textarea::-webkit-scrollbar-track,
    .pg-output::-webkit-scrollbar-track,
    #err-code::-webkit-scrollbar-track,
    #err-output::-webkit-scrollbar-track {
      background: var(--ct-scroll-track, transparent);
    }
    .body-input::-webkit-scrollbar-thumb,
    .response-body::-webkit-scrollbar-thumb,
    .pg-textarea::-webkit-scrollbar-thumb,
    .pg-output::-webkit-scrollbar-thumb,
    #err-code::-webkit-scrollbar-thumb,
    #err-output::-webkit-scrollbar-thumb {
      background: var(--ct-scroll-thumb, #2A3846);
      border-radius: 6px;
      border: 2px solid var(--ct-bg, #0A1422);
      background-clip: padding-box;
    }
    .body-input::-webkit-scrollbar-thumb:hover,
    .response-body::-webkit-scrollbar-thumb:hover,
    .pg-textarea::-webkit-scrollbar-thumb:hover,
    .pg-output::-webkit-scrollbar-thumb:hover,
    #err-code::-webkit-scrollbar-thumb:hover,
    #err-output::-webkit-scrollbar-thumb:hover {
      background: var(--ct-scroll-thumb-hover, #6B7C92);
      background-clip: padding-box;
    }
  `,

  js: `
    // ═════════════════════════════════════════════════════════
    // Panel switching
    // ═════════════════════════════════════════════════════════
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const name = tab.dataset.tab;
        document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t === tab));
        document.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.dataset.panel === name));
      });
    });

    // ═════════════════════════════════════════════════════════
    // PANEL 1: Lifecycle animation
    // ═════════════════════════════════════════════════════════
    const packetReq = document.getElementById('packet-req');
    const packetRes = document.getElementById('packet-res');
    const labelReq = document.getElementById('label-req');
    const labelRes = document.getElementById('label-res');
    const lifecycleSteps = document.querySelectorAll('.lifecycle-steps .step');
    const clientNode = document.querySelector('.node.client');
    const serverNode = document.querySelector('.node.server');
    const promiseNode = document.querySelector('.node.promise');
    const wireEls = document.querySelectorAll('.wire');

    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    let lifecycleRunning = false;

    document.getElementById('reset-lifecycle').onclick = () => {
      lifecycleRunning = false;
      lifecycleSteps.forEach(s => { s.classList.remove('active', 'done'); });
      document.querySelectorAll('.node').forEach(n => n.classList.remove('active', 'done'));
      wireEls.forEach(w => w.classList.remove('active'));
      packetReq.classList.remove('visible');
      packetRes.classList.remove('visible');
      labelReq.classList.remove('visible');
      labelRes.classList.remove('visible');
      packetReq.style.top = '0';
      packetRes.style.top = '0';
    };

    document.getElementById('run-lifecycle').onclick = async () => {
      if (lifecycleRunning) return;
      lifecycleRunning = true;

      // Reset
      document.getElementById('reset-lifecycle').onclick();
      lifecycleRunning = true;

      // Step 1: fetch called
      lifecycleSteps[0].classList.add('active');
      clientNode.classList.add('active');
      wireEls[0].classList.add('active');
      packetReq.classList.add('visible');
      labelReq.classList.add('visible');
      await sleep(600);

      // Animate packet down
      packetReq.style.top = 'calc(100% - 20px)';
      await sleep(1300);

      clientNode.classList.remove('active');
      clientNode.classList.add('done');
      serverNode.classList.add('active');
      packetReq.classList.remove('visible');
      labelReq.classList.remove('visible');
      lifecycleSteps[0].classList.remove('active');
      lifecycleSteps[0].classList.add('done');
      await sleep(500);

      // Step 2: Promise returned
      lifecycleSteps[1].classList.add('active');
      promiseNode.classList.add('active');
      await sleep(900);
      lifecycleSteps[1].classList.remove('active');
      lifecycleSteps[1].classList.add('done');
      promiseNode.classList.remove('active');
      promiseNode.classList.add('done');

      // Step 3: Server responds
      lifecycleSteps[2].classList.add('active');
      wireEls[1].classList.add('active');
      packetRes.classList.add('visible');
      labelRes.classList.add('visible');
      await sleep(600);
      packetRes.style.top = 'calc(100% - 20px)';
      await sleep(1300);
      serverNode.classList.remove('active');
      serverNode.classList.add('done');

      lifecycleSteps[2].classList.remove('active');
      lifecycleSteps[2].classList.add('done');
      packetRes.classList.remove('visible');
      labelRes.classList.remove('visible');

      // Step 4: Check response.ok
      lifecycleSteps[3].classList.add('active');
      await sleep(1200);
      lifecycleSteps[3].classList.remove('active');
      lifecycleSteps[3].classList.add('done');

      // Step 5: Read body
      lifecycleSteps[4].classList.add('active');
      promiseNode.classList.add('active');
      await sleep(1200);
      lifecycleSteps[4].classList.remove('active');
      lifecycleSteps[4].classList.add('done');
      promiseNode.classList.remove('active');
      promiseNode.classList.add('done');

      lifecycleRunning = false;
    };

    // ═════════════════════════════════════════════════════════
    // PANEL 2: Live Explorer
    // ═════════════════════════════════════════════════════════
    const methodSelect = document.getElementById('method-select');
    const urlInput = document.getElementById('url-input');
    const bodyWrap = document.getElementById('body-wrap');
    const bodyInput = document.getElementById('body-input');
    const sendBtn = document.getElementById('send-btn');
    const resStatus = document.getElementById('res-status');
    const resTime = document.getElementById('res-time');
    const resSize = document.getElementById('res-size');
    const resCtype = document.getElementById('res-ctype');
    const resBody = document.getElementById('res-body');

    let lastResponseData = null;

    function updateMethod() {
      const m = methodSelect.value;
      bodyWrap.style.display = (m === 'POST' || m === 'PUT') ? 'flex' : 'none';
    }
    methodSelect.addEventListener('change', updateMethod);
    updateMethod();

    document.querySelectorAll('.preset').forEach(p => {
      p.addEventListener('click', () => {
        methodSelect.value = p.dataset.method;
        urlInput.value = p.dataset.url;
        updateMethod();
      });
    });

    document.querySelectorAll('.body-tab').forEach(t => {
      t.addEventListener('click', () => {
        document.querySelectorAll('.body-tab').forEach(x => x.classList.toggle('active', x === t));
        renderResponseBody(t.dataset.body);
      });
    });

    function renderResponseBody(mode) {
      if (!lastResponseData) return;
      const { json, raw, headers } = lastResponseData;

      if (mode === 'pretty') {
        try {
          resBody.textContent = JSON.stringify(json, null, 2);
        } catch (e) {
          resBody.textContent = raw;
        }
      } else if (mode === 'raw') {
        resBody.textContent = raw;
      } else if (mode === 'headers') {
        const lines = [];
        headers.forEach((v, k) => lines.push(k + ': ' + v));
        resBody.textContent = lines.join('\\n');
      }
    }

    sendBtn.addEventListener('click', async () => {
      const url = urlInput.value.trim();
      const method = methodSelect.value;
      if (!url) return;

      resStatus.textContent = '…';
      resStatus.style.color = '#F2B200';
      resTime.textContent = '…';
      resSize.textContent = '…';
      resCtype.textContent = '…';
      resBody.textContent = 'جاري الإرسال...';
      resBody.style.color = '#9DAEC2';

      const start = performance.now();

      try {
        const opts = { method };
        if (method === 'POST' || method === 'PUT') {
          opts.headers = { 'Content-Type': 'application/json' };
          try {
            opts.body = JSON.stringify(JSON.parse(bodyInput.value));
          } catch (e) {
            resBody.textContent = '✕ الـ Body مش JSON صالح: ' + e.message;
            resBody.style.color = '#F26B62';
            return;
          }
        }

        const response = await fetch(url, opts);
        const elapsed = Math.round(performance.now() - start);

        const raw = await response.text();
        const sizeBytes = new Blob([raw]).size;
        const ctype = response.headers.get('content-type') || '—';

        let json = null;
        try { json = JSON.parse(raw); } catch (e) { /* not json */ }

        lastResponseData = { json, raw, headers: response.headers };

        resStatus.textContent = response.status + ' ' + response.statusText;
        resStatus.style.color = response.ok ? '#4CD08A' : '#F26B62';
        resTime.textContent = elapsed + ' ms';
        resSize.textContent = sizeBytes < 1024 ? sizeBytes + ' B' : (sizeBytes / 1024).toFixed(1) + ' KB';
        resCtype.textContent = ctype.split(';')[0];

        // Default to pretty if json
        const defaultTab = json ? 'pretty' : 'raw';
        document.querySelectorAll('.body-tab').forEach(t => t.classList.toggle('active', t.dataset.body === defaultTab));
        renderResponseBody(defaultTab);
        resBody.style.color = '';

      } catch (err) {
        const elapsed = Math.round(performance.now() - start);
        resStatus.textContent = 'Failed';
        resStatus.style.color = '#F26B62';
        resTime.textContent = elapsed + ' ms';
        resBody.textContent = '✕ Network Error: ' + err.message;
        resBody.style.color = '#F26B62';
      }
    });

    // ═════════════════════════════════════════════════════════
    // PANEL 3: Code Playground
    // ═════════════════════════════════════════════════════════
    const pgCode = document.getElementById('pg-code');
    const pgOutput = document.getElementById('pg-output');
    const pgRun = document.getElementById('pg-run');
    const pgReset = document.getElementById('pg-reset');
    const pgClear = document.getElementById('pg-clear');

    const SNIPPETS = {
      basic: \`const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const data = await response.json();

console.log('Status:', response.status);
console.log('Title:', data.title);
console.log('User ID:', data.userId);\`,

      async: \`async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (!response.ok) throw new Error('HTTP ' + response.status);
  const user = await response.json();
  return user;
}

const user = await getUser();
console.log('Name:', user.name);
console.log('Email:', user.email);
console.log('City:', user.address.city);\`,

      post: \`const newPost = {
  title: 'Hello from Playground',
  body: 'Testing POST with fetch',
  userId: 99
};

const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newPost)
});

const result = await response.json();
console.log('Status:', response.status);
console.log('New post ID:', result.id);
console.log('Full response:', result);\`,

      error: \`async function safeFetch(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('HTTP Error ' + response.status);
    }
    return await response.json();
  } catch (err) {
    console.error('Failed:', err.message);
    return null;
  }
}

// جرّب URL موجود
const ok = await safeFetch('https://jsonplaceholder.typicode.com/posts/1');
console.log('Success:', ok ? 'yes' : 'no');

// جرّب URL مش موجود
const bad = await safeFetch('https://jsonplaceholder.typicode.com/posts/999999');
console.log('Failed result:', bad);\`,

      parallel: \`// بدل ما تنتظر كل واحد بالدور، شغّلهم مع بعض
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

const start = performance.now();

const responses = await Promise.all(urls.map(u => fetch(u)));
const data = await Promise.all(responses.map(r => r.json()));

const elapsed = Math.round(performance.now() - start);
console.log('Got ' + data.length + ' posts in ' + elapsed + 'ms');
data.forEach((post, i) => {
  console.log((i + 1) + '. ' + post.title);
});\`,

      timeout: \`// fetch مش عندها timeout built-in. نستخدم AbortController
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000);

try {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    signal: controller.signal
  });
  clearTimeout(timeoutId);
  const data = await response.json();
  console.log('✓ Success in time:', data.title);
} catch (err) {
  if (err.name === 'AbortError') {
    console.log('✕ Request timed out after 5s');
  } else {
    console.log('✕ Error:', err.message);
  }
}\`
    };

    document.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const key = chip.dataset.snippet;
        if (SNIPPETS[key]) pgCode.value = SNIPPETS[key];
      });
    });

    function appendOutput(text, cls) {
      const line = document.createElement('div');
      if (cls) line.className = cls;
      line.textContent = text;
      pgOutput.appendChild(line);
    }

    pgClear.onclick = () => { pgOutput.textContent = '// الناتج هيظهر هنا...'; };

    pgReset.onclick = () => {
      pgCode.value = SNIPPETS.basic;
      pgOutput.textContent = '// الناتج هيظهر هنا...';
    };

    pgRun.onclick = async () => {
      pgOutput.innerHTML = '';
      appendOutput('▶ Running...', 'out-info');

      const logs = [];
      const origLog = console.log;
      const origErr = console.error;

      console.log = (...args) => {
        const text = args.map(a => {
          if (typeof a === 'object' && a !== null) {
            try { return JSON.stringify(a, null, 2); } catch { return String(a); }
          }
          return String(a);
        }).join(' ');
        logs.push({ text, type: 'log' });
        origLog.apply(console, args);
      };
      console.error = (...args) => {
        logs.push({ text: args.join(' '), type: 'error' });
        origErr.apply(console, args);
      };

      try {
        const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
        const fn = new AsyncFunction(pgCode.value);
        await fn();

        console.log = origLog;
        console.error = origErr;

        logs.forEach(l => {
          appendOutput(l.text, l.type === 'error' ? 'out-err' : 'out-log');
        });
        if (logs.length === 0) {
          appendOutput('(مفيش output — الكود اشتغل من غير console.log)', 'out-info');
        }
        appendOutput('✓ Done', 'out-ok');
      } catch (err) {
        console.log = origLog;
        console.error = origErr;
        logs.forEach(l => appendOutput(l.text, l.type === 'error' ? 'out-err' : 'out-log'));
        appendOutput('✕ Error: ' + err.message, 'out-err');
      }
    };

    // ═════════════════════════════════════════════════════════
    // PANEL 4: Error Lab
    // ═════════════════════════════════════════════════════════
    const errCode = document.getElementById('err-code');
    const errOutput = document.getElementById('err-output');

    const ERR_SCENARIOS = {
      '404': {
        code: \`// 404 — السيرفر رد، بس مش لاقي الحاجة
const response = await fetch('https://jsonplaceholder.typicode.com/posts/999999');
console.log('response.ok =', response.ok);
console.log('status =', response.status);
// ملاحظة: مفيش throw هنا!\`,
        output: \`response.ok = false
status = 404

⚠️ الحل: تحقق من response.ok بنفسك
    if (!response.ok) throw new Error('HTTP ' + response.status)\`,
        type: 'info'
      },
      '500': {
        code: \`// 500 — السيرفر وقع
const response = await fetch('https://httpstat.us/500');
console.log('status =', response.status);
console.log('response.ok =', response.ok);\`,
        output: \`status = 500
response.ok = false

⚠️ نفس الحكاية: fetch مش بترمي error على 500
    لازم تتحقق من الـ status بنفسك\`,
        type: 'info'
      },
      'network': {
        code: \`// Network failure — مفيش اتصال
try {
  await fetch('https://this-domain-definitely-does-not-exist-12345.com/api');
} catch (err) {
  console.log('Caught:', err.name);
  console.log('Message:', err.message);
}\`,
        output: \`Caught: TypeError
Message: Failed to fetch

✓ ده النوع الوحيد اللي fetch بترمي error عليه تلقائياً\`,
        type: 'good'
      },
      'timeout': {
        code: \`// Timeout بـ AbortController
const controller = new AbortController();
setTimeout(() => controller.abort(), 100);

try {
  await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    signal: controller.signal
  });
} catch (err) {
  console.log('err.name =', err.name);
  console.log('== AbortError ?', err.name === 'AbortError');
}\`,
        output: \`err.name = AbortError
== AbortError ? true

✓ fetch مش عندها timeout built-in
    لازم تستخدم AbortController\`,
        type: 'good'
      },
      'json': {
        code: \`// Invalid JSON — الرد مش JSON صالح
const response = await fetch('https://example.com');  // HTML عادةً
try {
  const data = await response.json();
} catch (err) {
  console.log('Caught:', err.message);
}\`,
        output: \`Caught: Unexpected token '<'... is not valid JSON

✓ response.json() بترمي error لو الـ body مش JSON
    الحل: استخدم response.text() لو مش متأكد\`,
        type: 'good'
      },
      'cors': {
        code: \`// CORS — الـ browser بيمنع الطلب
try {
  await fetch('https://some-api-without-cors.com/data');
} catch (err) {
  console.log('err.name =', err.name);
  console.log('Message:', err.message);
}\`,
        output: \`err.name = TypeError
Message: Failed to fetch

✓ الـ browser بيمنع الطلب قبل ما يوصل للسيرفر
    الحل: السيرفر لازم يبعت Access-Control-Allow-Origin header\`,
        type: 'good'
      }
    };

    document.querySelectorAll('.err-card').forEach(card => {
      card.addEventListener('click', () => {
        const key = card.dataset.err;
        const scenario = ERR_SCENARIOS[key];
        if (!scenario) return;

        errCode.textContent = scenario.code;
        errOutput.textContent = scenario.output;
        errOutput.style.color = scenario.type === 'good' ? '#4CD08A' : scenario.type === 'info' ? '#F2B200' : '#E6EDF2';
      });
    });
  `,
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
  {
    id: 'linked-list',
    num: 'D1',
    line: 'ds',
    x: 700,
    y: 210,
    slug: 'linked-list',
    href: '/data-structures/linked-list',
    level: 'مبتدئ',
    next: 'stack',

    title: 'القائمة المترابطة',
    titleEn: 'Linked List',
    summary: 'هيكل بيانات بيتكوّن من Nodes، كل Node فيها قيمة وبتشاور على اللي بعدها.',

    date: '2026',
    tags: ['linked-list', 'pointers', 'dynamic', 'O(1) insert'],

    whatItDoes:
      'هيكل بيانات خطي مكوّن من Nodes، كل Node فيها قيمتين: القيمة نفسها، ومؤشر (pointer) للـ Node اللي بعدها. عكس الـ Array، العناصر مش متخزنة في بلوك متصل من الـ memory — كل Node ممكن تكون في أي مكان، والاتصال بس عن طريق الـ pointers.',

    explanation: `تخيّل قطر، كل عربية متوصّلة باللي بعدها بكوبلينج. لو عايز تزوّد عربية جديدة، مش محتاج تحرّك باقي القطر — بس تفك الكوبلينج، تحط العربية الجديدة، وتربطها باللي بعدها. خلاص.

في الـ Array، لو عايز تضيف عنصر في الأول، لازم تزحزح كل العناصر خطوة لليمين. O(n).

في الـ Linked List، بتعمل 3 عمليات بس:
1. تعمل Node جديدة.
2. تخلي next بتاعها يشاور على الـ head القديم.
3. تخلي الـ head يشاور على الـ Node الجديدة.

O(1). مهما كان حجم القائمة.

بس فيه ثمن: الوصول العشوائي مستحيل. في الـ Array، arr[500000] بتوصله في خطوة. في الـ Linked List، لازم تمشي من الـ head واحد واحد. O(n).

جرّب الـ Visualizer اللي تحت وشوف الفرق بنفسك.`,

    codeBreakdown: [
      { line: 'class Node {', note: 'الـ Node هي الوحدة الأساسية في القائمة. عندها قيمتين: القيمة، ومؤشر للـ Node اللي بعدها.' },
      { line: '  constructor(value) {', note: 'الـ constructor بياخد القيمة اللي هنخزنها.' },
      { line: '    this.value = value;', note: 'بنحفظ القيمة جوه الـ Node.' },
      { line: '    this.next = null;', note: 'بنبدأ الـ next بـ null.' },
      { line: '  }', note: 'نهاية الـ constructor.' },
      { line: '}', note: 'نهاية الـ Node class.' },
      { line: '', note: '—' },
      { line: '  addHead(value) {', note: 'إضافة Node في الأول. O(1) — أهم ميزة في الـ Linked List.' },
      { line: '    const node = new Node(value);', note: 'بنعمل Node جديدة.' },
      { line: '    node.next = this.head;', note: 'بنخلي next بتاعها يشاور على الـ head القديم.' },
      { line: '    this.head = node;', note: 'بنخلي الـ head يشاور على الـ Node الجديدة.' },
      { line: '  }', note: 'نهاية الـ addHead. 3 سطور بس.' },
      { line: '', note: '—' },
      { line: '  addTail(value) {', note: 'إضافة في الآخر — O(n) لأننا بنمشي لآخر Node.' },
      { line: '    let cur = this.head;', note: 'بنبدأ من الـ head.' },
      { line: '    while (cur.next) cur = cur.next;', note: 'بنمشي لحد آخر Node.' },
      { line: '    cur.next = node;', note: 'بنربط آخر Node بالجديدة.' },
      { line: '  }', note: 'نهاية الـ addTail.' },
      { line: '', note: '—' },
      { line: '  reverse() {', note: 'عكس القائمة. O(n).' },
      { line: '    let prev = null;', note: 'الـ Node السابقة.' },
      { line: '    while (cur) {', note: 'بنلف على كل Node.' },
      { line: '      const next = cur.next;', note: 'بنحفظ الـ next الأصلي.' },
      { line: '      cur.next = prev;', note: 'بنعكس اتجاه الـ next.' },
      { line: '      prev = cur;', note: 'بنحرّك prev.' },
      { line: '      cur = next;', note: 'بنحرّك cur.' },
      { line: '    }', note: 'نهاية الـ while.' },
      { line: '    this.head = prev;', note: 'بنحدّث الـ head.' },
      { line: '  }', note: 'نهاية الـ reverse.' },
    ],

    live: LINKED_LIST_RUNNABLE,

    practice: {
      prompt: 'اكتب دالة `listToArray(head)` بتحوّل linked list لـ array.',
      functionName: 'listToArray',
      starter: `function listToArray(head) {
  // اكتب الكود هنا

}`,
      solution: `function listToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  return result;
}`,
      tests: [
        { id: 't1', description: 'قائمة فاضية', args: [null], expected: [] },
        { id: 't2', description: 'Node واحدة', args: [{ value: 5, next: null }], expected: [5] },
        { id: 't3', description: '3 عناصر', args: [{ value: 1, next: { value: 2, next: { value: 3, next: null } } }], expected: [1, 2, 3] },
        { id: 't4', description: 'قيم بأرقام كبيرة', args: [{ value: 100, next: { value: 200, next: null } }], expected: [100, 200] },
        { id: 't5', description: 'قيم سالبة', args: [{ value: -5, next: { value: 0, next: { value: 5, next: null } } }], expected: [-5, 0, 5] },
      ],
    },

    quizzes: [
      {
        question: 'لو عايز تضيف Node في أول Linked List، إيه الـ Time Complexity؟',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        correct: 0,
        explanation: 'O(1) — مش محتاج تحرّك أي Node تانية. بس بتغيّر 2 pointer.',
      },
      {
        question: 'ليه الوصول لعنصر في Linked List بياخد O(n)؟',
        options: [
          'لأن الـ Nodes مش مترتبة في الـ memory',
          'لأن الـ JavaScript بتبطّئ',
          'لأن كل Node بتخزّن string',
          'لأن الـ Linked List بطيئة',
        ],
        correct: 0,
        explanation: 'الـ Nodes مش متجاورة في الـ memory. لازم تمشي من الـ head واحد واحد.',
      },
      {
        question: 'أي عملية أسرع في الـ Linked List مقارنة بالـ Array؟',
        options: [
          'الإضافة والحذف من الأول',
          'الوصول العشوائي',
          'Binary Search',
          'sort()',
        ],
        correct: 0,
        explanation: 'O(1) في Linked List مقابل O(n) في Array.',
      },
      {
        question: 'ينفع نعمل Binary Search على Linked List؟',
        options: [
          'لأ، لأن محتاج وصول عشوائي O(1)',
          'أيوه بنفس السرعة',
          'أيوه لو مفهرسة',
          'أيوه لو doubly linked',
        ],
        correct: 0,
        explanation: 'Binary Search محتاج arr[mid]. في Linked List مش موجود. هتاخد O(n log n) بدل O(log n)!',
      },
      {
        question: 'إيه أشهر عيب في الـ Linked List؟',
        options: [
          'استهلاك ذاكرة أكتر + cache locality أسوأ',
          'مش بتدعم الإضافة',
          'مش بتشتغل على 64-bit',
          'صعب نحفظ أرقام كبيرة',
        ],
        correct: 0,
        explanation: 'كل Node بتاخد memory إضافية للـ pointer. والـ cache misses بتخلي الأداء أسوأ.',
      },
    ],

    useCases: [
      'تطبيقات LRU Cache — إضافة/حذف في O(1)',
      'Undo/Redo في الـ editors',
      'Hash Tables (collision chaining)',
      'Skip Lists — O(log n) search',
      'Queue و Stack',
      'تمثيل sparse matrices',
      'Music playlists — Next/Previous',
    ],

    whyItsGoodHere:
      'الـ Linked List هي الخيار الصح لما بتضيف/تحذف كتير من الأول، أو لما مش عارف الحجم المسبق، أو لما محتاج تدمج/تفصل قوائم بكفاءة. الفايدة الحقيقية بتظهر في هياكل أعقد زي LRU Cache.',

    relatedIdeas: [
      'Doubly Linked List — كل Node بتشاور على اللي قبلها وبعدها',
      'Circular Linked List — آخر Node بتشاور على الـ head',
      'Skip List — O(log n) search',
      'XOR Linked List — توفير memory',
      'Array vs Linked List',
      'Floyd\'s Cycle Detection',
    ],

    mathProblems: [
      'لو عندك Linked List فيها n Node، كل Node بتاخد 16 byte، إيه الـ memory overhead؟',
      'كام pointer update عشان تحذف Node من آخر قائمة فيها n عنصر؟',
      'إيه أقصى عدد Nodes على جهاز 32-bit لو كل Node 16 bytes؟',
      'في reverse() باستخدام recursion، كام stack frame محتاج؟',
      'أثبت إن عدد الـ pointer updates في reverse() = 2n.',
    ],
  },
  { id: 'stack', num: 'D2', line: 'ds', x: 560, y: 210, slug: 'stack', href: '/station/stack', level: 'مبتدئ', next: 'hash-table', title: 'المكدس', titleEn: 'Stack', summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_CHAIN, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },
  { id: 'hash-table', num: 'D3', line: 'ds', x: 420, y: 210, slug: 'hash-table', href: '/station/hash-table', level: 'متوسط', next: 'bst', title: 'جدول التقطيع', titleEn: 'Hash Table', summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_CHAIN, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },
  { id: 'bst', num: 'D4', line: 'ds', x: 280, y: 210, slug: 'bst', href: '/station/bst', level: 'متوسط', next: 'trie', title: 'شجرة البحث', titleEn: 'Binary Search Tree', summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_CHAIN, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },
  { id: 'trie', num: 'D5', line: 'ds', x: 100, y: 210, slug: 'trie', href: '/station/trie', level: 'متقدم', next: 'fetch', title: 'شجرة الحروف', titleEn: 'Trie', summary: '', date: '', tags: [], whatItDoes: '', explanation: '', codeBreakdown: [], live: PREVIEW_CHAIN, practice: EMPTY_PRACTICE, useCases: [], whyItsGoodHere: '', relatedIdeas: [], mathProblems: [] },

  // ─── الخط الأخضر: Built-in APIs ───
  {
    id: 'fetch',
    num: 'P1',
    line: 'api',
    x: 700,
    y: 350,
    slug: 'fetch',
    href: '/built-in-apis/fetch',
    level: 'مبتدئ',
    next: 'promise',

    title: 'نجيب الداتا من الـ API',
    titleEn: 'fetch()',
    summary: 'الدالة الجاهزة في المتصفح عشان تكلّم APIs. بترجّع Promise، ولازم تتعامل معاها صح.',

    date: '2026',
    tags: ['web-api', 'promise', 'async', 'http', 'json'],

    whatItDoes:
      'fetch() هي دالة مدمجة في المتصفح (مش محتاجة مكتبة زي axios أو jQuery) بتخلّيك تبعت HTTP requests لأي سيرفر. بترجّع Promise بيتحل بـ Response object. الفكرة الأساسية: كل حاجة asynchronous، ومفيش حاجة بتوقف باقي الكود.',

    explanation: `تخيّل إنك في مطعم. بتطلب الأكل من الويتر، وبعدين بترجع تكمل كلامك مع صحابك. لما الأكل ييجي، الويتر بيناديك. أنت مش واقف في المطبخ مستني.

ده بالظبط fetch. لما بتكتب:

  const response = await fetch(url);

الكود بيروح للـ Network، ويرجعلك Promise فوراً. باقي الكود بيشتغل. لما الرد ييجي، الـ await بيتحل والكود بيكمل.

بس فيه حاجتين مهمين الناس بتغلط فيهم:

**أولاً: fetch مش بترمي error على 404 أو 500.**

ده أغرب حاجة. لو السيرفر رد بـ "404 Not Found"، الـ Promise بيتحل بنجاح! مش error. لازم تتحقق من response.ok بنفسك:

  if (!response.ok) throw new Error('HTTP ' + response.status);

النوع الوحيد من الأخطاء اللي fetch بترميها تلقائياً هو:
- انقطاع الشبكة (Network failure)
- DNS مش موجود
- الطلب اتلغى (AbortController)

**ثانياً: response.json() بترجّع Promise كمان.**

لما بتكتب:

  const data = await response.json();

ده await تاني. ليه؟ لأن الـ body بتاع الـ response بيتقرأ كتيار بيانات (stream). ممكن يكون كبير جداً، فمش منطقي نستنى كله قبل ما نرجّع. في الـ modern fetch، بتقرأ الـ body بـ methods مختلفة:
- response.json() للـ JSON
- response.text() للـ text
- response.blob() للصور والملفات
- response.arrayBuffer() للبيانات الثنائية

**الجمال الحقيقي في fetch بإنها بسيطة:**

سطر واحد عشان تجيب بيانات من أي API في الدنيا. مقارنة بـ XMLHttpRequest القديم اللي كان محتاج 15 سطر كود، ده ثورة حقيقية.

في الـ Visualizations اللي تحت، هتجرّب 4 حاجات:

1. **Lifecycle**: شوف رحلة الـ request والـ response بنفسك
2. **Live Explorer**: اضرب APIs حقيقية وشوف كل تفصيلة
3. **Code Playground**: اكتب كود fetch بنفسك وشغّله فوراً
4. **Error Lab**: جرّب الأنواع المختلفة من الأخطاء وشوف سلوك fetch في كل حالة`,

    codeBreakdown: [
      { line: "const response = await fetch(url);", note: 'بنبعت HTTP request. الـ await بتوقف الكود ده بس — باقي البرنامج شغال. لما الرد ييجي، الـ response بتتخزن في المتغير.' },
      { line: 'if (!response.ok) {', note: 'response.ok بيبقى true لو الـ status في الـ range 200-299. لازم تتحقق ده بنفسك — fetch مش بترمي error لوحدها.' },
      { line: "  throw new Error('HTTP ' + response.status);", note: 'بنرمي error بنفسك عشان الـ catch block اللي بعدين تتعامل معاه.' },
      { line: '}', note: 'نهاية الـ check.' },
      { line: 'const data = await response.json();', note: 'بنقرأ الـ body ونحوّله لـ JSON. ده await تاني لأن قراءة الـ body asynchronous.' },
      { line: 'console.log(data);', note: 'بعد ما البيانات توصل، بنستخدمها عادي.' },
      { line: '', note: '—' },
      { line: '// POST request:', note: 'لإرسال بيانات، محتاج تحدد method + headers + body.' },
      { line: "fetch(url, { method: 'POST' });", note: 'الـ options object بيحدد إن ده POST مش GET.' },
      { line: "  headers: { 'Content-Type': 'application/json' },", note: 'بنقول للسيرفر إن الـ body اللي بنبعته JSON عشان يفهمه صح.' },
      { line: '  body: JSON.stringify(newPost)', note: 'الـ body لازم يكون string. JSON.stringify بتحوّل الـ object لـ string.' },
    ],

    live: FETCH_RUNNABLE,

    practice: {
      prompt: 'اكتب دالة `fetchTitle(id)` بتجيب post من jsonplaceholder.typicode.com/posts/{id} وبترجّع الـ title بتاعه. لو فشل الطلب، رجّع "ERROR".',
      functionName: 'fetchTitle',
      starter: `async function fetchTitle(id) {
  // اكتب الكود هنا

}`,
      solution: `async function fetchTitle(id) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    if (!response.ok) return 'ERROR';
    const data = await response.json();
    return data.title;
  } catch (err) {
    return 'ERROR';
  }
}`,
      tests: [], // هيتم تجاهلها لأن الاختبارات محتاجة network
    },

    quizzes: [
      {
        question: 'لو السيرفر رد بـ 404، إيه اللي بيحصل في fetch؟',
        options: [
          'الـ Promise بتتحل بنجاح (resolve)',
          'الـ Promise بترفض (reject)',
          'الكود بيكراش',
          'بيطلع alert للمستخدم',
        ],
        correct: 0,
        explanation: 'fetch بترمي error بس في حالة الـ Network errors. أما لو السيرفر رد (حتى لو 404 أو 500)، الـ Promise بتتحل بنجاح. لازم تتحقق من response.ok بنفسك.',
      },
      {
        question: 'ليه بنستخدم await مرتين مع fetch؟',
        options: [
          'واحدة للـ Response، وواحدة لقراءة الـ body (response.json)',
          'غلط شائع — مرتين مش ضروري',
          'لأن fetch بترجع مصفوفة من نتايج',
          'عشان نتعامل مع Timeout',
        ],
        correct: 0,
        explanation: 'أول await بتستنى الـ Response object (headers + status). تاني await بتستنى قراءة الـ body (الـ JSON). الاتنين asynchronous operations مختلفة.',
      },
      {
        question: 'إيه الطريقة الصحيحة لتعيين timeout على fetch؟',
        options: [
          'fetch(url, { timeout: 5000 })',
          'باستخدام AbortController + setTimeout',
          'fetch(url, 5000)',
          'fetch مش بتدعم timeout',
        ],
        correct: 1,
        explanation: 'fetch مش عندها timeout option مباشر. لازم تعمل AbortController، تعمل setTimeout يلغيه، وتمرّر signal للـ fetch.',
      },
      {
        question: 'لو الـ response كان HTML مش JSON، إيه اللي يحصل لما ننادي response.json()؟',
        options: [
          'بترجع HTML كـ string',
          'بترمي error من نوع SyntaxError',
          'بترجع null',
          'بتعلّق للأبد',
        ],
        correct: 1,
        explanation: 'response.json() بتعمل parse لـ JSON. لو الـ content مش JSON صالح، بترمي SyntaxError. استخدم response.text() لو مش متأكد من الـ content-type.',
      },
      {
        question: 'إيه الـ difference بين Promise.all و for-await على array من URLs؟',
        options: [
          'Promise.all بتشغّل كل الطلبات بالتوازي، for-await بتشغّلهم بالتسلسل',
          'مفيش فرق',
          'Promise.all أبطأ',
          'for-await مش موجود في JavaScript',
        ],
        correct: 0,
        explanation: 'Promise.all بتعمل launch لكل الطلبات في نفس الوقت — لو كل واحد بياخد 1s، الـ 5 كلهم هيخلصوا في ~1s. for-await بتستنى كل واحد قبل ما تبدأ اللي بعده — هتاخد ~5s. Promise.all أسرع بكتير.',
      },
    ],

    useCases: [
      'جلب بيانات من REST APIs (GitHub, Twitter, Weather APIs)',
      'إرسال نماذج (POST forms) للسيرفر',
      'Uploading الملفات والصور (FormData)',
      'Real-time data streaming بـ response.body.getReader()',
      'SPA navigation data prefetching',
      'التكامل مع Firebase / Supabase / أي backend',
      'PWA offline requests بـ Service Workers',
    ],

    whyItsGoodHere:
      'fetch() هي الأساس لأي تطبيق ويب حديث. أي framework (React, Vue, Angular) بيعتمد عليها. هي مدمجة في كل المتصفحات الحديثة بدون أي مكتبة. فهمها بعمق = فهم الـ networking في الـ web كله. وأي framework بيبني فوقها، هتعرف تستخدمه من أول يوم.',

    relatedIdeas: [
      'XMLHttpRequest — الطريقة القديمة، أطول وأصعب',
      'axios — مكتبة شائعة بتلف fetch بـ conveniences',
      'Promise — الأساس اللي fetch بنيت عليه',
      'async/await — syntax أحلى للـ Promises',
      'AbortController — للتحكم في الـ requests الملغاة',
      'Response API — ok, status, headers, body methods',
      'Request API — لبناء طلبات معقدة',
      'Service Workers — للـ offline fetch',
    ],

    mathProblems: [
      'لو كل fetch طلب بياخد 200ms، وكودك بيعمل 20 طلب بـ Promise.all، الوقت الكلي كام؟ ولو بـ for-await؟',
      'في حالة 1000 request/s على سيرفر، إيه الـ load المتوقع لو كل request بياخد 50ms؟',
      'لو الـ JSON response حجمه 1 MB، وانت على اتصال 10 Mbps، إيه الوقت اللازم لتنزيل الـ body؟',
      'إيه الـ probability إن طلبين متوازيين بيرجعوا بنفس الترتيب؟ (صفر — وده ليه Promise.all بتاخد وقت أول واحد)',
      'لو عندك مؤشر "progress" بيقيس تقدم التحميل، إيه الـ mathematical function المطلوبة؟ (linear من 0 لـ 100%)',
    ],
  },
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