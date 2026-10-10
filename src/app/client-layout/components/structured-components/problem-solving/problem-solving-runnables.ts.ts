import type { IProblemSolvingRunnable } from '../../../../shared-components/shared-code/shared-code.component';

const BASE_CSS = `
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  min-height: 100vh;
  background: #0A1017;
  color: #E9EFF5;
  font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif;
  padding: 14px;
}
.app {
  max-width: 1100px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: calc(100vh - 28px);
}
.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: flex-end;
  padding: 12px 14px;
  background: #131C26;
  border: 1px solid #1E2D42;
  border-radius: 8px;
}
.ctrl {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 180px;
}
label {
  font-family: ui-monospace, Consolas, monospace;
  font-size: 10px;
  color: #6B7C92;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
input {
  padding: 8px 12px;
  font-family: ui-monospace, Consolas, monospace;
  font-size: 14px;
  color: #E9EFF5;
  background: #0A1017;
  border: 1px solid #1E2D42;
  border-radius: 4px;
  outline: none;
  direction: ltr;
}
input:focus { border-color: #5B9DFF; }
.btns { display: flex; gap: 6px; flex-wrap: wrap; }
.btns button {
  padding: 8px 14px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  color: #E9EFF5;
  background: #0A1017;
  border: 1px solid #2A3846;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.15s;
  white-space: nowrap;
}
.btns button:hover:not(:disabled) { border-color: #5B9DFF; color: #5B9DFF; }
.btns button.primary { background: #F2B200; border-color: #F2B200; color: #0A1017; font-weight: 700; }
.btns button.primary:hover { opacity: 0.9; color: #0A1017; }
.btns button:disabled { opacity: 0.35; cursor: not-allowed; }
.stage {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 24px 20px;
  background: #0A1017;
  border: 1px solid #1E2D42;
  border-radius: 8px;
  min-height: 220px;
  flex: 1;
  overflow-x: auto;
  direction: ltr;
  flex-wrap: wrap;
  position: relative;
}
.cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 44px;
  flex-shrink: 0;
}
.cell .val {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  font-family: ui-monospace, Consolas, monospace;
  font-size: 16px;
  font-weight: 700;
  color: #E9EFF5;
  background: #131C26;
  border: 2px solid #2A3846;
  border-radius: 6px;
  transition: all 0.25s ease;
}
.cell .idx {
  font-family: ui-monospace, Consolas, monospace;
  font-size: 10px;
  color: #6B7C92;
}
.cell.active .val { border-color: #F2B200; background: #F2B200; color: #0A1017; box-shadow: 0 0 0 4px rgba(242,178,0,0.15); }
.cell.window .val { border-color: #5B9DFF; background: rgba(91,157,255,0.15); }
.cell.matched .val { border-color: #4CD08A; background: #4CD08A; color: #0A1017; }
.cell.mismatch .val { border-color: #F26B62; background: rgba(242,107,98,0.2); color: #F26B62; }
.cell.done .val { border-color: #4CD08A; opacity: 0.5; }
.cell.pointer-l::after,
.cell.pointer-r::after,
.cell.pointer-m::after {
  position: absolute;
  top: -22px;
  font-family: ui-monospace, Consolas, monospace;
  font-size: 11px;
  font-weight: 700;
}
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 8px;
}
.stat {
  padding: 10px 14px;
  background: #131C26;
  border: 1px solid #1E2D42;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.stat span {
  font-family: ui-monospace, Consolas, monospace;
  font-size: 10px;
  color: #6B7C92;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.stat b {
  font-family: ui-monospace, Consolas, monospace;
  font-size: 16px;
  color: #5B9DFF;
  font-weight: 700;
}
.log {
  padding: 12px 14px;
  background: #0A1017;
  border: 1px solid #1E2D42;
  border-radius: 6px;
  font-family: ui-monospace, Consolas, monospace;
  font-size: 12px;
  line-height: 1.8;
  color: #8394A5;
  min-height: 90px;
  max-height: 180px;
  overflow-y: auto;
  white-space: pre-wrap;
  direction: rtl;
  text-align: right;
}
.log .ok { color: #4CD08A; }
.log .warn { color: #F2B200; }
.log .info { color: #5B9DFF; }
.log .err { color: #F26B62; }
.node {
  display: flex;
  align-items: stretch;
  border: 2px solid #5B9DFF;
  border-radius: 6px;
  background: #131C26;
  flex-shrink: 0;
  transition: all 0.3s;
}
.node .val {
  padding: 12px 20px;
  font-family: ui-monospace, Consolas, monospace;
  font-size: 16px;
  font-weight: 700;
  min-width: 55px;
  text-align: center;
}
.node .next {
  width: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0A1017;
  color: #6B7C92;
  border-inline-start: 1px solid #2A3846;
  font-size: 14px;
}
.node.active { border-color: #F2B200; box-shadow: 0 0 0 4px rgba(242,178,0,0.15); }
.node.active .val { background: #F2B200; color: #0A1017; }
.node.deleted { border-color: #F26B62; opacity: 0.3; }
.node.deleted .val { text-decoration: line-through; }
.arrow { color: #5B9DFF; font-size: 20px; font-family: monospace; }
.null-node { color: #6B7C92; font-family: ui-monospace, Consolas, monospace; font-size: 16px; padding: 0 10px; }
.empty { color: #6B7C92; font-family: ui-monospace, Consolas, monospace; padding: 20px; }
.stack {
  display: flex;
  flex-direction: column-reverse;
  gap: 4px;
  min-width: 60px;
  min-height: 140px;
  padding: 8px;
  background: #0A1017;
  border: 2px dashed #2A3846;
  border-radius: 6px;
  align-items: center;
  justify-content: flex-start;
}
.stack-item {
  padding: 8px 18px;
  font-family: ui-monospace, Consolas, monospace;
  font-size: 16px;
  font-weight: 700;
  background: #5B9DFF;
  color: #0A1017;
  border-radius: 4px;
  min-width: 44px;
  text-align: center;
}
.stack-item.top { background: #F2B200; }
.stack-empty { color: #6B7C92; font-size: 12px; font-family: ui-monospace, Consolas, monospace; padding: 20px; }
`;

function makeHtml(label: string, defaultValue: string, type = 'text'): string {
    return `<div class="app">
  <div class="controls">
    <div class="ctrl">
      <label>${label}</label>
      <input type="${type}" id="in" value="${defaultValue}" dir="ltr">
    </div>
    <div class="btns">
      <button id="run" class="primary">▶ شغّل</button>
      <button id="step">⏭ خطوة</button>
      <button id="reset">↺ رجّع</button>
    </div>
  </div>
  <div class="stage" id="stage" dir="ltr"></div>
  <div class="stats" id="stats"></div>
  <div class="log" id="log"></div>
</div>`;
}

const HARNESS = `
const $ = id => document.getElementById(id);
let state = null, timer = null;
function log(msg, cls) {
  const el = $('log');
  const line = document.createElement('div');
  if (cls) line.className = cls;
  line.textContent = msg;
  el.appendChild(line);
  el.scrollTop = el.scrollHeight;
}
function setStats(pairs) {
  $('stats').innerHTML = pairs.map(p =>
    '<div class="stat"><span>' + p[0] + '</span><b>' + p[1] + '</b></div>'
  ).join('');
}
function init() {
  stop();
  try {
    state = { steps: build($('in').value), idx: -1 };
    $('log').innerHTML = '';
    render(-1);
  } catch (e) {
    $('stage').innerHTML = '<div class="empty">' + (e && e.message || e) + '</div>';
    log('✕ ' + (e && e.message || e), 'err');
  }
}
function go() {
  if (!state || state.idx >= state.steps.length - 1) return false;
  state.idx++;
  render(state.idx);
  return true;
}
function play() {
  if (timer) { stop(); return; }
  if (!state || state.idx >= state.steps.length - 1) init();
  $('run').textContent = '⏸ وقّف';
  timer = setInterval(() => { if (!go()) stop(); }, 700);
}
function stop() {
  if (timer) { clearInterval(timer); timer = null; }
  $('run').textContent = '▶ شغّل';
}
document.addEventListener('DOMContentLoaded', () => {
  $('run').onclick = play;
  $('step').onclick = () => { stop(); go(); };
  $('reset').onclick = () => { stop(); init(); };
  $('in').addEventListener('change', init);
  $('in').addEventListener('keydown', e => { if (e.key === 'Enter') init(); });
  init();
});
`;

export const PROBLEM_RUNNABLES: Record<string, IProblemSolvingRunnable> = {

    'roman-to-integer': {
        html: makeHtml('roman numeral', 'MCMXCIV'),
        css: BASE_CSS,
        js: `
${HARNESS}
function build(input) {
  const s = (input || '').trim().toUpperCase();
  if (!s) throw new Error('Enter a roman numeral');
  const M = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
  for (const ch of s) if (!M[ch]) throw new Error('Invalid symbol: ' + ch);
  const steps = [];
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = M[s[i]], nxt = M[s[i + 1]] || 0;
    const sub = cur < nxt;
    result += sub ? -cur : cur;
    steps.push({ i, cur, nxt, sub, result, char: s[i], nextChar: s[i+1] || '—' });
  }
  steps.push({ i: -1, cur: 0, nxt: 0, sub: false, result, char: '', nextChar: '', final: true });
  return { s, steps };
}
function render(idx) {
  const { s, steps } = state.steps || state;
  const step = steps[Math.max(0, idx)];
  const stage = $('stage');
  stage.innerHTML = '';
  for (let i = 0; i < s.length; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    if (i === step.i) cell.classList.add('active');
    else if (i < step.i) cell.classList.add('done');
    const v = document.createElement('div');
    v.className = 'val';
    v.textContent = s[i];
    const ix = document.createElement('div');
    ix.className = 'idx';
    ix.textContent = i;
    cell.appendChild(v);
    cell.appendChild(ix);
    stage.appendChild(cell);
  }
  setStats([
    ['الحرف الحالي', step.final ? '✓' : (step.char + ' = ' + step.cur)],
    ['الحرف التالي', step.final ? '—' : (step.nextChar + (step.nxt ? ' = ' + step.nxt : ''))],
    ['العملية', step.final ? 'خلصنا' : (step.sub ? 'SUB' : 'ADD')],
    ['النتيجة', step.result]
  ]);
  if (idx >= 0 && !step.final) {
    log((step.sub ? '− ' : '+ ') + step.cur + '  →  ' + step.result, step.sub ? 'warn' : 'info');
  }
  if (step.final) log('✓ النتيجة النهائية: ' + step.result, 'ok');
}
state = { steps: build($('in').value) };
state.idx = -1;
`
    },

    'longest-substring': {
        html: makeHtml('string', 'abcabcbb'),
        css: BASE_CSS,
        js: `
${HARNESS}
function build(input) {
  const s = input || '';
  if (!s) throw new Error('Enter a string');
  const steps = [];
  let left = 0, best = 0, bestStart = 0;
  const set = new Set();
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
      steps.push({ left, right, set: [...set], best, window: s.slice(left, right), action: 'shrink' });
    }
    set.add(s[right]);
    const len = right - left + 1;
    if (len > best) { best = len; bestStart = left; }
    steps.push({ left, right, set: [...set], best, window: s.slice(left, right + 1), bestStr: s.slice(bestStart, bestStart + best), action: 'add' });
  }
  steps.push({ left, right: s.length - 1, set: [...set], best, bestStr: s.slice(bestStart, bestStart + best), action: 'done' });
  return { s, steps };
}
function render(idx) {
  const { s, steps } = state.steps || state;
  const step = steps[Math.max(0, idx)];
  const stage = $('stage');
  stage.innerHTML = '';
  for (let i = 0; i < s.length; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    if (i === step.right) cell.classList.add('active');
    else if (i >= step.left && i <= step.right) cell.classList.add('window');
    const v = document.createElement('div');
    v.className = 'val';
    v.textContent = s[i];
    const ix = document.createElement('div');
    ix.className = 'idx';
    ix.textContent = i;
    cell.appendChild(v);
    cell.appendChild(ix);
    stage.appendChild(cell);
  }
  setStats([
    ['left', step.left],
    ['right', step.right],
    ['window', step.window || '—'],
    ['best', step.best]
  ]);
  if (step.action === 'add') log('add "' + s[step.right] + '" → window="' + step.window + '" len=' + step.window.length, 'info');
  else if (step.action === 'shrink') log('shrink → window="' + step.window + '"', 'warn');
  else if (step.action === 'done') log('✓ Longest = "' + step.bestStr + '" (len=' + step.best + ')', 'ok');
}
state = { steps: build($('in').value) };
`
    },

    'palindrome-number': {
        html: makeHtml('number', '121', 'number'),
        css: BASE_CSS,
        js: `
${HARNESS}
function build(input) {
  const s = String(input || '').trim();
  if (!s) throw new Error('Enter a number');
  const steps = [];
  let i = 0, j = s.length - 1;
  while (i < j) {
    const match = s[i] === s[j];
    steps.push({ i, j, match, done: false });
    if (!match) break;
    i++; j--;
  }
  steps.push({ i, j, match: true, done: true, result: i >= j });
  return { s, steps };
}
function render(idx) {
  const { s, steps } = state.steps || state;
  const step = steps[Math.max(0, idx)];
  const stage = $('stage');
  stage.innerHTML = '';
  for (let k = 0; k < s.length; k++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    if (k === step.i || k === step.j) cell.classList.add(step.match ? 'matched' : 'mismatch');
    else if (k < step.i || k > step.j) cell.classList.add('done');
    const v = document.createElement('div');
    v.className = 'val';
    v.textContent = s[k];
    const ix = document.createElement('div');
    ix.className = 'idx';
    ix.textContent = k;
    cell.appendChild(v);
    cell.appendChild(ix);
    stage.appendChild(cell);
  }
  setStats([
    ['i', step.i],
    ['j', step.j],
    ['القيم', s[step.i] + ' vs ' + s[step.j]],
    ['النتيجة', step.done ? (step.result ? 'Palindrome ✓' : 'Not Palindrome ✕') : '...']
  ]);
  if (idx >= 0 && !step.done) log(s[step.i] + ' === ' + s[step.j] + ' ? ' + (step.match ? '✓' : '✕'), step.match ? 'info' : 'err');
  if (step.done) log('✓ النتيجة: ' + (step.result ? 'Palindrome' : 'Not Palindrome'), step.result ? 'ok' : 'err');
}
state = { steps: build($('in').value) };
`
    },

    'longest-common-prefix': {
        html: makeHtml('strings (comma separated)', 'flower,flow,flight'),
        css: BASE_CSS,
        js: `
${HARNESS}
function build(input) {
  const arr = (input || '').split(',').map(s => s.trim()).filter(Boolean);
  if (!arr.length) throw new Error('Enter strings');
  const steps = [];
  let prefix = '';
  for (let i = 0; i < arr[0].length; i++) {
    const ch = arr[0][i];
    for (let j = 1; j < arr.length; j++) {
      steps.push({ i, j, ch, compare: arr[j][i], match: arr[j][i] === ch, prefix });
      if (arr[j][i] !== ch) {
        steps.push({ i, j, ch, compare: arr[j][i], match: false, prefix, done: true });
        return { arr, steps };
      }
    }
    prefix += ch;
    steps.push({ i, match: true, prefix, added: true });
  }
  steps.push({ done: true, prefix, match: true });
  return { arr, steps };
}
function render(idx) {
  const { arr, steps } = state.steps || state;
  const step = steps[Math.max(0, idx)];
  const stage = $('stage');
  stage.innerHTML = '';
  arr.forEach((str, row) => {
    const rowDiv = document.createElement('div');
    rowDiv.style.cssText = 'display:flex;gap:4px;width:100%;justify-content:center;margin-bottom:6px;flex-wrap:nowrap';
    for (let i = 0; i < str.length; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      if (step.i === i && (step.j === row || row === 0)) cell.classList.add(step.match ? 'matched' : 'mismatch');
      else if (i < (step.prefix || '').length) cell.classList.add('done');
      const v = document.createElement('div');
      v.className = 'val';
      v.textContent = str[i];
      const ix = document.createElement('div');
      ix.className = 'idx';
      ix.textContent = i;
      cell.appendChild(v);
      cell.appendChild(ix);
      rowDiv.appendChild(cell);
    }
    stage.appendChild(rowDiv);
  });
  setStats([
    ['الحرف', step.ch || '—'],
    ['المقارنة مع', step.compare || '—'],
    ['النوع', step.match ? '✓ match' : '✕ mismatch'],
    ['البادئة', '"' + (step.prefix || '') + '"']
  ]);
  if (step.added) log('✓ أضفنا "' + step.ch + '" → prefix="' + step.prefix + '"', 'ok');
  else if (step.done) log('✓ LCP = "' + step.prefix + '"', 'ok');
  else if (idx >= 0) log('"\' + step.ch + '" vs "' + step.compare + '" → ' + (step.match ? 'match' : 'mismatch'), step.match ? 'info' : 'err');
}
state = { steps: build($('in').value) };
`
    },

    'valid-parentheses': {
        html: makeHtml('brackets', '([])'),
        css: BASE_CSS,
        js: `
${HARNESS}
function build(input) {
  const s = input || '';
  if (!s) throw new Error('Enter brackets');
  const steps = [];
  const stack = [];
  const M = { ')': '(', ']': '[', '}': '{' };
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if ('([{'.includes(ch)) {
      stack.push(ch);
      steps.push({ i, ch, stack: [...stack], action: 'push' });
    } else {
      const top = stack[stack.length - 1];
      const ok = M[ch] === top;
      steps.push({ i, ch, stack: [...stack], action: 'pop', ok, expected: M[ch], actual: top });
      if (!ok) return { s, steps };
      stack.pop();
    }
  }
  steps.push({ done: true, stack: [...stack], valid: stack.length === 0 });
  return { s, steps };
}
function render(idx) {
  const { s, steps } = state.steps || state;
  const step = steps[Math.max(0, idx)];
  const stage = $('stage');
  stage.innerHTML = '';
  const left = document.createElement('div');
  left.style.cssText = 'display:flex;gap:4px;flex-wrap:wrap;justify-content:center;flex:1';
  for (let i = 0; i < s.length; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    if (i === step.i) cell.classList.add(step.ok === false ? 'mismatch' : 'active');
    else if (i < (step.i ?? 999)) cell.classList.add('done');
    const v = document.createElement('div');
    v.className = 'val';
    v.textContent = s[i];
    cell.appendChild(v);
    left.appendChild(cell);
  }
  const stackWrap = document.createElement('div');
  const label = document.createElement('div');
  label.style.cssText = 'font-size:10px;color:#6B7C92;letter-spacing:0.08em;text-align:center;margin-bottom:4px';
  label.textContent = 'STACK';
  const stackEl = document.createElement('div');
  stackEl.className = 'stack';
  if (!step.stack || step.stack.length === 0) {
    stackEl.innerHTML = '<div class="stack-empty">(فاضي)</div>';
  } else {
    step.stack.forEach((c, i) => {
      const item = document.createElement('div');
      item.className = 'stack-item';
      if (i === step.stack.length - 1) item.classList.add('top');
      item.textContent = c;
      stackEl.appendChild(item);
    });
  }
  stackWrap.appendChild(label);
  stackWrap.appendChild(stackEl);
  stage.style.cssText = 'display:flex;align-items:flex-end;justify-content:center;gap:30px;padding:24px;background:#0A1017;border:1px solid #1E2D42;border-radius:8px;min-height:220px;flex:1;flex-wrap:wrap';
  stage.appendChild(left);
  stage.appendChild(stackWrap);
  setStats([
    ['الحرف', step.ch || '—'],
    ['العملية', step.action === 'push' ? 'PUSH' : step.action === 'pop' ? 'POP' : '✓'],
    ['stack size', step.stack ? step.stack.length : 0],
    ['الحالة', step.done ? (step.valid ? 'valid ✓' : 'invalid ✕') : (step.ok === false ? 'مكسور' : '...')]
  ]);
  if (step.action === 'push') log('push "' + step.ch + '" → stack=[' + step.stack.join(',') + ']', 'info');
  else if (step.action === 'pop') log('pop "' + step.ch + '" vs "' + step.expected + '" → ' + (step.ok ? '✓' : '✕'), step.ok ? 'info' : 'err');
  else if (step.done) log('✓ النتيجة: ' + (step.valid ? 'Valid' : 'Invalid'), step.valid ? 'ok' : 'err');
}
state = { steps: build($('in').value) };
`
    },

    'merge-two-sorted-lists': {
        html: makeHtml('two lists (a;b)', '1,2,4;1,3,4'),
        css: BASE_CSS,
        js: `
${HARNESS}
function build(input) {
  const parts = (input || '').split(';');
  if (parts.length < 2) throw new Error('Format: 1,2,4;1,3,4');
  const a = parts[0].split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
  const b = parts[1].split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
  const steps = [];
  const merged = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) { merged.push(a[i]); steps.push({ i, j, merged: [...merged], action: 'take-a', val: a[i] }); i++; }
    else { merged.push(b[j]); steps.push({ i, j, merged: [...merged], action: 'take-b', val: b[j] }); j++; }
  }
  while (i < a.length) { merged.push(a[i]); steps.push({ i, j, merged: [...merged], action: 'take-a', val: a[i] }); i++; }
  while (j < b.length) { merged.push(b[j]); steps.push({ i, j, merged: [...merged], action: 'take-b', val: b[j] }); j++; }
  steps.push({ i, j, merged: [...merged], done: true });
  return { a, b, steps };
}
function render(idx) {
  const { a, b, steps } = state.steps || state;
  const step = steps[Math.max(0, idx)];
  const stage = $('stage');
  stage.style.cssText = 'display:flex;flex-direction:column;gap:14px;padding:24px;background:#0A1017;border:1px solid #1E2D42;border-radius:8px;min-height:220px;flex:1;align-items:center';
  stage.innerHTML = '';
  const renderRow = (arr, prefix, activeIdx) => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:4px;align-items:center;justify-content:center';
    const lbl = document.createElement('span');
    lbl.style.cssText = 'font-family:ui-monospace,monospace;font-size:12px;color:#6B7C92;margin-right:8px';
    lbl.textContent = prefix;
    row.appendChild(lbl);
    arr.forEach((v, k) => {
      const cell = document.createElement('div');
      cell.className = 'cell';
      if (k === activeIdx) cell.classList.add('active');
      else if (k < activeIdx) cell.classList.add('done');
      const vv = document.createElement('div');
      vv.className = 'val';
      vv.textContent = v;
      cell.appendChild(vv);
      row.appendChild(cell);
    });
    return row;
  };
  stage.appendChild(renderRow(a, 'A:', step.i));
  stage.appendChild(renderRow(b, 'B:', step.j));
  const sep = document.createElement('div');
  sep.style.cssText = 'font-family:ui-monospace,monospace;color:#5B9DFF;font-size:16px';
  sep.textContent = '↓';
  stage.appendChild(sep);
  const mergedRow = document.createElement('div');
  mergedRow.style.cssText = 'display:flex;gap:4px;align-items:center;justify-content:center';
  const lbl2 = document.createElement('span');
  lbl2.style.cssText = 'font-family:ui-monospace,monospace;font-size:12px;color:#6B7C92;margin-right:8px';
  lbl2.textContent = 'Out:';
  mergedRow.appendChild(lbl2);
  (step.merged || []).forEach((v) => {
    const cell = document.createElement('div');
    cell.className = 'cell matched';
    const vv = document.createElement('div');
    vv.className = 'val';
    vv.textContent = v;
    cell.appendChild(vv);
    mergedRow.appendChild(cell);
  });
  stage.appendChild(mergedRow);
  setStats([
    ['i', step.i], ['j', step.j],
    ['merged length', (step.merged || []).length],
    ['الحالة', step.done ? 'خلصنا ✓' : '...']
  ]);
  if (idx >= 0 && !step.done) log(step.action === 'take-a' ? 'ناخد ' + step.val + ' من A' : 'ناخد ' + step.val + ' من B', 'info');
  if (step.done) log('✓ Merged = [' + step.merged.join(', ') + ']', 'ok');
}
state = { steps: build($('in').value) };
`
    },

    'remove-duplicates-from-sorted-array': {
        html: makeHtml('sorted array', '0,0,1,1,1,2,2,3,3,4'),
        css: BASE_CSS,
        js: `
${HARNESS}
function build(input) {
  const nums = (input || '').split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
  if (!nums.length) throw new Error('Enter numbers');
  const arr = [...nums];
  const steps = [];
  let k = 1;
  for (let i = 1; i < arr.length; i++) {
    const same = arr[i] === arr[i - 1];
    steps.push({ i, k, arr: [...arr], same });
    if (!same) { arr[k] = arr[i]; k++; steps.push({ i, k, arr: [...arr], moved: true }); }
  }
  steps.push({ i: -1, k, arr: [...arr], done: true });
  return { original: nums, steps };
}
function render(idx) {
  const { steps } = state.steps || state;
  const step = steps[Math.max(0, idx)];
  const stage = $('stage');
  stage.innerHTML = '';
  stage.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;justify-content:center;padding:24px;background:#0A1017;border:1px solid #1E2D42;border-radius:8px;min-height:220px;flex:1;align-items:center';
  step.arr.forEach((v, i) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    if (i === step.i) cell.classList.add('active');
    else if (i === step.k && step.moved) cell.classList.add('matched');
    else if (i < step.k) cell.classList.add('done');
    const vv = document.createElement('div');
    vv.className = 'val';
    vv.textContent = v;
    const ix = document.createElement('div');
    ix.className = 'idx';
    ix.textContent = i;
    cell.appendChild(vv);
    cell.appendChild(ix);
    stage.appendChild(cell);
  });
  setStats([
    ['i', step.i === -1 ? '—' : step.i],
    ['k', step.k],
    ['unique', step.k],
    ['الحالة', step.done ? 'خلصنا ✓' : '...']
  ]);
  if (idx >= 0 && !step.done && !step.moved) log((step.same ? '✕ مكرر' : '✓ unique') + ' عند i=' + step.i, step.same ? 'warn' : 'info');
  if (step.moved) log('نقل [' + step.i + '] إلى [' + (step.k - 1) + ']', 'ok');
  if (step.done) log('✓ k=' + step.k + ' → [' + step.arr.slice(0, step.k).join(', ') + ']', 'ok');
}
state = { steps: build($('in').value) };
`
    },

    'remove-element': {
        html: makeHtml('array,val', '3,2,2,3,3'),
        css: BASE_CSS,
        js: `
${HARNESS}
function build(input) {
  const parts = (input || '').split(',');
  if (parts.length < 2) throw new Error('Format: 3,2,2,3,3');
  const val = Number(parts.pop());
  const nums = parts.map(s => Number(s.trim())).filter(n => !isNaN(n));
  const arr = [...nums];
  const steps = [];
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    const same = arr[i] === val;
    steps.push({ i, k, arr: [...arr], same });
    if (!same) { arr[k] = arr[i]; k++; steps.push({ i, k, arr: [...arr], moved: true }); }
  }
  steps.push({ i: -1, k, arr: [...arr], done: true });
  return { val, steps };
}
function render(idx) {
  const { val, steps } = state.steps || state;
  const step = steps[Math.max(0, idx)];
  const stage = $('stage');
  stage.innerHTML = '';
  stage.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;justify-content:center;padding:24px;background:#0A1017;border:1px solid #1E2D42;border-radius:8px;min-height:220px;flex:1;align-items:center';
  step.arr.forEach((v, i) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    if (i === step.i) cell.classList.add(step.same ? 'mismatch' : 'active');
    else if (i < step.k) cell.classList.add('done');
    const vv = document.createElement('div');
    vv.className = 'val';
    vv.textContent = v;
    const ix = document.createElement('div');
    ix.className = 'idx';
    ix.textContent = i;
    cell.appendChild(vv);
    cell.appendChild(ix);
    stage.appendChild(cell);
  });
  setStats([
    ['i', step.i === -1 ? '—' : step.i],
    ['k', step.k],
    ['val', val],
    ['الحالة', step.done ? 'خلصنا ✓' : '...']
  ]);
  if (idx >= 0 && !step.done) log((step.same ? '✕ = val' : '✓ ≠ val') + ' عند i=' + step.i, step.same ? 'warn' : 'info');
  if (step.done) log('✓ k=' + step.k + ' → [' + step.arr.slice(0, step.k).join(', ') + ']', 'ok');
}
state = { steps: build($('in').value) };
`
    },

    'find-the-index-of-the-first-occurrence': {
        html: makeHtml('haystack;needle', 'sadbutsad;sad'),
        css: BASE_CSS,
        js: `
${HARNESS}
function build(input) {
  const parts = (input || '').split(';');
  if (parts.length < 2) throw new Error('Format: haystack;needle');
  const h = parts[0].trim(), n = parts[1].trim();
  if (!h || !n) throw new Error('Both strings required');
  const steps = [];
  for (let i = 0; i <= h.length - n.length; i++) {
    let match = true;
    for (let j = 0; j < n.length; j++) {
      steps.push({ i, j, match: h[i + j] === n[j], hChar: h[i + j], nChar: n[j] });
      if (h[i + j] !== n[j]) { match = false; break; }
    }
    if (match) { steps.push({ i, found: true }); return { h, n, steps }; }
  }
  steps.push({ notFound: true });
  return { h, n, steps };
}
function render(idx) {
  const { h, n, steps } = state.steps || state;
  const step = steps[Math.max(0, idx)];
  const stage = $('stage');
  stage.style.cssText = 'display:flex;flex-direction:column;gap:10px;padding:24px;background:#0A1017;border:1px solid #1E2D42;border-radius:8px;min-height:220px;flex:1;align-items:center;justify-content:center';
  stage.innerHTML = '';
  const rowH = document.createElement('div');
  rowH.style.cssText = 'display:flex;gap:4px';
  for (let i = 0; i < h.length; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    if (step.i !== undefined && i >= step.i && i < step.i + n.length) {
      const offset = i - step.i;
      cell.classList.add(step.j !== undefined && offset === step.j ? (step.match ? 'matched' : 'mismatch') : 'window');
    }
    const v = document.createElement('div');
    v.className = 'val';
    v.textContent = h[i];
    const ix = document.createElement('div');
    ix.className = 'idx';
    ix.textContent = i;
    cell.appendChild(v);
    cell.appendChild(ix);
    rowH.appendChild(cell);
  }
  const rowN = document.createElement('div');
  rowN.style.cssText = 'display:flex;gap:4px';
  if (step.i !== undefined) {
    for (let p = 0; p < step.i; p++) { const sp = document.createElement('div'); sp.style.cssText = 'width:48px'; rowN.appendChild(sp); }
    for (let j = 0; j < n.length; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      if (j === step.j) cell.classList.add(step.match ? 'matched' : 'mismatch');
      const v = document.createElement('div');
      v.className = 'val';
      v.textContent = n[j];
      cell.appendChild(v);
      rowN.appendChild(cell);
    }
  }
  stage.appendChild(rowH);
  stage.appendChild(rowN);
  setStats([
    ['i', step.i ?? '—'],
    ['j', step.j ?? '—'],
    ['مقارنة', step.hChar && step.nChar ? '"' + step.hChar + '" vs "' + step.nChar + '"' : '—'],
    ['النتيجة', step.found ? 'index ' + step.i : step.notFound ? '-1' : '...']
  ]);
  if (step.found) log('✓ لقيناها عند index ' + step.i, 'ok');
  else if (step.notFound) log('✕ مش موجودة → -1', 'err');
  else if (idx >= 0) log('مقارنة "' + step.hChar + '" vs "' + step.nChar + '" → ' + (step.match ? '✓' : '✕'), step.match ? 'info' : 'warn');
}
state = { steps: build($('in').value) };
`
    },

    'search-insert-position': {
        html: makeHtml('sorted array,target', '1,3,5,6,4'),
        css: BASE_CSS,
        js: `
${HARNESS}
function build(input) {
  const parts = (input || '').split(',');
  if (parts.length < 2) throw new Error('Format: 1,3,5,6,4');
  const t = Number(parts.pop());
  const nums = parts.map(s => Number(s.trim())).filter(n => !isNaN(n));
  const steps = [];
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const cmp = nums[m] === t ? 'eq' : nums[m] < t ? 'lt' : 'gt';
    steps.push({ l, r, m, cmp, nums: [...nums] });
    if (cmp === 'eq') { steps.push({ l, r, m, done: true, result: m }); return { nums, t, steps }; }
    if (cmp === 'lt') l = m + 1; else r = m - 1;
  }
  steps.push({ l, r, done: true, result: l });
  return { nums, t, steps };
}
function render(idx) {
  const { nums, t, steps } = state.steps || state;
  const step = steps[Math.max(0, idx)];
  const stage = $('stage');
  stage.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;justify-content:center;padding:24px;background:#0A1017;border:1px solid #1E2D42;border-radius:8px;min-height:220px;flex:1;align-items:center;position:relative';
  stage.innerHTML = '';
  nums.forEach((v, i) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    if (i === step.m) cell.classList.add(step.cmp === 'eq' ? 'matched' : 'active');
    else if (i < step.l || i > step.r) cell.classList.add('mismatch');
    else if (i === step.l || i === step.r) cell.classList.add('window');
    const vv = document.createElement('div');
    vv.className = 'val';
    vv.textContent = v;
    const ix = document.createElement('div');
    ix.className = 'idx';
    ix.textContent = i;
    cell.appendChild(vv);
    cell.appendChild(ix);
    stage.appendChild(cell);
  });
  setStats([
    ['L', step.l], ['R', step.r], ['mid', step.m ?? '—'],
    ['النتيجة', step.done ? 'index ' + step.result : '...']
  ]);
  if (step.done) log('✓ insert/return index = ' + step.result, 'ok');
  else if (idx >= 0) log('nums[' + step.m + ']=' + nums[step.m] + ' vs ' + t + ' → ' + step.cmp, 'info');
}
state = { steps: build($('in').value) };
`
    },

    'length-of-last-word': {
        html: makeHtml('string', '   fly me   to   the moon  '),
        css: BASE_CSS,
        js: `
${HARNESS}
function build(input) {
  const s = input || '';
  if (!s) throw new Error('Enter a string');
  const steps = [];
  let i = s.length - 1;
  while (i >= 0 && s[i] === ' ') { steps.push({ i, phase: 'skip', char: s[i] }); i--; }
  let count = 0;
  while (i >= 0 && s[i] !== ' ') { count++; steps.push({ i, phase: 'count', char: s[i], count }); i--; }
  steps.push({ done: true, count });
  return { s, steps };
}
function render(idx) {
  const { s, steps } = state.steps || state;
  const step = steps[Math.max(0, idx)];
  const stage = $('stage');
  stage.innerHTML = '';
  stage.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;justify-content:center;padding:24px;background:#0A1017;border:1px solid #1E2D42;border-radius:8px;min-height:220px;flex:1;align-items:center';
  const chars = s.split('');
  chars.forEach((c, k) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    if (c === ' ') cell.querySelector;
    if (k === step.i) cell.classList.add(step.phase === 'count' ? 'matched' : 'active');
    else if (k > step.i && step.i !== -1) cell.classList.add('done');
    const vv = document.createElement('div');
    vv.className = 'val';
    vv.textContent = c === ' ' ? '␣' : c;
    const ix = document.createElement('div');
    ix.className = 'idx';
    ix.textContent = k;
    cell.appendChild(vv);
    cell.appendChild(ix);
    stage.appendChild(cell);
  });
  setStats([
    ['i', step.i ?? '—'],
    ['المرحلة', step.phase || (step.done ? 'خلصنا' : '—')],
    ['count', step.count ?? 0],
    ['الحالة', step.done ? 'length = ' + step.count : '...']
  ]);
  if (step.phase === 'skip') log('تخطي space عند ' + step.i, 'warn');
  if (step.phase === 'count') log('عدّ "' + step.char + '" → count=' + step.count, 'info');
  if (step.done) log('✓ Length = ' + step.count, 'ok');
}
state = { steps: build($('in').value) };
`
    },

    'add-binary': {
        html: makeHtml('a;b', '1010;1011'),
        css: BASE_CSS,
        js: `
${HARNESS}
function build(input) {
  const parts = (input || '').split(';');
  if (parts.length < 2) throw new Error('Format: 1010;1011');
  const a = parts[0].trim(), b = parts[1].trim();
  if (!/^[01]+$/.test(a) || !/^[01]+$/.test(b)) throw new Error('Binary only (0/1)');
  let i = a.length - 1, j = b.length - 1, carry = 0;
  const steps = [];
  let result = '';
  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;
    if (i >= 0) sum += +a[i];
    if (j >= 0) sum += +b[j];
    const bit = sum % 2;
    const newCarry = sum > 1 ? 1 : 0;
    steps.push({ i, j, aChar: i >= 0 ? a[i] : '—', bChar: j >= 0 ? b[j] : '—', sum, bit, carry: newCarry, result: bit + result });
    result = bit + result;
    carry = newCarry;
    i--; j--;
  }
  steps.push({ done: true, result });
  return { a, b, steps };
}
function render(idx) {
  const { a, b, steps } = state.steps || state;
  const step = steps[Math.max(0, idx)];
  const stage = $('stage');
  stage.style.cssText = 'display:flex;flex-direction:column;gap:10px;padding:24px;background:#0A1017;border:1px solid #1E2D42;border-radius:8px;min-height:220px;flex:1;align-items:center;justify-content:center';
  stage.innerHTML = '';
  const mkRow = (str, activeIdx, isResult) => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:4px';
    if (isResult) {
      const label = document.createElement('span');
      label.style.cssText = 'font-family:ui-monospace,monospace;font-size:12px;color:#6B7C92;margin-right:8px;align-self:center';
      label.textContent = '=';
      row.appendChild(label);
    }
    str.split('').forEach((c, k) => {
      const cell = document.createElement('div');
      cell.className = 'cell';
      if (!isResult && k === activeIdx) cell.classList.add('active');
      if (isResult) cell.classList.add('matched');
      const v = document.createElement('div');
      v.className = 'val';
      v.textContent = c;
      cell.appendChild(v);
      row.appendChild(cell);
    });
    return row;
  };
  if (!step.done) {
    stage.appendChild(mkRow(a, step.i, false));
    const plus = document.createElement('div');
    plus.style.cssText = 'font-family:ui-monospace,monospace;color:#5B9DFF;font-size:18px';
    plus.textContent = '+';
    stage.appendChild(plus);
    stage.appendChild(mkRow(b, step.j, false));
    const line = document.createElement('div');
    line.style.cssText = 'width:80%;height:1px;background:#2A3846';
    stage.appendChild(line);
    stage.appendChild(mkRow(step.result || '0', -1, true));
    const carryEl = document.createElement('div');
    carryEl.style.cssText = 'font-family:ui-monospace,monospace;font-size:12px;color:#F2B200;margin-top:6px';
    carryEl.textContent = 'carry: ' + step.carry;
    stage.appendChild(carryEl);
  } else {
    const ok = document.createElement('div');
    ok.style.cssText = 'font-family:ui-monospace,monospace;color:#4CD08A;font-size:22px;font-weight:700';
    ok.textContent = '✓ ' + step.result;
    stage.appendChild(ok);
  }
  setStats([
    ['i', step.i ?? '—'], ['j', step.j ?? '—'],
    ['sum', step.sum ?? '—'], ['carry', step.carry ?? 0]
  ]);
  if (idx >= 0 && !step.done) log(a[step.i] + ' + ' + (step.bChar === '—' ? '0' : step.bChar) + ' + carry → bit=' + step.bit + ', carry=' + step.carry, 'info');
  if (step.done) log('✓ النتيجة: ' + step.result, 'ok');
}
state = { steps: build($('in').value) };
`
    },

    'sqrt-x': {
        html: makeHtml('x', '8', 'number'),
        css: BASE_CSS,
        js: `
${HARNESS}
function build(input) {
  const x = Number(input);
  if (isNaN(x) || x < 0) throw new Error('Non-negative number required');
  const steps = [];
  let l = 0, r = x, result = 0;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const sq = mid * mid;
    const ok = sq <= x;
    steps.push({ l, r, mid, sq, ok, result });
    if (ok) { result = mid; l = mid + 1; } else r = mid - 1;
  }
  steps.push({ done: true, result });
  return { x, steps };
}
function render(idx) {
  const { x, steps } = state.steps || state;
  const step = steps[Math.max(0, idx)];
  const stage = $('stage');
  stage.style.cssText = 'display:flex;flex-direction:column;gap:14px;padding:24px;background:#0A1017;border:1px solid #1E2D42;border-radius:8px;min-height:220px;flex:1;align-items:center;justify-content:center';
  stage.innerHTML = '';
  if (!step.done) {
    const line = document.createElement('div');
    line.style.cssText = 'display:flex;flex-direction:column;gap:6px;align-items:center;font-family:ui-monospace,monospace';
    line.innerHTML = \`
<div style="font-size:12px;color:#6B7C92">x = \${x}</div>
<div style="display:flex;gap:8px">
  <span style="color:#5B9DFF">L = \${step.l}</span>
  <span style="color:#F2B200">mid = \${step.mid}</span>
  <span style="color:#5B9DFF">R = \${step.r}</span>
</div>
<div style="font-size:20px;font-weight:700;color:#E9EFF5">
  \${step.mid}² = \${step.sq} \${step.ok ? '≤' : '>'} \${x}
</div>
<div style="font-size:14px;color:\${step.ok ? '#4CD08A' : '#F26B62'}">
  \${step.ok ? '✓ save result=' + step.mid + ', L=mid+1' : '✕ R=mid-1'}
</div>
\`;
    stage.appendChild(line);
  } else {
    const ok = document.createElement('div');
    ok.style.cssText = 'font-family:ui-monospace,monospace;color:#4CD08A;font-size:28px;font-weight:700';
    ok.textContent = '√' + x + ' ≈ ' + step.result;
    stage.appendChild(ok);
  }
  setStats([
    ['L', step.l ?? '—'],
    ['R', step.r ?? '—'],
    ['mid', step.mid ?? '—'],
    ['result', step.result ?? 0]
  ]);
  if (idx >= 0 && !step.done) log('mid=' + step.mid + ', ' + step.mid + '²=' + step.sq + ' ' + (step.ok ? '≤' : '>') + ' ' + x, step.ok ? 'info' : 'warn');
  if (step.done) log('✓ √' + x + ' ≈ ' + step.result, 'ok');
}
state = { steps: build($('in').value) };
`
    },

    'climbing-stairs': {
        html: makeHtml('n', '5', 'number'),
        css: BASE_CSS,
        js: `
${HARNESS}
function build(input) {
  const n = Number(input);
  if (isNaN(n) || n < 1 || n > 45) throw new Error('n between 1 and 45');
  if (n === 1) return { n, steps: [{ done: true, result: 1 }] };
  const steps = [{ prev2: 1, prev1: 2, i: 2, value: 2, initial: true }];
  let p2 = 1, p1 = 2;
  for (let i = 3; i <= n; i++) {
    const cur = p1 + p2;
    steps.push({ i, prev2: p2, prev1: p1, current: cur });
    p2 = p1; p1 = cur;
  }
  steps.push({ done: true, result: n === 1 ? 1 : p1 });
  return { n, steps };
}
function render(idx) {
  const { n, steps } = state.steps || state;
  const step = steps[Math.max(0, idx)];
  const stage = $('stage');
  stage.style.cssText = 'display:flex;flex-direction:column;gap:14px;padding:24px;background:#0A1017;border:1px solid #1E2D42;border-radius:8px;min-height:220px;flex:1;align-items:center;justify-content:center';
  stage.innerHTML = '';
  const stairs = document.createElement('div');
  stairs.style.cssText = 'display:flex;align-items:flex-end;gap:6px;height:160px';
  for (let i = 1; i <= n; i++) {
    const h = 20 + (i / n) * 120;
    const col = document.createElement('div');
    col.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:4px';
    const val = document.createElement('span');
    val.style.cssText = 'font-family:ui-monospace,monospace;font-size:11px;color:#6B7C92';
    let computedVal = i === 1 ? 1 : i === 2 ? 2 : null;
    if (computedVal === null && step.i !== undefined && i <= step.i) {
      let p2 = 1, p1 = 2;
      for (let k = 3; k <= i; k++) { const c = p1 + p2; p2 = p1; p1 = c; }
      computedVal = p1;
    }
    val.textContent = computedVal !== null ? computedVal : '?';
    const bar = document.createElement('div');
    bar.style.cssText = 'width:30px;border-radius:4px 4px 0 0;background:' + (i === step.i ? '#F2B200' : i <= (step.i ?? 0) ? '#4CD08A' : '#2A3846') + ';height:' + h + 'px;transition:0.3s';
    const idxEl = document.createElement('span');
    idxEl.style.cssText = 'font-family:ui-monospace,monospace;font-size:10px;color:#6B7C92';
    idxEl.textContent = i;
    col.appendChild(val);
    col.appendChild(bar);
    col.appendChild(idxEl);
    stairs.appendChild(col);
  }
  stage.appendChild(stairs);
  setStats([
    ['i', step.i ?? '—'],
    ['prev2', step.prev2 ?? '—'],
    ['prev1', step.prev1 ?? '—'],
    ['current', step.current ?? '—']
  ]);
  if (step.initial) log('ways(1)=1, ways(2)=2', 'info');
  if (step.current !== undefined) log('ways(' + step.i + ') = ways(' + (step.i-1) + ') + ways(' + (step.i-2) + ') = ' + step.prev1 + ' + ' + step.prev2 + ' = ' + step.current, 'info');
  if (step.done) log('✓ ways(' + n + ') = ' + step.result, 'ok');
}
state = { steps: build($('in').value) };
`
    },

    'remove-duplicates-from-sorted-list': {
        html: makeHtml('linked list', '1,1,2,3,3'),
        css: BASE_CSS,
        js: `
${HARNESS}
function build(input) {
  const nums = (input || '').split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
  if (!nums.length) throw new Error('Enter numbers');
  let counter = 0;
  const nodes = nums.map(v => ({ id: ++counter, val: v, next: null }));
  for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i + 1];
  const head = nodes[0];
  const steps = [];
  const deleted = new Set();
  let cur = head;
  while (cur && cur.next) {
    const same = cur.val === cur.next.val;
    steps.push({ curId: cur.id, nextId: cur.next.id, deleted: [...deleted], same });
    if (same) {
      deleted.add(cur.next.id);
      steps.push({ curId: cur.id, deleted: [...deleted], skip: true });
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  steps.push({ done: true, deleted: [...deleted], allIds: nodes.map(n => n.id), nodes });
  return { nodes, head, steps };
}
function render(idx) {
  const { nodes, steps } = state.steps || state;
  const step = steps[Math.max(0, idx)];
  const stage = $('stage');
  stage.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;justify-content:flex-start;padding:24px;background:#0A1017;border:1px solid #1E2D42;border-radius:8px;min-height:220px;flex:1;align-items:center;direction:ltr';
  stage.innerHTML = '';
  const deletedSet = new Set(step.deleted || []);
  nodes.forEach((node, i) => {
    const el = document.createElement('div');
    el.className = 'node';
    if (node.id === step.curId || node.id === step.nextId) el.classList.add('active');
    if (deletedSet.has(node.id)) el.classList.add('deleted');
    const v = document.createElement('div');
    v.className = 'val';
    v.textContent = node.val;
    const nx = document.createElement('div');
    nx.className = 'next';
    nx.textContent = '•';
    el.appendChild(v);
    el.appendChild(nx);
    stage.appendChild(el);
    if (i < nodes.length - 1) {
      const arrow = document.createElement('span');
      arrow.className = 'arrow';
      arrow.textContent = '→';
      stage.appendChild(arrow);
    }
  });
  const nul = document.createElement('span');
  nul.className = 'null-node';
  nul.textContent = '∅';
  stage.appendChild(nul);
  setStats([
    ['cur', step.curId ?? '—'],
    ['next', step.nextId ?? '—'],
    ['محذوف', (step.deleted || []).length],
    ['الحالة', step.done ? 'خلصنا ✓' : '...']
  ]);
  if (idx >= 0 && step.same) log('cur.val === next.val → تخطّي الـ next', 'warn');
  if (step.skip) log('✓ حذفنا الـ node المكررة', 'ok');
  if (step.done) log('✓ خلصنا — حذفنا ' + step.deleted.length + ' node', 'ok');
}
state = { steps: build($('in').value) };
`
    }

};