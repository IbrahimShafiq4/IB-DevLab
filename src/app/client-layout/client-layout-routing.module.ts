import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './client-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      // ─── Home ───
      {
        path: '',
        loadComponent: () =>
          import('./components/home/home.component').then(m => m.HomeComponent),
        title: 'IBDevLab — معمل التجارب البرمجية'
      },
      {
        path: 'exp',
        loadComponent: () =>
          import('./components/exp/exp.component').then(m => m.ExpComponent),
        title: 'Explanation Page'
      },

      // ─── Interactive Components ───
      {
        path: 'tabs',
        loadComponent: () =>
          import('./components/structured-components/tabs/tabs.component').then(m => m.TabsComponent),
        title: 'Tabs Component'
      },
      {
        path: 'blocks',
        loadComponent: () =>
          import('./components/structured-components/background-generator/background-generator.component').then(m => m.BackgroundGeneratorComponent),
        title: 'Blocks Generator'
      },
      {
        path: 'animated-typing-text',
        loadComponent: () =>
          import('./components/structured-components/animated-text/animated-text.component').then(m => m.AnimatedTextComponent),
        title: 'Animated Typing Text'
      },
      {
        path: 'password-generator-v1',
        loadComponent: () =>
          import('./components/structured-components/password-generator/password-generator.component').then(m => m.PasswordGeneratorComponent),
        title: 'Password Generator V1'
      },
      {
        path: 'animated-popup-v1',
        loadComponent: () =>
          import('./components/structured-components/animated-popup-v1/animated-popup-v1.component').then(m => m.AnimatedPopupV1Component),
        title: 'Animated Popup V1'
      },
      {
        path: 'menu-indicator-v1',
        loadComponent: () =>
          import('./components/structured-components/menu-indicator-v1/menu-indicator-v1.component').then(m => m.MenuIndicatorV1Component),
        title: 'Menu Indicator V1'
      },
      {
        path: 'conic-gradient-generator',
        loadComponent: () =>
          import('./components/structured-components/conic-gradient-generator/conic-gradient-generator.component').then(m => m.ConicGradientGeneratorComponent),
        title: 'Conic Gradient Generator'
      },
      {
        path: 'solar-system-loading',
        loadComponent: () =>
          import('./components/structured-components/solar-system-loading/solar-system-loading.component').then(m => m.SolarSystemLoadingComponent),
        title: 'Solar System Loading'
      },
      {
        path: 'interactive-box-3d',
        loadComponent: () =>
          import('./components/structured-components/interactive-box3-d/interactive-box3-d.component').then(m => m.InteractiveBox3DComponent),
        title: 'Interactive Box 3D'
      },
      {
        path: 'clip-path-scrolling',
        loadComponent: () =>
          import('./components/structured-components/clip-path-scrolling/clip-path-scrolling.component').then(m => m.ClipPathScrollingComponent),
        title: 'Clip Path Scrolling'
      },
      {
        path: 'glassmorphism-v1',
        loadComponent: () =>
          import('./components/structured-components/glassmorphism-v1/glassmorphism-v1.component').then(m => m.GlassmorphismV1Component),
        title: 'Glassmorphism V1'
      },
      {
        path: 'animated-3d-gif-image',
        loadComponent: () =>
          import('./components/structured-components/animated-gifimage3d/animated-gifimage3d.component').then(m => m.AnimatedGIFImage3dComponent),
        title: 'Animated 3D GIF Image'
      },
      {
        path: 'slider-v1',
        loadComponent: () =>
          import('./components/structured-components/slider-v1/slider-v1.component').then(m => m.SliderV1Component),
        title: 'Slider V1'
      },
      {
        path: 'text-stroke-fill-animation',
        loadComponent: () =>
          import('./components/structured-components/text-stroke-fill-animation/text-stroke-fill-animation.component').then(m => m.TextStrokeFillAnimationComponent),
        title: 'Text Stroke Fill Animation'
      },
      {
        path: 'text-stroke-animation',
        loadComponent: () =>
          import('./components/structured-components/text-stroke-animation/text-stroke-animation.component').then(m => m.TextStrokeAnimationComponent),
        title: 'Text Stroke Animation'
      },
      {
        path: 'html-css-js',
        loadComponent: () =>
          import('./components/structured-components/html-css-js/html-css-js.component').then(m => m.HtmlCssJsComponent),
        title: 'HTML CSS JS projects'
      },
      {
        path: 'news-app',
        loadComponent: () =>
          import('./components/structured-components/news-app/news-app.component').then(m => m.NewsAppComponent),
        title: 'News app project'
      },
      {
        path: 'pie-chart',
        loadComponent: () =>
          import('./components/structured-components/pie-chart/pie-chart.component').then(m => m.PieChartComponent),
        title: 'Pie chart project'
      },
      {
        path: 'text-v4',
        loadComponent: () =>
          import('./components/structured-components/text-v4/text-v4.component').then(m => m.TextV4Component),
        title: 'Text Animation V4'
      },
      {
        path: 'rains',
        loadComponent: () =>
          import('./components/structured-components/rains/rains.component').then(m => m.RainsComponent),
        title: 'Rains Animation'
      },
      {
        path: 'loading-v2',
        loadComponent: () =>
          import('./components/structured-components/loading/components/loading-v2/loading-v2.component').then(m => m.LoadingV2Component),
        title: 'Loading Animation V2'
      },
      {
        path: 'text-v5',
        loadComponent: () =>
          import('./components/structured-components/text-v5/text-v5.component').then(m => m.TextV5Component),
        title: 'Text Animation V5'
      },
      {
        path: 'mouse-move-v3',
        loadComponent: () =>
          import('./components/structured-components/mouse-move-v3/mouse-move-v3.component').then(m => m.MouseMoveV3Component),
        title: 'Mouse Move Animation V3'
      },
      {
        path: 'text-v3',
        loadComponent: () =>
          import('./components/structured-components/text-v3/text-v3.component').then(m => m.TextV3Component),
        title: 'Text Animation V3'
      },
      {
        path: 'mouse-move-v2',
        loadComponent: () =>
          import('./components/structured-components/mouse-move-v2/mouse-move-v2.component').then(m => m.MouseMoveV2Component),
        title: 'Mouse Move Animation V2'
      },
      {
        path: 'image-scrolling',
        loadComponent: () =>
          import('./components/structured-components/image-scrolling/image-scrolling.component').then(m => m.ImageScrollingComponent),
        title: 'Image Scrolling Effect'
      },
      {
        path: 'tilt-v1',
        loadComponent: () =>
          import('./components/structured-components/tilt-v1/tilt-v1.component').then(m => m.TiltV1Component),
        title: 'Tilt Effect V1'
      },
      {
        path: 'tilt-v2',
        loadComponent: () =>
          import('./components/structured-components/tilt-v2/tilt-v2.component').then(m => m.TiltV2Component),
        title: 'Tilt Effect V2'
      },
      {
        path: 'tilt-v3',
        loadComponent: () =>
          import('./components/structured-components/tilt-v3/tilt-v3.component').then(m => m.TiltV3Component),
        title: 'Tilt Effect V3'
      },
      {
        path: 'mouse-move-v1',
        loadComponent: () =>
          import('./components/structured-components/mouse-move-v1/mouse-move-v1.component').then(m => m.MouseMoveV1Component),
        title: 'Mouse Move Animation V1'
      },
      {
        path: 'cube',
        loadComponent: () =>
          import('./components/structured-components/cube/cube.component').then(m => m.CubeComponent),
        title: 'Cube Animation'
      },
      {
        path: 'drop-of-water',
        loadComponent: () =>
          import('./components/structured-components/drop-of-water/drop-of-water').then(m => m.DropOfWater),
        title: 'Drop of Water Animation'
      },
      {
        path: 'can-rotation',
        loadComponent: () =>
          import('./components/structured-components/can-rotation/can-rotation').then(m => m.CanRotation),
        title: 'Can Rotation Animation'
      },
      {
        path: 'circular-logo',
        loadComponent: () =>
          import('./components/structured-components/circular-logo/circular-logo').then(m => m.CircularLogo),
        title: 'Circular Logo Animation'
      },

      // ─── Lazy-loaded NgModules (feature modules with internal routes) ───
      {
        path: 'buttons',
        loadChildren: () =>
          import('./components/structured-components/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'night-mode',
        loadChildren: () =>
          import('./components/structured-components/night-mode/night-mode.module').then(m => m.NightModeModule)
      },
      {
        path: 'layers',
        loadChildren: () =>
          import('./components/structured-components/layers/layers-module').then(m => m.LayersModule)
      },
      {
        path: 'loading',
        loadChildren: () =>
          import('./components/structured-components/loading/loading-module').then(m => m.LoadingModule)
      },

      // ─── CSS Battles (29 routes) ───
      {
        path: 'css_battle_P1',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p1' },
        title: 'CSS Battle Project 1'
      },
      {
        path: 'css_battle_P2',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p2' },
        title: 'CSS Battle Project 2'
      },
      {
        path: 'css_battle_P3',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p3' },
        title: 'CSS Battle Project 3'
      },
      {
        path: 'css_battle_P4',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p4' },
        title: 'CSS Battle Project 4'
      },
      {
        path: 'css_battle_P5',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p5' },
        title: 'CSS Battle Project 5'
      },
      {
        path: 'css_battle_P6',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p6' },
        title: 'CSS Battle Project 6'
      },
      {
        path: 'css_battle_P7',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p7' },
        title: 'CSS Battle Project 7'
      },
      {
        path: 'css_battle_P8',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p8' },
        title: 'CSS Battle Project 8'
      },
      {
        path: 'css_battle_P9',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p9' },
        title: 'CSS Battle Project 9'
      },
      {
        path: 'css_battle_P10',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p10' },
        title: 'CSS Battle Project 10'
      },
      {
        path: 'css_battle_p11',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p11' },
        title: 'Css Battle Project 11'
      },
      {
        path: 'css_battle_p12',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p12' },
        title: 'Css Battle Project 12'
      },
      {
        path: 'css_battle_p13',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p13' },
        title: 'Css Battle Project 13'
      },
      {
        path: 'css_battle_p14',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p14' },
        title: 'Css Battle Project 14'
      },
      {
        path: 'css_battle_p15',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p15' },
        title: 'Css Battle Project 15'
      },
      {
        path: 'css_battle_p16',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p16' },
        title: 'Css Battle Project 16'
      },
      {
        path: 'css_battle_p17',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p17' },
        title: 'Css Battle Project 17'
      },
      {
        path: 'css_battle_p18',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p18' },
        title: 'Css Battle Project 18'
      },
      {
        path: 'css_battle_p19',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p19' },
        title: 'Css Battle Project 19'
      },
      {
        path: 'css_battle_p20',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p20' },
        title: 'Css Battle Project 20'
      },
      {
        path: 'css_battle_p21',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p21' },
        title: 'Css Battle Project 21'
      },
      {
        path: 'css_battle_p22',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p22' },
        title: 'Css Battle Project 22'
      },
      {
        path: 'css_battle_p23',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p23' },
        title: 'Css Battle Project 23'
      },
      {
        path: 'css_battle_p24',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p24' },
        title: 'Css Battle Project 24'
      },
      {
        path: 'css_battle_p25',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p25' },
        title: 'Css Battle Project 25'
      },
      {
        path: 'css_battle_p26',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p26' },
        title: 'Css Battle Project 26'
      },
      {
        path: 'css_battle_p27',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p27' },
        title: 'Css Battle Project 27'
      },
      {
        path: 'css_battle_p28',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p28' },
        title: 'Css Battle Project 28'
      },
      {
        path: 'css_battle_p29',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p29' },
        title: 'Css Battle Project 29'
      },
      {
        path: 'css_battle_p30',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p30' },
        title: 'Css Battle Project 30'
      },
      {
        path: 'css_battle_p31',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p31' },
        title: 'Css Battle Project 31'
      },

      // ─── Problem Solving / LeetCode (11 routes) ───
      {
        path: 'problem-solving/roman-to-integer',
        loadComponent: () =>
          import('./components/structured-components/leet-code-1/leet-code-1').then(m => m.LeetCode1),
        title: 'Roman To Integer'
      },
      {
        path: 'problem-solving/longest-substring',
        loadComponent: () =>
          import('./components/structured-components/leet-code-2/leet-code-2').then(m => m.LeetCode2),
        title: 'Longest Substring'
      },
      {
        path: 'problem-solving/palindrome-number',
        loadComponent: () =>
          import('./components/structured-components/leet-code-3/leet-code-3').then(m => m.LeetCode3),
        title: 'Palindrome Number'
      },
      {
        path: 'problem-solving/longest-common-prefix',
        loadComponent: () =>
          import('./components/structured-components/leet-code-4/leet-code-4').then(m => m.LeetCode4),
        title: 'Longest Common Prefix'
      },
      {
        path: 'problem-solving/valid-parentheses',
        loadComponent: () =>
          import('./components/structured-components/leet-code-5/leet-code-5').then(m => m.LeetCode5),
        title: 'Valid Parentheses'
      },
      {
        path: 'problem-solving/merge-two-sorted-lists',
        loadComponent: () =>
          import('./components/structured-components/leet-code-6/leet-code-6').then(m => m.LeetCode6),
        title: 'Merge Two Sorted Lists'
      },
      {
        path: 'problem-solving/remove-duplicates-from-sorted-array',
        loadComponent: () =>
          import('./components/structured-components/leet-code-7/leet-code-7').then(m => m.LeetCode7),
        title: 'Remove duplicates from sorted array'
      },
      {
        path: 'problem-solving/remove-element',
        loadComponent: () =>
          import('./components/structured-components/leet-code-8/leet-code-8').then(m => m.LeetCode8),
        title: 'Remove Element'
      },
      {
        path: 'problem-solving/find-the-index-of-the-first-occurrence',
        loadComponent: () =>
          import('./components/structured-components/leet-code-9/leet-code-9').then(m => m.LeetCode9),
        title: 'Find the Index of the First Occurrence'
      },
      {
        path: 'problem-solving/search-insert-position',
        loadComponent: () =>
          import('./components/structured-components/leet-code-10/leet-code-10').then(m => m.LeetCode10),
        title: 'Search Insert Position'
      },
      {
        path: 'problem-solving/length-of-last-word',
        loadComponent: () =>
          import('./components/structured-components/leet-code-11/leet-code-11').then(m => m.LeetCode11),
        title: 'Length of Last Word'
      },

      // ─── Clean Code (5 routes) ───
      {
        path: 'clean-code-01',
        loadComponent: () =>
          import('./components/structured-components/clean-code-01/clean-code-01').then(m => m.CleanCode01),
        title: 'Clean Code – From Messy to Maintainable'
      },
      {
        path: 'clean-code-02',
        loadComponent: () =>
          import('./components/structured-components/clean-code-02/clean-code-02').then(m => m.CleanCode02),
        title: 'Clean Code – Meaningful Names'
      },
      {
        path: 'clean-code-03',
        loadComponent: () =>
          import('./components/structured-components/clean-code-03/clean-code-03').then(m => m.CleanCode03),
        title: 'Clean Code – Class & Method Names'
      },
      {
        path: 'clean-code-04',
        loadComponent: () =>
          import('./components/structured-components/clean-code-04/clean-code-04').then(m => m.CleanCode04),
        title: 'Clean Code – Functions'
      },
      {
        path: 'clean-code-05',
        loadComponent: () =>
          import('./components/structured-components/clean-code-05/clean-code-05').then(m => m.CleanCode05),
        title: 'Clean Code – Comments'
      },

      // ─── Lab (specimen stage) ───
      {
        path: 'lab',
        loadComponent: () =>
          import('./components/lab/lab').then(m => m.LabComponent),
        title: 'المعمل الحيّ — IBDevLab'
      },

      // ─── Station page (algorithms) ───
      {
        path: 'algorithms/binary-search',
        loadComponent: () =>
          import('../features/station-page/station-page').then(m => m.StationPageComponent),
        title: 'Binary Search - IBDevLab',
        data: { stationId: 'A-001' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientLayoutRoutingModule { }