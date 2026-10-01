import { Component } from '@angular/core';
import {
  ICleanCodeContent,
  SharedCodeComponent
} from '../../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-clean-code-04',
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
export class CleanCode04 {

  projectName: string = 'الدوال – الحاجة الأساسية لأي كود نظيف';

  projectDescription: string = `
  أهم فصل في كتاب Clean Code — لأن الدوال هي الأساس اللي بيتبني بيه أي كود.

  9 قواعد عملية لكتابة دوال نظيفة، مع أمثلة حقيقية من مشروع Chat حقيقي.

  القواعد:
  - Small! (خليها صغيرة)
  - Do One Thing (اعمل حاجة واحدة)
  - One Level of Abstraction (مستوى تجريد واحد)
  - Switch Statements (ادفن الـ switch)
  - Use Descriptive Names (أسماء معبّرة)
  - Function Arguments (أقل parameters ممكن)
  - Avoid Flag Arguments (متمررش boolean)
  - Command Query Separation (أمر أو سؤال)
  - Prefer Exceptions (استخدم exceptions)

  مستوحى من كتاب "Clean Code" — الفصل الثالث.
  `;

  projectDate: string = 'آخر تحديث: 1 أكتوبر 2026';
  projectVersion: string = 'v1.0.0';

  projectTags: string[] = [
    'Clean Code',
    'Software Engineering',
    'Best Practices',
    'Refactoring',
    'Uncle Bob',
    'DotNet',
    'C#'
  ];

  cleanCodeContent: ICleanCodeContent = {

    introduction: `
    لو الـ functions بتاعتك كويسة، نص الشغل خلص.
    ده مش كلامي — ده كلام Uncle Bob في واحد من أهم فصول الكتاب.

    الدوال هي الأساس اللي بيتبني بيها أي كود，
    ولو هي نظيفة، المشروع كله بيبقى نظيف. لو هي فوضى，
    المشروع كله بيبقى فوضى حتى لو باقي الحاجات كويسة.

    في الدليل ده، هنمشي على 9 قواعد عملية لكتابة دوال نظيفة，
    كل واحدة مع مثال حقيقي من مشروع شات (زي ChatterHub).
    `,

    story: `
    في مشروع شات كنت شغال عليه، كانت عندي method اسمها SendMessage
    بتاخد 3 parameters. لما فتحتها، لقيت نفسي بصدد function واحدة طويلة
    بتعمل 4 حاجات مختلفة:

    1. بتتحقق من صحة الرسالة (validation)
    2. بتحفظ الرسالة في الداتابيز
    3. بتبعت notification عبر SignalR
    4. بتحدّث آخر نشاط للمستخدم

    كل ده في function واحدة اسمها SendMessage — كأن الاسم ده لوحده كفاية.

    المشكلة الحقيقية ظهرت لما حصل bug في الـ notification.
    قعدت نص ساعة أدور في function طويلة، بقفز بين CRUD كود
    و SignalR كود و validation كود، عشان أفهم فين المشكلة بالظبط.

    في اللحظة دي، افتكرت فصل Functions من كتاب Clean Code.
    Uncle Bob بيقول: لو الـ function بتعمل حاجة، وحاجة تانية، وحاجة تالتة،
    يبقى هي بتعمل 3 حاجات مش حاجة واحدة.

    رجعت للـ function وقسمتها لـ 4 دوال صغيرة،
    كل واحدة اسمها بيقول بتعمل إيه بالظبط:

    - ValidateMessageContent
    - SaveMessage
    - NotifyReceiver
    - UpdateSenderActivity

    الـ SendMessage نفسها بقت زي "جدول محتويات" —
    4 سطور بس، كل واحد بينادي function صغيرة.

    الفرق مش بس في القراءة — الفرق في الـ debugging.
    لما حصل bug في الـ notification تاني، رحت مباشرة على NotifyReceiver.
    صفر ثانية ضايعة في البحث.

    وهنا فهمت ليه Uncle Bob بيقول إن الفصل ده من أهم فصول الكتاب.
    الـ functions هي الـ unit الأساسي بتاع أي كود،
    ولو هي نظيفة، كل حاجة بعدها بتبقى أسهل.
    `,

    principles: [
      // ============ 1. Small! ============
      {
        title: '١. Small! – خليها صغيرة',
        icon: 'fa-solid fa-minimize',
        description: `
        القاعدة الأولى والأهم: الدوال لازم تكون صغيرة.
        وبعدين بيقول حاجة أغرب: لازم تكون أصغر من كده كمان.

        في النسخ الأولى من الكود، كانت الدوال بتوصل لـ 100-200 سطر.
        دلوقتي القاعدة العملية: 4 لـ 20 سطر بالكتير — وأقل أحسن.
        `,
        badExample: {
          title: 'غلط – دالة طويلة بلا داعي',
          code: `public void ProcessUserRegistration(string email, string password)
{
    // 1. التحقق من الإيميل
    if (string.IsNullOrEmpty(email))
        throw new ArgumentException("Email is required");
    if (!email.Contains("@"))
        throw new ArgumentException("Invalid email format");

    // 2. التحقق من كلمة المرور
    if (string.IsNullOrEmpty(password))
        throw new ArgumentException("Password is required");
    if (password.Length < 8)
        throw new ArgumentException("Password too short");

    // 3. تشفير كلمة المرور
    var hashedPassword = BCrypt.HashPassword(password);

    // 4. حفظ المستخدم
    var user = new User { Email = email, PasswordHash = hashedPassword };
    _context.Users.Add(user);
    _context.SaveChanges();

    // 5. إرسال إيميل ترحيب
    var emailBody = $"Welcome {email}!";
    _emailService.Send(email, "Welcome", emailBody);

    // 6. تسجيل الحدث
    _logger.Log($"User registered: {email}");

    // كل ده في دالة واحدة — 30+ سطر
}`
        },
        goodExample: {
          title: 'صح – دالة صغيرة بتعمل حاجة واحدة',
          code: `public void RegisterUser(string email, string password)
{
    ValidateEmail(email);
    ValidatePassword(password);
    var user = CreateUser(email, password);
    SaveUser(user);
    SendWelcomeEmail(user);
    LogRegistration(user);
}

private void ValidateEmail(string email) { /* 4-5 سطور */ }
private void ValidatePassword(string password) { /* 3-4 سطور */ }
private User CreateUser(string email, string password) { /* 3 سطور */ }
private void SaveUser(User user) { /* 2-3 سطور */ }
private void SendWelcomeEmail(User user) { /* 2 سطور */ }
private void LogRegistration(User user) { /* 1 سطر */ }`
        },
        explanation: `
        في المثال الغلط، الدالة 30+ سطر بتعمل 6 حاجات مختلفة.
        لو حصل bug في الـ validation، هتدور في وسط 30 سطر.

        في المثال الصح، RegisterUser بقت 7 سطور بس —
        كل سطر بينادي دالة صغيرة بتعمل حاجة واحدة.
        أي حد يقراها، يفهم كل الخطوات في 5 ثواني.

        قاعدة عملية: لو الدالة مش بتاخد شاشة واحدة،
        يبقى في حاجة غلط.
        `,
        tips: [
          'الهدف: 4-20 سطر لكل دالة. أقل من 4 كمان كويس.',
          'لو الدالة بتاخد أكثر من شاشة، قسمها.',
          'الـ blocks جوه if/else/while يفضّل تكون سطر واحد أو استدعاء دالة.',
          'الدالة المثالية: سطر واحد بيستدعي دالة تانية باسم بيقول اللي بتعمله.'
        ]
      },

      // ============ 2. Do One Thing ============
      {
        title: '٢. Do One Thing – حاجة واحدة بس',
        icon: 'fa-solid fa-bullseye',
        description: `
        Functions should do one thing. They should do it well.
        They should do it only.

        لو الدالة بتعمل validate + save + notify،
        يبقى هي بتعمل 3 حاجات مش حاجة واحدة.
        `,
        badExample: {
          title: 'غلط – دالة ب 4 مسؤوليات',
          code: `public void SendMessage(string content, int senderId, int receiverId)
{
    // 1. التحقق من صحة البيانات
    if (string.IsNullOrEmpty(content))
        throw new ArgumentException("Message cannot be empty");
    if (content.Length > 1000)
        throw new ArgumentException("Message too long");

    // 2. حفظ الرسالة في الداتابيز
    var message = new Message
    {
        Content = content,
        SenderId = senderId,
        ReceiverId = receiverId,
        SentAt = DateTime.Now
    };
    _context.Messages.Add(message);
    _context.SaveChanges();

    // 3. إرسال notification عبر SignalR
    _hubContext.Clients.User(receiverId.ToString())
        .SendAsync("ReceiveMessage", content, senderId);

    // 4. تحديث آخر نشاط للمستخدم
    var sender = _context.Users.Find(senderId);
    sender.LastActive = DateTime.Now;
    _context.SaveChanges();
}`
        },
        goodExample: {
          title: 'صح – كل دالة بمسؤولية واحدة',
          code: `public void SendMessage(string content, int senderId, int receiverId)
{
    ValidateMessageContent(content);
    var message = SaveMessage(content, senderId, receiverId);
    NotifyReceiver(message);
    UpdateSenderActivity(senderId);
}

private void ValidateMessageContent(string content)
{
    if (string.IsNullOrEmpty(content))
        throw new ArgumentException("Message cannot be empty");
    if (content.Length > 1000)
        throw new ArgumentException("Message too long");
}

private Message SaveMessage(string content, int senderId, int receiverId)
{
    var message = new Message
    {
        Content = content,
        SenderId = senderId,
        ReceiverId = receiverId,
        SentAt = DateTime.Now
    };
    _context.Messages.Add(message);
    _context.SaveChanges();
    return message;
}

private void NotifyReceiver(Message message)
{
    _hubContext.Clients.User(message.ReceiverId.ToString())
        .SendAsync("ReceiveMessage", message.Content, message.SenderId);
}

private void UpdateSenderActivity(int senderId)
{
    var sender = _context.Users.Find(senderId);
    sender.LastActive = DateTime.Now;
    _context.SaveChanges();
}`
        },
        explanation: `
        SendMessage بقت زي "ملخص" أو "جدول محتويات".
        أي حد يقراها بيفهم فورًا الخطوات الأربعة اللي بتحصل.

        لو عايز تفهم تفاصيل أي خطوة، تروح للدالة بتاعتها لوحدها.
        وكل دالة بقت سهلة الاختبار (testing) لوحدها.

        الاختبار البسيط: لو تقدر تستخرج دالة تانية من جوه الدالة دي،
        وتسميها باسم مش مجرد إعادة صياغة للاسم الأصلي،
        يبقى الدالة الأصلية كانت بتعمل أكتر من حاجة.
        `,
        tips: [
          'لو الاسم فيه "and" أو "or"، يبقى الدالة بتعمل أكتر من حاجة.',
          'لو محتاج تكتب comment عشان توضح خطوة، استخرجها في دالة.',
          'الدالة المفروض تبان زي سلسلة خطوات كل واحدة بسيطة.',
          'لو حصل bug، لازم تعرف تروح على الدالة الصح في ثواني.'
        ]
      },

      // ============ 3. One Level of Abstraction ============
      {
        title: '٣. مستوى تجريد واحد (One Level of Abstraction)',
        icon: 'fa-solid fa-layer-group',
        description: `
        كل الأسطر جوه الدالة لازم تكون في نفس مستوى التفصيل.
        متخلطش حاجة عالية المستوى (high-level) مع حاجة منخفضة (low-level).
        `,
        badExample: {
          title: 'غلط – خلط بين المستويات',
          code: `public void ProcessOrder(Order order)
{
    // منخفض المستوى - تفصيلة مباشرة
    order.Status = "Processing";

    // عالي المستوى - استدعاء دالة تانية
    SendConfirmationEmail(order);

    // منخفض المستوى - حساب رياضي مباشر
    var tax = order.Total * 0.14m;
    order.Total += tax;

    // عالي المستوى تاني
    NotifyWarehouse(order);

    // منخفض المستوى تاني
    order.ProcessedAt = DateTime.Now;
}`
        },
        goodExample: {
          title: 'صح – كل الأسطر على نفس المستوى',
          code: `public void ProcessOrder(Order order)
{
    MarkOrderAsProcessing(order);
    SendConfirmationEmail(order);
    ApplyTax(order);
    NotifyWarehouse(order);
    RecordProcessedTime(order);
}

private void MarkOrderAsProcessing(Order order)
{
    order.Status = "Processing";
}

private void ApplyTax(Order order)
{
    var tax = order.Total * 0.14m;
    order.Total += tax;
}

private void RecordProcessedTime(Order order)
{
    order.ProcessedAt = DateTime.Now;
}`
        },
        explanation: `
        في المثال الغلط:
        - ProcessOrder بتقفز بين "تعيين قيمة بسيطة" و "استدعاء دالة عالية المستوى".
        - القراءة متقطعة — مش واضحة إيه اللي بيحصل بالظبط.

        في المثال الصح:
        - كل سطر في ProcessOrder هو استدعاء دالة عالية المستوى.
        - المفهوم واضح على طول: دالة بتعمل 5 خطوات مفهومة.
        - التفاصيل المنخفضة اتخفت جوه دوال منفصلة.

        الفكرة: لما تقرا الدالة، لازم تفضل في نفس المستوى الذهني.
        مش تقفز من "دالة عامة" لـ "ضرب رقم في 0.14".
        `,
        tips: [
          'لو شفت تفصيلة منخفضة المستوى في دالة عالية، استخرجها.',
          'الدالة المفروض تتقرأ كأنها جملة في نفس مستوى التفكير.',
          'الأرقام السحرية والعملاء الرياضيين لازم يكونوا في دوال منفصلة.',
          'استدعاء الدوال (calling) عالي المستوى، التنفيذ الفعلي منخفض.'
        ]
      },

      // ============ 4. Switch Statements ============
      {
        title: '٤. Switch Statements – ادفنها في factory',
        icon: 'fa-solid fa-sitemap',
        description: `
        الـ switch بطبيعتها صعب تخليها صغيرة، لأنها بتعمل N حاجة مختلفة.
        الحل: ادفنها في factory، واستخدم polymorphism في باقي الكود.
        `,
        badExample: {
          title: 'غلط – switch متكرر في كل مكان',
          code: `// في PayrollService
public decimal CalculatePay(Employee employee)
{
    switch (employee.Type)
    {
        case EmployeeType.Commissioned:
            return CalculateCommissionedPay(employee);
        case EmployeeType.Hourly:
            return CalculateHourlyPay(employee);
        case EmployeeType.Salaried:
            return CalculateSalariedPay(employee);
        default:
            throw new InvalidOperationException();
    }
}

// في VacationService - نفس الـ switch تاني!
public int CalculateVacationDays(Employee employee)
{
    switch (employee.Type)
    {
        case EmployeeType.Commissioned: return 10;
        case EmployeeType.Hourly: return 15;
        case EmployeeType.Salaried: return 20;
    }
}

// في BonusService - تاني وتالت ورابع!
// لو أضفت نوع موظف جديد، هتعدّل 3-4 أماكن.`
        },
        goodExample: {
          title: 'صح – Polymorphism في مكان واحد',
          code: `// الكلاس الأساسي
public abstract class Employee
{
    public abstract decimal CalculatePay();
    public abstract int CalculateVacationDays();
}

// كل نوع موظف يطبق بطريقته
public class CommissionedEmployee : Employee
{
    public override decimal CalculatePay() { /* ... */ }
    public override int CalculateVacationDays() => 10;
}

public class HourlyEmployee : Employee
{
    public override decimal CalculatePay() { /* ... */ }
    public override int CalculateVacationDays() => 15;
}

public class SalariedEmployee : Employee
{
    public override decimal CalculatePay() { /* ... */ }
    public override int CalculateVacationDays() => 20;
}

// الـ switch بيحصل مرة واحدة بس - في الـ Factory
public class EmployeeFactory
{
    public static Employee Create(EmployeeType type) => type switch
    {
        EmployeeType.Commissioned => new CommissionedEmployee(),
        EmployeeType.Hourly => new HourlyEmployee(),
        EmployeeType.Salaried => new SalariedEmployee(),
        _ => throw new InvalidOperationException()
    };
}`
        },
        explanation: `
        في المثال الغلط:
        - نفس الـ switch بيتكرر في 3-4 أماكن.
        - لو أضفت نوع موظف جديد، هتعدّل كل مكان.
        - لو نسيت مكان، هيحصل bug.

        في المثال الصح:
        - كل نوع موظف بيطبق سلوكه بنفسه.
        - الـ switch الوحيد في الـ Factory — لما تنشئ object جديد.
        - باقي الكود بيستخدم polymorphism — نداء واحد بيشتغل مع الكل.
        - إضافة نوع جديد = كلاس جديد + سطر واحد في الـ Factory.
        `,
        tips: [
          'لو الـ switch بيتكرر، يبقى لازم polymorphism.',
          'الـ switch المسموح: في factory أو في lookup table.',
          'استخدم الكلاس الأساسي abstract عشان تفرض التطبيق.',
          'بعد الـ refactoring، إضافة نوع جديد = ملف جديد + سطر واحد.'
        ]
      },

      // ============ 5. Descriptive Names ============
      {
        title: '٥. أسماء معبّرة (Descriptive Names)',
        icon: 'fa-solid fa-signature',
        description: `
        خلي اسم الدالة طويل لو لازم عشان يوصف اللي بتعمله بالظبط.
        اسم طويل وواضح أحسن بكتير من اسم قصير وغامض.
        `,
        badExample: {
          title: 'غلط – أسماء قصيرة وغامضة',
          code: `// Send إيه؟ لمين؟ محتوى إيه؟
public void Send(User user) { }

// Process إيه بالظبط؟
public void Process(Order order) { }

// Handle إيه؟
public void Handle(Request req) { }

// Init إيه؟
public void Init() { }

// Caller بيفكر: "Send إيه بالظبط؟ محتاج أفتح الكود" 
Send(user);`
        },
        goodExample: {
          title: 'صح – أسماء توضح بالظبط',
          code: `// اسم بيقول كل حاجة
public void SendWelcomeEmailToNewUser(User user) { }

// اسم بيقول العملية كاملة
public void ProcessRefundForCancelledOrder(Order order) { }

// اسم بيقول المعالجة بتخص إيه
public void HandlePaymentFailureNotification(Request req) { }

// اسم بيقول بتهيّئ إيه
public void InitializeDatabaseConnection() { }

// Caller فاهم من أول نظرة
SendWelcomeEmailToNewUser(user);`
        },
        explanation: `
        نفس مبدأ الفصل اللي فات، بس مطبق على الدوال بالذات.

        اسم طويل وواضح زي SendWelcomeEmailToNewUser أحسن بكتير
        من اسم قصير وغامض زي Send.

        الفايدة:
        - اللي بقرا الكود يعرف الدالة بتعمل إيه من غير ما يفتحها.
        - الـ IDE autocomplete بقى مفيد — كل دالة ليها اسم فريد.
        - لو الأسماء متشابهة، الـ autocomplete بيبقى مزعج.

        القاعدة العملية: كل ما كانت الدالة أصغر، كل ما الاسم
        يبقى أسهل في إنه يكون طويل وواضح.
        `,
        tips: [
          'الاسم الطويل المفهوم أحسن من الاسم القصير الغامض.',
          'الاسم يوصف اللي الدالة بتعمله، مش إزاي بتعمله.',
          'خلي أول كلمة فعل: send, process, handle, initialize.',
          'الدالة الصغيرة تدي فرصة لاسم طويل — استغلها.'
        ]
      },

      // ============ 6. Function Arguments ============
      {
        title: '٦. عدد الـ parameters (Function Arguments)',
        icon: 'fa-solid fa-sliders',
        description: `
        كل ما قل عدد الـ parameters، كان أحسن.
        صفر = الأفضل، 1-2 = كويس، 3 = مقبول بشروط،
        أكتر من 3 = ارفضها.
        `,
        badExample: {
          title: 'غلط – parameters كتير',
          code: `// 7 parameters — حد فيهم يلخبط؟
public void CreateUser(
    string firstName,
    string lastName,
    string email,
    string phone,
    string address,
    string city,
    int age)
{
    // الكود
}

// Caller بيتلخبط:
CreateUser("Ali", "Hassan", "ali@x.com",
    "0123", "Street", "Cairo", 30);

// فين الـ phone وفين الـ address؟ مين age؟ مين city؟
// لازم ترجع تشوف الـ signature.`
        },
        goodExample: {
          title: 'صح – parameters متجمعة في object',
          code: `// 1 parameter بس
public void CreateUser(UserRegistrationDto userDto)
{
    // الكود
}

// الـ DTO
public class UserRegistrationDto
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public int Age { get; set; }
}

// Caller بيشوف الأسماء بوضوح
CreateUser(new UserRegistrationDto
{
    FirstName = "Ali",
    LastName = "Hassan",
    Email = "ali@x.com",
    Phone = "0123",
    Address = "Street",
    City = "Cairo",
    Age = 30
});`
        },
        explanation: `
        الـ parameters الكتير بتخلي:
        1. الـ caller يلخبط في الترتيب.
        2. صعب تتذكر الـ signature.
        3. الـ testing أصعب (لازم تجهز 7 قيم).

        الحل: جمّع الـ parameters المرتبطين في DTO أو value object.
        ده بيرجّعنا لقاعدة "Add Meaningful Context" من الفصل اللي فات.

        الترتيب المفضل:
        - Niladic (صفر) — الأفضل
        - Monadic (واحد) — كويس
        - Dyadic (اتنين) — مقبول
        - Triadic (3) — محتاج تبرير قوي
        - أكتر من 3 — ارفضها
        `,
        tips: [
          'الـ boolean خليه parameter واحد بس لو لابد منه — أو فصلهم.',
          'لو في parameters بيبدأوا بنفس prefix، جمّعهم في object.',
          'الـ DTO المفيد: بيرجّع لك نفس السياق بتاع الـ domain.',
          'استخدم named arguments عشان الوضوح في الـ call site.'
        ]
      },

      // ============ 7. Avoid Flag Arguments ============
      {
        title: '٧. تجنب الـ boolean parameters',
        icon: 'fa-solid fa-toggle-off',
        description: `
        متمررش boolean كـ parameter عشان الدالة تتصرف بطريقتين مختلفتين.
        ده بيبقى علامة إن الدالة بتعمل حاجتين مش حاجة واحدة.
        `,
        badExample: {
          title: 'غلط – boolean parameter',
          code: `// الدالة بتعمل حاجتين حسب الـ flag
public void Render(bool isAdmin)
{
    if (isAdmin)
        RenderAdminView();
    else
        RenderUserView();
}

// الاستدعاء غامض
Render(true);   // الـ true دي معناها إيه؟
Render(false);  // والـ false دي؟ لازم تفتح الكود تعرف.

// Boolean في الدالة = دالتين متداخلين في دالة واحدة.`
        },
        goodExample: {
          title: 'صح – دالتين منفصلتين',
          code: `// كل حالة ليها دالة منفصلة
public void RenderAdminView() { /* ... */ }
public void RenderUserView() { /* ... */ }

// الاستدعاء بقى واضح
RenderAdminView();   // واضح إيه اللي بيحصل
RenderUserView();    // واضح إيه اللي بيحصل

// الفايدة:
// - مفيش حاجة مش واضحة في الـ call site
// - كل دالة بتعمل حاجة واحدة
// - سهل تعمل test لكل واحدة لوحدها`
        },
        explanation: `
        الـ boolean parameter بيقول للقارئ:
        "الدالة دي هتعمل حاجتين مختلفتين حسب الـ flag".

        المشاكل:
        1. الـ call site غامض — Render(true) ده معناه إيه؟
        2. الدالة عندها 2 سيناريوهات للاختبار مش 1.
        3. الدالة مش بتعمل حاجة واحدة — بتعمل حاجتين.

        الحل: افصلهم لدالتين بأسماء واضحة.
        لو الكود مشترك، استخرج الجزء المشترك في دالة تالتة.

        استثناء: ممكن يكون boolean parameter مقبول لو المعنى
        واضح من السياق مباشرة (زي SortDescending(list, true)),
        لكن حتى هنا، الأفضل تستخدم enum أو دالتين.
        `,
        tips: [
          'أي boolean parameter = دالتين متداخلتين، افصلهم.',
          'لو محتاج boolean، فكّر: إيه المعنى الحقيقي؟ يبقى enum.',
          'Daltin منفصلتين أسهل في الـ testing والـ mocking.',
          'الـ code review بيكشف الـ flag arguments بسرعة — استخدمها كـ signal للـ refactoring.'
        ]
      },

      // ============ 8. Command Query Separation ============
      {
        title: '٨. Command Query Separation – أمر أو سؤال',
        icon: 'fa-solid fa-code-branch',
        description: `
        الدالة لازم إما تعمل حاجة (command) أو ترجع معلومة (query)،
        مش الاتنين مع بعض في نفس الدالة.
        `,
        badExample: {
          title: 'غلط – command و query مع بعض',
          code: `// الدالة دي بتعمل تغيير وترجع نتيجة في نفس الوقت
public bool SetUsername(string username)
{
    if (IsUsernameValid(username))
    {
        _username = username;   // command: تغيير
        return true;             // query: ترجيع نتيجة
    }
    return false;
}

// الاستدعاء غريب:
if (SetUsername("ibrahim"))
{
    // السؤال: هل "SetUsername" بتسأل ولا بتعمل؟
    // الاسم فعل (Set) لكن الاستخدام كأنه سؤال (if)
}`,
        },
        goodExample: {
          title: 'صح – command و query منفصلين',
          code: `// query: بس تسأل
public bool IsUsernameValid(string username)
{
    return !string.IsNullOrWhiteSpace(username)
        && username.Length >= 3
        && !_existingUsernames.Contains(username);
}

// command: بس تغيّر
public void SetUsername(string username)
{
    _username = username;
}

// الاستدعاء بقى طبيعي:
if (IsUsernameValid("ibrahim"))
{
    SetUsername("ibrahim");
}

// دلوقتي:
// - IsUsernameValid: query واضحة — ترجع true/false
// - SetUsername: command واضح — تغيّر الحالة بس
// - مفيش خلط بين السؤال والعمل`
        },
        explanation: `
        الدالة اللي بتعمل command + query مع بعض بتخلي الكود غامض:

        if (SetUsername("ibrahim"))
        {
            // الجملة دي بتتقرأ كأنها بتسأل سؤال ("لو الـ username اتظبط")
            // لكن هي فعليًا بتغيّر حاجة كمان (side effect).
        }

        المشاكل:
        1. الاسم فعل (Set)، لكن الاستخدام كأنه سؤال (if).
        2. مش واضح هل الدالة دائمًا بتغيّر، ولا بتغيّر بس لو الشرط اتحقق.
        3. صعب تعمل mock أو test.

        الحل: افصلهم.
        - Query: ترجع معلومة بس، بلا side effects.
        - Command: تعمل حاجة بس، بترجع void.

        القاعدة دي أساسية في Functional Programming وفي تصميم APIs نظيفة.
        `,
        tips: [
          'الـ query أسماءها تبدأ بـ is, has, can, should — وبترجع قيمة.',
          'الـ command أسماءها تبدأ بفعل — وبترجع void.',
          'لو لقيت if (setX(...))، ده signal إن الدالة بتخلط الاتنين.',
          'بعض الحالات الاستثنائية: Stack.Pop() بترجع وبتشيل — مقبولة لأنها convention معروف.'
        ]
      },

      // ============ 9. Prefer Exceptions ============
      {
        title: '٩. استخدم Exceptions بدل error codes',
        icon: 'fa-solid fa-triangle-exclamation',
        description: `
        استخدم exceptions بدل ما ترجع كود خطأ (زي -1 أو null).
        إرجاع error codes بيخلي الكود اللي بيستدعي مضطر يتحقق فورًا،
        وده بيخلق كود متداخل (nested) قبيح.
        `,
        badExample: {
          title: 'غلط – error codes بتعمل هرم متداخل',
          code: `// كل دالة بترجع E_OK أو E_ERROR
if (DeletePage(page) == E_OK)
{
    if (Registry.DeleteReference(page.Name) == E_OK)
    {
        if (ConfigKeys.DeleteKey(page.Name.MakeKey()) == E_OK)
        {
            logger.Log("page deleted");
        }
        else
        {
            logger.Log("configKey not deleted");
        }
    }
    else
    {
        logger.Log("deleteReference from registry failed");
    }
}
else
{
    logger.Log("delete failed");
    return E_ERROR;
}

// المشاكل:
// 1. الهرم المتداخل — صعب تقرأ
// 2. لازم تتحقق بعد كل استدعاء
// 3. الأخطاء بتضيع في التعشيش
// 4. مفيش تفاصيل عن سبب الخطأ (كله E_ERROR)`
        },
        goodExample: {
          title: 'صح – exceptions بتخلي الكود نضيف',
          code: `try
{
    DeletePage(page);
    Registry.DeleteReference(page.Name);
    ConfigKeys.DeleteKey(page.Name.MakeKey());

    logger.Log("page deleted");
}
catch (PageNotFoundException ex)
{
    logger.Log($"Page missing: {ex.Message}");
}
catch (RegistryException ex)
{
    logger.Log($"Registry error: {ex.Message}");
}
catch (Exception ex)
{
    logger.Log($"Unexpected error: {ex.Message}");
    throw;  // إعادة رمي الاستثناء
}

// الفوايد:
// 1. الـ happy path واضح ومفصول
// 2. الأخطاء بتتعامل في مكان واحد
// 3. كل exception ليه تفاصيل مفيدة
// 4. مش محتاج تتحقق بعد كل استدعاء`
        },
        explanation: `
        المشاكل في error codes:
        1. **الهرم المتداخل**: كل استدعاء بيحتاج if للتحقق.
        2. **صعب تقرأ**: الـ happy path متداخل مع الـ error handling.
        3. **مفيش تفاصيل**: "E_ERROR" مش بيقول إيه اللي حصل بالظبط.
        4. **سهل تنسى**: ممكن تنسى تتحقق، الـ bug يمر.

        المزايا في exceptions:
        1. **happy path نضيف**: الخطوات الأساسية في try block.
        2. **error handling في مكان واحد**: catch blocks.
        3. **تفاصيل غنية**: كل exception ليه رسالة ومعلومات.
        4. **مستحيل تنسى**: الاستثناء بيطلع لوحده.

        ملاحظة: الـ exception مش بديل عن الـ validation،
        ده complement ليه. استخدم الاتنين في مكانهم الصح.
        `,
        tips: [
          'الـ try block يفضل نضيف — الخطوات الأساسية بس.',
          'الـ catch blocks مخصوصة للتعامل مع الأخطاء.',
          'استخدم custom exceptions للـ domain errors.',
          'متستخدمش try/catch للـ control flow العادي — بس للاستثناءات الفعلية.'
        ]
      }
    ],

    quote: {
      text: `الدوال هي أول حاجة لازم تتقنها لو عايز تكتب كود نظيف.
             لو الدوال بتاعتك كويسة، نص الشغل خلص.`,
      author: 'Robert C. Martin (Uncle Bob) — الفصل الثالث'
    },

    keyTakeaways: [
      'الدوال لازم تكون صغيرة — 4 لـ 20 سطر بالكتير.',
      'الدالة تعمل حاجة واحدة بس — Do One Thing.',
      'كل الأسطر في نفس مستوى التجريد.',
      'الـ switch بيتدفن في factory، والباقي polymorphism.',
      'الأسماء الطويلة الواضحة أحسن من القصيرة الغامضة.',
      'أقل parameters ممكن — صفر أفضل من 3.',
      'متستخدمش boolean parameters — افصلهم لدالتين.',
      'Command أو Query — مش الاتنين مع بعض.',
      'استخدم exceptions بدل error codes — الكود بيبقى أنضف.'
    ],

    references: [
      'Clean Code — الفصل الثالث: Functions — Robert C. Martin',
      'Refactoring — الفصل السادس: Composing Methods — Martin Fowler',
      'Code Complete — الفصل السابع: High-Quality Routines — Steve McConnell'
    ],

    hashtags: [
      'CleanCode',
      'Functions',
      'SoftwareEngineering',
      'Refactoring',
      'BestPractices',
      'UncleBob',
      'DotNet',
      'CSharp',
      'ChatterHub'
    ]
  };
}