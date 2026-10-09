import type { SpecimenSource } from '../../../../core/specimen-registry';

export const PROBLEM_SOLVING_SOURCES: Record<string, SpecimenSource> = {

    // ═══════════════════════════════════════════════════════════════
    // PS-01 — Roman to Integer
    // ═══════════════════════════════════════════════════════════════
    'PS-01': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roman to Integer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="demo">
        <div class="row">
            <label>roman numeral</label>
            <input type="text" id="in" value="MCMXCIV" dir="ltr">
        </div>
        <button id="run">تحويل</button>
        <div class="row">
            <label>الناتج</label>
            <output id="out">—</output>
        </div>
        <p class="hint">أمثلة: XIV · MCMXCIV · LVIII</p>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `/* shared styles — same across all PS entries */
* { box-sizing: border-box; margin: 0; padding: 0; }

body {
    display: flex; align-items: center; justify-content: center;
    min-height: 100vh; background: #0A1017;
    font-family: system-ui, -apple-system, sans-serif;
    padding: 16px; font-size: 16px;
}

.demo {
    background: #131C26; border: 1px solid #2A3846; border-radius: 4px;
    padding: 20px; width: 100%; max-width: 380px;
    display: flex; flex-direction: column; gap: 12px;
    color: #E9EFF5;
}

.row { display: flex; flex-direction: column; gap: 6px; }

label {
    font-family: ui-monospace, Consolas, monospace;
    font-size: 20px; text-transform: uppercase;
    letter-spacing: 0.08em; color: #8394A5;
}

input {
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    padding: 8px 12px; color: #E9EFF5;
    font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; outline: none;
}

input:focus { border-color: #E3A83A; }

button {
    padding: 10px 16px; background: #E3A83A; color: #101A24;
    border: 0; border-radius: 4px; font-size: 28px;
    font-weight: 600; cursor: pointer; font-family: inherit;
    transition: opacity 0.16s;
}

button:hover { opacity: 0.9; }

output {
    display: block; padding: 12px;
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    color: #3CC4BE; font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; min-height: 44px;
    word-break: break-all;
}

.hint {
    font-size: 20px; color: #8394A5;
    font-family: ui-monospace, Consolas, monospace;
}`,
        js: `function romanToInt(s) {
    const m = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let r = 0;
    for (let i = 0; i < s.length; i++) {
        const c = m[s[i]], n = m[s[i + 1]];
        r += c < n ? -c : c;
    }
    return r;
}

const inp = document.getElementById('in');
const out = document.getElementById('out');

function run() {
    const v = inp.value.trim().toUpperCase();
    if (!/^[IVXLCDM]+$/.test(v)) {
        out.textContent = '✕ قيمة غير صحيحة';
        out.style.color = '#F26B62';
        return;
    }
    out.style.color = '#3CC4BE';
    out.textContent = v + ' → ' + romanToInt(v);
}

document.getElementById('run').onclick = run;
inp.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
run();`
    },

    // ═══════════════════════════════════════════════════════════════
    // PS-02 — Longest Substring
    // ═══════════════════════════════════════════════════════════════
    'PS-02': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Longest Substring</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="demo">
        <div class="row">
            <label>string</label>
            <input type="text" id="in" value="abcabcbb" dir="ltr">
        </div>
        <button id="run">ابحث</button>
        <div class="row">
            <label>الطول / النص</label>
            <output id="out">—</output>
        </div>
        <p class="hint">أمثلة: abcabcbb · bbbbb · pwwkew</p>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `/* shared styles — same as PS-01 */
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    display: flex; align-items: center; justify-content: center;
    min-height: 100vh; background: #0A1017;
    font-family: system-ui, sans-serif; padding: 16px; font-size: 16px;
}
.demo {
    background: #131C26; border: 1px solid #2A3846; border-radius: 4px;
    padding: 20px; width: 100%; max-width: 380px;
    display: flex; flex-direction: column; gap: 12px; color: #E9EFF5;
}
.row { display: flex; flex-direction: column; gap: 6px; }
label {
    font-family: ui-monospace, Consolas, monospace;
    font-size: 20px; text-transform: uppercase;
    letter-spacing: 0.08em; color: #8394A5;
}
input {
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    padding: 8px 12px; color: #E9EFF5;
    font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; outline: none;
}
input:focus { border-color: #E3A83A; }
button {
    padding: 10px 16px; background: #E3A83A; color: #101A24;
    border: 0; border-radius: 4px; font-size: 28px;
    font-weight: 600; cursor: pointer; font-family: inherit;
}
button:hover { opacity: 0.9; }
output {
    display: block; padding: 12px;
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    color: #3CC4BE; font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; min-height: 44px; word-break: break-all;
}
.hint {
    font-size: 20px; color: #8394A5;
    font-family: ui-monospace, Consolas, monospace;
}`,
        js: `function longest(s) {
    let l = 0, best = 0, set = new Set(), bestStart = 0;
    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        if (r - l + 1 > best) {
            best = r - l + 1;
            bestStart = l;
        }
    }
    return { len: best, str: s.slice(bestStart, bestStart + best) };
}

const inp = document.getElementById('in');
const out = document.getElementById('out');

function run() {
    const v = inp.value;
    const r = longest(v);
    out.textContent = r.len + '  →  "' + r.str + '"';
}

document.getElementById('run').onclick = run;
inp.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
run();`
    },

    // ═══════════════════════════════════════════════════════════════
    // PS-03 — Palindrome Number
    // ═══════════════════════════════════════════════════════════════
    'PS-03': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Palindrome Number</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="demo">
        <div class="row">
            <label>number</label>
            <input type="text" id="in" value="121" dir="ltr">
        </div>
        <button id="run">تحقق</button>
        <div class="row">
            <label>النتيجة</label>
            <output id="out">—</output>
        </div>
        <p class="hint">جرّب: 121 · -121 · 10 · 12321</p>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    display: flex; align-items: center; justify-content: center;
    min-height: 100vh; background: #0A1017;
    font-family: system-ui, sans-serif; padding: 16px; font-size: 16px;
}
.demo {
    background: #131C26; border: 1px solid #2A3846; border-radius: 4px;
    padding: 20px; width: 100%; max-width: 380px;
    display: flex; flex-direction: column; gap: 12px; color: #E9EFF5;
}
.row { display: flex; flex-direction: column; gap: 6px; }
label {
    font-family: ui-monospace, Consolas, monospace;
    font-size: 20px; text-transform: uppercase;
    letter-spacing: 0.08em; color: #8394A5;
}
input {
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    padding: 8px 12px; color: #E9EFF5;
    font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; outline: none;
}
input:focus { border-color: #E3A83A; }
button {
    padding: 10px 16px; background: #E3A83A; color: #101A24;
    border: 0; border-radius: 4px; font-size: 28px;
    font-weight: 600; cursor: pointer; font-family: inherit;
}
button:hover { opacity: 0.9; }
output {
    display: block; padding: 12px;
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    color: #3CC4BE; font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; min-height: 44px; word-break: break-all;
}
.hint {
    font-size: 20px; color: #8394A5;
    font-family: ui-monospace, Consolas, monospace;
}`,
        js: `function isPal(x) {
    if (x < 0) return false;
    const s = String(x);
    let i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
}

const inp = document.getElementById('in');
const out = document.getElementById('out');

function run() {
    const v = inp.value.trim();
    const n = Number(v);
    const r = isPal(n);
    out.textContent = v + '  →  ' + (r ? '✓ نعم Palindrome' : '✕ ليس Palindrome');
    out.style.color = r ? '#4CC38A' : '#F26B62';
}

document.getElementById('run').onclick = run;
inp.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
run();`
    },

    // ═══════════════════════════════════════════════════════════════
    // PS-04 — Longest Common Prefix
    // ═══════════════════════════════════════════════════════════════
    'PS-04': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Longest Common Prefix</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="demo">
        <div class="row">
            <label>strings (comma-separated)</label>
            <input type="text" id="in" value="flower,flow,flight" dir="ltr">
        </div>
        <button id="run">ابحث</button>
        <div class="row">
            <label>البادئة المشتركة</label>
            <output id="out">—</output>
        </div>
        <p class="hint">جرّب: flower,flow,flight · dog,racecar,car</p>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    display: flex; align-items: center; justify-content: center;
    min-height: 100vh; background: #0A1017;
    font-family: system-ui, sans-serif; padding: 16px; font-size: 16px;
}
.demo {
    background: #131C26; border: 1px solid #2A3846; border-radius: 4px;
    padding: 20px; width: 100%; max-width: 420px;
    display: flex; flex-direction: column; gap: 12px; color: #E9EFF5;
}
.row { display: flex; flex-direction: column; gap: 6px; }
label {
    font-family: ui-monospace, Consolas, monospace;
    font-size: 20px; text-transform: uppercase;
    letter-spacing: 0.08em; color: #8394A5;
}
input {
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    padding: 8px 12px; color: #E9EFF5;
    font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; outline: none;
}
input:focus { border-color: #E3A83A; }
button {
    padding: 10px 16px; background: #E3A83A; color: #101A24;
    border: 0; border-radius: 4px; font-size: 28px;
    font-weight: 600; cursor: pointer; font-family: inherit;
}
button:hover { opacity: 0.9; }
output {
    display: block; padding: 12px;
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    color: #3CC4BE; font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; min-height: 44px; word-break: break-all;
}
.hint {
    font-size: 20px; color: #8394A5;
    font-family: ui-monospace, Consolas, monospace;
}`,
        js: `function lcp(arr) {
    if (!arr.length) return '';
    arr.sort();
    const a = arr[0], b = arr[arr.length - 1];
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) i++;
    return a.slice(0, i);
}

const inp = document.getElementById('in');
const out = document.getElementById('out');

function run() {
    const arr = inp.value.split(',').map(s => s.trim()).filter(Boolean);
    const r = lcp(arr);
    out.textContent = r ? '"' + r + '"' : '(لا توجد بادئة مشتركة)';
    out.style.color = r ? '#3CC4BE' : '#F26B62';
}

document.getElementById('run').onclick = run;
inp.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
run();`
    },

    // ═══════════════════════════════════════════════════════════════
    // PS-05 — Valid Parentheses
    // ═══════════════════════════════════════════════════════════════
    'PS-05': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Valid Parentheses</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="demo">
        <div class="row">
            <label>string</label>
            <input type="text" id="in" value="([])" dir="ltr">
        </div>
        <button id="run">تحقق</button>
        <div class="row">
            <label>النتيجة</label>
            <output id="out">—</output>
        </div>
        <p class="hint">جرّب: ()[]{} · ([)] · (]</p>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    display: flex; align-items: center; justify-content: center;
    min-height: 100vh; background: #0A1017;
    font-family: system-ui, sans-serif; padding: 16px; font-size: 16px;
}
.demo {
    background: #131C26; border: 1px solid #2A3846; border-radius: 4px;
    padding: 20px; width: 100%; max-width: 380px;
    display: flex; flex-direction: column; gap: 12px; color: #E9EFF5;
}
.row { display: flex; flex-direction: column; gap: 6px; }
label {
    font-family: ui-monospace, Consolas, monospace;
    font-size: 20px; text-transform: uppercase;
    letter-spacing: 0.08em; color: #8394A5;
}
input {
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    padding: 8px 12px; color: #E9EFF5;
    font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; outline: none;
}
input:focus { border-color: #E3A83A; }
button {
    padding: 10px 16px; background: #E3A83A; color: #101A24;
    border: 0; border-radius: 4px; font-size: 28px;
    font-weight: 600; cursor: pointer; font-family: inherit;
}
button:hover { opacity: 0.9; }
output {
    display: block; padding: 12px;
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    color: #3CC4BE; font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; min-height: 44px; word-break: break-all;
}
.hint {
    font-size: 20px; color: #8394A5;
    font-family: ui-monospace, Consolas, monospace;
}`,
        js: `function isValid(s) {
    const st = [], m = { ')': '(', ']': '[', '}': '{' };
    for (const c of s) {
        if (c === '(' || c === '[' || c === '{') st.push(c);
        else if (m[c] !== st.pop()) return false;
    }
    return st.length === 0;
}

const inp = document.getElementById('in');
const out = document.getElementById('out');

function run() {
    const r = isValid(inp.value);
    out.textContent = inp.value + '  →  ' + (r ? '✓ صحيح' : '✕ غير صحيح');
    out.style.color = r ? '#4CC38A' : '#F26B62';
}

document.getElementById('run').onclick = run;
inp.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
run();`
    },

    // ═══════════════════════════════════════════════════════════════
    // PS-06 — Merge Two Sorted Lists
    // ═══════════════════════════════════════════════════════════════
    'PS-06': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Merge Two Sorted Lists</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="demo">
        <div class="row">
            <label>list 1</label>
            <input type="text" id="in1" value="1,2,4" dir="ltr">
        </div>
        <div class="row">
            <label>list 2</label>
            <input type="text" id="in2" value="1,3,4" dir="ltr">
        </div>
        <button id="run">دمج</button>
        <div class="row">
            <label>النتيجة</label>
            <output id="out">—</output>
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    display: flex; align-items: center; justify-content: center;
    min-height: 100vh; background: #0A1017;
    font-family: system-ui, sans-serif; padding: 16px; font-size: 16px;
}
.demo {
    background: #131C26; border: 1px solid #2A3846; border-radius: 4px;
    padding: 20px; width: 100%; max-width: 420px;
    display: flex; flex-direction: column; gap: 12px; color: #E9EFF5;
}
.row { display: flex; flex-direction: column; gap: 6px; }
label {
    font-family: ui-monospace, Consolas, monospace;
    font-size: 20px; text-transform: uppercase;
    letter-spacing: 0.08em; color: #8394A5;
}
input {
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    padding: 8px 12px; color: #E9EFF5;
    font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; outline: none;
}
input:focus { border-color: #E3A83A; }
button {
    padding: 10px 16px; background: #E3A83A; color: #101A24;
    border: 0; border-radius: 4px; font-size: 28px;
    font-weight: 600; cursor: pointer; font-family: inherit;
}
button:hover { opacity: 0.9; }
output {
    display: block; padding: 12px;
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    color: #3CC4BE; font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; min-height: 44px; word-break: break-all;
}`,
        js: `function merge(a, b) {
    const r = [];
    let i = 0, j = 0;
    while (i < a.length && j < b.length) {
        r.push(a[i] <= b[j] ? a[i++] : b[j++]);
    }
    while (i < a.length) r.push(a[i++]);
    while (j < b.length) r.push(b[j++]);
    return r;
}

const i1 = document.getElementById('in1');
const i2 = document.getElementById('in2');
const out = document.getElementById('out');

function run() {
    const a = i1.value.split(',').map(Number).filter(n => !isNaN(n));
    const b = i2.value.split(',').map(Number).filter(n => !isNaN(n));
    out.textContent = '[' + merge(a, b).join(', ') + ']';
}

document.getElementById('run').onclick = run;
i1.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
i2.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
run();`
    },

    // ═══════════════════════════════════════════════════════════════
    // PS-07 — Remove Duplicates
    // ═══════════════════════════════════════════════════════════════
    'PS-07': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Remove Duplicates</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="demo">
        <div class="row">
            <label>sorted array</label>
            <input type="text" id="in" value="0,0,1,1,1,2,2,3,3,4" dir="ltr">
        </div>
        <button id="run">أزل التكرار</button>
        <div class="row">
            <label>النتيجة</label>
            <output id="out">—</output>
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    display: flex; align-items: center; justify-content: center;
    min-height: 100vh; background: #0A1017;
    font-family: system-ui, sans-serif; padding: 16px; font-size: 16px;
}
.demo {
    background: #131C26; border: 1px solid #2A3846; border-radius: 4px;
    padding: 20px; width: 100%; max-width: 420px;
    display: flex; flex-direction: column; gap: 12px; color: #E9EFF5;
}
.row { display: flex; flex-direction: column; gap: 6px; }
label {
    font-family: ui-monospace, Consolas, monospace;
    font-size: 20px; text-transform: uppercase;
    letter-spacing: 0.08em; color: #8394A5;
}
input {
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    padding: 8px 12px; color: #E9EFF5;
    font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; outline: none;
}
input:focus { border-color: #E3A83A; }
button {
    padding: 10px 16px; background: #E3A83A; color: #101A24;
    border: 0; border-radius: 4px; font-size: 28px;
    font-weight: 600; cursor: pointer; font-family: inherit;
}
button:hover { opacity: 0.9; }
output {
    display: block; padding: 12px;
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    color: #3CC4BE; font-family: ui-monospace, Consolas, monospace;
    font-size: 14px; min-height: 44px; word-break: break-all;
}`,
        js: `function removeDup(a) {
    if (!a.length) return 0;
    let k = 1;
    for (let i = 1; i < a.length; i++) {
        if (a[i] !== a[i - 1]) a[k++] = a[i];
    }
    return k;
}

const inp = document.getElementById('in');
const out = document.getElementById('out');

function run() {
    const a = inp.value.split(',').map(Number).filter(n => !isNaN(n));
    const k = removeDup(a);
    out.textContent = 'k=' + k + '  →  [' + a.slice(0, k).join(', ') + ']';
}

document.getElementById('run').onclick = run;
inp.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
run();`
    },

    // ═══════════════════════════════════════════════════════════════
    // PS-08 — Remove Element
    // ═══════════════════════════════════════════════════════════════
    'PS-08': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Remove Element</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="demo">
        <div class="row">
            <label>array</label>
            <input type="text" id="in" value="3,2,2,3" dir="ltr">
        </div>
        <div class="row">
            <label>value to remove</label>
            <input type="text" id="val" value="3" dir="ltr">
        </div>
        <button id="run">أزل</button>
        <div class="row">
            <label>النتيجة</label>
            <output id="out">—</output>
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    display: flex; align-items: center; justify-content: center;
    min-height: 100vh; background: #0A1017;
    font-family: system-ui, sans-serif; padding: 16px; font-size: 16px;
}
.demo {
    background: #131C26; border: 1px solid #2A3846; border-radius: 4px;
    padding: 20px; width: 100%; max-width: 420px;
    display: flex; flex-direction: column; gap: 12px; color: #E9EFF5;
}
.row { display: flex; flex-direction: column; gap: 6px; }
label {
    font-family: ui-monospace, Consolas, monospace;
    font-size: 20px; text-transform: uppercase;
    letter-spacing: 0.08em; color: #8394A5;
}
input {
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    padding: 8px 12px; color: #E9EFF5;
    font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; outline: none;
}
input:focus { border-color: #E3A83A; }
button {
    padding: 10px 16px; background: #E3A83A; color: #101A24;
    border: 0; border-radius: 4px; font-size: 28px;
    font-weight: 600; cursor: pointer; font-family: inherit;
}
button:hover { opacity: 0.9; }
output {
    display: block; padding: 12px;
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    color: #3CC4BE; font-family: ui-monospace, Consolas, monospace;
    font-size: 14px; min-height: 44px; word-break: break-all;
}`,
        js: `function removeEl(a, v) {
    let k = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== v) a[k++] = a[i];
    }
    return k;
}

const inp = document.getElementById('in');
const val = document.getElementById('val');
const out = document.getElementById('out');

function run() {
    const a = inp.value.split(',').map(Number).filter(n => !isNaN(n));
    const v = Number(val.value);
    const k = removeEl(a, v);
    out.textContent = 'k=' + k + '  →  [' + a.slice(0, k).join(', ') + ']';
}

document.getElementById('run').onclick = run;
inp.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
val.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
run();`
    },

    // ═══════════════════════════════════════════════════════════════
    // PS-09 — Find the Index
    // ═══════════════════════════════════════════════════════════════
    'PS-09': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Find the Index</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="demo">
        <div class="row">
            <label>haystack</label>
            <input type="text" id="h" value="sadbutsad" dir="ltr">
        </div>
        <div class="row">
            <label>needle</label>
            <input type="text" id="n" value="sad" dir="ltr">
        </div>
        <button id="run">ابحث</button>
        <div class="row">
            <label>النتيجة</label>
            <output id="out">—</output>
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    display: flex; align-items: center; justify-content: center;
    min-height: 100vh; background: #0A1017;
    font-family: system-ui, sans-serif; padding: 16px; font-size: 16px;
}
.demo {
    background: #131C26; border: 1px solid #2A3846; border-radius: 4px;
    padding: 20px; width: 100%; max-width: 400px;
    display: flex; flex-direction: column; gap: 12px; color: #E9EFF5;
}
.row { display: flex; flex-direction: column; gap: 6px; }
label {
    font-family: ui-monospace, Consolas, monospace;
    font-size: 20px; text-transform: uppercase;
    letter-spacing: 0.08em; color: #8394A5;
}
input {
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    padding: 8px 12px; color: #E9EFF5;
    font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; outline: none;
}
input:focus { border-color: #E3A83A; }
button {
    padding: 10px 16px; background: #E3A83A; color: #101A24;
    border: 0; border-radius: 4px; font-size: 28px;
    font-weight: 600; cursor: pointer; font-family: inherit;
}
button:hover { opacity: 0.9; }
output {
    display: block; padding: 12px;
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    color: #3CC4BE; font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; min-height: 44px;
}`,
        js: `const h = document.getElementById('h');
const n = document.getElementById('n');
const out = document.getElementById('out');

function run() {
    const i = h.value.indexOf(n.value);
    out.textContent = 'indexOf = ' + i + (i === -1 ? '  (غير موجود)' : '');
    out.style.color = i === -1 ? '#F26B62' : '#3CC4BE';
}

document.getElementById('run').onclick = run;
h.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
n.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
run();`
    },

    // ═══════════════════════════════════════════════════════════════
    // PS-10 — Search Insert Position
    // ═══════════════════════════════════════════════════════════════
    'PS-10': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Insert Position</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="demo">
        <div class="row">
            <label>sorted array</label>
            <input type="text" id="in" value="1,3,5,6" dir="ltr">
        </div>
        <div class="row">
            <label>target</label>
            <input type="text" id="t" value="5" dir="ltr">
        </div>
        <button id="run">ابحث</button>
        <div class="row">
            <label>الموقع</label>
            <output id="out">—</output>
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    display: flex; align-items: center; justify-content: center;
    min-height: 100vh; background: #0A1017;
    font-family: system-ui, sans-serif; padding: 16px; font-size: 16px;
}
.demo {
    background: #131C26; border: 1px solid #2A3846; border-radius: 4px;
    padding: 20px; width: 100%; max-width: 400px;
    display: flex; flex-direction: column; gap: 12px; color: #E9EFF5;
}
.row { display: flex; flex-direction: column; gap: 6px; }
label {
    font-family: ui-monospace, Consolas, monospace;
    font-size: 20px; text-transform: uppercase;
    letter-spacing: 0.08em; color: #8394A5;
}
input {
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    padding: 8px 12px; color: #E9EFF5;
    font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; outline: none;
}
input:focus { border-color: #E3A83A; }
button {
    padding: 10px 16px; background: #E3A83A; color: #101A24;
    border: 0; border-radius: 4px; font-size: 28px;
    font-weight: 600; cursor: pointer; font-family: inherit;
}
button:hover { opacity: 0.9; }
output {
    display: block; padding: 12px;
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    color: #3CC4BE; font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; min-height: 44px;
}`,
        js: `function search(nums, t) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (nums[m] === t) return m;
        if (nums[m] < t) l = m + 1;
        else r = m - 1;
    }
    return l;
}

const inp = document.getElementById('in');
const t = document.getElementById('t');
const out = document.getElementById('out');

function run() {
    const a = inp.value.split(',').map(Number).filter(n => !isNaN(n));
    const target = Number(t.value);
    out.textContent = 'index = ' + search(a, target);
}

document.getElementById('run').onclick = run;
inp.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
t.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
run();`
    },

    // ═══════════════════════════════════════════════════════════════
    // PS-11 — Length of Last Word
    // ═══════════════════════════════════════════════════════════════
    'PS-11': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Length of Last Word</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="demo">
        <div class="row">
            <label>string</label>
            <input type="text" id="in" value="   fly me   to   the moon  " dir="ltr">
        </div>
        <button id="run">احسب</button>
        <div class="row">
            <label>طول آخر كلمة</label>
            <output id="out">—</output>
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    display: flex; align-items: center; justify-content: center;
    min-height: 100vh; background: #0A1017;
    font-family: system-ui, sans-serif; padding: 16px; font-size: 16px;
}
.demo {
    background: #131C26; border: 1px solid #2A3846; border-radius: 4px;
    padding: 20px; width: 100%; max-width: 420px;
    display: flex; flex-direction: column; gap: 12px; color: #E9EFF5;
}
.row { display: flex; flex-direction: column; gap: 6px; }
label {
    font-family: ui-monospace, Consolas, monospace;
    font-size: 20px; text-transform: uppercase;
    letter-spacing: 0.08em; color: #8394A5;
}
input {
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    padding: 8px 12px; color: #E9EFF5;
    font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; outline: none;
}
input:focus { border-color: #E3A83A; }
button {
    padding: 10px 16px; background: #E3A83A; color: #101A24;
    border: 0; border-radius: 4px; font-size: 28px;
    font-weight: 600; cursor: pointer; font-family: inherit;
}
button:hover { opacity: 0.9; }
output {
    display: block; padding: 12px;
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    color: #3CC4BE; font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; min-height: 44px;
}`,
        js: `function lastLen(s) {
    let i = s.length - 1, c = 0;
    while (i >= 0 && s[i] === ' ') i--;
    while (i >= 0 && s[i] !== ' ') { c++; i--; }
    return c;
}

const inp = document.getElementById('in');
const out = document.getElementById('out');

function run() {
    out.textContent = 'length = ' + lastLen(inp.value);
}

document.getElementById('run').onclick = run;
inp.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
run();`
    },

    // ═══════════════════════════════════════════════════════════════
    // PS-12 — Add Binary 🆕
    // ═══════════════════════════════════════════════════════════════
    'PS-12': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Binary</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="demo">
        <div class="row">
            <label>binary a</label>
            <input type="text" id="a" value="1010" dir="ltr">
        </div>
        <div class="row">
            <label>binary b</label>
            <input type="text" id="b" value="1011" dir="ltr">
        </div>
        <button id="run">اجمع</button>
        <div class="row">
            <label>الناتج (binary)</label>
            <output id="out">—</output>
        </div>
        <p class="hint">أمثلة: 11 + 1 = 100 · 1010 + 1011 = 10101</p>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    display: flex; align-items: center; justify-content: center;
    min-height: 100vh; background: #0A1017;
    font-family: system-ui, sans-serif; padding: 16px; font-size: 16px;
}
.demo {
    background: #131C26; border: 1px solid #2A3846; border-radius: 4px;
    padding: 20px; width: 100%; max-width: 420px;
    display: flex; flex-direction: column; gap: 12px; color: #E9EFF5;
}
.row { display: flex; flex-direction: column; gap: 6px; }
label {
    font-family: ui-monospace, Consolas, monospace;
    font-size: 20px; text-transform: uppercase;
    letter-spacing: 0.08em; color: #8394A5;
}
input {
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    padding: 8px 12px; color: #E9EFF5;
    font-family: ui-monospace, Consolas, monospace;
    font-size: 28px; outline: none;
}
input:focus { border-color: #E3A83A; }
button {
    padding: 10px 16px; background: #E3A83A; color: #101A24;
    border: 0; border-radius: 4px; font-size: 28px;
    font-weight: 600; cursor: pointer; font-family: inherit;
}
button:hover { opacity: 0.9; }
output {
    display: block; padding: 12px;
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    color: #3CC4BE; font-family: ui-monospace, Consolas, monospace;
    font-size: 18px; min-height: 44px; letter-spacing: 0.1em;
}
.hint {
    font-size: 20px; color: #8394A5;
    font-family: ui-monospace, Consolas, monospace;
}`,
        js: `function addBinary(a, b) {
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
}

const a = document.getElementById('a');
const b = document.getElementById('b');
const out = document.getElementById('out');

function run() {
    const va = a.value.trim();
    const vb = b.value.trim();

    if (!/^[01]+$/.test(va) || !/^[01]+$/.test(vb)) {
        out.textContent = '✕ القيم لازم تكون binary (0 و 1 بس)';
        out.style.color = '#F26B62';
        return;
    }

    out.style.color = '#3CC4BE';
    out.textContent = va + ' + ' + vb + ' = ' + addBinary(va, vb);
}

document.getElementById('run').onclick = run;
a.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
b.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
run();`
    },

    'PS-13': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sqrt(x)</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="demo">
        <div class="row">
            <label>x</label>
            <input type="text" id="in" value="8" dir="ltr">
        </div>
        <button id="run">احسب</button>
        <div class="row">
            <label>sqrt(x) =</label>
            <output id="out">—</output>
        </div>
        <p class="hint">جرّب: 4 · 8 · 9 · 15 · 16 · 100 · 2147395599</p>
        <div class="trace" id="trace"></div>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* { box-sizing: border-box; margin: 0; padding: 0; }

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #0A1017;
    font-family: system-ui, -apple-system, sans-serif;
    padding: 16px;
    font-size: 16px;
    color: #E9EFF5;
}

.demo {
    background: #131C26;
    border: 1px solid #2A3846;
    border-radius: 4px;
    padding: 20px;
    width: 100%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.row {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

label {
    font-family: ui-monospace, Consolas, monospace;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #8394A5;
}

input {
    background: #0A1017;
    border: 1px solid #2A3846;
    border-radius: 2px;
    padding: 10px 14px;
    color: #E9EFF5;
    font-family: ui-monospace, Consolas, monospace;
    font-size: 22px;
    outline: none;
}

input:focus {
    border-color: #E3A83A;
}

button {
    padding: 12px 18px;
    background: #E3A83A;
    color: #101A24;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: opacity 0.16s;
}

button:hover {
    opacity: 0.9;
}

output {
    display: block;
    padding: 14px;
    background: #0A1017;
    border: 1px solid #2A3846;
    border-radius: 2px;
    color: #3CC4BE;
    font-family: ui-monospace, Consolas, monospace;
    font-size: 24px;
    min-height: 52px;
    word-break: break-all;
}

.hint {
    font-size: 12px;
    color: #8394A5;
    font-family: ui-monospace, Consolas, monospace;
    line-height: 1.6;
}

.trace {
    margin-top: 8px;
    max-height: 240px;
    overflow-y: auto;
    border-top: 1px solid #2A3846;
    padding-top: 12px;
    font-family: ui-monospace, Consolas, monospace;
    font-size: 11px;
    line-height: 1.8;
    color: #8394A5;
    direction: ltr;
    text-align: left;
    display: none;
}

.trace.visible {
    display: block;
}

.trace__row {
    padding: 3px 0;
    white-space: pre;
}

.trace__row--found { color: #4CD08A; }
.trace__row--move { color: #5B9DFF; }
.trace__row--miss { color: #F26B62; }
.trace__row--final { color: #E3A83A; font-weight: 700; padding-top: 6px; border-top: 1px dashed #2A3846; margin-top: 4px; }

::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: #0A1017; }
::-webkit-scrollbar-thumb { background: #2A3846; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #4A5F7A; }`,
        js: `function mySqrt(x) {
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
}

const inp = document.getElementById('in');
const out = document.getElementById('out');
const trace = document.getElementById('trace');

function traceRun(x) {
    const rows = [];
    let left = 0;
    let right = x;
    let result = 0;
    let step = 0;

    if (x < 0) return { rows: ['✕ x لازم يكون non-negative'], value: null };

    while (left <= right) {
        step++;
        const mid = Math.floor((left + right) / 2);
        const sq = mid * mid;

        if (sq <= x) {
            rows.push({ text: 'Step ' + step + ':  L=' + left + '  R=' + right + '  mid=' + mid + '  mid²=' + sq + ' ≤ ' + x + '  →  result=' + mid + ', L=' + (mid + 1), cls: 'found' });
            result = mid;
            left = mid + 1;
        } else {
            rows.push({ text: 'Step ' + step + ':  L=' + left + '  R=' + right + '  mid=' + mid + '  mid²=' + sq + ' > ' + x + '  →  R=' + (mid - 1), cls: 'move' });
            right = mid - 1;
        }
    }

    rows.push({ text: 'Stop: L(' + left + ') > R(' + right + ')', cls: 'miss' });
    rows.push({ text: '✓ return result = ' + result, cls: 'final' });
    return { rows, value: result };
}

function run() {
    const v = inp.value.trim();
    const x = Number(v);

    if (v === '' || isNaN(x) || x < 0) {
        out.textContent = '✕ قيمة غير صحيحة';
        out.style.color = '#F26B62';
        trace.classList.remove('visible');
        return;
    }

    const fast = mySqrt(x);
    const { rows, value } = traceRun(x);

    out.style.color = '#3CC4BE';
    out.textContent = '√' + x + ' ≈ ' + value + '  (mySqrt = ' + fast + ')';

    trace.innerHTML = '';
    rows.forEach(r => {
        const div = document.createElement('div');
        div.className = 'trace__row' + (r.cls ? ' trace__row--' + r.cls : '');
        div.textContent = r.text;
        trace.appendChild(div);
    });
    trace.classList.add('visible');
}

document.getElementById('run').onclick = run;
inp.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
inp.addEventListener('input', run);
run();`
    },

    'PS-14': {
    stage: 'dark',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Climbing Stairs</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="demo">
        <div class="row">
            <label>n (steps)</label>
            <input type="number" id="in" value="5" min="1" max="45" dir="ltr">
        </div>
        <button id="run">احسب</button>
        <div class="row">
            <label>ways(n) =</label>
            <output id="out">—</output>
        </div>
        <p class="hint">جرّب: 1 · 2 · 3 · 5 · 10 · 20 · 30 · 45</p>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
    css: `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    display: flex; align-items: center; justify-content: center;
    min-height: 100vh; background: #0A1017;
    font-family: system-ui, sans-serif; padding: 16px; font-size: 16px;
}
.demo {
    background: #131C26; border: 1px solid #2A3846; border-radius: 4px;
    padding: 20px; width: 100%; max-width: 400px;
    display: flex; flex-direction: column; gap: 12px; color: #E9EFF5;
}
.row { display: flex; flex-direction: column; gap: 6px; }
label {
    font-family: ui-monospace, Consolas, monospace;
    font-size: 12px; text-transform: uppercase;
    letter-spacing: 0.08em; color: #8394A5;
}
input {
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    padding: 8px 12px; color: #E9EFF5;
    font-family: ui-monospace, Consolas, monospace;
    font-size: 20px; outline: none;
}
input:focus { border-color: #E3A83A; }
button {
    padding: 10px 16px; background: #E3A83A; color: #101A24;
    border: 0; border-radius: 4px; font-size: 16px;
    font-weight: 600; cursor: pointer; font-family: inherit;
}
button:hover { opacity: 0.9; }
output {
    display: block; padding: 12px;
    background: #0A1017; border: 1px solid #2A3846; border-radius: 2px;
    color: #3CC4BE; font-family: ui-monospace, Consolas, monospace;
    font-size: 22px; min-height: 44px; word-break: break-all;
}
.hint {
    font-size: 12px; color: #8394A5;
    font-family: ui-monospace, Consolas, monospace;
}`,
    js: `function climbStairs(n) {
    let prev2 = 1;
    let prev1 = 2;

    for (let i = 3; i <= n; i++) {
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return n === 1 ? 1 : prev1;
}

const inp = document.getElementById('in');
const out = document.getElementById('out');

function run() {
    const v = inp.value.trim();
    const n = Number(v);

    if (v === '' || isNaN(n) || n < 1 || n > 45) {
        out.textContent = '✕ القيمة لازم تكون بين 1 و 45';
        out.style.color = '#F26B62';
        return;
    }

    const result = climbStairs(n);
    out.style.color = '#3CC4BE';
    out.textContent = 'ways(' + n + ') = ' + result;
}

document.getElementById('run').onclick = run;
inp.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
inp.addEventListener('input', run);
run();`
},
};