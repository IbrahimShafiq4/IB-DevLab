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
  },

  'binary-tree-inorder-traversal': {
    html: `<div class="app">
  <div class="controls">
    <div class="ctrl">
      <label>tree (array, use "null" for empty)</label>
      <input type="text" id="in" value="1,2,3,4,5,null,8,null,null,6,7,9" dir="ltr">
    </div>
    <div class="btns">
      <button id="run" class="primary">▶ شغّل</button>
      <button id="step">⏭ خطوة</button>
      <button id="reset">↺ رجّع</button>
    </div>
  </div>
  <div class="main-area">
    <div class="stage" id="stage"></div>
    <div class="sidebar">
      <div class="stack-title">Call Stack</div>
      <div class="stack" id="stack"></div>
    </div>
  </div>
  <div class="result-area">
    <div class="result-label">Result</div>
    <div class="result-array" id="result"></div>
  </div>
  <div class="stats" id="stats"></div>
  <div class="log" id="log"></div>
</div>`,
    css: `
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  min-height: 100vh;
  background: #0A1017;
  color: #E9EFF5;
  font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif;
  padding: 14px;
}
.app {
  max-width: 1200px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
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
  min-width: 220px;
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
  font-size: 13px;
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
}
.btns button:hover:not(:disabled) { border-color: #5B9DFF; color: #5B9DFF; }
.btns button.primary { background: #F2B200; border-color: #F2B200; color: #0A1017; font-weight: 700; }
.btns button.primary:hover { opacity: 0.9; color: #0A1017; }

.main-area {
  display: grid;
  grid-template-columns: 1fr 220px;
  gap: 12px;
}
@media (max-width: 720px) {
  .main-area { grid-template-columns: 1fr; }
}
.stage {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #0A1017;
  border: 1px solid #1E2D42;
  border-radius: 8px;
  min-height: 320px;
  overflow: auto;
}
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background: #131C26;
  border: 1px solid #1E2D42;
  border-radius: 8px;
}
.stack-title {
  font-family: ui-monospace, Consolas, monospace;
  font-size: 11px;
  color: #6B7C92;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 4px;
}
.stack {
  display: flex;
  flex-direction: column-reverse;
  gap: 4px;
  min-height: 60px;
  padding: 6px;
  background: #0A1017;
  border: 2px dashed #2A3846;
  border-radius: 6px;
}
.stack-empty {
  color: #6B7C92;
  font-size: 11px;
  font-family: ui-monospace, Consolas, monospace;
  text-align: center;
  padding: 16px 8px;
}
.stack-frame {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  background: #1E2D42;
  border-radius: 4px;
  font-family: ui-monospace, Consolas, monospace;
  font-size: 12px;
}
.stack-frame.top {
  background: #5B9DFF;
  color: #0A1017;
}
.stack-val { font-weight: 700; }
.stack-phase {
  font-size: 10px;
  opacity: 0.75;
  letter-spacing: 0.05em;
}

.result-area {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  background: #131C26;
  border: 1px solid #1E2D42;
  border-radius: 8px;
  min-height: 60px;
}
.result-label {
  font-family: ui-monospace, Consolas, monospace;
  font-size: 11px;
  color: #6B7C92;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.result-array {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  flex: 1;
}
.result-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 8px;
  background: #4CD08A;
  color: #0A1017;
  border-radius: 4px;
  font-family: ui-monospace, Consolas, monospace;
  font-size: 14px;
  font-weight: 700;
  animation: pop-in 0.25s ease-out;
}
@keyframes pop-in {
  from { transform: scale(0.5); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.muted { color: #6B7C92; font-family: ui-monospace, Consolas, monospace; }

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
  font-size: 15px;
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
.empty { color: #6B7C92; font-family: ui-monospace, Consolas, monospace; padding: 20px; }
`,
    js: `
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

function parseTree(input) {
  const parts = (input || '').split(',').map(s => s.trim());
  const arr = parts.map(s => (s === 'null' || s === '') ? null : Number(s));
  if (!arr.length || arr[0] === null) return null;
  let counter = 0;
  const nodes = arr.map(v => v === null ? null : { val: v, left: null, right: null, id: ++counter });
  for (let i = 0; i < nodes.length; i++) {
    if (!nodes[i]) continue;
    const li = 2 * i + 1;
    const ri = 2 * i + 2;
    if (li < nodes.length) nodes[i].left = nodes[li];
    if (ri < nodes.length) nodes[i].right = nodes[ri];
  }
  return nodes[0];
}

function layoutTree(root) {
  let xCounter = 0;
  const nodes = [];
  const edges = [];
  function visit(node, depth) {
    if (!node) return;
    visit(node.left, depth + 1);
    node._x = xCounter++;
    node._y = depth;
    nodes.push(node);
    visit(node.right, depth + 1);
  }
  visit(root, 0);
  function collectEdges(node) {
    if (!node) return;
    if (node.left) edges.push({ from: node, to: node.left });
    if (node.right) edges.push({ from: node, to: node.right });
    collectEdges(node.left);
    collectEdges(node.right);
  }
  collectEdges(root);
  return { nodes, edges };
}

function buildSteps(root) {
  const steps = [];
  const result = [];
  const outputIds = new Set();
  const callStack = [];

  function snapshot(extra) {
    return Object.assign({
      callStack: callStack.map(f => ({ id: f.id, val: f.val, phase: f.phase })),
      result: result.slice(),
      outputIds: new Set(outputIds)
    }, extra);
  }

  function traverse(node) {
    if (!node) {
      steps.push(snapshot({
        type: 'enter-null',
        nodeId: null,
        depth: callStack.length,
        desc: 'وصلنا null — نرجع'
      }));
      return;
    }

    callStack.push({ id: node.id, val: node.val, phase: 'enter' });
    steps.push(snapshot({
      type: 'enter',
      nodeId: node.id,
      depth: callStack.length,
      desc: 'ندخل على ' + node.val + ' — نروح left الأول'
    }));

    callStack[callStack.length - 1].phase = 'left';
    traverse(node.left);

    callStack[callStack.length - 1].phase = 'output';
    result.push(node.val);
    outputIds.add(node.id);
    steps.push(snapshot({
      type: 'output',
      nodeId: node.id,
      depth: callStack.length,
      desc: 'نطبع ' + node.val + ' — left خلص'
    }));

    callStack[callStack.length - 1].phase = 'right';
    traverse(node.right);

    callStack.pop();
    steps.push(snapshot({
      type: 'return',
      nodeId: node.id,
      depth: callStack.length,
      desc: 'نرجع من ' + node.val
    }));
  }

  traverse(root);

  steps.push(snapshot({
    type: 'done',
    nodeId: null,
    depth: 0,
    desc: 'خلصنا ✓'
  }));

  return { steps, layout: layoutTree(root) };
}

function renderTree(layout, activeId, outputIds) {
  const NODE_R = 22;
  const X_GAP = 60;
  const Y_GAP = 70;
  const stage = $('stage');
  stage.innerHTML = '';

  const nodes = layout.nodes;
  if (!nodes.length) {
    stage.innerHTML = '<div class="empty">(شجرة فاضية)</div>';
    return;
  }

  const maxX = Math.max.apply(null, nodes.map(n => n._x));
  const maxY = Math.max.apply(null, nodes.map(n => n._y));
  const width = (maxX + 1) * X_GAP + 40;
  const height = (maxY + 1) * Y_GAP + 40;

  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  svg.style.width = '100%';
  svg.style.maxHeight = '340px';

  layout.edges.forEach(e => {
    const x1 = e.from._x * X_GAP + 20 + NODE_R;
    const y1 = e.from._y * Y_GAP + 20 + NODE_R;
    const x2 = e.to._x * X_GAP + 20 + NODE_R;
    const y2 = e.to._y * Y_GAP + 20 + NODE_R;
    const line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', '#2A3846');
    line.setAttribute('stroke-width', '2');
    svg.appendChild(line);
  });

  nodes.forEach(n => {
    const cx = n._x * X_GAP + 20 + NODE_R;
    const cy = n._y * Y_GAP + 20 + NODE_R;
    const isActive = n.id === activeId;
    const isDone = outputIds.has(n.id);

    const circle = document.createElementNS(ns, 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', NODE_R);
    circle.setAttribute('fill', isActive ? '#F2B200' : (isDone ? '#4CD08A' : '#131C26'));
    circle.setAttribute('stroke', isActive ? '#F2B200' : (isDone ? '#4CD08A' : '#5B9DFF'));
    circle.setAttribute('stroke-width', '2');
    svg.appendChild(circle);

    const text = document.createElementNS(ns, 'text');
    text.setAttribute('x', cx);
    text.setAttribute('y', cy + 5);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('font-family', 'ui-monospace, monospace');
    text.setAttribute('font-size', '14');
    text.setAttribute('font-weight', '700');
    text.setAttribute('fill', (isActive || isDone) ? '#0A1017' : '#E9EFF5');
    text.textContent = n.val;
    svg.appendChild(text);
  });

  stage.appendChild(svg);
}

function renderStack(callStack) {
  const el = $('stack');
  el.innerHTML = '';
  if (!callStack || !callStack.length) {
    el.innerHTML = '<div class="stack-empty">(فاضي)</div>';
    return;
  }
  callStack.forEach((frame, i) => {
    const item = document.createElement('div');
    item.className = 'stack-frame';
    if (i === callStack.length - 1) item.classList.add('top');
    const val = document.createElement('span');
    val.className = 'stack-val';
    val.textContent = frame.val;
    const phase = document.createElement('span');
    phase.className = 'stack-phase';
    const labels = { enter: 'entering', left: 'left', output: 'output', right: 'right' };
    phase.textContent = labels[frame.phase] || frame.phase;
    item.appendChild(val);
    item.appendChild(phase);
    el.appendChild(item);
  });
}

function renderResult(resultArr) {
  const el = $('result');
  el.innerHTML = '';
  if (!resultArr || !resultArr.length) {
    el.innerHTML = '<span class="muted">(فاضي)</span>';
    return;
  }
  resultArr.forEach(v => {
    const cell = document.createElement('div');
    cell.className = 'result-cell';
    cell.textContent = v;
    el.appendChild(cell);
  });
}

function render(idx) {
  const st = state;
  const safeIdx = Math.max(0, Math.min(idx, st.steps.length - 1));
  const step = st.steps[safeIdx];

  renderTree(st.layout, step.nodeId, step.outputIds || new Set());
  renderStack(step.callStack);
  renderResult(step.result);

  setStats([
    ['العملية', step.type],
    ['depth', step.depth || 0],
    ['نطبعنا', (step.result || []).length],
    ['الحالة', step.type === 'done' ? 'خلصنا ✓' : '...']
  ]);

  if (idx >= 0 && step.desc) {
    let cls = 'info';
    if (step.type === 'output') cls = 'ok';
    else if (step.type === 'done') cls = 'ok';
    else if (step.type === 'enter-null') cls = 'warn';
    log(step.desc, cls);
  }
}

function init() {
  stop();
  try {
    const root = parseTree($('in').value);
    if (!root) {
      state = {
        steps: [{ type: 'done', nodeId: null, callStack: [], result: [], outputIds: new Set(), desc: 'شجرة فاضية' }],
        layout: { nodes: [], edges: [] }
      };
    } else {
      const built = buildSteps(root);
      state = { steps: built.steps, layout: built.layout };
    }
    state.idx = -1;
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
  timer = setInterval(() => { if (!go()) stop(); }, 900);
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
`
  },

  'same-tree': {
    html: makeHtml('two trees (p;q)', '1,2,3;1,2,3'),
    css: BASE_CSS + `
    .stage {
      flex-direction: column;
      align-items: stretch;
      padding: 18px;
      gap: 12px;
    }
    .trees-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    @media (max-width: 640px) {
      .trees-row { grid-template-columns: 1fr; }
    }
    .tree-box {
      padding: 8px;
      background: #131C26;
      border: 1px solid #1E2D42;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .tree-label {
      font-family: ui-monospace, Consolas, monospace;
      font-size: 10px;
      color: #6B7C92;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      text-align: center;
    }
    .tree-box svg {
      width: 100%;
      max-height: 220px;
      display: block;
    }
    .stack-panel {
      padding: 10px 12px;
      background: #131C26;
      border: 1px solid #1E2D42;
      border-radius: 6px;
    }
    .stack-title {
      font-family: ui-monospace, Consolas, monospace;
      font-size: 10px;
      color: #6B7C92;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 8px;
    }
    .stack-list {
      display: flex;
      flex-direction: column-reverse;
      gap: 4px;
      min-height: 26px;
    }
    .stack-frame {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      background: #1E2D42;
      border-radius: 4px;
      font-family: ui-monospace, Consolas, monospace;
      font-size: 12px;
    }
    .stack-frame.top {
      background: #5B9DFF;
      color: #0A1017;
    }
    .stack-frame .phase {
      font-size: 10px;
      opacity: 0.75;
    }
    .stack-frame.top .phase {
      opacity: 0.9;
    }
    .stack-empty {
      color: #6B7C92;
      font-family: ui-monospace, Consolas, monospace;
      font-size: 11px;
      text-align: center;
      padding: 6px;
    }
    .verdict {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      border-radius: 6px;
      font-family: ui-monospace, Consolas, monospace;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.05em;
    }
    .verdict.match {
      background: rgba(76, 208, 138, 0.12);
      color: #4CD08A;
      border: 1px solid #4CD08A;
    }
    .verdict.mismatch {
      background: rgba(242, 107, 98, 0.12);
      color: #F26B62;
      border: 1px solid #F26B62;
    }
    .verdict.pending {
      background: #131C26;
      color: #6B7C92;
      border: 1px solid #2A3846;
    }
    `,
    js: `
${HARNESS}
let _layoutP = null;
let _layoutQ = null;
let _shortCircuitAt = null;

function parseTree(input) {
  const parts = (input || '').split(',').map(s => s.trim());
  const arr = parts.map(s => (s === 'null' || s === '') ? null : Number(s));
  if (!arr.length || arr[0] === null) return null;
  let counter = 0;
  const nodes = arr.map(v => v === null ? null : ({ val: v, left: null, right: null, id: ++counter }));
  for (let i = 0; i < nodes.length; i++) {
    if (!nodes[i]) continue;
    const li = 2 * i + 1;
    const ri = 2 * i + 2;
    if (li < nodes.length) nodes[i].left = nodes[li];
    if (ri < nodes.length) nodes[i].right = nodes[ri];
  }
  return nodes[0];
}

function layoutTree(root) {
  let xc = 0;
  const nodes = [];
  const edges = [];
  function visit(n, depth) {
    if (!n) return;
    visit(n.left, depth + 1);
    n._x = xc++;
    n._y = depth;
    nodes.push(n);
    visit(n.right, depth + 1);
  }
  visit(root, 0);
  function collect(n) {
    if (!n) return;
    if (n.left) edges.push({ from: n, to: n.left });
    if (n.right) edges.push({ from: n, to: n.right });
    collect(n.left);
    collect(n.right);
  }
  collect(root);
  return { nodes, edges };
}

function build(input) {
  const parts = (input || '').split(';');
  if (parts.length < 2) throw new Error('Format: 1,2,3;1,2,3');
  const pRoot = parseTree(parts[0]);
  const qRoot = parseTree(parts[1]);

  _shortCircuitAt = null;
  const steps = [];
  const stack = [];
  let finalResult = null;

  function snap(extra) {
    return Object.assign({
      stack: stack.map(f => ({ pVal: f.pVal, qVal: f.qVal, phase: f.phase })),
      finalResult: finalResult
    }, extra);
  }

  function walk(p, q) {
    if (finalResult !== null) return;

    stack.push({
      pVal: p ? p.val : null,
      qVal: q ? q.val : null,
      phase: 'enter'
    });

    const bothNull = p === null && q === null;
    const oneNull = (p === null) !== (q === null);

    if (bothNull) {
      steps.push(snap({
        type: 'both-null',
        pId: null, qId: null,
        desc: 'الاتنين null → ✓ true'
      }));
      stack.pop();
      return;
    }

    if (oneNull) {
      finalResult = false;
      _shortCircuitAt = { pId: p ? p.id : null, qId: q ? q.id : null };
      stack[stack.length - 1].phase = 'mismatch';
      steps.push(snap({
        type: 'one-null',
        pId: p ? p.id : null,
        qId: q ? q.id : null,
        desc: 'واحد null والتاني ' + (p ? p.val : q.val) + ' → ✕ false'
      }));
      stack.pop();
      return;
    }

    if (p.val !== q.val) {
      finalResult = false;
      _shortCircuitAt = { pId: p.id, qId: q.id };
      stack[stack.length - 1].phase = 'mismatch';
      steps.push(snap({
        type: 'value-diff',
        pId: p.id,
        qId: q.id,
        desc: p.val + ' ≠ ' + q.val + ' → ✕ false'
      }));
      stack.pop();
      return;
    }

    steps.push(snap({
      type: 'value-same',
      pId: p.id,
      qId: q.id,
      desc: p.val + ' = ' + q.val + ' → ✓ نكمل'
    }));

    stack[stack.length - 1].phase = 'left';
    walk(p.left, q.left);
    if (finalResult !== null) { stack.pop(); return; }

    stack[stack.length - 1].phase = 'right';
    walk(p.right, q.right);
    if (finalResult !== null) { stack.pop(); return; }

    stack.pop();
    steps.push(snap({
      type: 'return-true',
      pId: p.id,
      qId: q.id,
      desc: 'نرجع true من ' + p.val
    }));
  }

  walk(pRoot, qRoot);

  if (finalResult === null) {
    finalResult = true;
    steps.push(snap({
      type: 'done',
      pId: null, qId: null,
      desc: 'خلصنا ✓ الشجرتين متطابقتين'
    }));
  } else {
    steps.push(snap({
      type: 'done',
      pId: null, qId: null,
      desc: 'خلصنا ✕ الشجرتين مختلفتين'
    }));
  }

  _layoutP = layoutTree(pRoot);
  _layoutQ = layoutTree(qRoot);
  return steps;
}

function renderOneTree(layout, activeId, shortId, ns) {
  if (!layout || !layout.nodes.length) {
    const empty = document.createElement('div');
    empty.className = 'stack-empty';
    empty.textContent = '(فاضية)';
    return empty;
  }

  const NODE_R = 18;
  const X_GAP = 48;
  const Y_GAP = 58;
  const maxX = Math.max.apply(null, layout.nodes.map(n => n._x));
  const maxY = Math.max.apply(null, layout.nodes.map(n => n._y));
  const W = (maxX + 1) * X_GAP + 30;
  const H = (maxY + 1) * Y_GAP + 30;

  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

  layout.edges.forEach(e => {
    const line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', e.from._x * X_GAP + 15 + NODE_R);
    line.setAttribute('y1', e.from._y * Y_GAP + 15 + NODE_R);
    line.setAttribute('x2', e.to._x * X_GAP + 15 + NODE_R);
    line.setAttribute('y2', e.to._y * Y_GAP + 15 + NODE_R);
    line.setAttribute('stroke', '#2A3846');
    line.setAttribute('stroke-width', '2');
    svg.appendChild(line);
  });

  layout.nodes.forEach(n => {
    const cx = n._x * X_GAP + 15 + NODE_R;
    const cy = n._y * Y_GAP + 15 + NODE_R;
    const isActive = n.id === activeId;
    const isShort = n.id === shortId;

    const c = document.createElementNS(ns, 'circle');
    c.setAttribute('cx', cx);
    c.setAttribute('cy', cy);
    c.setAttribute('r', NODE_R);
    let fill = '#131C26';
    let stroke = '#5B9DFF';
    if (isShort) { fill = '#F26B62'; stroke = '#F26B62'; }
    else if (isActive) { fill = '#F2B200'; stroke = '#F2B200'; }
    c.setAttribute('fill', fill);
    c.setAttribute('stroke', stroke);
    c.setAttribute('stroke-width', '2');
    svg.appendChild(c);

    const t = document.createElementNS(ns, 'text');
    t.setAttribute('x', cx);
    t.setAttribute('y', cy + 4);
    t.setAttribute('text-anchor', 'middle');
    t.setAttribute('font-family', 'ui-monospace, monospace');
    t.setAttribute('font-size', '12');
    t.setAttribute('font-weight', '700');
    t.setAttribute('fill', (isActive || isShort) ? '#0A1017' : '#E9EFF5');
    t.textContent = n.val;
    svg.appendChild(t);
  });

  return svg;
}

function render(idx) {
  const safe = Math.max(0, Math.min(idx, state.steps.length - 1));
  const step = state.steps[safe];
  const stage = $('stage');
  stage.innerHTML = '';

  const ns = 'http://www.w3.org/2000/svg';
  const scP = _shortCircuitAt ? _shortCircuitAt.pId : null;
  const scQ = _shortCircuitAt ? _shortCircuitAt.qId : null;

  const row = document.createElement('div');
  row.className = 'trees-row';

  const boxP = document.createElement('div');
  boxP.className = 'tree-box';
  const lblP = document.createElement('div');
  lblP.className = 'tree-label';
  lblP.textContent = 'Tree p';
  boxP.appendChild(lblP);
  boxP.appendChild(renderOneTree(_layoutP, step.pId, scP, ns));

  const boxQ = document.createElement('div');
  boxQ.className = 'tree-box';
  const lblQ = document.createElement('div');
  lblQ.className = 'tree-label';
  lblQ.textContent = 'Tree q';
  boxQ.appendChild(lblQ);
  boxQ.appendChild(renderOneTree(_layoutQ, step.qId, scQ, ns));

  row.appendChild(boxP);
  row.appendChild(boxQ);
  stage.appendChild(row);

  const stackPanel = document.createElement('div');
  stackPanel.className = 'stack-panel';
  const stackTitle = document.createElement('div');
  stackTitle.className = 'stack-title';
  stackTitle.textContent = 'Call Stack';
  const stackList = document.createElement('div');
  stackList.className = 'stack-list';

  if (!step.stack || !step.stack.length) {
    const em = document.createElement('div');
    em.className = 'stack-empty';
    em.textContent = '(فاضي)';
    stackList.appendChild(em);
  } else {
    const labels = { enter: 'entering', left: 'left', right: 'right', mismatch: 'mismatch' };
    step.stack.forEach((frame, i) => {
      const el = document.createElement('div');
      el.className = 'stack-frame';
      if (i === step.stack.length - 1) el.classList.add('top');
      const val = document.createElement('span');
      val.textContent = 'p=' + (frame.pVal === null ? 'null' : frame.pVal) + '  q=' + (frame.qVal === null ? 'null' : frame.qVal);
      const phase = document.createElement('span');
      phase.className = 'phase';
      phase.textContent = labels[frame.phase] || frame.phase;
      el.appendChild(val);
      el.appendChild(phase);
      stackList.appendChild(el);
    });
  }

  stackPanel.appendChild(stackTitle);
  stackPanel.appendChild(stackList);
  stage.appendChild(stackPanel);

  let verdictCls = 'pending';
  let verdictText = '...';
  if (step.type === 'done') {
    if (step.finalResult === true) { verdictCls = 'match'; verdictText = '✓ same tree'; }
    else { verdictCls = 'mismatch'; verdictText = '✕ not same tree'; }
  } else if (step.finalResult === false) {
    verdictCls = 'mismatch';
    verdictText = '✕ short-circuit false';
  } else if (step.type === 'both-null' || step.type === 'value-same' || step.type === 'return-true') {
    verdictCls = 'match';
    verdictText = '✓ so far';
  }

  const verdict = document.createElement('div');
  verdict.className = 'verdict ' + verdictCls;
  verdict.textContent = verdictText;
  stage.appendChild(verdict);

  setStats([
    ['العملية', step.type || '—'],
    ['stack size', (step.stack || []).length],
    ['الحالة', step.finalResult === null ? '...' : (step.finalResult ? 'true ✓' : 'false ✕')],
    ['الخطوة', (safe + 1) + ' / ' + state.steps.length]
  ]);

  if (idx >= 0 && step.desc) {
    let cls = 'info';
    if (step.type === 'both-null' || step.type === 'value-same' || step.type === 'return-true' || (step.type === 'done' && step.finalResult)) cls = 'ok';
    else if (step.type === 'one-null' || step.type === 'value-diff' || (step.type === 'done' && !step.finalResult)) cls = 'err';
    log(step.desc, cls);
  }
}
`
  },
  'symmetric-tree': {
    html: makeHtml('tree array (null للـ empty)', '1,2,2,3,4,4,3'),
    css: BASE_CSS + `
    .stage {
      flex-direction: column;
      align-items: stretch;
      padding: 18px;
      gap: 12px;
    }
    .stage svg {
      width: 100%;
      max-height: 280px;
      display: block;
    }
    .legend {
      display: flex;
      justify-content: center;
      gap: 14px;
      flex-wrap: wrap;
      font-family: ui-monospace, Consolas, monospace;
      font-size: 10px;
      color: #6B7C92;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .legend-item {
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .legend-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: inline-block;
    }
    .stack-panel {
      padding: 10px 12px;
      background: #131C26;
      border: 1px solid #1E2D42;
      border-radius: 6px;
    }
    .stack-title {
      font-family: ui-monospace, Consolas, monospace;
      font-size: 10px;
      color: #6B7C92;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 8px;
    }
    .stack-list {
      display: flex;
      flex-direction: column-reverse;
      gap: 4px;
      min-height: 26px;
    }
    .stack-frame {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      background: #1E2D42;
      border-radius: 4px;
      font-family: ui-monospace, Consolas, monospace;
      font-size: 12px;
    }
    .stack-frame.top {
      background: #5B9DFF;
      color: #0A1017;
    }
    .stack-frame .phase {
      font-size: 10px;
      opacity: 0.75;
    }
    .stack-frame.top .phase { opacity: 0.9; }
    .stack-empty {
      color: #6B7C92;
      font-family: ui-monospace, Consolas, monospace;
      font-size: 11px;
      text-align: center;
      padding: 6px;
    }
    .verdict {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      border-radius: 6px;
      font-family: ui-monospace, Consolas, monospace;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.05em;
    }
    .verdict.match {
      background: rgba(76, 208, 138, 0.12);
      color: #4CD08A;
      border: 1px solid #4CD08A;
    }
    .verdict.mismatch {
      background: rgba(242, 107, 98, 0.12);
      color: #F26B62;
      border: 1px solid #F26B62;
    }
    .verdict.pending {
      background: #131C26;
      color: #6B7C92;
      border: 1px solid #2A3846;
    }
    `,
    js: `
${HARNESS}
let _treeLayout = null;
let _shortCircuit = null;

function parseTree(input) {
  const parts = (input || '').split(',').map(s => s.trim());
  const arr = parts.map(s => (s === 'null' || s === '') ? null : Number(s));
  if (!arr.length || arr[0] === null) return null;
  let counter = 0;
  const nodes = arr.map(v => v === null ? null : ({ val: v, left: null, right: null, id: ++counter }));
  for (let i = 0; i < nodes.length; i++) {
    if (!nodes[i]) continue;
    const li = 2 * i + 1;
    const ri = 2 * i + 2;
    if (li < nodes.length) nodes[i].left = nodes[li];
    if (ri < nodes.length) nodes[i].right = nodes[ri];
  }
  return nodes[0];
}

function layoutTree(root) {
  let xc = 0;
  const nodes = [];
  const edges = [];
  function visit(n, depth) {
    if (!n) return;
    visit(n.left, depth + 1);
    n._x = xc++;
    n._y = depth;
    nodes.push(n);
    visit(n.right, depth + 1);
  }
  visit(root, 0);
  function collect(n) {
    if (!n) return;
    if (n.left) edges.push({ from: n, to: n.left });
    if (n.right) edges.push({ from: n, to: n.right });
    collect(n.left);
    collect(n.right);
  }
  collect(root);
  return { nodes, edges };
}

function build(input) {
  const root = parseTree(input);

  if (!root) {
    _treeLayout = { nodes: [], edges: [] };
    _shortCircuit = null;
    return [{
      type: 'done',
      finalResult: true,
      leftId: null,
      rightId: null,
      stack: [],
      desc: 'شجرة فاضية → true'
    }];
  }

  _shortCircuit = null;
  const steps = [];
  const stack = [];
  let finalResult = null;

  function snap(extra) {
    return Object.assign({
      stack: stack.map(f => ({ leftVal: f.leftVal, rightVal: f.rightVal, phase: f.phase })),
      finalResult: finalResult
    }, extra);
  }

  function isMirror(left, right) {
    if (finalResult !== null) return;

    stack.push({
      leftVal: left ? left.val : null,
      rightVal: right ? right.val : null,
      phase: 'enter'
    });

    const bothNull = left === null && right === null;
    const oneNull = (left === null) !== (right === null);

    if (bothNull) {
      steps.push(snap({
        type: 'both-null',
        leftId: null, rightId: null,
        desc: 'الاتنين null → ✓ true'
      }));
      stack.pop();
      return;
    }

    if (oneNull) {
      finalResult = false;
      _shortCircuit = { leftId: left ? left.id : null, rightId: right ? right.id : null };
      stack[stack.length - 1].phase = 'mismatch';
      steps.push(snap({
        type: 'one-null',
        leftId: left ? left.id : null,
        rightId: right ? right.id : null,
        desc: 'واحد null والتاني ' + (left ? left.val : right.val) + ' → ✕ false'
      }));
      stack.pop();
      return;
    }

    if (left.val !== right.val) {
      finalResult = false;
      _shortCircuit = { leftId: left.id, rightId: right.id };
      stack[stack.length - 1].phase = 'mismatch';
      steps.push(snap({
        type: 'value-diff',
        leftId: left.id,
        rightId: right.id,
        desc: left.val + ' ≠ ' + right.val + ' → ✕ false'
      }));
      stack.pop();
      return;
    }

    steps.push(snap({
      type: 'value-same',
      leftId: left.id,
      rightId: right.id,
      desc: left.val + ' = ' + right.val + ' → ✓ نكمل'
    }));

    stack[stack.length - 1].phase = 'outer';
    isMirror(left.left, right.right);
    if (finalResult !== null) { stack.pop(); return; }

    stack[stack.length - 1].phase = 'inner';
    isMirror(left.right, right.left);
    if (finalResult !== null) { stack.pop(); return; }

    stack.pop();
    steps.push(snap({
      type: 'return-true',
      leftId: left.id,
      rightId: right.id,
      desc: 'نرجع true من ' + left.val
    }));
  }

  steps.push(snap({
    type: 'start',
    leftId: root.id,
    rightId: root.id,
    desc: 'نبدأ من الـ root — نقارن subtree اليسار مع subtree اليمين كـ mirror'
  }));

  isMirror(root.left, root.right);

  if (finalResult === null) {
    finalResult = true;
    steps.push(snap({
      type: 'done',
      leftId: null, rightId: null,
      desc: 'خلصنا ✓ الشجرة symmetric'
    }));
  } else {
    steps.push(snap({
      type: 'done',
      leftId: null, rightId: null,
      desc: 'خلصنا ✕ الشجرة مش symmetric'
    }));
  }

  _treeLayout = layoutTree(root);
  return steps;
}

function renderTree(activeLeft, activeRight, shortLeft, shortRight, ns) {
  if (!_treeLayout || !_treeLayout.nodes.length) {
    const empty = document.createElement('div');
    empty.className = 'stack-empty';
    empty.textContent = '(شجرة فاضية)';
    return empty;
  }

  const NODE_R = 20;
  const X_GAP = 55;
  const Y_GAP = 62;
  const maxX = Math.max.apply(null, _treeLayout.nodes.map(n => n._x));
  const maxY = Math.max.apply(null, _treeLayout.nodes.map(n => n._y));
  const W = (maxX + 1) * X_GAP + 30;
  const H = (maxY + 1) * Y_GAP + 30;

  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

  _treeLayout.edges.forEach(e => {
    const line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', e.from._x * X_GAP + 15 + NODE_R);
    line.setAttribute('y1', e.from._y * Y_GAP + 15 + NODE_R);
    line.setAttribute('x2', e.to._x * X_GAP + 15 + NODE_R);
    line.setAttribute('y2', e.to._y * Y_GAP + 15 + NODE_R);
    line.setAttribute('stroke', '#2A3846');
    line.setAttribute('stroke-width', '2');
    svg.appendChild(line);
  });

  _treeLayout.nodes.forEach(n => {
    const cx = n._x * X_GAP + 15 + NODE_R;
    const cy = n._y * Y_GAP + 15 + NODE_R;
    const isLeft = n.id === activeLeft;
    const isRight = n.id === activeRight;
    const isShort = n.id === shortLeft || n.id === shortRight;

    const c = document.createElementNS(ns, 'circle');
    c.setAttribute('cx', cx);
    c.setAttribute('cy', cy);
    c.setAttribute('r', NODE_R);

    let fill = '#131C26';
    let stroke = '#5B9DFF';
    if (isShort) { fill = '#F26B62'; stroke = '#F26B62'; }
    else if (isLeft) { fill = '#F2B200'; stroke = '#F2B200'; }
    else if (isRight) { fill = '#5B9DFF'; stroke = '#5B9DFF'; }

    c.setAttribute('fill', fill);
    c.setAttribute('stroke', stroke);
    c.setAttribute('stroke-width', '2');
    svg.appendChild(c);

    const t = document.createElementNS(ns, 'text');
    t.setAttribute('x', cx);
    t.setAttribute('y', cy + 4);
    t.setAttribute('text-anchor', 'middle');
    t.setAttribute('font-family', 'ui-monospace, monospace');
    t.setAttribute('font-size', '13');
    t.setAttribute('font-weight', '700');
    t.setAttribute('fill', (isLeft || isRight || isShort) ? '#0A1017' : '#E9EFF5');
    t.textContent = n.val;
    svg.appendChild(t);
  });

  return svg;
}

function render(idx) {
  const safe = Math.max(0, Math.min(idx, state.steps.length - 1));
  const step = state.steps[safe];
  const stage = $('stage');
  stage.innerHTML = '';

  const ns = 'http://www.w3.org/2000/svg';
  const scL = _shortCircuit ? _shortCircuit.leftId : null;
  const scR = _shortCircuit ? _shortCircuit.rightId : null;

  stage.appendChild(renderTree(step.leftId, step.rightId, scL, scR, ns));

  const legend = document.createElement('div');
  legend.className = 'legend';
  const items = [
    { color: '#F2B200', text: 'Left node' },
    { color: '#5B9DFF', text: 'Right node (mirror)' },
    { color: '#F26B62', text: 'Mismatch' }
  ];
  items.forEach(it => {
    const el = document.createElement('span');
    el.className = 'legend-item';
    const dot = document.createElement('span');
    dot.className = 'legend-dot';
    dot.style.background = it.color;
    el.appendChild(dot);
    el.appendChild(document.createTextNode(it.text));
    legend.appendChild(el);
  });
  stage.appendChild(legend);

  const stackPanel = document.createElement('div');
  stackPanel.className = 'stack-panel';
  const stackTitle = document.createElement('div');
  stackTitle.className = 'stack-title';
  stackTitle.textContent = 'Call Stack';
  const stackList = document.createElement('div');
  stackList.className = 'stack-list';

  if (!step.stack || !step.stack.length) {
    const em = document.createElement('div');
    em.className = 'stack-empty';
    em.textContent = '(فاضي)';
    stackList.appendChild(em);
  } else {
    const labels = { enter: 'entering', outer: 'outer', inner: 'inner', mismatch: 'mismatch' };
    step.stack.forEach((frame, i) => {
      const el = document.createElement('div');
      el.className = 'stack-frame';
      if (i === step.stack.length - 1) el.classList.add('top');
      const val = document.createElement('span');
      val.textContent = 'L=' + (frame.leftVal === null ? 'null' : frame.leftVal) + '  R=' + (frame.rightVal === null ? 'null' : frame.rightVal);
      const phase = document.createElement('span');
      phase.className = 'phase';
      phase.textContent = labels[frame.phase] || frame.phase;
      el.appendChild(val);
      el.appendChild(phase);
      stackList.appendChild(el);
    });
  }

  stackPanel.appendChild(stackTitle);
  stackPanel.appendChild(stackList);
  stage.appendChild(stackPanel);

  let verdictCls = 'pending';
  let verdictText = '...';
  if (step.type === 'done') {
    if (step.finalResult === true) { verdictCls = 'match'; verdictText = '✓ symmetric'; }
    else { verdictCls = 'mismatch'; verdictText = '✕ not symmetric'; }
  } else if (step.finalResult === false) {
    verdictCls = 'mismatch';
    verdictText = '✕ short-circuit false';
  } else if (step.type === 'both-null' || step.type === 'value-same' || step.type === 'return-true' || step.type === 'start') {
    verdictCls = 'match';
    verdictText = '✓ so far';
  }

  const verdict = document.createElement('div');
  verdict.className = 'verdict ' + verdictCls;
  verdict.textContent = verdictText;
  stage.appendChild(verdict);

  setStats([
    ['العملية', step.type || '—'],
    ['stack size', (step.stack || []).length],
    ['الحالة', step.finalResult === null ? '...' : (step.finalResult ? 'true ✓' : 'false ✕')],
    ['الخطوة', (safe + 1) + ' / ' + state.steps.length]
  ]);

  if (idx >= 0 && step.desc) {
    let cls = 'info';
    if (step.type === 'both-null' || step.type === 'value-same' || step.type === 'return-true' || step.type === 'start' || (step.type === 'done' && step.finalResult)) cls = 'ok';
    else if (step.type === 'one-null' || step.type === 'value-diff' || (step.type === 'done' && !step.finalResult)) cls = 'err';
    log(step.desc, cls);
  }
}
`
  },
};