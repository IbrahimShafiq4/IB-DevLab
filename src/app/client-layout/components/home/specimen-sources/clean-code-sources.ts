import type { SpecimenSource } from '../../../../core/specimen-registry';

/**
 * All CC-XXX specimens — Clean Code interactive comparison demos.
 * (CC-01 → CC-05)
 *
 * Each demo shows a card with toggle buttons that switch between
 * a "before" (bad) and "after" (good) code example.
 */
export const CLEAN_CODE_SOURCES: Record<string, SpecimenSource> = {

    // ═══════════════════════════════════════════════════════════════
    // CC-01 — From Messy to Maintainable
    // ═══════════════════════════════════════════════════════════════
    'CC-01': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clean Code 01</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h2>المبدأ: من الفوضى للصيانة</h2>
        <p>شوف الفرق بين كود متلخبط وكود نظيف. اضغط الأزرار للمقارنة.</p>
        <div class="btns">
            <button data-show="bad" class="active">قبل</button>
            <button data-show="good">بعد</button>
        </div>
        <pre class="code" id="code"></pre>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #0A1017;
    font-family: system-ui, sans-serif;
    padding: 16px;
    font-size: 16px;
    color: #E9EFF5;
}

.card {
    background: #131C26;
    border: 1px solid #2A3846;
    border-radius: 4px;
    padding: 20px;
    width: 100%;
    max-width: 520px;
}

h2 {
    font-size: 1rem;
    margin-bottom: 8px;
    color: #E3A83A;
}

p {
    font-size: .85rem;
    color: #B4C1CE;
    margin-bottom: 14px;
    line-height: 1.6;
}

.btns {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
}

.btns button {
    padding: 6px 14px;
    background: transparent;
    border: 1px solid #2A3846;
    color: #B4C1CE;
    border-radius: 2px;
    cursor: pointer;
    font-size: .8rem;
}

.btns button.active {
    background: #E3A83A;
    color: #101A24;
    border-color: #E3A83A;
    font-weight: 600;
}

.code {
    background: #0A1017;
    border: 1px solid #2A3846;
    border-radius: 2px;
    padding: 14px;
    font-family: monospace;
    font-size: .75rem;
    line-height: 1.7;
    color: #D5E0EA;
    overflow: auto;
    max-height: 280px;
    direction: ltr;
    text-align: left;
    white-space: pre;
}

@media (max-width: 600px) {
    .code {
        font-size: .7rem;
    }
}`,
        js: `const bad = 'function calc(d, x) {\\n  const t = d * x;\\n  const r = t * 0.15;\\n  return t - r;\\n}\\n\\nconst u = { n: "Ali", a: 30 };\\nconsole.log(u.n);';

const good = 'function calculateFinalPrice(basePrice, quantity) {\\n  const subtotal = basePrice * quantity;\\n  const taxAmount = subtotal * TAX_RATE;\\n  return subtotal - taxAmount;\\n}\\n\\nconst user = { name: "Ali", age: 30 };\\nconsole.log(user.name);';

const code = document.getElementById('code');
const btns = document.querySelectorAll('.btns button');

function setCode(kind) {
    code.textContent = kind === 'bad' ? bad : good;
    btns.forEach(b => b.classList.toggle('active', b.dataset.show === kind));
}

btns.forEach(b => b.addEventListener('click', () => setCode(b.dataset.show)));
setCode('bad');`
    },

    // ═══════════════════════════════════════════════════════════════
    // CC-02 — Meaningful Names
    // ═══════════════════════════════════════════════════════════════
    'CC-02': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clean Code 02</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h2>الأسماء المعبّرة</h2>
        <p>غيّر الاسم وشف الفرق في القراءة.</p>
        <div class="row">
            <label>bad name</label>
            <input type="text" id="b" value="d" dir="ltr">
        </div>
        <div class="row">
            <label>good name</label>
            <input type="text" id="g" value="elapsedTimeInDays" dir="ltr">
        </div>
        <button id="run">قارن</button>
        <pre class="code" id="code"></pre>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #0A1017;
    font-family: system-ui, sans-serif;
    padding: 16px;
    font-size: 16px;
    color: #E9EFF5;
}

.card {
    background: #131C26;
    border: 1px solid #2A3846;
    border-radius: 4px;
    padding: 20px;
    width: 100%;
    max-width: 520px;
}

h2 {
    font-size: 1rem;
    margin-bottom: 8px;
    color: #E3A83A;
}

p {
    font-size: .85rem;
    color: #B4C1CE;
    margin-bottom: 14px;
    line-height: 1.6;
}

.row {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 8px;
}

label {
    font-family: monospace;
    font-size: 10px;
    text-transform: uppercase;
    color: #8394A5;
    letter-spacing: .08em;
}

input {
    background: #0A1017;
    border: 1px solid #2A3846;
    border-radius: 2px;
    padding: 6px 10px;
    color: #E9EFF5;
    font-family: monospace;
    font-size: 13px;
    outline: none;
}

input:focus {
    border-color: #E3A83A;
}

button {
    margin-top: 8px;
    padding: 8px 16px;
    background: #E3A83A;
    color: #101A24;
    border: 0;
    border-radius: 2px;
    font-size: .85rem;
    font-weight: 600;
    cursor: pointer;
}

.code {
    margin-top: 12px;
    background: #0A1017;
    border: 1px solid #2A3846;
    border-radius: 2px;
    padding: 14px;
    font-family: monospace;
    font-size: .75rem;
    line-height: 1.7;
    color: #D5E0EA;
    overflow: auto;
    direction: ltr;
    text-align: left;
    white-space: pre;
}`,
        js: `const b = document.getElementById('b');
const g = document.getElementById('g');
const code = document.getElementById('code');

function run() {
    code.textContent =
        '// قراءة سيئة:\\nconst ' + b.value + ' = 0; // elapsed time in days\\n\\n' +
        '// قراءة واضحة:\\nconst ' + g.value + ' = 0;';
}

document.getElementById('run').onclick = run;
run();`
    },

    // ═══════════════════════════════════════════════════════════════
    // CC-03 — Class & Method Names
    // ═══════════════════════════════════════════════════════════════
    'CC-03': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clean Code 03</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h2>أسماء الكلاسات والدوال</h2>
        <p>اختر نمط التسمية وشف الفرق.</p>
        <div class="btns">
            <button data-t="verb" class="active">أفعال للدوال</button>
            <button data-t="noun">أسماء للكلاسات</button>
        </div>
        <pre class="code" id="code"></pre>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #0A1017;
    font-family: system-ui, sans-serif;
    padding: 16px;
    font-size: 16px;
    color: #E9EFF5;
}

.card {
    background: #131C26;
    border: 1px solid #2A3846;
    border-radius: 4px;
    padding: 20px;
    width: 100%;
    max-width: 520px;
}

h2 {
    font-size: 1rem;
    margin-bottom: 8px;
    color: #E3A83A;
}

p {
    font-size: .85rem;
    color: #B4C1CE;
    margin-bottom: 14px;
    line-height: 1.6;
}

.btns {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
}

.btns button {
    padding: 6px 14px;
    background: transparent;
    border: 1px solid #2A3846;
    color: #B4C1CE;
    border-radius: 2px;
    cursor: pointer;
    font-size: .8rem;
}

.btns button.active {
    background: #E3A83A;
    color: #101A24;
    border-color: #E3A83A;
    font-weight: 600;
}

.code {
    background: #0A1017;
    border: 1px solid #2A3846;
    border-radius: 2px;
    padding: 14px;
    font-family: monospace;
    font-size: .75rem;
    line-height: 1.7;
    color: #D5E0EA;
    overflow: auto;
    max-height: 280px;
    direction: ltr;
    text-align: left;
    white-space: pre;
}`,
        js: `const verb = '// ✗ غلط\\nfunction Message(user) { }\\nfunction OrderValidation(o) { }\\n\\n// ✓ صح\\nfunction sendMessage(user) { }\\nfunction validateOrder(o) { }';

const noun = '// ✗ غلط\\nclass ProjectManager { /* CRUD */ }\\n\\n// ✓ صح\\nclass ProjectRepository { }\\nclass EmailService { }';

const code = document.getElementById('code');
const btns = document.querySelectorAll('.btns button');

function setCode(t) {
    code.textContent = t === 'verb' ? verb : noun;
    btns.forEach(b => b.classList.toggle('active', b.dataset.t === t));
}

btns.forEach(b => b.addEventListener('click', () => setCode(b.dataset.t)));
setCode('verb');`
    },

    // ═══════════════════════════════════════════════════════════════
    // CC-04 — Functions
    // ═══════════════════════════════════════════════════════════════
    'CC-04': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clean Code 04</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h2>الدوال</h2>
        <p>شف كيف تتقسّم دالة كبيرة إلى دوال صغيرة.</p>
        <div class="btns">
            <button data-t="bad" class="active">قبل</button>
            <button data-t="good">بعد</button>
        </div>
        <pre class="code" id="code"></pre>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #0A1017;
    font-family: system-ui, sans-serif;
    padding: 16px;
    font-size: 16px;
    color: #E9EFF5;
}

.card {
    background: #131C26;
    border: 1px solid #2A3846;
    border-radius: 4px;
    padding: 20px;
    width: 100%;
    max-width: 520px;
}

h2 {
    font-size: 1rem;
    margin-bottom: 8px;
    color: #E3A83A;
}

p {
    font-size: .85rem;
    color: #B4C1CE;
    margin-bottom: 14px;
    line-height: 1.6;
}

.btns {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
}

.btns button {
    padding: 6px 14px;
    background: transparent;
    border: 1px solid #2A3846;
    color: #B4C1CE;
    border-radius: 2px;
    cursor: pointer;
    font-size: .8rem;
}

.btns button.active {
    background: #E3A83A;
    color: #101A24;
    border-color: #E3A83A;
    font-weight: 600;
}

.code {
    background: #0A1017;
    border: 1px solid #2A3846;
    border-radius: 2px;
    padding: 14px;
    font-family: monospace;
    font-size: .72rem;
    line-height: 1.6;
    color: #D5E0EA;
    overflow: auto;
    max-height: 300px;
    direction: ltr;
    text-align: left;
    white-space: pre;
}`,
        js: `const bad = 'function SendMessage(c, s, r) {\\n  if (!c) throw "empty";\\n  if (c.length > 1000) throw "long";\\n  var m = new Message();\\n  _db.Save(m);\\n  _hub.All.SendAsync(m);\\n  var u = _db.Users.Find(s);\\n  u.LastActive = now();\\n  _db.Save();\\n}';

const good = 'public void SendMessage(string content, int s, int r)\\n{\\n    ValidateMessageContent(content);\\n    var message = SaveMessage(content, s, r);\\n    NotifyReceiver(message);\\n    UpdateSenderActivity(s);\\n}';

const code = document.getElementById('code');
const btns = document.querySelectorAll('.btns button');

function setCode(t) {
    code.textContent = t === 'bad' ? bad : good;
    btns.forEach(b => b.classList.toggle('active', b.dataset.t === t));
}

btns.forEach(b => b.addEventListener('click', () => setCode(b.dataset.t)));
setCode('bad');`
    },

    // ═══════════════════════════════════════════════════════════════
    // CC-05 — Comments
    // ═══════════════════════════════════════════════════════════════
    'CC-05': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clean Code 05</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h2>التعليقات</h2>
        <p>الكومنتات آخر حل مش أول حل. شف الفرق.</p>
        <div class="btns">
            <button data-t="bad" class="active">قبل</button>
            <button data-t="good">بعد</button>
        </div>
        <pre class="code" id="code"></pre>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #0A1017;
    font-family: system-ui, sans-serif;
    padding: 16px;
    font-size: 16px;
    color: #E9EFF5;
}

.card {
    background: #131C26;
    border: 1px solid #2A3846;
    border-radius: 4px;
    padding: 20px;
    width: 100%;
    max-width: 520px;
}

h2 {
    font-size: 1rem;
    margin-bottom: 8px;
    color: #E3A83A;
}

p {
    font-size: .85rem;
    color: #B4C1CE;
    margin-bottom: 14px;
    line-height: 1.6;
}

.btns {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
}

.btns button {
    padding: 6px 14px;
    background: transparent;
    border: 1px solid #2A3846;
    color: #B4C1CE;
    border-radius: 2px;
    cursor: pointer;
    font-size: .8rem;
}

.btns button.active {
    background: #E3A83A;
    color: #101A24;
    border-color: #E3A83A;
    font-weight: 600;
}

.code {
    background: #0A1017;
    border: 1px solid #2A3846;
    border-radius: 2px;
    padding: 14px;
    font-family: monospace;
    font-size: .72rem;
    line-height: 1.6;
    color: #D5E0EA;
    overflow: auto;
    max-height: 300px;
    direction: ltr;
    text-align: left;
    white-space: pre;
}`,
        js: `const bad = '// زوّد i بواحد\\ni++;\\n\\n// اتأكد إن المستخدم بالغ\\nif (user.age >= 18) {\\n  // اسمح بالدخول\\n  allowAccess();\\n}';

const good = 'i++;\\n\\nconst ADULT_AGE = 18;\\n\\nif (user.age >= ADULT_AGE) {\\n  allowAccess();\\n}\\n\\n// ليه: بنتجاهل إيميلات الأحد عشان مانغرقش\\nif (today.getDay() !== 0) {\\n  sendNewsletter(user);\\n}';

const code = document.getElementById('code');
const btns = document.querySelectorAll('.btns button');

function setCode(t) {
    code.textContent = t === 'bad' ? bad : good;
    btns.forEach(b => b.classList.toggle('active', b.dataset.t === t));
}

btns.forEach(b => b.addEventListener('click', () => setCode(b.dataset.t)));
setCode('bad');`
    },
    'CC-06': {
        stage: 'dark',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clean Code 06</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h2>التنسيق — الصحيفة</h2>
        <p>شوف الفرق بين ملف متلخبط وملف منظّم. اضغط الأزرار للمقارنة.</p>
        <div class="btns">
            <button data-show="bad" class="active">قبل</button>
            <button data-show="good">بعد</button>
        </div>
        <pre class="code" id="code"></pre>
    </div>
    <script src="main.js"></script>
</body>
</html>`,
        css: `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #0A1017;
    font-family: system-ui, sans-serif;
    padding: 16px;
    font-size: 16px;
    color: #E9EFF5;
}

.card {
    background: #131C26;
    border: 1px solid #2A3846;
    border-radius: 4px;
    padding: 20px;
    width: 100%;
    max-width: 560px;
}

h2 {
    font-size: 1rem;
    margin-bottom: 8px;
    color: #E3A83A;
}

p {
    font-size: .85rem;
    color: #B4C1CE;
    margin-bottom: 14px;
    line-height: 1.6;
}

.btns {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
}

.btns button {
    padding: 6px 14px;
    background: transparent;
    border: 1px solid #2A3846;
    color: #B4C1CE;
    border-radius: 2px;
    cursor: pointer;
    font-size: .8rem;
}

.btns button.active {
    background: #E3A83A;
    color: #101A24;
    border-color: #E3A83A;
    font-weight: 600;
}

.code {
    background: #0A1017;
    border: 1px solid #2A3846;
    border-radius: 2px;
    padding: 14px;
    font-family: monospace;
    font-size: .72rem;
    line-height: 1.6;
    color: #D5E0EA;
    overflow: auto;
    max-height: 320px;
    direction: ltr;
    text-align: left;
    white-space: pre;
}`,
        js: `const bad = 'public class Service\\n{\\n    private readonly Ctx _c;\\n    public Service(Ctx c) { _c = c; }\\n    public void A() { _c.Save(); }\\n    public void B() { _c.Load(); }\\n    public void C() { _c.Update(); }\\n}';

const good = 'public class Service\\n{\\n    private readonly Ctx _c;\\n\\n    public Service(Ctx c)\\n    {\\n        _c = c;\\n    }\\n\\n    public void A()\\n    {\\n        _c.Save();\\n    }\\n\\n    public void B()\\n    {\\n        _c.Load();\\n    }\\n\\n    public void C()\\n    {\\n        _c.Update();\\n    }\\n}';

const code = document.getElementById('code');
const btns = document.querySelectorAll('.btns button');

function setCode(kind) {
    code.textContent = kind === 'bad' ? bad : good;
    btns.forEach(b => b.classList.toggle('active', b.dataset.show === kind));
}

btns.forEach(b => b.addEventListener('click', () => setCode(b.dataset.show)));
setCode('bad');`
    }
};