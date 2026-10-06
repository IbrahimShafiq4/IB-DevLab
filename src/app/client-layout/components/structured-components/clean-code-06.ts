import { Component } from '@angular/core';
import { ICleanCodeContent, SharedCodeComponent } from '../../../shared-components/shared-code/shared-code.component';

@Component({
  selector: 'app-clean-code-06',
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
  `
})
export class CleanCode06 {

  projectName: string = 'التنسيق – الكود اللي بيعرف يتنفّس';

  projectDescription: string = `
  الفصل الخامس من Clean Code — عن التنسيق (Formatting).

  التنسيق مش ذوق شخصي، هو وسيلة تواصل.

  هنمشي على:
  - تشبيه المكتبة (الكتب المرصوصة vs الكتب المكومة)
  - التنسيق الرأسي: الصحيفة، الكثافة، المسافة
  - التنسيق الأفقي: طول السطر، المسافات
  - قواعد الفريق و .editorconfig
  - أمثلة بـ C#, TypeScript, EF Core, ASP.NET, SQL, LINQ
  - تصوّرات بصرية واختبارات
  `;

  projectDate: string = 'آخر تحديث: 10 أكتوبر 2026';
  projectVersion: string = 'v1.0.0';

  projectTags: string[] = [
    'Clean Code',
    'Formatting',
    'Software Engineering',
    'Best Practices',
    'Uncle Bob',
    'CSharp',
    'TypeScript',
    'EFCore',
    'SQL',
    'ASP.NET'
  ];

  cleanCodeContent: ICleanCodeContent = {

    introduction: `
    تخيّل إنك داخل مكتبة كبيرة، وعايز تدوّر على كتاب معيّن.

    المكتبة الأولى: الرفوف منظّمة، كل قسم ليه لافتة، الكتب مرتّبة أبجديًا،
    والمسافة بين الرفوف مريحة. بتلاقي أي كتاب في ثواني.

    المكتبة التانية: الكتب مكوّمة فوق بعض، بعضها مقلوب، والمسافات عشوائية.
    عشان توصل لكتاب، لازم تشيل كوم الكتب اللي فوقه.

    المكتبتين فيهم نفس عدد الكتب بالظبط. بس الفرق في الوقت والجهد هائل.

    ده بالظبط الفرق بين كود مُنسَّق كويس وكود مُنسَّق وحش.
    نفس المنطق، نفس الوظيفة — بس تجربة مختلفة تمامًا.
    `,

    story: `
    في مشروع ChatterHub بتاعي، كنت شغّال على ملف MessageService.cs.

    الملف كان حوالي 600 سطر. كل الـ methods ملزّقة فوق بعض،
    الـ constructor فوق، وبعدين 15 method ورا بعض من غير أي مسافات فاصلة.
    الـ private helpers متبعترة وسط الـ public methods.

    لما جيت أضيف feature جديدة، قعدت 20 دقيقة بس عشان أفهم:
    - فين المكان المناسب للكود الجديد؟
    - إيه الـ dependency الحقيقية بين الـ methods دي؟
    - مين بينادي مين؟

    في اللحظة دي، افتكرت فصل Formatting من Clean Code.
    Uncle Bob بيقول إن الملف المفروض يتبني زي جريدة:
    - فوق: العنوان والملخص (الـ public API المهمة)
    - تحت: التفاصيل (الـ private helpers)

    رجعت للملف، وقسمته على أساس "المفاهيم":
    - Section للـ fields
    - Section للـ constructor
    - Section للـ public methods (كل واحدة متباعدة)
    - Section للـ private helpers في الآخر

    أنا مبنيّتش حاجة جديدة. بس ضفت مسافات ورتّبت.

    النتيجة:
    - نفس الملف، نفس السطور، نفس المنطق
    - لكن دلوقتي أي حد يفتحه، بيفهم التسلسل في 2 دقيقة مش 20

    الفكرة اللي فضلت معايا:
    التنسيق مش رفاهية. هو أول حاجة بتوصل للقارئ
    قبل ما يقرا أي سطر كود فعليًا.
    `,

    principles: [

      {
        title: '١. التشبيه الصح — الصحيفة (Newspaper Metaphor)',
        icon: 'fa-solid fa-newspaper',
        description: `
        الملف المفروض يتبني زي جريدة: العنوان فوق، التفاصيل تحت.
        أول حاجة القارئ يشوفها لازم تدّيه فكرة عامة،
        وبعدين ينزل تدريجيًا للتفاصيل.
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
        في المثال الغلط: القارئ لازم يعدّي على 3 دوال private
        (اللي هي تفاصيل داخلية) قبل ما يشوف الـ API الحقيقي للكلاس.

        في المثال الصح: أول حاجة يشوفها هي Public API.
        لو عايز يتعمّق، ينزل لتحت ويلاقي التفاصيل.

        ده "Inverted Pyramid" — من العام للخاص.
        `,
        tips: [
          'الـ public methods في الأول',
          'الـ constructor قبل الـ methods',
          'الـ private helpers في الآخر',
          'الـ fields في الأعلى دايماً'
        ],
        visualization: {
          kind: 'ascii',
          title: 'بنية الملف زي الصحيفة',
          content: `+---------------------------------+
|  FILE: UserService.cs           |
+---------------------------------+
|  1. Fields (_context, etc.)     |  <- الاساسيات
|  2. Constructor                 |  <- تهيئة
|  3. Public Methods              |  <- ال API الرئيسي
|  4. Private Helpers             |  <- التفاصيل
|                                 |
|  UP: Public                     |
|  DOWN: Private                  |
+---------------------------------+`,
          caption: 'القارئ بيمشي من العام للخاص، زي ما بيقرا مقال صحفي.'
        },
        samples: [
          {
            label: 'MessageService.ts',
            language: 'typescript',
            framework: 'TypeScript',
            code: `export class MessageService {
  constructor(private readonly repo: MessageRepository) {}

  sendMessage(content: string, senderId: number, receiverId: number): Message {
    const message = this.buildMessage(content, senderId, receiverId);
    this.repo.save(message);
    return message;
  }

  getConversation(userA: number, userB: number): Message[] {
    return this.repo.findBetween(userA, userB);
  }

  private buildMessage(content: string, senderId: number, receiverId: number): Message {
    return { content, senderId, receiverId, sentAt: new Date() };
  }
}`
          }
        ]
      },

      {
        title: '٢. المسافة بين المفاهيم (Vertical Openness)',
        icon: 'fa-solid fa-arrows-up-down',
        description: `
        المسافات بتفصل بصريًا بين الأفكار المختلفة.
        كل "مفهوم" لازم يكون مفصول عن اللي بعده بسطر فاضي.
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
        لما تكتب جملة من غير نقط ولا فواصل، بتطلع جملة ملهاش معنى.

        في المثال الصح: كل مفهوم مفصول. العين بتعرف على طول:
        - ده الـ field
        - ده الـ constructor
        - دي method 1
        - دي method 2
        `,
        tips: [
          'سطر فاضي بين كل method',
          'سطر فاضي بين الـ fields والـ constructor',
          'سطر فاضي قبل return لما تكون الدالة طويلة',
          'متعملش مسافة جوه الدالة الواحدة'
        ],
        visualization: {
          kind: 'ascii',
          title: 'الفرق البصري',
          content: `MELZO2 (60 lines together):    MOTANAFES (60 lines spaced):
+--------------------+         +--------------------+
| XXXXXXXXXXXXXXXXX  |         | XXXX  Field        |
| XXXXXXXXXXXXXXXXX  |         |                    |
| XXXXXXXXXXXXXXXXX  |         | XXXX  Constructor  |
| XXXXXXXXXXXXXXXXX  |         |                    |
| XXXXXXXXXXXXXXXXX  |         | XXXX  Method 1     |
| XXXXXXXXXXXXXXXXX  |         |                    |
| XXXXXXXXXXXXXXXXX  |         | XXXX  Method 2     |
+--------------------+         +--------------------+
Eye finds nothing              Eye separates each concept`,
          caption: 'المسافات = علامات ترقيم الكود.'
        },
        samples: [
          {
            label: 'OrderService.ts',
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
          }
        ]
      },

      {
        title: '٣. الكثافة الرأسية (Vertical Density)',
        icon: 'fa-solid fa-compress',
        description: `
        مش كل حاجة محتاجة مسافات. الأسطر المرتبطة منطقيًا
        بتفضل جنب بعض من غير سطر فاضي، عشان تتقرا كوحدة واحدة.
        `,
        badExample: {
          title: 'غلط — مسافات في مكان غلط',
          code: `public decimal CalculateTotal(Order order)
{
    var subtotal = order.Items.Sum(i => i.Price * i.Quantity);

    var tax = subtotal * TAX_RATE;

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
    var tax = subtotal * TAX_RATE;
    var shipping = order.IsExpress ? 50 : 20;
    var total = subtotal + tax + shipping;

    return total;
}`
        },
        explanation: `
        في المثال الغلط: كل سطر بينه وبين اللي بعده سطر فاضي،
        لكنهم كلهم بيعبّروا عن فكرة واحدة — حساب الـ total.

        في المثال الصح: الأسطر كلها جنب بعض (لأنها خطوات
        متتالية لفكرة واحدة)، والسطر الفاضي الوحيد قبل return
        بيفصل بين "الحساب" و"الإرجاع".

        القاعدة: المسافة للفصل بين الأفكار، مش للزينة.
        `,
        tips: [
          'لو الأسطر بتعبر عن فكرة واحدة، متسيبهاش بمسافات',
          'سطر فاضي واحد كفاية',
          'متعملش سطر فاضي قبل closing brace',
          'الـ blank lines في الكود الـ functional نادرة'
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
          }
        ]
      },

      {
        title: '٤. المسافة بين المفاهيم المرتبطة (Vertical Distance)',
        icon: 'fa-solid fa-link',
        description: `
        المفاهيم المرتبطة لازم تكون قريبة من بعض في الملف.
        متخلّيش حاجة مستخدمة في method في الآخر تكون معلنة في الأول.
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

    private User GetUser(int id) { return null; }
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

    private User GetUser(int id) { return null; }
}`
        },
        explanation: `
        القاعدة: لو method بتستخدم variable، خلي الـ variable قريب منها.

        في المثال الغلط: الـ variables معلنة فوق، والـ method في الآخر،
        فالقارئ هيضطر يسكرول لفوق كل شوية.

        في المثال الصح: الـ dependencies جاية كـ constructor params،
        وكل حاجة في مكانها الطبيعي.

        ده كمان بيسهّل الاختبار — تقدر تعمل mock للـ dependencies.
        `,
        tips: [
          'الـ local variables في أقرب مكان للاستخدام',
          'الـ class fields في الأول',
          'الـ constructor params للـ dependencies',
          'استخدم DI عشان الـ dependencies تبان واضحة'
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
          }
        ]
      },

      {
        title: '٥. طول السطر (Horizontal Line Length)',
        icon: 'fa-solid fa-text-width',
        description: `
        خلي السطور قصيرة. الحد الأقصى المقترح 100-120 حرف.
        السطر الطويل بيكسّر التركيز، وبيخليك تسكرول يمين وشمال.
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

        الفايدة:
        - أي حد يقرا الـ method، يفهم الـ parameters بدون سكرول.
        - الـ Where clause بتقراها زي جملة.
        - لو حصل error، الـ compiler هيقولك السطر والـ column بدقة.
        `,
        tips: [
          'لو السطر عدّى 100 حرف، اكسره',
          'method parameters الطويلة → كل parameter في سطر',
          'LINQ chains → كل method في سطر',
          'ternary expressions الطويلة → كل فرع في سطر'
        ],
        samples: [
          {
            label: 'user.orders.ts (fetch)',
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
          }
        ]
      },

      {
        title: '٦. المسافات الأفقية (Horizontal Whitespace)',
        icon: 'fa-solid fa-arrows-left-right',
        description: `
        المسافة بين العناصر بتعبّر عن قوة الارتباط بينهم.
        حط مسافة حوالين الـ operators عشان تفصل بصريًا.
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
        المسافة بعد if وقبل ( بتفصل الكلمة المفتاحية عن الشرط.
        المسافات حوالين الـ operators في الـ LINQ بتخليها تقرا كجملة.
        `,
        tips: [
          'مسافة حوالين الـ binary operators',
          'مسافة بعد الفاصلة، مش قبلها',
          'مفيش مسافة جوه () و []',
          'مسافة بعد if/for/while وقبل الـ ('
        ],
        samples: [
          {
            label: 'linq-example.cs',
            language: 'csharp',
            framework: 'C# / LINQ',
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
        محدش يكتب بطريقته — لازم اتفاق موثّق وملتزم بيه.
        `,
        badExample: {
          title: 'غلط — كل ملف ليه أسلوب مختلف',
          code: `// File A - Style A
public class UserService {
    public void Register(string e, string p) {
        if (true) {
            // K&R braces, 4-space indent
        }
    }
}

// File B - Style B
public class OrderService
{
    public void Create(int id, decimal price)
    {
        if (true)
        {
            // Allman braces, 2-space indent
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
        الفرق بين المثالين بيخلي الكود "متقطع" —
        أي حد بيعدّي بين ملف وملف بيحس إنه في مشروعين مختلفين.

        الحل: .editorconfig — ملف واحد بيفرض القواعد على الكل:
        - IDE بيلتزم بيه automatic
        - صفر نقاش في code review عن "المسافات"
        - الـ new devs بيتعلموا القواعد من الملف نفسه
        `,
        tips: [
          'حط .editorconfig في root المشروع',
          'فعّل auto-format on save في IDE',
          'ضيف pre-commit hooks للـ formatting',
          'متناقشش في code review عن الأسلوب',
          'استخدم Prettier للـ JS/TS و Roslyn للـ C#'
        ],
        visualization: {
          kind: 'flow',
          title: 'مسار التنسيق التلقائي',
          content: `  Developer writes code
          |
          v
  +------------------+
  | VS Code Editor   |
  +------------------+
          | (on save)
          v
  +------------------+
  | .editorconfig    |  ->  enforce indent, braces, spacing
  +------------------+
          |
          v
  +------------------+
  | Prettier / Roslyn|  ->  auto-format
  +------------------+
          |
          v
  +------------------+
  | git commit       |
  +------------------+
          | (pre-commit hook)
          v
  +------------------+
  | husky / lint-staged  |  ->  verify formatting
  +------------------+
          |
          v
     OK - Code is formatted consistently`,
          caption: 'التنسيق automated بالكامل. محدش محتاج يفتكر القواعد.'
        }
      },

      {
        title: '٨. تنسيق الاختبارات (Formatting Tests)',
        icon: 'fa-solid fa-flask',
        description: `
        لما التنسيق يكون clean، الاختبارات بتقرا كمان بشكل clean.
        اختبارات واضحة، بأسماء معبّرة، وتنظيم منطقي.
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
    var u3=new User{Name="Bob",Age=15};
    var r3=s.RegisterUser(u3);
    Assert.False(r3);
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
        اختبارات كويسة بتتبع نفس قواعد التنسيق:
        - اسم الـ test بيوصف السلوك: MethodName_Scenario_ExpectedResult
        - 3 أقسام واضحة: Arrange / Act / Assert
        - مسافات فاصلة بين الأقسام
        - single assertion per concept
        `,
        tips: [
          'اسم الـ test = سطر متكامل بيوصف السلوك',
          'Arrange / Act / Assert بتفصل بصريًا',
          'Test واحد = concept واحد',
          'استخدم [Theory] + [InlineData] للـ multiple cases',
          'متعملش assert على أكتر من حاجة في نفس الـ test'
        ],
        samples: [
          {
            label: 'user.service.spec.ts',
            language: 'typescript',
            framework: 'Jest',
            code: `import { UserService } from './user.service';

describe('UserService.registerUser', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('returns true when user data is valid', () => {
    const user = { name: 'Ali', age: 30 };
    const result = service.registerUser(user);
    expect(result).toBe(true);
  });

  it.each([
    ['', 20],
    ['Bob', 15],
  ])('returns false when name=%s or age=%d', (name, age) => {
    const user = { name, age };
    expect(service.registerUser(user)).toBe(false);
  });
});`
          }
        ],
        testing: [
          {
            title: 'FormattingRulesTests.cs',
            framework: 'xUnit',
            code: `[Fact]
public void Formatting_Should_Keep_Short_Lines()
{
    var source = File.ReadAllText("MessageService.cs");
    var lines = source.Split('\\n');

    var longLines = lines
        .Where(l => l.Length > 120)
        .ToList();

    Assert.Empty(longLines);
}`
          },
          {
            title: 'formatting.spec.ts',
            framework: 'Jest',
            code: `import * as fs from 'fs';
import * as glob from 'glob';

test('all source files respect the 100-char limit', () => {
  const files = glob.sync('src/**/*.ts');

  const violations = files.flatMap(file => {
    const lines = fs.readFileSync(file, 'utf-8').split('\\n');
    return lines
      .map((line, i) => ({ file, line: i + 1, length: line.length }))
      .filter(x => x.length > 100);
  });

  expect(violations).toEqual([]);
});`
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
      'الأسطر المرتبطة جنب بعض (بدون مسافات).',
      'المفاهيم المرتبطة قريبة من بعض.',
      'السطور قصيرة (100-120 حرف كحد أقصى).',
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
      'BestPractices',
      'UncleBob',
      'CSharp',
      'EFCore',
      'TypeScript',
      'SQL',
      'ASP.NET'
    ]
  };
}