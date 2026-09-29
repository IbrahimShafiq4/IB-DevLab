import { Component } from '@angular/core';
import {
  ICleanCodeContent,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-clean-code-02',
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
export class CleanCode02 {

  projectName: string = 'الأسماء المعبّرة – أول خطوة نحو كود نظيف';

  projectDescription: string = `
  رحلة عملية مع فصل "Meaningful Names" من كتاب Clean Code لـ Uncle Bob.

  هنمشي خطوة بخطوة على 5 قواعد أساسية لاختيار الأسماء،
  مع أمثلة حقيقية من pull request حقيقي.

  القواعد:
  - الاسم لازم يقول النية (Intent-Revealing Names)
  - متستخدمش أسماء موهمة (Avoid Disinformation)
  - اعمل فرق معبّر بين الأسماء (Meaningful Distinctions)
  - استخدم أسماء قابلة للنطق والبحث (Pronounceable & Searchable)
  - متستخدمش أرقام مجردة (Replace Magic Numbers)

  مستوحى من كتاب "Clean Code" — الفصل الثاني.
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
    الأسماء هي أكتر حاجة بتظهر في أي كود.
    احنا بنسمّي variables، functions، classes، modules، arguments، packages.
    لو الأسماء وحشة، الكود بيبقى صعب حتى لو المنطق نفسه سليم مية بالمية.

    في الدليل ده، هنمشي على 5 قواعد أساسية لاختيار الأسماء،
    كل واحدة مع مثال "قبل وبعد" من كود حقيقي.
    `,

    story: `
    كنت براجع pull request لزميل، ولقيت method اسمها GetThem
    وبترجع List<int[]>.

    قعدت أقرا جوه الميثود عشان أفهم هي بترجع إيه بالظبط.
    لقيت جوه loop بيفحص x[0] == 4 وبيضيف النتيجة لـ list1.
    مفهمتش حاجة من غير ما أفتح الملف اللي نادى على الميثود دي
    وأشوف بيستخدمها إزاي.

    ده بالظبط اللي فصل Meaningful Names في كتاب Clean Code بيتكلم عنه.
    الأسامي هي أكتر حاجة بتظهر في أي كود، فلو الأسامي وحشة، الكود بيبقى صعب
    حتى لو المنطق نفسه سليم مية بالمية.

    أول حاجة اتعلمتها: الاسم لازم يقول ليه المتغير موجود وبيعمل إيه،
    من غير ما تحتاج comment.

    بدل ما تكتب:
    int d; // elapsed time in days

    تكتب:
    int elapsedTimeInDays;

    رجعت لميثود GetThem بنفس المنطق ده.
    المشروع كان شبيه بلعبة فيها لوحة وخلايا عليها علامات، فبقت كده:

    - GetFlaggedCells() بترجع List<Cell>
    - gameBoard بدل list غامض
    - cell.IsFlagged بدل x[0] == 4
    - flaggedCells بدل list1

    نفس الأداء بالظبط، لكن أي حد يفتح الميثود دي دلوقتي هيعرف
    بترجع إيه من غير ما يقرا سطر واحد جوه.

    تاني حاجة عجبتني: متستخدمش اسم يوهم بحاجة غلط.
    زي إنك تسمي متغير accountList وهو أصلاً مش List،
    أو تعمل UserService و UserServices في نفس المشروع وتسيب زميلك يلخبط بينهم.

    وحاجة تالتة كنت بعملها من غير ما ألاحظ:
    تفرق بين متغيرين بس عشان الكومبايلر يقبل الكود، زي a1 و a2.
    تلاقيها أوضح بكتير لما تبقى source و destination.

    وآخر حاجة، وده اللي غيّر طريقة كتابتي للـ conditions:
    متستخدمش أرقام مجردة زي status == 4.
    لو عايز تعمل search على الحالة دي بعدين، هتدور على رقم 4 في كل المشروع
    وتلاقيه في أماكن تانية مالهاش علاقة.
    لما تعمله const أو enum، بقى الـ search دقيق ومفيش لبس.

    خمس قواعد بس، وكلهم بيصبوا في حاجة واحدة:
    الاسم نفسه لازم يشرح الغرض، من غير ما تحتاج توثيق زيادة
    أو تفتح خمس ملفات عشان تفهم سطر واحد.
    `,

    principles: [
      // ============ 1. Reveal Intent ============
      {
        title: '١. الاسم لازم يقول النية (Reveal Intent)',
        icon: 'fa-solid fa-bullseye',
        description: `
        الاسم لازم يجاوب على 3 أسئلة من غير ما تحتاج تفتح كود تاني:
        - المتغير ده موجود ليه؟
        - بيعمل إيه؟
        - بيتستخدم إزاي؟

        لو محتاج comment يشرح الاسم، يبقى الاسم نفسه غلط.
        `,
        badExample: {
          title: 'غلط – الاسم مالوش معنى',
          code: `// في ملف AccountService

const d = 0; // elapsed time in days
const list1 = [];
const x = 4;

function GetThem(): List<int[]> {
  const result: List<int[]> = [];
  for (const item of gameBoard) {
    if (item[0] === 4) {
      result.push(item);
    }
  }
  return result;
}`
        },
        goodExample: {
          title: 'صح – الاسم نفسه بيشرح الغرض',
          code: `// في ملف GameBoard

const elapsedTimeInDays = 0;
const flaggedCells: Cell[] = [];
const FLAGGED = 4;

function getFlaggedCells(): Cell[] {
  return gameBoard.filter(cell => cell.isFlagged);
}`
        },
        explanation: `
        في المثال الغلط، لازم تقرا الكود كله عشان تفهم:
        - "d" يعني إيه؟
        - "list1" جواها إيه؟
        - ليه بيفحص 4؟

        في المثال الصح، كل اسم لوحده بيقولك قصته:
        - "elapsedTimeInDays" واضحة من أول نظرة
        - "flaggedCells" تعرف إنها الخلايا المعلّمة
        - "isFlagged" تعرف إنها flag على الـ cell

        النتيجة: صفر تعليقات، وصفر حاجة إنك تفتح ملفات تانية.
        `,
        tips: [
          'لو محتاج comment يشرح اسم، غيّر الاسم بدل ما تكتب comment.',
          'اسم المتغير لازم يوصف "إيه ده" مش "بيتعامل معاه إزاي".',
          'الدالة لازم تبدأ بفعل: get, set, save, calculate, validate.',
          'الكلاس لازم يبقى اسم: User, Order, Account, Customer.'
        ]
      },

      // ============ 2. Avoid Disinformation ============
      {
        title: '٢. متستخدمش أسماء موهمة (Avoid Disinformation)',
        icon: 'fa-solid fa-triangle-exclamation',
        description: `
        الاسم لازم يوصف الحقيقة، مش يضلّل القارئ.
        لو الاسم بيقول حاجة والكود بيعمل حاجة تانية، ده أخطر من الاسم الوحش.
        `,
        badExample: {
          title: 'غلط – أسماء بتضلّل',
          code: `// اسم بيقول List لكن مش List
const accountList = { owner: 'Ali', balance: 500 };

// اسمين شبه بعض جداً — مين الفرق؟
class UserService { }
class UserServices { }

// اسم بيوهم بشيء مش موجود
const customerData = 42; // رقم مش بيانات

// اسم بيقول إنه collection لكن هو مش collection
const orderItems = 'item-001';`
        },
        goodExample: {
          title: 'صح – أسماء بتوصف الحقيقة',
          code: `// لو مش List، متسميهاش List
const account = { owner: 'Ali', balance: 500 };

// لو الاتنين مختلفين فعلاً، خلي الفرق واضح
class UserAuthenticator { }
class UserProfileManager { }

// سمّي الحاجة على حقيقتها
const customerId = 42;

// لو مش collection، متسميهاش items
const orderItemId = 'item-001';`
        },
        explanation: `
        أشهر غلطة: تسمي حاجة بـ List وهي مش List.
        أي حد هيقرا الكود هيفتكر إنها array وبعدين يتفاجئ إنها object.
        ده بيوّلد bugs وارتباك.

        تاني غلطة: أسماء شبه بعضها جداً (UserService / UserServices).
        الفرق بحرف واحد صعب تلمحه في code review أو لما بتدوّر (Ctrl+F).

        القاعدة: الاسم لازم يوصف الحقيقة، ويوصفها بشكل مش ممكن يتلخبط.
        `,
        tips: [
          'لو مش List، متسميهاش List. سميها بأسمها الحقيقي.',
          'متستخدمش أسماء شبه بعضها بفرق حرف واحد في نفس المشروع.',
          'متستخدمش أسماء ليها معنى خاص في اللغة (مثلاً Account هو اسم مش فعل).',
          'خليك دقيق: عدد صح؟ Id؟ Index؟ كل واحدة ليها اسم مختلف.'
        ]
      },

      // ============ 3. Meaningful Distinctions ============
      {
        title: '٣. فروق معبّرة بين الأسماء (Meaningful Distinctions)',
        icon: 'fa-solid fa-code-compare',
        description: `
        لو الكومبايلر محتاج أسماء مختلفة، خلّي الفرق بينهم معبّر.
        متستخدمش أسماء زي a1 و a2 أو data و data2 أو ProductInfo و ProductData.
        `,
        badExample: {
          title: 'غلط – فروق بلا معنى',
          code: `// فرق بس عشان الكومبايلر يقبل
function copyChars(source: string, destination: string) { }

// الأسماء دي بتقولك حاجة؟ لأ.
const a1 = getUserInput();
const a2 = getSystemDefault();

// "Info" و "Data" هنا معناهم إيه؟
class ProductInfo { }
class ProductData { }

// "the" و "a" — مالهومش أي دلالة
function calculateTotal(theList: number[], aList: number[]) { }`
        },
        goodExample: {
          title: 'صح – فروق ليها معنى',
          code: `// كل اسم بيوصف دوره
function copyChars(source: string, destination: string) { }

// اسم كل واحد بيقول مصدره
const userProvidedValue = getUserInput();
const systemDefaultValue = getSystemDefault();

// سمّيهم حسب استخدامهم الحقيقي
class ProductMetadata { }        // وصف المنتج
class ProductMeasurements { }    // قياسات المنتج

// سمّي الحاجة على أساس وظيفتها
function calculateTotal(activeItems: number[], archivedItems: number[]) { }`
        },
        explanation: `
        الفرق بين a1 و a2 حرف واحد — الكومبايلر يقدر يفرق بينهم،
        بس أنت (واللي جاي بعديك) مش هتعرف تقرأ الكود.

        في المثال الصح:
        - "source" و "destination" — كل واحد ليه دور مختلف وواضح
        - "userProvided" و "systemDefault" — كل واحد بيقول جاي منين
        - "ProductMetadata" و "ProductMeasurements" — مختلفين فعلاً

        القاعدة: لو هتفرّق بين أسماء، خلي الفرق معبّر مش حرفين زيادة.
        `,
        tips: [
          'متستخدمش أرقام كفرق (a1, a2, item3, value4) — دي بلا معنى.',
          'متستخدمش noise words زي Info, Data, Object, Manager, Processor من غير داعي.',
          'لو محتاج اسمين، فكّر: إيه الفرق الحقيقي بينهم؟ والفرق ده يبقى الاسم.',
          'استخدم prefixes معبّرة: source/destination، input/output، userProvided/systemDefault.'
        ]
      },

      // ============ 4. Pronounceable & Searchable ============
      {
        title: '٤. أسماء تُنطق وتُبحث (Pronounceable & Searchable)',
        icon: 'fa-solid fa-magnifying-glass',
        description: `
        الاسم لازم تقدر تقوله في اجتماع، وتقدر تلاقيه بـ Ctrl+F.
        لو مش قادر تنطقه، يبقى مش هتقدر تناقشه مع فريقك.
        `,
        badExample: {
          title: 'غلط – أسماء مش بتنطق ومش بتلاقيها',
          code: `// مش هتعرف تنطق دي في اجتماع
class DtaRcrd102 {
  private genymdhms: Date;
  private modymdhms: Date;
  private pszqint: string = '102';
}

// رقم مجرد — لو بحثت عن "7" هتلاقي آلاف النتايج
if (user.status === 7) {
  sendVIPWelcome();
}

// اسم بحرف واحد — بتلاقي مليون حاجة ليها علاقة
const n = getActiveUserCount();`
        },
        goodExample: {
          title: 'صح – أسماء تُنطق وتُبحث',
          code: `// أسماء تنطقها عادي في اجتماع
class Customer {
  private generationTimestamp: Date;
  private modificationTimestamp: Date;
  private recordId: string = '102';
}

// ثابت — البحث عنه دقيق ومفيش لبس
const VIP_STATUS = 7;

if (user.status === VIP_STATUS) {
  sendVIPWelcome();
}

// اسم واضح — Ctrl+F هتلاقي كل مكان بيتستخدم فيه
const activeUserCount = getActiveUserCount();`
        },
        explanation: `
        اسأل نفسك: لو لقيت الاسم ده في اجتماع، تقدر تقوله؟
        "genymdhms" — مش هتعرف تقولها.
        "generationTimestamp" — عادي جداً.

        وفيه فايدة تانية: البحث (Ctrl+F).
        لو كتبت رقم 7 مباشرة، وعايز تلاقي كل الأماكن اللي بتفحص VIP،
        هتلاقي مئات النتايج مالهاش علاقة.
        لكن "VIP_STATUS" — النتيجة واحدة ومحددة.

        ده اللي بيخلي الـ refactoring سهل: تحب تغيّر الـ VIP status من 7 لـ 9؟
        تعدّل مكان واحد، والباقي بيتغير لوحده.
        `,
        tips: [
          'اسأل: أقدر أقول الاسم ده في اجتماع؟ لو لأ، غيّره.',
          'خلي كل حاجة قابلة للبحث — الأرقام المجردة والحروف الواحدة بيتوهوا.',
          'لو محتاج prefix، خليه معبّر ومقروء.',
          'الأسماء الطويلة الواضحة أفضل مليون مرة من الأسماء القصيرة المبهمة.'
        ]
      },

      // ============ 5. Replace Magic Numbers ============
      {
        title: '٥. متستخدمش أرقام مجردة (Replace Magic Numbers)',
        icon: 'fa-solid fa-hashtag',
        description: `
        رقم زي "4" أو "7" مش بيقول حاجة. 
        لما تحوله لـ const أو enum، بتديله معنى، وبتخلي البحث والتعديل سهلين.
        `,
        badExample: {
          title: 'غلط – أرقام سحرية',
          code: `// في ملف OrderService
if (order.status === 1) {
  shipOrder(order);
} else if (order.status === 2) {
  cancelOrder(order);
} else if (order.status === 3) {
  refundOrder(order);
}

// في ملف UserService
if (user.role === 4) {
  grantAdminAccess(user);
}

// في ملف PaymentService
if (payment.method === 5) {
  processRefund(payment);
}

// بعد 6 شهور:
// "4" دي معناها إيه؟ مش فاكر. أدور فين؟`
        },
        goodExample: {
          title: 'صح – ثوابت معبّرة أو enum',
          code: `// ثوابت في مكان واحد
export const OrderStatus = {
  PENDING: 1,
  SHIPPED: 2,
  CANCELLED: 3,
  REFUNDED: 4
} as const;

export const UserRole = {
  GUEST: 1,
  MEMBER: 2,
  MODERATOR: 3,
  ADMIN: 4
} as const;

export const PaymentMethod = {
  CARD: 1,
  CASH: 2,
  WALLET: 3,
  REFUND: 4
} as const;

// دلوقتي الكود نفسه بيشرح
if (order.status === OrderStatus.PENDING) {
  shipOrder(order);
}

if (user.role === UserRole.ADMIN) {
  grantAdminAccess(user);
}

if (payment.method === PaymentMethod.REFUND) {
  processRefund(payment);
}`
        },
        explanation: `
        الرقم "4" لوحده مالوش أي معنى. ممكن يكون:
        - Admin user role
        - Flagged cell status
        - Refund payment method

        لما تحوّله لـ enum أو const:
        - بتديله معنى واضح
        - بتقدر تعمل search دقيق
        - التعديل بقى مكان واحد بس
        - الـ IDE يقدر يساعدك بالـ autocomplete

        bonus: في TypeScript، الـ const assertion (as const) بتديك type-safety كامل.
        `,
        tips: [
          'أي رقم بيظهر مرتين أو أكتر في الكود، حوّله لـ constant.',
          'استخدم enum أو const object حسب حالتك.',
          'سمّي الثابت بحيث يعبّر عن المعنى مش القيمة.',
          'لو الثابت ليه معنى domain، خليه في مكان واضح زي domain ثوابت.'
        ]
      }
    ],

    quote: {
      text: `الاسم الكويس أحسن من التعليق الكويس.
             مش محتاج توثّق كود واضح، لأن الكود نفسه موثّق نفسه.`,
      author: 'Robert C. Martin (Uncle Bob)'
    },

    keyTakeaways: [
      'الاسم بيقول "ليه" و "إيه" من غير ما تحتاج comment.',
      'متستخدمش أسماء موهمة — الاسم يوصف الحقيقة.',
      'لو هتفرّق بين اسمين، خلّي الفرق معبّر (مش a1 و a2).',
      'الأسماء تُنطق في اجتماع، وتُلاقى بـ Ctrl+F.',
      'متستخدمش أرقام مجردة — استخدم const أو enum.',
      'الاسم الكويس بيوفر ساعات من وقت أي حد هيقرا الكود بعديك.',
      'الأسامي هي أرخص طريقة لتحسين الكود — بلا أي مخاطرة.'
    ],

    references: [
      'Clean Code — الفصل الثاني: Meaningful Names — Robert C. Martin',
      'The Art of Readable Code — Dustin Boswell & Trevor Foucher',
      'Refactoring — الفصل السادس: Composing Methods — Martin Fowler'
    ],

    hashtags: [
      'CleanCode',
      'MeaningfulNames',
      'SoftwareEngineering',
      'Refactoring',
      'BestPractices',
      'UncleBob',
      'DotNet',
      'Angular'
    ]
  };
}