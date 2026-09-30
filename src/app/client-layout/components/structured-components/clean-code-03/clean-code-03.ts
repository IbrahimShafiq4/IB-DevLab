import { Component } from '@angular/core';
import {
  ICleanCodeContent,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-clean-code-03',
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
export class CleanCode03 {

  projectName: string = 'أسامي الكلاسات والدوال – النصف التاني من الحكاية';

  projectDescription: string = `
  بعد ما خلّصنا أساسيات الأسماء، هنكمّل الرحلة مع 6 قواعد أعمق
  لاختيار أسماء الكلاسات والدوال والمتغيرات.

  القواعد:
  - الكلاس اسم، والدالة فعل (Nouns & Verbs)
  - متكنش ظريف (Don't Be Cute)
  - كلمة واحدة لكل مفهوم (Pick One Word per Concept)
  - متستخدمش نفس الكلمة لمعنيين (Don't Pun)
  - استخدم مصطلحات الدومين (Domain-Specific Names)
  - ضيف سياق معبّر (Add Meaningful Context)

  مستوحى من كتاب "Clean Code" — الفصل الثاني (تكملة).
  `;

  projectDate: string = 'آخر تحديث: 30 سبتمبر 2026';
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
    في الجزء الأول من Meaningful Names اتكلمنا عن أساسيات الأسماء:
    إنها توضّح النية، متضلّلش، وتكون قابلة للنطق والبحث.

    في الجزء ده، هنكمّل الرحلة مع 6 قواعد أعمق بتخص
    أسماء الكلاسات والدوال والمتغيرات في سياق المشروع.

    كل قاعدة مع مثال حقيقي من مشروع قديم، والهدف واحد:
    أي حد يفتح الكود، يفهم من أول نظرة.
    `,

    story: `
    كملت فصل Meaningful Names، ولقيت نفسي بطبّق باقي القواعد
    على مشروع قديم ليا في دماغي.

    كان عندي class اسمها ProjectManager. فضلت أسأل نفسي:
    هو بيدير إيه بالظبط؟ لما فتحته، لقيت كل اللي بيعمله CRUD على جدول projects.
    مش manager بأي معنى، هو فعلياً ProjectRepository.
    وده أول حاجة فهمتها: الـ classes لازم اسمها يكون noun بيقول هي إيه، مش فعل.

    والعكس مع methods. لازم اسمها يكون فعل بيقول بتعمل إيه.
    لقيت في الكود method اسمها مجرد Message، ومش واضح من الاسم
    هي بتبعت الرسالة ولا بتمسحها.
    غيرتها لـ SendMessage و DeleteMessage واللبس اتحل.

    قريت فيها قاعدة لطيفة اسمها Don't Be Cute:
    متستخدمش اسم ظريف أو نكتة داخلية بدل الاسم الواضح.
    مثال الكتاب نفسه: method اسمها HolyHandGrenade بدل DeleteItems.
    ممكن تضحكك إنت بس، بس أي حد تاني هيتلخبط.

    أكتر حاجة لفتت نظري من الفصل ده كانت Pick One Word per Concept.
    لقيت تلات كلاسات في نفس المشروع، كل واحد بيستخدم كلمة مختلفة لنفس المعنى:

    UserManager.FetchUser
    ProjectController.RetrieveProject
    TaskService.GetTask

    تلات كلمات (Fetch، Retrieve، Get) لنفس المفهوم.
    وحّدت التلاتة لـ Get في كل مكان، وبقى أي حد جديد يفتح المشروع
    يعرف الـ convention من أول method بيشوفها.

    وفيه قاعدة عكسية اسمها Don't Pun:
    متستخدمش نفس الكلمة لمعنيين مختلفين.
    Add لإضافة عنصر في list، و Add تانية بتجمع رقمين؟
    أي حد شايف الاسم هيفترض سلوك معين بناء على العادة، وده بيسبب لبس.

    وحاجة مهمة لفتت نظري:
    لو فيه مفهوم خاص بمجال المشروع نفسه، متترجموش لحاجة عامة.
    لو في مفهوم اسمه الواجب أو الاختبار في دومين المشروع،
    سميه Assignment أو Exam مش Task أو Item.
    كده أي حد جديد يدخل الفريق هيلاقي نفس المصطلحات في الاجتماعات وفي الكود.

    وآخر حاجة كانت Add Meaningful Context.
    لقيت في الكتاب مثال سبع متغيرات منفصلة:
    firstName، lastName، street، houseNumber، city، state، zipcode.
    لو شفت state لوحدها في نص method طويلة، ممكن تلخبط هي حالة ولا ولاية.
    الحل إنك تجمعهم في class اسمه Address،
    وبقى address.State واضح فوراً إنه ولاية.

    كده خلصت فصل كامل مجرد أسامي.
    واللي لاحظته إن كل قاعدة فيهم بتخدم هدف واحد:
    أي حد تاني يفتح الكود يفهم سريع من غير مجهود.
    `,

    principles: [
      // ============ 1. Nouns & Verbs ============
      {
        title: '١. الكلاس اسم، والدالة فعل (Nouns & Verbs)',
        icon: 'fa-solid fa-cubes-stacked',
        description: `
        الكلاس بيمثّل "حاجة" — فهو لازم يكون noun.
        الدالة بتعمل "حاجة" — فلازم تكون فعل.

        لو لقيت كلاس اسمه فعل، أو دالة اسمها noun،
        فيه حاجة غلط في تصميمك.
        `,
        badExample: {
          title: 'غلط – كلاس بفعل ودالة بـ noun',
          code: `// كلاس اسمه Manager لكنه فعلياً Repository
class ProjectManager {
  createProject() { /* CRUD */ }
  updateProject() { /* CRUD */ }
  deleteProject() { /* CRUD */ }
  findProjectById(id: number) { /* CRUD */ }
}

// دالة اسمها Message — بتبعت ولا بتمسح؟
function Message(user: User, text: string) {
  // مفيش طريقة تعرف من الاسم
}

// دالة بـ noun — مش واضح بتعمل إيه
function OrderValidation(order: Order) {
  // validate? cancel? process?
}`
        },
        goodExample: {
          title: 'صح – الكلاس noun والدالة فعل',
          code: `// الكلاس بيقول هو إيه بالظبط
class ProjectRepository {
  create(project: Project) { /* CRUD */ }
  update(project: Project) { /* CRUD */ }
  delete(id: number) { /* CRUD */ }
  findById(id: number) { /* CRUD */ }
}

// الدالة بتبدأ بفعل — تعرف بتعمل إيه على طول
function sendMessage(user: User, text: string) { }

function deleteMessage(messageId: number) { }

function validateOrder(order: Order) { }`
        },
        explanation: `
        في المثال الغلط:
        - "ProjectManager" — manager إيه بالظبط؟ بيدير المشروع إزاي؟
          لما تفتحه تلاقي كل اللي بيعمله CRUD، يبقى هو Repository مش Manager.

        - "Message" — بتبعت؟ بتمسح؟ بتعدّل؟ مش معروف.

        - "OrderValidation" — دي دالة ولا كلاس؟ لو دالة، بتعمل إيه بالظبط؟

        في المثال الصح:
        - "ProjectRepository" — اسم الحاجة (noun) بيوصفها.
        - "sendMessage" و "deleteMessage" — الفعل واضح.
        - "validateOrder" — فعل بيقول اللي بتعمله.

        القاعدة: الكلاس = noun، الدالة = verb،
        ومتستخدمش صيغة شبه noun في الدالة (زي OrderValidation).
        `,
        tips: [
          'الكلاس: User, Order, ProjectRepository, EmailService — كله nouns.',
          'الدالة: sendMessage, validateOrder, calculateTotal — كله أفعال.',
          'المتغير: userId, activeUsers, totalPrice — nouns.',
          'لو لقيت كلاس اسمه فعل أو دالة اسمها noun، ده أول signal إن فيه مشكلة تصميم.'
        ]
      },

      // ============ 2. Don't Be Cute ============
      {
        title: '٢. متكنش ظريف (Don\'t Be Cute)',
        icon: 'fa-solid fa-face-smile-wink',
        description: `
        متستخدمش اسم ظريف أو نكتة داخلية بدل الاسم الواضح.
        الاسم الظريف بيضحكك إنت، بس بيوهّي أي حد تاني.
        `,
        badExample: {
          title: 'غلط – أسماء ظريفة أو داخلية',
          code: `// اسم ظريف لـ DeleteItems
function holyHandGrenade(items: Item[]) {
  return items.filter(i => !i.deleted);
}

// اسم مبني على مزحة داخلية في الفريق
class TheThanosSnap {
  // "بيمسح نص الداتا" — إشارة لفيلم
  deleteHalf() { }
}

// اسم بيقلل من قيمة الكود
function magicHappens(data: any) { }

// اسم صار اسم براند — مش بيقول هو إيه
class FruitSalad {
  constructor(private users: User[], private orders: Order[]) { }
}`
        },
        goodExample: {
          title: 'صح – اسم واضح مفيش فيه سخرية',
          code: `// اسم يقول حقيقة الوظيفة
function deleteItems(items: Item[]) {
  return items.filter(item => !item.deleted);
}

// اسم بيقول إيه اللي بيحصل
class BatchDeleter {
  deleteHalf(records: Record[]) { }
}

// اسم محايد وواضح
function transformData(data: any) { }

// اسم بيوصف الدور الحقيقي
class UserOrderAggregator {
  constructor(private users: User[], private orders: Order[]) { }
}`
        },
        explanation: `
        الاسم الظريف ليه مشكلتين:

        1. **مش واضح للمسؤول اللي بعده** — "holyHandGrenade" إيه علاقتها بـ DeleteItems؟
           أي حد جديد محتاج يفتح الكود عشان يفهم.

        2. **بيبقى مرتبط بسياق مؤقت** — النكتة بتموت، الاسم بيفضل.
           بعد سنتين، محدش فاكر النكتة، والاسم بيفضل موجود بيأذي.

        3. **ممكن يكون مسيء** — نكت داخلية من مكان تاني، أو إشارة لفئة معينة.
           الحاجات دي مبتحصلش في كود محترف.

        القاعدة: خليك واضح، مش ظريف.
        أول حاجة في دماغك عن الاسم، مش أحلى حاجة فيها.
        `,
        tips: [
          'لو الاسم بيضحكك، فكّر: هل هيضحك اللي جاي بعديك؟ لو لأ، غيّره.',
          'الأسامي الرسمية أكتر من الفكاهية في أي كود احترافي.',
          'لما تكتب اسم، اسأل نفسك: "لو نسيت المشروع 6 شهور، هفهم ده؟"',
          'النكت الداخلية مكانها Slack، مش الكود.'
        ]
      },

      // ============ 3. Pick One Word per Concept ============
      {
        title: '٣. كلمة واحدة لكل مفهوم (Pick One Word per Concept)',
        icon: 'fa-solid fa-arrows-to-circle',
        description: `
        اختار كلمة واحدة لكل مفهوم، واستخدمها في المشروع كله.
        Get أو Fetch أو Retrieve — واحدة بس.
        Create أو Add أو Insert — واحدة بس.
        `,
        badExample: {
          title: 'غلط – كلمات مختلفة لنفس المفهوم',
          code: `// في UserManager
class UserManager {
  fetchUser(id: number): User { /* ... */ }
}

// في ProjectController
class ProjectController {
  retrieveProject(id: number): Project { /* ... */ }
}

// في TaskService
class TaskService {
  getTask(id: number): Task { /* ... */ }
}

// في OrderRepository
class OrderRepository {
  findOrder(id: number): Order { /* ... */ }
}

// في PaymentService
class PaymentService {
  loadPayment(id: number): Payment { /* ... */ }
}

// 5 كلمات مختلفة لنفس المفهوم!
// اللي داخل جديد هيفضل يسأل: ليه كل ملف مختلف؟`
        },
        goodExample: {
          title: 'صح – كلمة واحدة في كل المشروع',
          code: `// كل الكلاسات بتستخدم get
class UserManager {
  getUser(id: number): User { /* ... */ }
}

class ProjectController {
  getProject(id: number): Project { /* ... */ }
}

class TaskService {
  getTask(id: number): Task { /* ... */ }
}

class OrderRepository {
  getOrder(id: number): Order { /* ... */ }
}

class PaymentService {
  getPayment(id: number): Payment { /* ... */ }
}

// اللي داخل جديد يعرف الـ convention من أول method
// ويفتكرها على طول: كل حاجة بتبدأ بـ get`
        },
        explanation: `
        لما تستخدم 5 كلمات لنفس المفهوم، اللي بيقرا الكود بيسأل نفسه:
        - ليه UserManager بتستخدم fetch والباقي get؟
        - هل فيه فرق حقيقي بين retrieve و get؟
        - ولا أنا بس اللي مش فاهم؟

        الإجابة: لا، مفيش فرق. دي بس فوضى ناتجة عن عدم الالتزام بـ convention.

        الفايدة العملية:
        - الـ IDE يقدر يعمل autocomplete أحسن.
        - Ctrl+F لـ "getUser" يلاقي كل حاجة.
        - اللي جاي بعديك مش محتاج يتعلم 5 conventions.

        **استثناء**: لو الكلمات فعلاً بتوصف معاني مختلفة، سيبها.
        مثلاً: insert (بتضيف في الوسط)، append (بتضيف في الآخر)،
        دي معاني مختلفة، عادي تبقى كلمات مختلفة.

        بس لو كلهم معناهم "تعال بالحاجة دي" — استخدم كلمة واحدة.
        `,
        tips: [
          'اختار كلمة لكل عملية أساسية: get, set, create, delete, update.',
          'خليها convention مكتوب في الـ team guidelines.',
          'لو محتاج تحدد معنى مختلف، استخدم كلمة تانية بمعنى مختلف فعلاً.',
          'الـ code review بيكشف الاختلافات دي بسرعة — use it.'
        ]
      },

      // ============ 4. Don't Pun ============
      {
        title: '٤. متستخدمش نفس الكلمة لمعنيين (Don\'t Pun)',
        icon: 'fa-solid fa-shuffle',
        description: `
        العكس من Pick One Word: لو عندك معنيين مختلفين،
        استخدم كلمتين مختلفتين. متستخدمش نفس الكلمة للاتنين.
        `,
        badExample: {
          title: 'غلط – كلمة واحدة بمعنيين',
          code: `// "add" هنا بمعنى: ضيف عنصر في list
class Cart {
  add(item: Item) {
    this.items.push(item);
  }
}

// "add" هنا بمعنى تاني: اجمع رقمين
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}

// "add" هنا بمعنى تالت: أضف مستخدم للداتابيز
class UserRepository {
  add(user: User) {
    db.insert('users', user);
  }
}

// أي حد شايف "add" هيفترض السلوك من العادة، وممكن يتلخبط`
        },
        goodExample: {
          title: 'صح – كل معنى ليه كلمته',
          code: `// ضيف في الـ list
class Cart {
  push(item: Item) {
    this.items.push(item);
  }
}

// اجمع رقمين
class Calculator {
  sum(a: number, b: number): number {
    return a + b;
  }
}

// اعمل insert في الداتابيز
class UserRepository {
  insert(user: User) {
    db.insert('users', user);
  }
}

// دلوقتي كل اسم بيوصف المعنى بدقة`
        },
        explanation: `
        "Add" تعتبر كلمة عامة، وممكن تتستخدم في 5 سياقات مختلفة.
        لما تستخدمها في كل مكان، بتخلي القارئ يفترض حاجة بناء على تجربته السابقة.

        مثلاً: أنا شفت "add" في Cart بتضيف عنصر للـ list.
        لما أشوف "add" في Calculator، هفتكر إنها بتضيف عنصر في حاجة،
        مش إنها بتجمع رقمين.

        الحل: كل عملية يكون لها الاسم الدقيق بتاعها:
        - push — بتضيف في الـ array/stack
        - sum — بتجمع أرقام
        - insert — بتضيف في داتابيز
        - append — بتضيف في الآخر
        - concat — بتربط strings
        - merge — بتدمج collections

        الاسم الدقيق بيوفر على القارئ مجهود التخمين.
        `,
        tips: [
          'لو لقيت كلمة بتتكرر في سياقات مختلفة، شوف كل واحد ليه اسم أدق.',
          'insert / append / push / add / concat — كلهم معانٍ مختلفة.',
          'delete / remove / erase / drop — كل واحد ليه استخدامه.',
          'خلي الاسم يحمل معنى واحد بس، مفيش استثناء.'
        ]
      },

      // ============ 5. Domain-Specific Names ============
      {
        title: '٥. استخدم مصطلحات الدومين (Domain-Specific Names)',
        icon: 'fa-solid fa-landmark',
        description: `
        لو المفهوم موجود في الـ domain بتاع المشروع، استخدم اسمه الحقيقي.
        متترجموش لحاجة عامة عشان "تبقى مفهومة" — ده بيوهّي الناس.
        `,
        badExample: {
          title: 'غلط – ترجمة الدومين لحاجات عامة',
          code: `// في مشروع تعليمي، الفريق بيتكلم عن "Assignment" و "Exam"
// لكن الكود بيقول:

class Item {
  // المفروض Assignment
}

class Task {
  // المفروض Exam
}

class Entry {
  // المفروض StudentSubmission
}

class Record {
  // المفروض Grade
}

// المشكلة: الفريق بيقول "assignment" في الاجتماع،
// والكود بيقول "item".
// اللي داخل جديد بيلخبط — دول نفس الحاجة ولا لأ؟`
        },
        goodExample: {
          title: 'صح – مصطلحات الدومين في الكود',
          code: `// في مشروع تعليمي، الكود بيردّد نفس اللغة بتاعة الفريق

class Assignment {
  // واجب — بيطابق مصطلح الفريق
}

class Exam {
  // اختبار — بيطابق مصطلح الفريق
}

class StudentSubmission {
  // تسليم الطالب — دقيق
}

class Grade {
  // الدرجة — دقيق
}

// دلوقتي:
// - في الاجتماع بيقولوا Assignment، في الكود Assignment.
// - اللي داخل جديد بيلاقي نفس المصطلحات في كل مكان.
// - الـ code review سهل — الكل بيتكلم بنفس اللغة.`
        },
        explanation: `
        لو الـ domain بتاعك تعليمي، في مصطلحات محددة:
        Assignment (واجب)، Exam (اختبار)، Grade (درجة)، Student (طالب).

        لو استخدمت "Item" أو "Task" — دي مصطلحات عامة جداً،
        ومش بتوصل المعنى الحقيقي.

        الفايدة:
        1. **اللي داخل جديد يتعلم الدومين بسرعة** — نفس المصطلحات في كل مكان.
        2. **الاجتماعات والكود بنفس اللغة** — مفيش ترجمة ذهنية.
        3. **الـ business logic أوضح** — مفيش فرصة للّبس.

        القاعدة: لو مصطلح الـ domain مهم، استخدمه في الكود بنفس الاسم.

        **تحذير**: ده مش عن "خلط لغة طبيعية بكود"،
        ده عن تسمية الـ classes والمتغيرات بالأسماء الصح بتاعة البيزنس.
        `,
        tips: [
          'اجلس مع فريق البيزنس واسمع المصطلحات اللي بيستخدموها.',
          'خلي قائمة "Ubiquitous Language" في الـ docs بتاع المشروع.',
          'لو الفريق بيقول "course" و "module"، الكود يقول "Course" و "Module".',
          'لو المصطلح مش موجود في الـ domain، استخدم مصطلح عام عادي.'
        ]
      },

      // ============ 6. Add Meaningful Context ============
      {
        title: '٦. ضيف سياق معبّر (Add Meaningful Context)',
        icon: 'fa-solid fa-layer-group',
        description: `
        شوية أسماء لوحدها مبتحملش معنى. لو ممكن تلخبط،
        جمّعهم في كلاس واحد بيدي سياق واضح.
        `,
        badExample: {
          title: 'غلط – متغيرات منفصلة بلا سياق',
          code: `// 7 متغيرات لوحدها — state دي حالة ولا ولاية؟
class User {
  firstName: string;
  lastName: string;
  street: string;
  houseNumber: string;
  city: string;
  state: string;
  zipCode: string;
}

function sendPackage(
  firstName: string,
  lastName: string,
  street: string,
  houseNumber: string,
  city: string,
  state: string,
  zipCode: string
) {
  // state دي إيه بالظبط؟ ولاية ولا حالة؟
  console.log(state);
}`
        },
        goodExample: {
          title: 'صح – سياق معبّر داخل كلاس',
          code: `// دلوقتي كل حاجة ليها سياق
class Address {
  street: string;
  houseNumber: string;
  city: string;
  state: string;
  zipCode: string;
}

class Person {
  firstName: string;
  lastName: string;
  address: Address;
}

function sendPackage(person: Person) {
  // واضح على طول إنها ولاية
  console.log(person.address.state);

  // ولو دوّرت في الكود على "state" هتلاقيها دايماً
  // مرتبطة بـ address أو person.address
}`
        },
        explanation: `
        المتغير "state" لوحده مش معبر.
        - ممكن يكون حالة (state machine)
        - ممكن يكون ولاية (US state)
        - ممكن يكون حالة انتظار (pending state)

        لما تجمّعهم في كلاس "Address":
        - address.state بقت واضحة على طول.
        - الـ function بتاخد parameter واحد بدل 7.
        - المسؤولية اتحددت في كلاس واحد.

        نفس الحاجة تنطبق على المتغيرات المحلية:
        - prefix “addr” لـ addrStreet, addrCity... بيحلّ المشكلة.
        - أو تجمّع في object واحد واستخدمه.

        القاعدة: لو 3-4 متغيرات متعلقين ببعض، جمّعهم في كلاس/object.
        `,
        tips: [
          'لو 3 متغيرات أو أكتر بيبدأوا بنفس الـ prefix، جمّعهم في كلاس.',
          'الـ classes قوية في إنها بتوفّر سياق طبيعي.',
          'لو محتاج تعمل "package" لـ group من الـ params، اعمل class.',
          'الـ refactoring ده بيسهّل الكتابة والقراءة والاختبار — كله.'
        ]
      }
    ],

    quote: {
      text: `الأسامي هي أرخص طريقة لتحسين الكود.
             مش محتاجة compile، مش محتاجة deploy،
             ومش بتكسر أي حاجة — بس الفايدة بتتراكم.`,
      author: 'فصل Meaningful Names — Clean Code'
    },

    keyTakeaways: [
      'الكلاس لازم يكون noun، الدالة لازم تكون فعل.',
      'متستخدمش اسم ظريف — خليك واضح مش مضحك.',
      'اختار كلمة واحدة لكل مفهوم، واستخدمها في كل المشروع.',
      'لو عندك معنيين، استخدم كلمتين — متستخدمش نفس الاسم للاتنين.',
      'استخدم مصطلحات الدومين زي ما الفريق بيستخدمها في الاجتماعات.',
      'لو الأسماء مبتحملش معنى لوحدها، جمّعها في كلاس يعطيها سياق.',
      'الهدف النهائي: أي حد يفتح الكود، يفهم من أول نظرة.'
    ],

    references: [
      'Clean Code — الفصل الثاني: Meaningful Names (تكملة) — Robert C. Martin',
      'Domain-Driven Design — Eric Evans (مصطلح Ubiquitous Language)',
      'Refactoring — الفصل السادس: Composing Methods — Martin Fowler'
    ],

    hashtags: [
      'CleanCode',
      'MeaningfulNames',
      'SoftwareEngineering',
      'Refactoring',
      'BestPractices',
      'UncleBob',
      'DomainDrivenDesign',
      'DotNet',
      'Angular'
    ]
  };
}