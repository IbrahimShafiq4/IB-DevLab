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
  id: string;
  num: string;
  line: LineKey;
  x: number;
  y: number;
  slug: string;
  href: string;
  level: LevelKey;
  next?: string;

  title: string;
  titleEn: string;
  summary: string;
  date: string;
  tags: string[];

  whatItDoes: string;
  explanation: string;
  codeBreakdown: CodeBreakdownItem[];

  live?: Runnable;
  practice: Practice;
  quizzes?: Quiz[];

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
    <div class="app">
      <nav class="tabs" role="tablist">
        <button class="tab active" data-tab="preview"><span class="tab__icon">📺</span><span>المعاينة</span></button>
        <button class="tab" data-tab="cinema"><span class="tab__icon">🎬</span><span>خطوة بخطوة</span></button>
      </nav>

      <section class="panel active" data-panel="preview">
        <div class="controls">
          <div class="ctrl-group"><label>القيمة</label><input id="ll-value" type="number" value="40" dir="ltr"></div>
          <div class="btns">
            <button id="ll-addhead" class="primary">+ Head</button>
            <button id="ll-addtail">+ Tail</button>
            <button id="ll-delete">حذف</button>
            <button id="ll-reverse">اعكس</button>
            <button id="ll-clear">امسح</button>
          </div>
        </div>
        <div class="stage stage--list" id="ll-stage" dir="ltr"></div>
        <div class="stats">
          <div class="stat"><span class="stat-label">الطول</span><span class="stat-value" id="ll-size">0</span></div>
          <div class="stat"><span class="stat-label">آخر عملية</span><span class="stat-value" id="ll-last">—</span></div>
        </div>
        <div class="log" id="ll-log"></div>
      </section>

      <section class="panel" data-panel="cinema">
        <div class="cinema-controls">
          <div class="cinema-arr"><label>قيمة إضافية (head)</label><input id="cnll-value" type="number" value="40" dir="ltr"></div>
          <div class="btns">
            <button id="cnll-prev">⏮</button>
            <button id="cnll-play" class="primary">▶ شغّل</button>
            <button id="cnll-next">⏭</button>
            <button id="cnll-reset">↺</button>
          </div>
          <div class="step-info"><span id="cnll-counter">0 / 0</span></div>
        </div>
        <div class="cinema-grid">
          <div class="panel-box code-panel">
            <div class="panel-box__head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span class="panel-box__title">linked-list.js</span></div>
            <div class="code-body" id="cnll-code" dir="ltr"></div>
          </div>
          <div class="panel-box stage-panel">
            <div class="panel-box__head"><span class="panel-box__title">الرسم</span></div>
            <div class="stage stage--list stage--cinema" id="cnll-stage" dir="ltr"></div>
            <div class="values" id="cnll-values"></div>
          </div>
        </div>
        <div class="op-desc" id="cnll-desc">—</div>
      </section>
    </div>
  `,
  css: `
    * { margin:0; padding:0; box-sizing:border-box; }
    :root {
      --bg:#0F1B2D; --bg-2:#0A1422; --bg-3:#152236; --border:#1E2D42; --border-2:#2A3846;
      --text:#E6EDF2; --text-2:#9DAEC2; --text-3:#6B7C92;
      --blue:#5B9DFF; --yellow:#F2B200; --red:#FF6B57; --green:#4CD08A;
    }
    body { font-family:'IBM Plex Sans Arabic',system-ui,sans-serif; background:var(--bg); color:var(--text); padding:16px; min-height:100vh; overflow-x:hidden; }
    ::-webkit-scrollbar { width:10px; height:10px; }
    ::-webkit-scrollbar-track { background:var(--bg-2); }
    ::-webkit-scrollbar-thumb { background:var(--border-2); border-radius:6px; border:2px solid var(--bg-2); background-clip:padding-box; }
    ::-webkit-scrollbar-thumb:hover { background:#4A5F7A; background-clip:padding-box; }
    .app { max-width:1200px; margin-inline:auto; display:flex; flex-direction:column; gap:14px; min-height:calc(100vh - 32px); }

    .tabs { display:flex; gap:6px; padding:6px; background:var(--bg-2); border:1px solid var(--border); border-radius:8px; width:fit-content; }
    .tab { display:inline-flex; align-items:center; gap:8px; padding:10px 20px; font-family:inherit; font-size:13px; font-weight:600; color:var(--text-2); background:transparent; border:none; border-radius:6px; cursor:pointer; transition:all .2s; white-space:nowrap; }
    .tab:hover { color:var(--text); }
    .tab.active { background:var(--bg-3); color:var(--text); box-shadow:0 2px 8px rgba(0,0,0,.3); }
    .tab__icon { font-size:14px; }
    @media (max-width:480px) { .tabs { width:100%; } .tab { flex:1; justify-content:center; padding:10px 12px; font-size:12px; } }

    .panel { display:none; flex-direction:column; gap:14px; flex:1; min-height:0; }
    .panel.active { display:flex; }

    .controls, .cinema-controls { display:flex; flex-wrap:wrap; gap:12px; align-items:flex-end; padding:14px 16px; background:var(--bg-3); border:1px solid var(--border); border-radius:8px; }
    .ctrl-group, .cinema-arr { display:flex; flex-direction:column; gap:4px; flex:1; min-width:160px; }
    .ctrl-group label, .cinema-arr label { font-family:'IBM Plex Mono',monospace; font-size:10px; color:var(--text-3); letter-spacing:.08em; text-transform:uppercase; }
    .ctrl-group input, .cinema-arr input { padding:8px 12px; font-family:'IBM Plex Mono',monospace; font-size:13px; color:var(--text); background:var(--bg-2); border:1px solid var(--border); border-radius:4px; outline:none; direction:ltr; }
    .ctrl-group input:focus, .cinema-arr input:focus { border-color:var(--red); }

    .btns { display:flex; gap:6px; flex-wrap:wrap; }
    .btns button { padding:8px 14px; font-family:inherit; font-size:13px; font-weight:500; color:var(--text); background:var(--bg-2); border:1px solid var(--border-2); border-radius:4px; cursor:pointer; transition:.15s; white-space:nowrap; }
    .btns button:hover:not(:disabled) { border-color:var(--red); color:var(--red); }
    .btns button.primary { background:var(--yellow); border-color:var(--yellow); color:#0F1B2D; font-weight:600; }
    .btns button.primary:hover { opacity:.9; color:#0F1B2D; }
    .btns button:disabled { opacity:.35; cursor:not-allowed; }
    .step-info { display:inline-flex; align-items:center; padding:8px 14px; background:var(--bg-2); border:1px solid var(--border-2); border-radius:4px; font-family:'IBM Plex Mono',monospace; font-size:12px; color:var(--yellow); font-weight:600; min-width:80px; justify-content:center; }

    .stage { display:flex; justify-content:center; align-items:center; gap:8px; padding:24px 20px; background:var(--bg-2); border:1px solid var(--border); border-radius:8px; min-height:300px; direction:ltr; overflow-x:auto; overflow-y:hidden; flex:1; }
    .stage--list { justify-content:flex-start; flex-wrap:nowrap; }
    .stage--cinema { border-radius:0; border:none; padding:20px 16px; min-height:0; }

    .list-node { display:flex; align-items:stretch; border:2px solid var(--red); border-radius:6px; background:var(--bg-3); flex-shrink:0; transition:all .35s ease; position:relative; }
    .list-node__value { display:flex; align-items:center; justify-content:center; padding:14px 22px; font-family:'IBM Plex Mono',monospace; font-size:18px; font-weight:700; color:var(--text); min-width:70px; transition:all .3s; }
    .list-node__next { display:flex; align-items:center; justify-content:center; width:34px; background:var(--bg-2); border-inline-start:1px solid var(--border-2); color:var(--text-3); font-size:18px; font-weight:bold; }
    .list-node.highlight { border-color:var(--yellow); box-shadow:0 0 0 4px rgba(242,178,0,.15); }
    .list-node.highlight .list-node__value { background:var(--yellow); color:var(--bg); }
    .list-node.found { border-color:var(--green); box-shadow:0 0 0 4px rgba(76,208,138,.2); }
    .list-node.found .list-node__value { background:var(--green); color:var(--bg); }
    .list-node.entering { animation:list-enter .5s cubic-bezier(.2,.8,.2,1) both; }
    .list-node.exiting { animation:list-exit .5s cubic-bezier(.5,0,.75,0) both; pointer-events:none; }
    @keyframes list-enter { 0% { opacity:0; transform:translateY(-30px) scale(.5); } 100% { opacity:1; transform:translateY(0) scale(1); } }
    @keyframes list-exit { 0% { opacity:1; transform:translateY(0) scale(1); } 100% { opacity:0; transform:translateY(30px) scale(.5); } }

    .list-arrow { color:var(--red); font-size:22px; padding:0 6px; flex-shrink:0; font-family:monospace; }
    .list-null { color:var(--text-3); font-family:'IBM Plex Mono',monospace; font-size:22px; padding:0 12px; flex-shrink:0; }
    .list-head { color:var(--green); font-family:'IBM Plex Mono',monospace; font-size:11px; font-weight:700; letter-spacing:.1em; margin-inline-end:10px; flex-shrink:0; }
    .list-empty { color:var(--text-3); font-family:'IBM Plex Mono',monospace; font-size:13px; padding:40px 0; }

    .stats { display:grid; grid-template-columns:repeat(2,1fr); gap:8px; }
    .stat { padding:12px 14px; background:var(--bg-3); border:1px solid var(--border); border-radius:6px; display:flex; flex-direction:column; gap:4px; }
    .stat-label { font-family:'IBM Plex Mono',monospace; font-size:10px; color:var(--text-3); letter-spacing:.08em; text-transform:uppercase; }
    .stat-value { font-family:'IBM Plex Mono',monospace; font-size:15px; font-weight:600; color:var(--red); }

    .log { padding:14px 16px; font-family:'IBM Plex Mono',monospace; font-size:12px; line-height:1.8; color:var(--text-2); background:var(--bg-2); border:1px solid var(--border); border-radius:8px; min-height:120px; max-height:200px; overflow-y:auto; white-space:pre-wrap; }
    .log__ok { color:var(--green); }
    .log__info { color:var(--blue); }
    .log__warn { color:var(--yellow); }
    .log__err { color:var(--red); }

    .cinema-grid { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:14px; flex:1; min-height:0; height:clamp(400px,55vh,520px); }
    .panel-box { display:flex; flex-direction:column; background:var(--bg-2); border:1px solid var(--border); border-radius:8px; overflow:hidden; min-height:0; }
    .panel-box__head { display:flex; align-items:center; gap:6px; padding:10px 14px; background:var(--bg-3); border-bottom:1px solid var(--border); flex-shrink:0; }
    .panel-box__title { font-family:'IBM Plex Mono',monospace; font-size:11px; color:var(--text-3); letter-spacing:.08em; text-transform:uppercase; margin-inline-start:6px; }
    .dot { width:9px; height:9px; border-radius:50%; }
    .dot.red { background:var(--red); }
    .dot.yellow { background:var(--yellow); }
    .dot.green { background:var(--green); }

    .code-body { flex:1; padding:12px 0; font-family:'IBM Plex Mono',monospace; font-size:12px; line-height:1.7; overflow:auto; direction:ltr; text-align:left; white-space:pre; min-height:0; }
    .code-line { display:block; padding:1px 14px 1px 48px; position:relative; min-height:20px; color:#3A4A5F; transition:color .2s, background .2s; }
    .code-line::before { content:attr(data-ln); position:absolute; left:8px; top:1px; width:30px; text-align:right; font-size:10px; color:#2A3846; user-select:none; }
    .code-line.typed { color:var(--text-2); }
    .code-line.typed::before { color:#4A5F7A; }
    .code-line.typing { color:var(--text); background:rgba(255,107,87,.08); }
    .code-line.typing::after { content:'▌'; color:var(--red); margin-left:1px; animation:caret .55s steps(2) infinite; }
    @keyframes caret { 0%,50% { opacity:1; } 51%,100% { opacity:0; } }
    .code-line.active { color:var(--yellow); background:rgba(242,178,0,.12); border-left:3px solid var(--yellow); padding-left:45px; }
    .code-line.active::before { color:var(--yellow); font-weight:700; }

    .values { padding:10px 14px; border-top:1px solid var(--border); background:var(--bg-3); font-family:'IBM Plex Mono',monospace; font-size:11px; color:var(--text-3); display:flex; flex-wrap:wrap; gap:12px; min-height:38px; align-items:center; flex-shrink:0; }
    .values b { color:var(--yellow); }

    .op-desc { padding:12px 16px; background:var(--bg-3); border:1px solid var(--border); border-left:3px solid var(--red); border-radius:6px; font-size:13px; color:var(--text); min-height:44px; display:flex; align-items:center; line-height:1.6; flex-shrink:0; }

    @media (max-width:860px) { .cinema-grid { grid-template-columns:1fr; grid-template-rows:minmax(220px,1fr) minmax(220px,1fr); height:auto; min-height:520px; } }
    @media (max-width:560px) {
      body { padding:10px; }
      .app { min-height:calc(100vh - 20px); }
      .controls, .cinema-controls { padding:10px 12px; gap:8px; }
      .ctrl-group, .cinema-arr { min-width:100%; }
      .btns button { padding:7px 11px; font-size:12px; }
      .code-body { font-size:11px; }
      .list-node__value { font-size:14px; padding:10px 14px; min-width:50px; }
    }
  `,
  js: `
    const $ = id => document.getElementById(id);
    let cinemaInit = false;

    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const name = tab.dataset.tab;
        document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t === tab));
        document.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.dataset.panel === name));
        if (name === 'cinema' && !cinemaInit) { cinemaInit = true; cnllFirst(); }
      });
    });

    /* ═══════ PREVIEW ═══════ */
    const llStage = $('ll-stage');
    const llLogEl = $('ll-log');
    const llSizeEl = $('ll-size');
    const llLastEl = $('ll-last');
    const llValue = $('ll-value');

    const llList = { head: null };
    const llNode = (v) => ({ value: v, next: null });

    function llRender(highlightIdx, kind) {
      llStage.innerHTML = '';
      if (!llList.head) {
        const e = document.createElement('div');
        e.className = 'list-empty';
        e.textContent = '(القائمة فاضية — ضيف Node)';
        llStage.appendChild(e);
        llSizeEl.textContent = '0';
        return;
      }

      const headLabel = document.createElement('span');
      headLabel.className = 'list-head';
      headLabel.textContent = 'HEAD →';
      llStage.appendChild(headLabel);

      let cur = llList.head, idx = 0;
      while (cur) {
        const nodeEl = document.createElement('div');
        nodeEl.className = 'list-node';
        if (idx === highlightIdx && kind === 'highlight') nodeEl.classList.add('highlight');
        if (idx === highlightIdx && kind === 'found') nodeEl.classList.add('found');
        if (idx === highlightIdx && kind === 'entering') nodeEl.classList.add('entering');
        if (idx === highlightIdx && kind === 'exiting') nodeEl.classList.add('exiting');

        const val = document.createElement('div');
        val.className = 'list-node__value';
        val.textContent = cur.value;
        const next = document.createElement('div');
        next.className = 'list-node__next';
        next.textContent = '•';
        nodeEl.appendChild(val);
        nodeEl.appendChild(next);
        llStage.appendChild(nodeEl);

        if (cur.next) {
          const a = document.createElement('span');
          a.className = 'list-arrow';
          a.textContent = '→';
          llStage.appendChild(a);
        }
        cur = cur.next;
        idx++;
      }

      const nul = document.createElement('span');
      nul.className = 'list-null';
      nul.textContent = '∅';
      llStage.appendChild(nul);
      llSizeEl.textContent = String(idx);
    }

    function llAddLog(text, cls) {
      const line = document.createElement('div');
      if (cls) line.className = 'log__' + cls;
      line.textContent = text;
      llLogEl.appendChild(line);
      llLogEl.scrollTop = llLogEl.scrollHeight;
    }

    function llAddHead() {
      const v = Number(llValue.value);
      if (isNaN(v)) return;
      const n = llNode(v);
      n.next = llList.head;
      llList.head = n;
      llRender(0, 'entering');
      llLastEl.textContent = 'Add Head ' + v;
      llAddLog('إضافة ' + v + ' في الأول (O(1))', 'ok');
    }

    function llAddTail() {
      const v = Number(llValue.value);
      if (isNaN(v)) return;
      const n = llNode(v);
      if (!llList.head) { llList.head = n; }
      else {
        let cur = llList.head;
        while (cur.next) cur = cur.next;
        cur.next = n;
      }
      llRender(-1, null);
      llLastEl.textContent = 'Add Tail ' + v;
      llAddLog('إضافة ' + v + ' في الآخر (O(n))', 'info');
    }

    function llDelete() {
      const v = Number(llValue.value);
      if (isNaN(v)) return;
      if (!llList.head) { llAddLog('القائمة فاضية', 'err'); return; }
      if (llList.head.value === v) {
        llList.head = llList.head.next;
        llRender(-1, null);
        llAddLog('حذف ' + v + ' من الأول', 'warn');
        llLastEl.textContent = 'Delete ' + v;
        return;
      }
      let cur = llList.head;
      while (cur.next) {
        if (cur.next.value === v) {
          cur.next = cur.next.next;
          llRender(-1, null);
          llAddLog('حذف ' + v, 'warn');
          llLastEl.textContent = 'Delete ' + v;
          return;
        }
        cur = cur.next;
      }
      llAddLog('القيمة ' + v + ' مش موجودة', 'err');
    }

    function llReverse() {
      if (!llList.head) return;
      let prev = null, cur = llList.head;
      while (cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
      }
      llList.head = prev;
      llRender(-1, null);
      llLastEl.textContent = 'Reverse';
      llAddLog('عكسنا القائمة', 'info');
    }

    function llClear() {
      llList.head = null;
      llRender(-1, null);
      llLastEl.textContent = 'Clear';
      llAddLog('مسحنا القائمة', 'info');
    }

    $('ll-addhead').onclick = llAddHead;
    $('ll-addtail').onclick = llAddTail;
    $('ll-delete').onclick = llDelete;
    $('ll-reverse').onclick = llReverse;
    $('ll-clear').onclick = llClear;

    llList.head = llNode(10);
    llList.head.next = llNode(20);
    llList.head.next.next = llNode(30);
    llRender(-1, null);
    llAddLog('القائمة جاهزة بـ [10, 20, 30]', 'info');

    /* ═══════ CINEMA ═══════ */
    const LL_CODE = [
      'class Node {',
      '  constructor(value) {',
      '    this.value = value;',
      '    this.next = null;',
      '  }',
      '}',
      '',
      'class LinkedList {',
      '  constructor() {',
      '    this.head = null;',
      '  }',
      '',
      '  addHead(value) {',
      '    const node = new Node(value);',
      '    node.next = this.head;',
      '    this.head = node;',
      '  }',
      '',
      '  addTail(value) {',
      '    const node = new Node(value);',
      '    if (!this.head) { this.head = node; return; }',
      '    let cur = this.head;',
      '    while (cur.next) cur = cur.next;',
      '    cur.next = node;',
      '  }',
      '}',
      '',
      'const list = new LinkedList();',
      'list.addHead(30);',
      'list.addHead(20);',
      'list.addHead(10);',
      'list.addTail(40);'
    ];

    const cnllCode = $('cnll-code');
    const cnllStage = $('cnll-stage');
    const cnllValues = $('cnll-values');
    const cnllDesc = $('cnll-desc');
    const cnllCounter = $('cnll-counter');
    const cnllValueInput = $('cnll-value');
    const cnllPrev = $('cnll-prev');
    const cnllPlay = $('cnll-play');
    const cnllNext = $('cnll-next');
    const cnllReset = $('cnll-reset');

    let cnllSteps = [], cnllIndex = -1, cnllTyped = 0;
    let cnllTimer = null, cnllPlaying = false, cnllTyping = false, cnllCancelled = false;
    const cnllDelay = 3000;
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    function cnllBuildSteps() {
      const steps = [];
      let arr = [];
      const extra = Number(cnllValueInput.value) || 40;

      steps.push({ line: 0, desc: 'بنعرّف كلاس Node', arr: [], hl: {} });
      steps.push({ line: 1, desc: 'constructor(value) بياخد القيمة', arr: [], hl: {} });
      steps.push({ line: 2, desc: 'this.value = value', arr: [], hl: {} });
      steps.push({ line: 3, desc: 'this.next = null — المؤشر لسه مش عارف حاجة', arr: [], hl: {} });
      steps.push({ line: 7, desc: 'بنعرّف كلاس LinkedList', arr: [], hl: {} });
      steps.push({ line: 9, desc: 'this.head = null — القائمة فاضية', arr: [], hl: {} });
      steps.push({ line: 26, desc: 'new LinkedList() — بنعمل قائمة جديدة', arr: [], hl: {} });

      arr = [30];
      steps.push({ line: 12, desc: 'addHead(30) — نعمل Node جديدة', arr: [], hl: {} });
      steps.push({ line: 13, desc: 'node.next = head (null)', arr: [], hl: { entering: 0 } });
      steps.push({ line: 14, desc: 'this.head = node — القيمة 30 بقت في الأول', arr, hl: {} });

      arr = [20, 30];
      steps.push({ line: 12, desc: 'addHead(20)', arr: [...arr], hl: {} });
      steps.push({ line: 13, desc: 'node.next = head القديم (30)', arr: [...arr], hl: { entering: 0 } });
      steps.push({ line: 14, desc: 'head = 20 → 30', arr, hl: {} });

      arr = [10, 20, 30];
      steps.push({ line: 12, desc: 'addHead(10)', arr: [...arr], hl: {} });
      steps.push({ line: 13, desc: 'node.next = head القديم (20)', arr: [...arr], hl: { entering: 0 } });
      steps.push({ line: 14, desc: 'head = 10 → 20 → 30', arr, hl: {} });

      arr = [10, 20, 30, extra];
      steps.push({ line: 17, desc: 'addTail(' + extra + ')', arr: [10, 20, 30], hl: {} });
      steps.push({ line: 19, desc: 'head مش null — نلف لآخر Node', arr: [10, 20, 30], hl: { highlight: 0 } });
      steps.push({ line: 20, desc: 'نلف: 10 → 20 → 30', arr: [10, 20, 30], hl: { highlight: 1 } });
      steps.push({ line: 20, desc: 'نلف: وصلنا لـ 30', arr: [10, 20, 30], hl: { highlight: 2 } });
      steps.push({ line: 21, desc: 'cur.next = node — ربطنا ' + extra + ' في الآخر', arr, hl: { entering: 3 } });

      steps.push({ line: 23, desc: 'خلصنا — القائمة: [' + arr.join(' → ') + ']', arr, hl: {} });

      return steps;
    }

    function cnllBuildCodeDOM() {
      cnllCode.innerHTML = '';
      LL_CODE.forEach((_, i) => {
        const s = document.createElement('span');
        s.className = 'code-line';
        s.dataset.ln = String(i + 1);
        cnllCode.appendChild(s);
      });
    }

    async function cnllTypeLine(idx) {
      const el = cnllCode.children[idx];
      if (!el || el.classList.contains('typed')) return;
      el.classList.add('typing');
      const text = LL_CODE[idx];
      for (let i = 0; i < text.length; i++) {
        if (cnllCancelled) { el.classList.remove('typing'); return; }
        el.textContent = text.slice(0, i + 1);
        await sleep(text[i] === ' ' ? 6 : 14);
      }
      el.classList.remove('typing');
      el.classList.add('typed');
    }

    async function cnllEnsureTyped(target) {
      while (cnllTyped <= target) {
        cnllTyping = true;
        await cnllTypeLine(cnllTyped);
        cnllTyping = false;
        if (cnllCancelled) return;
        cnllTyped++;
      }
    }

    function cnllSetActive(idx) {
      cnllCode.querySelectorAll('.code-line').forEach((el, i) => el.classList.toggle('active', i === idx));
      const a = cnllCode.querySelector('.code-line.active');
      if (a) {
        const top = a.offsetTop, c = cnllCode;
        if (top < c.scrollTop || top + 24 > c.scrollTop + c.clientHeight) c.scrollTo({ top: top - c.clientHeight / 2, behavior: 'smooth' });
      }
    }

    function cnllRenderStage(step) {
      cnllStage.innerHTML = '';
      if (!step.arr.length) {
        const e = document.createElement('div');
        e.className = 'list-empty';
        e.textContent = '(لسه مفيش Nodes)';
        cnllStage.appendChild(e);
        return;
      }

      const headLabel = document.createElement('span');
      headLabel.className = 'list-head';
      headLabel.textContent = 'HEAD →';
      cnllStage.appendChild(headLabel);

      step.arr.forEach((v, i) => {
        const node = document.createElement('div');
        node.className = 'list-node';
        if (step.hl.highlight === i) node.classList.add('highlight');
        if (step.hl.entering === i) node.classList.add('entering');

        const val = document.createElement('div');
        val.className = 'list-node__value';
        val.textContent = v;
        const nxt = document.createElement('div');
        nxt.className = 'list-node__next';
        nxt.textContent = '•';
        node.appendChild(val);
        node.appendChild(nxt);
        cnllStage.appendChild(node);

        if (i < step.arr.length - 1) {
          const a = document.createElement('span');
          a.className = 'list-arrow';
          a.textContent = '→';
          cnllStage.appendChild(a);
        }
      });

      const nul = document.createElement('span');
      nul.className = 'list-null';
      nul.textContent = '∅';
      cnllStage.appendChild(nul);
    }

    function cnllRenderValues(step) {
      const parts = [];
      parts.push('size = <b>' + step.arr.length + '</b>');
      if (step.arr.length > 0) parts.push('head = <b>' + step.arr[0] + '</b>');
      cnllValues.innerHTML = parts.join(' · ');
    }

    async function cnllGoto(idx, animate) {
      cnllCancelled = false;
      cnllIndex = idx;
      const step = cnllSteps[idx];
      cnllCounter.textContent = (idx + 1) + ' / ' + cnllSteps.length;

      if (animate) {
        await cnllEnsureTyped(step.line);
        if (cnllCancelled) return;
      } else {
        while (cnllTyped <= step.line) {
          const el = cnllCode.children[cnllTyped];
          el.textContent = LL_CODE[cnllTyped];
          el.classList.add('typed');
          cnllTyped++;
        }
      }

      cnllSetActive(step.line);
      cnllRenderStage(step);
      cnllRenderValues(step);
      cnllDesc.textContent = step.desc;
      cnllPrev.disabled = idx <= 0;
      cnllNext.disabled = idx >= cnllSteps.length - 1;
    }

    async function cnllNextFn() {
      if (cnllPlaying) return;
      if (cnllIndex >= cnllSteps.length - 1) return;
      cnllPlaying = true;
      await cnllGoto(cnllIndex + 1, true);
      cnllPlaying = false;
    }

    async function cnllPrevFn() {
      if (cnllTyping) { cnllCancelled = true; await sleep(80); }
      if (cnllIndex <= 0) return;
      cnllPlaying = false;
      cnllStop();
      await cnllGoto(cnllIndex - 1, false);
    }

    async function cnllFirst() {
      cnllSteps = cnllBuildSteps();
      cnllCancelled = false;
      cnllTyped = 0;
      cnllIndex = -1;
      cnllBuildCodeDOM();
      cnllStop();
      await cnllGoto(0, false);
    }

    function cnllStart() {
      if (cnllTimer) return;
      cnllPlaying = true;
      cnllPlay.textContent = '⏸ وقّف';
      cnllTimer = setTimeout(async function tick() {
        if (cnllIndex >= cnllSteps.length - 1) { cnllStop(); return; }
        await cnllGoto(cnllIndex + 1, true);
        if (cnllTimer !== null && cnllPlaying) cnllTimer = setTimeout(tick, cnllDelay);
      }, 300);
    }

    function cnllStop() {
      cnllPlaying = false;
      cnllPlay.textContent = '▶ شغّل';
      if (cnllTimer) { clearTimeout(cnllTimer); cnllTimer = null; }
    }

    cnllNext.onclick = () => { cnllStop(); cnllNextFn(); };
    cnllPrev.onclick = () => { cnllStop(); cnllPrevFn(); };
    cnllReset.onclick = () => { cnllStop(); cnllFirst(); };
    cnllPlay.onclick = () => {
      if (cnllPlaying) { cnllStop(); return; }
      if (cnllIndex >= cnllSteps.length - 1) cnllFirst().then(() => cnllStart());
      else cnllStart();
    };
    cnllValueInput.addEventListener('change', () => { cnllStop(); cnllFirst(); });
  `
};

const STACK_RUNNABLE: Runnable = {
  html: `
    <div class="app">

      <nav class="tabs" role="tablist">
        <button class="tab active" data-tab="preview">
          <span class="tab__icon">📺</span>
          <span>المعاينة</span>
        </button>
        <button class="tab" data-tab="cinema">
          <span class="tab__icon">🎬</span>
          <span>خطوة بخطوة</span>
        </button>
      </nav>

      <!-- ═══ PREVIEW ═══ -->
      <section class="panel active" data-panel="preview">
        <div class="controls">
          <div class="ctrl-group">
            <label>القيمة</label>
            <input id="pv-value" type="number" value="42" dir="ltr">
          </div>
          <div class="btns">
            <button id="pv-push" class="primary">Push</button>
            <button id="pv-pop">Pop</button>
            <button id="pv-peek">Peek</button>
            <button id="pv-clear">امسح</button>
          </div>
        </div>

        <div class="stage stage--stack" id="pv-stage">
          <div class="eye" id="pv-eye" aria-hidden="true"><div class="eye__ball"></div></div>
          <div class="stack-container">
            <div class="top-label">TOP</div>
            <div class="stack" id="pv-stack"></div>
            <div class="bottom-label">BOTTOM</div>
          </div>
        </div>

        <div class="stats">
          <div class="stat"><span class="stat-label">الحجم</span><span class="stat-value" id="pv-size">0</span></div>
          <div class="stat"><span class="stat-label">آخر عملية</span><span class="stat-value" id="pv-last">—</span></div>
          <div class="stat"><span class="stat-label">Peek</span><span class="stat-value" id="pv-peek-val">—</span></div>
        </div>

        <div class="log" id="pv-log"></div>
      </section>

      <!-- ═══ CINEMA ═══ -->
      <section class="panel" data-panel="cinema">
        <div class="cinema-controls">
          <div class="cinema-arr">
            <label>قيمة البداية (Push)</label>
            <input id="cn-value" type="number" value="42" dir="ltr">
          </div>
          <div class="btns">
            <button id="cn-prev">⏮</button>
            <button id="cn-play" class="primary">▶ شغّل</button>
            <button id="cn-next">⏭</button>
            <button id="cn-reset">↺</button>
          </div>
          <div class="step-info"><span id="cn-counter">0 / 0</span></div>
        </div>

        <div class="cinema-grid">
          <div class="panel-box code-panel">
            <div class="panel-box__head">
              <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
              <span class="panel-box__title">stack.js</span>
            </div>
            <div class="code-body" id="cn-code" dir="ltr"></div>
          </div>

          <div class="panel-box stage-panel">
            <div class="panel-box__head">
              <span class="panel-box__title">الرسم</span>
            </div>
            <div class="stage stage--cinema stage--stack" id="cn-stage">
              <div class="eye" id="cn-eye" aria-hidden="true"><div class="eye__ball"></div></div>
              <div class="stack-container">
                <div class="top-label">TOP</div>
                <div class="stack" id="cn-stack"></div>
                <div class="bottom-label">BOTTOM</div>
              </div>
            </div>
            <div class="values" id="cn-values"></div>
          </div>
        </div>

        <div class="op-desc" id="cn-desc">—</div>
      </section>

    </div>
  `,
  css: `
    * { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --bg: #0F1B2D;
      --bg-2: #0A1422;
      --bg-3: #152236;
      --border: #1E2D42;
      --border-2: #2A3846;
      --text: #E6EDF2;
      --text-2: #9DAEC2;
      --text-3: #6B7C92;
      --blue: #5B9DFF;
      --yellow: #F2B200;
      --red: #FF6B57;
      --green: #4CD08A;
    }

    body {
      font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif;
      background: var(--bg);
      color: var(--text);
      padding: 16px;
      min-height: 100vh;
      overflow-x: hidden;
    }

    ::-webkit-scrollbar { width: 10px; height: 10px; }
    ::-webkit-scrollbar-track { background: var(--bg-2); }
    ::-webkit-scrollbar-thumb {
      background: var(--border-2);
      border-radius: 6px;
      border: 2px solid var(--bg-2);
      background-clip: padding-box;
    }
    ::-webkit-scrollbar-thumb:hover { background: #4A5F7A; background-clip: padding-box; }

    .app {
      max-width: 1200px;
      margin-inline: auto;
      display: flex;
      flex-direction: column;
      gap: 14px;
      min-height: calc(100vh - 32px);
    }

    .tabs {
      display: flex;
      gap: 6px;
      padding: 6px;
      background: var(--bg-2);
      border: 1px solid var(--border);
      border-radius: 8px;
      width: fit-content;
    }

    .tab {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      color: var(--text-2);
      background: transparent;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
    }

    .tab:hover { color: var(--text); }
    .tab.active { background: var(--bg-3); color: var(--text); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); }
    .tab__icon { font-size: 14px; }

    @media (max-width: 480px) {
      .tabs { width: 100%; }
      .tab { flex: 1; justify-content: center; padding: 10px 12px; font-size: 12px; }
    }

    .panel { display: none; flex-direction: column; gap: 14px; flex: 1; min-height: 0; }
    .panel.active { display: flex; }

    .controls, .cinema-controls {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: flex-end;
      padding: 14px 16px;
      background: var(--bg-3);
      border: 1px solid var(--border);
      border-radius: 8px;
    }

    .ctrl-group, .cinema-arr {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
      min-width: 180px;
    }

    .ctrl-group label, .cinema-arr label {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10px;
      color: var(--text-3);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .ctrl-group input, .cinema-arr input {
      padding: 8px 12px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 13px;
      color: var(--text);
      background: var(--bg-2);
      border: 1px solid var(--border);
      border-radius: 4px;
      outline: none;
      direction: ltr;
    }

    .ctrl-group input:focus, .cinema-arr input:focus { border-color: var(--red); }

    .btns { display: flex; gap: 6px; flex-wrap: wrap; }

    .btns button {
      padding: 8px 14px;
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      color: var(--text);
      background: var(--bg-2);
      border: 1px solid var(--border-2);
      border-radius: 4px;
      cursor: pointer;
      transition: 0.15s;
      white-space: nowrap;
    }

    .btns button:hover:not(:disabled) { border-color: var(--red); color: var(--red); }
    .btns button.primary { background: var(--yellow); border-color: var(--yellow); color: #0F1B2D; font-weight: 600; }
    .btns button.primary:hover { opacity: 0.9; color: #0F1B2D; }
    .btns button:disabled { opacity: 0.35; cursor: not-allowed; }

    .step-info {
      display: inline-flex;
      align-items: center;
      padding: 8px 14px;
      background: var(--bg-2);
      border: 1px solid var(--border-2);
      border-radius: 4px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      color: var(--yellow);
      font-weight: 600;
      min-width: 80px;
      justify-content: center;
    }

    .stage {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding: 24px 20px;
      background: var(--bg-2);
      border: 1px solid var(--border);
      border-radius: 8px;
      min-height: 320px;
      flex: 1;
      overflow: hidden;
    }

    .stage--stack { align-items: flex-start; padding: 30px 20px; }
    .stage--cinema { border-radius: 0; border: none; min-height: 0; }

    .stack-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      width: min(240px, 80%);
    }

    .top-label, .bottom-label {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      color: var(--text-3);
      letter-spacing: 0.15em;
    }

    .stack {
      position: relative;
      display: flex;
      flex-direction: column-reverse;
      gap: 6px;
      width: 100%;
      min-height: 240px;
      padding: 10px;
      background: var(--bg);
      border: 2px dashed var(--border-2);
      border-radius: 6px;
      justify-content: flex-start;
    }

    .stack-item {
      padding: 12px 18px;
      background: linear-gradient(135deg, var(--red), #F26B62);
      color: var(--bg);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 16px;
      font-weight: 700;
      text-align: center;
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(255, 107, 87, 0.3);
    }

    .stack-item.top {
      background: linear-gradient(135deg, var(--yellow), #FFC93C);
      box-shadow: 0 4px 16px rgba(242, 178, 0, 0.5);
    }

    .stack-item.entering { animation: enterRight 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
    .stack-item.exiting { animation: exitLeft 0.65s cubic-bezier(0.5, 0, 0.75, 0) both; pointer-events: none; }

    @keyframes enterRight {
      0% { opacity: 0; transform: translateX(200px) translateY(-120px) scale(0.5); }
      60% { opacity: 1; transform: translateX(0) translateY(-15px) scale(1.05); }
      100% { opacity: 1; transform: translateX(0) translateY(0) scale(1); }
    }

    @keyframes exitLeft {
      0% { opacity: 1; transform: translateX(0) translateY(0) scale(1); }
      40% { opacity: 1; transform: translateX(0) translateY(-100px) scale(1.08); }
      100% { opacity: 0; transform: translateX(-240px) translateY(-140px) scale(0.4); }
    }

    .stack-empty {
      color: var(--text-3);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      text-align: center;
      padding: 30px 0;
    }

    .eye {
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 42px;
      height: 22px;
      background: var(--bg);
      border: 2px solid var(--yellow);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: top 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s;
      opacity: 0;
      pointer-events: none;
      z-index: 10;
      box-shadow: 0 0 20px rgba(242, 178, 0, 0.4);
    }

    .eye.visible { opacity: 1; }
    .eye__ball { width: 9px; height: 9px; background: var(--yellow); border-radius: 50%; box-shadow: 0 0 8px var(--yellow); }
    .eye.blink .eye__ball { animation: blink 0.4s ease-in-out 2; }
    @keyframes blink { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(0.1); } }

    .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
    .stat { padding: 12px 14px; background: var(--bg-3); border: 1px solid var(--border); border-radius: 6px; display: flex; flex-direction: column; gap: 4px; }
    .stat-label { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--text-3); letter-spacing: 0.08em; text-transform: uppercase; }
    .stat-value { font-family: 'IBM Plex Mono', monospace; font-size: 15px; font-weight: 600; color: var(--red); }

    .log { padding: 14px 16px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; line-height: 1.8; color: var(--text-2); background: var(--bg-2); border: 1px solid var(--border); border-radius: 8px; min-height: 120px; max-height: 200px; overflow-y: auto; white-space: pre-wrap; }
    .log__ok { color: var(--green); }
    .log__info { color: var(--blue); }
    .log__warn { color: var(--yellow); }
    .log__err { color: var(--red); }

    .cinema-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 14px;
      flex: 1;
      min-height: 0;
      height: clamp(400px, 55vh, 520px);
    }

    .panel-box {
      display: flex;
      flex-direction: column;
      background: var(--bg-2);
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: hidden;
      min-height: 0;
    }

    .panel-box__head {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 10px 14px;
      background: var(--bg-3);
      border-bottom: 1px solid var(--border);
      flex-shrink: 0;
    }

    .panel-box__title {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      color: var(--text-3);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-inline-start: 6px;
    }

    .dot { width: 9px; height: 9px; border-radius: 50%; }
    .dot.red { background: var(--red); }
    .dot.yellow { background: var(--yellow); }
    .dot.green { background: var(--green); }

    .code-body {
      flex: 1;
      padding: 12px 0;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      line-height: 1.7;
      overflow: auto;
      direction: ltr;
      text-align: left;
      white-space: pre;
      min-height: 0;
    }

    .code-line {
      display: block;
      padding: 1px 14px 1px 48px;
      position: relative;
      min-height: 20px;
      color: #3A4A5F;
      transition: color 0.2s, background 0.2s;
    }

    .code-line::before {
      content: attr(data-ln);
      position: absolute;
      left: 8px;
      top: 1px;
      width: 30px;
      text-align: right;
      font-size: 10px;
      color: #2A3846;
      user-select: none;
    }

    .code-line.typed { color: var(--text-2); }
    .code-line.typed::before { color: #4A5F7A; }
    .code-line.typing { color: var(--text); background: rgba(255, 107, 87, 0.08); }
    .code-line.typing::after { content: '▌'; color: var(--red); margin-left: 1px; animation: caret 0.55s steps(2) infinite; }
    @keyframes caret { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }

    .code-line.active {
      color: var(--yellow);
      background: rgba(242, 178, 0, 0.12);
      border-left: 3px solid var(--yellow);
      padding-left: 45px;
    }
    .code-line.active::before { color: var(--yellow); font-weight: 700; }

    .values {
      padding: 10px 14px;
      border-top: 1px solid var(--border);
      background: var(--bg-3);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      color: var(--text-3);
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      min-height: 38px;
      align-items: center;
      flex-shrink: 0;
    }

    .values b { color: var(--yellow); }

    .op-desc {
      padding: 12px 16px;
      background: var(--bg-3);
      border: 1px solid var(--border);
      border-left: 3px solid var(--red);
      border-radius: 6px;
      font-size: 13px;
      color: var(--text);
      min-height: 44px;
      display: flex;
      align-items: center;
      line-height: 1.6;
      flex-shrink: 0;
    }

    @media (max-width: 860px) {
      .cinema-grid {
        grid-template-columns: 1fr;
        grid-template-rows: minmax(200px, 1fr) minmax(200px, 1fr);
        height: auto;
        min-height: 500px;
      }
    }

    @media (max-width: 560px) {
      body { padding: 10px; }
      .app { min-height: calc(100vh - 20px); }
      .controls, .cinema-controls { padding: 10px 12px; gap: 8px; }
      .ctrl-group, .cinema-arr { min-width: 100%; }
      .btns button { padding: 7px 11px; font-size: 12px; }
      .stat-value { font-size: 13px; }
      .stat { padding: 10px 12px; }
      .code-body { font-size: 11px; }
      .stack { min-height: 200px; }
      .cinema-grid { min-height: 460px; }
    }
  `,
  js: `
    const $ = id => document.getElementById(id);

    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const name = tab.dataset.tab;
        document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t === tab));
        document.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.dataset.panel === name));
        if (name === 'cinema' && !cinemaInit) {
          cinemaInit = true;
          cnFirst();
        }
      });
    });

    /* ═══════════════ PREVIEW ═══════════════ */
    const pvStackEl = $('pv-stack');
    const pvLogEl = $('pv-log');
    const pvSizeEl = $('pv-size');
    const pvLastEl = $('pv-last');
    const pvPeekEl = $('pv-peek-val');
    const pvInput = $('pv-value');
    const pvEye = $('pv-eye');
    const pvStage = $('pv-stage');

    const pvStack = [];

    function pvRender() {
      pvStackEl.innerHTML = '';
      if (pvStack.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'stack-empty';
        empty.textContent = '(الـ Stack فاضي)';
        pvStackEl.appendChild(empty);
      } else {
        for (let i = 0; i < pvStack.length; i++) {
          const item = document.createElement('div');
          item.className = 'stack-item';
          if (i === pvStack.length - 1) item.classList.add('top');
          item.textContent = pvStack[i];
          pvStackEl.appendChild(item);
        }
      }
      pvSizeEl.textContent = pvStack.length;
      pvPeekEl.textContent = pvStack.length > 0 ? pvStack[pvStack.length - 1] : '—';
      updateEye(pvEye, pvStage, pvStackEl, pvStack);
    }

    function updateEye(eyeEl, stageEl, stackEl, stack) {
      if (stack.length === 0) { eyeEl.classList.remove('visible'); return; }
      const items = stackEl.querySelectorAll('.stack-item');
      const top = items[items.length - 1];
      if (!top) { eyeEl.classList.remove('visible'); return; }
      const stRect = stageEl.getBoundingClientRect();
      const itRect = top.getBoundingClientRect();
      eyeEl.style.top = Math.max(6, itRect.top - stRect.top - 28) + 'px';
      eyeEl.classList.add('visible');
      eyeEl.classList.remove('blink');
      void eyeEl.offsetWidth;
      eyeEl.classList.add('blink');
    }

    function pvAddLog(text, cls) {
      const line = document.createElement('div');
      if (cls) line.className = 'log__' + cls;
      line.textContent = text;
      pvLogEl.appendChild(line);
      pvLogEl.scrollTop = pvLogEl.scrollHeight;
    }

    function pvPush() {
      const v = Number(pvInput.value);
      if (isNaN(v)) { pvAddLog('✕ قيمة غير صحيحة', 'err'); return; }
      pvStack.push(v);
      pvLastEl.textContent = 'Push ' + v;
      pvAddLog('Push: ' + v + ' ➜ دخل من اليمين ونزل', 'ok');
      pvRender();
      const items = pvStackEl.querySelectorAll('.stack-item');
      const last = items[items.length - 1];
      if (last) last.classList.add('entering');
    }

    function pvPop() {
      if (pvStack.length === 0) { pvAddLog('✕ Stack فاضي', 'err'); return; }
      const v = pvStack[pvStack.length - 1];
      pvLastEl.textContent = 'Pop ' + v;
      pvAddLog('Pop: ' + v + ' ⬅ طلع لفوق وخرج شمال', 'warn');
      const items = pvStackEl.querySelectorAll('.stack-item');
      const last = items[items.length - 1];
      if (last) {
        last.classList.add('exiting');
        setTimeout(() => { pvStack.pop(); pvRender(); }, 650);
      } else { pvStack.pop(); pvRender(); }
    }

    function pvPeekFn() {
      if (pvStack.length === 0) { pvAddLog('✕ Stack فاضي', 'err'); return; }
      const v = pvStack[pvStack.length - 1];
      pvAddLog('👁 Peek: ' + v, 'info');
      pvLastEl.textContent = 'Peek';
      updateEye(pvEye, pvStage, pvStackEl, pvStack);
    }

    function pvClear() {
      if (pvStack.length === 0) return;
      const n = pvStack.length;
      pvStack.length = 0;
      pvRender();
      pvLastEl.textContent = 'Clear';
      pvAddLog('مسحنا ' + n + ' عنصر', 'info');
    }

    $('pv-push').onclick = pvPush;
    $('pv-pop').onclick = pvPop;
    $('pv-peek').onclick = pvPeekFn;
    $('pv-clear').onclick = pvClear;
    pvInput.addEventListener('keydown', e => { if (e.key === 'Enter') pvPush(); });

    pvRender();
    pvAddLog('Stack جاهز — جرّب Push و Pop', 'info');

    /* ═══════════════ CINEMA ═══════════════ */
    const CODE = [
      'class Stack {',
      '  constructor() {',
      '    this.items = [];',
      '  }',
      '',
      '  push(value) {',
      '    this.items.push(value);',
      '    return this.items.length;',
      '  }',
      '',
      '  pop() {',
      '    if (this.isEmpty()) return null;',
      '    return this.items.pop();',
      '  }',
      '',
      '  peek() {',
      '    if (this.isEmpty()) return null;',
      '    return this.items[this.items.length - 1];',
      '  }',
      '',
      '  isEmpty() {',
      '    return this.items.length === 0;',
      '  }',
      '}',
      '',
      'const stack = new Stack();',
      'stack.push(10);',
      'stack.push(20);',
      'stack.push(30);',
      'console.log(stack.peek());',
      'stack.pop();',
      'console.log(stack.isEmpty());'
    ];

    const cnCode = $('cn-code');
    const cnStackEl = $('cn-stack');
    const cnStageEl = $('cn-stage');
    const cnValuesEl = $('cn-values');
    const cnDescEl = $('cn-desc');
    const cnCounterEl = $('cn-counter');
    const cnPrev = $('cn-prev');
    const cnPlay = $('cn-play');
    const cnNext = $('cn-next');
    const cnReset = $('cn-reset');
    const cnValue = $('cn-value');
    const cnEye = $('cn-eye');

    let cinemaInit = false;
    let cnSteps = [];
    let cnIndex = -1;
    let cnTyped = 0;
    let cnTimer = null;
    let cnPlaying = false;
    let cnTyping = false;
    let cnCancelled = false;
    let cnDelay = 3000;

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    function cnBuildSteps(baseVal) {
      const steps = [];
      let items = [];

      steps.push({ line: 0, desc: 'بنعرّف كلاس Stack', stack: [], action: null });
      steps.push({ line: 1, desc: 'constructor() بيشتغل لما نعمل instance', stack: [], action: null });
      steps.push({ line: 2, desc: 'this.items = [] — المصفوفة الداخلية فاضية', stack: [], action: null });
      steps.push({ line: 25, desc: 'new Stack() — بنعمل instance جديد', stack: [], action: null });

      items = [baseVal];
      steps.push({ line: 5, desc: 'push(' + baseVal + ') — القيمة بتدخل من اليمين', stack: [], action: { type: 'push', value: baseVal } });
      steps.push({ line: 6, desc: 'items.push(' + baseVal + ') — الحجم بقى 1', stack: items, action: null });

      const v2 = baseVal + 10;
      items = [...items, v2];
      steps.push({ line: 5, desc: 'push(' + v2 + ') — قيمة تانية داخلة', stack: [baseVal], action: { type: 'push', value: v2 } });
      steps.push({ line: 6, desc: 'items.push(' + v2 + ') — الحجم بقى 2', stack: items, action: null });

      const v3 = baseVal + 20;
      items = [...items, v3];
      steps.push({ line: 5, desc: 'push(' + v3 + ') — تالت قيمة داخلة', stack: [baseVal, v2], action: { type: 'push', value: v3 } });
      steps.push({ line: 6, desc: 'items.push(' + v3 + ') — الحجم بقى 3', stack: items, action: null });

      steps.push({ line: 14, desc: 'peek() — نشوف آخر عنصر من غير حذف', stack: items, action: null });
      steps.push({ line: 15, desc: 'isEmpty() → false', stack: items, action: null });
      steps.push({ line: 16, desc: 'العين بتتطلع على TOP = ' + v3, stack: items, action: { type: 'peek', value: v3 } });

      steps.push({ line: 10, desc: 'pop() — بنشيل آخر عنصر', stack: items, action: null });
      steps.push({ line: 11, desc: 'isEmpty() → false', stack: items, action: null });
      steps.push({ line: 12, desc: 'items.pop() — ' + v3 + ' طلع لفوق وخرج من الشمال', stack: items, action: { type: 'pop', value: v3 } });

      items = items.slice(0, -1);
      steps.push({ line: 12, desc: 'بعد الحذف — الحجم بقى ' + items.length, stack: items, action: null });

      steps.push({ line: 20, desc: 'isEmpty() — نتأكد', stack: items, action: null });
      steps.push({ line: 21, desc: 'items.length === 0 → false — لسه فيه عناصر', stack: items, action: null });

      return steps;
    }

    function cnBuildCodeDOM() {
      cnCode.innerHTML = '';
      CODE.forEach((_, i) => {
        const s = document.createElement('span');
        s.className = 'code-line';
        s.dataset.ln = String(i + 1);
        cnCode.appendChild(s);
      });
    }

    async function cnTypeLine(idx) {
      const el = cnCode.children[idx];
      if (!el || el.classList.contains('typed')) return;
      el.classList.add('typing');
      const text = CODE[idx];
      for (let i = 0; i < text.length; i++) {
        if (cnCancelled) { el.classList.remove('typing'); return; }
        el.textContent = text.slice(0, i + 1);
        await sleep(text[i] === ' ' ? 6 : 14);
      }
      el.classList.remove('typing');
      el.classList.add('typed');
    }

    async function cnEnsureTyped(target) {
      while (cnTyped <= target) {
        cnTyping = true;
        await cnTypeLine(cnTyped);
        cnTyping = false;
        if (cnCancelled) return;
        cnTyped++;
      }
    }

    function cnSetActive(idx) {
      cnCode.querySelectorAll('.code-line').forEach((el, i) => el.classList.toggle('active', i === idx));
      const a = cnCode.querySelector('.code-line.active');
      if (a) {
        const top = a.offsetTop;
        const c = cnCode;
        if (top < c.scrollTop || top + 24 > c.scrollTop + c.clientHeight) {
          c.scrollTo({ top: top - c.clientHeight / 2, behavior: 'smooth' });
        }
      }
    }

    function cnRenderStage(step) {
      cnStackEl.innerHTML = '';
      if (step.stack.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'stack-empty';
        empty.textContent = '(Stack فاضي)';
        cnStackEl.appendChild(empty);
      } else {
        for (let i = 0; i < step.stack.length; i++) {
          const item = document.createElement('div');
          item.className = 'stack-item';
          if (i === step.stack.length - 1) item.classList.add('top');
          item.textContent = step.stack[i];
          if (step.action && step.action.type === 'push' && i === step.stack.length - 1 && step.line === 5) {
            item.classList.add('entering');
          }
          if (step.action && step.action.type === 'pop' && i === step.stack.length - 1 && step.line === 12) {
            item.classList.add('exiting');
          }
          cnStackEl.appendChild(item);
        }
      }
      setTimeout(() => updateEye(cnEye, cnStageEl, cnStackEl, step.stack), 80);
    }

    function cnRenderValues(step) {
      const parts = [];
      parts.push('الحجم = <b>' + step.stack.length + '</b>');
      if (step.stack.length > 0) parts.push('TOP = <b>' + step.stack[step.stack.length - 1] + '</b>');
      if (step.action && step.action.type === 'push') parts.push('push(' + step.action.value + ')');
      if (step.action && step.action.type === 'pop') parts.push('pop() → ' + step.action.value);
      if (step.action && step.action.type === 'peek') parts.push('peek() → ' + (step.action.value ?? '—'));
      cnValuesEl.innerHTML = parts.join(' · ');
    }

    async function cnGoto(idx, animate) {
      cnCancelled = false;
      cnIndex = idx;
      const step = cnSteps[idx];
      cnCounterEl.textContent = (idx + 1) + ' / ' + cnSteps.length;

      if (animate) {
        await cnEnsureTyped(step.line);
        if (cnCancelled) return;
      } else {
        while (cnTyped <= step.line) {
          const el = cnCode.children[cnTyped];
          el.textContent = CODE[cnTyped];
          el.classList.add('typed');
          cnTyped++;
        }
      }

      cnSetActive(step.line);
      cnRenderStage(step);
      cnRenderValues(step);
      cnDescEl.textContent = step.desc;

      cnPrev.disabled = idx <= 0;
      cnNext.disabled = idx >= cnSteps.length - 1;
    }

    async function cnNextFn() {
      if (cnPlaying) return;
      if (cnIndex >= cnSteps.length - 1) return;
      cnPlaying = true;
      await cnGoto(cnIndex + 1, true);
      cnPlaying = false;
    }

    async function cnPrevFn() {
      if (cnTyping) { cnCancelled = true; await sleep(80); }
      if (cnIndex <= 0) return;
      cnPlaying = false;
      cnStop();
      await cnGoto(cnIndex - 1, false);
    }

    async function cnFirst() {
      const val = Number(cnValue.value) || 10;
      cnSteps = cnBuildSteps(val);
      cnCancelled = false;
      cnTyped = 0;
      cnIndex = -1;
      cnBuildCodeDOM();
      cnStop();
      await cnGoto(0, false);
    }

    function cnStart() {
      if (cnTimer) return;
      cnPlaying = true;
      cnPlay.textContent = '⏸ وقّف';
      cnTimer = setTimeout(async function tick() {
        if (cnIndex >= cnSteps.length - 1) { cnStop(); return; }
        await cnGoto(cnIndex + 1, true);
        if (cnTimer !== null && cnPlaying) cnTimer = setTimeout(tick, cnDelay);
      }, 300);
    }

    function cnStop() {
      cnPlaying = false;
      cnPlay.textContent = '▶ شغّل';
      if (cnTimer) { clearTimeout(cnTimer); cnTimer = null; }
    }

    cnNext.onclick = () => { cnStop(); cnNextFn(); };
    cnPrev.onclick = () => { cnStop(); cnPrevFn(); };
    cnReset.onclick = () => { cnStop(); cnFirst(); };
    cnPlay.onclick = () => {
      if (cnPlaying) { cnStop(); return; }
      if (cnIndex >= cnSteps.length - 1) cnFirst().then(() => cnStart());
      else cnStart();
    };
    cnValue.addEventListener('change', () => { cnStop(); cnFirst(); });
  `
};

// ═══════════════════════════════════════════════════════════════════
// Fetch — محطة كاملة بأربع visualization panels
// ═══════════════════════════════════════════════════════════════════

const FETCH_RUNNABLE: Runnable = {
  html: `
    <div class="app">

      <nav class="tabs" role="tablist">
        <button class="tab active" data-tab="lifecycle"><span class="tab__icon">📺</span><span>Lifecycle</span></button>
        <button class="tab" data-tab="explorer"><span class="tab__icon">🧪</span><span>Live Explorer</span></button>
        <button class="tab" data-tab="playground"><span class="tab__icon">🎮</span><span>Playground</span></button>
        <button class="tab" data-tab="errors"><span class="tab__icon">⚠️</span><span>Error Lab</span></button>
      </nav>

      <section class="panel active" data-panel="lifecycle">
        <div class="subnav">
          <button class="subtab active" data-sub="preview">👁 معاينة</button>
          <button class="subtab" data-sub="cinema">🎬 خطوة بخطوة</button>
        </div>

        <div class="subpanel active" data-subpanel="preview">
          <div class="lifecycle-stage">
            <div class="node client"><div class="node-icon">💻</div><div class="node-label">Browser</div><div class="node-sub">fetch(url)</div></div>
            <div class="wire" data-wire="req"><div class="packet" id="lf-pkt-req">📤</div><div class="wire-label" id="lf-lbl-req">GET /posts/1</div></div>
            <div class="node server"><div class="node-icon">🌐</div><div class="node-label">Server</div><div class="node-sub">api.example.com</div></div>
            <div class="wire" data-wire="res"><div class="packet" id="lf-pkt-res">📥</div><div class="wire-label" id="lf-lbl-res">200 OK</div></div>
            <div class="node promise"><div class="node-icon">⚡</div><div class="node-label">Promise</div><div class="node-sub">.then() / await</div></div>
          </div>
          <div class="btn-row">
            <button id="lf-run" class="primary">▶ شغّل الرحلة</button>
            <button id="lf-reset">↺ رجّع</button>
          </div>
          <ol class="lifecycle-steps" id="lf-steps">
            <li class="step" data-step="1"><span class="step-num">1</span><div><strong>fetch(url) بيترمي في الـ Network</strong><p>الـ browser بيفتح اتصال TCP مع السيرفر، وبيبعت HTTP request.</p></div></li>
            <li class="step" data-step="2"><span class="step-num">2</span><div><strong>fetch() بترجّع Promise فوراً</strong><p>مش بتستنّى الـ Response. بترجّع Promise <em>pending</em> حالاً.</p></div></li>
            <li class="step" data-step="3"><span class="step-num">3</span><div><strong>السيرفر بيرد بـ Response</strong><p>حتى لو الـ status = 404، الـ Promise بتتحل بنجاح.</p></div></li>
            <li class="step" data-step="4"><span class="step-num">4</span><div><strong>لازم تتحقق من response.ok</strong><p>fetch() مش بترمي error على 404 أو 500. لازم تتحقق بنفسك.</p></div></li>
            <li class="step" data-step="5"><span class="step-num">5</span><div><strong>response.json() = Promise تانية</strong><p>الـ body تيار بيانات. محتاج تقرأه بـ .json() أو .text().</p></div></li>
          </ol>
        </div>

        <div class="subpanel" data-subpanel="cinema">
          <div class="cinema-bar">
            <div class="btns">
              <button id="lc-prev">⏮</button>
              <button id="lc-play" class="primary">▶ شغّل</button>
              <button id="lc-next">⏭</button>
              <button id="lc-reset">↺</button>
            </div>
            <div class="step-info"><span id="lc-counter">0 / 0</span></div>
          </div>
          <div class="cinema-grid">
            <div class="panel-box code-panel">
              <div class="panel-box__head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span class="panel-box__title">lifecycle.js</span></div>
              <div class="code-body" id="lc-code" dir="ltr"></div>
            </div>
            <div class="panel-box stage-panel">
              <div class="panel-box__head"><span class="panel-box__title">الرحلة</span></div>
              <div class="stage stage--lifecycle" id="lc-stage">
                <div class="life-node" data-node="browser"><div class="life-node__icon">💻</div><div class="life-node__label">Browser</div></div>
                <div class="life-wire" data-wire="req"><div class="life-wire__packet">📤</div><div class="life-wire__label">GET /posts/1</div></div>
                <div class="life-node" data-node="server"><div class="life-node__icon">🌐</div><div class="life-node__label">Server</div></div>
                <div class="life-wire" data-wire="res"><div class="life-wire__packet">📥</div><div class="life-wire__label">200 OK</div></div>
                <div class="life-node" data-node="promise"><div class="life-node__icon">⚡</div><div class="life-node__label">Promise</div></div>
              </div>
              <div class="values" id="lc-values"></div>
            </div>
          </div>
          <div class="op-desc" id="lc-desc">—</div>
        </div>
      </section>

      <section class="panel" data-panel="explorer">
        <div class="subnav">
          <button class="subtab active" data-sub="preview">👁 معاينة</button>
          <button class="subtab" data-sub="cinema">🎬 خطوة بخطوة</button>
        </div>

        <div class="subpanel active" data-subpanel="preview">
          <div class="explorer-grid">
            <div class="presets">
              <h3 class="sub-title">APIs جاهزة</h3>
              <button class="preset" data-url="https://jsonplaceholder.typicode.com/posts/1" data-method="GET"><span class="preset-method">GET</span><span class="preset-url">/posts/1</span></button>
              <button class="preset" data-url="https://jsonplaceholder.typicode.com/users" data-method="GET"><span class="preset-method">GET</span><span class="preset-url">/users</span></button>
              <button class="preset" data-url="https://api.github.com/users/torvalds" data-method="GET"><span class="preset-method">GET</span><span class="preset-url">GitHub /torvalds</span></button>
              <button class="preset" data-url="https://jsonplaceholder.typicode.com/posts" data-method="POST"><span class="preset-method post">POST</span><span class="preset-url">/posts</span></button>
            </div>
            <div class="explorer-main">
              <div class="request-bar">
                <select id="ex-method" class="select"><option>GET</option><option>POST</option><option>PUT</option><option>DELETE</option></select>
                <input id="ex-url" type="text" class="url-input" value="https://jsonplaceholder.typicode.com/posts/1" dir="ltr">
                <button id="ex-send" class="primary">Send</button>
              </div>
              <div class="response-meta">
                <div class="meta-item"><span class="meta-label">Status</span><span class="meta-value" id="ex-status">—</span></div>
                <div class="meta-item"><span class="meta-label">Time</span><span class="meta-value" id="ex-time">—</span></div>
                <div class="meta-item"><span class="meta-label">Size</span><span class="meta-value" id="ex-size">—</span></div>
                <div class="meta-item"><span class="meta-label">Type</span><span class="meta-value" id="ex-type">—</span></div>
              </div>
              <pre class="response-body" id="ex-body" dir="ltr">اضغط Send عشان تبعت Request.</pre>
            </div>
          </div>
        </div>

        <div class="subpanel" data-subpanel="cinema">
          <div class="cinema-bar">
            <div class="btns">
              <button id="ex-prev">⏮</button>
              <button id="ex-play" class="primary">▶ شغّل</button>
              <button id="ex-next">⏭</button>
              <button id="ex-reset">↺</button>
            </div>
            <div class="step-info"><span id="ex-counter">0 / 0</span></div>
          </div>
          <div class="cinema-grid">
            <div class="panel-box code-panel">
              <div class="panel-box__head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span class="panel-box__title">explorer.js</span></div>
              <div class="code-body" id="ex-code" dir="ltr"></div>
            </div>
            <div class="panel-box stage-panel">
              <div class="panel-box__head"><span class="panel-box__title">الرحلة</span></div>
              <div class="stage stage--explorer">
                <div class="explore-view">
                  <div class="explore-row" data-row="method"><span class="explore-label">method</span><span class="explore-val" id="exv-method">—</span></div>
                  <div class="explore-row" data-row="url"><span class="explore-label">url</span><span class="explore-val" id="exv-url">—</span></div>
                  <div class="explore-row" data-row="status"><span class="explore-label">status</span><span class="explore-val" id="exv-status">—</span></div>
                  <div class="explore-row" data-row="ctype"><span class="explore-label">content-type</span><span class="explore-val" id="exv-ctype">—</span></div>
                  <div class="explore-row" data-row="body"><span class="explore-label">body</span><span class="explore-val" id="exv-body">—</span></div>
                </div>
              </div>
              <div class="values" id="ex-values"></div>
            </div>
          </div>
          <div class="op-desc" id="ex-desc">—</div>
        </div>
      </section>

      <section class="panel" data-panel="playground">
        <div class="subnav">
          <button class="subtab active" data-sub="preview">👁 معاينة</button>
          <button class="subtab" data-sub="cinema">🎬 خطوة بخطوة</button>
        </div>

        <div class="subpanel active" data-subpanel="preview">
          <p class="pg-hint">اكتب كود JavaScript بنفسك، اضغط Run، وشوف الناتج فوراً. <code>await</code> مدعومة.</p>
          <div class="pg-examples">
            <span class="pg-examples-label">أمثلة سريعة:</span>
            <button class="chip" data-snippet="basic">Fetch بسيط</button>
            <button class="chip" data-snippet="async">async/await</button>
            <button class="chip" data-snippet="post">POST</button>
            <button class="chip" data-snippet="error">Error Handling</button>
          </div>
          <div class="pg-split">
            <div class="panel-box">
              <div class="panel-box__head"><span class="panel-box__title">script.js</span></div>
              <textarea id="pg-code" class="pg-textarea" dir="ltr" spellcheck="false">const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const data = await response.json();
console.log('Title:', data.title);</textarea>
            </div>
            <div class="panel-box">
              <div class="panel-box__head"><span class="panel-box__title">Console</span><button id="pg-clear" class="mini-btn">Clear</button></div>
              <pre id="pg-output" class="pg-output">// الناتج هيظهر هنا...</pre>
            </div>
          </div>
          <div class="btn-row">
            <button id="pg-run" class="primary">▶ Run Code</button>
            <button id="pg-reset">↺ Reset</button>
          </div>
        </div>

        <div class="subpanel" data-subpanel="cinema">
          <div class="cinema-bar">
            <div class="btns">
              <button id="pgc-prev">⏮</button>
              <button id="pgc-play" class="primary">▶ شغّل</button>
              <button id="pgc-next">⏭</button>
              <button id="pgc-reset">↺</button>
            </div>
            <div class="step-info"><span id="pgc-counter">0 / 0</span></div>
          </div>
          <div class="cinema-grid">
            <div class="panel-box code-panel">
              <div class="panel-box__head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span class="panel-box__title">playground.js</span></div>
              <div class="code-body" id="pgc-code" dir="ltr"></div>
            </div>
            <div class="panel-box stage-panel">
              <div class="panel-box__head"><span class="panel-box__title">المتغيّرات</span></div>
              <div class="stage stage--vars">
                <div class="var-card" data-var="response">
                  <div class="var-card__name">response</div>
                  <div class="var-card__value" id="pgv-response">—</div>
                </div>
                <div class="var-card" data-var="data">
                  <div class="var-card__name">data</div>
                  <div class="var-card__value" id="pgv-data">—</div>
                </div>
              </div>
              <div class="values" id="pgc-values"></div>
            </div>
          </div>
          <div class="op-desc" id="pgc-desc">—</div>
        </div>
      </section>

      <section class="panel" data-panel="errors">
        <div class="subnav">
          <button class="subtab active" data-sub="preview">👁 معاينة</button>
          <button class="subtab" data-sub="cinema">🎬 خطوة بخطوة</button>
        </div>

        <div class="subpanel active" data-subpanel="preview">
          <p class="err-intro">في fetch، فيه أنواع مختلفة من الأخطاء. كل واحد بيتعامل معاه بطريقة مختلفة تماماً:</p>
          <div class="err-grid">
            <button class="err-card" data-err="404"><div class="err-icon">🔍</div><div class="err-title">HTTP 404</div><div class="err-desc">السيرفر رد، بس الحاجة مش موجودة</div><div class="err-verdict"><span class="verdict good">Promise resolves</span></div></button>
            <button class="err-card" data-err="500"><div class="err-icon">💥</div><div class="err-title">Server 500</div><div class="err-desc">السيرفر وقع</div><div class="err-verdict"><span class="verdict good">Promise resolves</span></div></button>
            <button class="err-card" data-err="network"><div class="err-icon">📡</div><div class="err-title">Network Failure</div><div class="err-desc">مفيش اتصال أو DNS فشل</div><div class="err-verdict"><span class="verdict bad">Promise rejects</span></div></button>
            <button class="err-card" data-err="timeout"><div class="err-icon">⏱</div><div class="err-title">Timeout</div><div class="err-desc">الـ AbortController وقف الطلب</div><div class="err-verdict"><span class="verdict bad">Promise rejects</span></div></button>
            <button class="err-card" data-err="json"><div class="err-icon">🔤</div><div class="err-title">Invalid JSON</div><div class="err-desc">الـ body مش JSON صالح</div><div class="err-verdict"><span class="verdict bad">json() rejects</span></div></button>
            <button class="err-card" data-err="cors"><div class="err-icon">🚫</div><div class="err-title">CORS Blocked</div><div class="err-desc">الـ origin مش مسموح</div><div class="err-verdict"><span class="verdict bad">Promise rejects</span></div></button>
          </div>
          <div class="err-code-block">
            <div class="err-code-head">الكود والنتيجة</div>
            <pre id="er-code" dir="ltr">// اضغط على أي كارت فوق</pre>
            <pre id="er-output" dir="ltr">// في انتظار اختيارك...</pre>
          </div>
        </div>

        <div class="subpanel" data-subpanel="cinema">
          <div class="cinema-bar">
            <div class="btns">
              <button class="err-chip active" data-err-cn="404">404</button>
              <button class="err-chip" data-err-cn="500">500</button>
              <button class="err-chip" data-err-cn="network">Network</button>
              <button class="err-chip" data-err-cn="timeout">Timeout</button>
              <button class="err-chip" data-err-cn="json">Invalid JSON</button>
              <button class="err-chip" data-err-cn="cors">CORS</button>
              <button id="erc-prev" class="ctrl-sep">⏮</button>
              <button id="erc-play" class="primary">▶ شغّل</button>
              <button id="erc-next">⏭</button>
              <button id="erc-reset">↺</button>
            </div>
            <div class="step-info"><span id="erc-counter">0 / 0</span></div>
          </div>
          <div class="cinema-grid">
            <div class="panel-box code-panel">
              <div class="panel-box__head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span class="panel-box__title" id="erc-filename">error.js</span></div>
              <div class="code-body" id="erc-code" dir="ltr"></div>
            </div>
            <div class="panel-box stage-panel">
              <div class="panel-box__head"><span class="panel-box__title">الحالة</span></div>
              <div class="stage stage--error">
                <div class="err-flow" id="erc-flow">
                  <div class="err-flow__node" data-eflow="req">
                    <div class="err-flow__icon">📤</div>
                    <div class="err-flow__title">Request</div>
                    <div class="err-flow__sub">fetch(url)</div>
                  </div>
                  <div class="err-flow__arrow" data-arrow="1">↓</div>
                  <div class="err-flow__node" data-eflow="res">
                    <div class="err-flow__icon">📥</div>
                    <div class="err-flow__title">Response</div>
                    <div class="err-flow__sub">status / headers</div>
                  </div>
                  <div class="err-flow__arrow" data-arrow="2">↓</div>
                  <div class="err-flow__node" data-eflow="check">
                    <div class="err-flow__icon">✓</div>
                    <div class="err-flow__title">check</div>
                    <div class="err-flow__sub">response.ok</div>
                  </div>
                  <div class="err-flow__arrow" data-arrow="3">↓</div>
                  <div class="err-flow__node" data-eflow="result">
                    <div class="err-flow__icon">❓</div>
                    <div class="err-flow__title">Result</div>
                    <div class="err-flow__sub">resolve / reject</div>
                  </div>
                </div>
              </div>
              <div class="values" id="erc-values"></div>
            </div>
          </div>
          <div class="op-desc" id="erc-desc">—</div>
        </div>
      </section>

    </div>
  `,
  css: `
    * { margin:0; padding:0; box-sizing:border-box; }
    :root {
      --bg:#0F1B2D; --bg-2:#0A1422; --bg-3:#152236; --border:#1E2D42; --border-2:#2A3846;
      --text:#E6EDF2; --text-2:#9DAEC2; --text-3:#6B7C92;
      --blue:#5B9DFF; --yellow:#F2B200; --red:#FF6B57; --green:#4CD08A;
    }
    body { font-family:'IBM Plex Sans Arabic',system-ui,sans-serif; background:var(--bg); color:var(--text); padding:16px; min-height:100vh; overflow-x:hidden; }
    ::-webkit-scrollbar { width:10px; height:10px; }
    ::-webkit-scrollbar-track { background:var(--bg-2); }
    ::-webkit-scrollbar-thumb { background:var(--border-2); border-radius:6px; border:2px solid var(--bg-2); background-clip:padding-box; }
    ::-webkit-scrollbar-thumb:hover { background:#4A5F7A; background-clip:padding-box; }
    .app { max-width:1200px; margin-inline:auto; display:flex; flex-direction:column; gap:14px; min-height:calc(100vh - 32px); }

    .tabs { display:flex; gap:4px; padding:6px; background:var(--bg-2); border:1px solid var(--border); border-radius:8px; overflow-x:auto; flex-wrap:wrap; }
    .tab { display:inline-flex; align-items:center; gap:6px; padding:10px 16px; font-family:inherit; font-size:12px; font-weight:600; color:var(--text-2); background:transparent; border:none; border-radius:6px; cursor:pointer; transition:all .2s; white-space:nowrap; }
    .tab:hover { color:var(--text); }
    .tab.active { background:var(--bg-3); color:var(--text); }
    .tab__icon { font-size:14px; }

    .panel { display:none; flex-direction:column; gap:14px; flex:1; min-height:0; }
    .panel.active { display:flex; }

    .subnav { display:flex; gap:4px; padding:4px; background:var(--bg-2); border:1px solid var(--border); border-radius:6px; width:fit-content; }
    .subtab { padding:8px 16px; font-family:inherit; font-size:12px; font-weight:600; color:var(--text-3); background:transparent; border:none; border-radius:4px; cursor:pointer; transition:.15s; }
    .subtab:hover { color:var(--text); }
    .subtab.active { background:var(--bg-3); color:var(--green); }

    .subpanel { display:none; flex-direction:column; gap:14px; }
    .subpanel.active { display:flex; }

    .btn-row, .cinema-bar { display:flex; gap:8px; flex-wrap:wrap; align-items:center; padding:12px 14px; background:var(--bg-3); border:1px solid var(--border); border-radius:8px; }
    .btns { display:flex; gap:6px; flex-wrap:wrap; }
    .btns button, .btn-row button { padding:8px 14px; font-family:inherit; font-size:12px; font-weight:500; color:var(--text); background:var(--bg-2); border:1px solid var(--border-2); border-radius:4px; cursor:pointer; transition:.15s; white-space:nowrap; }
    .btns button:hover:not(:disabled), .btn-row button:hover:not(:disabled) { border-color:var(--green); color:var(--green); }
    .btns button.primary, .btn-row button.primary { background:var(--green); border-color:var(--green); color:var(--bg); font-weight:700; }
    .btns button.primary:hover, .btn-row button.primary:hover { opacity:.9; color:var(--bg); }
    .btns button:disabled { opacity:.35; cursor:not-allowed; }
    .mini-btn { padding:4px 10px; font-size:10px; color:var(--text-2); background:var(--bg-2); border:1px solid var(--border-2); border-radius:4px; cursor:pointer; }

    .step-info { display:inline-flex; align-items:center; padding:6px 14px; background:var(--bg-2); border:1px solid var(--border-2); border-radius:4px; font-family:'IBM Plex Mono',monospace; font-size:12px; color:var(--yellow); font-weight:700; margin-inline-start:auto; }

    .lifecycle-stage { position:relative; display:flex; flex-direction:column; align-items:center; gap:0; padding:30px 20px; background:var(--bg-2); border:1px solid var(--border); border-radius:8px; }
    .node { display:flex; flex-direction:column; align-items:center; gap:4px; padding:14px 22px; border:2px solid var(--border-2); border-radius:6px; background:var(--bg-3); min-width:140px; transition:all .4s; }
    .node-icon { font-size:26px; }
    .node-label { font-size:13px; font-weight:600; }
    .node-sub { font-family:'IBM Plex Mono',monospace; font-size:10px; color:var(--text-3); }
    .node.active { border-color:var(--yellow); box-shadow:0 0 0 4px rgba(242,178,0,.15); }
    .node.done { border-color:var(--green); }
    .wire { position:relative; width:4px; height:60px; background:var(--border); margin:4px 0; transition:background .3s; }
    .wire.active { background:var(--yellow); }
    .packet { position:absolute; left:50%; transform:translateX(-50%); font-size:20px; opacity:0; transition:top 1.2s ease-in-out, opacity .2s; top:0; }
    .packet.visible { opacity:1; }
    .wire-label { position:absolute; top:50%; left:40px; transform:translateY(-50%); font-family:'IBM Plex Mono',monospace; font-size:11px; color:var(--text-3); white-space:nowrap; opacity:0; transition:opacity .3s; }
    .wire-label.visible { opacity:1; }

    .lifecycle-steps { display:flex; flex-direction:column; gap:10px; padding:0; margin:0; list-style:none; }
    .step { display:flex; gap:14px; padding:14px 16px; background:var(--bg-3); border:1px solid var(--border); border-radius:6px; opacity:.4; transition:.4s; }
    .step.active { opacity:1; border-color:var(--yellow); background:rgba(242,178,0,.06); }
    .step.done { opacity:1; border-color:var(--green); }
    .step-num { flex-shrink:0; width:26px; height:26px; display:flex; align-items:center; justify-content:center; background:var(--bg-2); border:1px solid var(--border-2); border-radius:50%; font-family:'IBM Plex Mono',monospace; font-size:12px; font-weight:600; color:var(--green); }
    .step strong { display:block; color:var(--text); font-size:13px; margin-bottom:4px; }
    .step p { color:var(--text-2); font-size:12px; line-height:1.6; margin:0; }
    .step em { color:var(--yellow); font-style:normal; }

    .explorer-grid { display:grid; grid-template-columns:220px 1fr; gap:14px; }
    @media (max-width:700px) { .explorer-grid { grid-template-columns:1fr; } }
    .sub-title { font-size:11px; font-weight:600; color:var(--text-3); margin-bottom:8px; text-transform:uppercase; letter-spacing:.08em; }
    .presets { display:flex; flex-direction:column; gap:6px; }
    .preset { display:flex; flex-direction:column; gap:3px; padding:10px 12px; background:var(--bg-3); border:1px solid var(--border); border-radius:4px; cursor:pointer; text-align:start; font-family:inherit; transition:.15s; }
    .preset:hover { border-color:var(--green); }
    .preset-method { font-family:'IBM Plex Mono',monospace; font-size:10px; font-weight:700; color:var(--green); }
    .preset-method.post { color:var(--yellow); }
    .preset-url { font-family:'IBM Plex Mono',monospace; font-size:11px; color:var(--text); word-break:break-all; }
    .explorer-main { display:flex; flex-direction:column; gap:10px; min-width:0; }
    .request-bar { display:flex; gap:6px; }
    .select, .url-input { padding:9px 12px; background:var(--bg-2); border:1px solid var(--border); border-radius:4px; color:var(--text); font-family:'IBM Plex Mono',monospace; font-size:12px; outline:none; }
    .select { cursor:pointer; flex-shrink:0; }
    .url-input { flex:1; min-width:0; }
    .select:focus, .url-input:focus { border-color:var(--green); }
    .request-bar .primary { padding:9px 16px; background:var(--green); border:1px solid var(--green); border-radius:4px; color:var(--bg); font-weight:700; cursor:pointer; font-size:12px; }
    .response-meta { display:grid; grid-template-columns:repeat(auto-fit,minmax(110px,1fr)); gap:6px; }
    .meta-item { padding:8px 10px; background:var(--bg-3); border:1px solid var(--border); border-radius:4px; display:flex; flex-direction:column; gap:2px; }
    .meta-label { font-family:'IBM Plex Mono',monospace; font-size:9px; color:var(--text-3); text-transform:uppercase; }
    .meta-value { font-family:'IBM Plex Mono',monospace; font-size:12px; font-weight:600; color:var(--green); }
    .response-body { margin:0; padding:12px 14px; font-family:'IBM Plex Mono',monospace; font-size:11px; line-height:1.6; color:var(--text); background:var(--bg-2); border:1px solid var(--border); border-radius:6px; max-height:280px; overflow:auto; white-space:pre-wrap; word-break:break-all; }

    .pg-hint { font-size:12px; color:var(--text-2); line-height:1.7; }
    .pg-hint code { font-family:'IBM Plex Mono',monospace; font-size:11px; padding:2px 6px; background:var(--bg-3); border-radius:3px; color:var(--green); }
    .pg-examples { display:flex; flex-wrap:wrap; gap:6px; align-items:center; }
    .pg-examples-label { font-family:'IBM Plex Mono',monospace; font-size:11px; color:var(--text-3); margin-inline-end:4px; }
    .chip { padding:5px 12px; background:transparent; border:1px solid var(--border-2); border-radius:20px; color:var(--text-2); font-family:inherit; font-size:11px; cursor:pointer; transition:.15s; }
    .chip:hover { border-color:var(--green); color:var(--green); }
    .pg-split { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
    @media (max-width:700px) { .pg-split { grid-template-columns:1fr; } }
    .pg-textarea { width:100%; min-height:200px; padding:12px; font-family:'IBM Plex Mono',monospace; font-size:12px; line-height:1.7; color:var(--text); background:var(--bg-2); border:0; outline:none; resize:vertical; direction:ltr; tab-size:2; }
    .pg-output { margin:0; padding:12px; font-family:'IBM Plex Mono',monospace; font-size:11px; line-height:1.7; color:var(--text-2); background:var(--bg-2); min-height:200px; overflow:auto; white-space:pre-wrap; }
    .pg-output .out-err { color:var(--red); }
    .pg-output .out-ok { color:var(--green); }
    .pg-output .out-log { color:var(--text); }
    .pg-output .out-info { color:var(--blue); }

    .err-intro { font-size:12px; color:var(--text-2); line-height:1.7; }
    .err-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:10px; }
    .err-card { display:flex; flex-direction:column; gap:6px; padding:14px; background:var(--bg-3); border:1px solid var(--border); border-radius:6px; cursor:pointer; text-align:start; font-family:inherit; transition:.15s; }
    .err-card:hover { border-color:var(--yellow); transform:translateY(-2px); }
    .err-icon { font-size:22px; }
    .err-title { font-size:13px; font-weight:600; color:var(--text); }
    .err-desc { font-size:11px; color:var(--text-2); }
    .verdict { display:inline-block; padding:3px 8px; border-radius:3px; font-family:'IBM Plex Mono',monospace; font-size:10px; font-weight:600; }
    .verdict.good { background:rgba(76,208,138,.15); color:var(--green); border:1px solid var(--green); }
    .verdict.bad { background:rgba(255,107,87,.15); color:var(--red); border:1px solid var(--red); }
    .err-code-block { display:flex; flex-direction:column; border:1px solid var(--border); border-radius:6px; overflow:hidden; }
    .err-code-head { padding:8px 12px; background:var(--bg-3); border-bottom:1px solid var(--border); font-family:'IBM Plex Mono',monospace; font-size:11px; color:var(--text-3); }
    #er-code, #er-output { margin:0; padding:12px 14px; font-family:'IBM Plex Mono',monospace; font-size:11px; line-height:1.6; color:var(--text); background:var(--bg-2); white-space:pre-wrap; word-break:break-word; max-height:180px; overflow:auto; }
    #er-output { color:var(--text-2); border-top:1px solid var(--border); }

    .cinema-grid { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:14px; flex:1; min-height:0; height:clamp(380px,52vh,500px); }
    .panel-box { display:flex; flex-direction:column; background:var(--bg-2); border:1px solid var(--border); border-radius:8px; overflow:hidden; min-height:0; }
    .panel-box__head { display:flex; align-items:center; gap:6px; padding:10px 14px; background:var(--bg-3); border-bottom:1px solid var(--border); flex-shrink:0; }
    .panel-box__title { font-family:'IBM Plex Mono',monospace; font-size:11px; color:var(--text-3); letter-spacing:.08em; text-transform:uppercase; margin-inline-start:6px; flex:1; }
    .dot { width:9px; height:9px; border-radius:50%; }
    .dot.red { background:var(--red); }
    .dot.yellow { background:var(--yellow); }
    .dot.green { background:var(--green); }

    .code-body { flex:1; padding:12px 0; font-family:'IBM Plex Mono',monospace; font-size:12px; line-height:1.7; overflow:auto; direction:ltr; text-align:left; white-space:pre; min-height:0; }
    .code-line { display:block; padding:1px 14px 1px 48px; position:relative; min-height:20px; color:#3A4A5F; transition:color .2s, background .2s; }
    .code-line::before { content:attr(data-ln); position:absolute; left:8px; top:1px; width:30px; text-align:right; font-size:10px; color:#2A3846; user-select:none; }
    .code-line.typed { color:var(--text-2); }
    .code-line.typed::before { color:#4A5F7A; }
    .code-line.typing { color:var(--text); background:rgba(76,208,138,.08); }
    .code-line.typing::after { content:'▌'; color:var(--green); margin-left:1px; animation:caret .55s steps(2) infinite; }
    @keyframes caret { 0%,50% { opacity:1; } 51%,100% { opacity:0; } }
    .code-line.active { color:var(--yellow); background:rgba(242,178,0,.12); border-left:3px solid var(--yellow); padding-left:45px; }
    .code-line.active::before { color:var(--yellow); font-weight:700; }

    .stage { flex:1; display:flex; flex-direction:column; justify-content:center; align-items:center; padding:20px 16px; overflow:auto; min-height:0; }
    .stage--lifecycle { gap:0; }
    .stage--explorer { justify-content:flex-start; align-items:stretch; }
    .stage--vars { justify-content:center; }
    .stage--error { justify-content:center; }

    .values { padding:10px 14px; border-top:1px solid var(--border); background:var(--bg-3); font-family:'IBM Plex Mono',monospace; font-size:11px; color:var(--text-3); display:flex; flex-wrap:wrap; gap:12px; min-height:36px; align-items:center; flex-shrink:0; }
    .values b { color:var(--yellow); }

    .op-desc { padding:12px 16px; background:var(--bg-3); border:1px solid var(--border); border-left:3px solid var(--green); border-radius:6px; font-size:13px; color:var(--text); min-height:44px; display:flex; align-items:center; line-height:1.6; flex-shrink:0; }

    .life-node { display:flex; flex-direction:column; align-items:center; gap:2px; padding:10px 16px; border:2px solid var(--border-2); border-radius:6px; background:var(--bg-3); min-width:110px; transition:all .4s; }
    .life-node.active { border-color:var(--yellow); box-shadow:0 0 0 3px rgba(242,178,0,.15); }
    .life-node.done { border-color:var(--green); }
    .life-node__icon { font-size:22px; }
    .life-node__label { font-size:12px; font-weight:600; }
    .life-wire { position:relative; width:3px; height:40px; background:var(--border); transition:background .3s; }
    .life-wire.active { background:var(--yellow); }
    .life-wire__packet { position:absolute; left:50%; transform:translateX(-50%); font-size:16px; opacity:0; top:0; transition:top .8s ease, opacity .3s; }
    .life-wire__packet.visible { opacity:1; }
    .life-wire__label { position:absolute; top:50%; left:24px; transform:translateY(-50%); font-family:'IBM Plex Mono',monospace; font-size:10px; color:var(--text-3); white-space:nowrap; opacity:0; transition:opacity .3s; }
    .life-wire__label.visible { opacity:1; }

    .explore-view { display:flex; flex-direction:column; gap:8px; width:100%; }
    .explore-row { display:flex; gap:12px; padding:10px 14px; background:var(--bg-3); border:1px solid var(--border); border-radius:6px; transition:all .3s; opacity:.4; }
    .explore-row.active { opacity:1; border-color:var(--yellow); }
    .explore-row.done { opacity:1; border-color:var(--green); }
    .explore-label { font-family:'IBM Plex Mono',monospace; font-size:10px; color:var(--text-3); text-transform:uppercase; min-width:100px; }
    .explore-val { font-family:'IBM Plex Mono',monospace; font-size:12px; color:var(--text); flex:1; word-break:break-all; }

    .var-card { display:flex; flex-direction:column; gap:6px; padding:16px 20px; background:var(--bg-3); border:2px solid var(--border-2); border-radius:8px; min-width:220px; margin-bottom:10px; transition:all .4s; }
    .var-card.active { border-color:var(--yellow); box-shadow:0 0 0 4px rgba(242,178,0,.12); }
    .var-card.done { border-color:var(--green); background:rgba(76,208,138,.06); }
    .var-card__name { font-family:'IBM Plex Mono',monospace; font-size:12px; color:var(--text-3); }
    .var-card__value { font-family:'IBM Plex Mono',monospace; font-size:14px; color:var(--text); font-weight:600; word-break:break-word; }

    .err-chip { padding:6px 12px; font-family:inherit; font-size:11px; font-weight:600; color:var(--text-2); background:var(--bg-2); border:1px solid var(--border-2); border-radius:4px; cursor:pointer; transition:.15s; }
    .err-chip:hover { color:var(--red); border-color:var(--red); }
    .err-chip.active { background:var(--red); border-color:var(--red); color:var(--bg); font-weight:700; }
    .ctrl-sep { margin-inline-start: 8px; border-inline-start: 1px solid var(--border); padding-inline-start: 10px; border: none; background: transparent; color: var(--text-2); cursor: pointer; padding: 8px 12px; font-size: 13px; }
    .ctrl-sep:hover { color: var(--red); }

    .err-flow { display: flex; flex-direction: column; gap: 4px; align-items: center; padding: 10px; width: 100%; }
    .err-flow__node { display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 10px 18px; background: var(--bg-3); border: 2px solid var(--border-2); border-radius: 8px; min-width: 180px; text-align: center; transition: all .4s ease; opacity: .5; }
    .err-flow__node.active { border-color: var(--yellow); opacity: 1; box-shadow: 0 0 0 4px rgba(242,178,0,.12); }
    .err-flow__node.good { border-color: var(--green); background: rgba(76,208,138,.08); opacity: 1; }
    .err-flow__node.bad { border-color: var(--red); background: rgba(255,107,87,.08); opacity: 1; }
    .err-flow__icon { font-size: 20px; }
    .err-flow__title { font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 700; color: var(--text); }
    .err-flow__sub { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--text-3); }
    .err-flow__node.active .err-flow__title { color: var(--yellow); }
    .err-flow__node.good .err-flow__title { color: var(--green); }
    .err-flow__node.bad .err-flow__title { color: var(--red); }
    .err-flow__arrow { font-size: 16px; color: var(--border-2); transition: color .3s ease; }
    .err-flow__arrow.active { color: var(--yellow); }

    @media (max-width:860px) {
      .cinema-grid { grid-template-columns:1fr; grid-template-rows:minmax(200px,1fr) minmax(200px,1fr); height:auto; min-height:500px; }
    }
    @media (max-width:560px) {
      body { padding:10px; }
      .app { min-height:calc(100vh - 20px); }
      .tab { padding:8px 10px; font-size:11px; }
      .tab__icon { font-size:12px; }
      .btns button, .btn-row button { padding:7px 11px; font-size:11px; }
      .code-body { font-size:11px; }
    }
  `,
  js: `
    const $ = id => document.getElementById(id);
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const CINEMA_DELAY = 3000;

    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const name = tab.dataset.tab;
        document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t === tab));
        document.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.dataset.panel === name));
      });
    });

    document.querySelectorAll('.subtab').forEach(st => {
      st.addEventListener('click', () => {
        const sub = st.dataset.sub;
        const panel = st.closest('.panel');
        panel.querySelectorAll('.subtab').forEach(x => x.classList.toggle('active', x === st));
        panel.querySelectorAll('.subpanel').forEach(p => p.classList.toggle('active', p.dataset.subpanel === sub));
      });
    });

    function buildCodeDOM(container, lines) {
      container.innerHTML = '';
      lines.forEach((_, i) => {
        const s = document.createElement('span');
        s.className = 'code-line';
        s.dataset.ln = String(i + 1);
        container.appendChild(s);
      });
    }

    function setActiveLine(container, idx) {
      container.querySelectorAll('.code-line').forEach((el, i) => el.classList.toggle('active', i === idx));
      const a = container.querySelector('.code-line.active');
      if (a) {
        const top = a.offsetTop, c = container;
        if (top < c.scrollTop || top + 24 > c.scrollTop + c.clientHeight) {
          c.scrollTo({ top: top - c.clientHeight / 2, behavior: 'smooth' });
        }
      }
    }

    async function typeLine(container, lines, idx, cancelObj) {
      const el = container.children[idx];
      if (!el || el.classList.contains('typed')) return;
      el.classList.add('typing');
      const text = lines[idx];
      for (let i = 0; i < text.length; i++) {
        if (cancelObj.cancelled) { el.classList.remove('typing'); return; }
        el.textContent = text.slice(0, i + 1);
        await sleep(text[i] === ' ' ? 5 : 12);
      }
      el.classList.remove('typing');
      el.classList.add('typed');
    }

    async function ensureTyped(state, container, lines, target) {
      while (state.typed <= target) {
        await typeLine(container, lines, state.typed, state);
        if (state.cancelled) return;
        state.typed++;
      }
    }

    /* ═══════════ LIFECYCLE ═══════════ */
    const LF_STEPS = $('lf-steps');
    let lfRunning = false;

    function lfReset() {
      lfRunning = false;
      LF_STEPS.querySelectorAll('.step').forEach(s => s.classList.remove('active', 'done'));
      document.querySelectorAll('.lifecycle-stage .node').forEach(n => n.classList.remove('active', 'done'));
      document.querySelectorAll('.lifecycle-stage .wire').forEach(w => w.classList.remove('active'));
      $('lf-pkt-req').classList.remove('visible');
      $('lf-pkt-res').classList.remove('visible');
      $('lf-lbl-req').classList.remove('visible');
      $('lf-lbl-res').classList.remove('visible');
      $('lf-pkt-req').style.top = '0';
      $('lf-pkt-res').style.top = '0';
    }

    async function lfPlay() {
      if (lfRunning) return;
      lfRunning = true;
      lfReset();
      lfRunning = true;

      const steps = LF_STEPS.querySelectorAll('.step');
      const client = document.querySelector('.lifecycle-stage .node.client');
      const server = document.querySelector('.lifecycle-stage .node.server');
      const promise = document.querySelector('.lifecycle-stage .node.promise');
      const wires = document.querySelectorAll('.lifecycle-stage .wire');

      steps[0].classList.add('active');
      client.classList.add('active');
      wires[0].classList.add('active');
      $('lf-pkt-req').classList.add('visible');
      $('lf-lbl-req').classList.add('visible');
      await sleep(600);
      $('lf-pkt-req').style.top = 'calc(100% - 20px)';
      await sleep(1300);
      client.classList.remove('active'); client.classList.add('done');
      server.classList.add('active');
      $('lf-pkt-req').classList.remove('visible');
      $('lf-lbl-req').classList.remove('visible');
      steps[0].classList.remove('active'); steps[0].classList.add('done');
      await sleep(400);

      steps[1].classList.add('active');
      promise.classList.add('active');
      await sleep(800);
      steps[1].classList.remove('active'); steps[1].classList.add('done');
      promise.classList.remove('active'); promise.classList.add('done');

      steps[2].classList.add('active');
      wires[1].classList.add('active');
      $('lf-pkt-res').classList.add('visible');
      $('lf-lbl-res').classList.add('visible');
      await sleep(600);
      $('lf-pkt-res').style.top = 'calc(100% - 20px)';
      await sleep(1300);
      server.classList.remove('active'); server.classList.add('done');
      steps[2].classList.remove('active'); steps[2].classList.add('done');
      $('lf-pkt-res').classList.remove('visible');
      $('lf-lbl-res').classList.remove('visible');

      steps[3].classList.add('active');
      await sleep(1100);
      steps[3].classList.remove('active'); steps[3].classList.add('done');

      steps[4].classList.add('active');
      promise.classList.add('active');
      await sleep(1100);
      steps[4].classList.remove('active'); steps[4].classList.add('done');
      promise.classList.remove('active'); promise.classList.add('done');

      lfRunning = false;
    }

    $('lf-run').onclick = lfPlay;
    $('lf-reset').onclick = lfReset;

    /* ═══════════ LIFECYCLE CINEMA ═══════════ */
    const LC_CODE = [
      'const response = await fetch(url);',
      '// Promise returned — pending',
      'if (!response.ok) {',
      '  throw new Error("HTTP " + response.status);',
      '}',
      'const data = await response.json();',
      'return data;'
    ];

    const lcCode = $('lc-code');
    const lcStage = $('lc-stage');
    const lcValues = $('lc-values');
    const lcDesc = $('lc-desc');
    const lcCounter = $('lc-counter');

    let lcState = null;
    let lcTimer = null;
    let lcPlaying = false;

    function lcSteps() {
      return [
        { line: 0, desc: 'fetch(url) بيندا — الـ browser فتح اتصال بالسيرفر', stage: 'req-start' },
        { line: 0, desc: 'الـ request وصل للسيرفر (GET /posts/1)', stage: 'req-sent' },
        { line: 1, desc: 'fetch() رجّعت Promise pending — الكود مش مستني', stage: 'pending' },
        { line: 0, desc: 'السيرفر بدأ يعالج الطلب', stage: 'server-working' },
        { line: 0, desc: 'السيرفر رد بـ 200 OK — الـ Promise fulfilled', stage: 'res-received' },
        { line: 2, desc: 'if (!response.ok) — بنتحقق من الـ status', stage: 'check-ok' },
        { line: 2, desc: 'response.ok = true → تخطينا الـ throw', stage: 'ok-true' },
        { line: 5, desc: 'response.json() — قراءة الـ body (عملية async)', stage: 'parse' },
        { line: 5, desc: 'الـ JSON اتحوّل لـ object', stage: 'parsed' },
        { line: 6, desc: 'return data — الدالة رجعت الـ object', stage: 'done' }
      ];
    }

    function lcBuild() { buildCodeDOM(lcCode, LC_CODE); }

    function lcRenderStage(step) {
      const nodes = lcStage.querySelectorAll('.life-node');
      const wires = lcStage.querySelectorAll('.life-wire');
      nodes.forEach(n => n.classList.remove('active', 'done'));
      wires.forEach(w => {
        w.classList.remove('active');
        w.querySelector('.life-wire__packet').classList.remove('visible');
        w.querySelector('.life-wire__packet').style.top = '0';
        w.querySelector('.life-wire__label').classList.remove('visible');
      });

      const browser = lcStage.querySelector('[data-node="browser"]');
      const server = lcStage.querySelector('[data-node="server"]');
      const promise = lcStage.querySelector('[data-node="promise"]');
      const reqWire = lcStage.querySelector('[data-wire="req"]');
      const resWire = lcStage.querySelector('[data-wire="res"]');

      const map = {
        'req-start': () => { browser.classList.add('active'); reqWire.classList.add('active'); reqWire.querySelector('.life-wire__packet').classList.add('visible'); reqWire.querySelector('.life-wire__label').classList.add('visible'); },
        'req-sent': () => { browser.classList.add('done'); reqWire.classList.add('active'); const p = reqWire.querySelector('.life-wire__packet'); p.classList.add('visible'); p.style.top = 'calc(100% - 20px)'; },
        'pending': () => { browser.classList.add('done'); promise.classList.add('active'); },
        'server-working': () => { server.classList.add('active'); },
        'res-received': () => { server.classList.add('done'); resWire.classList.add('active'); resWire.querySelector('.life-wire__packet').classList.add('visible'); resWire.querySelector('.life-wire__label').classList.add('visible'); const p = resWire.querySelector('.life-wire__packet'); p.style.top = 'calc(100% - 20px)'; },
        'check-ok': () => { promise.classList.add('done'); },
        'ok-true': () => { promise.classList.add('done'); },
        'parse': () => { promise.classList.add('active'); },
        'parsed': () => { promise.classList.add('done'); },
        'done': () => { promise.classList.add('done'); }
      };
      if (map[step.stage]) map[step.stage]();
    }

    function lcRenderValues(step) {
      const map = {
        'req-start': 'method = GET · url = /posts/1',
        'req-sent': 'status = in-flight',
        'pending': 'promise = pending',
        'server-working': 'server = processing',
        'res-received': 'status = 200 OK',
        'check-ok': 'checking response.ok',
        'ok-true': 'response.ok = true',
        'parse': 'await response.json()',
        'parsed': '{ id: 1, title: "..." }',
        'done': 'resolved with data'
      };
      lcValues.innerHTML = '<b>' + (map[step.stage] || '—') + '</b>';
    }

    async function lcGoto(idx, animate) {
      lcState.cancelled = false;
      lcState.index = idx;
      const step = lcState.steps[idx];
      lcCounter.textContent = (idx + 1) + ' / ' + lcState.steps.length;

      if (animate) {
        await ensureTyped(lcState, lcCode, LC_CODE, step.line);
        if (lcState.cancelled) return;
      } else {
        while (lcState.typed <= step.line) {
          const el = lcCode.children[lcState.typed];
          el.textContent = LC_CODE[lcState.typed];
          el.classList.add('typed');
          lcState.typed++;
        }
      }
      setActiveLine(lcCode, step.line);
      lcRenderStage(step);
      lcRenderValues(step);
      lcDesc.textContent = step.desc;
      $('lc-prev').disabled = idx <= 0;
      $('lc-next').disabled = idx >= lcState.steps.length - 1;
    }

    async function lcNext() {
      if (lcPlaying) return;
      if (!lcState || lcState.index >= lcState.steps.length - 1) return;
      lcPlaying = true;
      await lcGoto(lcState.index + 1, true);
      lcPlaying = false;
    }

    async function lcPrev() {
      if (lcState && lcState.typing) { lcState.cancelled = true; await sleep(60); }
      if (!lcState || lcState.index <= 0) return;
      lcPlaying = false;
      lcStop();
      await lcGoto(lcState.index - 1, false);
    }

    async function lcFirst() {
      lcState = { steps: lcSteps(), index: -1, typed: 0, cancelled: false, typing: false };
      lcBuild();
      lcStop();
      await lcGoto(0, false);
    }

    function lcStart() {
      if (lcTimer) return;
      lcPlaying = true;
      $('lc-play').textContent = '⏸ وقّف';
      lcTimer = setTimeout(async function tick() {
        if (lcState.index >= lcState.steps.length - 1) { lcStop(); return; }
        await lcGoto(lcState.index + 1, true);
        if (lcTimer !== null && lcPlaying) lcTimer = setTimeout(tick, CINEMA_DELAY);
      }, 300);
    }

    function lcStop() {
      lcPlaying = false;
      $('lc-play').textContent = '▶ شغّل';
      if (lcTimer) { clearTimeout(lcTimer); lcTimer = null; }
    }

    $('lc-next').onclick = () => { lcStop(); lcNext(); };
    $('lc-prev').onclick = () => { lcStop(); lcPrev(); };
    $('lc-reset').onclick = () => { lcStop(); lcFirst(); };
    $('lc-play').onclick = () => {
      if (lcPlaying) { lcStop(); return; }
      if (!lcState || lcState.index >= lcState.steps.length - 1) lcFirst().then(() => lcStart());
      else lcStart();
    };

    /* ═══════════ EXPLORER ═══════════ */
    const exSend = $('ex-send');
    const exMethod = $('ex-method');
    const exUrl = $('ex-url');

    document.querySelectorAll('.preset').forEach(p => {
      p.addEventListener('click', () => {
        exMethod.value = p.dataset.method;
        exUrl.value = p.dataset.url;
      });
    });

    exSend.onclick = async () => {
      const url = exUrl.value.trim();
      if (!url) return;
      $('ex-status').textContent = '…'; $('ex-status').style.color = 'var(--yellow)';
      $('ex-time').textContent = '…';
      $('ex-size').textContent = '…';
      $('ex-type').textContent = '…';
      $('ex-body').textContent = 'جاري الإرسال...';
      const start = performance.now();
      try {
        const res = await fetch(url, { method: exMethod.value });
        const elapsed = Math.round(performance.now() - start);
        const raw = await res.text();
        const size = new Blob([raw]).size;
        $('ex-status').textContent = res.status + ' ' + res.statusText;
        $('ex-status').style.color = res.ok ? 'var(--green)' : 'var(--red)';
        $('ex-time').textContent = elapsed + ' ms';
        $('ex-size').textContent = size < 1024 ? size + ' B' : (size / 1024).toFixed(1) + ' KB';
        $('ex-type').textContent = (res.headers.get('content-type') || '—').split(';')[0];
        let json = null;
        try { json = JSON.parse(raw); } catch (e) {}
        $('ex-body').textContent = json ? JSON.stringify(json, null, 2).slice(0, 2000) : raw.slice(0, 2000);
      } catch (err) {
        $('ex-status').textContent = 'Failed';
        $('ex-status').style.color = 'var(--red)';
        $('ex-body').textContent = '✕ ' + err.message;
      }
    };

    /* ═══════════ EXPLORER CINEMA ═══════════ */
    const EX_CODE = [
      'const response = await fetch(',
      '  "https://jsonplaceholder.typicode.com/posts/1",',
      '  { method: "GET" }',
      ');',
      'console.log(response.status);       // 200',
      'console.log(response.headers.get("content-type"));',
      'const data = await response.json();',
      'console.log(data);                  // { id: 1, ... }'
    ];

    const exCode = $('ex-code');
    const exDesc = $('ex-desc');
    const exCounter = $('ex-counter');
    const exValues = $('ex-values');

    let exState = null;
    let exTimer = null;
    let exPlaying = false;

    function exSteps() {
      return [
        { line: 0, desc: 'بنبدأ fetch() — نجهّز الـ request', row: 'method', val: 'GET' },
        { line: 1, desc: 'الـ URL: jsonplaceholder.typicode.com/posts/1', row: 'url', val: '/posts/1' },
        { line: 2, desc: 'method = GET', row: 'method', val: 'GET' },
        { line: 3, desc: 'fetch() اتنفذ — الـ request في الشبكة', row: 'url', val: 'in-flight…' },
        { line: 4, desc: 'response.status = 200', row: 'status', val: '200' },
        { line: 5, desc: 'قراءة content-type: application/json', row: 'ctype', val: 'application/json' },
        { line: 6, desc: 'response.json() — قراءة الـ body', row: 'body', val: 'parsing…' },
        { line: 7, desc: 'data = { id: 1, title: "...", ... }', row: 'body', val: '{ id: 1, title: "..." }' }
      ];
    }

    function exBuild() { buildCodeDOM(exCode, EX_CODE); }

    function exRenderStage(step, idx) {
      const rows = ['method', 'url', 'status', 'ctype', 'body'];
      rows.forEach(r => {
        const row = document.querySelector('[data-row="' + r + '"]');
        row.classList.remove('active', 'done');
        const currentIdx = rows.indexOf(step.row);
        const thisIdx = rows.indexOf(r);
        if (thisIdx < currentIdx) row.classList.add('done');
        if (thisIdx === currentIdx) row.classList.add('active');
      });
      $('exv-method').textContent = idx >= 0 ? 'GET' : '—';
      $('exv-url').textContent = idx >= 1 ? 'jsonplaceholder.typicode.com/posts/1' : '—';
      $('exv-status').textContent = idx >= 4 ? '200 OK' : '—';
      $('exv-ctype').textContent = idx >= 5 ? 'application/json' : '—';
      $('exv-body').textContent = idx >= 6 ? (idx >= 7 ? '{ id: 1, title: "..." }' : 'loading…') : '—';
    }

    function exRenderValues(step) {
      exValues.innerHTML = '<b>' + step.val + '</b>';
    }

    async function exGoto(idx, animate) {
      exState.cancelled = false;
      exState.index = idx;
      const step = exState.steps[idx];
      exCounter.textContent = (idx + 1) + ' / ' + exState.steps.length;
      if (animate) {
        await ensureTyped(exState, exCode, EX_CODE, step.line);
        if (exState.cancelled) return;
      } else {
        while (exState.typed <= step.line) {
          const el = exCode.children[exState.typed];
          el.textContent = EX_CODE[exState.typed];
          el.classList.add('typed');
          exState.typed++;
        }
      }
      setActiveLine(exCode, step.line);
      exRenderStage(step, idx);
      exRenderValues(step);
      exDesc.textContent = step.desc;
      $('ex-prev').disabled = idx <= 0;
      $('ex-next').disabled = idx >= exState.steps.length - 1;
    }

    async function exNext() { if (exPlaying || !exState || exState.index >= exState.steps.length - 1) return; exPlaying = true; await exGoto(exState.index + 1, true); exPlaying = false; }
    async function exPrev() { if (exState && exState.typing) { exState.cancelled = true; await sleep(60); } if (!exState || exState.index <= 0) return; exPlaying = false; exStop(); await exGoto(exState.index - 1, false); }
    async function exFirst() { exState = { steps: exSteps(), index: -1, typed: 0, cancelled: false }; exBuild(); exStop(); await exGoto(0, false); }
    function exStart() {
      if (exTimer) return;
      exPlaying = true;
      $('ex-play').textContent = '⏸ وقّف';
      exTimer = setTimeout(async function tick() {
        if (exState.index >= exState.steps.length - 1) { exStop(); return; }
        await exGoto(exState.index + 1, true);
        if (exTimer !== null && exPlaying) exTimer = setTimeout(tick, CINEMA_DELAY);
      }, 300);
    }
    function exStop() { exPlaying = false; $('ex-play').textContent = '▶ شغّل'; if (exTimer) { clearTimeout(exTimer); exTimer = null; } }
    $('ex-next').onclick = () => { exStop(); exNext(); };
    $('ex-prev').onclick = () => { exStop(); exPrev(); };
    $('ex-reset').onclick = () => { exStop(); exFirst(); };
    $('ex-play').onclick = () => { if (exPlaying) { exStop(); return; } if (!exState || exState.index >= exState.steps.length - 1) exFirst().then(() => exStart()); else exStart(); };

    /* ═══════════ PLAYGROUND ═══════════ */
    const PG_CODE = $('pg-code');
    const PG_OUT = $('pg-output');

    const PG_SNIPPETS = {
      basic: "const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');\\nconst data = await response.json();\\nconsole.log('Title:', data.title);\\nconsole.log('Body:', data.body);",
      async: "async function getUser() {\\n  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');\\n  if (!response.ok) throw new Error('HTTP ' + response.status);\\n  return await response.json();\\n}\\nconst user = await getUser();\\nconsole.log('Name:', user.name);",
      post: "const newPost = { title: 'Hi', body: 'Test', userId: 99 };\\nconst response = await fetch('https://jsonplaceholder.typicode.com/posts', {\\n  method: 'POST',\\n  headers: { 'Content-Type': 'application/json' },\\n  body: JSON.stringify(newPost)\\n});\\nconst result = await response.json();\\nconsole.log('New post ID:', result.id);",
      error: "async function safe(url) {\\n  try {\\n    const r = await fetch(url);\\n    if (!r.ok) throw new Error('HTTP ' + r.status);\\n    return await r.json();\\n  } catch (err) { console.error('Failed:', err.message); return null; }\\n}\\nconst ok = await safe('https://jsonplaceholder.typicode.com/posts/1');\\nconsole.log('Success:', ok ? 'yes' : 'no');"
    };

    document.querySelectorAll('.chip').forEach(c => {
      c.addEventListener('click', () => {
        const k = c.dataset.snippet;
        if (PG_SNIPPETS[k]) PG_CODE.value = PG_SNIPPETS[k];
      });
    });

    function pgAppend(text, cls) {
      const line = document.createElement('div');
      if (cls) line.className = cls;
      line.textContent = text;
      PG_OUT.appendChild(line);
      PG_OUT.scrollTop = PG_OUT.scrollHeight;
    }

    $('pg-clear').onclick = () => { PG_OUT.textContent = '// الناتج هيظهر هنا...'; };
    $('pg-reset').onclick = () => { PG_CODE.value = PG_SNIPPETS.basic; PG_OUT.textContent = '// الناتج هيظهر هنا...'; };

    $('pg-run').onclick = async () => {
      PG_OUT.innerHTML = '';
      pgAppend('▶ Running...', 'out-info');
      const logs = [];
      const origLog = console.log, origErr = console.error;
      console.log = (...a) => { logs.push({ text: a.map(x => typeof x === 'object' ? JSON.stringify(x, null, 2) : String(x)).join(' '), type: 'log' }); origLog.apply(console, a); };
      console.error = (...a) => { logs.push({ text: a.join(' '), type: 'error' }); origErr.apply(console, a); };
      try {
        const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
        await new AsyncFunction(PG_CODE.value)();
        console.log = origLog; console.error = origErr;
        logs.forEach(l => pgAppend(l.text, l.type === 'error' ? 'out-err' : 'out-log'));
        if (!logs.length) pgAppend('(مفيش output)', 'out-info');
        pgAppend('✓ Done', 'out-ok');
      } catch (err) {
        console.log = origLog; console.error = origErr;
        logs.forEach(l => pgAppend(l.text, l.type === 'error' ? 'out-err' : 'out-log'));
        pgAppend('✕ ' + err.message, 'out-err');
      }
    };

    /* ═══════════ PLAYGROUND CINEMA ═══════════ */
    const PGC_CODE = [
      "const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');",
      "if (!response.ok) {",
      "  throw new Error('HTTP ' + response.status);",
      "}",
      "const data = await response.json();",
      "console.log('Title:', data.title);",
      "console.log('Body:', data.body);"
    ];

    const pgcCode = $('pgc-code');
    const pgcDesc = $('pgc-desc');
    const pgcCounter = $('pgc-counter');
    const pgcValues = $('pgc-values');

    let pgcState = null, pgcTimer = null, pgcPlaying = false;

    function pgcSteps() {
      return [
        { line: 0, desc: 'fetch() — بنستدعي الـ API', r: null, d: null },
        { line: 0, desc: 'الـ Promise اتحل — response object وصل', r: '{ status: 200, ok: true }', d: null },
        { line: 1, desc: 'if (!response.ok) — بنتحقق', r: '{ status: 200, ok: true }', d: null },
        { line: 1, desc: 'response.ok = true → تخطينا الـ throw', r: '{ status: 200, ok: true }', d: null },
        { line: 4, desc: 'response.json() — قراءة الـ body', r: '{ status: 200, ok: true }', d: 'parsing…' },
        { line: 4, desc: 'data = { userId: 1, id: 1, title: "...", body: "..." }', r: '{ status: 200, ok: true }', d: '{ userId: 1, id: 1, title: "...", body: "..." }' },
        { line: 5, desc: 'console.log("Title:", data.title)', r: '{ status: 200, ok: true }', d: '{ userId: 1, id: 1, title: "...", body: "..." }' },
        { line: 6, desc: 'console.log("Body:", data.body)', r: '{ status: 200, ok: true }', d: '{ userId: 1, id: 1, title: "...", body: "..." }' }
      ];
    }

    function pgcBuild() { buildCodeDOM(pgcCode, PGC_CODE); }

    function pgcRenderStage(step) {
      const rCard = document.querySelector('[data-var="response"]');
      const dCard = document.querySelector('[data-var="data"]');
      rCard.classList.remove('active', 'done');
      dCard.classList.remove('active', 'done');
      if (step.r) { rCard.classList.add('done'); }
      if (step.d) {
        if (step.d === 'parsing…') dCard.classList.add('active');
        else dCard.classList.add('done');
      }
      $('pgv-response').textContent = step.r || '—';
      $('pgv-data').textContent = step.d || '—';
    }

    function pgcRenderValues(step) {
      pgcValues.innerHTML = '<b>' + (step.r ? 'response ready' : 'fetching…') + (step.d ? ' · data ready' : '') + '</b>';
    }

    async function pgcGoto(idx, animate) {
      pgcState.cancelled = false;
      pgcState.index = idx;
      const step = pgcState.steps[idx];
      pgcCounter.textContent = (idx + 1) + ' / ' + pgcState.steps.length;
      if (animate) {
        await ensureTyped(pgcState, pgcCode, PGC_CODE, step.line);
        if (pgcState.cancelled) return;
      } else {
        while (pgcState.typed <= step.line) {
          const el = pgcCode.children[pgcState.typed];
          el.textContent = PGC_CODE[pgcState.typed];
          el.classList.add('typed');
          pgcState.typed++;
        }
      }
      setActiveLine(pgcCode, step.line);
      pgcRenderStage(step);
      pgcRenderValues(step);
      pgcDesc.textContent = step.desc;
      $('pgc-prev').disabled = idx <= 0;
      $('pgc-next').disabled = idx >= pgcState.steps.length - 1;
    }

    async function pgcNext() { if (pgcPlaying || !pgcState || pgcState.index >= pgcState.steps.length - 1) return; pgcPlaying = true; await pgcGoto(pgcState.index + 1, true); pgcPlaying = false; }
    async function pgcPrev() { if (pgcState && pgcState.typing) { pgcState.cancelled = true; await sleep(60); } if (!pgcState || pgcState.index <= 0) return; pgcPlaying = false; pgcStop(); await pgcGoto(pgcState.index - 1, false); }
    async function pgcFirst() { pgcState = { steps: pgcSteps(), index: -1, typed: 0, cancelled: false }; pgcBuild(); pgcStop(); await pgcGoto(0, false); }
    function pgcStart() {
      if (pgcTimer) return;
      pgcPlaying = true;
      $('pgc-play').textContent = '⏸ وقّف';
      pgcTimer = setTimeout(async function tick() {
        if (pgcState.index >= pgcState.steps.length - 1) { pgcStop(); return; }
        await pgcGoto(pgcState.index + 1, true);
        if (pgcTimer !== null && pgcPlaying) pgcTimer = setTimeout(tick, CINEMA_DELAY);
      }, 300);
    }
    function pgcStop() { pgcPlaying = false; $('pgc-play').textContent = '▶ شغّل'; if (pgcTimer) { clearTimeout(pgcTimer); pgcTimer = null; } }
    $('pgc-next').onclick = () => { pgcStop(); pgcNext(); };
    $('pgc-prev').onclick = () => { pgcStop(); pgcPrev(); };
    $('pgc-reset').onclick = () => { pgcStop(); pgcFirst(); };
    $('pgc-play').onclick = () => { if (pgcPlaying) { pgcStop(); return; } if (!pgcState || pgcState.index >= pgcState.steps.length - 1) pgcFirst().then(() => pgcStart()); else pgcStart(); };

    /* ═══════════ ERRORS ═══════════ */
    const ERR_SCEN = {
      '404': {
        code: [
          "const res = await fetch('/api/posts/999999');",
          "console.log('status:', res.status);   // 404",
          "console.log('ok:', res.ok);           // false",
          "// ⚠️ مفيش throw هنا! الـ Promise fulfilled",
          "if (!res.ok) throw new Error('HTTP ' + res.status);"
        ].join('\\n'),
        output: [
          "status: 404",
          "ok: false",
          "",
          "⚠️ fetch مش بترمي error على 404",
          "   الـ Promise fulfilled بنجاح — لكن res.ok = false",
          "",
          "✓ الحل الصح:",
          "   if (!res.ok) throw new Error('HTTP ' + res.status);"
        ].join('\\n'),
        type: 'info'
      },
      '500': {
        code: [
          "try {",
          "  const res = await fetch('https://httpstat.us/500');",
          "  console.log('status:', res.status);   // 500",
          "  console.log('ok:', res.ok);           // false",
          "  // لازم تتحقق بنفسك — مفيش error تلقائي",
          "} catch (err) {",
          "  console.log('Caught:', err.message);",
          "}"
        ].join('\\n'),
        output: [
          "status: 500",
          "ok: false",
          "",
          "⚠️ نفس الحكاية — 500 مش بيطلق error",
          "   الـ Promise fulfilled عادي",
          "",
          "✓ 5xx هي 'السيرفر مش قادر يعالج'",
          "   لكن fetch مش بيعتبرها استثناء"
        ].join('\\n'),
        type: 'info'
      },
      'network': {
        code: [
          "try {",
          "  const res = await fetch('https://not-exist-12345.com/api');",
          "  console.log('وصلنا هنا؟ مستحيل');",
          "} catch (err) {",
          "  console.log('name:', err.name);        // TypeError",
          "  console.log('message:', err.message); // Failed to fetch",
          "}"
        ].join('\\n'),
        output: [
          "name: TypeError",
          "message: Failed to fetch",
          "",
          "✓ ده النوع الوحيد اللي fetch بترمي عليه",
          "   error تلقائياً",
          "",
          "بيحصل لما:",
          "  • DNS مش قادر يلاقي الدومين",
          "  • مفيش اتصال بالإنترنت",
          "  • الـ browser حجب الطلب"
        ].join('\\n'),
        type: 'good'
      },
      'timeout': {
        code: [
          "const controller = new AbortController();",
          "const timer = setTimeout(() => controller.abort(), 2000);",
          "",
          "try {",
          "  const res = await fetch('/api/slow-endpoint', {",
          "    signal: controller.signal",
          "  });",
          "  clearTimeout(timer);",
          "} catch (err) {",
          "  console.log('name:', err.name);  // AbortError",
          "  console.log('== AbortError?', err.name === 'AbortError');",
          "}"
        ].join('\\n'),
        output: [
          "name: AbortError",
          "== AbortError? true",
          "",
          "⚠️ fetch مش عندها timeout built-in",
          "   محتاج AbortController عشان تلغي الطلب يدوياً",
          "",
          "✓ الفايدة:",
          "   • بتمنع الطلبات اللي بتاخد وقت طويل",
          "   • بتوفّر موارد الـ network",
          "   • تجربة مستخدم أحسن"
        ].join('\\n'),
        type: 'good'
      },
      'json': {
        code: [
          "const res = await fetch('/page.html');  // HTML مش JSON",
          "console.log('content-type:', res.headers.get('content-type'));",
          "",
          "try {",
          "  const data = await res.json();",
          "} catch (err) {",
          "  console.log('name:', err.name);",
          "  console.log('message:', err.message);",
          "}"
        ].join('\\n'),
        output: [
          "content-type: text/html",
          "",
          "name: SyntaxError",
          "message: Unexpected token '<', \\"<!DOCTYPE\\"... is not valid JSON",
          "",
          "✓ response.json() بتعمل parse لـ JSON",
          "   لو الـ body مش JSON صالح → SyntaxError",
          "",
          "✓ الحل:",
          "   • تأكد من content-type قبل json()",
          "   • استخدم response.text() لو مش متأكد"
        ].join('\\n'),
        type: 'good'
      },
      'cors': {
        code: [
          "try {",
          "  const res = await fetch('https://api.other-domain.com/data');",
          "} catch (err) {",
          "  console.log('name:', err.name);        // TypeError",
          "  console.log('message:', err.message); // Failed to fetch",
          "}",
          "",
          "// ملاحظة: الـ Response مش بيوصل أصلاً",
          "// الـ browser بيمنع الطلب قبل ما يخرج"
        ].join('\\n'),
        output: [
          "name: TypeError",
          "message: Failed to fetch",
          "",
          "⚠️ الـ browser بيمنع الطلب قبل ما يوصل للسيرفر",
          "   حتى السيرفر مش عارف إنه حصل طلب",
          "",
          "✓ الحل مش عندك — عند السيرفر:",
          "   Access-Control-Allow-Origin: *",
          "",
          "✓ الحل البديل:",
          "   استخدم proxy على سيرفرك",
          "   أو Firebase Functions كـ middleware"
        ].join('\\n'),
        type: 'good'
      }
    };

    document.querySelectorAll('.err-card').forEach(card => {
      card.addEventListener('click', () => {
        const s = ERR_SCEN[card.dataset.err];
        if (!s) return;
        $('er-code').textContent = s.code;
        $('er-output').textContent = s.output;
        $('er-output').style.color = s.type === 'good' ? 'var(--green)' : 'var(--yellow)';
      });
    });

    /* ═══════════ ERRORS CINEMA ═══════════ */
    const ERC_SCRIPTS = {
      '404': {
        filename: '404.js',
        code: [
          "const res = await fetch('/api/posts/999999');",
          "console.log('status:', res.status);",
          "console.log('ok:', res.ok);",
          "if (!res.ok) {",
          "  throw new Error('HTTP ' + res.status);",
          "}",
          "const data = await res.json();"
        ],
        steps: [
          { line: 0, desc: 'بنبعت request لـ /api/posts/999999', flow: 'req', state: 'active' },
          { line: 0, desc: 'الـ browser فتح اتصال TCP مع السيرفر', flow: 'req', state: 'active' },
          { line: 0, desc: 'السيرفر استقبل الطلب وبدأ يعالج', flow: 'req', state: 'good' },
          { line: 0, desc: 'السيرفر رد بـ 404 Not Found', flow: 'res', state: 'active' },
          { line: 1, desc: 'res.status = 404 — السيرفر بيقول "مش موجود"', flow: 'res', state: 'good', value: 'status: 404' },
          { line: 2, desc: 'res.ok = false — لأن 404 مش في الـ range 200-299', flow: 'check', state: 'active', value: 'ok: false' },
          { line: 3, desc: 'if (!res.ok) — الشرط اتحقق ✓', flow: 'check', state: 'good' },
          { line: 4, desc: 'نرمي error بنفسنا عشان نوقف التنفيذ', flow: 'result', state: 'bad', value: 'throw Error: HTTP 404' },
          { line: 6, desc: 'response.json() مش هيتنفذ — الـ throw وقف الكود', flow: 'result', state: 'bad', value: '⛔ التنفيذ توقف' }
        ]
      },
      '500': {
        filename: '500.js',
        code: [
          "try {",
          "  const res = await fetch('/api/critical-data');",
          "  if (!res.ok) {",
          "    throw new Error('Server error: ' + res.status);",
          "  }",
          "  const data = await res.json();",
          "} catch (err) {",
          "  console.error('Failed:', err.message);",
          "}"
        ],
        steps: [
          { line: 1, desc: 'بنبعت request لـ /api/critical-data', flow: 'req', state: 'active' },
          { line: 1, desc: 'السيرفر بيحاول يجهّز الداتا', flow: 'req', state: 'active' },
          { line: 1, desc: 'السيرفر وقع — في مشكلة داخلية', flow: 'req', state: 'good' },
          { line: 1, desc: 'السيرفر رد بـ 500 Internal Server Error', flow: 'res', state: 'active' },
          { line: 2, desc: 'if (!res.ok) — الشرط اتحقق (res.ok = false)', flow: 'check', state: 'good', value: 'status: 500' },
          { line: 3, desc: 'نرمي Error برسالة واضحة', flow: 'result', state: 'bad', value: 'Error: Server error: 500' },
          { line: 6, desc: 'الـ catch استقبل الـ error', flow: 'result', state: 'active' },
          { line: 7, desc: 'بنطبع رسالة واضحة للمستخدم', flow: 'result', state: 'bad', value: 'Failed: Server error: 500' }
        ]
      },
      'network': {
        filename: 'network.js',
        code: [
          "try {",
          "  const res = await fetch('https://not-exist-12345.com/api');",
          "  const data = await res.json();",
          "} catch (err) {",
          "  console.log('name:', err.name);",
          "  console.log('message:', err.message);",
          "}"
        ],
        steps: [
          { line: 1, desc: 'بنبعت request لدومين مش موجود', flow: 'req', state: 'active' },
          { line: 1, desc: 'الـ browser بيحاول يعمل DNS lookup', flow: 'req', state: 'active' },
          { line: 1, desc: 'الـ DNS فشل — الدومين مش موجود', flow: 'req', state: 'bad' },
          { line: 1, desc: 'fetch بترمي TypeError — Promise rejected', flow: 'res', state: 'bad', value: 'TypeError' },
          { line: 3, desc: 'الـ catch استقبل الـ error', flow: 'check', state: 'active' },
          { line: 4, desc: 'err.name = "TypeError"', flow: 'result', state: 'bad', value: 'name: TypeError' },
          { line: 5, desc: 'err.message = "Failed to fetch" — ده الشكل الموحد للـ network errors', flow: 'result', state: 'bad', value: 'Failed to fetch' }
        ]
      },
      'timeout': {
        filename: 'timeout.js',
        code: [
          "const controller = new AbortController();",
          "const timer = setTimeout(() => controller.abort(), 2000);",
          "",
          "try {",
          "  const res = await fetch('/api/slow-endpoint', {",
          "    signal: controller.signal",
          "  });",
          "  clearTimeout(timer);",
          "} catch (err) {",
          "  console.log('name:', err.name);",
          "  console.log('isAbortError:', err.name === 'AbortError');",
          "}"
        ],
        steps: [
          { line: 0, desc: 'بنعمل AbortController جديد', flow: 'req', state: 'active' },
          { line: 1, desc: 'بنشغّل timeout 2 ثواني — لما يخلص هنادي abort()', flow: 'req', state: 'active' },
          { line: 4, desc: 'بنبعت fetch مع signal من الـ controller', flow: 'req', state: 'active' },
          { line: 6, desc: 'الطلب في الشبكة — السيرفر لسه بيعالج', flow: 'req', state: 'good', value: 'in-flight' },
          { line: 1, desc: 'الـ 2 ثواني خلصوا — controller.abort() اتنفذ', flow: 'res', state: 'bad', value: 'abort() called' },
          { line: 4, desc: 'fetch شالت الـ request — Promise rejected بـ AbortError', flow: 'res', state: 'bad', value: 'AbortError' },
          { line: 9, desc: 'الـ catch استقبل الـ error', flow: 'check', state: 'active' },
          { line: 10, desc: 'err.name = "AbortError"', flow: 'result', state: 'bad', value: 'name: AbortError' },
          { line: 11, desc: 'err.name === "AbortError" → true', flow: 'result', state: 'good', value: 'isAbortError: true' }
        ]
      },
      'json': {
        filename: 'invalid-json.js',
        code: [
          "const res = await fetch('/page.html');",
          "const ctype = res.headers.get('content-type');",
          "console.log('content-type:', ctype);",
          "",
          "try {",
          "  const data = await res.json();",
          "  console.log(data);",
          "} catch (err) {",
          "  console.log('name:', err.name);",
          "  console.log('message:', err.message);",
          "}"
        ],
        steps: [
          { line: 0, desc: 'بنبعت fetch لـ /page.html — هيرجع HTML', flow: 'req', state: 'active' },
          { line: 1, desc: 'نقرا الـ content-type من الـ headers', flow: 'res', state: 'active' },
          { line: 2, desc: 'content-type: text/html (مش JSON)', flow: 'res', state: 'good', value: 'content-type: text/html' },
          { line: 3, desc: 'بنحاول نعمل parse كـ JSON', flow: 'check', state: 'active' },
          { line: 4, desc: 'response.json() بتحاول JSON.parse()', flow: 'check', state: 'active', value: 'parsing…' },
          { line: 4, desc: 'الـ body بيبدأ بـ <!DOCTYPE → مش JSON', flow: 'result', state: 'bad', value: 'SyntaxError' },
          { line: 7, desc: 'الـ catch استقبل الـ error', flow: 'result', state: 'active' },
          { line: 8, desc: 'err.name = "SyntaxError"', flow: 'result', state: 'bad', value: 'name: SyntaxError' },
          { line: 9, desc: 'message: "Unexpected token <..."', flow: 'result', state: 'bad', value: 'Unexpected token < in JSON' }
        ]
      },
      'cors': {
        filename: 'cors.js',
        code: [
          "try {",
          "  const res = await fetch('https://api.other-domain.com/data', {",
          "    method: 'GET'",
          "  });",
          "  const data = await res.json();",
          "} catch (err) {",
          "  console.log('name:', err.name);",
          "  console.log('message:', err.message);",
          "  // ملاحظة: الـ Response مش بيوصل",
          "  // الـ browser بيمنع الطلب قبل ما يخرج",
          "}"
        ],
        steps: [
          { line: 1, desc: 'بنبعت request لدومين تاني (different origin)', flow: 'req', state: 'active', value: 'api.other-domain.com' },
          { line: 1, desc: 'الـ browser بيعمل preflight check الأول', flow: 'req', state: 'active' },
          { line: 1, desc: 'السيرفر مش باعت Access-Control-Allow-Origin', flow: 'req', state: 'bad', value: 'no CORS header' },
          { line: 1, desc: 'الـ browser رفض الطلب قبل ما يخرج من الأصل', flow: 'res', state: 'bad', value: '🚫 blocked' },
          { line: 1, desc: 'fetch بترمي TypeError — Promise rejected', flow: 'res', state: 'bad', value: 'TypeError' },
          { line: 5, desc: 'الـ catch استقبل الـ error', flow: 'check', state: 'active' },
          { line: 6, desc: 'err.name = "TypeError"', flow: 'result', state: 'bad', value: 'name: TypeError' },
          { line: 7, desc: 'err.message = "Failed to fetch"', flow: 'result', state: 'bad', value: 'Failed to fetch' },
          { line: 9, desc: 'ملاحظة مهمة: السيرفر مش عارف إن الطلب اتلغى', flow: 'result', state: 'bad', value: '⚠️ سيرفر مش عارف حاجة' }
        ]
      }
    };

    const ercCode = $('erc-code');
    const ercDesc = $('erc-desc');
    const ercCounter = $('erc-counter');
    const ercValues = $('erc-values');

    let ercState = null, ercTimer = null, ercPlaying = false;
    let ercScenario = '404';

    function ercBuild() {
      buildCodeDOM(ercCode, ERC_SCRIPTS[ercScenario].code);
      $('erc-filename').textContent = ERC_SCRIPTS[ercScenario].filename;
    }

    function ercRenderFlow(step) {
      document.querySelectorAll('.err-flow__node').forEach(n => n.classList.remove('active', 'good', 'bad'));
      document.querySelectorAll('.err-flow__arrow').forEach(a => a.classList.remove('active'));
      const map = { req: '[data-eflow="req"]', res: '[data-eflow="res"]', check: '[data-eflow="check"]', result: '[data-eflow="result"]' };
      const arrowMap = { res: '[data-arrow="1"]', check: '[data-arrow="2"]', result: '[data-arrow="3"]' };
      const order = ['req', 'res', 'check', 'result'];
      const curIdx = order.indexOf(step.flow);

      order.forEach((k, i) => {
        const el = document.querySelector(map[k]);
        if (i < curIdx) el.classList.add('good');
        if (i === curIdx) {
          if (step.state === 'bad') el.classList.add('bad');
          else if (step.state === 'good') el.classList.add('good');
          else el.classList.add('active');
        }
        if (i > 0 && i <= curIdx && curIdx > 0) {
          const ar = document.querySelector(arrowMap[k]);
          if (ar) ar.classList.add('active');
        }
      });
    }

    function ercRenderValues(step) {
      ercValues.innerHTML = '<b>' + (step.value || step.desc.slice(0, 60)) + '</b>';
    }

    async function ercGoto(idx, animate) {
      ercState.cancelled = false;
      ercState.index = idx;
      const step = ercState.steps[idx];
      ercCounter.textContent = (idx + 1) + ' / ' + ercState.steps.length;

      if (animate) {
        await ensureTyped(ercState, ercCode, ERC_SCRIPTS[ercScenario].code, step.line);
        if (ercState.cancelled) return;
      } else {
        while (ercState.typed <= step.line) {
          const el = ercCode.children[ercState.typed];
          el.textContent = ERC_SCRIPTS[ercScenario].code[ercState.typed];
          el.classList.add('typed');
          ercState.typed++;
        }
      }
      setActiveLine(ercCode, step.line);
      ercRenderFlow(step);
      ercRenderValues(step);
      ercDesc.textContent = step.desc;
      $('erc-prev').disabled = idx <= 0;
      $('erc-next').disabled = idx >= ercState.steps.length - 1;
    }

    async function ercNext() { if (ercPlaying || !ercState || ercState.index >= ercState.steps.length - 1) return; ercPlaying = true; await ercGoto(ercState.index + 1, true); ercPlaying = false; }
    async function ercPrev() { if (ercState && ercState.typing) { ercState.cancelled = true; await sleep(60); } if (!ercState || ercState.index <= 0) return; ercPlaying = false; ercStop(); await ercGoto(ercState.index - 1, false); }

    async function ercFirst(scenario) {
      if (scenario) {
        ercScenario = scenario;
        document.querySelectorAll('[data-err-cn]').forEach(c => c.classList.toggle('active', c.dataset.errCn === scenario));
      }
      ercState = { steps: ERC_SCRIPTS[ercScenario].steps, index: -1, typed: 0, cancelled: false };
      ercBuild();
      ercStop();
      await ercGoto(0, false);
    }

    function ercStart() {
      if (ercTimer) return;
      ercPlaying = true;
      $('erc-play').textContent = '⏸ وقّف';
      ercTimer = setTimeout(async function tick() {
        if (ercState.index >= ercState.steps.length - 1) { ercStop(); return; }
        await ercGoto(ercState.index + 1, true);
        if (ercTimer !== null && ercPlaying) ercTimer = setTimeout(tick, CINEMA_DELAY);
      }, 300);
    }

    function ercStop() {
      ercPlaying = false;
      $('erc-play').textContent = '▶ شغّل';
      if (ercTimer) { clearTimeout(ercTimer); ercTimer = null; }
    }

    document.querySelectorAll('[data-err-cn]').forEach(c => {
      c.addEventListener('click', () => { ercStop(); ercFirst(c.dataset.errCn); });
    });
    $('erc-next').onclick = () => { ercStop(); ercNext(); };
    $('erc-prev').onclick = () => { ercStop(); ercPrev(); };
    $('erc-reset').onclick = () => { ercStop(); ercFirst(); };
    $('erc-play').onclick = () => {
      if (ercPlaying) { ercStop(); return; }
      if (!ercState || ercState.index >= ercState.steps.length - 1) ercFirst().then(() => ercStart());
      else ercStart();
    };

    /* ═══════════ INIT ON DEMAND ═══════════ */
    let lcInit = false, exInit = false, pgcInit = false, ercInit = false;
    document.querySelectorAll('.subtab').forEach(st => {
      st.addEventListener('click', () => {
        const panel = st.closest('.panel').dataset.panel;
        const sub = st.dataset.sub;
        if (sub === 'cinema') {
          if (panel === 'lifecycle' && !lcInit) { lcInit = true; lcFirst().then(() => lcStart()); }
          if (panel === 'explorer' && !exInit) { exInit = true; exFirst().then(() => exStart()); }
          if (panel === 'playground' && !pgcInit) { pgcInit = true; pgcFirst().then(() => pgcStart()); }
          if (panel === 'errors' && !ercInit) { ercInit = true; ercFirst('404').then(() => ercStart()); }
        }
      });
    });
  `
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

const PROMISE_RUNNABLE: Runnable = {
  html: `
    <div class="app">

      <nav class="tabs" role="tablist">
        <button class="tab active" data-tab="preview">
          <span class="tab__icon">📺</span>
          <span>المعاينة</span>
        </button>
        <button class="tab" data-tab="cinema">
          <span class="tab__icon">🎬</span>
          <span>خطوة بخطوة</span>
        </button>
      </nav>

      <!-- ═══ PREVIEW ═══ -->
      <section class="panel active" data-panel="preview">
        <div class="controls">
          <div class="btns">
            <button id="pv-resolve" class="primary">resolve(100)</button>
            <button id="pv-reject">reject("error")</button>
            <button id="pv-reset">↺ رجّع</button>
          </div>
        </div>

        <div class="stage">
          <div class="promise-box pending" id="pv-box">
            <div class="promise-label">Promise</div>
            <div class="promise-state" id="pv-state">pending</div>
            <div class="promise-value" id="pv-value">—</div>
          </div>
        </div>

        <div class="stats">
          <div class="stat"><span class="stat-label">الحالة</span><span class="stat-value" id="pv-status">pending</span></div>
          <div class="stat"><span class="stat-label">القيمة</span><span class="stat-value" id="pv-val">—</span></div>
          <div class="stat"><span class="stat-label">الزمن</span><span class="stat-value" id="pv-time">0ms</span></div>
        </div>

        <div class="log" id="pv-log"></div>
      </section>

      <!-- ═══ CINEMA ═══ -->
      <section class="panel" data-panel="cinema">
        <div class="cinema-controls">
          <div class="btns">
            <button id="cn-prev">⏮</button>
            <button id="cn-play" class="primary">▶ شغّل</button>
            <button id="cn-next">⏭</button>
            <button id="cn-reset">↺</button>
          </div>
          <div class="step-info"><span id="cn-counter">0 / 0</span></div>
        </div>

        <div class="cinema-grid">
          <div class="panel-box code-panel">
            <div class="panel-box__head">
              <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
              <span class="panel-box__title">promise.js</span>
            </div>
            <div class="code-body" id="cn-code" dir="ltr"></div>
          </div>

          <div class="panel-box stage-panel">
            <div class="panel-box__head">
              <span class="panel-box__title">الرسم</span>
            </div>
            <div class="stage stage--cinema">
              <div class="promise-box pending" id="cn-box">
                <div class="promise-label">Promise</div>
                <div class="promise-state" id="cn-state">pending</div>
                <div class="promise-value" id="cn-value">—</div>
              </div>
            </div>
            <div class="values" id="cn-values"></div>
          </div>
        </div>

        <div class="op-desc" id="cn-desc">—</div>
      </section>

    </div>
  `,
  css: `
    * { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --bg: #0F1B2D;
      --bg-2: #0A1422;
      --bg-3: #152236;
      --border: #1E2D42;
      --border-2: #2A3846;
      --text: #E6EDF2;
      --text-2: #9DAEC2;
      --text-3: #6B7C92;
      --blue: #5B9DFF;
      --yellow: #F2B200;
      --red: #FF6B57;
      --green: #4CD08A;
    }

    body {
      font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif;
      background: var(--bg);
      color: var(--text);
      padding: 16px;
      min-height: 100vh;
      overflow-x: hidden;
    }

    ::-webkit-scrollbar { width: 10px; height: 10px; }
    ::-webkit-scrollbar-track { background: var(--bg-2); }
    ::-webkit-scrollbar-thumb {
      background: var(--border-2);
      border-radius: 6px;
      border: 2px solid var(--bg-2);
      background-clip: padding-box;
    }
    ::-webkit-scrollbar-thumb:hover { background: #4A5F7A; background-clip: padding-box; }

    .app { max-width: 1200px; margin-inline: auto; display: flex; flex-direction: column; gap: 14px; min-height: calc(100vh - 32px); }

    .tabs { display: flex; gap: 6px; padding: 6px; background: var(--bg-2); border: 1px solid var(--border); border-radius: 8px; width: fit-content; }
    .tab { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; font-family: inherit; font-size: 13px; font-weight: 600; color: var(--text-2); background: transparent; border: none; border-radius: 6px; cursor: pointer; transition: all 0.2s; white-space: nowrap; }
    .tab:hover { color: var(--text); }
    .tab.active { background: var(--bg-3); color: var(--text); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); }
    .tab__icon { font-size: 14px; }

    @media (max-width: 480px) {
      .tabs { width: 100%; }
      .tab { flex: 1; justify-content: center; padding: 10px 12px; font-size: 12px; }
    }

    .panel { display: none; flex-direction: column; gap: 14px; flex: 1; min-height: 0; }
    .panel.active { display: flex; }

    .controls, .cinema-controls { display: flex; flex-wrap: wrap; gap: 12px; align-items: flex-end; padding: 14px 16px; background: var(--bg-3); border: 1px solid var(--border); border-radius: 8px; }

    .btns { display: flex; gap: 6px; flex-wrap: wrap; }
    .btns button { padding: 8px 14px; font-family: inherit; font-size: 13px; font-weight: 500; color: var(--text); background: var(--bg-2); border: 1px solid var(--border-2); border-radius: 4px; cursor: pointer; transition: 0.15s; white-space: nowrap; }
    .btns button:hover:not(:disabled) { border-color: var(--green); color: var(--green); }
    .btns button.primary { background: var(--green); border-color: var(--green); color: var(--bg); font-weight: 600; }
    .btns button.primary:hover { opacity: 0.9; color: var(--bg); }
    .btns button:disabled { opacity: 0.35; cursor: not-allowed; }

    .step-info { display: inline-flex; align-items: center; padding: 8px 14px; background: var(--bg-2); border: 1px solid var(--border-2); border-radius: 4px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--yellow); font-weight: 600; min-width: 80px; justify-content: center; margin-inline-start: auto; }

    .stage {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px 20px;
      background: var(--bg-2);
      border: 1px solid var(--border);
      border-radius: 8px;
      min-height: 260px;
      flex: 1;
    }

    .stage--cinema { border-radius: 0; border: none; min-height: 0; }

    .promise-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding: 30px 50px;
      border: 3px solid var(--border-2);
      border-radius: 10px;
      background: var(--bg-3);
      transition: all 0.5s ease;
      min-width: 200px;
    }

    .promise-box.pending { border-color: var(--yellow); box-shadow: 0 0 30px rgba(242, 178, 0, 0.3); animation: pending-pulse 2s ease-in-out infinite; }
    .promise-box.resolved { border-color: var(--green); background: rgba(76, 208, 138, 0.1); box-shadow: 0 0 40px rgba(76, 208, 138, 0.4); }
    .promise-box.rejected { border-color: var(--red); background: rgba(255, 107, 87, 0.1); box-shadow: 0 0 40px rgba(255, 107, 87, 0.4); }

    @keyframes pending-pulse {
      0%, 100% { box-shadow: 0 0 30px rgba(242, 178, 0, 0.3); }
      50% { box-shadow: 0 0 50px rgba(242, 178, 0, 0.5); }
    }

    .promise-label { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--text-3); letter-spacing: 0.15em; text-transform: uppercase; }
    .promise-state { font-family: 'IBM Plex Mono', monospace; font-size: 26px; font-weight: 700; color: var(--text-3); transition: color 0.3s; }
    .promise-box.pending .promise-state { color: var(--yellow); }
    .promise-box.resolved .promise-state { color: var(--green); }
    .promise-box.rejected .promise-state { color: var(--red); }
    .promise-value { font-family: 'IBM Plex Mono', monospace; font-size: 14px; color: var(--text-2); min-height: 20px; }

    .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
    .stat { padding: 12px 14px; background: var(--bg-3); border: 1px solid var(--border); border-radius: 6px; display: flex; flex-direction: column; gap: 4px; }
    .stat-label { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--text-3); letter-spacing: 0.08em; text-transform: uppercase; }
    .stat-value { font-family: 'IBM Plex Mono', monospace; font-size: 15px; font-weight: 600; color: var(--green); }

    .log { padding: 14px 16px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; line-height: 1.8; color: var(--text-2); background: var(--bg-2); border: 1px solid var(--border); border-radius: 8px; min-height: 120px; max-height: 200px; overflow-y: auto; white-space: pre-wrap; }
    .log__ok { color: var(--green); }
    .log__info { color: var(--blue); }
    .log__err { color: var(--red); }

    .cinema-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 14px;
      flex: 1;
      min-height: 0;
      height: clamp(400px, 55vh, 520px);
    }

    .panel-box { display: flex; flex-direction: column; background: var(--bg-2); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; min-height: 0; }
    .panel-box__head { display: flex; align-items: center; gap: 6px; padding: 10px 14px; background: var(--bg-3); border-bottom: 1px solid var(--border); flex-shrink: 0; }
    .panel-box__title { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--text-3); letter-spacing: 0.08em; text-transform: uppercase; margin-inline-start: 6px; }

    .dot { width: 9px; height: 9px; border-radius: 50%; }
    .dot.red { background: var(--red); }
    .dot.yellow { background: var(--yellow); }
    .dot.green { background: var(--green); }

    .code-body { flex: 1; padding: 12px 0; font-family: 'IBM Plex Mono', monospace; font-size: 12px; line-height: 1.7; overflow: auto; direction: ltr; text-align: left; white-space: pre; min-height: 0; }

    .code-line { display: block; padding: 1px 14px 1px 48px; position: relative; min-height: 20px; color: #3A4A5F; transition: color 0.2s, background 0.2s; }
    .code-line::before { content: attr(data-ln); position: absolute; left: 8px; top: 1px; width: 30px; text-align: right; font-size: 10px; color: #2A3846; user-select: none; }
    .code-line.typed { color: var(--text-2); }
    .code-line.typed::before { color: #4A5F7A; }
    .code-line.typing { color: var(--text); background: rgba(76, 208, 138, 0.08); }
    .code-line.typing::after { content: '▌'; color: var(--green); margin-left: 1px; animation: caret 0.55s steps(2) infinite; }
    @keyframes caret { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }

    .code-line.active { color: var(--yellow); background: rgba(242, 178, 0, 0.12); border-left: 3px solid var(--yellow); padding-left: 45px; }
    .code-line.active::before { color: var(--yellow); font-weight: 700; }

    .values { padding: 10px 14px; border-top: 1px solid var(--border); background: var(--bg-3); font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--text-3); display: flex; flex-wrap: wrap; gap: 12px; min-height: 38px; align-items: center; flex-shrink: 0; }
    .values b { color: var(--yellow); }

    .op-desc { padding: 12px 16px; background: var(--bg-3); border: 1px solid var(--border); border-left: 3px solid var(--green); border-radius: 6px; font-size: 13px; color: var(--text); min-height: 44px; display: flex; align-items: center; line-height: 1.6; flex-shrink: 0; }

    @media (max-width: 860px) {
      .cinema-grid { grid-template-columns: 1fr; grid-template-rows: minmax(200px, 1fr) minmax(200px, 1fr); height: auto; min-height: 500px; }
    }

    @media (max-width: 560px) {
      body { padding: 10px; }
      .app { min-height: calc(100vh - 20px); }
      .controls, .cinema-controls { padding: 10px 12px; gap: 8px; }
      .btns button { padding: 7px 11px; font-size: 12px; }
      .stat-value { font-size: 13px; }
      .stat { padding: 10px 12px; }
      .code-body { font-size: 11px; }
      .promise-box { padding: 20px 30px; min-width: 160px; }
      .promise-state { font-size: 22px; }
      .cinema-grid { min-height: 460px; }
    }
  `,
  js: `
    const $ = id => document.getElementById(id);

    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const name = tab.dataset.tab;
        document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t === tab));
        document.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.dataset.panel === name));
        if (name === 'cinema' && !cinemaInit) {
          cinemaInit = true;
          cnFirst();
        }
      });
    });

    /* ═══════════════ PREVIEW ═══════════════ */
    const pvBox = $('pv-box');
    const pvState = $('pv-state');
    const pvVal = $('pv-value');
    const pvStatus = $('pv-status');
    const pvValStat = $('pv-val');
    const pvTime = $('pv-time');
    const pvLog = $('pv-log');

    let pvSettled = false;
    let pvStart = 0;
    let pvTimer = null;
    let pvResolveFn = null;
    let pvRejectFn = null;

    function pvAddLog(text, cls) {
      const line = document.createElement('div');
      if (cls) line.className = 'log__' + cls;
      line.textContent = text;
      pvLog.appendChild(line);
      pvLog.scrollTop = pvLog.scrollHeight;
    }

    function pvReset() {
      pvBox.classList.remove('resolved', 'rejected');
      pvBox.classList.add('pending');
      pvState.textContent = 'pending';
      pvVal.textContent = '—';
      pvStatus.textContent = 'pending';
      pvValStat.textContent = '—';
      pvTime.textContent = '0ms';
      pvLog.innerHTML = '';
      pvSettled = false;
      if (pvTimer) clearInterval(pvTimer);
      pvStart = performance.now();

      pvTimer = setInterval(() => {
        if (!pvSettled) pvTime.textContent = Math.round(performance.now() - pvStart) + 'ms';
      }, 50);

      new Promise((res, rej) => { pvResolveFn = res; pvRejectFn = rej; })
        .then(v => {
          pvSettled = true;
          pvBox.classList.remove('pending');
          pvBox.classList.add('resolved');
          pvState.textContent = 'fulfilled';
          pvStatus.textContent = 'fulfilled';
          pvVal.textContent = JSON.stringify(v);
          pvValStat.textContent = JSON.stringify(v);
          pvAddLog('✓ then() استلم القيمة: ' + JSON.stringify(v), 'ok');
        })
        .catch(e => {
          pvSettled = true;
          pvBox.classList.remove('pending');
          pvBox.classList.add('rejected');
          pvState.textContent = 'rejected';
          pvStatus.textContent = 'rejected';
          pvVal.textContent = JSON.stringify(e);
          pvValStat.textContent = JSON.stringify(e);
          pvAddLog('✕ catch() استلم الخطأ: ' + JSON.stringify(e), 'err');
        })
        .finally(() => {
          pvAddLog('finally() اشتغل', 'info');
          clearInterval(pvTimer);
        });
    }

    $('pv-resolve').onclick = () => { if (!pvSettled) { pvAddLog('resolve(100) اتنفذ', 'info'); pvResolveFn(100); } };
    $('pv-reject').onclick = () => { if (!pvSettled) { pvAddLog('reject("error") اتنفذ', 'err'); pvRejectFn('error'); } };
    $('pv-reset').onclick = pvReset;

    pvReset();

    /* ═══════════════ CINEMA ═══════════════ */
    const CODE = [
      'const promise = new Promise((resolve, reject) => {',
      '  console.log("executor runs immediately");',
      '  const success = true;',
      '  if (success) {',
      '    setTimeout(() => resolve(100), 500);',
      '  } else {',
      '    reject(new Error("failed"));',
      '  }',
      '});',
      '',
      'promise',
      '  .then(value => {',
      '    console.log("success:", value);',
      '    return value * 2;',
      '  })',
      '  .then(doubled => {',
      '    console.log("doubled:", doubled);',
      '  })',
      '  .catch(error => {',
      '    console.error("error:", error);',
      '  })',
      '  .finally(() => {',
      '    console.log("done either way");',
      '  });'
    ];

    const cnCode = $('cn-code');
    const cnBox = $('cn-box');
    const cnState = $('cn-state');
    const cnValue = $('cn-value');
    const cnValues = $('cn-values');
    const cnDesc = $('cn-desc');
    const cnCounter = $('cn-counter');
    const cnPrev = $('cn-prev');
    const cnPlay = $('cn-play');
    const cnNext = $('cn-next');
    const cnReset = $('cn-reset');

    let cinemaInit = false;
    let cnSteps = [];
    let cnIndex = -1;
    let cnTyped = 0;
    let cnTimer = null;
    let cnPlaying = false;
    let cnTyping = false;
    let cnCancelled = false;
    let cnDelay = 3000;

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    function cnBuildSteps() {
      return [
        { line: 0, desc: 'new Promise() — بنعمل Promise، الحالة pending', state: 'pending', value: '—' },
        { line: 1, desc: 'الـ executor بيشتغل فورًا', state: 'pending', value: '—' },
        { line: 2, desc: 'success = true — بنحدد المسار', state: 'pending', value: '—' },
        { line: 3, desc: 'if (success) — الشرط اتحقق', state: 'pending', value: '—' },
        { line: 4, desc: 'setTimeout — محاكاة عملية async (500ms)', state: 'pending', value: '—' },
        { line: 4, desc: 'resolve(100) اتنفذ', state: 'resolved', value: '100' },
        { line: 11, desc: 'بنستدعي .then()', state: 'resolved', value: '100' },
        { line: 12, desc: '.then #1 استلم القيمة 100', state: 'resolved', value: '100' },
        { line: 13, desc: 'بنرجّع value * 2 = 200', state: 'resolved', value: '200' },
        { line: 15, desc: '.then #2 استلم 200', state: 'resolved', value: '200' },
        { line: 16, desc: 'بنطبع doubled = 200', state: 'resolved', value: '200' },
        { line: 21, desc: '.finally() اشتغل — دايماً', state: 'resolved', value: '200' }
      ];
    }

    function cnBuildCodeDOM() {
      cnCode.innerHTML = '';
      CODE.forEach((_, i) => {
        const s = document.createElement('span');
        s.className = 'code-line';
        s.dataset.ln = String(i + 1);
        cnCode.appendChild(s);
      });
    }

    async function cnTypeLine(idx) {
      const el = cnCode.children[idx];
      if (!el || el.classList.contains('typed')) return;
      el.classList.add('typing');
      const text = CODE[idx];
      for (let i = 0; i < text.length; i++) {
        if (cnCancelled) { el.classList.remove('typing'); return; }
        el.textContent = text.slice(0, i + 1);
        await sleep(text[i] === ' ' ? 6 : 14);
      }
      el.classList.remove('typing');
      el.classList.add('typed');
    }

    async function cnEnsureTyped(target) {
      while (cnTyped <= target) {
        cnTyping = true;
        await cnTypeLine(cnTyped);
        cnTyping = false;
        if (cnCancelled) return;
        cnTyped++;
      }
    }

    function cnSetActive(idx) {
      cnCode.querySelectorAll('.code-line').forEach((el, i) => el.classList.toggle('active', i === idx));
      const a = cnCode.querySelector('.code-line.active');
      if (a) {
        const top = a.offsetTop;
        const c = cnCode;
        if (top < c.scrollTop || top + 24 > c.scrollTop + c.clientHeight) {
          c.scrollTo({ top: top - c.clientHeight / 2, behavior: 'smooth' });
        }
      }
    }

    function cnRenderStage(step) {
      cnBox.classList.remove('pending', 'resolved', 'rejected');
      cnBox.classList.add(step.state);
      cnState.textContent = step.state === 'resolved' ? 'fulfilled' : step.state;
      cnValue.textContent = step.value;
    }

    function cnRenderValues(step) {
      cnValues.innerHTML = 'state = <b>' + step.state + '</b> · value = <b>' + step.value + '</b>';
    }

    async function cnGoto(idx, animate) {
      cnCancelled = false;
      cnIndex = idx;
      const step = cnSteps[idx];
      cnCounter.textContent = (idx + 1) + ' / ' + cnSteps.length;

      if (animate) {
        await cnEnsureTyped(step.line);
        if (cnCancelled) return;
      } else {
        while (cnTyped <= step.line) {
          const el = cnCode.children[cnTyped];
          el.textContent = CODE[cnTyped];
          el.classList.add('typed');
          cnTyped++;
        }
      }

      cnSetActive(step.line);
      cnRenderStage(step);
      cnRenderValues(step);
      cnDesc.textContent = step.desc;

      cnPrev.disabled = idx <= 0;
      cnNext.disabled = idx >= cnSteps.length - 1;
    }

    async function cnNextFn() {
      if (cnPlaying) return;
      if (cnIndex >= cnSteps.length - 1) return;
      cnPlaying = true;
      await cnGoto(cnIndex + 1, true);
      cnPlaying = false;
    }

    async function cnPrevFn() {
      if (cnTyping) { cnCancelled = true; await sleep(80); }
      if (cnIndex <= 0) return;
      cnPlaying = false;
      cnStop();
      await cnGoto(cnIndex - 1, false);
    }

    async function cnFirst() {
      cnSteps = cnBuildSteps();
      cnCancelled = false;
      cnTyped = 0;
      cnIndex = -1;
      cnBuildCodeDOM();
      cnStop();
      await cnGoto(0, false);
    }

    function cnStart() {
      if (cnTimer) return;
      cnPlaying = true;
      cnPlay.textContent = '⏸ وقّف';
      cnTimer = setTimeout(async function tick() {
        if (cnIndex >= cnSteps.length - 1) { cnStop(); return; }
        await cnGoto(cnIndex + 1, true);
        if (cnTimer !== null && cnPlaying) cnTimer = setTimeout(tick, cnDelay);
      }, 300);
    }

    function cnStop() {
      cnPlaying = false;
      cnPlay.textContent = '▶ شغّل';
      if (cnTimer) { clearTimeout(cnTimer); cnTimer = null; }
    }

    cnNext.onclick = () => { cnStop(); cnNextFn(); };
    cnPrev.onclick = () => { cnStop(); cnPrevFn(); };
    cnReset.onclick = () => { cnStop(); cnFirst(); };
    cnPlay.onclick = () => {
      if (cnPlaying) { cnStop(); return; }
      if (cnIndex >= cnSteps.length - 1) cnFirst().then(() => cnStart());
      else cnStart();
    };
  `
};

// ═══════════════════════════════════════════════════════════════════
// Binary Search — الـ Visualizer الكامل
// ═══════════════════════════════════════════════════════════════════

const BINARY_SEARCH_RUNNABLE: Runnable = {
  html: `
    <div class="app">
      <nav class="tabs" role="tablist">
        <button class="tab active" data-tab="preview"><span class="tab__icon">📺</span><span>المعاينة</span></button>
        <button class="tab" data-tab="cinema"><span class="tab__icon">🎬</span><span>خطوة بخطوة</span></button>
      </nav>

      <section class="panel active" data-panel="preview">
        <div class="controls">
          <div class="ctrl-group"><label>array (sorted)</label><input id="bs-arr" type="text" value="1,3,5,7,9,11,13,15,17" dir="ltr"></div>
          <div class="ctrl-group"><label>target</label><input id="bs-target" type="text" value="7" dir="ltr"></div>
          <div class="btns">
            <button id="bs-play" class="primary">▶ شغّل</button>
            <button id="bs-step">⏭ خطوة</button>
            <button id="bs-reset">↺ رجّع</button>
          </div>
        </div>
        <div class="stage stage--cells" id="bs-stage" dir="ltr"></div>
        <div class="stats">
          <div class="stat"><span class="stat-label">مقارنات</span><span class="stat-value" id="bs-comp">0</span></div>
          <div class="stat"><span class="stat-label">left / right</span><span class="stat-value" id="bs-lr">—</span></div>
          <div class="stat"><span class="stat-label">النتيجة</span><span class="stat-value" id="bs-result">—</span></div>
        </div>
        <div class="log" id="bs-log"></div>
      </section>

      <section class="panel" data-panel="cinema">
        <div class="cinema-controls">
          <div class="cinema-arr"><label>array</label><input id="cnbs-arr" type="text" value="1,3,5,7,9,11,13,15,17" dir="ltr"></div>
          <div class="cinema-arr"><label>target</label><input id="cnbs-target" type="text" value="7" dir="ltr"></div>
          <div class="btns">
            <button id="cnbs-prev">⏮</button>
            <button id="cnbs-play" class="primary">▶ شغّل</button>
            <button id="cnbs-next">⏭</button>
            <button id="cnbs-reset">↺</button>
          </div>
          <div class="step-info"><span id="cnbs-counter">0 / 0</span></div>
        </div>
        <div class="cinema-grid">
          <div class="panel-box code-panel">
            <div class="panel-box__head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span class="panel-box__title">binary-search.js</span></div>
            <div class="code-body" id="cnbs-code" dir="ltr"></div>
          </div>
          <div class="panel-box stage-panel">
            <div class="panel-box__head"><span class="panel-box__title">الرسم</span></div>
            <div class="stage stage--cells stage--cinema" id="cnbs-stage" dir="ltr"></div>
            <div class="values" id="cnbs-values"></div>
          </div>
        </div>
        <div class="op-desc" id="cnbs-desc">—</div>
      </section>
    </div>
  `,
  css: `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    :root {
      --bg:#0F1B2D; --bg-2:#0A1422; --bg-3:#152236; --border:#1E2D42; --border-2:#2A3846;
      --text:#E6EDF2; --text-2:#9DAEC2; --text-3:#6B7C92;
      --blue:#5B9DFF; --yellow:#F2B200; --red:#FF6B57; --green:#4CD08A;
    }
    body { font-family:'IBM Plex Sans Arabic',system-ui,sans-serif; background:var(--bg); color:var(--text); padding:16px; min-height:100vh; overflow-x:hidden; }
    ::-webkit-scrollbar { width:10px; height:10px; }
    ::-webkit-scrollbar-track { background:var(--bg-2); }
    ::-webkit-scrollbar-thumb { background:var(--border-2); border-radius:6px; border:2px solid var(--bg-2); background-clip:padding-box; }
    ::-webkit-scrollbar-thumb:hover { background:#4A5F7A; background-clip:padding-box; }
    .app { max-width:1200px; margin-inline:auto; display:flex; flex-direction:column; gap:14px; min-height:calc(100vh - 32px); }

    .tabs { display:flex; gap:6px; padding:6px; background:var(--bg-2); border:1px solid var(--border); border-radius:8px; width:fit-content; }
    .tab { display:inline-flex; align-items:center; gap:8px; padding:10px 20px; font-family:inherit; font-size:13px; font-weight:600; color:var(--text-2); background:transparent; border:none; border-radius:6px; cursor:pointer; transition:all .2s; white-space:nowrap; }
    .tab:hover { color:var(--text); }
    .tab.active { background:var(--bg-3); color:var(--text); box-shadow:0 2px 8px rgba(0,0,0,.3); }
    .tab__icon { font-size:14px; }
    @media (max-width:480px) { .tabs { width:100%; } .tab { flex:1; justify-content:center; padding:10px 12px; font-size:12px; } }

    .panel { display:none; flex-direction:column; gap:14px; flex:1; min-height:0; }
    .panel.active { display:flex; }

    .controls, .cinema-controls { display:flex; flex-wrap:wrap; gap:12px; align-items:flex-end; padding:14px 16px; background:var(--bg-3); border:1px solid var(--border); border-radius:8px; }
    .ctrl-group, .cinema-arr { display:flex; flex-direction:column; gap:4px; flex:1; min-width:160px; }
    .ctrl-group label, .cinema-arr label { font-family:'IBM Plex Mono',monospace; font-size:10px; color:var(--text-3); letter-spacing:.08em; text-transform:uppercase; }
    .ctrl-group input, .cinema-arr input { padding:8px 12px; font-family:'IBM Plex Mono',monospace; font-size:13px; color:var(--text); background:var(--bg-2); border:1px solid var(--border); border-radius:4px; outline:none; direction:ltr; }
    .ctrl-group input:focus, .cinema-arr input:focus { border-color:var(--blue); }

    .btns { display:flex; gap:6px; flex-wrap:wrap; }
    .btns button { padding:8px 14px; font-family:inherit; font-size:13px; font-weight:500; color:var(--text); background:var(--bg-2); border:1px solid var(--border-2); border-radius:4px; cursor:pointer; transition:.15s; white-space:nowrap; }
    .btns button:hover:not(:disabled) { border-color:var(--blue); color:var(--blue); }
    .btns button.primary { background:var(--yellow); border-color:var(--yellow); color:#0F1B2D; font-weight:600; }
    .btns button.primary:hover { opacity:.9; color:#0F1B2D; }
    .btns button:disabled { opacity:.35; cursor:not-allowed; }
    .step-info { display:inline-flex; align-items:center; padding:8px 14px; background:var(--bg-2); border:1px solid var(--border-2); border-radius:4px; font-family:'IBM Plex Mono',monospace; font-size:12px; color:var(--yellow); font-weight:600; min-width:80px; justify-content:center; }

    .stage { display:flex; justify-content:center; align-items:flex-end; gap:8px; padding:24px 20px; background:var(--bg-2); border:1px solid var(--border); border-radius:8px; min-height:300px; direction:ltr; overflow-x:auto; overflow-y:hidden; flex:1; }
    .stage--cells { align-items:center; flex-wrap:wrap; }
    .stage--cinema { border-radius:0; border:none; padding:20px 16px; min-height:0; }

    .cell { position:relative; display:flex; flex-direction:column; align-items:center; width:46px; flex-shrink:0; }
    .cell__value { display:flex; align-items:center; justify-content:center; width:46px; height:46px; font-family:'IBM Plex Mono',monospace; font-size:14px; font-weight:600; color:var(--text); background:var(--bg-3); border:1px solid var(--border); border-radius:4px; transition:all .3s ease; }
    .cell__index { margin-top:5px; font-family:'IBM Plex Mono',monospace; font-size:10px; color:var(--text-3); }
    .cell.in-range .cell__value { border-color:var(--blue); color:var(--blue); }
    .cell.excluded .cell__value { opacity:.22; text-decoration:line-through; }
    .cell.mid .cell__value { background:var(--blue); color:var(--bg); border-color:var(--blue); box-shadow:0 0 16px rgba(91,157,255,.6); }
    .cell.found .cell__value { background:var(--green); color:var(--bg); border-color:var(--green); box-shadow:0 0 20px rgba(76,208,138,.7); }
    .cell .pointer { position:absolute; top:-22px; font-family:'IBM Plex Mono',monospace; font-size:10px; font-weight:700; letter-spacing:.05em; pointer-events:none; }
    .cell .pointer--left { left:0; color:var(--red); }
    .cell .pointer--right { right:0; color:var(--red); }
    .cell .pointer--mid { left:50%; transform:translateX(-50%); color:var(--blue); }

    .stats { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; }
    .stat { padding:12px 14px; background:var(--bg-3); border:1px solid var(--border); border-radius:6px; display:flex; flex-direction:column; gap:4px; }
    .stat-label { font-family:'IBM Plex Mono',monospace; font-size:10px; color:var(--text-3); letter-spacing:.08em; text-transform:uppercase; }
    .stat-value { font-family:'IBM Plex Mono',monospace; font-size:15px; font-weight:600; color:var(--blue); }

    .log { padding:14px 16px; font-family:'IBM Plex Mono',monospace; font-size:12px; line-height:1.8; color:var(--text-2); background:var(--bg-2); border:1px solid var(--border); border-radius:8px; min-height:120px; max-height:200px; overflow-y:auto; white-space:pre-wrap; }
    .log__ok { color:var(--green); }
    .log__info { color:var(--blue); }
    .log__warn { color:var(--yellow); }
    .log__err { color:var(--red); }

    .cinema-grid { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1.15fr); gap:14px; flex:1; min-height:0; height:clamp(400px,55vh,520px); }
    .panel-box { display:flex; flex-direction:column; background:var(--bg-2); border:1px solid var(--border); border-radius:8px; overflow:hidden; min-height:0; }
    .panel-box__head { display:flex; align-items:center; gap:6px; padding:10px 14px; background:var(--bg-3); border-bottom:1px solid var(--border); flex-shrink:0; }
    .panel-box__title { font-family:'IBM Plex Mono',monospace; font-size:11px; color:var(--text-3); letter-spacing:.08em; text-transform:uppercase; margin-inline-start:6px; }
    .dot { width:9px; height:9px; border-radius:50%; }
    .dot.red { background:var(--red); }
    .dot.yellow { background:var(--yellow); }
    .dot.green { background:var(--green); }

    .code-body { flex:1; padding:12px 0; font-family:'IBM Plex Mono',monospace; font-size:12px; line-height:1.7; overflow:auto; direction:ltr; text-align:left; white-space:pre; min-height:0; }
    .code-line { display:block; padding:1px 14px 1px 48px; position:relative; min-height:20px; color:#3A4A5F; transition:color .2s, background .2s; }
    .code-line::before { content:attr(data-ln); position:absolute; left:8px; top:1px; width:30px; text-align:right; font-size:10px; color:#2A3846; user-select:none; }
    .code-line.typed { color:var(--text-2); }
    .code-line.typed::before { color:#4A5F7A; }
    .code-line.typing { color:var(--text); background:rgba(91,157,255,.08); }
    .code-line.typing::after { content:'▌'; color:var(--blue); margin-left:1px; animation:caret .55s steps(2) infinite; }
    @keyframes caret { 0%,50% { opacity:1; } 51%,100% { opacity:0; } }
    .code-line.active { color:var(--yellow); background:rgba(242,178,0,.12); border-left:3px solid var(--yellow); padding-left:45px; }
    .code-line.active::before { color:var(--yellow); font-weight:700; }

    .values { padding:10px 14px; border-top:1px solid var(--border); background:var(--bg-3); font-family:'IBM Plex Mono',monospace; font-size:11px; color:var(--text-3); display:flex; flex-wrap:wrap; gap:12px; min-height:38px; align-items:center; flex-shrink:0; }
    .values b { color:var(--yellow); }

    .op-desc { padding:12px 16px; background:var(--bg-3); border:1px solid var(--border); border-left:3px solid var(--blue); border-radius:6px; font-size:13px; color:var(--text); min-height:44px; display:flex; align-items:center; line-height:1.6; flex-shrink:0; }

    @media (max-width:860px) { .cinema-grid { grid-template-columns:1fr; grid-template-rows:minmax(220px,1fr) minmax(220px,1fr); height:auto; min-height:520px; } }
    @media (max-width:560px) {
      body { padding:10px; }
      .app { min-height:calc(100vh - 20px); }
      .controls, .cinema-controls { padding:10px 12px; gap:8px; }
      .ctrl-group, .cinema-arr { min-width:100%; }
      .btns button { padding:7px 11px; font-size:12px; }
      .code-body { font-size:11px; }
      .cell__value { width:38px; height:38px; font-size:12px; }
      .cell { width:38px; }
    }
  `,
  js: `
    const $ = id => document.getElementById(id);
    let cinemaInit = false;

    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const name = tab.dataset.tab;
        document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t === tab));
        document.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.dataset.panel === name));
        if (name === 'cinema' && !cinemaInit) { cinemaInit = true; initBsCinema(); }
      });
    });

    /* ═══════ PREVIEW ═══════ */
    const bsStage = $('bs-stage');
    const bsLogEl = $('bs-log');
    const bsCompEl = $('bs-comp');
    const bsLrEl = $('bs-lr');
    const bsResultEl = $('bs-result');
    const bsArr = $('bs-arr');
    const bsTarget = $('bs-target');

    let bsState = null, bsTimer = null, bsPlaying = false;

    function bsParse() {
      const arr = bsArr.value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
      const target = Number(bsTarget.value);
      return { arr, target };
    }

    function bsBuildSteps(arr, target) {
      const steps = [];
      let left = 0, right = arr.length - 1;
      steps.push({ left, right, mid: null, found: null, done: false, desc: 'left = 0، right = ' + right });
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        steps.push({ left, right, mid, found: null, done: false, desc: 'mid = ' + mid + ' → arr[mid] = ' + arr[mid] });
        if (arr[mid] === target) {
          steps.push({ left, right, mid, found: mid, done: true, desc: 'لقيناه في index ' + mid + '!' });
          return steps;
        }
        if (arr[mid] < target) {
          left = mid + 1;
          steps.push({ left, right, mid, found: null, done: false, desc: 'arr[mid] < target → left = ' + left });
        } else {
          right = mid - 1;
          steps.push({ left, right, mid, found: null, done: false, desc: 'arr[mid] > target → right = ' + right });
        }
      }
      steps.push({ left, right, mid: null, found: -1, done: true, desc: 'مش موجود' });
      return steps;
    }

    function bsAddLog(text, cls) {
      const line = document.createElement('div');
      if (cls) line.className = 'log__' + cls;
      line.textContent = text;
      bsLogEl.appendChild(line);
      bsLogEl.scrollTop = bsLogEl.scrollHeight;
    }

    function bsInit() {
      const { arr, target } = bsParse();
      bsState = { arr, target, steps: bsBuildSteps(arr, target), stepIndex: 0, comp: 0 };
      bsRender();
      bsLogEl.innerHTML = '';
      bsAddLog('بنبحث عن ' + target + ' في مصفوفة بـ ' + arr.length + ' عنصر', 'info');
    }

    function bsRender() {
      if (!bsState) return;
      const s = bsState.steps[bsState.stepIndex];
      bsStage.innerHTML = '';

      for (let i = 0; i < bsState.arr.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        const inRange = i >= s.left && i <= s.right && !s.done;
        const excluded = !inRange && !s.done;
        if (inRange) cell.classList.add('in-range');
        if (excluded) cell.classList.add('excluded');
        if (i === s.mid && s.found === null) cell.classList.add('mid');
        if (s.found !== null && i === s.found) cell.classList.add('found');

        if (i === s.left && !s.done) {
          const p = document.createElement('span');
          p.className = 'pointer pointer--left';
          p.textContent = 'L';
          cell.appendChild(p);
        }
        if (i === s.right && !s.done) {
          const p = document.createElement('span');
          p.className = 'pointer pointer--right';
          p.textContent = 'R';
          cell.appendChild(p);
        }
        if (i === s.mid && s.found === null) {
          const p = document.createElement('span');
          p.className = 'pointer pointer--mid';
          p.textContent = 'M';
          cell.appendChild(p);
        }

        const v = document.createElement('div');
        v.className = 'cell__value';
        v.textContent = bsState.arr[i];
        const idx = document.createElement('div');
        idx.className = 'cell__index';
        idx.textContent = i;
        cell.appendChild(v);
        cell.appendChild(idx);
        bsStage.appendChild(cell);
      }

      bsCompEl.textContent = bsState.comp;
      bsLrEl.textContent = 'L=' + s.left + ' / R=' + s.right;
      bsResultEl.textContent = s.done ? (s.found >= 0 ? 'index ' + s.found : 'مش موجود') : '—';
      $('bs-play').textContent = bsPlaying ? '⏸ وقّف' : '▶ شغّل';
    }

    function bsStep() {
      if (!bsState || bsState.stepIndex >= bsState.steps.length - 1) return false;
      bsState.stepIndex++;
      bsState.comp++;
      bsAddLog(bsState.steps[bsState.stepIndex].desc);
      bsRender();
      return bsState.stepIndex < bsState.steps.length - 1;
    }

    function bsPlay() {
      if (bsPlaying) { bsStop(); return; }
      if (bsState.stepIndex >= bsState.steps.length - 1) bsInit();
      bsPlaying = true;
      bsRender();
      bsTimer = setInterval(() => { if (!bsStep()) bsStop(); }, 800);
    }

    function bsStop() {
      bsPlaying = false;
      if (bsTimer) { clearInterval(bsTimer); bsTimer = null; }
      bsRender();
    }

    $('bs-play').onclick = bsPlay;
    $('bs-step').onclick = () => { bsStop(); bsStep(); };
    $('bs-reset').onclick = () => { bsStop(); bsInit(); };
    bsArr.addEventListener('change', () => { bsStop(); bsInit(); });
    bsTarget.addEventListener('change', () => { bsStop(); bsInit(); });
    bsInit();

    /* ═══════ CINEMA ═══════ */
    const BS_CODE = [
      'function binarySearch(arr, target) {',
      '  let left = 0;',
      '  let right = arr.length - 1;',
      '  while (left <= right) {',
      '    const mid = Math.floor((left + right) / 2);',
      '    if (arr[mid] === target) return mid;',
      '    if (arr[mid] < target) left = mid + 1;',
      '    else right = mid - 1;',
      '  }',
      '  return -1;',
      '}'
    ];

    const cnbsCode = $('cnbs-code');
    const cnbsStage = $('cnbs-stage');
    const cnbsValues = $('cnbs-values');
    const cnbsDesc = $('cnbs-desc');
    const cnbsCounter = $('cnbs-counter');
    const cnbsArr = $('cnbs-arr');
    const cnbsTarget = $('cnbs-target');
    const cnbsPrev = $('cnbs-prev');
    const cnbsPlay = $('cnbs-play');
    const cnbsNext = $('cnbs-next');
    const cnbsReset = $('cnbs-reset');

    let cnbsSteps = [], cnbsIndex = -1, cnbsTyped = 0;
    let cnbsTimer = null, cnbsPlaying = false, cnbsTyping = false, cnbsCancelled = false;
    const cnbsDelay = 3000;
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    function cnbsBuildSteps(arr, target) {
      const steps = [];
      let left = 0, right = arr.length - 1;
      steps.push({ line: 1, desc: 'left = 0', arr, left, right, mid: null, found: null, state: 'init' });
      steps.push({ line: 2, desc: 'right = ' + right, arr, left, right, mid: null, found: null, state: 'init' });
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        steps.push({ line: 4, desc: 'while: left (' + left + ') <= right (' + right + ') ✓', arr, left, right, mid: null, found: null, state: 'loop' });
        steps.push({ line: 4, desc: 'mid = floor((' + left + ' + ' + right + ') / 2) = ' + mid, arr, left, right, mid, found: null, state: 'mid' });
        steps.push({ line: 5, desc: 'arr[' + mid + '] = ' + arr[mid] + ' === ' + target + ' ؟', arr, left, right, mid, found: null, state: 'compare' });
        if (arr[mid] === target) {
          steps.push({ line: 5, desc: 'لقيناه! return ' + mid, arr, left, right, mid, found: mid, state: 'found' });
          return steps;
        }
        if (arr[mid] < target) {
          steps.push({ line: 6, desc: arr[mid] + ' < ' + target + ' → left = mid + 1 = ' + (mid + 1), arr, left: mid + 1, right, mid, found: null, state: 'move-left' });
          left = mid + 1;
        } else {
          steps.push({ line: 7, desc: arr[mid] + ' > ' + target + ' → right = mid - 1 = ' + (mid - 1), arr, left, right: mid - 1, mid, found: null, state: 'move-right' });
          right = mid - 1;
        }
      }
      steps.push({ line: 9, desc: 'left > right — خلصت المصفوفة، مش موجود. return -1', arr, left, right, mid: null, found: -1, state: 'end' });
      return steps;
    }

    function cnbsBuildCodeDOM() {
      cnbsCode.innerHTML = '';
      BS_CODE.forEach((_, i) => {
        const s = document.createElement('span');
        s.className = 'code-line';
        s.dataset.ln = String(i + 1);
        cnbsCode.appendChild(s);
      });
    }

    async function cnbsTypeLine(idx) {
      const el = cnbsCode.children[idx];
      if (!el || el.classList.contains('typed')) return;
      el.classList.add('typing');
      const text = BS_CODE[idx];
      for (let i = 0; i < text.length; i++) {
        if (cnbsCancelled) { el.classList.remove('typing'); return; }
        el.textContent = text.slice(0, i + 1);
        await sleep(text[i] === ' ' ? 6 : 14);
      }
      el.classList.remove('typing');
      el.classList.add('typed');
    }

    async function cnbsEnsureTyped(target) {
      while (cnbsTyped <= target) {
        cnbsTyping = true;
        await cnbsTypeLine(cnbsTyped);
        cnbsTyping = false;
        if (cnbsCancelled) return;
        cnbsTyped++;
      }
    }

    function cnbsSetActive(idx) {
      cnbsCode.querySelectorAll('.code-line').forEach((el, i) => el.classList.toggle('active', i === idx));
      const a = cnbsCode.querySelector('.code-line.active');
      if (a) {
        const top = a.offsetTop, c = cnbsCode;
        if (top < c.scrollTop || top + 24 > c.scrollTop + c.clientHeight) c.scrollTo({ top: top - c.clientHeight / 2, behavior: 'smooth' });
      }
    }

    function cnbsRenderStage(s) {
      cnbsStage.innerHTML = '';
      for (let i = 0; i < s.arr.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        const inRange = i >= s.left && i <= s.right && s.state !== 'found' && s.state !== 'end';
        const excluded = !inRange && s.state !== 'found';
        if (inRange) cell.classList.add('in-range');
        if (excluded) cell.classList.add('excluded');
        if (i === s.mid && s.found === null && s.state !== 'end') cell.classList.add('mid');
        if (s.found !== null && i === s.found) cell.classList.add('found');

        if (i === s.left && s.state !== 'found' && s.state !== 'end') {
          const p = document.createElement('span');
          p.className = 'pointer pointer--left';
          p.textContent = 'L';
          cell.appendChild(p);
        }
        if (i === s.right && s.state !== 'found' && s.state !== 'end') {
          const p = document.createElement('span');
          p.className = 'pointer pointer--right';
          p.textContent = 'R';
          cell.appendChild(p);
        }
        if (i === s.mid && s.found === null && s.state !== 'end') {
          const p = document.createElement('span');
          p.className = 'pointer pointer--mid';
          p.textContent = 'M';
          cell.appendChild(p);
        }

        const v = document.createElement('div');
        v.className = 'cell__value';
        v.textContent = s.arr[i];
        const idx = document.createElement('div');
        idx.className = 'cell__index';
        idx.textContent = i;
        cell.appendChild(v);
        cell.appendChild(idx);
        cnbsStage.appendChild(cell);
      }
    }

    function cnbsRenderValues(s) {
      const parts = [];
      parts.push('L = <b>' + s.left + '</b>');
      parts.push('R = <b>' + s.right + '</b>');
      if (s.mid !== null) parts.push('mid = <b>' + s.mid + '</b>');
      if (s.found !== null) parts.push('result = <b>' + (s.found >= 0 ? 'index ' + s.found : 'مش موجود') + '</b>');
      cnbsValues.innerHTML = parts.join(' · ');
    }

    async function cnbsGoto(idx, animate) {
      cnbsCancelled = false;
      cnbsIndex = idx;
      const s = cnbsSteps[idx];
      cnbsCounter.textContent = (idx + 1) + ' / ' + cnbsSteps.length;

      if (animate) {
        await cnbsEnsureTyped(s.line);
        if (cnbsCancelled) return;
      } else {
        while (cnbsTyped <= s.line) {
          const el = cnbsCode.children[cnbsTyped];
          el.textContent = BS_CODE[cnbsTyped];
          el.classList.add('typed');
          cnbsTyped++;
        }
      }

      cnbsSetActive(s.line);
      cnbsRenderStage(s);
      cnbsRenderValues(s);
      cnbsDesc.textContent = s.desc;
      cnbsPrev.disabled = idx <= 0;
      cnbsNext.disabled = idx >= cnbsSteps.length - 1;
    }

    async function cnbsNextFn() {
      if (cnbsPlaying) return;
      if (cnbsIndex >= cnbsSteps.length - 1) return;
      cnbsPlaying = true;
      await cnbsGoto(cnbsIndex + 1, true);
      cnbsPlaying = false;
    }

    async function cnbsPrevFn() {
      if (cnbsTyping) { cnbsCancelled = true; await sleep(80); }
      if (cnbsIndex <= 0) return;
      cnbsPlaying = false;
      cnbsStop();
      await cnbsGoto(cnbsIndex - 1, false);
    }

    async function cnbsFirst() {
      const arr = cnbsArr.value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
      const target = Number(cnbsTarget.value);
      if (arr.length < 2 || isNaN(target)) return;
      cnbsSteps = cnbsBuildSteps(arr, target);
      cnbsCancelled = false;
      cnbsTyped = 0;
      cnbsIndex = -1;
      cnbsBuildCodeDOM();
      cnbsStop();
      await cnbsGoto(0, false);
    }

    function cnbsStart() {
      if (cnbsTimer) return;
      cnbsPlaying = true;
      cnbsPlay.textContent = '⏸ وقّف';
      cnbsTimer = setTimeout(async function tick() {
        if (cnbsIndex >= cnbsSteps.length - 1) { cnbsStop(); return; }
        await cnbsGoto(cnbsIndex + 1, true);
        if (cnbsTimer !== null && cnbsPlaying) cnbsTimer = setTimeout(tick, cnbsDelay);
      }, 300);
    }

    function cnbsStop() {
      cnbsPlaying = false;
      cnbsPlay.textContent = '▶ شغّل';
      if (cnbsTimer) { clearTimeout(cnbsTimer); cnbsTimer = null; }
    }

    async function initBsCinema() {
      await cnbsFirst();
      cnbsStart();
    }

    cnbsNext.onclick = () => { cnbsStop(); cnbsNextFn(); };
    cnbsPrev.onclick = () => { cnbsStop(); cnbsPrevFn(); };
    cnbsReset.onclick = () => { cnbsStop(); cnbsFirst(); };
    cnbsPlay.onclick = () => {
      if (cnbsPlaying) { cnbsStop(); return; }
      if (cnbsIndex >= cnbsSteps.length - 1) cnbsFirst().then(() => cnbsStart());
      else cnbsStart();
    };
    cnbsArr.addEventListener('change', () => { cnbsStop(); cnbsFirst(); });
    cnbsTarget.addEventListener('change', () => { cnbsStop(); cnbsFirst(); });
  `
};

const QUICK_SORT_RUNNABLE: Runnable = {
  html: `
    <div class="app">

      <nav class="tabs" role="tablist">
        <button class="tab active" data-tab="preview">
          <span class="tab__icon">📺</span>
          <span>المعاينة</span>
        </button>
        <button class="tab" data-tab="cinema">
          <span class="tab__icon">🎬</span>
          <span>خطوة بخطوة</span>
        </button>
      </nav>

      <section class="panel active" data-panel="preview">
        <div class="controls">
          <div class="ctrl-group">
            <label>array</label>
            <input id="pv-arr" type="text" value="7,2,1,6,8,5,3,4" dir="ltr">
          </div>
          <div class="btns">
            <button id="pv-play" class="primary">▶ شغّل</button>
            <button id="pv-step">⏭ خطوة</button>
            <button id="pv-reset">↺ رجّع</button>
          </div>
        </div>

        <div class="stage" id="pv-stage" dir="ltr"></div>

        <div class="stats">
          <div class="stat"><span class="stat-label">الحجم</span><span class="stat-value" id="pv-size">0</span></div>
          <div class="stat"><span class="stat-label">المقارنات</span><span class="stat-value" id="pv-comp">0</span></div>
          <div class="stat"><span class="stat-label">التبديلات</span><span class="stat-value" id="pv-swap">0</span></div>
        </div>

        <div class="log" id="pv-log"></div>
      </section>

      <section class="panel" data-panel="cinema">
        <div class="cinema-controls">
          <div class="cinema-arr">
            <label>array</label>
            <input id="cn-arr" type="text" value="7,2,1,6,8,5,3,4" dir="ltr">
          </div>
          <div class="btns">
            <button id="cn-prev">⏮</button>
            <button id="cn-play" class="primary">▶ شغّل</button>
            <button id="cn-next">⏭</button>
            <button id="cn-reset">↺</button>
          </div>
          <div class="step-info"><span id="cn-counter">0 / 0</span></div>
        </div>

        <div class="cinema-grid">
          <div class="panel-box code-panel">
            <div class="panel-box__head">
              <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
              <span class="panel-box__title">quick-sort.js</span>
            </div>
            <div class="code-body" id="cn-code" dir="ltr"></div>
          </div>

          <div class="panel-box stage-panel">
            <div class="panel-box__head">
              <span class="panel-box__title">الرسم</span>
            </div>
            <div class="stage stage--cinema" id="cn-stage" dir="ltr"></div>
            <div class="values" id="cn-values"></div>
          </div>
        </div>

        <div class="op-desc" id="cn-desc">—</div>
      </section>

    </div>
  `,
  css: `
    * { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --bg: #0F1B2D;
      --bg-2: #0A1422;
      --bg-3: #152236;
      --border: #1E2D42;
      --border-2: #2A3846;
      --text: #E6EDF2;
      --text-2: #9DAEC2;
      --text-3: #6B7C92;
      --blue: #5B9DFF;
      --yellow: #F2B200;
      --red: #FF6B57;
      --green: #4CD08A;
    }

    html, body { height: 100%; }

    body {
      font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif;
      background: var(--bg);
      color: var(--text);
      padding: 16px;
      min-height: 100vh;
      overflow-x: hidden;
    }

    ::-webkit-scrollbar { width: 10px; height: 10px; }
    ::-webkit-scrollbar-track { background: var(--bg-2); }
    ::-webkit-scrollbar-thumb {
      background: var(--border-2);
      border-radius: 6px;
      border: 2px solid var(--bg-2);
      background-clip: padding-box;
    }
    ::-webkit-scrollbar-thumb:hover { background: #4A5F7A; background-clip: padding-box; }
    ::-webkit-scrollbar-corner { background: var(--bg-2); }

    .app {
      max-width: 1200px;
      margin-inline: auto;
      display: flex;
      flex-direction: column;
      gap: 14px;
      min-height: calc(100vh - 32px);
    }

    .tabs {
      display: flex;
      gap: 6px;
      padding: 6px;
      background: var(--bg-2);
      border: 1px solid var(--border);
      border-radius: 8px;
      width: fit-content;
    }

    .tab {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      color: var(--text-2);
      background: transparent;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
    }

    .tab:hover { color: var(--text); }

    .tab.active {
      background: var(--bg-3);
      color: var(--text);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    .tab__icon { font-size: 14px; }

    @media (max-width: 480px) {
      .tabs { width: 100%; }
      .tab { flex: 1; justify-content: center; padding: 10px 12px; font-size: 12px; }
    }

    .panel { display: none; flex-direction: column; gap: 14px; flex: 1; min-height: 0; }
    .panel.active { display: flex; }

    .controls,
    .cinema-controls {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: flex-end;
      padding: 14px 16px;
      background: var(--bg-3);
      border: 1px solid var(--border);
      border-radius: 8px;
    }

    .ctrl-group,
    .cinema-arr {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
      min-width: 180px;
    }

    .ctrl-group label,
    .cinema-arr label {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10px;
      color: var(--text-3);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .ctrl-group input,
    .cinema-arr input {
      padding: 8px 12px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 13px;
      color: var(--text);
      background: var(--bg-2);
      border: 1px solid var(--border);
      border-radius: 4px;
      outline: none;
      direction: ltr;
      transition: border-color 0.2s;
    }

    .ctrl-group input:focus,
    .cinema-arr input:focus { border-color: var(--blue); }

    .btns { display: flex; gap: 6px; flex-wrap: wrap; }

    .btns button {
      padding: 8px 14px;
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      color: var(--text);
      background: var(--bg-2);
      border: 1px solid var(--border-2);
      border-radius: 4px;
      cursor: pointer;
      transition: 0.15s;
      white-space: nowrap;
    }

    .btns button:hover:not(:disabled) { border-color: var(--blue); color: var(--blue); }
    .btns button.primary {
      background: var(--yellow);
      border-color: var(--yellow);
      color: #0F1B2D;
      font-weight: 600;
    }
    .btns button.primary:hover { opacity: 0.9; color: #0F1B2D; }
    .btns button:disabled { opacity: 0.35; cursor: not-allowed; }

    .step-info {
      display: inline-flex;
      align-items: center;
      padding: 8px 14px;
      background: var(--bg-2);
      border: 1px solid var(--border-2);
      border-radius: 4px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      color: var(--yellow);
      font-weight: 600;
      min-width: 80px;
      justify-content: center;
    }

    .stage {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      gap: 8px;
      padding: 24px 20px;
      background: var(--bg-2);
      border: 1px solid var(--border);
      border-radius: 8px;
      min-height: 300px;
      direction: ltr;
      overflow-x: auto;
      overflow-y: hidden;
      flex: 1;
    }

    .stage--cinema {
      border-radius: 0;
      border: none;
      padding: 20px 16px;
      min-height: 0;
      background: var(--bg-2);
    }

    .bar {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .bar__value {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      font-weight: 700;
      color: var(--text);
      min-height: 16px;
      transition: color 0.3s, transform 0.3s;
    }

    .bar__body {
      width: clamp(28px, 4.5vw, 42px);
      background: var(--blue);
      border-radius: 4px 4px 0 0;
      transition: background 0.35s, box-shadow 0.35s, height 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
      min-height: 18px;
    }

    .bar__index {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10px;
      color: var(--text-3);
      transition: color 0.3s;
    }

    .bar.pivot .bar__body { background: var(--yellow); box-shadow: 0 0 16px rgba(242, 178, 0, 0.7); }
    .bar.pivot .bar__value { color: var(--yellow); transform: scale(1.15); }
    .bar.pivot .bar__index { color: var(--yellow); }

    .bar.comparing .bar__body { background: var(--red); box-shadow: 0 0 16px rgba(255, 107, 87, 0.6); }
    .bar.comparing .bar__value { color: var(--red); transform: scale(1.15); }
    .bar.comparing .bar__index { color: var(--red); }

    .bar.swapping .bar__body {
      background: var(--green);
      box-shadow: 0 0 20px rgba(76, 208, 138, 0.8);
      animation: swap-pop 0.5s ease;
    }
    .bar.swapping .bar__value { color: var(--green); transform: scale(1.2); }
    .bar.swapping .bar__index { color: var(--green); font-weight: 700; }

    @keyframes swap-pop {
      0% { transform: scaleY(1); }
      50% { transform: scaleY(1.08); }
      100% { transform: scaleY(1); }
    }

    .bar.sorted .bar__body { background: var(--green); opacity: 0.55; }
    .bar.sorted .bar__value { color: var(--green); }
    .bar.sorted .bar__index { color: var(--green); opacity: 0.7; }

    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .stat {
      padding: 12px 14px;
      background: var(--bg-3);
      border: 1px solid var(--border);
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .stat-label {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10px;
      color: var(--text-3);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .stat-value {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 15px;
      font-weight: 600;
      color: var(--blue);
    }

    .log {
      padding: 14px 16px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      line-height: 1.8;
      color: var(--text-2);
      background: var(--bg-2);
      border: 1px solid var(--border);
      border-radius: 8px;
      min-height: 120px;
      max-height: 200px;
      overflow-y: auto;
      white-space: pre-wrap;
    }

    .log__ok { color: var(--green); }
    .log__info { color: var(--blue); }
    .log__warn { color: var(--yellow); }

    .cinema-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
      gap: 14px;
      flex: 1;
      min-height: 0;
      height: clamp(400px, 55vh, 520px);
    }

    .panel-box {
      display: flex;
      flex-direction: column;
      background: var(--bg-2);
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: hidden;
      min-height: 0;
    }

    .panel-box__head {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 10px 14px;
      background: var(--bg-3);
      border-bottom: 1px solid var(--border);
      flex-shrink: 0;
    }

    .panel-box__title {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      color: var(--text-3);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-inline-start: 6px;
    }

    .dot { width: 9px; height: 9px; border-radius: 50%; }
    .dot.red { background: var(--red); }
    .dot.yellow { background: var(--yellow); }
    .dot.green { background: var(--green); }

    .code-body {
      flex: 1;
      padding: 12px 0;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      line-height: 1.7;
      overflow: auto;
      direction: ltr;
      text-align: left;
      white-space: pre;
      min-height: 0;
    }

    .code-line {
      display: block;
      padding: 1px 14px 1px 48px;
      position: relative;
      min-height: 20px;
      color: #3A4A5F;
      transition: color 0.2s, background 0.2s;
    }

    .code-line::before {
      content: attr(data-ln);
      position: absolute;
      left: 8px;
      top: 1px;
      width: 30px;
      text-align: right;
      font-size: 10px;
      color: #2A3846;
      user-select: none;
    }

    .code-line.typed { color: var(--text-2); }
    .code-line.typed::before { color: #4A5F7A; }

    .code-line.typing {
      color: var(--text);
      background: rgba(91, 157, 255, 0.08);
    }

    .code-line.typing::after {
      content: '▌';
      color: var(--blue);
      margin-left: 1px;
      animation: caret 0.55s steps(2) infinite;
    }

    @keyframes caret {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }

    .code-line.active {
      color: var(--yellow);
      background: rgba(242, 178, 0, 0.12);
      border-left: 3px solid var(--yellow);
      padding-left: 45px;
    }

    .code-line.active::before { color: var(--yellow); font-weight: 700; }

    .values {
      padding: 10px 14px;
      border-top: 1px solid var(--border);
      background: var(--bg-3);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      color: var(--text-3);
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      min-height: 38px;
      align-items: center;
      flex-shrink: 0;
    }

    .values b { color: var(--yellow); }

    .op-desc {
      padding: 12px 16px;
      background: var(--bg-3);
      border: 1px solid var(--border);
      border-left: 3px solid var(--blue);
      border-radius: 6px;
      font-size: 13px;
      color: var(--text);
      min-height: 44px;
      display: flex;
      align-items: center;
      line-height: 1.6;
      flex-shrink: 0;
    }

    @media (max-width: 860px) {
      .cinema-grid {
        grid-template-columns: 1fr;
        grid-template-rows: minmax(220px, 1fr) minmax(220px, 1fr);
        height: auto;
        min-height: 520px;
      }
    }

    @media (max-width: 560px) {
      body { padding: 10px; }
      .app { min-height: calc(100vh - 20px); }
      .controls, .cinema-controls { padding: 10px 12px; gap: 8px; }
      .ctrl-group, .cinema-arr { min-width: 100%; }
      .btns button { padding: 7px 11px; font-size: 12px; }
      .stat-value { font-size: 13px; }
      .stat { padding: 10px 12px; }
      .code-body { font-size: 11px; }
      .stage { padding: 18px 12px; min-height: 240px; }
      .cinema-grid { min-height: 480px; }
    }
  `,
  js: `
    const $ = id => document.getElementById(id);

    let cinemaInit = false;

    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const name = tab.dataset.tab;
        document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t === tab));
        document.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.dataset.panel === name));
        if (name === 'cinema' && !cinemaInit) {
          cinemaInit = true;
          initCinema();
        }
      });
    });

    const pvStage = $('pv-stage');
    const pvLogEl = $('pv-log');
    const pvSize = $('pv-size');
    const pvComp = $('pv-comp');
    const pvSwap = $('pv-swap');
    const pvInput = $('pv-arr');

    let pvState = null;
    let pvTimer = null;
    let pvPlaying = false;

    function pvParse() {
      return pvInput.value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
    }

    function pvBuildSteps(arr) {
      const a = [...arr];
      const steps = [];
      pvQs(a, 0, a.length - 1, steps);
      for (let i = 0; i < arr.length; i++) steps.push({ type: 'sorted', index: i });
      return steps;
    }

    function pvQs(arr, low, high, steps) {
      if (low >= high) {
        if (low === high) steps.push({ type: 'sorted', index: low });
        return;
      }
      const p = pvPartition(arr, low, high, steps);
      steps.push({ type: 'sorted', index: p });
      pvQs(arr, low, p - 1, steps);
      pvQs(arr, p + 1, high, steps);
    }

    function pvPartition(arr, low, high, steps) {
      const pivot = arr[high];
      steps.push({ type: 'pivot', index: high, value: pivot });
      let i = low - 1;
      for (let j = low; j < high; j++) {
        steps.push({ type: 'compare', index: j, pivot: high, a: arr[j], b: pivot });
        if (arr[j] < pivot) {
          i++;
          if (i !== j) {
            steps.push({ type: 'swap', from: i, to: j });
            const t = arr[i]; arr[i] = arr[j]; arr[j] = t;
          }
        }
      }
      if (i + 1 !== high) {
        steps.push({ type: 'swap', from: i + 1, to: high });
        const t = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = t;
      }
      return i + 1;
    }

    function pvInit() {
      const arr = pvParse();
      pvState = {
        original: [...arr],
        current: [...arr],
        steps: pvBuildSteps(arr),
        stepIndex: 0,
        comp: 0,
        swap: 0,
        sorted: new Set(),
      };
      pvRender();
      pvLogEl.innerHTML = '';
      pvAddLog('المصفوفة الأصلية: [' + arr.join(', ') + ']', 'info');
    }

    function pvAddLog(text, cls) {
      const line = document.createElement('div');
      if (cls) line.className = 'log__' + cls;
      line.textContent = text;
      pvLogEl.appendChild(line);
      pvLogEl.scrollTop = pvLogEl.scrollHeight;
    }

    function pvApplySwap(from, to) {
      const t = pvState.current[from];
      pvState.current[from] = pvState.current[to];
      pvState.current[to] = t;
    }

    function pvRender() {
      if (!pvState) return;
      const step = pvState.steps[pvState.stepIndex];
      const maxVal = Math.max(...pvState.original, 1);
      pvStage.innerHTML = '';

      for (let i = 0; i < pvState.current.length; i++) {
        const val = pvState.current[i];
        const bar = document.createElement('div');
        bar.className = 'bar';
        if (pvState.sorted.has(i)) bar.classList.add('sorted');

        if (step) {
          if (step.type === 'pivot' && step.index === i) bar.classList.add('pivot');
          if (step.type === 'compare' && step.index === i) bar.classList.add('comparing');
          if (step.type === 'swap' && (step.from === i || step.to === i)) bar.classList.add('swapping');
        }

        const v = document.createElement('div');
        v.className = 'bar__value';
        v.textContent = val;

        const b = document.createElement('div');
        b.className = 'bar__body';
        b.style.height = Math.max(20, (val / maxVal) * 180) + 'px';

        const idx = document.createElement('div');
        idx.className = 'bar__index';
        idx.textContent = i;

        bar.appendChild(v);
        bar.appendChild(b);
        bar.appendChild(idx);
        pvStage.appendChild(bar);
      }

      pvSize.textContent = pvState.current.length;
      pvComp.textContent = pvState.comp;
      pvSwap.textContent = pvState.swap;
      $('pv-play').textContent = pvPlaying ? '⏸ وقّف' : '▶ شغّل';
    }

    function pvStep() {
      if (!pvState || pvState.stepIndex >= pvState.steps.length) return false;
      const s = pvState.steps[pvState.stepIndex];

      if (s.type === 'compare') {
        pvState.comp++;
        pvAddLog('قارن: ' + pvState.current[s.index] + ' < ' + s.b + ' ؟', 'info');
      } else if (s.type === 'swap') {
        pvState.swap++;
        const a = pvState.current[s.from], b = pvState.current[s.to];
        pvAddLog('بدّل: ' + a + ' ↔ ' + b, 'warn');
        pvApplySwap(s.from, s.to);
      } else if (s.type === 'pivot') {
        pvAddLog('pivot: ' + s.value + ' عند index ' + s.index, 'warn');
      } else if (s.type === 'sorted') {
        pvState.sorted.add(s.index);
        pvAddLog('العنصر ' + pvState.current[s.index] + ' استقر في index ' + s.index, 'ok');
      }

      pvState.stepIndex++;
      pvRender();
      return pvState.stepIndex < pvState.steps.length;
    }

    function pvPlay() {
      if (pvPlaying) { pvStop(); return; }
      if (pvState.stepIndex >= pvState.steps.length) pvInit();
      pvPlaying = true;
      pvRender();
      pvTimer = setInterval(() => { if (!pvStep()) pvStop(); }, 600);
    }

    function pvStop() {
      pvPlaying = false;
      if (pvTimer) { clearInterval(pvTimer); pvTimer = null; }
      pvRender();
    }

    $('pv-play').onclick = pvPlay;
    $('pv-step').onclick = () => { pvStop(); pvStep(); };
    $('pv-reset').onclick = () => { pvStop(); pvInit(); };
    pvInput.addEventListener('change', () => { pvStop(); pvInit(); });

    pvInit();

    const CODE = [
      'function quickSort(arr, low, high) {',
      '  if (low >= high) return;',
      '  const p = partition(arr, low, high);',
      '  quickSort(arr, low, p - 1);',
      '  quickSort(arr, p + 1, high);',
      '}',
      '',
      'function partition(arr, low, high) {',
      '  const pivot = arr[high];',
      '  let i = low - 1;',
      '  for (let j = low; j < high; j++) {',
      '    if (arr[j] < pivot) {',
      '      i++;',
      '      [arr[i], arr[j]] = [arr[j], arr[i]];',
      '    }',
      '  }',
      '  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];',
      '  return i + 1;',
      '}'
    ];

    const cnCode = $('cn-code');
    const cnStage = $('cn-stage');
    const cnValues = $('cn-values');
    const cnDesc = $('cn-desc');
    const cnCounter = $('cn-counter');
    const cnInput = $('cn-arr');
    const cnPrev = $('cn-prev');
    const cnPlay = $('cn-play');
    const cnNext = $('cn-next');
    const cnReset = $('cn-reset');

    let cnSteps = [];
    let cnIndex = -1;
    let cnTyped = 0;
    let cnTimer = null;
    let cnPlaying = false;
    let cnTyping = false;
    let cnCancelled = false;
    let cnDelay = 3000;

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    function cnBuildSteps(arr) {
      const a = [...arr];
      const steps = [];
      steps.push({ line: 0, desc: 'نبدأ — نداء quickSort على المصفوفة [' + a.join(', ') + ']', arr: [...a], sorted: [], hl: {} });
      cnQs(a, 0, a.length - 1, steps, []);
      steps.push({ line: 18, desc: 'خلصنا ✓ المصفوفة مرتبة [' + a.join(', ') + ']', arr: [...a], sorted: cnRange(a.length), hl: {} });
      return steps;
    }

    function cnRange(n) { const r = []; for (let i = 0; i < n; i++) r.push(i); return r; }

    function cnQs(arr, low, high, steps, sortedSoFar) {
      if (low >= high) {
        if (low === high) {
          steps.push({ line: 1, desc: 'low = high = ' + low + ' — عنصر واحد، استقر', arr: [...arr], sorted: [...new Set([...sortedSoFar, low])], hl: { sorted: low } });
          sortedSoFar.push(low);
        } else {
          steps.push({ line: 1, desc: 'low (' + low + ') >= high (' + high + ') — الجزء فاضي', arr: [...arr], sorted: [...sortedSoFar], hl: {} });
        }
        return;
      }
      const p = cnPartition(arr, low, high, steps, sortedSoFar);
      steps.push({ line: 3, desc: 'quickSort على الجزء الشمال (low = ' + low + ' → ' + (p - 1) + ')', arr: [...arr], sorted: [...new Set([...sortedSoFar, p])], hl: {} });
      cnQs(arr, low, p - 1, steps, [...sortedSoFar, p]);
      steps.push({ line: 4, desc: 'quickSort على الجزء اليمين (' + (p + 1) + ' → ' + high + ')', arr: [...arr], sorted: [...new Set([...sortedSoFar, p])], hl: {} });
      cnQs(arr, p + 1, high, steps, [...sortedSoFar, p]);
    }

    function cnPartition(arr, low, high, steps, sortedSoFar) {
      const pivot = arr[high];
      steps.push({ line: 7, desc: 'ندخل partition — low = ' + low + '، high = ' + high, arr: [...arr], sorted: [...sortedSoFar], hl: {} });
      steps.push({ line: 8, desc: 'pivot = arr[' + high + '] = ' + pivot, arr: [...arr], sorted: [...sortedSoFar], hl: { pivot: high } });
      let i = low - 1;
      steps.push({ line: 9, desc: 'i = low - 1 = ' + i, arr: [...arr], sorted: [...sortedSoFar], hl: { pivot: high, i: i } });

      for (let j = low; j < high; j++) {
        steps.push({ line: 10, desc: 'j = ' + j, arr: [...arr], sorted: [...sortedSoFar], hl: { pivot: high, i: i, j: j } });
        steps.push({ line: 11, desc: 'قارن: arr[' + j + '] = ' + arr[j] + ' < ' + pivot + ' ؟', arr: [...arr], sorted: [...sortedSoFar], hl: { pivot: high, i: i, j: j, comparing: true } });
        if (arr[j] < pivot) {
          i++;
          steps.push({ line: 12, desc: 'أيوه — i = ' + i, arr: [...arr], sorted: [...sortedSoFar], hl: { pivot: high, i: i, j: j } });
          if (i !== j) {
            const av = arr[i], bv = arr[j];
            steps.push({ line: 13, desc: 'بدّل ' + av + ' ↔ ' + bv, arr: [...arr], sorted: [...sortedSoFar], hl: { pivot: high, i: i, j: j, swapping: true } });
            const t = arr[i]; arr[i] = arr[j]; arr[j] = t;
            steps.push({ line: 13, desc: 'بعد التبديل — arr[' + i + '] = ' + arr[i] + '، arr[' + j + '] = ' + arr[j], arr: [...arr], sorted: [...sortedSoFar], hl: { pivot: high, i: i, j: j } });
          } else {
            steps.push({ line: 13, desc: 'i == j — مش محتاجين تبديل', arr: [...arr], sorted: [...sortedSoFar], hl: { pivot: high, i: i } });
          }
        } else {
          steps.push({ line: 11, desc: 'لأ — نكمل', arr: [...arr], sorted: [...sortedSoFar], hl: { pivot: high, i: i, j: j } });
        }
      }

      if (i + 1 !== high) {
        const av = arr[i + 1], bv = arr[high];
        steps.push({ line: 16, desc: 'حط pivot في مكانه: بدّل ' + av + ' ↔ ' + bv, arr: [...arr], sorted: [...sortedSoFar], hl: { pivot: high, swapping: true } });
        const t = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = t;
        steps.push({ line: 16, desc: 'pivot = ' + arr[i + 1] + ' استقر في index ' + (i + 1), arr: [...arr], sorted: [...new Set([...sortedSoFar, i + 1])], hl: { sorted: i + 1 } });
      }

      steps.push({ line: 17, desc: 'return ' + (i + 1) + ' (index pivot)', arr: [...arr], sorted: [...sortedSoFar], hl: { pivotIndex: i + 1 } });
      return i + 1;
    }

    function cnBuildCodeDOM() {
      cnCode.innerHTML = '';
      CODE.forEach((_, i) => {
        const s = document.createElement('span');
        s.className = 'code-line';
        s.dataset.ln = String(i + 1);
        cnCode.appendChild(s);
      });
    }

    async function cnTypeLine(lineIdx) {
      const el = cnCode.children[lineIdx];
      if (!el || el.classList.contains('typed')) return;
      el.classList.add('typing');
      const text = CODE[lineIdx];
      for (let i = 0; i < text.length; i++) {
        if (cnCancelled) { el.classList.remove('typing'); return; }
        el.textContent = text.slice(0, i + 1);
        await sleep(text[i] === ' ' ? 6 : 14);
      }
      el.classList.remove('typing');
      el.classList.add('typed');
    }

    async function cnEnsureTyped(target) {
      while (cnTyped <= target) {
        cnTyping = true;
        await cnTypeLine(cnTyped);
        cnTyping = false;
        if (cnCancelled) return;
        cnTyped++;
      }
    }

    function cnSetActiveLine(idx) {
      cnCode.querySelectorAll('.code-line').forEach((el, i) => el.classList.toggle('active', i === idx));
      const active = cnCode.querySelector('.code-line.active');
      if (active) {
        const top = active.offsetTop;
        const c = cnCode;
        if (top < c.scrollTop || top + 24 > c.scrollTop + c.clientHeight) {
          c.scrollTo({ top: top - c.clientHeight / 2, behavior: 'smooth' });
        }
      }
    }

    function cnRenderStage(step) {
      const maxVal = Math.max(...step.arr, 1);
      const sortedSet = new Set(step.sorted || []);
      cnStage.innerHTML = '';

      for (let idx = 0; idx < step.arr.length; idx++) {
        const val = step.arr[idx];
        const bar = document.createElement('div');
        bar.className = 'bar';
        if (sortedSet.has(idx)) bar.classList.add('sorted');
        if (step.hl.pivot === idx) bar.classList.add('pivot');
        if (step.hl.comparing && step.hl.j === idx) bar.classList.add('comparing');
        if (step.hl.swapping && (step.hl.i === idx || step.hl.j === idx || idx === step.hl.pivot)) bar.classList.add('swapping');

        const v = document.createElement('div');
        v.className = 'bar__value';
        v.textContent = val;

        const b = document.createElement('div');
        b.className = 'bar__body';
        b.style.height = Math.max(20, (val / maxVal) * 180) + 'px';

        const i = document.createElement('div');
        i.className = 'bar__index';
        i.textContent = idx;

        bar.appendChild(v);
        bar.appendChild(b);
        bar.appendChild(i);
        cnStage.appendChild(bar);
      }
    }

    function cnRenderValues(step) {
      const parts = [];
      if (step.hl.pivot !== undefined) parts.push('pivot = <b>' + step.arr[step.hl.pivot] + '</b>');
      if (step.hl.i !== undefined) parts.push('i = <b>' + step.hl.i + '</b>');
      if (step.hl.j !== undefined) parts.push('j = <b>' + step.hl.j + '</b>');
      if (step.hl.pivotIndex !== undefined) parts.push('pivotIndex = <b>' + step.hl.pivotIndex + '</b>');
      if (!parts.length) parts.push('arr = [' + step.arr.join(', ') + ']');
      cnValues.innerHTML = parts.join(' · ');
    }

    async function cnGoto(idx, animate) {
      cnCancelled = false;
      cnIndex = idx;
      const step = cnSteps[idx];

      cnCounter.textContent = (idx + 1) + ' / ' + cnSteps.length;

      if (animate) {
        await cnEnsureTyped(step.line);
        if (cnCancelled) return;
      } else {
        while (cnTyped <= step.line) {
          const el = cnCode.children[cnTyped];
          el.textContent = CODE[cnTyped];
          el.classList.add('typed');
          cnTyped++;
        }
      }

      cnSetActiveLine(step.line);
      cnRenderStage(step);
      cnRenderValues(step);
      cnDesc.textContent = step.desc;

      cnPrev.disabled = idx <= 0;
      cnNext.disabled = idx >= cnSteps.length - 1;
    }

    async function cnNextFn() {
      if (cnPlaying) return;
      if (cnIndex >= cnSteps.length - 1) return;
      cnPlaying = true;
      await cnGoto(cnIndex + 1, true);
      cnPlaying = false;
    }

    async function cnPrevFn() {
      if (cnTyping) { cnCancelled = true; await sleep(80); }
      if (cnIndex <= 0) return;
      cnPlaying = false;
      cnStop();
      await cnGoto(cnIndex - 1, false);
    }

    async function cnFirst() {
      cnCancelled = false;
      cnTyped = 0;
      cnIndex = -1;
      cnBuildCodeDOM();
      cnStop();
      await cnGoto(0, false);
    }

    function cnStart() {
      if (cnTimer) return;
      cnPlaying = true;
      cnPlay.textContent = '⏸ وقّف';
      cnTimer = setTimeout(async function tick() {
        if (cnIndex >= cnSteps.length - 1) { cnStop(); return; }
        await cnGoto(cnIndex + 1, true);
        if (cnTimer !== null && cnPlaying) cnTimer = setTimeout(tick, cnDelay);
      }, 300);
    }

    function cnStop() {
      cnPlaying = false;
      cnPlay.textContent = '▶ شغّل';
      if (cnTimer) { clearTimeout(cnTimer); cnTimer = null; }
    }

    async function initCinema() {
      const arr = cnInput.value.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
      if (arr.length < 2) return;
      cnSteps = cnBuildSteps(arr);
      cnTyped = 0;
      cnIndex = -1;
      cnBuildCodeDOM();
      await cnGoto(0, false);
      cnStart();
    }

    cnNext.onclick = () => { cnStop(); cnNextFn(); };
    cnPrev.onclick = () => { cnStop(); cnPrevFn(); };
    cnReset.onclick = () => { cnStop(); cnFirst(); };
    cnPlay.onclick = () => {
      if (cnPlaying) { cnStop(); return; }
      if (cnIndex >= cnSteps.length - 1) cnFirst().then(() => cnStart());
      else cnStart();
    };
    cnInput.addEventListener('change', () => { cnStop(); cnFirst(); });
  `
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

الشرط الوحيد: المصفوفة لازم تكون مرتّبة. لو مش مرتّبة، البحث الثنائي ما ينفعش، ولازم تستخدم Linear Search أو ترتّب الأول.

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
  {
    id: 'quick-sort',
    num: 'A2',
    line: 'algo',
    x: 560,
    y: 70,
    slug: 'quick-sort',
    href: '/algorithms/quick-sort',
    level: 'متوسط',
    next: 'merge-sort',

    title: 'الترتيب السريع',
    titleEn: 'Quick Sort',
    summary: 'قسّم المصفوفة حوالين pivot، رتّب كل جزء، ثم ادمج.',
    date: '2026',
    tags: ['sorting', 'divide-and-conquer', 'O(n log n)'],

    whatItDoes:
      'Quick Sort خوارزمية ترتيب بتتبع أسلوب Divide and Conquer. بتختار عنصر اسمه pivot، بتقسّم المصفوفة لجزئين: كل عنصر أصغر من الـ pivot في الشمال، وكل عنصر أكبر في اليمين. بعدين بتطبّق نفس الفكرة على كل جزء لحد ما المصفوفة كلها تترتب.',

    explanation: `تخيّل عندك مجموعة أوراق مرقّمة عايز ترتّبها بسرعة. بدل ما تقارن كل ورقة بكل ورقة تانية، بتاخد ورقة واحدة كـ "مرجع". كل ورقة أصغر منها بتحطها في كومة شمال، وكل ورقة أكبر بتحطها في كومة يمين. بعدين بتكرر نفس الحاجة على كل كومة لوحدها.

ده بالظبط Quick Sort. اختر عنصر مرجعي (pivot)، قسّم باقي العناصر حواليه، بعدين رتّب كل نص لوحده.

الميزة الأساسية: بتشتغل in-place — مش محتاج مصفوفة إضافية. و في المتوسط أسرع من Merge Sort في التطبيق الفعلي.

العيب: في أسوأ حالة (لو الـ pivot دايمًا أصغر أو أكبر عنصر) الأداء بيبقى O(n²). عشان كده بنستخدم randomization أو median-of-three لاختيار الـ pivot.

الخطوات:
1. اختر pivot (آخر عنصر مثلاً).
2. رتّب العناصر: أصغر من الـ pivot شمال، أكبر منه يمين.
3. حط الـ pivot في مكانه الصح.
4. كرّر على الجزئين.`,

    codeBreakdown: [
      { line: 'function quickSort(arr, low, high) {', note: 'الدالة بتاخد المصفوفة وحدود الجزء اللي هنرتبه (low و high).' },
      { line: '  if (low >= high) return;', note: 'لو الجزء فيه عنصر واحد أو فاضي — خلاص مرتب.' },
      { line: '  const p = partition(arr, low, high);', note: 'قسّم الجزء حوالين pivot، واستلم index الـ pivot النهائي.' },
      { line: '  quickSort(arr, low, p - 1);', note: 'رتّب الجزء الشمال من الـ pivot بنفس الطريقة.' },
      { line: '  quickSort(arr, p + 1, high);', note: 'رتّب الجزء اليمين من الـ pivot بنفس الطريقة.' },
      { line: '}', note: 'نهاية الدالة العودية.' },
      { line: '', note: '—' },
      { line: 'function partition(arr, low, high) {', note: 'الدالة اللي بتقسّم المصفوفة.' },
      { line: '  const pivot = arr[high];', note: 'بنختار آخر عنصر كـ pivot.' },
      { line: '  let i = low - 1;', note: 'الـ pointer i بيحدد حدود الجزء الأصغر من الـ pivot.' },
      { line: '  for (let j = low; j < high; j++) {', note: 'نلف على باقي العناصر (كل اللي مش pivot).' },
      { line: '    if (arr[j] < pivot) {', note: 'لو العنصر الحالي أصغر من الـ pivot.' },
      { line: '      i++;', note: 'نوسّع الجزء الأصغر.' },
      { line: '      [arr[i], arr[j]] = [arr[j], arr[i]];', note: 'بدّل العنصرين.' },
      { line: '    }', note: 'نهاية الـ if.' },
      { line: '  }', note: 'نهاية الـ for.' },
      { line: '  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];', note: 'حط الـ pivot في مكانه الصح.' },
      { line: '  return i + 1;', note: 'رجّع index الـ pivot.' },
      { line: '}', note: 'نهاية partition.' },
    ],

    live: QUICK_SORT_RUNNABLE,

    practice: {
      prompt:
        'اكتب دالة quickSort(arr) بترتب المصفوفة تصاعديًا باستخدام خوارزمية Quick Sort. استخدم آخر عنصر كـ pivot.',
      functionName: 'quickSort',
      starter: `function quickSort(arr) {

}`,
      solution: `function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}`,
      tests: [
        { id: 't1', description: 'مصفوفة عادية', args: [[3, 6, 1, 8, 2, 9, 4]], expected: [1, 2, 3, 4, 6, 8, 9] },
        { id: 't2', description: 'مرتبة بالفعل', args: [[1, 2, 3, 4, 5]], expected: [1, 2, 3, 4, 5] },
        { id: 't3', description: 'معكوسة', args: [[5, 4, 3, 2, 1]], expected: [1, 2, 3, 4, 5] },
        { id: 't4', description: 'عنصر واحد', args: [[7]], expected: [7] },
        { id: 't5', description: 'فاضية', args: [[]], expected: [] },
        { id: 't6', description: 'عناصر مكررة', args: [[3, 1, 3, 2, 1]], expected: [1, 1, 2, 3, 3] },
      ],
    },

    quizzes: [
      {
        question: 'إيه أسوأ Time Complexity لـ Quick Sort؟',
        options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'],
        correct: 1,
        explanation: 'لو الـ pivot دايمًا أصغر أو أكبر عنصر، الـ partition بيبقى غير متوازن والأداء بيوصل O(n²).',
      },
      {
        question: 'ليه Quick Sort بتعتبر "in-place"؟',
        options: [
          'لأنها بتشتغل في نفس المصفوفة بدون memory إضافية كبيرة',
          'لأنها بتشتغل بدون recursion',
          'لأنها بتستخدم مصفوفة مساعدة واحدة بس',
          'لأنها بتشتغل على الـ stack',
        ],
        correct: 0,
        explanation: 'الـ partition بتشتغل على نفس المصفوفة عن طريق التبديل، فمش محتاجة مساحة إضافية (غير الـ stack للـ recursion).',
      },
      {
        question: 'إيه أفضل طريقة لاختيار الـ pivot عشان نتجنب أسوأ حالة؟',
        options: [
          'آخر عنصر دايمًا',
          'أول عنصر دايمًا',
          'عنصر عشوائي أو median-of-three',
          'العنصر الأوسط دايمًا',
        ],
        correct: 2,
        explanation: 'الاختيار العشوائي أو median-of-three بيقلل احتمال الوقوع في أسوأ حالة بشكل كبير.',
      },
    ],

    useCases: [
      'الترتيب العام في المكتبات القياسية (زي C++ STL و Java Arrays.sort للأرقام)',
      'ترتيب بيانات كبيرة في الـ databases',
      'Quickselect — إيجاد الـ k-th smallest عنصر في O(n)',
      'الترتيب في الـ embedded systems (لأنه in-place)',
      'معالجة البيانات في الـ streaming pipelines',
    ],

    whyItsGoodHere:
      'Quick Sort هو الخيار الصح لما: (1) عندك memory محدودة (in-place)، أو (2) بتشتغل على أنواع primitive (زي الأرقام) حيث الـ cache locality بتخليه أسرع فعليًا من Merge Sort. لو الداتا كبيرة جدًا والأداء المتوسط مهم، Quick Sort بيثبت إنه من أسرع الخوارزميات في الواقع. لكن لو محتاج stability أو worst-case مضمون، Merge Sort أو Heap Sort بيبقوا أحسن.',

    relatedIdeas: [
      'Merge Sort — O(n log n) مضمون، بس محتاج memory إضافية',
      'Heap Sort — O(n log n) مضمون و in-place',
      'Quickselect — نسخة من Quick Sort لإيجاد median أو k-th element',
      'IntroSort — hybrid بيجمع Quick + Heap + Insertion',
      'Dual-Pivot Quick Sort — النسخة اللي Java بتستخدمها',
      'Randomized Quick Sort — عشان نتجنب أسوأ حالة',
    ],

    mathProblems: [
      'اثبت إن متوسط عدد المقارنات في Quick Sort هو O(n log n).',
      'لو عندك مصفوفة 1,000,000 عنصر، إيه أسوأ عدد مقارنات ممكن؟',
      'إيه احتمال إن الـ randomized pivot يختار أقصى عنصر مرتين ورا بعض؟',
      'إيه العلاقة بين عمق الـ recursion tree وعدد العناصر؟',
      'احسب الـ recurrence: T(n) = T(n-1) + O(n) عشان توصل لـ O(n²) في أسوأ حالة.',
    ],
  },
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
  {
    id: 'stack',
    num: 'D2',
    line: 'ds',
    x: 560,
    y: 210,
    slug: 'stack',
    href: '/data-structures/stack',
    level: 'مبتدئ',
    next: 'hash-table',

    title: 'المكدس',
    titleEn: 'Stack',
    summary: 'هيكل بيانات بيتبع Last In First Out — آخر عنصر داخل هو أول عنصر خارج.',
    date: '2026',
    tags: ['stack', 'LIFO', 'O(1) push/pop'],

    whatItDoes:
      'الـ Stack هيكل بيانات خطي بيتبع مبدأ LIFO (Last In First Out). آخر عنصر تدخّله هو أول عنصر يطلع. العمليات الأساسية: push (إضافة فوق)، pop (شيل من فوق)، peek (شوف اللي فوق من غير ما تشيله). كل العمليات دي بتشتغل في O(1).',

    explanation: `تخيّل رزمة أطباق. بتحط طبق فوق التاني، ولما تيجي تاخد طبق، بتاخد اللي فوق الأول. مستحيل تاخد الطبق اللي في النص من غير ما تشيل اللي فوقه. ده الـ Stack بالظبط.

الـ Stack بيستخدم في حاجات كتير في البرمجة:
- الـ Call Stack بتاع الدوال: كل دالة بتتنادى، بتتحط في الـ Stack، ولما تخلص بتتشال.
- Undo/Redo في الـ editors: كل عملية بتتحط في Stack، ولما تضغط Ctrl+Z بتتشال آخر عملية.
- تحقق من تطابق الأقواس: بتفتح قوس → push، بتقفل قوس → pop.
- الـ DFS traversal للـ graphs.
- Postfix expressions evaluation.

العمليات الأساسية:
- push(x): ضيف x فوق الـ Stack.
- pop(): شيل العنصر اللي فوق.
- peek(): شوف العنصر اللي فوق من غير ما تشيله.
- isEmpty(): هل الـ Stack فاضي؟

التطبيق في JavaScript ممكن يكون بـ Array (push/pop built-in)، أو بـ Linked List لو عايز ضمان O(1) على طول.

الفرق بين الـ Stack والـ Queue:
- Stack: LIFO — آخر واحد دخل، أول واحد يطلع.
- Queue: FIFO — أول واحد دخل، أول واحد يطلع.`,

    codeBreakdown: [
      { line: 'class Stack {', note: 'بنعرّف كلاس Stack. الـ ES6 class بيخلي الكود منظم.' },
      { line: '  constructor() {', note: 'الـ constructor بيشتغل لما نعمل instance جديد.' },
      { line: '    this.items = [];', note: 'بنخزّن العناصر في array. الـ array بتوفّر علينا push/pop جاهزين.' },
      { line: '  }', note: 'نهاية الـ constructor.' },
      { line: '  push(element) {', note: 'إضافة عنصر فوق الـ Stack.' },
      { line: '    this.items.push(element);', note: 'بنستخدم push الجاهزة في Array — O(1).' },
      { line: '  }', note: 'نهاية push.' },
      { line: '  pop() {', note: 'شيل العنصر اللي فوق.' },
      { line: '    if (this.isEmpty()) return null;', note: 'لو فاضي نرجع null بدل ما نرمي error.' },
      { line: '    return this.items.pop();', note: 'بنستخدم pop الجاهزة — O(1).' },
      { line: '  }', note: 'نهاية pop.' },
      { line: '  peek() {', note: 'شوف العنصر اللي فوق من غير ما تشيله.' },
      { line: '    if (this.isEmpty()) return null;', note: 'لو فاضي نرجع null.' },
      { line: '    return this.items[this.items.length - 1];', note: 'بنرجع آخر عنصر — O(1).' },
      { line: '  }', note: 'نهاية peek.' },
      { line: '  isEmpty() {', note: 'هل الـ Stack فاضي؟' },
      { line: '    return this.items.length === 0;', note: 'بس بنشوف الطول.' },
      { line: '  }', note: 'نهاية isEmpty.' },
      { line: '  size() {', note: 'كم عدد العناصر.' },
      { line: '    return this.items.length;', note: 'طول الـ array.' },
      { line: '  }', note: 'نهاية size.' },
      { line: '}', note: 'نهاية الكلاس.' },
    ],

    live: STACK_RUNNABLE,

    practice: {
      prompt:
        'اكتب كلاس Stack فيه methods: push, pop, peek, isEmpty, size. الـ pop و peek بيرجعوا null لو الـ Stack فاضي.',
      functionName: 'Stack',
      starter: `class Stack {
  constructor() {

  }

  push(element) {

  }

  pop() {

  }

  peek() {

  }

  isEmpty() {

  }

  size() {

  }
}`,
      solution: `class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}`,
      tests: [],
    },

    quizzes: [
      {
        question: 'إيه الترتيب اللي الـ Stack بيتبعه؟',
        options: ['FIFO', 'LIFO', 'Random', 'Priority-based'],
        correct: 1,
        explanation: 'LIFO — Last In First Out. آخر عنصر دخل هو أول عنصر يطلع.',
      },
      {
        question: 'إيه الـ Time Complexity لـ push و pop في Stack بـ Array؟',
        options: ['O(n) للأتنين', 'O(1) للأتنين', 'O(log n) للأتنين', 'O(1) لـ push و O(n) لـ pop'],
        correct: 1,
        explanation: 'الـ push و pop بيشتغلوا على آخر الـ array، والوصول لآخر عنصر بياخد وقت ثابت.',
      },
      {
        question: 'لو عندك تطبيق بيعمل Undo/Redo، إيه الهيكل المناسب؟',
        options: ['Queue', 'Linked List', 'Stack', 'Tree'],
        correct: 2,
        explanation: 'الـ Stack مثالي لـ Undo لأنه LIFO — آخر عملية اتعملت هي أول واحدة تتلغى.',
      },
    ],

    useCases: [
      'Call Stack في اللغات البرمجية — كل function call بتتحط في Stack',
      'Undo/Redo في الـ editors والـ IDEs',
      'تحقق من تطابق الأقواس في الـ parsers',
      'DFS (Depth-First Search) للـ graphs والـ trees',
      'تقييم الـ Postfix والـ Prefix expressions',
      'Back button في الـ browsers (زي ما بتتنقل بين صفحات)',
      'Browser History navigation',
    ],

    whyItsGoodHere:
      'الـ Stack هو الخيار الأمثل لما: (1) محتاج تتعامل مع آخر عنصر تمت إضافته (LIFO)، أو (2) بتعمل backtracking أو recursion، أو (3) محتاج ترجع لآخر حالة. كل العمليات الأساسية O(1)، وبسيط جدًا في التنفيذ. لو محتاج FIFO، استخدم Queue. لو محتاج وصول عشوائي، استخدم Array أو Hash Table.',

    relatedIdeas: [
      'Queue — FIFO: أول واحد دخل، أول واحد يطلع',
      'Deque — بيشتغل من الناحيتين (stack + queue)',
      'Call Stack — الـ Stack الداخلي للـ runtime',
      'Monotonic Stack — Stack مرتب، بيستخدم في مسائل كتير',
      'Priority Queue — Queue بأولويات (heap-based)',
      'Expression Parsers — بتحوّل infix لـ postfix باستخدام Stack',
    ],

    mathProblems: [
      'لو عندك 100 دالة متداخلة، إيه أقصى عمق للـ Call Stack؟',
      'كام عملية push و pop محتاجين عشان نعكس string فيه n حرف؟',
      'إيه عدد الـ permutations الممكنة لـ n عنصر تدخل وتطلع من Stack؟ (Catalan number)',
      'احسب عدد الـ balanced parentheses strings لـ n زوج من الأقواس.',
      'إيه علاقة الـ Stack بـ recursion depth؟',
    ],
  },
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

أولاً: fetch مش بترمي error على 404 أو 500

ده أغرب حاجة. لو السيرفر رد بـ "404 Not Found"، الـ Promise بيتحل بنجاح! مش error. لازم تتحقق من response.ok بنفسك:

  if (!response.ok) throw new Error('HTTP ' + response.status);

النوع الوحيد من الأخطاء اللي fetch بترميها تلقائياً هو:
- انقطاع الشبكة (Network failure)
- DNS مش موجود
- الطلب اتلغى (AbortController)

ثانياً: response.json() بترجّع Promise كمان

لما بتكتب:

  const data = await response.json();

ده await تاني. ليه؟ لأن الـ body بتاع الـ response بيتقرأ كتيار بيانات (stream). ممكن يكون كبير جداً، فمش منطقي نستنى كله قبل ما نرجّع. في الـ modern fetch، بتقرأ الـ body بـ methods مختلفة:
- response.json() للـ JSON
- response.text() للـ text
- response.blob() للصور والملفات
- response.arrayBuffer() للبيانات الثنائية

الجمال الحقيقي في fetch بإنها بسيطة:

سطر واحد عشان تجيب بيانات من أي API في الدنيا. مقارنة بـ XMLHttpRequest القديم اللي كان محتاج 15 سطر كود، ده ثورة حقيقية.

في الـ Visualizations اللي تحت، هتجرّب 4 حاجات:

1. Lifecycle: شوف رحلة الـ request والـ response بنفسك
2. Live Explorer: اضرب APIs حقيقية وشوف كل تفصيلة
3. Code Playground: اكتب كود fetch بنفسك وشغّله فوراً
4. Error Lab: جرّب الأنواع المختلفة من الأخطاء وشوف سلوك fetch في كل حالة`,

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
  {
    id: 'promise',
    num: 'P2',
    line: 'api',
    x: 560,
    y: 350,
    slug: 'promise',
    href: '/built-in-apis/promise',
    level: 'مبتدئ',
    next: 'array-map',

    title: 'الوعود',
    titleEn: 'Promise',
    summary: 'كائن بيمثل نتيجة عملية async — إما تنجح، أو تفشل، أو لسه pending.',
    date: '2026',
    tags: ['promise', 'async', 'then', 'catch', 'finally'],

    whatItDoes:
      'الـ Promise كائن في JavaScript بيمثل نتيجة عملية async. عنده 3 حالات: pending (لسه شغالة)، fulfilled (نجحت)، rejected (فشلت). بتستخدم .then() عشان تتعامل مع النجاح، .catch() مع الفشل، و .finally() لأي حاجة عايز تنفذها في كل الحالات. بتحل مشكلة الـ Callback Hell وبتخلي الكود أنضف.',

    explanation: `تخيّل إنك طلبت بيتزا من مطعم. الـ promise اللي اديته للويتر هو "كائن" بيمثل الاتفاق. في الحالة دي، الحالة "pending" — يعني الطلب لسه في المطبخ.

لما البيتزا تجهز، الـ promise بتبقى "fulfilled" — ييجي الويتر يديك البيتزا (ده الـ then). لو حصلت مشكلة (الفرن عطل مثلاً)، الـ promise بتبقى "rejected" — الويتر يقولك للأسف مفيش بيتزا (ده الـ catch).

في الحالتين، أي حاجة عايز تعملها بعد ما تخلص القصة (تدفع الحساب مثلاً) بتعملها في الـ finally.

الحالات التلاتة:
- pending: العملية لسه شغالة.
- fulfilled: خلصت بنجاح ولها قيمة (value).
- rejected: خلصت بفشل ولها سبب (reason/error).

بتنشئ Promise بـ new Promise((resolve, reject) => {...}). جوه الـ executor، بتنادى resolve(value) لما تنجح، أو reject(error) لما تفشل.

ميزة الـ Promise عن الـ callbacks:
- بتخلي الكود يتقرا من فوق لتحت (chainable).
- بتتعامل مع الأخطاء بشكل موحّد.
- بتقدر تنتظر كذا Promise مع بعض بـ Promise.all أو Promise.race.
- async/await بتبني فوقها وبتخلي الكود يبان كأنه sync.

أشهر الـ methods:
- .then(onFulfilled, onRejected) — بترجع Promise جديد.
- .catch(onRejected) — اختصار لـ then(null, onRejected).
- .finally(onFinally) — بيتنفذ في كل الحالات.
- Promise.all([...]) — بينتظر كل الـ promises.
- Promise.race([...]) — أول promise يخلص (نجاح أو فشل).
- Promise.allSettled([...]) — بينتظر الكل ويجيب نتايجهم.
- Promise.any([...]) — أول promise ينجح.`,

    codeBreakdown: [
      { line: 'const p = new Promise((resolve, reject) => {', note: 'بنعمل Promise جديد. الـ executor function بتشتغل فورًا.' },
      { line: '  setTimeout(() => {', note: 'بنحاكي عملية async بتاخد وقت.' },
      { line: '    const success = true;', note: 'بنجرّب نجاح أو فشل.' },
      { line: '    if (success) resolve("Done!");', note: 'لو نجحت — بنستدعي resolve بالقيمة.' },
      { line: '    else reject(new Error("Failed"));', note: 'لو فشلت — بنستدعي reject بالخطأ.' },
      { line: '  }, 1000);', note: 'بعد ثانية واحدة.' },
      { line: '});', note: 'نهاية الـ Promise.' },
      { line: '', note: '—' },
      { line: 'p.then(value => {', note: 'بنستقبل القيمة لو الـ Promise اتحل.' },
      { line: '  console.log("Success:", value);', note: 'بنستخدم القيمة.' },
      { line: '}).catch(error => {', note: 'بنستقبل الخطأ لو الـ Promise اترفض.' },
      { line: '  console.error("Error:", error.message);', note: 'بنعالج الخطأ.' },
      { line: '}).finally(() => {', note: 'بيتنفذ في كل الحالات.' },
      { line: '  console.log("Done either way");', note: 'تنظيف أو logging.' },
      { line: '});', note: 'نهاية الـ chain.' },
    ],

    live: PROMISE_RUNNABLE,

    practice: {
      prompt:
        'اكتب دالة delay(ms) بترجع Promise بتتحل بعد ms millisecond. الـ resolve مش محتاج يبعت قيمة.',
      functionName: 'delay',
      starter: `function delay(ms) {

}`,
      solution: `function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}`,
      tests: [],
    },

    quizzes: [
      {
        question: 'كم عدد حالات الـ Promise؟',
        options: ['2', '3', '4', '5'],
        correct: 1,
        explanation: 'تلات حالات: pending، fulfilled، rejected. بعد ما تتحل أو تترفض، الحالة مابتتغيرش تاني.',
      },
      {
        question: 'إيه الفرق بين .then() و .finally()؟',
        options: [
          'مفيش فرق',
          'then بتشتغل على النجاح بس، finally بتشتغل في كل الحالات',
          'finally بتشتغل على الفشل بس',
          'then دايماً بتشتغل، finally بس لو نجحت',
        ],
        correct: 1,
        explanation: '.finally() بتتنفذ في كل الحالات (نجاح أو فشل)، بينما .then(onFulfilled) بتتنفذ بس لما الـ promise يتحل بنجاح.',
      },
      {
        question: 'إيه الفرق بين Promise.all و Promise.race؟',
        options: [
          'مفيش فرق',
          'all بتستنى الكل يخلص، race بتاخد أول واحد يخلص',
          'race بتستنى الكل، all بتاخد الأول',
          'all بتشتغل بس مع arrays فاضية',
        ],
        correct: 1,
        explanation: 'Promise.all بتستنى كل الـ promises تنتهي، و Promise.race بتاخد أول promise ينتهي (نجاح أو فشل).',
      },
      {
        question: 'لو Promise اترفضت ومكنش فيه .catch()، إيه اللي يحصل؟',
        options: [
          'مفيش حاجة',
          'بيطلع Unhandled Rejection',
          'الكود بيتوقف',
          'بتتحول لـ resolved',
        ],
        correct: 1,
        explanation: 'بيطلع تحذير Unhandled Promise Rejection في الـ console، وممكن يعمل crash في بيئات Node الحديثة.',
      },
    ],

    useCases: [
      'كل عملية fetch() بترجع Promise',
      'قراءة ملفات بـ fs.promises في Node',
      'التعامل مع setTimeout بشكل async',
      'تشغيل كذا async operation بالتوازي (Promise.all)',
      'Race conditions — أول نتيجة توصل',
      'Form submissions اللي بترجع نتيجة من السيرفر',
      'Animation timing و sequence',
    ],

    whyItsGoodHere:
      'الـ Promise هي الأساس اللي JavaScript الحديثة بُنيت عليه. أي async operation بترجع Promise — من fetch() لـ file reading لـ DB queries. فهم الـ Promise بعمق بيمهدلك تتعلم async/await (اللي هو syntactic sugar فوقها)، وبيمكّنك من التعامل مع العمليات المعقدة زي Promise.all و Promise.race. لو فاهم الـ Promise كويس، فاهم 80% من الـ async في JavaScript.',

    relatedIdeas: [
      'async/await — syntactic sugar للـ Promise',
      'Callback — الطريقة القديمة للـ async',
      'Promise.all — بينتظر كل الـ promises',
      'Promise.race — أول promise يخلص',
      'Promise.allSettled — بينتظر الكل ويرجع النتايج',
      'Promise.any — أول promise ينجح',
      'Event Loop — إزاي الـ promises بتتنفذ في الـ microtask queue',
      'Microtask Queue — بيشتغل قبل الـ macrotask queue',
    ],

    mathProblems: [
      'لو عندك 3 promises كل واحد بياخد t ثانية، وكودك بيستخدم Promise.all، إيه الوقت الكلي؟',
      'ولو استخدمت .then() متسلسل، إيه الوقت الكلي؟',
      'في حالة 1000 request في Promise.all، وكل واحد عنده احتمال فشل 0.01، إيه احتمال إن كلهم ينجحوا؟',
      'إيه الفرق في الـ throughput بين Promise.all و loop عادي من غير promise.all؟',
      'لو promise بيفشل بعد 5 ثواني، وهناك timeout على 3 ثواني، مين هيكسب؟',
    ],
  },
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