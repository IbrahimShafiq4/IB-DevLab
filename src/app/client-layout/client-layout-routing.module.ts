import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './client-layout.component';
import { COMPONENT_ENTRIES } from './components/structured-components/component-page/component-sources.data';
import { CLEAN_CODE_ENTRIES } from './components/structured-components/clean-code-page/clean-code.data.ts';

const COMPONENT_ROUTES: Routes = Object.keys(COMPONENT_ENTRIES).map(slug => ({
  path: slug,
  loadComponent: () =>
    import('./components/structured-components/component-page/component-page').then(m => m.ComponentPageComponent),
  data: { componentId: slug },
  title: `${COMPONENT_ENTRIES[slug].projectName} | IBDevLab`
}));

const CLEAN_CODE_ROUTES: Routes = Object.keys(CLEAN_CODE_ENTRIES).map(slug => ({
  path: slug,
  loadComponent: () =>
    import('./components/structured-components/clean-code-page/clean-code-page').then(m => m.CleanCodePageComponent),
  data: { cleanCodeId: slug },
  title: `${CLEAN_CODE_ENTRIES[slug].projectName} | IBDevLab`
}));

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      // Home
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

      // Lab (specimen stage)
      {
        path: 'lab',
        loadComponent: () =>
          import('./components/lab/lab').then(m => m.LabComponent),
        title: 'المعمل الحيّ — IBDevLab'
      },

      // Structured components (unified — everything routed through component-page)
      ...COMPONENT_ROUTES,

      // Buttons Module (still separate for legacy button-v1)
      {
        path: 'buttons',
        loadChildren: () =>
          import('./components/structured-components/buttons/buttons.module').then(m => m.ButtonsModule)
      },

      // Night mode Module (still separate)
      {
        path: 'night-mode',
        loadChildren: () =>
          import('./components/structured-components/night-mode/night-mode.module').then(m => m.NightModeModule)
      },

      // Layers Module (still separate)
      {
        path: 'layers',
        loadChildren: () =>
          import('./components/structured-components/layers/layers-module').then(m => m.LayersModule)
      },

      // Loading Module (still separate)
      {
        path: 'loading',
        loadChildren: () =>
          import('./components/structured-components/loading/loading-module').then(m => m.LoadingModule)
      },

      // ─── CSS Battles ───
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
      {
        path: 'css_battle_p32',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p32' },
        title: 'Css Battle Project 32'
      },
      {
        path: 'css_battle_p33',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p33' },
        title: 'CSS Battle Project 33'
      },
      {
        path: 'css_battle_p34',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p34' },
        title: 'CSS Battle Project 34'
      },
      {
        path: 'css_battle_p35',
        loadComponent: () => import('./components/structured-components/css-battles/css-battle-page/css-battle-page').then(m => m.CssBattlePageComponent),
        data: { battleId: 'p35' },
        title: 'CSS Battle Project 35'
      },
      // ─── Problem Solving ───
      {
        path: 'problem-solving/roman-to-integer',
        loadComponent: () => import('./components/structured-components/problem-solving/problem-solving').then(m => m.ProblemSolvingPageComponent),
        data: { problemId: 'roman-to-integer' },
        title: 'Roman To Integer'
      },
      {
        path: 'problem-solving/longest-substring',
        loadComponent: () => import('./components/structured-components/problem-solving/problem-solving').then(m => m.ProblemSolvingPageComponent),
        data: { problemId: 'longest-substring' },
        title: 'Longest Substring'
      },
      {
        path: 'problem-solving/palindrome-number',
        loadComponent: () => import('./components/structured-components/problem-solving/problem-solving').then(m => m.ProblemSolvingPageComponent),
        data: { problemId: 'palindrome-number' },
        title: 'Palindrome Number'
      },
      {
        path: 'problem-solving/longest-common-prefix',
        loadComponent: () => import('./components/structured-components/problem-solving/problem-solving').then(m => m.ProblemSolvingPageComponent),
        data: { problemId: 'longest-common-prefix' },
        title: 'Longest Common Prefix'
      },
      {
        path: 'problem-solving/valid-parentheses',
        loadComponent: () => import('./components/structured-components/problem-solving/problem-solving').then(m => m.ProblemSolvingPageComponent),
        data: { problemId: 'valid-parentheses' },
        title: 'Valid Parentheses'
      },
      {
        path: 'problem-solving/merge-two-sorted-lists',
        loadComponent: () => import('./components/structured-components/problem-solving/problem-solving').then(m => m.ProblemSolvingPageComponent),
        data: { problemId: 'merge-two-sorted-lists' },
        title: 'Merge Two Sorted Lists'
      },
      {
        path: 'problem-solving/remove-duplicates-from-sorted-array',
        loadComponent: () => import('./components/structured-components/problem-solving/problem-solving').then(m => m.ProblemSolvingPageComponent),
        data: { problemId: 'remove-duplicates-from-sorted-array' },
        title: 'Remove duplicates from sorted array'
      },
      {
        path: 'problem-solving/remove-element',
        loadComponent: () => import('./components/structured-components/problem-solving/problem-solving').then(m => m.ProblemSolvingPageComponent),
        data: { problemId: 'remove-element' },
        title: 'Remove Element'
      },
      {
        path: 'problem-solving/find-the-index-of-the-first-occurrence',
        loadComponent: () => import('./components/structured-components/problem-solving/problem-solving').then(m => m.ProblemSolvingPageComponent),
        data: { problemId: 'find-the-index-of-the-first-occurrence' },
        title: 'Find the Index of the First Occurrence'
      },
      {
        path: 'problem-solving/search-insert-position',
        loadComponent: () => import('./components/structured-components/problem-solving/problem-solving').then(m => m.ProblemSolvingPageComponent),
        data: { problemId: 'search-insert-position' },
        title: 'Search Insert Position'
      },
      {
        path: 'problem-solving/length-of-last-word',
        loadComponent: () => import('./components/structured-components/problem-solving/problem-solving').then(m => m.ProblemSolvingPageComponent),
        data: { problemId: 'length-of-last-word' },
        title: 'Length of Last Word'
      },
      {
        path: 'problem-solving/add-binary',
        loadComponent: () => import('./components/structured-components/problem-solving/problem-solving').then(m => m.ProblemSolvingPageComponent),
        data: { problemId: 'add-binary' },
        title: 'Add Binary'
      },
      {
        path: 'problem-solving/sqrt-x',
        loadComponent: () => import('./components/structured-components/problem-solving/problem-solving').then(m => m.ProblemSolvingPageComponent),
        data: { problemId: 'sqrt-x' },
        title: 'Sqrt(x)'
      },
      {
        path: 'problem-solving/climbing-stairs',
        loadComponent: () => import('./components/structured-components/problem-solving/problem-solving').then(m => m.ProblemSolvingPageComponent),
        data: { problemId: 'climbing-stairs' },
        title: 'Climbing Stairs'
      },
      {
        path: 'problem-solving/remove-duplicates-from-sorted-list',
        loadComponent: () => import('./components/structured-components/problem-solving/problem-solving').then(m => m.ProblemSolvingPageComponent),
        data: { problemId: 'remove-duplicates-from-sorted-list' },
        title: 'Remove Duplicates from Sorted List'
      },
      // ─── Clean Code (unified — everything routed through clean-code-page) ───
      ...CLEAN_CODE_ROUTES,

      // ─── Station pages ───
      {
        path: 'algorithms/binary-search',
        loadComponent: () =>
          import('../features/station-page/station-page').then(m => m.StationPageComponent),
        title: 'Binary Search - IBDevLab',
        data: { stationId: 'A-001' }
      },
      {
        path: 'data-structures/linked-list',
        loadComponent: () =>
          import('../features/station-page/station-page').then(m => m.StationPageComponent),
        title: 'Linked List - IBDevLab',
        data: { stationId: 'linked-list' }
      },
      {
        path: 'built-in-apis/fetch',
        loadComponent: () =>
          import('../features/station-page/station-page').then(m => m.StationPageComponent),
        title: 'fetch() - IBDevLab',
        data: { stationId: 'fetch' }
      },
      {
        path: 'algorithms/quick-sort',
        loadComponent: () =>
          import('../features/station-page/station-page').then(m => m.StationPageComponent),
        title: 'Quick Sort - IBDevLab',
        data: { stationId: 'quick-sort' }
      },
      {
        path: 'data-structures/stack',
        loadComponent: () =>
          import('../features/station-page/station-page').then(m => m.StationPageComponent),
        title: 'Stack - IBDevLab',
        data: { stationId: 'stack' }
      },
      {
        path: 'built-in-apis/promise',
        loadComponent: () =>
          import('../features/station-page/station-page').then(m => m.StationPageComponent),
        title: 'Promise - IBDevLab',
        data: { stationId: 'promise' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientLayoutRoutingModule { }