import { Component } from '@angular/core';
import {
  ICleanCodeContent,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-clean-code-01',
  imports: [SharedCodeComponent],
  template: `
    <app-shared-code
      [tags]="projectTags"
      [projectDate]="projectDate"
      [projectDescription]="projectDescription"
      [projectVersion]="projectVersion"
      [projectName]="projectName"
      [isItCleanCode]="true"
      [isProjectHasNotAssists]="false"
      [cleanCodeContent]="cleanCodeContent"
    />
  `,
  styles: ``
})
export class CleanCode01 {

  projectName: string = 'الكود النظيف – من الفوضى إلى الصيانة السهلة';

  projectDescription: string = `
  دليل عملي لمبادئ الكود النظيف مع أمثلة حقيقية "قبل وبعد".

  المواضيع اللي بنغطيها:
  - الأسماء المعبّرة (Meaningful Names)
  - الدوال الصغيرة (Small Functions)
  - مبدأ المسؤولية الواحدة (SRP)
  - الكود اللي بيشرح نفسه (Self-Documenting Code)
  - مبدأ DRY (متكررش نفسك)
  - التعامل مع الأخطاء (Error Handling)
  - قاعدة الكشاف (The Boy Scout Rule)

  مستوحى من كتاب "Clean Code" لروبرت سي مارتن (Uncle Bob).
  `;

  projectDate: string = 'آخر تحديث: 29 سبتمبر 2026';
  projectVersion: string = 'v1.0.0';

  projectTags: string[] = [
    'Clean Code',
    'Software Engineering',
    'Best Practices',
    'Refactoring',
    'Uncle Bob',
    'TypeScript',
    'JavaScript'
  ];

  cleanCodeContent: ICleanCodeContent = {

    introduction: `
    الكود النظيف مش عن إنك تكتب كود شاطر أو معقد — هو عن إنك تكتب كود
    البشر التانيين (وأنت نفسك بعد شهور) يقدروا يقرأوه ويفهموه ويعدّلوا فيه
    من غير خوف.

    في الدليل ده، هنمشي على أهم المبادئ من كتاب "Clean Code" لروبرت سي مارتن،
    مع أمثلة "قبل وبعد" جنب بعض عشان تشوف الفرق على طول.
    `,

    story: `
    فتحت ملف كود كنت كاتبه من كام شهر عشان أضيف فيه حاجة بسيطة.

    قعدت أول عشر دقايق مش بعمل حاجة غير إني بحاول أفهم أنا نفسي كنت فاكر إيه
    وأنا بكتب السطور دي. متغيرات اسمها x و temp و data2،
    ودالة واحدة طولها فوق المية سطر وبتعمل كذا حاجة في نفس الوقت.

    قفلت الملف، وفتحت كتاب Clean Code لـ Uncle Bob اللي كان قاعد جنبي من فترة
    من غير ما أقراه.

    أول فكرة قابلتني في الكتاب كانت بسيطة:
    الكود بيتقرأ أكتر بكتير مما بيتكتب.
    يعني اللي كتبته أنت في نص ساعة، ممكن حد تاني — أو أنت نفسك بعد شهور —
    يقعد قدامه ساعة كاملة بس عشان يفهمه.

    وفيه تشبيه في الكتاب فضل في دماغي:
    الكود المتلخبط زي إنك تمشي في مستنقع (wading)، كل خطوة تقيلة وبتاخد وقت.
    والكود المرتب زي طريق ممهد، بتمشي فيه من غير ما تحس.

    رجعت لنفس الملف بعد ما خلصت الفصل، وطبقت حاجة اسمها Boy Scout Rule:
    "سيب المكان أنظف مما لقيته."

    معملتش rewrite للملف كله. بس غيّرت اسم المتغير x لـ userId،
    وقسمت الدالة الطويلة لتلاتة دوال أصغر كل واحدة بتعمل حاجة واحدة بس.
    حاجات بسيطة، ماخدتش مني عشر دقايق زيادة عن المهمة الأصلية.

    بس الفرق كان واضح لما رجعت لنفس الملف تاني بعد أسبوعين —
    لقيته أسهل بكتير إني أتعامل معاه.

    الحاجة اللي فضلت معايا من الفصل ده:
    نظافة الكود مش رفاهية بنسيبها لما نلاقي وقت فاضي.
    هي مسؤولية مهنية، حتى لو الديدلاين ضاغط.
    `,

    principles: [
      // ============ 1. الأسماء المعبّرة ============
      {
        title: 'الأسماء المعبّرة (Meaningful Names)',
        icon: 'fa-solid fa-tag',
        description: `
        الاسم لازم يوضّح النية. الاسم الكويس بيقولك الحاجة دي موجودة ليه،
        وبتعمل إيه، وبتُستخدم إزاي — من غير ما تحتاج تعليق يشرحها.
        `,
        badExample: {
          title: 'غلط – أسماء غامضة',
          code: `// يعني إيه "d"؟ يعني إيه "x"؟ و"calc" بتعمل إيه؟
function calc(d, x) {
  const t = d * x;
  const r = t * 0.15;
  return t - r;
}

const u = { n: 'Ali', a: 30 };
console.log(u.n);`
        },
        goodExample: {
          title: 'صح – أسماء بتوضّح النية',
          code: `function calculateFinalPrice(basePrice, quantity) {
  const subtotal = basePrice * quantity;
  const taxAmount = subtotal * TAX_RATE;
  return subtotal - taxAmount;
}

const user = { name: 'Ali', age: 30 };
console.log(user.name);`
        },
        explanation: `
        في المثال الغلط، محتاج تعليق عشان تخمّن بيحصل إيه.
        في المثال الصح، الاسم نفسه بيشرح كل حاجة —
        تقدر تقرأ الدالة كإنها جملة مفيدة.

        قاعدة مهمة: لو محتاج تعليق يشرح الاسم، يبقى الاسم غلط.
        `,
        tips: [
          'استخدم أسماء تنطقها بسهولة — لو مش قادر تقولها، مش هتقدر تناقشها.',
          'ابعد عن الأسماء بحرف واحد إلا لو عداد loop صغير (i, j).',
          'استخدم أسماء قابلة للبحث — "MAX_RETRY_COUNT" أحسن من "7".',
          'الكلاسات = أسماء (User, Order). الدوال = أفعال (saveUser, calculateTotal).'
        ]
      },

      // ============ 2. الدوال الصغيرة ============
      {
        title: 'الدوال الصغيرة (Small Functions)',
        icon: 'fa-solid fa-cubes',
        description: `
        الدوال لازم تكون صغيرة. صغيرة جداً.
        المفروض تعمل حاجة واحدة، تعملها صح، ومتعملش غيرها.
        `,
        badExample: {
          title: 'غلط – دالة عملاقة واحدة',
          code: `function processOrder(order) {
  // 1. التحقق من الصحة
  if (!order.items || order.items.length === 0) {
    throw new Error('Empty order');
  }
  if (!order.customer) {
    throw new Error('No customer');
  }

  // 2. حساب الإجمالي
  let total = 0;
  for (const item of order.items) {
    total += item.price * item.qty;
  }
  total = total * 1.15; // ضريبة

  // 3. الحفظ في قاعدة البيانات
  db.save(order);

  // 4. إرسال الإيميل
  emailService.send(order.customer.email, 'Order confirmed', total);

  // 5. تسجيل اللوج
  console.log('Order processed:', order.id);

  return total;
}`
        },
        goodExample: {
          title: 'صح – مقسّمة لدوال صغيرة',
          code: `function processOrder(order) {
  validateOrder(order);
  const total = calculateOrderTotal(order);
  saveOrder(order);
  sendConfirmationEmail(order, total);
  logOrderProcessed(order);
  return total;
}

function validateOrder(order) {
  if (!order.items?.length) throw new Error('Empty order');
  if (!order.customer) throw new Error('No customer');
}

function calculateOrderTotal(order) {
  const subtotal = order.items
    .reduce((sum, item) => sum + item.price * item.qty, 0);
  return subtotal * (1 + TAX_RATE);
}

function saveOrder(order) { db.save(order); }
function sendConfirmationEmail(order, total) { /* ... */ }
function logOrderProcessed(order) { /* ... */ }`
        },
        explanation: `
        الدالة الغلط فيها 5 مسؤوليات مختلفة متكدّسة فوق بعض.
        النسخة الصح فيها دالة رئيسية بتتقرأ زي فهرس كتاب.

        دلوقتي لو حصل bug في حساب الضريبة، تروح على طول على
        calculateOrderTotal — من غير ما تعمل scroll في 40 سطر مالهم علاقة.
        `,
        tips: [
          'الدالة لازم تاخد شاشة واحدة — يفضّل أقل من 20 سطر.',
          'لو محتاج تكتب "and" عشان توصف الدالة بتعمل إيه، يبقى بتعمل كتير.',
          'طلع أي بلوك محتاج تعليق لدالة مستقلة باسم واضح.',
          'مستوى تجريد واحد جوه كل دالة.'
        ]
      },

      // ============ 3. المسؤولية الواحدة ============
      {
        title: 'مبدأ المسؤولية الواحدة (SRP)',
        icon: 'fa-solid fa-bullseye',
        description: `
        الكلاس (أو الموديول أو الملف) لازم يكون له سبب واحد بس للتغيير.
        لو لقيت نفسك بتعدّل الكلاس لسببين مختلفين تماماً، يبقى بيعمل كتير.
        `,
        badExample: {
          title: 'غلط – كلاس بيعمل كل حاجة',
          code: `class User {
  constructor(public name: string, public email: string) {}

  saveToDatabase() { /* كود SQL هنا */ }

  sendWelcomeEmail() { /* كود SMTP هنا */ }

  generateReport() { /* كود PDF هنا */ }

  validateEmail() { /* regex هنا */ }
}`
        },
        goodExample: {
          title: 'صح – مسؤوليات مفصولة',
          code: `class User {
  constructor(public name: string, public email: string) {}
}

class UserRepository {
  save(user: User) { /* SQL هنا */ }
}

class EmailService {
  sendWelcomeEmail(user: User) { /* SMTP هنا */ }
}

class UserReportGenerator {
  generate(user: User) { /* PDF هنا */ }
}

class EmailValidator {
  static isValid(email: string): boolean { /* regex هنا */ }
}`
        },
        explanation: `
        في النسخة الغلط، تغيير template الإيميل بيجبرك تعدّل نفس الملف اللي فيه
        كود قاعدة البيانات. ده خطر — تعديل واحد ممكن يكسر حاجة مالها علاقة.

        في النسخة الصح، كل كلاس له وظيفة واحدة. عايز تغيّر منطق الإيميل؟
        الـ EmailService بس اللي هيتأثر. صفر خطر على طبقة الـ DB.
        `,
        tips: [
          'اسأل: "مين المسؤول عن التغيير ده؟" لو الجواب "فريق الـ DB وفريق الإيميل"، افصلهم.',
          'كلاسات صغيرة بأسماء واضحة بتكون أسهل في الاختبار.',
          'الـ SRP بينطبق على كل المستويات: الدوال، الكلاسات، الموديولات، السيرفس.'
        ]
      },

      // ============ 4. التعليقات ============
      {
        title: 'التعليقات – امتى نستخدمها؟',
        icon: 'fa-solid fa-comment-slash',
        description: `
        التعليقات مش حاجة كويسة بشكل تلقائي. التعليق اللي بيشرح "إيه" اللي الكود
        بيعمله، غالباً معناه إن الكود مش واضح كفاية.
        التعليق المفروض يشرح "ليه" — النية وراء قرار مش واضح.
        `,
        badExample: {
          title: 'غلط – تعليق بيشرح حاجة واضحة أصلاً',
          code: `// زوّد i بواحد
i++;

// اتأكد إن المستخدم بالغ
if (user.age >= 18) {
  // اسمح بالدخول
  allowAccess();
}

// لف على المستخدمين
for (const user of users) {
  // ابعت إيميل للمستخدم
  sendEmail(user);
}`
        },
        goodExample: {
          title: 'صح – الكود بيتكلم، والتعليق يشرح "ليه"',
          code: `i++;

const ADULT_AGE = 18;

if (user.age >= ADULT_AGE) {
  allowAccess();
}

users.forEach(sendEmail);

// ليه: بنتجاهل إيميلات الأحد عشان مانغرقش
// المستخدمين خلال الويكند.
if (today.getDay() !== 0) {
  sendNewsletter(user);
}`
        },
        explanation: `
        التعليقات الغلط بتكرر اللي الكود بيقوله أصلاً — بتزوّد ضوضاء، والأسوأ
        إنها هتبقى كذبة لما الكود يتغيّر.

        التعليق الصح بيشرح قاعدة business مش واضحة:
        ليه بنتجاهل الأحد. دي معلومة الكود نفسه مايقدرش يعبر عنها.
        `,
        tips: [
          'فضّل الكود الواضح على التعليق اللي بيشرح.',
          'استخدم التعليقات لـ "ليه" بس، وعمرك ما تكتبها لـ "إيه".',
          'متسيبش كود متعلّق (commented-out) — استخدم Git.',
          'امسح التعليقات القديمة على طول.'
        ]
      },

      // ============ 5. DRY ============
      {
        title: 'DRY – متكررش نفسك',
        icon: 'fa-solid fa-clone',
        description: `
        كل قطعة معرفة لازم يكون لها تمثيل واحد موثوق في الكودبيز.
        التكرار هو أصل كل الشرور لما المتطلبات تتغير.
        `,
        badExample: {
          title: 'غلط – منطق منسوخ ومكرر',
          code: `function getAdminDiscount(price: number) {
  return price - price * 0.20;
}

function getVipDiscount(price: number) {
  return price - price * 0.20;
}

function getStaffDiscount(price: number) {
  return price - price * 0.20;
}

// دلوقتي الـ business قال: غيّروا الخصم لـ 25%
// لازم تعدّل تلات دوال وتتمنى إنك مانسيتش واحدة.`
        },
        goodExample: {
          title: 'صح – مصدر واحد للحقيقة',
          code: `const DISCOUNT_RATE = 0.20;

function applyDiscount(price: number, rate = DISCOUNT_RATE) {
  return price - price * rate;
}

const getAdminDiscount = (p: number) => applyDiscount(p);
const getVipDiscount   = (p: number) => applyDiscount(p);
const getStaffDiscount = (p: number) => applyDiscount(p);

// الـ business غيّر لـ 25%؟ مكان واحد. خلصت.`
        },
        explanation: `
        التكرار مش عن الحروف — هو عن المعرفة.
        لو نفس قاعدة الـ business موجودة في 3 أماكن، يبقى عندك 3 bugs مستقبلية
        مستنية تحصل.

        الـ DRY معناه تستخرج القاعدة دي في مكان واحد الكل يثق فيه.
        `,
        tips: [
          'تلات سطور متشابهة؟ عادي. تلات دوال متشابهة؟ استخرجهم.',
          'الثوابت (Constants) للأرقام السحرية بتلغي التكرار على طول.',
          'خد بالك من "التكرار العَرَضي" — كود شبه بعضه لكن أسباب تغيّره مختلفة، مايتدمجوش.'
        ]
      },

      // ============ 6. التعامل مع الأخطاء ============
      {
        title: 'التعامل مع الأخطاء (Error Handling)',
        icon: 'fa-solid fa-shield-halved',
        description: `
        التعامل مع الأخطاء لازم يكون نضيف ومفصول عن الـ happy path.
        متخلطش try/catch مع منطق الـ business — بيبقى ضوضاء.
        `,
        badExample: {
          title: 'غلط – تعامل ملخبط مع الأخطاء',
          code: `function getUser(id) {
  try {
    const user = db.find(id);
    if (!user) return null;
    try {
      const orders = api.getOrders(user.id);
      if (!orders) return null;
      try {
        const total = orders.reduce((s, o) => s + o.total, 0);
        return { user, total };
      } catch (e) { return null; }
    } catch (e) { return null; }
  } catch (e) { return null; }
}

// اللي بينادي: "فشل عشان المستخدم مش موجود؟ ولا الـ API واقع؟"
// محدش عارف. الـ null بيخفي كل حاجة.`
        },
        goodExample: {
          title: 'صح – استثناءات + happy path نضيف',
          code: `function getUser(id) {
  const user = db.find(id);
  if (!user) throw new UserNotFoundError(id);

  const orders = api.getOrders(user.id);
  const total = calculateOrdersTotal(orders);

  return { user, total };
}

function calculateOrdersTotal(orders) {
  return orders.reduce((sum, o) => sum + o.total, 0);
}

// اللي بينادي يقدر يفرّق بين الأخطاء:
try {
  const data = getUser(42);
} catch (err) {
  if (err instanceof UserNotFoundError) showNotFound();
  else showGenericError();
}`
        },
        explanation: `
        إنك ترجّع null في كل حاجة كذبة — بتخفي سبب الفشل.
        اللي بينادي مش قادر يفرّق بين "المستخدم مش موجود"، "الـ API واقع"،
        أو "الـ network timeout".

        إنك ترمي أخطاء typed ده أصدق. الـ try/catch يعيش على الحدود،
        والـ happy path يفضل نضيف ومقروء.
        `,
        tips: [
          'ارمي أخطاء معبّرة، ماترجّعش null.',
          'استخدم كلاسات أخطاء محددة — مش Error عام في كل حاجة.',
          'عمرك ما تبلع الاستثناءات من غير ما تعمل حاجة.',
          'اتعامل مع الأخطاء على مستوى واحد، مش موزعة في كل حتة.'
        ]
      },

      // ============ 7. قاعدة الكشاف ============
      {
        title: 'قاعدة الكشاف (The Boy Scout Rule)',
        icon: 'fa-solid fa-tree',
        description: `
        "سيب المكان أنظف مما لقيته."
        كل مرة تلمس ملف، سيبه أحسن شوية من قبل.
        مش rewrite — بس تنظيفات صغيرة معبّرة.
        `,
        badExample: {
          title: 'غلط – تجاهل الفوضى الصغيرة',
          code: `// فتحت الملف عشان تصلّح bug واحد.
// لاحظت: متغيرات اسمها "d", "tmp", "x2"
// قلت: "مش شغلي. أنا بصلّح الـ bug بس."
// سيبت الفوضى زي ما هي.

function fix() {
  const d = getData();
  const tmp = d.filter(x2 => x2.active);
  return tmp;
}

// بعد 6 شهور: الملف بقى أسوأ 10 مرات.
// محدش عايز يلمسه. بقى "الملف القديم بتاع زمان".`
        },
        goodExample: {
          title: 'صح – تحسينات صغيرة وأنت هناك',
          code: `// نفس المهمة — تصلّح bug واحد.
// بس بتاخد دقيقتين زيادة:

function getActiveUsers() {
  const users = getUsers();
  return users.filter(user => user.isActive);
}

// أنت:
// 1. غيّرت "d" -> "users"
// 2. غيّرت "tmp" -> نية أوضح
// 3. غيّرت "x2" -> "user"
// 4. عملتها دالة مستقلة باسم واضح

// الوقت الزيادة الكلي: ~دقيقتين.
// التأثير على اللي جاي بعديك: مايتقدرش بفلوس.`
        },
        explanation: `
        مش محتاج إذن عشان تحسّن الكود. تغيير اسم متغير، استخراج دالة صغيرة،
        مسح بلوك كود متعلّق — كل ده بيكلف تقريباً ولا حاجة، وبيكبر مع الوقت.

        تنظيف واحد صغير لكل ملف بتلمسه = الكودبيز بتاعك بيتحسّن كل يوم،
        من غير أي "أسبوع refactoring".
        `,
        tips: [
          'غيّر اسم متغير واحد مش واضح على الأقل كل مرة تلمس ملف.',
          'امسح بلوك كود متعلّق واحد كل ملف تعدّله.',
          'استخرج دالة واحدة كل أسبوع.',
          'عمرك ما تعمل rewrite للملف كله — ده مش Boy Scout Rule، ده كابوس PR.'
        ]
      }
    ],

    quote: {
      text: `أي أهبل يقدر يكتب كود الكمبيوتر يفهمه.
             المبرمجين الشاطرين بيكتبوا كود البشر يفهموه.`,
      author: 'Martin Fowler'
    },

    keyTakeaways: [
      'الكود بيتقرأ 10 مرات أكتر مما بيتكتب — حسّنه عشان يتقرأ.',
      'دوال صغيرة، أسماء معبّرة، مسؤولية واحدة.',
      'التعليقات تشرح "ليه" مش "إيه" — الكود بيشرح الـ "إيه".',
      'الـ DRY عن المعرفة، مش عن الحروف.',
      'ارمي أخطاء معبّرة بدل ما ترجّع null.',
      'قاعدة الكشاف: سيب كل ملف أنظف شوية من اللي لقيته.',
      'الكود النظيف مسؤولية مهنية — مش رفاهية.'
    ],

    references: [
      'Clean Code: A Handbook of Agile Software Craftsmanship — Robert C. Martin',
      'The Pragmatic Programmer — Andrew Hunt & David Thomas',
      'Refactoring: Improving the Design of Existing Code — Martin Fowler',
      'The Clean Coder — Robert C. Martin'
    ],

    hashtags: [
      'CleanCode',
      'SoftwareEngineering',
      'Refactoring',
      'BestPractices',
      'UncleBob',
      'Angular',
      'TypeScript'
    ]
  };
}