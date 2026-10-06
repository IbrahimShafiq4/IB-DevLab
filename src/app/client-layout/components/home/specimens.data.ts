import type { Specimen } from '../../../core/specimen-registry';
import { SPECIMEN_SOURCES } from './specimen-sources';
import { extractSource } from '../../../core/specimen-registry';

export type {
  Specimen,
  SpecimenKind,
  SpecimenSource,
  StageTone,
  CodeLanguage,
  SpecimenExtraFile,
  ExtractedSource
} from '../../../core/specimen-registry';

export {
  extractSource,
  extractBody,
  extractInlineStyles,
  extractInlineScripts,
  stripHtmlStyleScript,
  isVoidTag
} from '../../../core/specimen-registry';

const BASE_SPECIMENS: Specimen[] = [
  {
    id: 'S-001',
    kind: 'component',
    title: 'نظام التبويبات',
    description: 'تبويبات بمؤشر انزلاقي سلس، بتنتقل بين المحتوى بحركة ناعمة.',
    date: 'مايو 2025',
    tags: ['JS', 'UI'],
    href: '/tabs',
    stage: 'light',
    sortKey: 1
  },
  {
    id: 'S-002',
    kind: 'component',
    title: 'نص الطباعة التدريجية',
    description: 'تأثير كتابة بيتبدّل بين أدوار مختلفة، مع مؤشر وميض.',
    date: 'مايو 2025',
    tags: ['JS', 'Text'],
    href: '/animated-typing-text',
    stage: 'dark',
    sortKey: 2
  },
  {
    id: 'S-003',
    kind: 'component',
    title: 'مكعب ثلاثي الأبعاد',
    description: 'مكعب يدور في الفضاء باستخدام CSS 3D transforms فقط.',
    date: 'مايو 2025',
    tags: ['CSS', '3D'],
    href: '/cube',
    stage: 'dark',
    sortKey: 3
  },
  {
    id: 'S-004',
    kind: 'component',
    title: 'شرارة الماوس',
    description: 'جزيئات متوهجة بتطلع من مؤشر الماوس وبتتطاير بشكل عشوائي.',
    date: 'مايو 2025',
    tags: ['JS', 'Animation'],
    href: '/mouse-move-v2',
    stage: 'dark',
    sortKey: 4
  },
  {
    id: 'S-005',
    kind: 'component',
    title: 'كرات موجة عند المرور',
    description: 'كرات بتضيء من نقطة المؤشر عند المرور عليها.',
    date: 'مايو 2025',
    tags: ['JS', 'Hover'],
    href: '/mouse-move-v3',
    stage: 'dark',
    sortKey: 5
  },
  {
    id: 'S-006',
    kind: 'component',
    title: 'أمطار ملوّنة',
    description: 'دوائر ملوّنة بتقع من أعلى الشاشة بأحجام ودرجات مختلفة.',
    date: 'مايو 2025',
    tags: ['JS', 'Animation'],
    href: '/rains',
    stage: 'dark',
    sortKey: 6
  },
  {
    id: 'S-007',
    kind: 'component',
    title: 'لودر دائري متوهج',
    description: 'لودر دائري بتأثير hue-rotate مستمر.',
    date: 'يونيو 2025',
    tags: ['CSS'],
    href: '/loading/loading-v1',
    stage: 'dark',
    sortKey: 7
  },
  {
    id: 'S-008',
    kind: 'component',
    title: 'كارت زجاجي',
    description: 'كارت شبه شفاف مع تأثير ضبابي — Glassmorphism.',
    date: 'مايو 2025',
    tags: ['CSS', 'UI'],
    href: '/glassmorphism-v1',
    stage: 'light',
    sortKey: 8
  },
  {
    id: 'S-009',
    kind: 'component',
    title: 'المجموعة الشمسية',
    description: 'شمس متوهجة وأرض بتلف حواليها قمر — CSS خالص.',
    date: 'مايو 2025',
    tags: ['CSS'],
    href: '/solar-system-loading',
    stage: 'dark',
    sortKey: 9
  },
  {
    id: 'S-010',
    kind: 'component',
    title: 'زر الوضع الليلي V1',
    description: 'زر تبديل يومي/ليلي بمشهد سماوي متكامل.',
    date: 'مايو 2025',
    tags: ['CSS', 'UI'],
    href: '/night-mode/night-mode-v1',
    stage: 'auto',
    sortKey: 10
  },
  {
    id: 'S-011',
    kind: 'component',
    title: 'مخطط دائري',
    description: 'مخطط Conic Gradient بيدور لعرض نسب مختلفة.',
    date: 'مايو 2025',
    tags: ['CSS'],
    href: '/pie-chart',
    stage: 'dark',
    sortKey: 11
  },
  {
    id: 'S-012',
    kind: 'component',
    title: 'سهم بيتابع الماوس',
    description: 'سهم بيلف ويتابع مؤشر الماوس في الوقت الفعلي.',
    date: 'مايو 2025',
    tags: ['JS'],
    href: '/mouse-move-v1',
    stage: 'dark',
    sortKey: 12
  },
  {
    id: 'S-013',
    kind: 'component',
    title: 'كارت مائل',
    description: 'كارت بيتحرك ويتمايل مع حركة الماوس.',
    date: 'مايو 2025',
    tags: ['JS', '3D'],
    href: '/tilt-v2',
    stage: 'dark',
    sortKey: 13
  },
  {
    id: 'S-014',
    kind: 'component',
    title: 'الكتل المتحركة',
    description: 'كتل ملوّنة بتتفرّق في كل اتجاه بنقرة زرار.',
    date: 'مايو 2025',
    tags: ['JS'],
    href: '/blocks',
    stage: 'dark',
    sortKey: 14
  },
  {
    id: 'S-015',
    kind: 'component',
    title: 'مولّد كلمات المرور',
    description: 'زرار يوصّف كلمة مرور قوية حسب إعدادات مخصّصة.',
    date: 'مايو 2025',
    tags: ['JS', 'Utility'],
    href: '/password-generator-v1',
    stage: 'dark',
    sortKey: 15
  },
  {
    id: 'S-016',
    kind: 'component',
    title: 'كارت قابل للتوسيع',
    description: 'كارت بيفتح ويقفل مع حركة ناعمة عند الضغط على الزرار.',
    date: 'مايو 2025',
    tags: ['JS', 'UI'],
    href: '/animated-popup-v1',
    stage: 'dark',
    sortKey: 16
  },
  {
    id: 'S-017',
    kind: 'component',
    title: 'قائمة جانبية تفاعلية',
    description: 'قائمة عمودية بتتغيّر خلفيتها حسب العنصر النشط.',
    date: 'مايو 2025',
    tags: ['JS', 'UI'],
    href: '/menu-indicator-v1',
    stage: 'dark',
    sortKey: 17
  },
  {
    id: 'S-018',
    kind: 'component',
    title: 'مولّد Conic Gradient',
    description: 'أداة تفاعلية لعمل مخططات Conic Gradient بقيم مخصّصة.',
    date: 'مايو 2025',
    tags: ['JS', 'Tool'],
    href: '/conic-gradient-generator',
    stage: 'dark',
    sortKey: 18
  },
  {
    id: 'S-019',
    kind: 'component',
    title: 'مكعب تفاعلي 3D',
    description: 'مكعب بيدور مع حركة الماوس، بأوجه مكوّنة من شبكة مضيئة.',
    date: 'مايو 2025',
    tags: ['JS', '3D'],
    href: '/interactive-box-3d',
    stage: 'dark',
    sortKey: 19
  },
  {
    id: 'S-020',
    kind: 'component',
    title: 'كشف دائري بالتمرير',
    description: 'صور بتظهر في شكل دايرة مع التمرير باستخدام clip-path.',
    date: 'مايو 2025',
    tags: ['JS', 'Scroll'],
    href: '/clip-path-scrolling',
    stage: 'dark',
    sortKey: 20
  },
  {
    id: 'S-021',
    kind: 'component',
    title: 'صورة GIF ثلاثية الأبعاد',
    description: 'شبكة 4×4 بتفتح لتكوين صورة كاملة عند المرور.',
    date: 'مايو 2025',
    tags: ['JS', 'Animation'],
    href: '/animated-3d-gif-image',
    stage: 'dark',
    sortKey: 21
  },
  {
    id: 'S-022',
    kind: 'component',
    title: 'سلايدر صور 3D',
    description: 'كاروسيل صور بمنظور ثلاثي الأبعاد وتكرار لا نهائي.',
    date: 'مايو 2025',
    tags: ['JS', '3D'],
    href: '/slider-v1',
    stage: 'dark',
    sortKey: 22
  },
  {
    id: 'S-023',
    kind: 'component',
    title: 'نص بتعبئة الحدود',
    description: 'حدود النص بتتعبأ بالألوان مع مؤشر انزلاقي.',
    date: 'مايو 2025',
    tags: ['CSS'],
    href: '/text-stroke-fill-animation',
    stage: 'light',
    sortKey: 23
  },
  {
    id: 'S-024',
    kind: 'component',
    title: 'نص SVG متحرّك',
    description: 'نص بحركة متقطعة عبر stroke-dasharray.',
    date: 'مايو 2025',
    tags: ['SVG', 'CSS'],
    href: '/text-stroke-animation',
    stage: 'dark',
    sortKey: 24
  },
  {
    id: 'S-025',
    kind: 'component',
    title: 'تطبيق أخبار',
    description: 'تطبيق بيجيب أخبار حقيقية من API مع تصنيفات وبحث.',
    date: 'مايو 2025',
    tags: ['JS', 'API'],
    href: '/news-app',
    stage: 'light',
    sortKey: 25
  },
  {
    id: 'S-026',
    kind: 'component',
    title: 'نص بيظهر مع التمرير',
    description: 'كل حرف في النص بيضيء مع التمرير.',
    date: 'مايو 2025',
    tags: ['JS', 'Scroll'],
    href: '/text-v4',
    stage: 'dark',
    sortKey: 26
  },
  {
    id: 'S-027',
    kind: 'component',
    title: 'لودر الاسم المتوهج',
    description: 'الاسم بكل حرف ليه لون مختلف مع حركة قفز.',
    date: 'مايو 2025',
    tags: ['CSS'],
    href: '/loading-v2',
    stage: 'dark',
    sortKey: 27
  },
  {
    id: 'S-028',
    kind: 'component',
    title: 'نص متحرّك V5',
    description: 'حروف الاسم بتتحرك من مواقع عشوائية لمكانها مع التمرير.',
    date: 'مايو 2025',
    tags: ['JS', 'Scroll'],
    href: '/text-v5',
    stage: 'dark',
    sortKey: 28
  },
  {
    id: 'S-029',
    kind: 'component',
    title: 'كشف بالبكسل',
    description: 'الصورة بتتفتّت لـ 400 قطعة بتتجمّع مع التمرير.',
    date: 'مايو 2025',
    tags: ['JS', 'Scroll'],
    href: '/image-scrolling',
    stage: 'dark',
    sortKey: 29
  },
  {
    id: 'S-030',
    kind: 'component',
    title: 'قائمة Tilt 3D',
    description: 'قائمة تنقل ثلاثية الأبعاد بتأثير Tilt.',
    date: 'مايو 2025',
    tags: ['JS', '3D'],
    href: '/tilt-v1',
    stage: 'dark',
    sortKey: 30
  },
  {
    id: 'S-031',
    kind: 'component',
    title: 'أيقونات Social Tilt',
    description: 'أيقونات سوشيال بتتمايل وتغيّر خلفية الصفحة.',
    date: 'مايو 2025',
    tags: ['JS', '3D'],
    href: '/tilt-v3',
    stage: 'light',
    sortKey: 31
  },
  {
    id: 'S-032',
    kind: 'component',
    title: 'لودر نيون متوهّج',
    description: 'لودر دائري بمؤشر متوهّج وألوان متغيّرة.',
    date: 'مايو 2025',
    tags: ['CSS'],
    href: '/loading/loading-v1',
    stage: 'dark',
    sortKey: 32
  },
  {
    id: 'S-033',
    kind: 'component',
    title: 'زرار Hover',
    description: 'زرار بيتحرّك نصّه لأعلى عند المرور عليه.',
    date: 'مايو 2025',
    tags: ['CSS'],
    href: '/buttons/button-v1',
    stage: 'dark',
    sortKey: 33
  },
  {
    id: 'S-034',
    kind: 'component',
    title: 'الوضع الليلي V2',
    description: 'زر تبديل متقدّم بسما وأشكال طبيعية متحرّكة.',
    date: 'مايو 2025',
    tags: ['CSS'],
    href: '/night-mode/night-mode-v2',
    stage: 'auto',
    sortKey: 34
  },
  {
    id: 'S-035',
    kind: 'component',
    title: 'طبقات الصورة',
    description: 'نسخ متعدّدة من نفس الصورة بتتفرّق في 3D عند المرور.',
    date: 'يونيو 2025',
    tags: ['CSS', '3D'],
    href: '/layers/image-layer',
    stage: 'dark',
    sortKey: 35
  },
  {
    id: 'S-036',
    kind: 'component',
    title: 'قطرة ماء',
    description: 'قطرة ماء ناعمة بأسلوب Neumorphism — CSS بس.',
    date: 'يونيو 2025',
    tags: ['CSS'],
    href: '/drop-of-water',
    stage: 'light',
    sortKey: 36
  },
  {
    id: 'S-037',
    kind: 'component',
    title: 'لوغو دائري',
    description: 'أزرار سوشيال بتوهّج Conic عند المرور.',
    date: 'يونيو 2025',
    tags: ['CSS'],
    href: '/circular-logo',
    stage: 'dark',
    sortKey: 37
  },
  {
    id: 'S-038',
    kind: 'component',
    title: 'كشف علبة مشروب',
    description: 'تبديل صورة داخل mock-up مع حركة ناعمة.',
    date: 'يونيو 2025',
    tags: ['CSS', 'Mask'],
    href: '/can-rotation',
    stage: 'dark',
    sortKey: 38
  },
  {
    id: 'S-039',
    kind: 'component',
    title: 'لودر نيون 2',
    description: 'لودر دائري بنقاط مضيئة بتلف مع بعضها.',
    date: 'يونيو 2025',
    tags: ['JS', 'CSS'],
    href: '/loading/loading-v2',
    stage: 'dark',
    sortKey: 39
  },
  {
    id: 'S-040',
    kind: 'component',
    title: 'لودر نيون 3',
    description: 'نسخة مطوّرة من اللودر الدائري بزاوية دوران متغيّرة.',
    date: 'يونيو 2025',
    tags: ['JS', 'CSS'],
    href: '/loading/loading-v3',
    stage: 'dark',
    sortKey: 40
  },

  // ─── CSS Battle ───
  {
    id: 'CB-01',
    kind: 'css-battle',
    title: 'CSS Battle — Layout Blocks',
    description: 'تحدي CSS Battle لعمل layout مكوّن من كتل بالـ flexbox.',
    date: 'يناير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_P1',
    stage: 'light',
    sortKey: 100
  },
  {
    id: 'CB-02',
    kind: 'css-battle',
    title: 'CSS Battle — Circular Shapes',
    description: 'دوائر متداخلة باستخدام border-radius والمواقع المطلقة.',
    date: 'يناير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_P2',
    stage: 'light',
    sortKey: 101
  },
  {
    id: 'CB-03',
    kind: 'css-battle',
    title: 'CSS Battle — Percentage',
    description: 'رمز النسبة المئوية بـ skew وtransforms.',
    date: 'يناير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_P3',
    stage: 'light',
    sortKey: 102
  },
  {
    id: 'CB-04',
    kind: 'css-battle',
    title: 'CSS Battle — Sticks Reflection',
    description: 'أشكال بمرايا باستخدام -webkit-box-reflect.',
    date: 'يناير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_P4',
    stage: 'light',
    sortKey: 103
  },
  {
    id: 'CB-05',
    kind: 'css-battle',
    title: 'CSS Battle — Advanced Reflection',
    description: 'انعكاسات معقّدة مع pseudo-elements.',
    date: 'يناير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_P5',
    stage: 'light',
    sortKey: 104
  },
  {
    id: 'CB-06',
    kind: 'css-battle',
    title: 'CSS Battle — Polygon',
    description: 'شكل هندسي بـ clip-path: polygon.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_P6',
    stage: 'dark',
    sortKey: 105
  },
  {
    id: 'CB-07',
    kind: 'css-battle',
    title: 'CSS Battle — Burger Layers',
    description: 'طبقات burger باستخدام border-block وbox-shadow.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_P7',
    stage: 'light',
    sortKey: 106
  },
  {
    id: 'CB-08',
    kind: 'css-battle',
    title: 'CSS Battle — Reflect Shape',
    description: 'شكل منحني بمرآة باستخدام box-reflect.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_P8',
    stage: 'light',
    sortKey: 107
  },
  {
    id: 'CB-09',
    kind: 'css-battle',
    title: 'CSS Battle — Mirrored Arc',
    description: 'قوس مزدوج مع انعكاس متماثل.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_P9',
    stage: 'light',
    sortKey: 108
  },
  {
    id: 'CB-10',
    kind: 'css-battle',
    title: 'CSS Battle — Five Pills',
    description: 'خمس أعمدة pill بتوزيع مركزي.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_P10',
    stage: 'dark',
    sortKey: 109
  },
  {
    id: 'CB-11',
    kind: 'css-battle',
    title: 'CSS Battle — Geometric Flag',
    description: 'علم هندسي مع عمود وانعكاس.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p11',
    stage: 'light',
    sortKey: 110
  },
  {
    id: 'CB-12',
    kind: 'css-battle',
    title: 'CSS Battle — Cross & Circles',
    description: 'تركيبة دائرية هندسية بـ pseudo-elements.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p12',
    stage: 'light',
    sortKey: 111
  },
  {
    id: 'CB-13',
    kind: 'css-battle',
    title: 'CSS Battle — Four Leaf Shape',
    description: 'شكل ورقة رباعية متماثلة.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p13',
    stage: 'dark',
    sortKey: 112
  },
  {
    id: 'CB-14',
    kind: 'css-battle',
    title: 'CSS Battle — Geometric Arch',
    description: 'قوس هندسي بسيط بـ border-radius.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p14',
    stage: 'light',
    sortKey: 113
  },
  {
    id: 'CB-15',
    kind: 'css-battle',
    title: 'CSS Battle — Geometric Temple',
    description: 'معبد هندسي بمثلثات وأعمدة.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p15',
    stage: 'light',
    sortKey: 114
  },
  {
    id: 'CB-16',
    kind: 'css-battle',
    title: 'CSS Battle — Geometric Hook',
    description: 'شكل خطّاف هندسي.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p16',
    stage: 'dark',
    sortKey: 115
  },
  {
    id: 'CB-17',
    kind: 'css-battle',
    title: 'CSS Battle — Envelope Icon',
    description: 'أيقونة ظرف داخل شعار دائري.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p17',
    stage: 'dark',
    sortKey: 116
  },
  {
    id: 'CB-18',
    kind: 'css-battle',
    title: 'CSS Battle — Geometric H',
    description: 'شكل H هندسي بمرايا.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p18',
    stage: 'light',
    sortKey: 117
  },
  {
    id: 'CB-19',
    kind: 'css-battle',
    title: 'CSS Battle — Geometric B',
    description: 'شكل B هندسي بأقواس متداخلة.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p19',
    stage: 'light',
    sortKey: 118
  },
  {
    id: 'CB-20',
    kind: 'css-battle',
    title: 'CSS Battle — Geometric Capsule',
    description: 'شكل كبسولة هندسية بمرايا.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p20',
    stage: 'dark',
    sortKey: 119
  },
  {
    id: 'CB-21',
    kind: 'css-battle',
    title: 'CSS Battle — Geometric Plus',
    description: 'شكل زائد هندسي بأقسام مربعة.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p21',
    stage: 'light',
    sortKey: 120
  },
  {
    id: 'CB-22',
    kind: 'css-battle',
    title: 'CSS Battle — Trash Can',
    description: 'سلة مهملات هندسية بأقسام رأسية.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p22',
    stage: 'light',
    sortKey: 121
  },
  {
    id: 'CB-23',
    kind: 'css-battle',
    title: 'CSS Battle — Geometric Container',
    description: 'حاوية هندسية بتفاصيل جانبية.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p23',
    stage: 'light',
    sortKey: 122
  },
  {
    id: 'CB-24',
    kind: 'css-battle',
    title: 'CSS Battle — Alarm Clock',
    description: 'ساعة منبّه هندسية بأجراس وأرجل.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p24',
    stage: 'light',
    sortKey: 123
  },
  {
    id: 'CB-25',
    kind: 'css-battle',
    title: 'CSS Battle — Geometric D',
    description: 'شكل D هندسي بأقواس.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p25',
    stage: 'light',
    sortKey: 124
  },
  {
    id: 'CB-26',
    kind: 'css-battle',
    title: 'CSS Battle — Geometric Bars',
    description: 'نمط أشرطة هندسية بـ box-shadow.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p26',
    stage: 'light',
    sortKey: 125
  },
  {
    id: 'CB-27',
    kind: 'css-battle',
    title: 'CSS Battle — Geometric U',
    description: 'شكل U هندسي بمرايا.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p27',
    stage: 'light',
    sortKey: 126
  },
  {
    id: 'CB-28',
    kind: 'css-battle',
    title: 'CSS Battle — Cassette Tape',
    description: 'شريط كاسيت هندسي ببكرات.',
    date: 'فبراير 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p28',
    stage: 'light',
    sortKey: 127
  },
  {
    id: 'CB-29',
    kind: 'css-battle',
    title: 'CSS Battle — Burger',
    description: 'برجر هندسي بسيط معمول بـ CSS.',
    date: 'أكتوبر 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p29',
    stage: 'light',
    sortKey: 128
  },
  {
    id: 'CB-30',
    kind: 'css-battle',
    title: 'CSS Battle — Reflection Dots & Cross',
    description: 'دوائر معكوسة مع شكل صليب باستخدام box-reflect وpseudo-elements.',
    date: 'أكتوبر 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p30',
    stage: 'light',
    sortKey: 129
  },
  {
    id: 'CB-31',
    kind: 'css-battle',
    title: 'CSS Battle — Geometric Hourglass',
    description: 'شكل ساعة رملية هندسية بـ border-radius وbox-reflect.',
    date: 'أكتوبر 2026',
    tags: ['CSS', 'Battle'],
    href: '/css_battle_p31',
    stage: 'light',
    sortKey: 130
  },

  // ─── Problem Solving ───
  {
    id: 'PS-01',
    kind: 'problem-solving',
    title: 'Roman to Integer',
    description: 'تحويل رقم روماني لعدد صحيح بمرور واحد.',
    date: 'سبتمبر 2026',
    tags: ['LeetCode', 'JS'],
    href: '/problem-solving/roman-to-integer',
    stage: 'dark',
    sortKey: 200
  },
  {
    id: 'PS-02',
    kind: 'problem-solving',
    title: 'Longest Substring',
    description: 'أطول سلسلة فرعية بدون تكرار باستخدام Sliding Window.',
    date: 'سبتمبر 2026',
    tags: ['LeetCode', 'JS'],
    href: '/problem-solving/longest-substring',
    stage: 'dark',
    sortKey: 201
  },
  {
    id: 'PS-03',
    kind: 'problem-solving',
    title: 'Palindrome Number',
    description: 'التحقق لو الرقم Palindrome أو لأ.',
    date: 'سبتمبر 2026',
    tags: ['LeetCode', 'JS'],
    href: '/problem-solving/palindrome-number',
    stage: 'dark',
    sortKey: 202
  },
  {
    id: 'PS-04',
    kind: 'problem-solving',
    title: 'Longest Common Prefix',
    description: 'أطول بداية مشتركة بين مجموعة strings.',
    date: 'سبتمبر 2026',
    tags: ['LeetCode', 'JS'],
    href: '/problem-solving/longest-common-prefix',
    stage: 'dark',
    sortKey: 203
  },
  {
    id: 'PS-05',
    kind: 'problem-solving',
    title: 'Valid Parentheses',
    description: 'التحقق من تطابق الأقواس باستخدام Stack.',
    date: 'سبتمبر 2026',
    tags: ['LeetCode', 'JS'],
    href: '/problem-solving/valid-parentheses',
    stage: 'dark',
    sortKey: 204
  },
  {
    id: 'PS-06',
    kind: 'problem-solving',
    title: 'Merge Two Sorted Lists',
    description: 'دمج قائمتين مترابطتين في واحدة مرتّبة.',
    date: 'سبتمبر 2026',
    tags: ['LeetCode', 'Linked List'],
    href: '/problem-solving/merge-two-sorted-lists',
    stage: 'dark',
    sortKey: 205
  },
  {
    id: 'PS-07',
    kind: 'problem-solving',
    title: 'Remove Duplicates',
    description: 'إزالة التكرار من array مرتّبة باستخدام مؤشرين.',
    date: 'سبتمبر 2026',
    tags: ['LeetCode', 'Two Pointers'],
    href: '/problem-solving/remove-duplicates-from-sorted-array',
    stage: 'dark',
    sortKey: 206
  },
  {
    id: 'PS-08',
    kind: 'problem-solving',
    title: 'Remove Element',
    description: 'إزالة كل عنصر بقيمة معيّنة من array.',
    date: 'سبتمبر 2026',
    tags: ['LeetCode', 'Two Pointers'],
    href: '/problem-solving/remove-element',
    stage: 'dark',
    sortKey: 207
  },
  {
    id: 'PS-09',
    kind: 'problem-solving',
    title: 'Find the Index',
    description: 'أول موقع لظهور string داخل string تانية.',
    date: 'سبتمبر 2026',
    tags: ['LeetCode', 'String'],
    href: '/problem-solving/find-the-index-of-the-first-occurrence',
    stage: 'dark',
    sortKey: 208
  },
  {
    id: 'PS-10',
    kind: 'problem-solving',
    title: 'Search Insert Position',
    description: 'موقع الإدراج الصحيح لهدف في array مرتّبة.',
    date: 'أكتوبر 2026',
    tags: ['LeetCode', 'Binary Search'],
    href: '/problem-solving/search-insert-position',
    stage: 'dark',
    sortKey: 209
  },
  {
    id: 'PS-11',
    kind: 'problem-solving',
    title: 'Length of Last Word',
    description: 'طول آخر كلمة في string مع تجاهل المسافات.',
    date: 'أكتوبر 2026',
    tags: ['LeetCode', 'String'],
    href: '/problem-solving/length-of-last-word',
    stage: 'dark',
    sortKey: 210
  },

  // ─── Clean Code ───
  {
    id: 'CC-01',
    kind: 'clean-code',
    title: 'من الفوضى للصيانة',
    description: 'دليل عملي لمبادئ الكود النظيف مع أمثلة حقيقية.',
    date: 'سبتمبر 2026',
    tags: ['Clean Code', 'عربي'],
    href: '/clean-code-01',
    stage: 'dark',
    sortKey: 300
  },
  {
    id: 'CC-02',
    kind: 'clean-code',
    title: 'الأسماء المعبّرة',
    description: 'أول خطوة نحو كود نظيف — 5 قواعد أساسية للتسمية.',
    date: 'سبتمبر 2026',
    tags: ['Clean Code', 'عربي'],
    href: '/clean-code-02',
    stage: 'dark',
    sortKey: 301
  },
  {
    id: 'CC-03',
    kind: 'clean-code',
    title: 'أسماء الكلاسات والدوال',
    description: '6 قواعد أعمق للتسمية في المشاريع الحقيقية.',
    date: 'سبتمبر 2026',
    tags: ['Clean Code', 'عربي'],
    href: '/clean-code-03',
    stage: 'dark',
    sortKey: 302
  },
  {
    id: 'CC-04',
    kind: 'clean-code',
    title: 'الدوال — أساس الكود النظيف',
    description: '9 قواعد عملية لكتابة دوال نظيفة.',
    date: 'أكتوبر 2026',
    tags: ['Clean Code', 'عربي'],
    href: '/clean-code-04',
    stage: 'dark',
    sortKey: 303
  },
  {
    id: 'CC-05',
    kind: 'clean-code',
    title: 'التعليقات',
    description: 'الكومنتات آخر حل مش أول حل.',
    date: 'أكتوبر 2026',
    tags: ['Clean Code', 'عربي'],
    href: '/clean-code-05',
    stage: 'dark',
    sortKey: 304
  },
];

export const SPECIMENS: Specimen[] = BASE_SPECIMENS.map(s => {
  const source = SPECIMEN_SOURCES[s.id];

  if (!source) {
    return {
      ...s,
      liveHtml: '',
      liveCss: '',
      liveJs: ''
    };
  }

  const extracted = extractSource(source);

  return {
    ...s,
    stage: source.stage ?? s.stage,
    source,
    liveHtml: extracted.bodyHtml,
    liveCss: extracted.styleCss,
    liveJs: extracted.scriptJs
  };
});