import type { ICleanCodeContent } from '../../../../shared-components/shared-code/shared-code.component';

export interface CleanCodeEntry {
    id: string;
    slug: string;
    projectName: string;
    projectDescription: string;
    projectDate: string;
    projectVersion: string;
    projectTags: string[];
    cleanCodeContent: ICleanCodeContent;
}

export const CLEAN_CODE_ENTRIES: Record<string, CleanCodeEntry> = {

    /* ═══════════════════════════════════════════════════════════════
       CHAPTER 1 — From Messy to Maintainable
       ═══════════════════════════════════════════════════════════════ */
    'clean-code-01': {
        id: 'clean-code-01',
        slug: 'clean-code-01',
        projectName: 'الكود النظيف – من الفوضى إلى الصيانة السهلة',
        projectDescription: `دليل عملي لمبادئ الكود النظيف مع أمثلة حقيقية عبر C#, TypeScript, JavaScript, EF Core, ASP.NET Core, SQL و LINQ.`,
        projectDate: 'آخر تحديث: 12 أكتوبر 2026',
        projectVersion: 'v2.0.0',
        projectTags: ['Clean Code', 'Software Engineering', 'CSharp', 'TypeScript', 'JavaScript', 'EFCore', 'ASPNet', 'SQL', 'LINQ'],
        cleanCodeContent: {
            introduction: `
الكود النظيف مش عن إنك تكتب كود شاطر أو معقد — هو عن إنك تكتب كود
البشر التانيين (وأنت نفسك بعد شهور) يقدروا يقرأوه ويفهموه ويعدّلوا فيه
من غير خوف.

في الدليل ده، هنمشي على أهم المبادئ من كتاب "Clean Code"
مع أمثلة حقيقية من 4 بيئات مختلفة:
- C# / .NET
- TypeScript / Angular
- JavaScript
- EF Core / ASP.NET Core
- SQL / LINQ

كل مبدأ هيبان عندك بـ "قبل وبعد" وبعدين samples بـ languages مختلفة
عشان تشوف نفس الفكرة بتتطبق إزاي في كل بيئة.
      `,

            story: `
فتحت ملف كود كنت كاتبه من كام شهر عشان أضيف فيه حاجة بسيطة.

قعدت أول عشر دقايق مش بعمل حاجة غير إني بحاول أفهم أنا نفسي كنت فاكر إيه
وأنا بكتب السطور دي. متغيرات اسمها x و temp و data2،
ودالة واحدة طولها فوق المية سطر وبتعمل كذا حاجة في نفس الوقت.

قفلت الملف، وفتحت كتاب Clean Code لـ Uncle Bob.

أول فكرة قابلتني كانت بسيطة:
الكود بيتقرأ أكتر بكتير مما بيتكتب.

وفيه تشبيه فضل في دماغي:
الكود المتلخبط زي إنك تمشي في مستنقع.
والكود المرتب زي طريق ممهد.

رجعت للملف، وطبقت Boy Scout Rule:
"سيب المكان أنظف مما لقيته."
      `,

            principles: [
                {
                    title: 'الأسماء المعبّرة (Meaningful Names)',
                    icon: 'fa-solid fa-tag',
                    description: `
الاسم لازم يوضّح النية. الاسم الكويس بيقولك الحاجة دي موجودة ليه،
وبتعمل إيه، وبتُستخدم إزاي — من غير ما تحتاج تعليق يشرحها.
          `,
                    badExample: {
                        title: 'غلط – أسماء غامضة',
                        code: `function calc(d, x) {
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
في المثال الصح، الاسم نفسه بيشرح كل حاجة.

قاعدة مهمة: لو محتاج تعليق يشرح الاسم، يبقى الاسم غلط.
          `,
                    tips: [
                        'استخدم أسماء تنطقها بسهولة.',
                        'ابعد عن الأسماء بحرف واحد إلا لو عداد loop صغير.',
                        'استخدم أسماء قابلة للبحث.',
                        'الكلاسات = أسماء، الدوال = أفعال.'
                    ],
                    samples: [
                        {
                            label: 'UserService.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class UserService {
  calculateFinalPrice(basePrice: number, quantity: number): number {
    const subtotal = basePrice * quantity;
    const taxAmount = subtotal * TAX_RATE;
    return subtotal - taxAmount;
  }

  registerUser(user: User): void {
    this.repo.save(user);
  }
}`
                        },
                        {
                            label: 'UserService.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export class UserService {
  calculateFinalPrice(basePrice, quantity) {
    const subtotal = basePrice * quantity;
    const taxAmount = subtotal * TAX_RATE;
    return subtotal - taxAmount;
  }

  registerUser(user) {
    this.repo.save(user);
  }
}`
                        },
                        {
                            label: 'UserService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class UserService
{
    private readonly IUserRepository _repository;

    public UserService(IUserRepository repository)
        => _repository = repository;

    public decimal CalculateFinalPrice(decimal basePrice, int quantity)
    {
        var subtotal = basePrice * quantity;
        var taxAmount = subtotal * TaxRate;
        return subtotal - taxAmount;
    }

    public void RegisterUser(User user)
        => _repository.Save(user);
}`
                        },
                        {
                            label: 'UserRepository.cs',
                            language: 'csharp',
                            framework: 'EF Core',
                            code: `public class UserRepository : IUserRepository
{
    private readonly AppDbContext _context;

    public UserRepository(AppDbContext context)
        => _context = context;

    public async Task<User> FindByEmailAsync(string email)
    {
        return await _context.Users
            .AsNoTracking()
            .FirstOrDefaultAsync(u => u.Email == email);
    }

    public void Save(User user)
    {
        _context.Users.Add(user);
        _context.SaveChanges();
    }
}`
                        },
                        {
                            label: 'UsersController.cs',
                            language: 'csharp',
                            framework: 'ASP.NET Core',
                            code: `[ApiController]
[Route("api/users")]
public class UsersController : ControllerBase
{
    private readonly UserService _userService;

    public UsersController(UserService userService)
        => _userService = userService;

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterUserDto dto)
    {
        var user = new User(dto.Email, dto.Name);
        await _userService.RegisterUserAsync(user);
        return Ok(new { userId = user.Id });
    }
}`
                        },
                        {
                            label: 'users.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `SELECT
    u.Id,
    u.Name,
    u.Email,
    COUNT(o.Id) AS TotalOrders,
    SUM(o.Total) AS LifetimeValue
FROM Users AS u
LEFT JOIN Orders AS o ON o.UserId = u.Id
WHERE u.IsActive = 1
    AND u.Email LIKE '%@example.com'
GROUP BY
    u.Id,
    u.Name,
    u.Email
ORDER BY LifetimeValue DESC;`
                        },
                        {
                            label: 'UserQueries.cs',
                            language: 'csharp',
                            framework: 'LINQ',
                            code: `var activeUsers = users
    .Where(u => u.IsActive)
    .Where(u => u.Email.EndsWith("@example.com"))
    .Select(u => new
    {
        u.Id,
        u.Name,
        u.Email,
        TotalOrders = u.Orders.Count(),
        LifetimeValue = u.Orders.Sum(o => o.Total)
    })
    .OrderByDescending(u => u.LifetimeValue)
    .ToList();`
                        }
                    ]
                },

                {
                    title: 'الدوال الصغيرة (Small Functions)',
                    icon: 'fa-solid fa-cubes',
                    description: `
الدوال لازم تكون صغيرة. صغيرة جداً.
المفروض تعمل حاجة واحدة، تعملها صح، ومتعملش غيرها.
          `,
                    badExample: {
                        title: 'غلط – دالة عملاقة واحدة',
                        code: `public void ProcessOrder(Order order)
{
    if (!order.Items.Any()) throw new Exception("Empty");
    if (order.Customer == null) throw new Exception("No customer");

    decimal total = 0;
    foreach (var item in order.Items)
        total += item.Price * item.Quantity;
    total *= 1.15m;

    _context.Orders.Add(order);
    _context.SaveChanges();

    _emailService.Send(order.Customer.Email, "Order confirmed", total);
    _logger.Log($"Order processed: {order.Id}");
}`
                    },
                    goodExample: {
                        title: 'صح – مقسّمة لدوال صغيرة',
                        code: `public void ProcessOrder(Order order)
{
    ValidateOrder(order);
    var total = CalculateOrderTotal(order);
    SaveOrder(order);
    SendConfirmationEmail(order, total);
    LogOrderProcessed(order);
}

private void ValidateOrder(Order order)
{
    if (!order.Items.Any()) throw new ArgumentException("Empty order");
    if (order.Customer == null) throw new ArgumentException("No customer");
}

private decimal CalculateOrderTotal(Order order)
{
    var subtotal = order.Items.Sum(i => i.Price * i.Quantity);
    return subtotal * (1 + TaxRate);
}

private void SaveOrder(Order order) { /* ... */ }
private void SendConfirmationEmail(Order order, decimal total) { /* ... */ }
private void LogOrderProcessed(Order order) { /* ... */ }`
                    },
                    explanation: `
الدالة الغلط فيها 5 مسؤوليات مختلفة متكدّسة فوق بعض.
النسخة الصح فيها دالة رئيسية بتتقرأ زي فهرس كتاب.

دلوقتي لو حصل bug في حساب الضريبة، تروح على طول على
CalculateOrderTotal — من غير ما تعمل scroll في 40 سطر مالهم علاقة.
          `,
                    tips: [
                        'الدالة لازم تاخد شاشة واحدة.',
                        'لو محتاج تكتب "and" عشان توصف الدالة، يبقى بتعمل كتير.',
                        'طلع أي بلوك محتاج تعليق لدالة مستقلة.',
                        'مستوى تجريد واحد جوه كل دالة.'
                    ],
                    samples: [
                        {
                            label: 'order.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class OrderService {
  processOrder(order: Order): void {
    this.validateOrder(order);
    const total = this.calculateOrderTotal(order);
    this.saveOrder(order);
    this.sendConfirmationEmail(order, total);
  }

  private validateOrder(order: Order): void {
    if (!order.items.length) throw new Error('Empty order');
    if (!order.customer) throw new Error('No customer');
  }

  private calculateOrderTotal(order: Order): number {
    const subtotal = order.items.reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    );
    return subtotal * (1 + TAX_RATE);
  }

  private saveOrder(order: Order): void {
    this.repo.save(order);
  }

  private sendConfirmationEmail(order: Order, total: number): void {
    this.email.send(order.customer.email, 'Order confirmed', total);
  }
}`
                        },
                        {
                            label: 'order.service.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export class OrderService {
  processOrder(order) {
    this.validateOrder(order);
    const total = this.calculateOrderTotal(order);
    this.saveOrder(order);
    this.sendConfirmationEmail(order, total);
  }

  validateOrder(order) {
    if (!order.items.length) throw new Error('Empty order');
    if (!order.customer) throw new Error('No customer');
  }

  calculateOrderTotal(order) {
    const subtotal = order.items.reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    );
    return subtotal * (1 + this.taxRate);
  }
}`
                        },
                        {
                            label: 'order.repository.ts',
                            language: 'typescript',
                            framework: 'Angular + HttpClient',
                            code: `@Injectable({ providedIn: 'root' })
export class OrderRepository {
  constructor(private http: HttpClient) {}

  save(order: Order): Observable<void> {
    return this.http.post<void>('/api/orders', order);
  }

  findById(id: number): Observable<Order> {
    return this.http.get<Order>(\`/api/orders/\${id}\`);
  }
}`
                        },
                        {
                            label: 'OrderQueries.cs',
                            language: 'csharp',
                            framework: 'LINQ',
                            code: `public async Task<IEnumerable<OrderSummary>> GetSummariesAsync(int userId)
{
    var orders = await _context.Orders
        .AsNoTracking()
        .Where(o => o.UserId == userId)
        .Select(o => new OrderSummary(
            o.Id,
            o.Status,
            o.Items.Sum(i => i.Price * i.Quantity)))
        .ToListAsync();

    return orders;
}`
                        },
                        {
                            label: 'orders.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `SELECT
    o.Id,
    o.Status,
    SUM(oi.Price * oi.Quantity) AS Total
FROM Orders AS o
JOIN OrderItems AS oi ON oi.OrderId = o.Id
WHERE o.UserId = @UserId
GROUP BY
    o.Id,
    o.Status
ORDER BY o.Id DESC;`
                        }
                    ]
                },

                {
                    title: 'مبدأ المسؤولية الواحدة (SRP)',
                    icon: 'fa-solid fa-bullseye',
                    description: `
الكلاس (أو الموديول أو الملف) لازم يكون له سبب واحد بس للتغيير.
لو لقيت نفسك بتعدّل الكلاس لسببين مختلفين تماماً، يبقى بيعمل كتير.
          `,
                    badExample: {
                        title: 'غلط – كلاس بيعمل كل حاجة',
                        code: `public class User
{
    public string Name { get; set; }
    public string Email { get; set; }

    public void SaveToDatabase() { /* SQL */ }
    public void SendWelcomeEmail() { /* SMTP */ }
    public void GenerateReport() { /* PDF */ }
    public bool ValidateEmail() { /* regex */ }
}`
                    },
                    goodExample: {
                        title: 'صح – مسؤوليات مفصولة',
                        code: `public class User
{
    public string Name { get; set; }
    public string Email { get; set; }
}

public class UserRepository
{
    public void Save(User user) { /* SQL */ }
}

public class EmailService
{
    public void SendWelcomeEmail(User user) { /* SMTP */ }
}

public class UserReportGenerator
{
    public void Generate(User user) { /* PDF */ }
}

public static class EmailValidator
{
    public static bool IsValid(string email) => /* regex */ true;
}`
                    },
                    explanation: `
في النسخة الغلط، تغيير template الإيميل بيجبرك تعدّل نفس الملف اللي فيه
كود قاعدة البيانات. ده خطر — تعديل واحد ممكن يكسر حاجة مالها علاقة.

في النسخة الصح، كل كلاس له وظيفة واحدة.
          `,
                    tips: [
                        'اسأل: "مين المسؤول عن التغيير ده؟"',
                        'كلاسات صغيرة بأسماء واضحة بتكون أسهل في الاختبار.',
                        'الـ SRP بينطبق على كل المستويات.'
                    ],
                    samples: [
                        {
                            label: 'user.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class User {
  constructor(public name: string, public email: string) {}
}

export class UserRepository {
  save(user: User): void { /* ... */ }
}

export class EmailService {
  sendWelcomeEmail(user: User): void { /* ... */ }
}

export class UserReportGenerator {
  generate(user: User): void { /* ... */ }
}

export class EmailValidator {
  static isValid(email: string): boolean {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  }
}`
                        },
                        {
                            label: 'user.model.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

export class UserRepository {
  save(user) { /* ... */ }
}

export class EmailService {
  sendWelcomeEmail(user) { /* ... */ }
}`
                        },
                        {
                            label: 'UserRepository.cs',
                            language: 'csharp',
                            framework: 'EF Core',
                            code: `public class UserRepository : IUserRepository
{
    private readonly AppDbContext _context;

    public UserRepository(AppDbContext context)
        => _context = context;

    public async Task SaveAsync(User user)
    {
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
    }
}

public class EmailService : IEmailService
{
    private readonly SmtpClient _smtp;

    public async Task SendWelcomeEmailAsync(User user)
    {
        await _smtp.SendMailAsync(new MailMessage(
            from: "noreply@app.com",
            to: user.Email,
            subject: "Welcome",
            body: $"Welcome {user.Name}!"));
    }
}`
                        },
                        {
                            label: 'UserController.cs',
                            language: 'csharp',
                            framework: 'ASP.NET Core',
                            code: `[ApiController]
[Route("api/users")]
public class UsersController : ControllerBase
{
    private readonly IUserRepository _repo;
    private readonly IEmailService _email;

    public UsersController(IUserRepository repo, IEmailService email)
    {
        _repo = repo;
        _email = email;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] User user)
    {
        await _repo.SaveAsync(user);
        await _email.SendWelcomeEmailAsync(user);
        return CreatedAtAction(nameof(Create), new { id = user.Id }, user);
    }
}`
                        },
                        {
                            label: 'users.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `CREATE TABLE Users (
    Id INT IDENTITY PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(255) NOT NULL UNIQUE,
    CreatedAt DATETIME2 DEFAULT SYSUTCDATETIME()
);

CREATE INDEX IX_Users_Email ON Users (Email);`
                        }
                    ]
                },

                {
                    title: 'التعليقات – امتى نستخدمها؟',
                    icon: 'fa-solid fa-comment-slash',
                    description: `
التعليقات مش حاجة كويسة بشكل تلقائي.
التعليق المفروض يشرح "ليه" — النية وراء قرار مش واضح.
          `,
                    badExample: {
                        title: 'غلط – تعليق بيشرح حاجة واضحة',
                        code: `// زوّد i بواحد
i++;

// اتأكد إن المستخدم بالغ
if (user.age >= 18) {
  // اسمح بالدخول
  allowAccess();
}`
                    },
                    goodExample: {
                        title: 'صح – الكود بيتكلم، والتعليق يشرح "ليه"',
                        code: `i++;

const ADULT_AGE = 18;

if (user.age >= ADULT_AGE) {
  allowAccess();
}

// ليه: بنتجاهل إيميلات الأحد عشان مانغرقش
// المستخدمين خلال الويكند.
if (today.getDay() !== 0) {
  sendNewsletter(user);
}`
                    },
                    explanation: `
التعليقات الغلط بتكرر اللي الكود بيقوله أصلاً.
التعليق الصح بيشرح قاعدة business مش واضحة.
          `,
                    tips: [
                        'فضّل الكود الواضح على التعليق اللي بيشرح.',
                        'استخدم التعليقات لـ "ليه" بس.',
                        'متسيبش كود متعلّق — استخدم Git.'
                    ],
                    samples: [
                        {
                            label: 'newsletter.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class NewsletterService {
  sendDailyNewsletter(user: User): void {
    // ليه: بنتجاهل إيميلات الأحد عشان مانغرقش
    // المستخدمين خلال الويكند.
    if (new Date().getDay() !== 0) {
      this.email.send(user.email, this.buildNewsletter());
    }
  }
}`
                        },
                        {
                            label: 'newsletter.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `function sendDailyNewsletter(user) {
  // ليه: بنتجاهل إيميلات الأحد عشان مانغرقش
  // المستخدمين خلال الويكند.
  if (new Date().getDay() !== 0) {
    emailClient.send(user.email, buildNewsletter());
  }
}`
                        },
                        {
                            label: 'NewsletterService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class NewsletterService
{
    public void SendDailyNewsletter(User user)
    {
        // ليه: بنتجاهل إيميلات الأحد عشان مانغرقش
        // المستخدمين خلال الويكند.
        if (DateTime.UtcNow.DayOfWeek != DayOfWeek.Sunday)
        {
            _email.Send(user.Email, BuildNewsletter());
        }
    }
}`
                        },
                        {
                            label: 'subscriptions.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- ليه: استثنينا الأحد عشان الـ business rule
-- بتاعت الشركة بتمنع إرسال النشرة في الويكند.
SELECT u.Id, u.Email
FROM Users AS u
WHERE u.IsSubscribed = 1
    AND DATENAME(WEEKDAY, GETUTCDATE()) <> 'Sunday';`
                        }
                    ]
                },

                {
                    title: 'DRY – متكررش نفسك',
                    icon: 'fa-solid fa-clone',
                    description: `
كل قطعة معرفة لازم يكون لها تمثيل واحد موثوق في الكودبيز.
التكرار هو أصل كل الشرور لما المتطلبات تتغير.
          `,
                    badExample: {
                        title: 'غلط – منطق منسوخ ومكرر',
                        code: `public decimal GetAdminDiscount(decimal price)
    => price - price * 0.20m;

public decimal GetVipDiscount(decimal price)
    => price - price * 0.20m;

public decimal GetStaffDiscount(decimal price)
    => price - price * 0.20m;`
                    },
                    goodExample: {
                        title: 'صح – مصدر واحد للحقيقة',
                        code: `public const decimal DiscountRate = 0.20m;

public decimal ApplyDiscount(decimal price, decimal rate = DiscountRate)
    => price - price * rate;

public decimal GetAdminDiscount(decimal p) => ApplyDiscount(p);
public decimal GetVipDiscount(decimal p)   => ApplyDiscount(p);
public decimal GetStaffDiscount(decimal p) => ApplyDiscount(p);`
                    },
                    explanation: `
التكرار مش عن الحروف — هو عن المعرفة.
لو نفس قاعدة الـ business موجودة في 3 أماكن، يبقى عندك 3 bugs مستقبلية.
          `,
                    tips: [
                        'تلات سطور متشابهة؟ عادي. تلات دوال متشابهة؟ استخرجهم.',
                        'الثوابت بتلغي التكرار.',
                        'خد بالك من التكرار العَرَضي.'
                    ],
                    samples: [
                        {
                            label: 'discount.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `const DISCOUNT_RATE = 0.20;

export function applyDiscount(price: number, rate = DISCOUNT_RATE): number {
  return price - price * rate;
}

export const getAdminDiscount = (p: number) => applyDiscount(p);
export const getVipDiscount   = (p: number) => applyDiscount(p);
export const getStaffDiscount = (p: number) => applyDiscount(p);`
                        },
                        {
                            label: 'discount.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `const DISCOUNT_RATE = 0.20;

function applyDiscount(price, rate = DISCOUNT_RATE) {
  return price - price * rate;
}

const getAdminDiscount = (p) => applyDiscount(p);
const getVipDiscount   = (p) => applyDiscount(p);
const getStaffDiscount = (p) => applyDiscount(p);`
                        },
                        {
                            label: 'DiscountCalculator.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public static class DiscountCalculator
{
    public const decimal DiscountRate = 0.20m;

    public static decimal Apply(decimal price, decimal rate = DiscountRate)
        => price - price * rate;
}

public static class Discounts
{
    public static decimal ForAdmin(decimal p) => DiscountCalculator.Apply(p);
    public static decimal ForVip(decimal p)   => DiscountCalculator.Apply(p);
    public static decimal ForStaff(decimal p) => DiscountCalculator.Apply(p);
}`
                        },
                        {
                            label: 'pricing.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- بدل ما تكرر الـ magic number في كل query، عرّفه مرة واحدة
DECLARE @DiscountRate DECIMAL(4, 2) = 0.20;

SELECT
    p.Id,
    p.Name,
    p.BasePrice,
    p.BasePrice - (p.BasePrice * @DiscountRate) AS FinalPrice
FROM Products AS p
WHERE p.IsOnDiscount = 1;`
                        }
                    ]
                },

                {
                    title: 'التعامل مع الأخطاء (Error Handling)',
                    icon: 'fa-solid fa-shield-halved',
                    description: `
التعامل مع الأخطاء لازم يكون نضيف ومفصول عن الـ happy path.
          `,
                    badExample: {
                        title: 'غلط – تعامل ملخبط مع الأخطاء',
                        code: `public User GetUser(int id)
{
    try
    {
        var user = _db.Find(id);
        if (user == null) return null;

        try
        {
            var orders = _api.GetOrders(user.Id);
            if (orders == null) return null;

            return user;
        }
        catch { return null; }
    }
    catch { return null; }
}`
                    },
                    goodExample: {
                        title: 'صح – استثناءات + happy path نضيف',
                        code: `public User GetUser(int id)
{
    var user = _db.Find(id);
    if (user == null)
        throw new UserNotFoundException(id);

    return user;
}

public class UserNotFoundException : Exception
{
    public UserNotFoundException(int id)
        : base($"User with id {id} was not found.") { }
}

// الاستخدام:
try
{
    var user = GetUser(42);
}
catch (UserNotFoundException ex)
{
    _logger.LogWarning(ex.Message);
}`
                    },
                    explanation: `
إنك ترجّع null في كل حاجة كذبة — بتخفي سبب الفشل.
إنك ترمي أخطاء typed ده أصدق.
          `,
                    tips: [
                        'ارمي أخطاء معبّرة، ماترجّعش null.',
                        'استخدم كلاسات أخطاء محددة.',
                        'عمرك ما تبلع الاستثناءات.'
                    ],
                    samples: [
                        {
                            label: 'user.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class UserNotFoundError extends Error {
  constructor(id: number) {
    super(\`User with id \${id} was not found.\`);
    this.name = 'UserNotFoundError';
  }
}

export class UserService {
  getUser(id: number): User {
    const user = this.repo.findById(id);
    if (!user) throw new UserNotFoundError(id);
    return user;
  }
}`
                        },
                        {
                            label: 'user.service.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export class UserNotFoundError extends Error {
  constructor(id) {
    super(\`User with id \${id} was not found.\`);
    this.name = 'UserNotFoundError';
  }
}

export class UserService {
  getUser(id) {
    const user = this.repo.findById(id);
    if (!user) throw new UserNotFoundError(id);
    return user;
  }
}`
                        },
                        {
                            label: 'UserService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class UserNotFoundException : Exception
{
    public UserNotFoundException(int id)
        : base($"User with id {id} was not found.") { }
}

public class UserService
{
    private readonly IUserRepository _repo;

    public UserService(IUserRepository repo) => _repo = repo;

    public User GetUser(int id)
    {
        var user = _repo.Find(id);
        if (user == null)
            throw new UserNotFoundException(id);
        return user;
    }
}`
                        },
                        {
                            label: 'UsersController.cs',
                            language: 'csharp',
                            framework: 'ASP.NET Core',
                            code: `[ApiController]
[Route("api/users")]
public class UsersController : ControllerBase
{
    private readonly UserService _service;

    public UsersController(UserService service) => _service = service;

    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
        try
        {
            var user = _service.GetUser(id);
            return Ok(user);
        }
        catch (UserNotFoundException ex)
        {
            return NotFound(new { error = ex.Message });
        }
    }
}`
                        },
                        {
                            label: 'GetUserOrders.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- بدل ما ترجّع NULL عشوائي، رمي error مع رسالة واضحة
IF NOT EXISTS (SELECT 1 FROM Users WHERE Id = @UserId)
BEGIN
    THROW 50001, 'User not found', 1;
END

SELECT Id, Name, Email
FROM Users
WHERE Id = @UserId;`
                        }
                    ]
                },

                {
                    title: 'قاعدة الكشاف (The Boy Scout Rule)',
                    icon: 'fa-solid fa-tree',
                    description: `
"سيب المكان أنظف مما لقيته."
كل مرة تلمس ملف، سيبه أحسن شوية من قبل.
          `,
                    badExample: {
                        title: 'غلط – تجاهل الفوضى الصغيرة',
                        code: `public class ReportService
{
    public List<Report> fix()
    {
        var d = getData();
        var tmp = d.Where(x2 => x2.Active).ToList();
        return tmp;
    }
}`
                    },
                    goodExample: {
                        title: 'صح – تحسينات صغيرة وأنت هناك',
                        code: `public class ReportService
{
    public List<Report> GetActiveReports()
    {
        var reports = _repository.GetAll();
        return reports.Where(report => report.IsActive).ToList();
    }
}`
                    },
                    explanation: `
مش محتاج إذن عشان تحسّن الكود.
تنظيف واحد صغير لكل ملف بتلمسه = الكودبيز بيتحسّن كل يوم.
          `,
                    tips: [
                        'غيّر اسم متغير واحد مش واضح كل مرة.',
                        'امسح بلوك كود متعلّق واحد كل ملف.',
                        'عمرك ما تعمل rewrite للملف كله.'
                    ],
                    samples: [
                        {
                            label: 'report.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class ReportService {
  getActiveReports(): Report[] {
    const reports = this.repository.getAll();
    return reports.filter(report => report.isActive);
  }
}`
                        },
                        {
                            label: 'report.service.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export class ReportService {
  getActiveReports() {
    const reports = this.repository.getAll();
    return reports.filter(report => report.isActive);
  }
}`
                        },
                        {
                            label: 'ReportRepository.cs',
                            language: 'csharp',
                            framework: 'EF Core',
                            code: `public class ReportRepository
{
    private readonly AppDbContext _context;

    public ReportRepository(AppDbContext context)
        => _context = context;

    public async Task<List<Report>> GetActiveAsync()
    {
        return await _context.Reports
            .Where(report => report.IsActive)
            .ToListAsync();
    }
}`
                        },
                        {
                            label: 'reports.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- بدل ما تكرر WHERE IsActive = 1 في كل مكان،
-- خليها view واضحة
CREATE VIEW ActiveReports AS
SELECT Id, Title, Content, CreatedAt
FROM Reports
WHERE IsActive = 1;

-- الاستخدام بقى أنضف:
SELECT * FROM ActiveReports;`
                        },
                        {
                            label: 'ReportQueries.cs',
                            language: 'csharp',
                            framework: 'LINQ',
                            code: `var activeReports = reports
    .Where(r => r.IsActive)
    .OrderByDescending(r => r.CreatedAt)
    .Select(r => new ReportDto
    {
        Id = r.Id,
        Title = r.Title,
        CreatedAt = r.CreatedAt
    })
    .ToList();`
                        }
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
                'التعليقات تشرح "ليه" مش "إيه".',
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
                'CSharp',
                'TypeScript',
                'JavaScript',
                'EFCore',
                'ASPNet',
                'SQL',
                'LINQ'
            ]
        }
    },

    /* ═══════════════════════════════════════════════════════════════
       CHAPTER 2 — Meaningful Names
       ═══════════════════════════════════════════════════════════════ */
    'clean-code-02': {
        id: 'clean-code-02',
        slug: 'clean-code-02',
        projectName: 'الأسماء المعبّرة – أول خطوة نحو كود نظيف',
        projectDescription: `رحلة عملية مع فصل "Meaningful Names" من كتاب Clean Code لـ Uncle Bob، بأمثلة عبر 7 بيئات برمجية.`,
        projectDate: 'آخر تحديث: 12 أكتوبر 2026',
        projectVersion: 'v2.0.0',
        projectTags: ['Clean Code', 'MeaningfulNames', 'BestPractices', 'CSharp', 'TypeScript', 'JavaScript', 'EFCore', 'ASPNet', 'SQL', 'LINQ'],
        cleanCodeContent: {
            introduction: `
الأسماء هي أكتر حاجة بتظهر في أي كود.
لو الأسماء وحشة، الكود بيبقى صعب حتى لو المنطق نفسه سليم.

في الجزء ده هنمشي على 5 قواعد أساسية لاختيار الأسماء،
كل واحدة مع أمثلة من 7 بيئات مختلفة.
      `,

            story: `
كنت براجع pull request لزميل، ولقيت method اسمها GetThem
وبترجع List<int[]>.

قعدت أقرا جوه الميثود عشان أفهم هي بترجع إيه بالظبط.
لقيت جوه loop بيفحص x[0] == 4 وبيضيف النتيجة لـ list1.
مفهمتش حاجة من غير ما أفتح الملف اللي نادى على الميثود دي.

أول حاجة اتعلمتها: الاسم لازم يقول ليه المتغير موجود
من غير ما تحتاج comment.

رجعت لميثود GetThem بنفس المنطق ده:
- GetFlaggedCells() بترجع List<Cell>
- gameBoard بدل list غامض
- cell.IsFlagged بدل x[0] == 4
- flaggedCells بدل list1
      `,

            principles: [
                {
                    title: '١. الاسم لازم يقول النية (Reveal Intent)',
                    icon: 'fa-solid fa-bullseye',
                    description: `
الاسم لازم يجاوب على 3 أسئلة من غير ما تحتاج تفتح كود تاني:
- المتغير ده موجود ليه؟
- بيعمل إيه؟
- بيتستخدم إزاي؟
          `,
                    badExample: {
                        title: 'غلط – الاسم مالوش معنى',
                        code: `int d = 0;
List<int[]> list1 = new();
int x = 4;

List<int[]> GetThem()
{
    var result = new List<int[]>();
    foreach (var item in gameBoard)
    {
        if (item[0] == 4) result.Add(item);
    }
    return result;
}`
                    },
                    goodExample: {
                        title: 'صح – الاسم نفسه بيشرح الغرض',
                        code: `int elapsedTimeInDays = 0;
List<Cell> flaggedCells = new();
const int FLAGGED = 4;

IEnumerable<Cell> GetFlaggedCells()
{
    return gameBoard.Where(cell => cell.IsFlagged);
}`
                    },
                    explanation: `
في المثال الغلط، لازم تقرا الكود كله عشان تفهم.
في المثال الصح، كل اسم لوحده بيقولك قصته.
          `,
                    tips: [
                        'لو محتاج comment يشرح اسم، غيّر الاسم.',
                        'اسم المتغير يوصف "إيه ده".',
                        'الدالة تبدأ بفعل: get, set, save.',
                        'الكلاس يبقى اسم: User, Order.'
                    ],
                    samples: [
                        {
                            label: 'game-board.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export interface Cell {
  isFlagged: boolean;
  x: number;
  y: number;
}

export class GameBoard {
  getFlaggedCells(): Cell[] {
    return this.cells.filter(cell => cell.isFlagged);
  }
}`
                        },
                        {
                            label: 'game-board.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export class GameBoard {
  getFlaggedCells() {
    return this.cells.filter(cell => cell.isFlagged);
  }
}`
                        },
                        {
                            label: 'GameBoard.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class GameBoard
{
    private readonly List<Cell> _cells = new();

    public IEnumerable<Cell> GetFlaggedCells()
        => _cells.Where(cell => cell.IsFlagged);

    public const int Flagged = 4;
}

public class Cell
{
    public bool IsFlagged { get; set; }
    public int X { get; set; }
    public int Y { get; set; }
}`
                        },
                        {
                            label: 'GameBoardRepository.cs',
                            language: 'csharp',
                            framework: 'EF Core',
                            code: `public class GameBoardRepository
{
    private readonly AppDbContext _context;

    public GameBoardRepository(AppDbContext context)
        => _context = context;

    public async Task<IEnumerable<Cell>> GetFlaggedCellsAsync(int boardId)
    {
        return await _context.Cells
            .AsNoTracking()
            .Where(c => c.BoardId == boardId && c.IsFlagged)
            .ToListAsync();
    }
}`
                        },
                        {
                            label: 'GameBoardController.cs',
                            language: 'csharp',
                            framework: 'ASP.NET Core',
                            code: `[ApiController]
[Route("api/boards")]
public class GameBoardController : ControllerBase
{
    private readonly GameBoardRepository _repo;

    public GameBoardController(GameBoardRepository repo)
        => _repo = repo;

    [HttpGet("{id}/flagged-cells")]
    public async Task<IActionResult> GetFlaggedCells(int id)
    {
        var cells = await _repo.GetFlaggedCellsAsync(id);
        return Ok(cells);
    }
}`
                        },
                        {
                            label: 'flagged-cells.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `SELECT
    c.Id,
    c.BoardId,
    c.X,
    c.Y,
    c.IsFlagged
FROM Cells AS c
WHERE c.BoardId = @BoardId
    AND c.IsFlagged = 1
ORDER BY c.X, c.Y;`
                        },
                        {
                            label: 'GameBoardQueries.cs',
                            language: 'csharp',
                            framework: 'LINQ',
                            code: `var flaggedCells = cells
    .Where(c => c.BoardId == boardId)
    .Where(c => c.IsFlagged)
    .OrderBy(c => c.X)
    .ThenBy(c => c.Y)
    .Select(c => new CellDto
    {
        Id = c.Id,
        X = c.X,
        Y = c.Y
    })
    .ToList();`
                        }
                    ]
                },

                {
                    title: '٢. متستخدمش أسماء موهمة (Avoid Disinformation)',
                    icon: 'fa-solid fa-triangle-exclamation',
                    description: `
الاسم لازم يوصف الحقيقة، مش يضلّل القارئ.
          `,
                    badExample: {
                        title: 'غلط – أسماء بتضلّل',
                        code: `// اسم بيقول List لكن مش List
var accountList = new { Owner = "Ali", Balance = 500 };

// اسمين شبه بعض جداً
class UserService { }
class UserServices { }

// اسم بيوهم بشيء مش موجود
int customerData = 42;

// اسم بيقول إنه collection
string orderItems = "item-001";`
                    },
                    goodExample: {
                        title: 'صح – أسماء بتوصف الحقيقة',
                        code: `var account = new { Owner = "Ali", Balance = 500 };

class UserAuthenticator { }
class UserProfileManager { }

int customerId = 42;

string orderItemId = "item-001";`
                    },
                    explanation: `
أشهر غلطة: تسمي حاجة بـ List وهي مش List.
تاني غلطة: أسماء شبه بعضها جداً.
          `,
                    tips: [
                        'لو مش List، متسميهاش List.',
                        'متستخدمش أسماء شبه بعضها بفرق حرف.',
                        'خليك دقيق: عدد صح؟ Id؟ Index؟'
                    ],
                    samples: [
                        {
                            label: 'account.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export interface Account {
  owner: string;
  balance: number;
}

export interface Customer {
  customerId: number;
}

export class UserAuthenticator { }
export class UserProfileManager { }`
                        },
                        {
                            label: 'account.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export class UserAuthenticator { }
export class UserProfileManager { }

const customerId = 42;
const orderItemId = 'item-001';`
                        },
                        {
                            label: 'Account.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class Account
{
    public string Owner { get; set; }
    public decimal Balance { get; set; }
}

public class Customer
{
    public int CustomerId { get; set; }
}

public class UserAuthenticator { }
public class UserProfileManager { }`
                        },
                        {
                            label: 'accounts.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- سمّي الأعمدة على حقيقتها
CREATE TABLE Accounts (
    Id INT IDENTITY PRIMARY KEY,
    OwnerName NVARCHAR(100) NOT NULL,
    Balance DECIMAL(18, 2) NOT NULL,
    CustomerId INT NOT NULL
);

-- بدل ما تسمي عمود "data" عام، سمّيه على معناه
-- ALTER TABLE Accounts ADD LastLoginAt DATETIME2;`
                        },
                        {
                            label: 'AccountQueries.cs',
                            language: 'csharp',
                            framework: 'LINQ',
                            code: `var accounts = await _context.Accounts
    .Where(a => a.Balance > 0)
    .Select(a => new AccountDto
    {
        Id = a.Id,
        OwnerName = a.OwnerName,
        Balance = a.Balance
    })
    .ToListAsync();`
                        }
                    ]
                },

                {
                    title: '٣. فروق معبّرة بين الأسماء (Meaningful Distinctions)',
                    icon: 'fa-solid fa-code-compare',
                    description: `
لو الكومبايلر محتاج أسماء مختلفة، خلّي الفرق بينهم معبّر.
          `,
                    badExample: {
                        title: 'غلط – فروق بلا معنى',
                        code: `var a1 = GetUserInput();
var a2 = GetSystemDefault();

class ProductInfo { }
class ProductData { }

void CalculateTotal(int theList, int aList) { }`
                    },
                    goodExample: {
                        title: 'صح – فروق ليها معنى',
                        code: `var userProvidedValue = GetUserInput();
var systemDefaultValue = GetSystemDefault();

class ProductMetadata { }
class ProductMeasurements { }

void CalculateTotal(int activeItems, int archivedItems) { }`
                    },
                    explanation: `
الفرق بين a1 و a2 حرف واحد.
بس الاسم الحقيقي بيوصف مصدر كل قيمة.
          `,
                    tips: [
                        'متستخدمش أرقام كفرق (a1, a2).',
                        'متستخدمش noise words زي Info, Data.',
                        'لو محتاج اسمين، فكّر: إيه الفرق الحقيقي؟'
                    ],
                    samples: [
                        {
                            label: 'products.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export interface ProductMetadata {
  tags: string[];
  category: string;
}

export interface ProductMeasurements {
  weight: number;
  width: number;
  height: number;
}

export function calculateTotal(
  activeItems: number,
  archivedItems: number
): number {
  return activeItems + archivedItems;
}`
                        },
                        {
                            label: 'products.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export function calculateTotal(activeItems, archivedItems) {
  return activeItems + archivedItems;
}`
                        },
                        {
                            label: 'ProductTypes.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class ProductMetadata
{
    public List<string> Tags { get; set; } = new();
    public string Category { get; set; } = "";
}

public class ProductMeasurements
{
    public decimal Weight { get; set; }
    public decimal Width { get; set; }
    public decimal Height { get; set; }
}

public static class Calculator
{
    public static int Total(int activeItems, int archivedItems)
        => activeItems + archivedItems;
}`
                        },
                        {
                            label: 'products.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- بدل product_info و product_data
CREATE TABLE ProductMetadata (
    ProductId INT PRIMARY KEY,
    Category NVARCHAR(50),
    Tags NVARCHAR(500)
);

CREATE TABLE ProductMeasurements (
    ProductId INT PRIMARY KEY,
    Weight DECIMAL(10, 3),
    Width DECIMAL(10, 3),
    Height DECIMAL(10, 3)
);`
                        },
                        {
                            label: 'ProductQueries.cs',
                            language: 'csharp',
                            framework: 'LINQ',
                            code: `var products = await _context.Products
    .Select(p => new
    {
        p.Id,
        p.Name,
        Metadata = new ProductMetadata
        {
            Category = p.Category,
            Tags = p.Tags.Split(',', StringSplitOptions.None).ToList()
        },
        Measurements = new ProductMeasurements
        {
            Weight = p.Weight,
            Width = p.Width,
            Height = p.Height
        }
    })
    .ToListAsync();`
                        }
                    ]
                },

                {
                    title: '٤. أسماء تُنطق وتُبحث (Pronounceable & Searchable)',
                    icon: 'fa-solid fa-magnifying-glass',
                    description: `
الاسم لازم تقدر تقوله في اجتماع، وتقدر تلاقيه بـ Ctrl+F.
          `,
                    badExample: {
                        title: 'غلط – أسماء مش بتنطق',
                        code: `class DtaRcrd102 {
    private DateTime genymdhms;
    private DateTime modymdhms;
    private string pszqint = "102";
}

if (user.status == 7) SendVIPWelcome();

var n = GetActiveUserCount();`
                    },
                    goodExample: {
                        title: 'صح – أسماء تُنطق وتُبحث',
                        code: `class Customer {
    private DateTime generationTimestamp;
    private DateTime modificationTimestamp;
    private string recordId = "102";
}

const VIP_STATUS = 7;
if (user.status === VIP_STATUS) SendVIPWelcome();

var activeUserCount = GetActiveUserCount();`
                    },
                    explanation: `
اسأل نفسك: لو لقيت الاسم ده في اجتماع، تقدر تقوله؟
وفيه فايدة تانية: البحث (Ctrl+F).
          `,
                    tips: [
                        'اسأل: أقدر أقول الاسم ده في اجتماع؟',
                        'خلي كل حاجة قابلة للبحث.',
                        'الأسماء الطويلة الواضحة أفضل.'
                    ],
                    samples: [
                        {
                            label: 'customer.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class Customer {
  generationTimestamp: Date;
  modificationTimestamp: Date;
  recordId: string = '102';
}

export const VIP_STATUS = 7;

if (user.status === VIP_STATUS) {
  sendVipWelcome();
}

const activeUserCount = getActiveUserCount();`
                        },
                        {
                            label: 'customer.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export const VIP_STATUS = 7;

if (user.status === VIP_STATUS) {
  sendVipWelcome();
}

const activeUserCount = getActiveUserCount();`
                        },
                        {
                            label: 'Customer.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class Customer
{
    public DateTime GenerationTimestamp { get; set; }
    public DateTime ModificationTimestamp { get; set; }
    public string RecordId { get; set; } = "102";
}

public static class UserStatus
{
    public const int Vip = 7;
}

if (user.Status == UserStatus.Vip)
    SendVipWelcome();

var activeUserCount = GetActiveUserCount();`
                        },
                        {
                            label: 'customers.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- أسماء واضحة وموحّدة
SELECT
    c.Id,
    c.CustomerName,
    c.Email,
    c.GenerationTimestamp,
    c.ModificationTimestamp
FROM Customers AS c
WHERE c.Status = 7   -- VIP
ORDER BY c.ModificationTimestamp DESC;`
                        },
                        {
                            label: 'CustomerQueries.cs',
                            language: 'csharp',
                            framework: 'LINQ',
                            code: `const int VipStatus = 7;

var vipCustomers = customers
    .Where(c => c.Status == VipStatus)
    .OrderByDescending(c => c.ModificationTimestamp)
    .Select(c => new CustomerDto
    {
        Id = c.Id,
        Name = c.CustomerName,
        Email = c.Email
    })
    .ToList();`
                        }
                    ]
                },

                {
                    title: '٥. متستخدمش أرقام مجردة (Replace Magic Numbers)',
                    icon: 'fa-solid fa-hashtag',
                    description: `
رقم زي "4" أو "7" مش بيقول حاجة.
لما تحوله لـ const أو enum، بتديله معنى.
          `,
                    badExample: {
                        title: 'غلط – أرقام سحرية',
                        code: `if (order.status == 1) ShipOrder(order);
else if (order.status == 2) CancelOrder(order);
else if (order.status == 3) RefundOrder(order);

if (user.role == 4) GrantAdminAccess(user);`
                    },
                    goodExample: {
                        title: 'صح – ثوابت معبّرة أو enum',
                        code: `public static class OrderStatus
{
    public const int Pending = 1;
    public const int Shipped = 2;
    public const int Cancelled = 3;
    public const int Refunded = 4;
}

public static class UserRole
{
    public const int Guest = 1;
    public const int Member = 2;
    public const int Moderator = 3;
    public const int Admin = 4;
}

if (order.Status == OrderStatus.Pending) ShipOrder(order);
if (user.Role == UserRole.Admin) GrantAdminAccess(user);`
                    },
                    explanation: `
الرقم "4" لوحده مالوش أي معنى.
لما تحوّله لـ enum أو const بتديله معنى واضح.
          `,
                    tips: [
                        'أي رقم بيظهر مرتين أو أكتر، حوّله لـ constant.',
                        'استخدم enum أو const object.',
                        'سمّي الثابت بحيث يعبّر عن المعنى.'
                    ],
                    samples: [
                        {
                            label: 'order-status.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export const OrderStatus = {
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

if (order.status === OrderStatus.PENDING) {
  shipOrder(order);
}

if (user.role === UserRole.ADMIN) {
  grantAdminAccess(user);
}`
                        },
                        {
                            label: 'order-status.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export const OrderStatus = Object.freeze({
  PENDING: 1,
  SHIPPED: 2,
  CANCELLED: 3,
  REFUNDED: 4
});

export const UserRole = Object.freeze({
  GUEST: 1,
  MEMBER: 2,
  MODERATOR: 3,
  ADMIN: 4
});

if (order.status === OrderStatus.PENDING) {
  shipOrder(order);
}`
                        },
                        {
                            label: 'OrderStatus.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public enum OrderStatus
{
    Pending = 1,
    Shipped = 2,
    Cancelled = 3,
    Refunded = 4
}

public enum UserRole
{
    Guest = 1,
    Member = 2,
    Moderator = 3,
    Admin = 4
}

if (order.Status == OrderStatus.Pending)
    ShipOrder(order);

if (user.Role == UserRole.Admin)
    GrantAdminAccess(user);`
                        },
                        {
                            label: 'orders.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- بدل ما تكتب 1 و 2 و 3 مباشرة، استخدم lookup table
CREATE TABLE OrderStatuses (
    Id INT PRIMARY KEY,
    Name NVARCHAR(50) NOT NULL
);

INSERT INTO OrderStatuses VALUES
    (1, 'Pending'),
    (2, 'Shipped'),
    (3, 'Cancelled'),
    (4, 'Refunded');

SELECT o.Id, os.Name AS Status
FROM Orders AS o
JOIN OrderStatuses AS os ON os.Id = o.Status;`
                        },
                        {
                            label: 'OrderQueries.cs',
                            language: 'csharp',
                            framework: 'LINQ',
                            code: `var pendingOrders = await _context.Orders
    .Where(o => o.Status == (int)OrderStatus.Pending)
    .Select(o => new OrderDto
    {
        Id = o.Id,
        Status = OrderStatus.Pending
    })
    .ToListAsync();`
                        }
                    ]
                }
            ],

            quote: {
                text: `الاسم الكويس أحسن من التعليق الكويس.
               مش محتاج توثّق كود واضح.`,
                author: 'Robert C. Martin (Uncle Bob)'
            },

            keyTakeaways: [
                'الاسم بيقول "ليه" و "إيه" من غير ما تحتاج comment.',
                'متستخدمش أسماء موهمة.',
                'لو هتفرّق بين اسمين، خلّي الفرق معبّر.',
                'الأسماء تُنطق في اجتماع، وتُلاقى بـ Ctrl+F.',
                'متستخدمش أرقام مجردة.',
                'الاسم الكويس بيوفر ساعات.',
                'الأسامي هي أرخص طريقة لتحسين الكود.'
            ],

            references: [
                'Clean Code — الفصل الثاني: Meaningful Names — Robert C. Martin',
                'The Art of Readable Code — Dustin Boswell & Trevor Foucher',
                'Refactoring — الفصل السادس — Martin Fowler'
            ],

            hashtags: [
                'CleanCode',
                'MeaningfulNames',
                'SoftwareEngineering',
                'CSharp',
                'TypeScript',
                'JavaScript',
                'EFCore',
                'ASPNet',
                'SQL',
                'LINQ'
            ]
        }
    },
    /* ═══════════════════════════════════════════════════════════════
   CHAPTER 3 — Class & Method Names
   ═══════════════════════════════════════════════════════════════ */
    'clean-code-03': {
        id: 'clean-code-03',
        slug: 'clean-code-03',
        projectName: 'أسامي الكلاسات والدوال – النصف التاني من الحكاية',
        projectDescription: `6 قواعد أعمق لاختيار أسماء الكلاسات والدوال والمتغيرات، مع أمثلة عبر 7 بيئات برمجية.`,
        projectDate: 'آخر تحديث: 12 أكتوبر 2026',
        projectVersion: 'v2.0.0',
        projectTags: ['Clean Code', 'MeaningfulNames', 'DomainDrivenDesign', 'CSharp', 'TypeScript', 'JavaScript', 'EFCore', 'ASPNet', 'SQL', 'LINQ'],
        cleanCodeContent: {
            introduction: `
في الجزء الأول اتكلمنا عن أساسيات الأسماء.
في الجزء ده، هنكمّل الرحلة مع 6 قواعد أعمق بتخص
أسماء الكلاسات والدوال والمتغيرات في سياق المشروع.
      `,

            story: `
كان عندي class اسمها ProjectManager. فضلت أسأل نفسي:
هو بيدير إيه بالظبط؟ لما فتحته، لقيت كل اللي بيعمله CRUD.
مش manager بأي معنى، هو فعلياً ProjectRepository.

والعكس مع methods. لقيت method اسمها مجرد Message.
غيرتها لـ SendMessage و DeleteMessage واللبس اتحل.

قريت فيها قاعدة لطيفة اسمها Don't Be Cute:
متستخدمش اسم ظريف أو نكتة داخلية بدل الاسم الواضح.

أكتر حاجة لفتت نظري كانت Pick One Word per Concept.
لقيت تلات كلاسات في نفس المشروع، كل واحد بيستخدم كلمة مختلفة:
- UserManager.FetchUser
- ProjectController.RetrieveProject
- TaskService.GetTask

وحّدت التلاتة لـ Get في كل مكان.

وفيه قاعدة عكسية: Don't Pun — متستخدمش نفس الكلمة لمعنيين.
      `,

            principles: [
                {
                    title: '١. الكلاس اسم، والدالة فعل',
                    icon: 'fa-solid fa-cubes-stacked',
                    description: `
الكلاس بيمثّل "حاجة" — فهو لازم يكون noun.
الدالة بتعمل "حاجة" — فلازم تكون فعل.
          `,
                    badExample: {
                        title: 'غلط – كلاس بفعل ودالة بـ noun',
                        code: `public class ProjectManager
{
    public void CreateProject() { }
    public void UpdateProject() { }
    public void DeleteProject() { }
    public Project FindProjectById(int id) => null;
}

public static class Message
{
    public static void Send(User user, string text) { }
}

public static class OrderValidation
{
    public static bool Check(Order order) => true;
}`
                    },
                    goodExample: {
                        title: 'صح – الكلاس noun والدالة فعل',
                        code: `public class ProjectRepository
{
    public void Create(Project project) { }
    public void Update(Project project) { }
    public void Delete(int id) { }
    public Project FindById(int id) => null;
}

public static class MessageService
{
    public static void SendMessage(User user, string text) { }
    public static void DeleteMessage(int messageId) { }
}

public static class OrderValidator
{
    public static bool Validate(Order order) => true;
}`
                    },
                    explanation: `
في المثال الغلط: "ProjectManager" — manager إيه بالظبط؟
لما تفتحه تلاقي كل اللي بيعمله CRUD، يبقى هو Repository مش Manager.
          `,
                    tips: [
                        'الكلاس: User, Order, ProjectRepository.',
                        'الدالة: sendMessage, validateOrder.',
                        'المتغير: userId, activeUsers.',
                        'لو لقيت كلاس اسمه فعل، ده signal.'
                    ],
                    samples: [
                        {
                            label: 'project.repository.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class ProjectRepository {
  create(project: Project): void { }
  update(project: Project): void { }
  delete(id: number): void { }
  findById(id: number): Project | null { return null; }
}

export class MessageService {
  sendMessage(user: User, text: string): void { }
  deleteMessage(messageId: number): void { }
}

export class OrderValidator {
  validate(order: Order): boolean { return true; }
}`
                        },
                        {
                            label: 'project.repository.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export class ProjectRepository {
  create(project) { }
  update(project) { }
  delete(id) { }
  findById(id) { return null; }
}

export class MessageService {
  sendMessage(user, text) { }
  deleteMessage(messageId) { }
}`
                        },
                        {
                            label: 'ProjectRepository.cs',
                            language: 'csharp',
                            framework: 'EF Core',
                            code: `public class ProjectRepository : IProjectRepository
{
    private readonly AppDbContext _context;

    public ProjectRepository(AppDbContext context)
        => _context = context;

    public async Task<Project> FindByIdAsync(int id)
        => await _context.Projects.FindAsync(id);

    public void Create(Project project)
    {
        _context.Projects.Add(project);
        _context.SaveChanges();
    }

    public void Update(Project project)
    {
        _context.Projects.Update(project);
        _context.SaveChanges();
    }

    public void Delete(int id)
    {
        var project = _context.Projects.Find(id);
        if (project != null)
        {
            _context.Projects.Remove(project);
            _context.SaveChanges();
        }
    }
}`
                        },
                        {
                            label: 'ProjectsController.cs',
                            language: 'csharp',
                            framework: 'ASP.NET Core',
                            code: `[ApiController]
[Route("api/projects")]
public class ProjectsController : ControllerBase
{
    private readonly ProjectRepository _repo;

    public ProjectsController(ProjectRepository repo)
        => _repo = repo;

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var project = await _repo.FindByIdAsync(id);
        return project == null ? NotFound() : Ok(project);
    }

    [HttpPost]
    public IActionResult Create([FromBody] Project project)
    {
        _repo.Create(project);
        return CreatedAtAction(nameof(GetById), new { id = project.Id }, project);
    }
}`
                        },
                        {
                            label: 'projects.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `CREATE TABLE Projects (
    Id INT IDENTITY PRIMARY KEY,
    Name NVARCHAR(200) NOT NULL,
    OwnerId INT NOT NULL,
    CreatedAt DATETIME2 DEFAULT SYSUTCDATETIME(),
    UpdatedAt DATETIME2 NULL
);

CREATE INDEX IX_Projects_OwnerId ON Projects (OwnerId);`
                        },
                        {
                            label: 'ProjectQueries.cs',
                            language: 'csharp',
                            framework: 'LINQ',
                            code: `var projects = await _context.Projects
    .Where(p => p.OwnerId == userId)
    .OrderByDescending(p => p.CreatedAt)
    .Select(p => new ProjectDto
    {
        Id = p.Id,
        Name = p.Name,
        CreatedAt = p.CreatedAt
    })
    .ToListAsync();`
                        }
                    ]
                },

                {
                    title: '٢. متكنش ظريف (Don\'t Be Cute)',
                    icon: 'fa-solid fa-face-smile-wink',
                    description: `
متستخدمش اسم ظريف أو نكتة داخلية بدل الاسم الواضح.
          `,
                    badExample: {
                        title: 'غلط – أسماء ظريفة أو داخلية',
                        code: `public static IEnumerable<Item> HolyHandGrenade(IEnumerable<Item> items)
    => items.Where(i => !i.Deleted);

public class TheThanosSnap
{
    public void DeleteHalf() { }
}

public static object MagicHappens(object data) => data;

public class FruitSalad
{
    public FruitSalad(List<User> users, List<Order> orders) { }
}`
                    },
                    goodExample: {
                        title: 'صح – اسم واضح مفيش فيه سخرية',
                        code: `public static IEnumerable<Item> DeleteItems(IEnumerable<Item> items)
    => items.Where(i => !i.Deleted);

public class BatchDeleter
{
    public void DeleteHalf(IEnumerable<Record> records) { }
}

public static object TransformData(object data) => data;

public class UserOrderAggregator
{
    public UserOrderAggregator(List<User> users, List<Order> orders) { }
}`
                    },
                    explanation: `
الاسم الظريف ليه مشكلتين:
1. مش واضح للمسؤول اللي بعده.
2. بيبقى مرتبط بسياق مؤقت.
          `,
                    tips: [
                        'لو الاسم بيضحكك، فكّر: هل هيضحك اللي جاي؟',
                        'الأسامي الرسمية أكتر من الفكاهية.',
                        'لما تكتب اسم، اسأل: هفهم ده بعد 6 شهور؟',
                        'النكت الداخلية مكانها Slack، مش الكود.'
                    ],
                    samples: [
                        {
                            label: 'items.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class ItemService {
  deleteItems(items: Item[]): Item[] {
    return items.filter(item => !item.deleted);
  }
}

export class BatchDeleter {
  deleteHalf(records: Record[]): void { }
}

export function transformData(data: unknown): unknown {
  return data;
}`
                        },
                        {
                            label: 'items.service.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export class ItemService {
  deleteItems(items) {
    return items.filter(item => !item.deleted);
  }
}

export class BatchDeleter {
  deleteHalf(records) { }
}

export function transformData(data) {
  return data;
}`
                        },
                        {
                            label: 'ItemService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class ItemService
{
    public IEnumerable<Item> DeleteItems(IEnumerable<Item> items)
        => items.Where(item => !item.Deleted);
}

public class BatchDeleter
{
    public void DeleteHalf(IEnumerable<Record> records) { }
}

public static class DataTransformer
{
    public static object Transform(object data) => data;
}`
                        },
                        {
                            label: 'items.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- أسماء واضحة: مش "holy" ولا "magic"
CREATE OR ALTER PROCEDURE dbo.DeleteItems
    @OwnerId INT
AS
BEGIN
    DELETE FROM Items
    WHERE OwnerId = @OwnerId
        AND IsDeleted = 1;
END;`
                        },
                        {
                            label: 'ItemQueries.cs',
                            language: 'csharp',
                            framework: 'LINQ',
                            code: `var activeItems = await _context.Items
    .Where(i => !i.Deleted)
    .Where(i => i.OwnerId == userId)
    .ToListAsync();

var deletedCount = items.Count(i => i.Deleted);`
                        }
                    ]
                },

                {
                    title: '٣. كلمة واحدة لكل مفهوم (Pick One Word per Concept)',
                    icon: 'fa-solid fa-arrows-to-circle',
                    description: `
اختار كلمة واحدة لكل مفهوم، واستخدمها في المشروع كله.
          `,
                    badExample: {
                        title: 'غلط – كلمات مختلفة لنفس المفهوم',
                        code: `public class UserManager
{
    public User FetchUser(int id) => null;
}

public class ProjectController
{
    public Project RetrieveProject(int id) => null;
}

public class TaskService
{
    public Task GetTask(int id) => null;
}

public class OrderRepository
{
    public Order FindOrder(int id) => null;
}`
                    },
                    goodExample: {
                        title: 'صح – كلمة واحدة في كل المشروع',
                        code: `public class UserManager
{
    public User GetUser(int id) => null;
}

public class ProjectController
{
    public Project GetProject(int id) => null;
}

public class TaskService
{
    public Task GetTask(int id) => null;
}

public class OrderRepository
{
    public Order GetOrder(int id) => null;
}`
                    },
                    explanation: `
لما تستخدم 5 كلمات لنفس المفهوم، اللي بيقرا الكود بيسأل:
"ليه UserManager بتستخدم fetch والباقي get؟"
          `,
                    tips: [
                        'اختار كلمة لكل عملية: get, set, create, delete.',
                        'خليها convention مكتوب في الـ team guidelines.',
                        'الـ code review بيكشف الاختلافات.'
                    ],
                    samples: [
                        {
                            label: 'users.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class UserService {
  getUser(id: number): User | null { return null; }
}

export class ProjectService {
  getProject(id: number): Project | null { return null; }
}

export class TaskService {
  getTask(id: number): Task | null { return null; }
}

export class OrderService {
  getOrder(id: number): Order | null { return null; }
}`
                        },
                        {
                            label: 'repositories.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export class UserRepository {
  getUser(id) { return null; }
}

export class ProjectRepository {
  getProject(id) { return null; }
}

export class TaskRepository {
  getTask(id) { return null; }
}`
                        },
                        {
                            label: 'Repositories.cs',
                            language: 'csharp',
                            framework: 'EF Core',
                            code: `public class UserRepository
{
    private readonly AppDbContext _context;
    public UserRepository(AppDbContext context) => _context = context;

    public async Task<User> GetUserAsync(int id)
        => await _context.Users.FindAsync(id);
}

public class ProjectRepository
{
    private readonly AppDbContext _context;
    public ProjectRepository(AppDbContext context) => _context = context;

    public async Task<Project> GetProjectAsync(int id)
        => await _context.Projects.FindAsync(id);
}

public class OrderRepository
{
    private readonly AppDbContext _context;
    public OrderRepository(AppDbContext context) => _context = context;

    public async Task<Order> GetOrderAsync(int id)
        => await _context.Orders.FindAsync(id);
}`
                        },
                        {
                            label: 'api.routes.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- نفس الـ convention في الـ stored procedures
CREATE OR ALTER PROCEDURE dbo.GetUser
    @Id INT
AS
BEGIN
    SELECT Id, Name, Email FROM Users WHERE Id = @Id;
END;

CREATE OR ALTER PROCEDURE dbo.GetProject
    @Id INT
AS
BEGIN
    SELECT Id, Name, OwnerId FROM Projects WHERE Id = @Id;
END;

CREATE OR ALTER PROCEDURE dbo.GetOrder
    @Id INT
AS
BEGIN
    SELECT Id, UserId, Total FROM Orders WHERE Id = @Id;
END;`
                        }
                    ]
                },

                {
                    title: '٤. متستخدمش نفس الكلمة لمعنيين (Don\'t Pun)',
                    icon: 'fa-solid fa-shuffle',
                    description: `
العكس من Pick One Word: لو عندك معنيين مختلفين،
استخدم كلمتين مختلفتين.
          `,
                    badExample: {
                        title: 'غلط – كلمة واحدة بمعنيين',
                        code: `public class Cart
{
    public void Add(Item item)
    {
        _items.Add(item);
    }
}

public class Calculator
{
    public int Add(int a, int b) => a + b;
}

public class UserRepository
{
    public void Add(User user)
    {
        _context.Users.Add(user);
    }
}`
                    },
                    goodExample: {
                        title: 'صح – كل معنى ليه كلمته',
                        code: `public class Cart
{
    public void Push(Item item)
    {
        _items.Add(item);
    }
}

public class Calculator
{
    public int Sum(int a, int b) => a + b;
}

public class UserRepository
{
    public void Insert(User user)
    {
        _context.Users.Add(user);
    }
}`
                    },
                    explanation: `
"Add" تعتبر كلمة عامة، وممكن تتستخدم في 5 سياقات مختلفة.
الحل: كل عملية يكون لها الاسم الدقيق بتاعها.
          `,
                    tips: [
                        'insert / append / push / add / concat — معانٍ مختلفة.',
                        'delete / remove / erase / drop — كل واحد لاستخدامه.',
                        'خلي الاسم يحمل معنى واحد بس.'
                    ],
                    samples: [
                        {
                            label: 'cart.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class Cart {
  private items: Item[] = [];

  push(item: Item): void {
    this.items.push(item);
  }
}

export class Calculator {
  sum(a: number, b: number): number {
    return a + b;
  }
}

export class UserRepository {
  insert(user: User): void {
    this.db.insert('users', user);
  }
}`
                        },
                        {
                            label: 'cart.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export class Cart {
  constructor() { this.items = []; }

  push(item) {
    this.items.push(item);
  }
}

export class Calculator {
  sum(a, b) {
    return a + b;
  }
}`
                        },
                        {
                            label: 'CartAndCalculator.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class Cart
{
    private readonly List<Item> _items = new();

    public void Push(Item item)
    {
        _items.Add(item);
    }
}

public class Calculator
{
    public int Sum(int a, int b) => a + b;
}

public class UserRepository
{
    public void Insert(User user)
    {
        _context.Users.Add(user);
    }
}`
                        },
                        {
                            label: 'cart.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- لكل عملية اسمها: INSERT للـ insert، DELETE للـ delete
CREATE OR ALTER PROCEDURE dbo.Cart_InsertItem
    @CartId INT,
    @ItemId INT,
    @Quantity INT
AS
BEGIN
    INSERT INTO CartItems (CartId, ItemId, Quantity)
    VALUES (@CartId, @ItemId, @Quantity);
END;

CREATE OR ALTER PROCEDURE dbo.Cart_RemoveItem
    @CartId INT,
    @ItemId INT
AS
BEGIN
    DELETE FROM CartItems
    WHERE CartId = @CartId AND ItemId = @ItemId;
END;`
                        }
                    ]
                },

                {
                    title: '٥. استخدم مصطلحات الدومين (Domain-Specific Names)',
                    icon: 'fa-solid fa-landmark',
                    description: `
لو المفهوم موجود في الـ domain بتاع المشروع، استخدم اسمه الحقيقي.
          `,
                    badExample: {
                        title: 'غلط – ترجمة الدومين لحاجات عامة',
                        code: `public class Item
{
}

public class Task
{
}

public class Entry
{
}

public class Record
{
}`
                    },
                    goodExample: {
                        title: 'صح – مصطلحات الدومين في الكود',
                        code: `public class Assignment
{
}

public class Exam
{
}

public class StudentSubmission
{
}

public class Grade
{
}`
                    },
                    explanation: `
لو الـ domain تعليمي، في مصطلحات محددة:
Assignment, Exam, Grade.
لو استخدمت "Item" — دي عامة جداً.
          `,
                    tips: [
                        'اجلس مع فريق البيزنس واسمع المصطلحات.',
                        'خلي قائمة Ubiquitous Language في الـ docs.',
                        'لو المصطلح مش في الـ domain، استخدم مصطلح عام.'
                    ],
                    samples: [
                        {
                            label: 'assignment.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export interface Assignment {
  id: number;
  title: string;
  dueDate: Date;
  courseId: number;
}

export interface Exam {
  id: number;
  duration: number;
  totalMarks: number;
}

export interface StudentSubmission {
  id: number;
  studentId: number;
  assignmentId: number;
  submittedAt: Date;
}

export interface Grade {
  id: number;
  submissionId: number;
  marks: number;
  feedback: string;
}`
                        },
                        {
                            label: 'education.models.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export class Assignment {
  constructor(id, title, dueDate, courseId) {
    this.id = id;
    this.title = title;
    this.dueDate = dueDate;
    this.courseId = courseId;
  }
}

export class Exam {
  constructor(id, duration, totalMarks) {
    this.id = id;
    this.duration = duration;
    this.totalMarks = totalMarks;
  }
}`
                        },
                        {
                            label: 'EducationModels.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class Assignment
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public DateTime DueDate { get; set; }
    public int CourseId { get; set; }
}

public class Exam
{
    public int Id { get; set; }
    public TimeSpan Duration { get; set; }
    public int TotalMarks { get; set; }
}

public class StudentSubmission
{
    public int Id { get; set; }
    public int StudentId { get; set; }
    public int AssignmentId { get; set; }
    public DateTime SubmittedAt { get; set; }
}

public class Grade
{
    public int Id { get; set; }
    public int SubmissionId { get; set; }
    public int Marks { get; set; }
    public string Feedback { get; set; } = "";
}`
                        },
                        {
                            label: 'education.schema.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `CREATE TABLE Courses (
    Id INT IDENTITY PRIMARY KEY,
    Name NVARCHAR(200) NOT NULL
);

CREATE TABLE Assignments (
    Id INT IDENTITY PRIMARY KEY,
    Title NVARCHAR(200) NOT NULL,
    DueDate DATETIME2 NOT NULL,
    CourseId INT NOT NULL REFERENCES Courses(Id)
);

CREATE TABLE Exams (
    Id INT IDENTITY PRIMARY KEY,
    Duration INT NOT NULL,
    TotalMarks INT NOT NULL,
    CourseId INT NOT NULL REFERENCES Courses(Id)
);

CREATE TABLE StudentSubmissions (
    Id INT IDENTITY PRIMARY KEY,
    StudentId INT NOT NULL,
    AssignmentId INT NOT NULL REFERENCES Assignments(Id),
    SubmittedAt DATETIME2 NOT NULL
);

CREATE TABLE Grades (
    Id INT IDENTITY PRIMARY KEY,
    SubmissionId INT NOT NULL REFERENCES StudentSubmissions(Id),
    Marks INT NOT NULL,
    Feedback NVARCHAR(1000)
);`
                        },
                        {
                            label: 'EducationQueries.cs',
                            language: 'csharp',
                            framework: 'LINQ',
                            code: `var studentGrades = await _context.StudentSubmissions
    .Where(s => s.StudentId == studentId)
    .Join(_context.Grades,
        submission => submission.Id,
        grade => grade.SubmissionId,
        (submission, grade) => new
        {
            SubmissionId = submission.Id,
            SubmissionDate = submission.SubmittedAt,
            Marks = grade.Marks,
            Feedback = grade.Feedback
        })
    .OrderByDescending(x => x.SubmissionDate)
    .ToListAsync();`
                        }
                    ]
                },

                {
                    title: '٦. ضيف سياق معبّر (Add Meaningful Context)',
                    icon: 'fa-solid fa-layer-group',
                    description: `
شوية أسماء لوحدها مبتحملش معنى. لو ممكن تلخبط،
جمّعهم في كلاس واحد بيدي سياق واضح.
          `,
                    badExample: {
                        title: 'غلط – متغيرات منفصلة بلا سياق',
                        code: `public class User
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Street { get; set; }
    public string HouseNumber { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string ZipCode { get; set; }
}`
                    },
                    goodExample: {
                        title: 'صح – سياق معبّر داخل كلاس',
                        code: `public class Address
{
    public string Street { get; set; }
    public string HouseNumber { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string ZipCode { get; set; }
}

public class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public Address Address { get; set; }
}

public void SendPackage(Person person)
{
    Console.WriteLine(person.Address.State);
}`
                    },
                    explanation: `
المتغير "state" لوحده مش معبر.
لما تجمّعهم في كلاس "Address": address.state بقت واضحة.
          `,
                    tips: [
                        'لو 3 متغيرات أو أكتر بيبدأوا بنفس الـ prefix، جمّعهم.',
                        'الـ classes بتوفّر سياق طبيعي.',
                        'الـ refactoring بيسهّل الكتابة والقراءة.'
                    ],
                    samples: [
                        {
                            label: 'address.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export interface Address {
  street: string;
  houseNumber: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Person {
  firstName: string;
  lastName: string;
  address: Address;
}

export function sendPackage(person: Person): void {
  console.log(person.address.state);
}`
                        },
                        {
                            label: 'address.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export function sendPackage(person) {
  console.log(person.address.state);
}

const person = {
  firstName: 'Ali',
  lastName: 'Hassan',
  address: {
    street: 'Main St',
    houseNumber: '42',
    city: 'Cairo',
    state: 'Cairo',
    zipCode: '11511'
  }
};`
                        },
                        {
                            label: 'Address.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class Address
{
    public string Street { get; set; } = "";
    public string HouseNumber { get; set; } = "";
    public string City { get; set; } = "";
    public string State { get; set; } = "";
    public string ZipCode { get; set; } = "";
}

public class Person
{
    public string FirstName { get; set; } = "";
    public string LastName { get; set; } = "";
    public Address Address { get; set; } = new();
}`
                        },
                        {
                            label: 'addresses.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- بدل ما تحط 7 أعمدة address في Users، اعمل جدول منفصل
CREATE TABLE Addresses (
    Id INT IDENTITY PRIMARY KEY,
    UserId INT NOT NULL REFERENCES Users(Id),
    Street NVARCHAR(200),
    HouseNumber NVARCHAR(20),
    City NVARCHAR(100),
    State NVARCHAR(100),
    ZipCode NVARCHAR(20)
);

SELECT
    u.Id,
    u.Name,
    a.Street,
    a.HouseNumber,
    a.City,
    a.State,
    a.ZipCode
FROM Users AS u
LEFT JOIN Addresses AS a ON a.UserId = u.Id;`
                        },
                        {
                            label: 'AddressQueries.cs',
                            language: 'csharp',
                            framework: 'LINQ',
                            code: `var peopleWithAddresses = await _context.Users
    .Include(u => u.Address)
    .Select(u => new
    {
        u.Id,
        u.FirstName,
        u.LastName,
        State = u.Address.State,
        City = u.Address.City
    })
    .ToListAsync();`
                        }
                    ]
                }
            ],

            quote: {
                text: `الأسامي هي أرخص طريقة لتحسين الكود.
               مش محتاجة compile، ومش بتكسر أي حاجة.`,
                author: 'فصل Meaningful Names — Clean Code'
            },

            keyTakeaways: [
                'الكلاس لازم يكون noun، الدالة فعل.',
                'متستخدمش اسم ظريف.',
                'اختار كلمة واحدة لكل مفهوم.',
                'لو عندك معنيين، استخدم كلمتين.',
                'استخدم مصطلحات الدومين.',
                'لو الأسماء مبتحملش معنى، جمّعها في كلاس.',
                'الهدف: أي حد يفتح الكود، يفهم من أول نظرة.'
            ],

            references: [
                'Clean Code — الفصل الثاني — Robert C. Martin',
                'Domain-Driven Design — Eric Evans',
                'Refactoring — الفصل السادس — Martin Fowler'
            ],

            hashtags: [
                'CleanCode',
                'MeaningfulNames',
                'SoftwareEngineering',
                'CSharp',
                'TypeScript',
                'JavaScript',
                'EFCore',
                'ASPNet',
                'SQL',
                'LINQ'
            ]
        }
    },

    /* ═══════════════════════════════════════════════════════════════
       CHAPTER 4 — Functions
       ═══════════════════════════════════════════════════════════════ */
    'clean-code-04': {
        id: 'clean-code-04',
        slug: 'clean-code-04',
        projectName: 'الدوال – الحاجة الأساسية لأي كود نظيف',
        projectDescription: `أهم فصل في كتاب Clean Code — 9 قواعد عملية لكتابة دوال نظيفة، مع أمثلة عبر 7 بيئات برمجية.`,
        projectDate: 'آخر تحديث: 12 أكتوبر 2026',
        projectVersion: 'v2.0.0',
        projectTags: ['Clean Code', 'Functions', 'BestPractices', 'CSharp', 'TypeScript', 'JavaScript', 'EFCore', 'ASPNet', 'SQL', 'LINQ'],
        cleanCodeContent: {
            introduction: `
لو الـ functions بتاعتك كويسة، نص الشغل خلص.
ده مش كلامي — ده كلام Uncle Bob في واحد من أهم فصول الكتاب.

في الدليل ده، هنمشي على 9 قواعد عملية لكتابة دوال نظيفة.
      `,

            story: `
في مشروع شات كنت شغال عليه، كانت عندي method اسمها SendMessage
بتاخد 3 parameters. لما فتحتها، لقيت نفسي بصدد function واحدة طويلة
بتعمل 4 حاجات مختلفة:

1. بتتحقق من صحة الرسالة
2. بتحفظ الرسالة في الداتابيز
3. بتبعت notification عبر SignalR
4. بتحدّث آخر نشاط للمستخدم

المشكلة الحقيقية ظهرت لما حصل bug في الـ notification.
قعدت نص ساعة أدور في function طويلة.

رجعت للـ function وقسمتها لـ 4 دوال صغيرة:
- ValidateMessageContent
- SaveMessage
- NotifyReceiver
- UpdateSenderActivity
      `,

            principles: [
                {
                    title: '١. Small! – خليها صغيرة',
                    icon: 'fa-solid fa-minimize',
                    description: `
القاعدة الأولى والأهم: الدوال لازم تكون صغيرة.
4 لـ 20 سطر بالكتير — وأقل أحسن.
          `,
                    badExample: {
                        title: 'غلط – دالة طويلة بلا داعي',
                        code: `public void ProcessUserRegistration(string email, string password)
{
    if (string.IsNullOrEmpty(email))
        throw new ArgumentException("Email is required");
    if (!email.Contains("@"))
        throw new ArgumentException("Invalid email format");

    if (string.IsNullOrEmpty(password))
        throw new ArgumentException("Password is required");
    if (password.Length < 8)
        throw new ArgumentException("Password too short");

    var hashedPassword = BCrypt.HashPassword(password);

    var user = new User { Email = email, PasswordHash = hashedPassword };
    _context.Users.Add(user);
    _context.SaveChanges();

    _emailService.Send(email, "Welcome", $"Welcome {email}!");
    _logger.Log($"User registered: {email}");
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

private void ValidateEmail(string email) { }
private void ValidatePassword(string password) { }
private User CreateUser(string email, string password) => null;
private void SaveUser(User user) { }
private void SendWelcomeEmail(User user) { }
private void LogRegistration(User user) { }`
                    },
                    explanation: `
في المثال الغلط، الدالة 30+ سطر بتعمل 6 حاجات مختلفة.
في المثال الصح، RegisterUser بقت 7 سطور بس.
          `,
                    tips: [
                        'الهدف: 4-20 سطر لكل دالة.',
                        'لو الدالة بتاخد أكثر من شاشة، قسمها.',
                        'الـ blocks جوه if/else يفضّل تكون سطر واحد.'
                    ],
                    samples: [
                        {
                            label: 'user.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class UserService {
  registerUser(email: string, password: string): void {
    this.validateEmail(email);
    this.validatePassword(password);
    const user = this.createUser(email, password);
    this.saveUser(user);
    this.sendWelcomeEmail(user);
  }

  private validateEmail(email: string): void {
    if (!email) throw new Error('Email is required');
    if (!email.includes('@')) throw new Error('Invalid email');
  }

  private validatePassword(password: string): void {
    if (!password) throw new Error('Password is required');
    if (password.length < 8) throw new Error('Password too short');
  }

  private createUser(email: string, password: string): User {
    return { email, passwordHash: this.hash(password) };
  }

  private saveUser(user: User): void { this.repo.save(user); }
  private sendWelcomeEmail(user: User): void { this.email.send(user.email, 'Welcome'); }
  private hash(password: string): string { return password; }
}`
                        },
                        {
                            label: 'user.service.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export class UserService {
  registerUser(email, password) {
    this.validateEmail(email);
    this.validatePassword(password);
    const user = this.createUser(email, password);
    this.saveUser(user);
    this.sendWelcomeEmail(user);
  }

  validateEmail(email) {
    if (!email) throw new Error('Email is required');
    if (!email.includes('@')) throw new Error('Invalid email');
  }

  validatePassword(password) {
    if (!password) throw new Error('Password is required');
    if (password.length < 8) throw new Error('Password too short');
  }

  createUser(email, password) {
    return { email, passwordHash: this.hash(password) };
  }
}`
                        },
                        {
                            label: 'UserService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class UserService
{
    public void RegisterUser(string email, string password)
    {
        ValidateEmail(email);
        ValidatePassword(password);
        var user = CreateUser(email, password);
        SaveUser(user);
        SendWelcomeEmail(user);
        LogRegistration(user);
    }

    private void ValidateEmail(string email) { }
    private void ValidatePassword(string password) { }
    private User CreateUser(string email, string password) => null;
    private void SaveUser(User user) { }
    private void SendWelcomeEmail(User user) { }
    private void LogRegistration(User user) { }
}`
                        },
                        {
                            label: 'UsersController.cs',
                            language: 'csharp',
                            framework: 'ASP.NET Core',
                            code: `[ApiController]
[Route("api/users")]
public class UsersController : ControllerBase
{
    private readonly UserService _userService;

    public UsersController(UserService userService)
        => _userService = userService;

    [HttpPost("register")]
    public IActionResult Register([FromBody] RegisterDto dto)
    {
        _userService.RegisterUser(dto.Email, dto.Password);
        return Ok();
    }
}`
                        },
                        {
                            label: 'Users.schema.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `CREATE TABLE Users (
    Id INT IDENTITY PRIMARY KEY,
    Email NVARCHAR(255) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(500) NOT NULL,
    CreatedAt DATETIME2 DEFAULT SYSUTCDATETIME()
);

-- بدل ما تحط منطق معقد جوه stored procedure واحدة،
-- فكّكها على procedures صغيرة كل واحدة بمسؤولية واحدة
CREATE OR ALTER PROCEDURE dbo.CreateUser
    @Email NVARCHAR(255),
    @PasswordHash NVARCHAR(500)
AS
BEGIN
    INSERT INTO Users (Email, PasswordHash)
    VALUES (@Email, @PasswordHash);
END;`
                        }
                    ]
                },

                {
                    title: '٢. Do One Thing – حاجة واحدة بس',
                    icon: 'fa-solid fa-bullseye',
                    description: `
Functions should do one thing. They should do it well.
They should do it only.
          `,
                    badExample: {
                        title: 'غلط – دالة ب 4 مسؤوليات',
                        code: `public void SendMessage(string content, int senderId, int receiverId)
{
    if (string.IsNullOrEmpty(content))
        throw new ArgumentException("Message cannot be empty");
    if (content.Length > 1000)
        throw new ArgumentException("Message too long");

    var message = new Message
    {
        Content = content,
        SenderId = senderId,
        ReceiverId = receiverId,
        SentAt = DateTime.Now
    };
    _context.Messages.Add(message);
    _context.SaveChanges();

    _hubContext.Clients.User(receiverId.ToString())
        .SendAsync("ReceiveMessage", content, senderId);

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

private void ValidateMessageContent(string content) { }
private Message SaveMessage(string content, int senderId, int receiverId) => null;
private void NotifyReceiver(Message message) { }
private void UpdateSenderActivity(int senderId) { }`
                    },
                    explanation: `
SendMessage بقت زي "جدول محتويات".
لو عايز تفهم تفاصيل أي خطوة، تروح للدالة بتاعتها.
          `,
                    tips: [
                        'لو الاسم فيه "and" أو "or"، بتعمل أكتر من حاجة.',
                        'لو محتاج تكتب comment عشان توضح خطوة، استخرجها.',
                        'لو حصل bug، لازم تعرف تروح على الدالة الصح.'
                    ],
                    samples: [
                        {
                            label: 'message.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class MessageService {
  sendMessage(content: string, senderId: number, receiverId: number): void {
    this.validateMessageContent(content);
    const message = this.saveMessage(content, senderId, receiverId);
    this.notifyReceiver(message);
    this.updateSenderActivity(senderId);
  }

  private validateMessageContent(content: string): void {
    if (!content) throw new Error('Message cannot be empty');
    if (content.length > 1000) throw new Error('Message too long');
  }

  private saveMessage(content: string, senderId: number, receiverId: number): Message {
    return this.repo.save({ content, senderId, receiverId });
  }

  private notifyReceiver(message: Message): void { }
  private updateSenderActivity(senderId: number): void { }
}`
                        },
                        {
                            label: 'message.service.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export class MessageService {
  sendMessage(content, senderId, receiverId) {
    this.validateMessageContent(content);
    const message = this.saveMessage(content, senderId, receiverId);
    this.notifyReceiver(message);
    this.updateSenderActivity(senderId);
  }

  validateMessageContent(content) {
    if (!content) throw new Error('Message cannot be empty');
    if (content.length > 1000) throw new Error('Message too long');
  }

  saveMessage(content, senderId, receiverId) {
    return this.repo.save({ content, senderId, receiverId });
  }
}`
                        },
                        {
                            label: 'MessageService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class MessageService
{
    public void SendMessage(string content, int senderId, int receiverId)
    {
        ValidateMessageContent(content);
        var message = SaveMessage(content, senderId, receiverId);
        NotifyReceiver(message);
        UpdateSenderActivity(senderId);
    }

    private void ValidateMessageContent(string content) { }
    private Message SaveMessage(string content, int senderId, int receiverId) => null;
    private void NotifyReceiver(Message message) { }
    private void UpdateSenderActivity(int senderId) { }
}`
                        },
                        {
                            label: 'MessageRepository.cs',
                            language: 'csharp',
                            framework: 'EF Core',
                            code: `public class MessageRepository
{
    private readonly AppDbContext _context;

    public MessageRepository(AppDbContext context)
        => _context = context;

    public async Task<Message> SaveAsync(Message message)
    {
        _context.Messages.Add(message);
        await _context.SaveChangesAsync();
        return message;
    }

    public async Task<List<Message>> GetConversationAsync(int userA, int userB)
    {
        return await _context.Messages
            .Where(m => (m.SenderId == userA && m.ReceiverId == userB)
                     || (m.SenderId == userB && m.ReceiverId == userA))
            .OrderBy(m => m.SentAt)
            .ToListAsync();
    }
}`
                        },
                        {
                            label: 'MessagesController.cs',
                            language: 'csharp',
                            framework: 'ASP.NET Core',
                            code: `[ApiController]
[Route("api/messages")]
public class MessagesController : ControllerBase
{
    private readonly MessageService _service;

    public MessagesController(MessageService service)
        => _service = service;

    [HttpPost]
    public IActionResult Send([FromBody] SendMessageDto dto)
    {
        _service.SendMessage(dto.Content, dto.SenderId, dto.ReceiverId);
        return Ok();
    }
}`
                        },
                        {
                            label: 'messages.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `CREATE TABLE Messages (
    Id INT IDENTITY PRIMARY KEY,
    Content NVARCHAR(1000) NOT NULL,
    SenderId INT NOT NULL,
    ReceiverId INT NOT NULL,
    SentAt DATETIME2 DEFAULT SYSUTCDATETIME()
);

-- كل stored procedure بتعمل حاجة واحدة
CREATE OR ALTER PROCEDURE dbo.SaveMessage
    @Content NVARCHAR(1000),
    @SenderId INT,
    @ReceiverId INT
AS
BEGIN
    INSERT INTO Messages (Content, SenderId, ReceiverId)
    VALUES (@Content, @SenderId, @ReceiverId);
END;

CREATE OR ALTER PROCEDURE dbo.GetConversation
    @UserA INT,
    @UserB INT
AS
BEGIN
    SELECT *
    FROM Messages
    WHERE (SenderId = @UserA AND ReceiverId = @UserB)
       OR (SenderId = @UserB AND ReceiverId = @UserA)
    ORDER BY SentAt;
END;`
                        }
                    ]
                },

                {
                    title: '٣. مستوى تجريد واحد (One Level of Abstraction)',
                    icon: 'fa-solid fa-layer-group',
                    description: `
كل الأسطر جوه الدالة لازم تكون في نفس مستوى التفصيل.
          `,
                    badExample: {
                        title: 'غلط – خلط بين المستويات',
                        code: `public void ProcessOrder(Order order)
{
    order.Status = "Processing";

    SendConfirmationEmail(order);

    var tax = order.Total * 0.14m;
    order.Total += tax;

    NotifyWarehouse(order);

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

private void MarkOrderAsProcessing(Order order) { }
private void ApplyTax(Order order) { }
private void RecordProcessedTime(Order order) { }`
                    },
                    explanation: `
في المثال الغلط: ProcessOrder بتقفز بين مستويات مختلفة.
في المثال الصح: كل سطر هو استدعاء دالة عالية المستوى.
          `,
                    tips: [
                        'لو شفت تفصيلة منخفضة المستوى، استخرجها.',
                        'الدالة المفروض تتقرأ كأنها جملة في نفس مستوى التفكير.',
                        'الأرقام السحرية في دوال منفصلة.'
                    ],
                    samples: [
                        {
                            label: 'order.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class OrderService {
  processOrder(order: Order): void {
    this.markOrderAsProcessing(order);
    this.sendConfirmationEmail(order);
    this.applyTax(order);
    this.notifyWarehouse(order);
    this.recordProcessedTime(order);
  }

  private markOrderAsProcessing(order: Order): void {
    order.status = 'Processing';
  }

  private applyTax(order: Order): void {
    const tax = order.total * 0.14;
    order.total += tax;
  }

  private recordProcessedTime(order: Order): void {
    order.processedAt = new Date();
  }

  private sendConfirmationEmail(order: Order): void { }
  private notifyWarehouse(order: Order): void { }
}`
                        },
                        {
                            label: 'OrderService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class OrderService
{
    public void ProcessOrder(Order order)
    {
        MarkOrderAsProcessing(order);
        SendConfirmationEmail(order);
        ApplyTax(order);
        NotifyWarehouse(order);
        RecordProcessedTime(order);
    }

    private void MarkOrderAsProcessing(Order order) { order.Status = "Processing"; }
    private void ApplyTax(Order order) { order.Total *= 1.14m; }
    private void RecordProcessedTime(Order order) { order.ProcessedAt = DateTime.Now; }
    private void SendConfirmationEmail(Order order) { }
    private void NotifyWarehouse(Order order) { }
}`
                        },
                        {
                            label: 'orders.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- في SQL، كل stored procedure بتمثل مستوى تجريد واحد
CREATE OR ALTER PROCEDURE dbo.ProcessOrder
    @OrderId INT
AS
BEGIN
    EXEC dbo.MarkOrderAsProcessing @OrderId;
    EXEC dbo.ApplyOrderTax @OrderId;
    EXEC dbo.RecordOrderProcessedTime @OrderId;
END;

CREATE OR ALTER PROCEDURE dbo.MarkOrderAsProcessing
    @OrderId INT
AS
BEGIN
    UPDATE Orders SET Status = 'Processing' WHERE Id = @OrderId;
END;`
                        }
                    ]
                },

                {
                    title: '٤. Switch Statements – ادفنها في factory',
                    icon: 'fa-solid fa-sitemap',
                    description: `
الـ switch بطبيعتها صعب تخليها صغيرة.
الحل: ادفنها في factory، واستخدم polymorphism.
          `,
                    badExample: {
                        title: 'غلط – switch متكرر في كل مكان',
                        code: `public decimal CalculatePay(Employee employee)
{
    switch (employee.Type)
    {
        case EmployeeType.Commissioned: return CalculateCommissionedPay(employee);
        case EmployeeType.Hourly: return CalculateHourlyPay(employee);
        case EmployeeType.Salaried: return CalculateSalariedPay(employee);
        default: throw new InvalidOperationException();
    }
}

public int CalculateVacationDays(Employee employee)
{
    switch (employee.Type)
    {
        case EmployeeType.Commissioned: return 10;
        case EmployeeType.Hourly: return 15;
        case EmployeeType.Salaried: return 20;
        default: return 0;
    }
}`
                    },
                    goodExample: {
                        title: 'صح – Polymorphism في مكان واحد',
                        code: `public abstract class Employee
{
    public abstract decimal CalculatePay();
    public abstract int CalculateVacationDays();
}

public class CommissionedEmployee : Employee
{
    public override decimal CalculatePay() => 0;
    public override int CalculateVacationDays() => 10;
}

public class HourlyEmployee : Employee
{
    public override decimal CalculatePay() => 0;
    public override int CalculateVacationDays() => 15;
}

public class SalariedEmployee : Employee
{
    public override decimal CalculatePay() => 0;
    public override int CalculateVacationDays() => 20;
}`
                    },
                    explanation: `
في المثال الغلط: نفس الـ switch بيتكرر في 3-4 أماكن.
في المثال الصح: كل نوع موظف بيطبق سلوكه بنفسه.
          `,
                    tips: [
                        'لو الـ switch بيتكرر، يبقى لازم polymorphism.',
                        'الـ switch المسموح: في factory.',
                        'استخدم الكلاس الأساسي abstract.'
                    ],
                    samples: [
                        {
                            label: 'employee.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export abstract class Employee {
  abstract calculatePay(): number;
  abstract calculateVacationDays(): number;
}

export class CommissionedEmployee extends Employee {
  calculatePay(): number { return 0; }
  calculateVacationDays(): number { return 10; }
}

export class HourlyEmployee extends Employee {
  calculatePay(): number { return 0; }
  calculateVacationDays(): number { return 15; }
}

export class SalariedEmployee extends Employee {
  calculatePay(): number { return 0; }
  calculateVacationDays(): number { return 20; }
}

export function createEmployee(type: string): Employee {
  switch (type) {
    case 'commissioned': return new CommissionedEmployee();
    case 'hourly': return new HourlyEmployee();
    case 'salaried': return new SalariedEmployee();
    default: throw new Error(\`Unknown employee type: \${type}\`);
  }
}`
                        },
                        {
                            label: 'employee.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export class Employee {
  calculatePay() { throw new Error('Not implemented'); }
  calculateVacationDays() { throw new Error('Not implemented'); }
}

export class CommissionedEmployee extends Employee {
  calculatePay() { return 0; }
  calculateVacationDays() { return 10; }
}

export class HourlyEmployee extends Employee {
  calculatePay() { return 0; }
  calculateVacationDays() { return 15; }
}

export function createEmployee(type) {
  const map = {
    'commissioned': CommissionedEmployee,
    'hourly': HourlyEmployee
  };
  const Ctor = map[type];
  if (!Ctor) throw new Error(\`Unknown type: \${type}\`);
  return new Ctor();
}`
                        },
                        {
                            label: 'PayrollCalculator.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public static class PayrollCalculator
{
    public static decimal TotalPayroll(IEnumerable<Employee> employees)
    {
        return employees.Sum(e => e.CalculatePay());
    }

    public static int TotalVacationDays(IEnumerable<Employee> employees)
    {
        return employees.Sum(e => e.CalculateVacationDays());
    }
}`
                        },
                        {
                            label: 'employees.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- بدل ما تعمل switch على employee_type في كل query،
-- خزّن الـ behavior في جدول
CREATE TABLE EmployeeTypes (
    Id INT PRIMARY KEY,
    Name NVARCHAR(50),
    VacationDays INT,
    PayRate DECIMAL(10, 2)
);

INSERT INTO EmployeeTypes VALUES
    (1, 'Commissioned', 10, 0.10),
    (2, 'Hourly', 15, 25.00),
    (3, 'Salaried', 20, 0);

SELECT
    e.Id,
    e.Name,
    et.Name AS Type,
    et.VacationDays
FROM Employees AS e
JOIN EmployeeTypes AS et ON et.Id = e.TypeId;`
                        }
                    ]
                },

                {
                    title: '٥. أسماء معبّرة (Descriptive Names)',
                    icon: 'fa-solid fa-signature',
                    description: `
خلي اسم الدالة طويل لو لازم عشان يوصف اللي بتعمله بالظبط.
          `,
                    badExample: {
                        title: 'غلط – أسماء قصيرة وغامضة',
                        code: `public void Send(User user) { }
public void Process(Order order) { }
public void Handle(Request req) { }
public void Init() { }`
                    },
                    goodExample: {
                        title: 'صح – أسماء توضح بالظبط',
                        code: `public void SendWelcomeEmailToNewUser(User user) { }
public void ProcessRefundForCancelledOrder(Order order) { }
public void HandlePaymentFailureNotification(Request req) { }
public void InitializeDatabaseConnection() { }`
                    },
                    explanation: `
اسم طويل وواضح أحسن بكتير من اسم قصير وغامض.
          `,
                    tips: [
                        'الاسم الطويل المفهوم أحسن من القصير الغامض.',
                        'الاسم يوصف اللي الدالة بتعمله.',
                        'خلي أول كلمة فعل.'
                    ],
                    samples: [
                        {
                            label: 'user.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class UserService {
  sendWelcomeEmailToNewUser(user: User): void { }
}

export class OrderService {
  processRefundForCancelledOrder(order: Order): void { }
}

export class PaymentService {
  handlePaymentFailureNotification(request: Request): void { }
}

export class DatabaseService {
  initializeDatabaseConnection(): void { }
}`
                        },
                        {
                            label: 'UserService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class UserService
{
    public void SendWelcomeEmailToNewUser(User user) { }
}

public class OrderService
{
    public void ProcessRefundForCancelledOrder(Order order) { }
}

public class PaymentService
{
    public void HandlePaymentFailureNotification(Request request) { }
}

public class DatabaseService
{
    public void InitializeDatabaseConnection() { }
}`
                        },
                        {
                            label: 'payment.handlers.cs',
                            language: 'csharp',
                            framework: 'ASP.NET Core',
                            code: `[ApiController]
[Route("api/payments")]
public class PaymentsController : ControllerBase
{
    private readonly PaymentService _service;

    public PaymentsController(PaymentService service)
        => _service = service;

    [HttpPost("failure-notification")]
    public IActionResult NotifyFailure([FromBody] Request request)
    {
        _service.HandlePaymentFailureNotification(request);
        return Ok();
    }
}`
                        }
                    ]
                },

                {
                    title: '٦. عدد الـ parameters',
                    icon: 'fa-solid fa-sliders',
                    description: `
كل ما قل عدد الـ parameters، كان أحسن.
صفر = الأفضل، 1-2 = كويس، 3 = مقبول بشروط، أكتر من 3 = ارفضها.
          `,
                    badExample: {
                        title: 'غلط – parameters كتير',
                        code: `public void CreateUser(
    string firstName,
    string lastName,
    string email,
    string phone,
    string address,
    string city,
    int age)
{
}

CreateUser("Ali", "Hassan", "ali@x.com",
    "0123", "Street", "Cairo", 30);`
                    },
                    goodExample: {
                        title: 'صح – parameters متجمعة في object',
                        code: `public void CreateUser(UserRegistrationDto userDto) { }

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
الـ parameters الكتير بتخلي الـ caller يلخبط في الترتيب.
الحل: جمّعهم في DTO.
          `,
                    tips: [
                        'الـ boolean خليه parameter واحد بس.',
                        'لو في parameters بيبدأوا بنفس prefix، جمّعهم.',
                        'استخدم named arguments.'
                    ],
                    samples: [
                        {
                            label: 'user.dto.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export interface UserRegistrationDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  age: number;
}

export class UserService {
  createUser(dto: UserRegistrationDto): void { }
}

const service = new UserService();
service.createUser({
  firstName: 'Ali',
  lastName: 'Hassan',
  email: 'ali@x.com',
  phone: '0123',
  address: 'Street',
  city: 'Cairo',
  age: 30
});`
                        },
                        {
                            label: 'user.dto.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export class UserService {
  createUser(dto) { }
}

const service = new UserService();
service.createUser({
  firstName: 'Ali',
  lastName: 'Hassan',
  email: 'ali@x.com',
  phone: '0123',
  address: 'Street',
  city: 'Cairo',
  age: 30
});`
                        },
                        {
                            label: 'UserRegistrationDto.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class UserRegistrationDto
{
    public string FirstName { get; set; } = "";
    public string LastName { get; set; } = "";
    public string Email { get; set; } = "";
    public string Phone { get; set; } = "";
    public string Address { get; set; } = "";
    public string City { get; set; } = "";
    public int Age { get; set; }
}

public class UserService
{
    public void CreateUser(UserRegistrationDto dto) { }
}`
                        },
                        {
                            label: 'UsersController.cs',
                            language: 'csharp',
                            framework: 'ASP.NET Core',
                            code: `[ApiController]
[Route("api/users")]
public class UsersController : ControllerBase
{
    private readonly UserService _service;

    public UsersController(UserService service)
        => _service = service;

    [HttpPost]
    public IActionResult Create([FromBody] UserRegistrationDto dto)
    {
        _service.CreateUser(dto);
        return Ok();
    }
}`
                        },
                        {
                            label: 'user-insert.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- SQL خود كمان بيدعم الـ "parameter object" من خلال table-valued parameters
CREATE TYPE dbo.UserRegistrationType AS TABLE (
    FirstName NVARCHAR(100),
    LastName NVARCHAR(100),
    Email NVARCHAR(255),
    Phone NVARCHAR(20),
    Address NVARCHAR(200),
    City NVARCHAR(100),
    Age INT
);

CREATE OR ALTER PROCEDURE dbo.CreateUsersBulk
    @Users dbo.UserRegistrationType READONLY
AS
BEGIN
    INSERT INTO Users (FirstName, LastName, Email, Phone, Address, City, Age)
    SELECT FirstName, LastName, Email, Phone, Address, City, Age
    FROM @Users;
END;`
                        }
                    ]
                },

                {
                    title: '٧. تجنب الـ boolean parameters',
                    icon: 'fa-solid fa-toggle-off',
                    description: `
متمررش boolean كـ parameter عشان الدالة تتصرف بطريقتين.
          `,
                    badExample: {
                        title: 'غلط – boolean parameter',
                        code: `public void Render(bool isAdmin)
{
    if (isAdmin)
        RenderAdminView();
    else
        RenderUserView();
}

Render(true);
Render(false);`
                    },
                    goodExample: {
                        title: 'صح – دالتين منفصلتين',
                        code: `public void RenderAdminView() { }
public void RenderUserView() { }

RenderAdminView();
RenderUserView();`
                    },
                    explanation: `
الـ boolean parameter بيقول: "الدالة دي هتعمل حاجتين".
الحل: افصلهم لدالتين بأسماء واضحة.
          `,
                    tips: [
                        'أي boolean parameter = دالتين، افصلهم.',
                        'لو محتاج boolean، فكّر: يبقى enum.',
                        'Daltin منفصلتين أسهل في الـ testing.'
                    ],
                    samples: [
                        {
                            label: 'view.renderer.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class ViewRenderer {
  renderAdminView(): void { }
  renderUserView(): void { }
}

const renderer = new ViewRenderer();
renderer.renderAdminView();
renderer.renderUserView();`
                        },
                        {
                            label: 'ViewRenderer.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class ViewRenderer
{
    public void RenderAdminView() { }
    public void RenderUserView() { }
}

var renderer = new ViewRenderer();
renderer.RenderAdminView();
renderer.RenderUserView();`
                        },
                        {
                            label: 'views.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- بدل ما تعمل procedure واحدة بـ @IsAdmin boolean،
-- اعمل 2 views / procedures
CREATE VIEW AdminUsersView AS
SELECT Id, Name, Email, Permissions
FROM Users
WHERE Role = 'Admin';

CREATE VIEW RegularUsersView AS
SELECT Id, Name, Email
FROM Users
WHERE Role <> 'Admin';`
                        }
                    ]
                },

                {
                    title: '٨. Command Query Separation',
                    icon: 'fa-solid fa-code-branch',
                    description: `
الدالة لازم إما تعمل حاجة (command) أو ترجع معلومة (query).
          `,
                    badExample: {
                        title: 'غلط – command و query مع بعض',
                        code: `public bool SetUsername(string username)
{
    if (IsUsernameValid(username))
    {
        _username = username;
        return true;
    }
    return false;
}

if (SetUsername("ibrahim")) { }`
                    },
                    goodExample: {
                        title: 'صح – command و query منفصلين',
                        code: `public bool IsUsernameValid(string username)
{
    return !string.IsNullOrWhiteSpace(username)
        && username.Length >= 3
        && !_existingUsernames.Contains(username);
}

public void SetUsername(string username)
{
    _username = username;
}

if (IsUsernameValid("ibrahim"))
{
    SetUsername("ibrahim");
}`
                    },
                    explanation: `
الدالة اللي بتعمل command + query مع بعض بتخلي الكود غامض.
الحل: افصلهم.
          `,
                    tips: [
                        'الـ query أسماءها تبدأ بـ is, has, can.',
                        'الـ command أسماءها تبدأ بفعل.',
                        'لو لقيت if (setX(...))، ده signal.'
                    ],
                    samples: [
                        {
                            label: 'user.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class UserService {
  isUsernameValid(username: string): boolean {
    return !!username
      && username.length >= 3
      && !this.existingUsernames.includes(username);
  }

  setUsername(username: string): void {
    this.username = username;
  }
}

if (service.isUsernameValid('ibrahim')) {
  service.setUsername('ibrahim');
}`
                        },
                        {
                            label: 'UserService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class UserService
{
    private string _username = "";
    private readonly List<string> _existingUsernames = new();

    public bool IsUsernameValid(string username)
    {
        return !string.IsNullOrWhiteSpace(username)
            && username.Length >= 3
            && !_existingUsernames.Contains(username);
    }

    public void SetUsername(string username)
    {
        _username = username;
    }
}`
                        },
                        {
                            label: 'user-check.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- query: بيرجع bool بدون تغيير
CREATE OR ALTER FUNCTION dbo.IsUsernameAvailable(@Username NVARCHAR(50))
RETURNS BIT
AS
BEGIN
    RETURN CASE
        WHEN EXISTS (SELECT 1 FROM Users WHERE Username = @Username) THEN 0
        ELSE 1
    END;
END;

-- command: بيغيّر بدون ما يرجّع حاجة
CREATE OR ALTER PROCEDURE dbo.SetUsername
    @UserId INT,
    @Username NVARCHAR(50)
AS
BEGIN
    UPDATE Users SET Username = @Username WHERE Id = @UserId;
END;`
                        }
                    ]
                },

                {
                    title: '٩. استخدم Exceptions بدل error codes',
                    icon: 'fa-solid fa-triangle-exclamation',
                    description: `
استخدم exceptions بدل ما ترجع كود خطأ (زي -1 أو null).
          `,
                    badExample: {
                        title: 'غلط – error codes بتعمل هرم متداخل',
                        code: `if (DeletePage(page) == E_OK)
{
    if (Registry.DeleteReference(page.Name) == E_OK)
    {
        if (ConfigKeys.DeleteKey(page.Name.MakeKey()) == E_OK)
        {
            _logger.Log("page deleted");
        }
        else
        {
            _logger.Log("configKey not deleted");
        }
    }
    else
    {
        _logger.Log("deleteReference from registry failed");
    }
}`
                    },
                    goodExample: {
                        title: 'صح – exceptions بتخلي الكود نضيف',
                        code: `try
{
    DeletePage(page);
    Registry.DeleteReference(page.Name);
    ConfigKeys.DeleteKey(page.Name.MakeKey());

    _logger.Log("page deleted");
}
catch (PageNotFoundException ex)
{
    _logger.Log($"Page missing: {ex.Message}");
}
catch (RegistryException ex)
{
    _logger.Log($"Registry error: {ex.Message}");
}
catch (Exception ex)
{
    _logger.Log($"Unexpected error: {ex.Message}");
    throw;
}`
                    },
                    explanation: `
المشاكل في error codes:
1. الهرم المتداخل.
2. صعب تقرأ.
3. مفيش تفاصيل.
          `,
                    tips: [
                        'الـ try block يفضل نضيف.',
                        'الـ catch blocks للتعامل مع الأخطاء.',
                        'استخدم custom exceptions للـ domain errors.'
                    ],
                    samples: [
                        {
                            label: 'page.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class PageNotFoundError extends Error {
  constructor(name: string) {
    super(\`Page "\${name}" was not found.\`);
    this.name = 'PageNotFoundError';
  }
}

export class PageService {
  deletePage(page: Page): void {
    if (!page) throw new PageNotFoundError(page?.name ?? '');
    this.repo.delete(page);
  }

  deleteReference(name: string): void { }
  deleteConfigKey(name: string): void { }
}

try {
  service.deletePage(page);
  service.deleteReference(page.name);
  service.deleteConfigKey(page.name);
} catch (err) {
  if (err instanceof PageNotFoundError) {
    console.error(err.message);
  } else {
    throw err;
  }
}`
                        },
                        {
                            label: 'page.service.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `export class PageNotFoundError extends Error {
  constructor(name) {
    super(\`Page "\${name}" was not found.\`);
    this.name = 'PageNotFoundError';
  }
}

export class PageService {
  deletePage(page) {
    if (!page) throw new PageNotFoundError(page?.name ?? '');
    this.repo.delete(page);
  }
}`
                        },
                        {
                            label: 'PageService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class PageNotFoundException : Exception
{
    public PageNotFoundException(string name)
        : base($"Page \\"{name}\\" was not found.") { }
}

public class PageService
{
    public void DeletePage(Page page)
    {
        if (page == null)
            throw new PageNotFoundException("");
        _repository.Delete(page);
    }
}

try
{
    _service.DeletePage(page);
    _registry.DeleteReference(page.Name);
    _configKeys.DeleteKey(page.Name);
}
catch (PageNotFoundException ex)
{
    _logger.LogWarning(ex.Message);
}`
                        },
                        {
                            label: 'DeletePage.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `CREATE OR ALTER PROCEDURE dbo.DeletePage
    @PageId INT
AS
BEGIN
    IF NOT EXISTS (SELECT 1 FROM Pages WHERE Id = @PageId)
    BEGIN
        THROW 50001, 'Page not found', 1;
    END

    DELETE FROM Pages WHERE Id = @PageId;
END;`
                        },
                        {
                            label: 'pages.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `SELECT
    p.Id,
    p.Name,
    p.Content,
    p.UpdatedAt
FROM Pages AS p
WHERE p.IsDeleted = 0
    AND p.OwnerId = @OwnerId
ORDER BY p.UpdatedAt DESC;`
                        }
                    ]
                }
            ],

            quote: {
                text: `الدوال هي أول حاجة لازم تتقنها.
               لو الدوال بتاعتك كويسة، نص الشغل خلص.`,
                author: 'Robert C. Martin (Uncle Bob) — الفصل الثالث'
            },

            keyTakeaways: [
                'الدوال لازم تكون صغيرة.',
                'الدالة تعمل حاجة واحدة بس.',
                'كل الأسطر في نفس مستوى التجريد.',
                'الـ switch بيتدفن في factory.',
                'الأسماء الطويلة الواضحة أحسن.',
                'أقل parameters ممكن.',
                'متستخدمش boolean parameters.',
                'Command أو Query — مش الاتنين.',
                'استخدم exceptions بدل error codes.'
            ],

            references: [
                'Clean Code — الفصل الثالث: Functions — Robert C. Martin',
                'Refactoring — الفصل السادس — Martin Fowler',
                'Code Complete — الفصل السابع — Steve McConnell'
            ],

            hashtags: [
                'CleanCode',
                'Functions',
                'SoftwareEngineering',
                'CSharp',
                'TypeScript',
                'JavaScript',
                'EFCore',
                'ASPNet',
                'SQL',
                'LINQ'
            ]
        }
    },

    /* ═══════════════════════════════════════════════════════════════
       CHAPTER 5 — Comments
       ═══════════════════════════════════════════════════════════════ */
    'clean-code-05': {
        id: 'clean-code-05',
        slug: 'clean-code-05',
        projectName: 'التعليقات – آخر حل، مش أول حل',
        projectDescription: `الفصل الرابع من كتاب Clean Code — عن الكومنتات، بأمثلة عبر 7 بيئات برمجية.`,
        projectDate: 'آخر تحديث: 12 أكتوبر 2026',
        projectVersion: 'v2.0.0',
        projectTags: ['Clean Code', 'Comments', 'BestPractices', 'CSharp', 'TypeScript', 'JavaScript', 'EFCore', 'ASPNet', 'SQL', 'LINQ'],
        cleanCodeContent: {
            introduction: `
Uncle Bob بيبدأ الفصل ده بجملة قوية:
"Don't comment bad code — rewrite it."

يعني الكومنتات مش حل لكود وسخ.
لو حسيت إنك محتاج كومنت عشان تشرح كود غامض،
الحل الصح هو إنك تعيد كتابة الكود نفسه.
      `,

            story: `
من كام سنة، كنت شغال على مشروع شات كبير،
ولقيت كومنت فوق function بتقول:

"يرسل الرسالة للمستخدم المتصل فقط"

بس لما جيت أصلّح bug في نفس المنطقة، لقيت الكود فعليًا:

_hubContext.Clients.All.SendAsync(...)

يعني بيبعت لكل الناس، مش للمستخدم المتصل بس.

الكومنت كان كذبة. مش بس مش مفيد — كان مضلل.
      `,

            principles: [
                {
                    title: '١. كومنتات زيادة عن اللزوم (Redundant)',
                    icon: 'fa-solid fa-repeat',
                    description: `
كومنت بيكرر اللي الكود أصلاً بيقوله بوضوح.
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
}`
                    },
                    goodExample: {
                        title: 'صح – الكود بيكفي لوحده',
                        code: `counter++;

User user = new User();

public string GetName()
{
    return _name;
}`
                    },
                    explanation: `
الكومنت "يزيد العداد بواحد" فوق counter++ مجرد تكرار.
ده نوع من الضوضاء.
          `,
                    tips: [
                        'اسأل: الكومنت بيضيف معلومة جديدة؟',
                        'الكومنت اللي بيكرر اسم الدالة ضوضاء.',
                        'الملف النظيف = صفر كومنتات زايدة.'
                    ],
                    samples: [
                        {
                            label: 'cart.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class CartService {
  private itemCount = 0;

  addItem(): void {
    this.itemCount++;
  }

  getUser(id: number): User | null {
    return this.repo.findById(id);
  }
}`
                        },
                        {
                            label: 'CartService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class CartService
{
    private int _itemCount = 0;

    public void AddItem()
    {
        _itemCount++;
    }

    public User GetUser(int id)
    {
        return _repository.FindById(id);
    }
}`
                        },
                        {
                            label: 'cart.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- SQL بيتكلم بوضوح — مش محتاج كومنتات زيادة
SELECT
    Id,
    Name,
    Price,
    Quantity
FROM CartItems
WHERE CartId = @CartId;`
                        }
                    ]
                },

                {
                    title: '٢. كومنتات مضللة (Misleading)',
                    icon: 'fa-solid fa-triangle-exclamation',
                    description: `
كومنت بيقول حاجة، والكود بيعمل حاجة تانية.
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
}`
                    },
                    goodExample: {
                        title: 'صح – الكود بيقول الحقيقة بدون كومنت',
                        code: `public void SendMessageToAllClients(Message message)
{
    _hubContext.Clients.All.SendAsync("ReceiveMessage", message);
}

var TWO_MINUTE_TIMEOUT = TimeSpan.FromMinutes(2);

public bool IsUserAdult(User user)
{
    return user.Age >= 18;
}`
                    },
                    explanation: `
في المثال الغلط:
- كومنت بيقول "للمستخدم المتصل فقط" والكود بيبعت للكل.
- كومنت بيقول "30 ثانية" والكود 2 دقيقة.
          `,
                    tips: [
                        'أي كومنت بيقول حاجة، تأكد إنها صح.',
                        'الأسماء الواضحة بتلغي الحاجة للكومنت.',
                        'استخدم ثوابت بأسماء معبّرة.'
                    ],
                    samples: [
                        {
                            label: 'message.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class MessageService {
  sendMessageToAllClients(message: Message): void {
    this.hub.sendToAll('ReceiveMessage', message);
  }

  static readonly TWO_MINUTE_TIMEOUT = 120_000;

  isUserAdult(user: User): boolean {
    return user.age >= 18;
  }
}`
                        },
                        {
                            label: 'MessageService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class MessageService
{
    private readonly IHubContext<ChatHub> _hubContext;

    public MessageService(IHubContext<ChatHub> hubContext)
        => _hubContext = hubContext;

    public async Task SendMessageToAllClientsAsync(Message message)
    {
        await _hubContext.Clients.All.SendAsync("ReceiveMessage", message);
    }

    public static readonly TimeSpan TwoMinuteTimeout = TimeSpan.FromMinutes(2);

    public bool IsUserAdult(User user) => user.Age >= 18;
}`
                        },
                        {
                            label: 'SignalRHub.cs',
                            language: 'csharp',
                            framework: 'ASP.NET Core',
                            code: `public class ChatHub : Hub
{
    public async Task SendMessage(string content, int senderId)
    {
        await Clients.All.SendAsync("ReceiveMessage", new
        {
            Content = content,
            SenderId = senderId,
            SentAt = DateTime.UtcNow
        });
    }

    public async Task SendToUser(int userId, string content)
    {
        await Clients.User(userId.ToString())
            .SendAsync("ReceiveMessage", content);
    }
}`
                        }
                    ]
                },

                {
                    title: '٣. كود متعلّق (Commented-Out Code)',
                    icon: 'fa-solid fa-trash-can',
                    description: `
سطور كود قديمة سايبها بس حاطط // قبلها.
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
}`
                    },
                    goodExample: {
                        title: 'صح – الكود الجديد بس',
                        code: `public void ProcessOrder(Order order)
{
    ValidateOrder(order);
    SendNotification(order);
}`
                    },
                    explanation: `
الكود المتعلّق ده واحد من أكبر أعداء نظافة الملف.
الحل بسيط: امسحه.
          `,
                    tips: [
                        'أي كود متعلّق = بيولد شك في القارئ.',
                        'اعتمد على Git History.',
                        'الملف النظيف = صفر سطور متعلقة.'
                    ],
                    samples: [
                        {
                            label: 'order.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class OrderService {
  processOrder(order: Order): void {
    this.validateOrder(order);
    this.sendNotification(order);
  }

  private validateOrder(order: Order): void { }
  private sendNotification(order: Order): void { }
}`
                        },
                        {
                            label: 'OrderService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class OrderService
{
    public void ProcessOrder(Order order)
    {
        ValidateOrder(order);
        SendNotification(order);
    }

    private void ValidateOrder(Order order) { }
    private void SendNotification(Order order) { }
}`
                        },
                        {
                            label: 'orders.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- SQL: نفس القاعدة، مفيش SQL قديم متعلّق في الـ procedure
CREATE OR ALTER PROCEDURE dbo.ProcessOrder
    @OrderId INT
AS
BEGIN
    UPDATE Orders SET Status = 'Processing' WHERE Id = @OrderId;
    INSERT INTO OrderAudit (OrderId, Action) VALUES (@OrderId, 'Processing');
END;`
                        }
                    ]
                },

                {
                    title: '٤. كومنتات ضوضاء (Noise Comments)',
                    icon: 'fa-solid fa-volume-high',
                    description: `
كومنتات بتتكرر في كل مكان بدون أي فايدة.
          `,
                    badExample: {
                        title: 'غلط – كومنتات ضوضاء',
                        code: `/// <summary>
/// Default constructor
/// </summary>
public User() { }

/// <summary>
/// Gets or sets the name
/// </summary>
public string Name { get; set; }

/// <summary>
/// يبدأ العملية
/// </summary>
public void Start() { }`
                    },
                    goodExample: {
                        title: 'صح – كومنتات بس لما فيها قيمة',
                        code: `public User() { }

public string Name { get; set; }

public void Start() { }

/// <summary>
/// بيبدأ العملية بشكل async في background thread،
/// وبيرجع فورًا من غير ما يستنى النتيجة.
/// </summary>
public void StartInBackground() { }`
                    },
                    explanation: `
الكومنت "Default constructor" فوق public User() مش بيضيف حاجة.
          `,
                    tips: [
                        'لو الكومنت بيقول نفس الاسم — امسحه.',
                        'الكومنت المفيد بيضيف معلومة.',
                        'الكومنت اللي شغال بس عشان "يملأ فراغ" = ضوضاء.'
                    ],
                    samples: [
                        {
                            label: 'user.model.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class User {
  name: string = '';

  constructor() { }

  /**
   * بيبدأ العملية بشكل async في background thread،
   * وبيرجع فورًا من غير ما يستنى النتيجة.
   */
  startInBackground(): void {
    setTimeout(() => this.run(), 0);
  }

  private run(): void { }
}`
                        },
                        {
                            label: 'User.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class User
{
    public string Name { get; set; } = "";

    public User() { }

    /// <summary>
    /// بيبدأ العملية بشكل async في background thread،
    /// وبيرجع فورًا من غير ما يستنى النتيجة.
    /// </summary>
    public void StartInBackground()
    {
        Task.Run(() => Run());
    }

    private void Run() { }
}`
                        }
                    ]
                },

                {
                    title: '٥. كومنتات قانونية (Legal Comments)',
                    icon: 'fa-solid fa-gavel',
                    description: `
حقوق النشر أو الـ license اللي لازم تتحط فوق كل ملف.
          `,
                    badExample: {
                        title: 'مش applicable – الكومنتات دي مطلوبة',
                        code: `/* Copyright (c) 2024, 2025, 2026 Ibrahim Shafiq Inc.
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

public class User { }`
                    },
                    explanation: `
الكومنتات القانونية مقبولة.
النصيحة: خليه مختصر.
          `,
                    tips: [
                        'الكومنت القانوني مختصر — 2-3 سطور.',
                        'شاور على ملف LICENSE خارجي.',
                        'استخدم قوالب IDE.'
                    ],
                    samples: [
                        {
                            label: 'license-header.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `// Copyright (c) 2026 Ibrahim Inc. All rights reserved.
// Licensed under the MIT License. See LICENSE file for details.

export class User {
  name: string = '';
}`
                        },
                        {
                            label: 'LICENSE.md',
                            language: 'javascript',
                            framework: 'Text',
                            code: `MIT License

Copyright (c) 2026 Ibrahim Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...`
                        }
                    ]
                },

                {
                    title: '٦. شرح النية (Explanation of Intent)',
                    icon: 'fa-solid fa-lightbulb',
                    description: `
لما الكود نفسه مش هيقدر يشرح "ليه" اتخذت قرار معين.
          `,
                    badExample: {
                        title: 'غلط – الشرح بدل الكود الواضح',
                        code: `// بنعمل sleep عشان نستنى الـ API ترد
Thread.Sleep(500);

// بنستخدم 4 هنا لأن دي الحالة بتاعة الـ VIP
if (user.status == 4) { }

// بنلف مرتين عشان السبب الغامض ده
for (int i = 0; i < 2; i++) { }`
                    },
                    goodExample: {
                        title: 'صح – كومنت بيشرح "ليه" قرار غريب',
                        code: `// ليه: استخدمنا thread sleep بدل async/await
// عشان الـ legacy library مش بتدعم async operations
Thread.Sleep(500);

// ليه: بعض المستخدمين القدامى لسه بيستخدموا النظام القديم
// وبيرجعوا code غريب — احنا بنتعامل معاه مؤقتًا
if (user.legacyId != null) { }`
                    },
                    explanation: `
الفرق المهم:
- "إيه" اللي بيحصل → الكود بيقوله.
- "ليه" اخترنا الطريقة دي → الكود مش بيقوله.
          `,
                    tips: [
                        'اسأل: المعلومة دي موجودة في الكود؟',
                        'التركيز على "ليه" — مش "إيه".',
                        'القرارات التقنية الغريبة محتاجة شرح.'
                    ],
                    samples: [
                        {
                            label: 'legacy.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class LegacyService {
  async connect(): Promise<void> {
    // ليه: الـ legacy library مش بتدعم async
    // فبنستنى يدويًا قبل ما نكمل
    await new Promise(resolve => setTimeout(resolve, 500));
    this.legacyClient.connect();
  }
}`
                        },
                        {
                            label: 'LegacyService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class LegacyService
{
    public void Connect()
    {
        // ليه: استخدمنا thread sleep بدل async/await
        // عشان الـ legacy library مش بتدعم async operations
        Thread.Sleep(500);
        _legacyClient.Connect();
    }
}`
                        },
                        {
                            label: 'legacy.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- ليه: بنستخدم NOLOCK هنا عشان نتجنب deadlocks
-- مع النظام القديم اللي لسه شغال على نفس الجداول
SELECT
    o.Id,
    o.Status,
    o.Total
FROM Orders AS o WITH (NOLOCK)
WHERE o.UserId = @UserId
    AND o.Status = 'Pending';`
                        }
                    ]
                },

                {
                    title: '٧. تحذير من نتيجة (Warning of Consequences)',
                    icon: 'fa-solid fa-bell',
                    description: `
تحذير من سلوك خطير أو بطيء أو غريب.
          `,
                    badExample: {
                        title: 'غلط – من غير تحذير',
                        code: `public List<Report> GenerateFullReport(List<Data> data)
{
}

public void SaveAndBackup(User user)
{
    _db.Save(user);
    _backupService.BackupAll();
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
بعض الدوال ليها سلوك خطير أو بطيء.
كومنت تحذيري مفيد جدًا.
          `,
                    tips: [
                        'أي side effect غير متوقع = محتاج تحذير.',
                        'الأداء الضعيف = محتاج تحذير.',
                        'لو في بديل أفضل، اذكره.'
                    ],
                    samples: [
                        {
                            label: 'report.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class ReportService {
  /**
   * تحذير: الميثود دي بطيئة جدًا مع datasets كبيرة.
   * استخدمها فقط مع أقل من 1000 صف.
   * للـ datasets الأكبر، استخدم generatePagedReport.
   */
  generateFullReport(data: Data[]): Report[] {
    return data.map(d => this.buildReport(d));
  }

  generatePagedReport(data: Data[], page: number, size: number): Report[] {
    return data.slice((page - 1) * size, page * size).map(d => this.buildReport(d));
  }

  private buildReport(d: Data): Report { return {} as Report; }
}`
                        },
                        {
                            label: 'ReportService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class ReportService
{
    /// <summary>
    /// تحذير: الميثود دي بطيئة جدًا مع datasets كبيرة.
    /// استخدمها فقط مع أقل من 1000 صف.
    /// </summary>
    public List<Report> GenerateFullReport(List<Data> data)
    {
        return data.Select(BuildReport).ToList();
    }

    /// <summary>
    /// مهم: بيحفظ المستخدم وبيعمل backup كامل كـ side effect.
    /// </summary>
    public void SaveAndBackup(User user)
    {
        _db.Save(user);
        _backupService.BackupAll();
    }

    private Report BuildReport(Data data) => new Report();
}`
                        },
                        {
                            label: 'report.query.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- تحذير: الاستعلام ده بطيء جدًا مع datasets كبيرة (أكتر من مليون صف).
-- استخدم dbo.GetPagedReport للـ pagination.
CREATE OR ALTER PROCEDURE dbo.GetFullReport
AS
BEGIN
    SELECT
        o.Id,
        o.Total,
        COUNT(oi.Id) AS ItemCount
    FROM Orders AS o
    JOIN OrderItems AS oi ON oi.OrderId = o.Id
    GROUP BY o.Id, o.Total;
END;`
                        }
                    ]
                },

                {
                    title: '٨. كومنتات TODO',
                    icon: 'fa-solid fa-list-check',
                    description: `
كومنتات بتوضح شغل لسه محتاج يتعمل.
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
public void DoSomething() { }`
                    },
                    goodExample: {
                        title: 'صح – TODOs واضحة ومسؤولة',
                        code: `// TODO(ibrahim, 2026-10-02): نضيف validation للـ email
// format لما نخلص الـ regex الجديد. تتبع JIRA-1234.
public bool SendEmail(string email) { }

// TODO(ibrahim, 2026-10-02): بنستخدم الكود ده مؤقتًا
// لحد ما نكمل migration لـ API v3.
// Deadline: Q1 2027.
public void LegacySupport() { }`
                    },
                    explanation: `
الـ TODO مش بطبيعتها وحشة.
المشكلة في الـ TODOs المتراكمة.
          `,
                    tips: [
                        'أي TODO لازم يكون فيه اسم + تاريخ.',
                        'لو TODO ملهوش ticket، اعمله واحد.',
                        'راجع TODOs بانتظام.'
                    ],
                    samples: [
                        {
                            label: 'email.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class EmailService {
  // TODO(ibrahim, 2026-10-02): نضيف validation للـ email
  // format لما نخلص الـ regex الجديد. تتبع JIRA-1234.
  sendEmail(email: string): boolean {
    return true;
  }
}`
                        },
                        {
                            label: 'EmailService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class EmailService
{
    // TODO(ibrahim, 2026-10-02): نضيف validation للـ email
    // format لما نخلص الـ regex الجديد. تتبع JIRA-1234.
    public bool SendEmail(string email)
    {
        return true;
    }
}`
                        },
                        {
                            label: 'code-todos.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- SQL: بدل ما تسيب TODO في الـ code،
-- اعمله جدول tracked task
CREATE TABLE CodeTodos (
    Id INT IDENTITY PRIMARY KEY,
    FileName NVARCHAR(500),
    LineNumber INT,
    Description NVARCHAR(1000),
    AssignedTo NVARCHAR(100),
    DueDate DATE,
    Status NVARCHAR(50) DEFAULT 'Open'
);

INSERT INTO CodeTodos (FileName, LineNumber, Description, AssignedTo, DueDate)
VALUES ('Users.sql', 42, 'Add index on Email', 'ibrahim', '2026-11-01');`
                        }
                    ]
                },

                {
                    title: '٩. توضيح أهمية حاجة (Amplification)',
                    icon: 'fa-solid fa-magnifying-glass-plus',
                    description: `
كومنت بيوضّح أهمية سطر يبان عادي.
          `,
                    badExample: {
                        title: 'غلط – سطر مهم بدون توضيح',
                        code: `public void ProcessPassword(string password)
{
    var trimmed = password.Trim();
    var hashed = BCrypt.HashPassword(trimmed);
    _db.Save(hashed);
}`
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
}`
                    },
                    explanation: `
بعض الأسطر بتبان عادية جدًا، بس ليها أهمية كبيرة.
          `,
                    tips: [
                        'لو السطر مهم بس مش واضح، اكتب كومنت.',
                        'اشرح النتيجة لو السطر اتشال.',
                        'متكتبش كومنت على كل سطر.'
                    ],
                    samples: [
                        {
                            label: 'password.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class PasswordService {
  processPassword(password: string): void {
    // مهم: الـ trim هنا ضروري عشان الـ password ممكن يوصل
    // بمسافات زيادة من الـ frontend، وده بيسبب فشل في الـ hash
    // comparison لو ما اتعملش.
    const trimmed = password.trim();

    const hashed = this.hash(trimmed);
    this.db.save(hashed);
  }

  private hash(pwd: string): string { return pwd; }
}`
                        },
                        {
                            label: 'PasswordService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class PasswordService
{
    public void ProcessPassword(string password)
    {
        // مهم: الـ trim هنا ضروري عشان الـ password ممكن يوصل
        // بمسافات زيادة من الـ frontend.
        var trimmed = password.Trim();

        var hashed = BCrypt.Net.BCrypt.HashPassword(trimmed);
        _db.Save(hashed);
    }
}`
                        },
                        {
                            label: 'password-check.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- مهم: بنستخدم LTRIM(RTRIM(...)) هنا عشان الـ passwords
-- بتوصل أحيانًا بمسافات زيادة من الـ frontend.
-- لو ما عملناهاش، الـ comparison هيفشل مع الـ hash المخزّن.
SELECT u.Id
FROM Users AS u
WHERE u.Email = @Email
    AND u.PasswordHash = HASHBYTES('SHA2_256', LTRIM(RTRIM(@Password)));`
                        }
                    ]
                }
            ],

            quote: {
                text: `Don't comment bad code — rewrite it.
               الكومنت هو آخر حل، مش أول حل.`,
                author: 'Robert C. Martin (Uncle Bob) — الفصل الرابع'
            },

            keyTakeaways: [
                'الكومنتات مش بتتعدل مع الكود.',
                'الكومنت المضلل أخطر من عدم وجود كومنت.',
                'الكود المتعلّق امسحه.',
                'الكومنت اللي بيكرر الاسم = ضوضاء.',
                'لو محتاج كومنت عشان تشرح كود غامض، عيد كتابة الكود.',
                'الكومنت الجيد بيشرح "ليه".',
                'TODOs لازم يكون لها owner + تاريخ.',
                'القاعدة الذهبية: rewrite أول، comment آخر.'
            ],

            references: [
                'Clean Code — الفصل الرابع: Comments — Robert C. Martin',
                'The Art of Readable Code — Dustin Boswell & Trevor Foucher',
                'Refactoring — الفصل السادس — Martin Fowler'
            ],

            hashtags: [
                'CleanCode',
                'Comments',
                'SoftwareEngineering',
                'CSharp',
                'TypeScript',
                'JavaScript',
                'EFCore',
                'ASPNet',
                'SQL',
                'LINQ'
            ]
        }
    },

    /* ═══════════════════════════════════════════════════════════════
       CHAPTER 6 — Formatting
       ═══════════════════════════════════════════════════════════════ */
    'clean-code-06': {
        id: 'clean-code-06',
        slug: 'clean-code-06',
        projectName: 'التنسيق – الكود اللي بيعرف يتنفّس',
        projectDescription: `الفصل الخامس من Clean Code — عن التنسيق الرأسي والأفقي، بأمثلة عبر 7 بيئات برمجية.`,
        projectDate: 'آخر تحديث: 12 أكتوبر 2026',
        projectVersion: 'v2.0.0',
        projectTags: ['Clean Code', 'Formatting', 'CSharp', 'TypeScript', 'JavaScript', 'EFCore', 'ASPNet', 'SQL', 'LINQ'],
        cleanCodeContent: {
            introduction: `
تخيّل إنك داخل مكتبة كبيرة، وعايز تدوّر على كتاب معيّن.

المكتبة الأولى: الرفوف منظّمة، كل قسم ليه لافتة.
المكتبة التانية: الكتب مكوّمة فوق بعض.

المكتبتين فيهم نفس عدد الكتب بالظبط.
بس الفرق في الوقت والجهد هائل.

ده بالظبط الفرق بين كود مُنسَّق كويس وكود مُنسَّق وحش.
      `,

            story: `
في مشروع ChatterHub بتاعي، كنت شغّال على ملف MessageService.cs.
الملف كان حوالي 600 سطر. كل الـ methods ملزّقة فوق بعض.

لما جيت أضيف feature جديدة، قعدت 20 دقيقة بس عشان أفهم:
- فين المكان المناسب للكود الجديد؟
- إيه الـ dependency الحقيقية بين الـ methods دي؟

في اللحظة دي، افتكرت فصل Formatting من Clean Code.

رجعت للملف، وقسمته على أساس "المفاهيم":
- Section للـ fields
- Section للـ constructor
- Section للـ public methods
- Section للـ private helpers في الآخر
      `,

            principles: [
                {
                    title: '١. التشبيه الصح — الصحيفة (Newspaper Metaphor)',
                    icon: 'fa-solid fa-newspaper',
                    description: `
الملف المفروض يتبني زي جريدة: العنوان فوق، التفاصيل تحت.
          `,
                    badExample: {
                        title: 'غلط — helpers فوق، public API تحت',
                        code: `public class UserService
{
    private string HashPassword(string raw) { return raw; }
    private bool IsEmailValid(string email) { return true; }
    private void LogAction(string action) { }

    public void RegisterUser(string email, string password)
    {
        if (!IsEmailValid(email)) throw new Exception();
        var hash = HashPassword(password);
        LogAction("register: " + email);
    }
}`
                    },
                    goodExample: {
                        title: 'صح — public API فوق، helpers تحت',
                        code: `public class UserService
{
    public void RegisterUser(string email, string password)
    {
        if (!IsEmailValid(email)) throw new ArgumentException();
        var hash = HashPassword(password);
        LogAction("register: " + email);
    }

    private bool IsEmailValid(string email) { return true; }
    private string HashPassword(string raw) { return raw; }
    private void LogAction(string action) { }
}`
                    },
                    explanation: `
في المثال الغلط: القارئ لازم يعدّي على 3 دوال private قبل ما يشوف الـ API.
في المثال الصح: أول حاجة يشوفها هي Public API.
          `,
                    tips: [
                        'الـ public methods في الأول.',
                        'الـ constructor قبل الـ methods.',
                        'الـ private helpers في الآخر.',
                        'الـ fields في الأعلى دايماً.'
                    ],
                    samples: [
                        {
                            label: 'user.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class UserService {
  constructor(private readonly repo: UserRepository) {}

  registerUser(email: string, password: string): void {
    if (!this.isEmailValid(email)) throw new Error('Invalid email');
    const hash = this.hashPassword(password);
    this.logAction(\`register: \${email}\`);
    this.repo.save({ email, hash });
  }

  getUser(id: number): User | null {
    return this.repo.findById(id);
  }

  private isEmailValid(email: string): boolean {
    return email.includes('@');
  }

  private hashPassword(raw: string): string {
    return raw;
  }

  private logAction(action: string): void {
    console.log(action);
  }
}`
                        },
                        {
                            label: 'UserService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class UserService
{
    private readonly IUserRepository _repository;

    public UserService(IUserRepository repository)
        => _repository = repository;

    public void RegisterUser(string email, string password)
    {
        if (!IsEmailValid(email)) throw new ArgumentException("Invalid email");
        var hash = HashPassword(password);
        LogAction($"register: {email}");
        _repository.Save(new User { Email = email, PasswordHash = hash });
    }

    public User GetUser(int id) => _repository.FindById(id);

    private bool IsEmailValid(string email) => email.Contains('@');
    private string HashPassword(string raw) => raw;
    private void LogAction(string action) => Console.WriteLine(action);
}`
                        },
                        {
                            label: 'UserRepository.cs',
                            language: 'csharp',
                            framework: 'EF Core',
                            code: `public class UserRepository : IUserRepository
{
    private readonly AppDbContext _context;

    public UserRepository(AppDbContext context)
        => _context = context;

    public async Task<User?> FindByIdAsync(int id)
        => await _context.Users.FindAsync(id);

    public void Save(User user)
    {
        _context.Users.Add(user);
        _context.SaveChanges();
    }
}`
                        },
                        {
                            label: 'UsersController.cs',
                            language: 'csharp',
                            framework: 'ASP.NET Core',
                            code: `[ApiController]
[Route("api/users")]
public class UsersController : ControllerBase
{
    private readonly UserService _service;

    public UsersController(UserService service)
        => _service = service;

    [HttpPost("register")]
    public IActionResult Register([FromBody] RegisterDto dto)
    {
        _service.RegisterUser(dto.Email, dto.Password);
        return Ok();
    }
}`
                        },
                        {
                            label: 'users.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `CREATE TABLE Users (
    Id INT IDENTITY PRIMARY KEY,
    Email NVARCHAR(255) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(500) NOT NULL,
    CreatedAt DATETIME2 DEFAULT SYSUTCDATETIME()
);`
                        }
                    ]
                },

                {
                    title: '٢. المسافة بين المفاهيم (Vertical Openness)',
                    icon: 'fa-solid fa-arrows-up-down',
                    description: `
المسافات بتفصل بصريًا بين الأفكار المختلفة.
          `,
                    badExample: {
                        title: 'غلط — كل حاجة ملزّقة',
                        code: `public class MessageService {
    private readonly AppDbContext _context;
    public MessageService(AppDbContext context) { _context = context; }
    public void SendMessage(string content, int senderId, int receiverId) {
        var message = new Message { Content = content, SenderId = senderId };
        _context.Messages.Add(message);
        _context.SaveChanges();
    }
    public List<Message> GetConversation(int u1, int u2) {
        return _context.Messages.Where(m => m.SenderId == u1).ToList();
    }
}`
                    },
                    goodExample: {
                        title: 'صح — كل فكرة ليها تنفّس',
                        code: `public class MessageService
{
    private readonly AppDbContext _context;

    public MessageService(AppDbContext context)
    {
        _context = context;
    }

    public void SendMessage(string content, int senderId, int receiverId)
    {
        var message = new Message { Content = content, SenderId = senderId };
        _context.Messages.Add(message);
        _context.SaveChanges();
    }

    public List<Message> GetConversation(int u1, int u2)
    {
        return _context.Messages
            .Where(m => m.SenderId == u1)
            .ToList();
    }
}`
                    },
                    explanation: `
المسافات في الكود زي علامات الترقيم في جملة.
          `,
                    tips: [
                        'سطر فاضي بين كل method.',
                        'سطر فاضي بين الـ fields والـ constructor.',
                        'سطر فاضي قبل return.'
                    ],
                    samples: [
                        {
                            label: 'order.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class OrderService {
  private readonly TAX_RATE = 0.14;

  constructor(private readonly repo: OrderRepository) {}

  placeOrder(items: OrderItem[], customerId: number): Order {
    const subtotal = this.computeSubtotal(items);
    const total = this.applyTax(subtotal);
    const order = this.buildOrder(customerId, items, total);
    this.repo.save(order);
    return order;
  }

  cancelOrder(orderId: number): void {
    const order = this.repo.findById(orderId);
    if (!order) return;
    order.status = 'cancelled';
    this.repo.save(order);
  }

  private computeSubtotal(items: OrderItem[]): number {
    return items.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  private applyTax(amount: number): number {
    return amount * (1 + this.TAX_RATE);
  }

  private buildOrder(customerId: number, items: OrderItem[], total: number): Order {
    return { customerId, items, total, createdAt: new Date(), status: 'pending' };
  }
}`
                        },
                        {
                            label: 'OrderService.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class OrderService
{
    private const decimal TaxRate = 0.14m;
    private readonly IOrderRepository _repository;

    public OrderService(IOrderRepository repository)
        => _repository = repository;

    public Order PlaceOrder(List<OrderItem> items, int customerId)
    {
        var subtotal = ComputeSubtotal(items);
        var total = ApplyTax(subtotal);
        var order = BuildOrder(customerId, items, total);
        _repository.Save(order);
        return order;
    }

    public void CancelOrder(int orderId)
    {
        var order = _repository.FindById(orderId);
        if (order == null) return;
        order.Status = "cancelled";
        _repository.Save(order);
    }

    private decimal ComputeSubtotal(List<OrderItem> items)
        => items.Sum(i => i.Price * i.Quantity);

    private decimal ApplyTax(decimal amount)
        => amount * (1 + TaxRate);

    private Order BuildOrder(int customerId, List<OrderItem> items, decimal total)
        => new Order { CustomerId = customerId, Items = items, Total = total };
}`
                        },
                        {
                            label: 'orders.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `CREATE TABLE Orders (
    Id INT IDENTITY PRIMARY KEY,
    CustomerId INT NOT NULL,
    Total DECIMAL(18, 2) NOT NULL,
    Status NVARCHAR(50) DEFAULT 'pending',
    CreatedAt DATETIME2 DEFAULT SYSUTCDATETIME()
);

CREATE TABLE OrderItems (
    Id INT IDENTITY PRIMARY KEY,
    OrderId INT NOT NULL REFERENCES Orders(Id),
    ProductId INT NOT NULL,
    Price DECIMAL(18, 2) NOT NULL,
    Quantity INT NOT NULL
);`
                        }
                    ]
                },

                {
                    title: '٣. الكثافة الرأسية (Vertical Density)',
                    icon: 'fa-solid fa-compress',
                    description: `
مش كل حاجة محتاجة مسافات. الأسطر المرتبطة منطقيًا بتفضل جنب بعض.
          `,
                    badExample: {
                        title: 'غلط — مسافات في مكان غلط',
                        code: `public decimal CalculateTotal(Order order)
{
    var subtotal = order.Items.Sum(i => i.Price * i.Quantity);

    var tax = subtotal * TaxRate;

    var shipping = order.IsExpress ? 50 : 20;

    var total = subtotal + tax + shipping;

    return total;
}`
                    },
                    goodExample: {
                        title: 'صح — المرتبط جنب بعضه',
                        code: `public decimal CalculateTotal(Order order)
{
    var subtotal = order.Items.Sum(i => i.Price * i.Quantity);
    var tax = subtotal * TaxRate;
    var shipping = order.IsExpress ? 50 : 20;
    var total = subtotal + tax + shipping;

    return total;
}`
                    },
                    explanation: `
المسافة للفصل بين الأفكار، مش للزينة.
          `,
                    tips: [
                        'لو الأسطر بتعبر عن فكرة واحدة، متسيبهاش بمسافات.',
                        'سطر فاضي واحد كفاية.',
                        'متعملش سطر فاضي قبل closing brace.'
                    ],
                    samples: [
                        {
                            label: 'cart.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export function computeCartTotal(cart: Cart, taxRate: number): number {
  const subtotal = cart.items.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = subtotal * taxRate;
  const shipping = cart.express ? 50 : 20;
  const total = subtotal + tax + shipping;

  return total;
}`
                        },
                        {
                            label: 'CartCalculator.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public static class CartCalculator
{
    public static decimal ComputeTotal(Cart cart, decimal taxRate)
    {
        var subtotal = cart.Items.Sum(i => i.Price * i.Quantity);
        var tax = subtotal * taxRate;
        var shipping = cart.Express ? 50m : 20m;
        var total = subtotal + tax + shipping;

        return total;
    }
}`
                        },
                        {
                            label: 'cart-queries.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `SELECT
    c.Id,
    SUM(ci.Price * ci.Quantity) AS Subtotal,
    SUM(ci.Price * ci.Quantity) * @TaxRate AS Tax,
    CASE WHEN c.Express = 1 THEN 50 ELSE 20 END AS Shipping,
    SUM(ci.Price * ci.Quantity) * (1 + @TaxRate)
        + CASE WHEN c.Express = 1 THEN 50 ELSE 20 END AS Total
FROM Carts AS c
JOIN CartItems AS ci ON ci.CartId = c.Id
WHERE c.Id = @CartId
GROUP BY c.Id, c.Express;`
                        }
                    ]
                },

                {
                    title: '٤. المسافة بين المفاهيم المرتبطة (Vertical Distance)',
                    icon: 'fa-solid fa-link',
                    description: `
المفاهيم المرتبطة لازم تكون قريبة من بعض في الملف.
          `,
                    badExample: {
                        title: 'غلط — variable بعيد عن استخدامه',
                        code: `public class ReportGenerator
{
    private readonly string _defaultCulture = "en-US";
    private readonly int _pageSize = 50;
    private readonly string _exportPath = "/tmp/exports";
    private readonly Logger _logger = Logger.Instance;
    private readonly CacheManager _cache = new CacheManager();
    private readonly TemplateEngine _templates = new TemplateEngine();

    public void GenerateReport(int userId)
    {
        var user = GetUser(userId);
        var template = _templates.Load("report");
        var culture = new CultureInfo(_defaultCulture);
        var cached = _cache.Get(userId);
        var pageSize = _pageSize;
    }

    private User GetUser(int id) => null;
}`
                    },
                    goodExample: {
                        title: 'صح — كل حاجة قريبة من استخدامها',
                        code: `public class ReportGenerator
{
    private readonly ICacheManager _cache;
    private readonly ITemplateEngine _templates;
    private readonly IReportOptions _options;

    public ReportGenerator(
        ICacheManager cache,
        ITemplateEngine templates,
        IReportOptions options)
    {
        _cache = cache;
        _templates = templates;
        _options = options;
    }

    public void GenerateReport(int userId)
    {
        var user = GetUser(userId);
        var template = _templates.Load("report");
        var culture = new CultureInfo(_options.DefaultCulture);
        var cached = _cache.Get(userId);
    }

    private User GetUser(int id) => null;
}`
                    },
                    explanation: `
القاعدة: لو method بتستخدم variable، خلي الـ variable قريب منها.
          `,
                    tips: [
                        'الـ local variables في أقرب مكان للاستخدام.',
                        'الـ class fields في الأول.',
                        'الـ constructor params للـ dependencies.'
                    ],
                    samples: [
                        {
                            label: 'report.service.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `export class ReportService {
  constructor(
    private readonly cache: CacheService,
    private readonly templates: TemplateService,
    private readonly options: ReportOptions
  ) {}

  generate(userId: number): Report {
    const template = this.templates.load('report');
    const culture = this.options.defaultCulture;
    const cached = this.cache.get(userId);

    return { userId, template, culture, cached };
  }
}`
                        },
                        {
                            label: 'ReportGenerator.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class ReportGenerator
{
    private readonly ICacheManager _cache;
    private readonly ITemplateEngine _templates;
    private readonly IReportOptions _options;

    public ReportGenerator(
        ICacheManager cache,
        ITemplateEngine templates,
        IReportOptions options)
    {
        _cache = cache;
        _templates = templates;
        _options = options;
    }

    public void GenerateReport(int userId)
    {
        var user = GetUser(userId);
        var template = _templates.Load("report");
        var culture = new CultureInfo(_options.DefaultCulture);
        var cached = _cache.Get(userId);
    }

    private User GetUser(int id) => null;
}`
                        },
                        {
                            label: 'reports.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- في SQL، كل column قريب من الـ query اللي بتستخدمه
SELECT
    r.Id,
    r.Title,
    r.Content,
    u.Name AS AuthorName,
    u.Email AS AuthorEmail
FROM Reports AS r
JOIN Users AS u ON u.Id = r.AuthorId
WHERE r.CreatedAt >= @FromDate;`
                        }
                    ]
                },

                {
                    title: '٥. طول السطر (Horizontal Line Length)',
                    icon: 'fa-solid fa-text-width',
                    description: `
خلي السطور قصيرة. الحد الأقصى المقترح 100-120 حرف.
          `,
                    badExample: {
                        title: 'غلط — سطر طويل بيوجع العين',
                        code: `public async Task<IActionResult> GetUserOrdersAsync(int userId, DateTime? fromDate, DateTime? toDate, string filterStatus, int pageNumber, int pageSize)
{
    var query = _context.Orders.AsNoTracking().Where(o => o.UserId == userId && (fromDate == null || o.CreatedAt >= fromDate) && (toDate == null || o.CreatedAt <= toDate) && (string.IsNullOrEmpty(filterStatus) || o.Status == filterStatus)).OrderByDescending(o => o.CreatedAt).Skip((pageNumber - 1) * pageSize).Take(pageSize);
    var orders = await query.Select(o => new { o.Id, o.Status, o.Total, o.CreatedAt }).ToListAsync();
    return Ok(new { Orders = orders, Total = await query.CountAsync(), Page = pageNumber });
}`
                    },
                    goodExample: {
                        title: 'صح — كل فكرة في سطر',
                        code: `public async Task<IActionResult> GetUserOrdersAsync(
    int userId,
    DateTime? fromDate,
    DateTime? toDate,
    string filterStatus,
    int pageNumber,
    int pageSize)
{
    var query = _context.Orders
        .AsNoTracking()
        .Where(o => o.UserId == userId
            && (fromDate == null || o.CreatedAt >= fromDate)
            && (toDate == null || o.CreatedAt <= toDate)
            && (string.IsNullOrEmpty(filterStatus) || o.Status == filterStatus))
        .OrderByDescending(o => o.CreatedAt);

    var total = await query.CountAsync();

    var orders = await query
        .Skip((pageNumber - 1) * pageSize)
        .Take(pageSize)
        .Select(o => new { o.Id, o.Status, o.Total, o.CreatedAt })
        .ToListAsync();

    return Ok(new { Orders = orders, Total = total, Page = pageNumber });
}`
                    },
                    explanation: `
الـ method parameters الطويلة: كل واحدة في سطر.
الـ LINQ chain: كل operation في سطر.
          `,
                    tips: [
                        'لو السطر عدّى 100 حرف، اكسره.',
                        'method parameters الطويلة → كل parameter في سطر.',
                        'LINQ chains → كل method في سطر.'
                    ],
                    samples: [
                        {
                            label: 'user.orders.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `async function getUserOrders(
  userId: number,
  from: Date | null,
  to: Date | null,
  status: string,
  page: number,
  size: number
): Promise<OrderPage> {
  const query = orders
    .filter(o => o.userId === userId)
    .filter(o => !from || o.createdAt >= from)
    .filter(o => !to || o.createdAt <= to)
    .filter(o => !status || o.status === status)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  const total = query.length;
  const items = query.slice((page - 1) * size, page * size);

  return { items, total, page };
}`
                        },
                        {
                            label: 'UserOrdersController.cs',
                            language: 'csharp',
                            framework: 'ASP.NET Core',
                            code: `[ApiController]
[Route("api/users")]
public class UserOrdersController : ControllerBase
{
    private readonly AppDbContext _context;

    public UserOrdersController(AppDbContext context) => _context = context;

    [HttpGet("{userId}/orders")]
    public async Task<IActionResult> GetOrders(
        int userId,
        [FromQuery] DateTime? from,
        [FromQuery] DateTime? to,
        [FromQuery] string? status,
        [FromQuery] int page = 1,
        [FromQuery] int size = 20)
    {
        var query = _context.Orders
            .AsNoTracking()
            .Where(o => o.UserId == userId);

        if (from.HasValue)
            query = query.Where(o => o.CreatedAt >= from.Value);

        if (to.HasValue)
            query = query.Where(o => o.CreatedAt <= to.Value);

        if (!string.IsNullOrEmpty(status))
            query = query.Where(o => o.Status == status);

        var total = await query.CountAsync();

        var items = await query
            .OrderByDescending(o => o.CreatedAt)
            .Skip((page - 1) * size)
            .Take(size)
            .Select(o => new OrderDto(o.Id, o.Status, o.Total, o.CreatedAt))
            .ToListAsync();

        return Ok(new { items, total, page });
    }
}`
                        },
                        {
                            label: 'user-orders.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `SELECT
    o.Id,
    o.Status,
    o.Total,
    o.CreatedAt
FROM Orders AS o
WHERE o.UserId = @UserId
    AND (@FromDate IS NULL OR o.CreatedAt >= @FromDate)
    AND (@ToDate IS NULL OR o.CreatedAt <= @ToDate)
    AND (@Status IS NULL OR o.Status = @Status)
ORDER BY o.CreatedAt DESC
OFFSET (@Page - 1) * @Size ROWS
FETCH NEXT @Size ROWS ONLY;`
                        },
                        {
                            label: 'OrderQueries.cs',
                            language: 'csharp',
                            framework: 'LINQ',
                            code: `var page = await _context.Orders
    .AsNoTracking()
    .Where(o => o.UserId == userId)
    .Where(o => from == null || o.CreatedAt >= from)
    .Where(o => to == null || o.CreatedAt <= to)
    .Where(o => string.IsNullOrEmpty(status) || o.Status == status)
    .OrderByDescending(o => o.CreatedAt)
    .Skip((pageNumber - 1) * pageSize)
    .Take(pageSize)
    .Select(o => new OrderDto
    {
        Id = o.Id,
        Status = o.Status,
        Total = o.Total
    })
    .ToListAsync();`
                        }
                    ]
                },

                {
                    title: '٦. المسافات الأفقية (Horizontal Whitespace)',
                    icon: 'fa-solid fa-arrows-left-right',
                    description: `
المسافة بين العناصر بتعبّر عن قوة الارتباط بينهم.
          `,
                    badExample: {
                        title: 'غلط — كل حاجة ملزّقة',
                        code: `int total=subtotal+tax;
var user=new User{Name="Ali",Age=30};
if(user.Age>=18){SendEmail(user);}
for(int i=0;i<users.Count;i++){Process(users[i]);}
var query=users.Where(u=>u.Age>18).Select(u=>u.Name).ToList();`
                    },
                    goodExample: {
                        title: 'صح — المسافات بتوضح العلاقات',
                        code: `int total = subtotal + tax;

var user = new User { Name = "Ali", Age = 30 };

if (user.Age >= 18)
{
    SendEmail(user);
}

for (int i = 0; i < users.Count; i++)
{
    Process(users[i]);
}

var query = users
    .Where(u => u.Age > 18)
    .Select(u => u.Name)
    .ToList();`
                    },
                    explanation: `
المسافات حوالين = و + بتفصل العمليات.
          `,
                    tips: [
                        'مسافة حوالين الـ binary operators.',
                        'مسافة بعد الفاصلة، مش قبلها.',
                        'مفيش مسافة جوه () و [].',
                        'مسافة بعد if/for/while وقبل الـ (.'
                    ],
                    samples: [
                        {
                            label: 'spacing.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `const total = subtotal + tax;
const user = { name: 'Ali', age: 30 };

if (user.age >= 18) {
  sendEmail(user);
}

for (let i = 0; i < users.length; i++) {
  process(users[i]);
}

const query = users
  .filter(u => u.age > 18)
  .map(u => u.name);`
                        },
                        {
                            label: 'spacing.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `const total = subtotal + tax;
const user = { name: 'Ali', age: 30 };

if (user.age >= 18) {
  sendEmail(user);
}

const query = users
  .filter(u => u.age > 18)
  .map(u => u.name);`
                        },
                        {
                            label: 'linq-example.cs',
                            language: 'csharp',
                            framework: 'LINQ',
                            code: `var activeUsers = users
    .Where(u => u.IsActive)
    .Where(u => u.Age >= 18)
    .OrderBy(u => u.Name)
    .Select(u => new
    {
        u.Id,
        u.Name,
        u.Email
    })
    .ToList();`
                        },
                        {
                            label: 'user.query.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `SELECT
    u.Id,
    u.Name,
    u.Email,
    COUNT(o.Id) AS OrderCount
FROM Users AS u
LEFT JOIN Orders AS o
    ON o.UserId = u.Id
WHERE u.IsActive = 1
    AND u.Age >= 18
GROUP BY
    u.Id,
    u.Name,
    u.Email
ORDER BY u.Name ASC;`
                        }
                    ]
                },

                {
                    title: '٧. قواعد الفريق (Team Rules)',
                    icon: 'fa-solid fa-people-group',
                    description: `
الفريق كله لازم يتفق على نفس أسلوب التنسيق.
          `,
                    badExample: {
                        title: 'غلط — كل ملف ليه أسلوب مختلف',
                        code: `public class UserService {
    public void Register(string e, string p) {
        if (true) {
        }
    }
}

public class OrderService
{
    public void Create(int id, decimal price)
    {
        if (true)
        {
        }
    }
}`
                    },
                    goodExample: {
                        title: 'صح — قواعد موثقة في .editorconfig',
                        code: `root = true

[*]
end_of_line = lf
insert_final_newline = true
charset = utf-8
indent_style = space
indent_size = 4
trim_trailing_whitespace = true

[*.cs]
csharp_new_line_before_open_brace = all
csharp_prefer_braces = true:suggestion
dotnet_sort_system_directives_first = true

[*.{ts,js}]
indent_size = 2
quote_type = single

[*.{json,yml,yaml}]
indent_size = 2`
                    },
                    explanation: `
الحل: .editorconfig — ملف واحد بيفرض القواعد على الكل.
          `,
                    tips: [
                        'حط .editorconfig في root المشروع.',
                        'فعّل auto-format on save.',
                        'ضيف pre-commit hooks.',
                        'استخدم Prettier للـ JS/TS و Roslyn للـ C#.'
                    ],
                    samples: [
                        {
                            label: 'editorconfig',
                            language: 'javascript',
                            framework: 'EditorConfig',
                            code: `root = true

[*]
end_of_line = lf
insert_final_newline = true
charset = utf-8
indent_style = space
indent_size = 4
trim_trailing_whitespace = true

[*.cs]
csharp_new_line_before_open_brace = all
csharp_prefer_braces = true:suggestion
dotnet_sort_system_directives_first = true

[*.{ts,js}]
indent_size = 2
quote_type = single

[*.{json,yml,yaml}]
indent_size = 2`
                        },
                        {
                            label: 'prettier.config.js',
                            language: 'javascript',
                            framework: 'Prettier',
                            code: `export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  arrowParens: 'always',
  endOfLine: 'lf'
};`
                        },
                        {
                            label: 'Directory.Build.props',
                            language: 'javascript',
                            framework: 'MSBuild (C#)',
                            code: `<Project>
  <PropertyGroup>
    <LangVersion>latest</LangVersion>
    <Nullable>enable</Nullable>
    <TreatWarningsAsErrors>true</TreatWarningsAsErrors>
    <EnforceCodeStyleInBuild>true</EnforceCodeStyleInBuild>
    <AnalysisLevel>latest</AnalysisLevel>
  </PropertyGroup>
</Project>`
                        },
                        {
                            label: 'sql-format.sql',
                            language: 'sql',
                            framework: 'SQL Server',
                            code: `-- قواعد SQL: كلمات مفتاحية UPPERCASE، أسماء الجداول snake_case
-- كل JOIN في سطر منفصل، كل AND في سطر منفصل
SELECT
    u.Id,
    u.Name,
    COUNT(o.Id) AS OrderCount
FROM Users AS u
INNER JOIN Orders AS o
    ON o.UserId = u.Id
WHERE u.IsActive = 1
    AND u.CreatedAt >= @FromDate
GROUP BY
    u.Id,
    u.Name
ORDER BY u.Name;`
                        }
                    ]
                },

                {
                    title: '٨. تنسيق الاختبارات (Formatting Tests)',
                    icon: 'fa-solid fa-flask',
                    description: `
لما التنسيق يكون clean، الاختبارات بتقرا كمان بشكل clean.
          `,
                    badExample: {
                        title: 'غلط — اختبارات مش منظمة',
                        code: `[Fact]
public void Test1() {
    var u=new User{Name="Ali",Age=30};
    var s=new UserService();
    var r=s.RegisterUser(u);
    Assert.True(r);
    var u2=new User{Name="",Age=20};
    var r2=s.RegisterUser(u2);
    Assert.False(r2);
}`
                    },
                    goodExample: {
                        title: 'صح — Arrange/Act/Assert + أسماء معبّرة',
                        code: `public class UserServiceTests
{
    private readonly UserService _sut;

    public UserServiceTests()
    {
        _sut = new UserService();
    }

    [Fact]
    public void RegisterUser_WithValidData_ReturnsTrue()
    {
        // Arrange
        var user = new User { Name = "Ali", Age = 30 };

        // Act
        var result = _sut.RegisterUser(user);

        // Assert
        Assert.True(result);
    }

    [Theory]
    [InlineData("", 20)]
    [InlineData("Bob", 15)]
    public void RegisterUser_WithInvalidData_ReturnsFalse(string name, int age)
    {
        // Arrange
        var user = new User { Name = name, Age = age };

        // Act
        var result = _sut.RegisterUser(user);

        // Assert
        Assert.False(result);
    }
}`
                    },
                    explanation: `
اختبارات كويسة بتتبع نفس قواعد التنسيق.
          `,
                    tips: [
                        'اسم الـ test = سطر متكامل بيوصف السلوك.',
                        'Arrange / Act / Assert بتفصل بصريًا.',
                        'Test واحد = concept واحد.',
                        'استخدم [Theory] + [InlineData].'
                    ],
                    samples: [
                        {
                            label: 'user.service.spec.ts',
                            language: 'typescript',
                            framework: 'TypeScript',
                            code: `import { UserService } from './user.service';

describe('UserService.registerUser', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('returns true when user data is valid', () => {
    // Arrange
    const user = { name: 'Ali', age: 30 };

    // Act
    const result = service.registerUser(user);

    // Assert
    expect(result).toBe(true);
  });

  it('returns false when name is empty', () => {
    const user = { name: '', age: 30 };
    expect(service.registerUser(user)).toBe(false);
  });
});`
                        },
                        {
                            label: 'user.service.spec.js',
                            language: 'javascript',
                            framework: 'JavaScript',
                            code: `import { UserService } from './user.service';

describe('UserService.registerUser', () => {
  let service;

  beforeEach(() => {
    service = new UserService();
  });

  it('returns true when user data is valid', () => {
    const user = { name: 'Ali', age: 30 };
    const result = service.registerUser(user);
    expect(result).toBe(true);
  });
});`
                        },
                        {
                            label: 'UserServiceTests.cs',
                            language: 'csharp',
                            framework: 'C# / .NET',
                            code: `public class UserServiceTests
{
    private readonly UserService _sut;

    public UserServiceTests()
    {
        _sut = new UserService();
    }

    [Fact]
    public void RegisterUser_WithValidData_ReturnsTrue()
    {
        var user = new User { Name = "Ali", Age = 30 };
        var result = _sut.RegisterUser(user);
        Assert.True(result);
    }
}`
                        },
                        {
                            label: 'UserRepositoryTests.cs',
                            language: 'csharp',
                            framework: 'EF Core',
                            code: `public class UserRepositoryTests
{
    [Fact]
    public async Task FindByIdAsync_WithExistingUser_ReturnsUser()
    {
        // Arrange
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString())
            .Options;

        await using var db = new AppDbContext(options);
        var user = new User { Id = 1, Name = "Ali" };
        db.Users.Add(user);
        await db.SaveChangesAsync();

        var repo = new UserRepository(db);

        // Act
        var result = await repo.FindByIdAsync(1);

        // Assert
        Assert.NotNull(result);
        Assert.Equal("Ali", result!.Name);
    }
}`
                        },
                        {
                            label: 'sp_tests.sql',
                            language: 'sql',
                            framework: 'SQL Server (tSQLt)',
                            code: `EXEC tSQLt.NewTestClass 'UserTests';
GO

CREATE PROCEDURE UserTests.[test GetUser returns correct name]
AS
BEGIN
    EXEC tSQLt.FakeTable 'dbo.Users';
    INSERT INTO dbo.Users (Id, Name) VALUES (1, 'Ali');

    CREATE TABLE #Actual (Name NVARCHAR(100));
    INSERT INTO #Actual EXEC dbo.GetUser @Id = 1;

    EXEC tSQLt.AssertEqualsString 'Ali', (SELECT Name FROM #Actual);
END;
GO`
                        }
                    ]
                }
            ],

            quote: {
                text: `مش مهم بس إنك تكتب كود شغّال.
               المهم إنك تكتب كود الناس تقدر تقرا وتعدّل وتفهم بسرعة.`,
                author: 'Robert C. Martin — الفصل الخامس'
            },

            keyTakeaways: [
                'التنسيق = تواصل. مش ذوق شخصي.',
                'الملف زي الصحيفة: العام فوق، الخاص تحت.',
                'المسافات بتفصل الأفكار، مش للزينة.',
                'الأسطر المرتبطة جنب بعض.',
                'المفاهيم المرتبطة قريبة من بعض.',
                'السطور قصيرة (100-120 حرف).',
                'المسافات الأفقية بتوضح العلاقات.',
                'قواعد الفريق موثقة في .editorconfig.',
                'الاختبارات بتتبع نفس قواعد التنسيق.'
            ],

            references: [
                'Clean Code — الفصل الخامس: Formatting — Robert C. Martin',
                'The Art of Readable Code — Dustin Boswell & Trevor Foucher',
                '.editorconfig Specification',
                'Prettier / Roslyn / StyleCop'
            ],

            hashtags: [
                'CleanCode',
                'Formatting',
                'SoftwareEngineering',
                'CSharp',
                'TypeScript',
                'JavaScript',
                'EFCore',
                'ASPNet',
                'SQL',
                'LINQ'
            ]
        }
    }

};