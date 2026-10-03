import { Component } from '@angular/core';
import {
  ICleanCodeContent,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-clean-code-05',
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
export class CleanCode05 {

  projectName: string = 'التعليقات – آخر حل، مش أول حل';

  projectDescription: string = `
  الفصل الرابع من كتاب Clean Code — عن الكومنتات.

  الفكرة الأساسية: الكومنتات مش حل لكود وسخ.
  لو محتاج كومنت عشان تشرح كود غامض، الحل إنك تعيد كتابة الكود نفسه.

  هنمشي على:
  - ليه الكومنتات "خطرة" أصلاً
  - 4 أنواع كومنتات وحشة (Bad Comments)
  - 5 أنواع كومنتات كويسة (Good Comments)
  - القاعدة الذهبية: rewrite بدل comment

  مستوحى من كتاب "Clean Code" — الفصل الرابع.
  `;

  projectDate: string = 'آخر تحديث: 2 أكتوبر 2026';
  projectVersion: string = 'v1.0.0';

  projectTags: string[] = [
    'Clean Code',
    'Software Engineering',
    'Best Practices',
    'Refactoring',
    'Uncle Bob',
    'Comments',
    'DotNet',
    'C#'
  ];

  cleanCodeContent: ICleanCodeContent = {

    introduction: `
    Uncle Bob بيبدأ الفصل ده بجملة قوية:
    "Don't comment bad code — rewrite it."

    يعني الكومنتات مش حل لكود وسخ.
    لو حسيت إنك محتاج كومنت عشان تشرح كود غامض،
    الحل الصح مش إنك تكتب الكومنت —
    الحل إنك تعيد كتابة الكود نفسه عشان يبقى واضح من غير ما يحتاج شرح.

    في الدليل ده، هنشوف ليه الكومنتات خطرة،
    امتى تكون وحشة، وامتى تكون كويسة فعلاً.
    `,

    story: `
    من كام سنة، كنت شغال على مشروع شات كبير،
    ولقيت كومنت فوق function بتقول:

    "يرسل الرسالة للمستخدم المتصل فقط"

    فكرت إن كل حاجة تمام، الكود بيعمل اللي الكومنت بيقوله.
    بس لما جيت أصلّح bug في نفس المنطقة، لقيت الكود فعليًا:

    _hubContext.Clients.All.SendAsync(...)

    يعني بيبعت لكل الناس (Clients.All)، مش للمستخدم المتصل بس.

    الكومنت كان كذبة. مش بس مش مفيد — كان مضلل.
    لو حد جديد قعد يقرا الكود ووثق في الكومنت،
    هياخد قرار غلط تمامًا في design.

    في اللحظة دي فهمت ليه Uncle Bob بيقول إن الكومنتات خطرة.
    مش لأنها بطبيعتها وحشة، لكن لأنها بتبقى قديمة قبل الكود،
    ومع الوقت بتتحول من "مساعد" لـ "فخ".

    الكومنتات مش بتتعدل مع الكود. لما تعدّل الـ logic،
    غالبًا هتنسى تحدّث الكومنت اللي فوقه.
    وبعد شهور، الكومنت القديم بيبقى بيقول حاجة مختلفة
    خالص عن اللي الكود فعليًا بيعمله.
    وده أسوأ من عدم وجود كومنت خالص — لأنه بيضلل.

    من يومها، بقيت بفكر مرتين قبل ما أكتب كومنت.
    الأول أسأل: مش ممكن أعيد كتابة الكود بشكل يشرح نفسه؟
    `,

    principles: [
      // ============ 1. Redundant Comments ============
      {
        title: '١. كومنتات زيادة عن اللزوم (Redundant)',
        icon: 'fa-solid fa-repeat',
        description: `
        كومنت بيكرر اللي الكود أصلاً بيقوله بوضوح.
        مفيدوش أي قيمة، وبيزوّد ضوضاء في الكود.
        `,
        badExample: {
          title: 'غلط – كومنت بيقول نفس الكلام',
          code: `// يزيد العداد بواحد
counter++;

// المستخدم كائن من نوع User
User user = new User();

// دالة بترجع الاسم
public string GetName()
{
    return _name;
}

// يتحقق لو القيمة أكبر من صفر
if (value > 0)
{
    // الكود
}`
        },
        goodExample: {
          title: 'صح – الكود بيكفي لوحده',
          code: `counter++;

User user = new User();

public string GetName()
{
    return _name;
}

if (value > 0)
{
    // الكود
}

// مفيش كومنتات — لأن الكود واضح أصلاً`
        },
        explanation: `
        الكومنت "يزيد العداد بواحد" فوق counter++ 
        مجرد تكرار لما الكود بيقوله أصلاً.

        ده نوع من الضوضاء — بيخلي الملف أطول،
        وبيستهلك طاقة القارئ في حاجة مفيدة صفر.

        القاعدة: لو الكود واضح، متكتبش كومنت.
        الكومنت الجيد بيضيف معلومة جديدة، مش بيكرر.
        `,
        tips: [
          'اسأل: الكومنت ده بيضيف معلومة جديدة؟ لو لأ، امسحه.',
          'الكومنت اللي بيكرر اسم الدالة — ضوضاء صافية.',
          'كل ما الكود يبقى أوضح، كل ما الكومنت يبقى أقل لزوم.',
          'الملف النظيف = صفر كومنتات زايدة.'
        ]
      },

      // ============ 2. Misleading Comments ============
      {
        title: '٢. كومنتات مضللة (Misleading)',
        icon: 'fa-solid fa-triangle-exclamation',
        description: `
        كومنت بيقول حاجة، والكود بيعمل حاجة تانية.
        ده أخطر نوع — لأنه بيدّي معلومة غلط ويبني عليها قرارات.
        `,
        badExample: {
          title: 'غلط – كومنت بيقول حاجة والكود حاجة تانية',
          code: `// يرسل الرسالة للمستخدم المتصل فقط
public void SendMessage(Message message)
{
    _hubContext.Clients.All.SendAsync("ReceiveMessage", message);
}

// timeout بعد 30 ثانية
var timeout = TimeSpan.FromMinutes(2);

// دالة بتتحقق من صلاحية الإيميل
public bool ValidateUser(User user)
{
    return user.Age >= 18;
}

// الكومنتات دي كلها كذب — الكود بيعمل حاجة تانية تمامًا`
        },
        goodExample: {
          title: 'صح – الكود بيقول الحقيقة بدون كومنت',
          code: `public void SendMessageToAllClients(Message message)
{
    _hubContext.Clients.All.SendAsync("ReceiveMessage", message);
}

// الاسم نفسه بيقول المدة
var TWO_MINUTE_TIMEOUT = TimeSpan.FromMinutes(2);

public bool IsUserAdult(User user)
{
    return user.Age >= 18;
}

// الأسماء بتحل محل الكومنت المضلل`
        },
        explanation: `
        في المثال الغلط:
        - كومنت بيقول "للمستخدم المتصل فقط" والكود بيبعت للكل.
        - كومنت بيقول "30 ثانية" والكود 2 دقيقة.
        - كومنت بيقول "إيميل" والكود بيتحقق من العمر.

        المشكلة: القارئ بيثق في الكومنت، فياخد قرار غلط.

        الحل: خلي الكود نفسه يقول الحقيقة.
        - اسم الدالة يوصف السلوك الفعلي.
        - الثابت يوضّح القيمة بنفسه.
        - الاسم يدل على الحاجة الحقيقية.

        الاسم اللي بيكذب = bug في المستقبل.
        `,
        tips: [
          'أي كومنت بيقول حاجة، لازم يتأكد إنها صح قبل ما تسيبه.',
          'الأسماء الواضحة بتلغي الحاجة لكومنت مضلل.',
          'استخدم ثوابت بأسماء معبّرة بدل أرقام + كومنت.',
          'لو الكود بيتغير، أول حاجة تمسحها = الكومنت اللي فوقه.'
        ]
      },

      // ============ 3. Commented-Out Code ============
      {
        title: '٣. كود متعلّق (Commented-Out Code)',
        icon: 'fa-solid fa-trash-can',
        description: `
        سطور كود قديمة سايبها بس حاطط // قبلها بدل ما تمسحها.
        الكود المعطل ده بيتراكم ومحدش بيجرؤ يمسحه.
        `,
        badExample: {
          title: 'غلط – كود قديم متعلّق',
          code: `public void ProcessOrder(Order order)
{
    // ValidateOrderOld(order);
    // SendNotificationOld(order);
    // var temp = CalculateTotal();
    // if (temp > 100) { ApplyDiscount(); }
    ValidateOrder(order);
    SendNotification(order);
}

// بعد 6 شهور، الملف بقى فيه 40 سطر متعلّق
// محدش عارف إيه اللي ممكن يتحذف وإيه اللي ممكن يفرقع
// محدش بيجرؤ يمسح حاجة خوفًا من كسر حاجة`
        },
        goodExample: {
          title: 'صح – الكود الجديد بس',
          code: `public void ProcessOrder(Order order)
{
    ValidateOrder(order);
    SendNotification(order);
}

// الكود القديم في Git History بس.
// لو محتاجه تاني، اعمل git log و git revert.

// ملف نضيف، مفيش سطور مشوشة،
// وأي حد يقرا بيفهم الكود الحالي فورًا.`
        },
        explanation: `
        الكود المتعلّق ده واحد من أكبر أعداء نظافة الملف.

        المشاكل:
        1. بيوهم القارئ — ده كود شغال ولا لأ؟
        2. بيتراكم مع الوقت — الملف بيكبر بلا داعي.
        3. بيخلي الملف مربوط بأفكار قديمة.
        4. محدش بيجرؤ يمسحه خوفًا من المستقبل.

        الحل بسيط: امسحه خالص.
        لو محتاجه تاني، Git History محتفظ بيه للأبد.
        Git مش بس بيحفظ التغيير — بيحفظ إنك مسحت إيه وليه.

        التحذير الشهير: "Use Git as your time machine, not your codebase."
        `,
        tips: [
          'أي كود متعلّق = بيولد شك في القارئ.',
          'اعتمد على Git History — هو的记忆 بلا حدود.',
          'لو خايف تمسح، اكتب commit واضح "Remove old X" وقدر ترجعله.',
          'الملف النظيف = صفر سطور متعلقة.'
        ]
      },

      // ============ 4. Noise Comments ============
      {
        title: '٤. كومنتات ضوضاء (Noise Comments)',
        icon: 'fa-solid fa-volume-high',
        description: `
        كومنتات بتتكرر في كل مكان بدون أي فايدة.
        بتزوّد حجم الكود، وبتخلي القارئ يتخطى الكومنتات كلها.
        `,
        badExample: {
          title: 'غلط – كومنتات ضوضاء',
          code: `/// <summary>
/// Default constructor
/// </summary>
public User()
{
}

/// <summary>
/// Gets or sets the name
/// </summary>
public string Name { get; set; }

/// <summary>
/// Gets or sets the age
/// </summary>
public int Age { get; set; }

/// <summary>
/// يبدأ العملية
/// </summary>
public void Start() { }

// الكومنتات دي كلها مش بتضيف حاجة،
// الاسم نفسه بيقول نفس الكلام.`
        },
        goodExample: {
          title: 'صح – كومنتات بس لما فيها قيمة',
          code: `public User()
{
}

public string Name { get; set; }

public int Age { get; set; }

public void Start() { }

// لو محتاج تشرح حاجة، الأفضل تكون معلومة جديدة
// مش إعادة صياغة للاسم

/// <summary>
/// بيبدأ العملية بشكل async في background thread،
/// وبيرجع فورًا من غير ما يستنى النتيجة.
/// </summary>
public void StartInBackground() { }`
        },
        explanation: `
        الكومنت "Default constructor" فوق public User() 
        مش بيضيف حاجة — الاسم بيقول كل حاجة.

        نفس الحاجة في "Gets or sets the name" فوق property
        اسمها Name. الكومنت تكرار بحت.

        المشكلة الكبيرة: لما الكود يبقى مليان كومنتات ضوضاء،
        القارئ بيتعلم يتخطى كل الكومنتات — حتى المفيدة منها.

        الكومنت بيضيف قيمة لما:
        - يشرح حاجة مش واضحة من الاسم.
        - يضيف معلومة تقنية مش ظاهرة.
        - يحذّر من consequence مهم.

        غير كده، اسمحه يروح.
        `,
        tips: [
          'لو الكومنت بيقول نفس الاسم — امسحه.',
          'الـ XML doc comments حلوة بس لو بتضيف قيمة حقيقية.',
          'الكومنت اللي شغال بس عشان "يملأ فراغ" = ضوضاء.',
          'الميزان: الكومنت المفيد بيضيف معلومة، الضوضاء ما بتضيفش.'
        ]
      },

      // ============ 5. Legal Comments ============
      {
        title: '٥. كومنتات قانونية (Legal Comments)',
        icon: 'fa-solid fa-gavel',
        description: `
        حقوق النشر أو الـ license اللي لازم تتحط فوق كل ملف
        حسب سياسة الشركة أو المكتبة. دي مقبولة ومطلوبة.
        `,
        badExample: {
          title: 'مش applicable – الكومنتات دي مطلوبة',
          code: `// الكومنت القانوني مش "غلط" — هو مطلوب
// بس خلّيه مختصر ومياخدش نص الملف

// الطريقة الغلط: كومنت قانوني طويل جدًا
/* 
 * Copyright (c) 2024, 2025, 2026 Ibrahim Shafiq Inc.
 * All rights reserved. This software is licensed under...
 * (20 سطر من النص القانوني)
 * ...
 * ...
 */
public class User { }`
        },
        goodExample: {
          title: 'صح – كومنت قانوني مختصر',
          code: `// Copyright (c) 2026 Ibrahim Inc. All rights reserved.
// Licensed under the MIT License. See LICENSE file for details.

public class User { }

// أو أفضل: خليه في ملف LICENSE منفصل
// والكود يبقى مرجع ليه بس
// Copyright (c) 2026 Ibrahim Inc. — See LICENSE file`
        },
        explanation: `
        الكومنتات القانونية (Legal Comments) مقبولة تمامًا:
        - حقوق النشر (Copyright)
        - الـ license (MIT, Apache, GPL, إلخ)
        - author + date لو سياسة الشركة بتطلبها
        - terms of use

        النصيحة: خليه مختصر.
        - مش لازم تحط نص الـ license كامل في كل ملف.
        - ممكن تشاور على ملف LICENSE منفصل.
        - الأدوات (IDE plugins) بتساعد في automate ده.

        ده النوع الوحيد من الكومنتات اللي بيتحط لأسباب
        مش تقنية (قانونية وتجارية). عادي يبقى موجود.
        `,
        tips: [
          'الكومنت القانوني مختصر — 2-3 سطور بالكتير.',
          'شاور على ملف LICENSE خارجي بدل تكرار النص.',
          'استخدم قوالب IDE عشان توحّد الشكل.',
          'لو الأدوات بتضيفه تلقائي — سيبها تعمل شغلها.'
        ]
      },

      // ============ 6. Explanation of Intent ============
      {
        title: '٦. شرح النية (Explanation of Intent)',
        icon: 'fa-solid fa-lightbulb',
        description: `
        لما الكود نفسه مش هيقدر يشرح "ليه" اتخذت قرار معين.
        مش بيشرح "إيه" اللي بيحصل — ده الكود بيقوله.
        `,
        badExample: {
          title: 'غلط – الشرح بدل الكود الواضح',
          code: `// بنعمل sleep عشان نستنى الـ API ترد
Thread.Sleep(500);

// بنستخدم 4 هنا لأن دي الحالة بتاعة الـ VIP
if (user.status == 4) { }

// بنلف مرتين عشان السبب الغامض ده
for (int i = 0; i < 2; i++) { }

// المشكلة: الكومنتات بتشرح الـ "إيه" 
// مش الـ "ليه" — وده ممكن يتحل بالكود`
        },
        goodExample: {
          title: 'صح – كومنت بيشرح "ليه" قرار غريب',
          code: `// استخدمنا هنا thread sleep بدل async/await
// عشان الـ legacy library مش بتدعم async operations
Thread.Sleep(500);

// بعض المستخدمين القدامى لسه بيستخدموا النظام القديم
// وبيرجعوا code غريب — احنا بنتعامل معاه مؤقتًا
// لحد ما نكمل migration
if (user.legacyId != null) { }

// الكومنتات دي بتشرح "ليه" اتخذنا القرار
// مش "إيه" اللي الكود بيعمله (ده واضح)`
        },
        explanation: `
        الفرق المهم:
        - "إيه" اللي بيحصل → الكود بيقوله، مش محتاج كومنت.
        - "ليه" اخترنا الطريقة دي → الكود مش بيقوله، محتاج كومنت.

        مثال:
        - "بنعمل sleep عشان نستنى API" → مش مفيد.
          كل Sleep بيعمل ده. الكود بيقول كده أصلاً.

        - "بنستخدم sleep بدل async لأن الـ library مش بتدعم async" → مفيد!
          ده قرار تقني مش واضح من الكود.

        الكومنت الجيد بيعمل حاجة واحدة:
        يدّي القارئ معلومة الكود مش قادر يدّيها.

        لو معلومة موجودة في الكود → مش محتاج كومنت.
        لو معلومة مش في الكود (نية، سبب، تاريخ) → كومنت مفيد.
        `,
        tips: [
          'اسأل: المعلومة دي موجودة في الكود؟ لو لأ، اكتبها.',
          'التركيز على "ليه" — مش "إيه".',
          'القرارات التقنية الغريبة محتاجة شرح.',
          'الـ trade-offs بتستحق كومنت — ليها سياق مايظهرش في الكود.'
        ]
      },

      // ============ 7. Warning of Consequences ============
      {
        title: '٧. تحذير من نتيجة (Warning of Consequences)',
        icon: 'fa-solid fa-bell',
        description: `
        تحذير من سلوك خطير أو بطيء أو غريب.
        الكومنت بيمنع استخدام خاطئ للدالة أو الـ API.
        `,
        badExample: {
          title: 'غلط – من غير تحذير',
          code: `public List<Report> GenerateFullReport(List<Data> data)
{
    // الكود بيعمل 1000 عملية ثقيلة
    // وياخد 5 دقايق على datasets كبيرة
    // بس مفيش تحذير — اللي بيستدعي هيلاقي الكود بطيء
    // ومش فاهم ليه
}

// نفس المشكلة: دالة ليها side effects مخفية
public void SaveAndBackup(User user)
{
    _db.Save(user);
    _backupService.BackupAll();  // side effect غير متوقع
}`
        },
        goodExample: {
          title: 'صح – تحذير واضح',
          code: `/// <summary>
/// تحذير: الميثود دي بطيئة جدًا مع datasets كبيرة.
/// استخدمها فقط مع أقل من 1000 صف.
/// للـ datasets الأكبر، استخدم GeneratePagedReport.
/// </summary>
public List<Report> GenerateFullReport(List<Data> data)
{
}

/// <summary>
/// مهم: بيحفظ المستخدم وبيعمل backup كامل للنظام كـ side effect.
/// استخدمها بس في نهاية transaction كبير.
/// </summary>
public void SaveAndBackup(User user)
{
    _db.Save(user);
    _backupService.BackupAll();
}`
        },
        explanation: `
        بعض الدوال ليها سلوك خطير أو بطيء أو side effects
        مش واضحة من الاسم لوحده.

        في الحالة دي، كومنت تحذيري مفيد جدًا:
        - يمنع استخدام خاطئ.
        - يشرح الأداء المتوقع.
        - يوضّح الـ side effects.
        - يقترح بديل أفضل.

        الفرق بين "Warning" و "Explanation of Intent":
        - Intent: "ليه استخدمت الحل ده".
        - Warning: "لو استخدمت الحل ده، هيحصل إيه".

        الاتنين مفيدين — بس في سياقات مختلفة.
        `,
        tips: [
          'أي side effect غير متوقع = محتاج تحذير.',
          'الأداء الضعيف في حالات معينة = محتاج تحذير.',
          'لو في بديل أفضل، اذكره في الكومنت.',
          'التحذير بيخلي القرار بتاع الـ caller أكثر وعيًا.'
        ]
      },

      // ============ 8. TODO Comments ============
      {
        title: '٨. كومنتات TODO',
        icon: 'fa-solid fa-list-check',
        description: `
        كومنتات بتوضح شغل لسه محتاج يتعمل.
        مفيدة لو اتراجعت بشكل دوري — بس خطرة لو اتراكمت.
        `,
        badExample: {
          title: 'غلط – TODOs متراكمة من سنين',
          code: `// TODO: نضيف validation للـ email
public bool SendEmail(string email) { }

// TODO: (2022-03-15) نصلح الـ bug ده — من 4 سنين
public void ProcessPayment(Payment p) { }

// TODO: نشيل الكود ده بعد الـ migration
// TODO: (من 2021) لسه موجود — الـ migration خلص من سنتين
public void LegacySupport() { }

// TODO: مش فاكر كنت عايز أعمل إيه هنا
public void DoSomething() { }

// المشكلة: مفيش حد بيرجع للـ TODOs دي.
// بتبقى مقبرة من النوايا الطيبة.`
        },
        goodExample: {
          title: 'صح – TODOs واضحة ومسؤولة',
          code: `// TODO(ibrahim, 2026-10-02): نضيف validation للـ email 
// format لما نخلص الـ regex الجديد. تتبع JIRA-1234.

public bool SendEmail(string email) { }

// TODO(ibrahim, 2026-10-02): بنستخدم الكود ده مؤقتًا
// لحد ما نكمل migration لـ API v3.
// Deadline: Q1 2027.

public void LegacySupport() { }

// القواعد:
// 1. اسم صاحب الـ TODO
// 2. تاريخ
// 3. السبب (ليه لسه محتاج)
// 4. deadline متوقع (لو ممكن)
// 5. مرجع لـ ticket لو في team`
        },
        explanation: `
        الـ TODO مش بطبيعتها وحشة.
        المشكلة في الـ TODOs المتراكمة اللي محدش بترجع لها.

        في المثال الغلط:
        - TODOs من 2021 لسه موجودة.
        - "مش فاكر كنت عايز أعمل إيه" — عديمة القيمة.
        - مفيش اسم، مفيش تاريخ، مفيش ticket.

        في المثال الصح:
        - كل TODO ليه owner.
        - ليه تاريخ يوضّح متى اتكتب.
        - فيه سبب واضح.
        - فيه deadline أو ticket.

        القاعدة العملية:
        - اعمل lint rule يشيل TODOs أقدم من 6 شهور.
        - راجع TODOs كل sprint planning.
        - لو TODO قديم ومش مهم، امسحه أو اعمل ticket.
        `,
        tips: [
          'أي TODO لازم يكون فيه اسم + تاريخ.',
          'لو TODO ملهوش ticket، اعمله واحد أو امسحه.',
          'راجع TODOs بانتظام — sprint planning مثلًا.',
          'لو TODO بقاله سنة، يبقى مش مهم — امسحه.'
        ]
      },

      // ============ 9. Amplification ============
      {
        title: '٩. توضيح أهمية حاجة (Amplification)',
        icon: 'fa-solid fa-magnifying-glass-plus',
        description: `
        كومنت بيوضّح أهمية سطر يبان عادي — عشان حد مايفوتوش.
        أو سطر ليه قيمة كبيرة لكن ممكن يعدي على القارئ بسهولة.
        `,
        badExample: {
          title: 'غلط – سطر مهم بدون توضيح',
          code: `public void ProcessPassword(string password)
{
    var trimmed = password.Trim();
    var hashed = BCrypt.HashPassword(trimmed);
    _db.Save(hashed);
}

// المشكلة: القارئ ممكن يعدّي على الـ .Trim() 
// ومايفهمش إنه مهم جدًا
// وواحد جديد ممكن يشيلها ويفتكر إنها زيادة

// النتيجة: auth بيفشل مع المستخدمين اللي بيستخدموا
// مسافات في الـ password من الـ frontend`
        },
        goodExample: {
          title: 'صح – توضيح أهمية السطر',
          code: `public void ProcessPassword(string password)
{
    // مهم: الـ trim هنا ضروري عشان الـ password ممكن يوصل
    // بمسافات زيادة من الـ frontend، وده بيسبب فشل في الـ hash
    // comparison لو ما اتعملش.
    var trimmed = password.Trim();

    var hashed = BCrypt.HashPassword(trimmed);
    _db.Save(hashed);
}

// الكومنت بيشرح ليه الـ trim مهم — عشان محدش يشيلها
// من غير ما يفهم السبب`
        },
        explanation: `
        بعض الأسطر بتبان عادية جدًا في الكود،
        بس ليها أهمية كبيرة لو اتعملت غلط.

        الفرق بين Amplification و Redundant:
        - Redundant: "counter++ يزيد العداد" — مفيش قيمة.
        - Amplification: "الـ trim هنا ضروري لأن..." — فيه قيمة.

        الـ Amplification مفيد لما:
        - السطر يبان عادي بس مهم.
        - القارئ مش هيفهم أهمية السطر بدون شرح.
        - السطر لو اتشال هيعمل bug غريب.

        ده من الحالات القليلة اللي الكومنت فيها
        بيمنع bug حقيقي في المستقبل.
        `,
        tips: [
          'لو السطر مهم بس مش واضح، اكتب كومنت.',
          'اشرح النتيجة لو السطر اتشال — دي أقوى طريقة.',
          'متكتبش كومنت على كل سطر — بس المهم منهم.',
          'الأكواد اللي فيها edge cases بتستحق amplify.'
        ]
      }
    ],

    quote: {
      text: `Don't comment bad code — rewrite it.
             الكومنت هو آخر حل، مش أول حل.`,
      author: 'Robert C. Martin (Uncle Bob) — الفصل الرابع'
    },

    keyTakeaways: [
      'الكومنتات مش بتتعدل مع الكود — بتبقى قديمة قبل الكود.',
      'الكومنت المضلل أخطر من عدم وجود كومنت أصلاً.',
      'الكود المتعلّق امسحه — Git History محتفظ بيه.',
      'الكومنت اللي بيكرر الاسم = ضوضاء، امسحه.',
      'لو محتاج كومنت عشان تشرح كود غامض، عيد كتابة الكود.',
      'الكومنت الجيد بيشرح "ليه" — مش "إيه".',
      'TODOs لازم يكون لها owner + تاريخ + ticket.',
      'القاعدة الذهبية: rewrite أول، comment آخر.'
    ],

    references: [
      'Clean Code — الفصل الرابع: Comments — Robert C. Martin',
      'The Art of Readable Code — Dustin Boswell & Trevor Foucher',
      'Refactoring — الفصل السادس: Composing Methods — Martin Fowler'
    ],

    hashtags: [
      'CleanCode',
      'Comments',
      'SoftwareEngineering',
      'Refactoring',
      'BestPractices',
      'UncleBob',
      'DotNet',
      'CSharp'
    ]
  };
}