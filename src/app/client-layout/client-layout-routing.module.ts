import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './client-layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExpComponent } from './components/exp/exp.component';
import { TabsComponent } from './components/structured-components/tabs/tabs.component';
import { CustomVideoComponent } from './components/structured-components/custom-video/custom-video.component';
import { BackgroundGeneratorComponent } from './components/structured-components/background-generator/background-generator.component';
import { AnimatedTextComponent } from './components/structured-components/animated-text/animated-text.component';
import { PasswordGeneratorComponent } from './components/structured-components/password-generator/password-generator.component';
import { AnimatedPopupV1Component } from './components/structured-components/animated-popup-v1/animated-popup-v1.component';
import { ClipPathScrollingComponent } from './components/structured-components/clip-path-scrolling/clip-path-scrolling.component';
import { ConicGradientGeneratorComponent } from './components/structured-components/conic-gradient-generator/conic-gradient-generator.component';
import { GlassmorphismV1Component } from './components/structured-components/glassmorphism-v1/glassmorphism-v1.component';
import { InteractiveBox3DComponent } from './components/structured-components/interactive-box3-d/interactive-box3-d.component';
import { MenuIndicatorV1Component } from './components/structured-components/menu-indicator-v1/menu-indicator-v1.component';
import { SliderV1Component } from './components/structured-components/slider-v1/slider-v1.component';
import { SolarSystemLoadingComponent } from './components/structured-components/solar-system-loading/solar-system-loading.component';
import { TextStrokeAnimationComponent } from './components/structured-components/text-stroke-animation/text-stroke-animation.component';
import { TextStrokeFillAnimationComponent } from './components/structured-components/text-stroke-fill-animation/text-stroke-fill-animation.component';
import { AnimatedGIFImage3dComponent } from './components/structured-components/animated-gifimage3d/animated-gifimage3d.component';
import { HtmlCssJsComponent } from './components/structured-components/html-css-js/html-css-js.component';
import { NewsAppComponent } from './components/structured-components/news-app/news-app.component';
import { PieChartComponent } from './components/structured-components/pie-chart/pie-chart.component';
import { TextV4Component } from './components/structured-components/text-v4/text-v4.component';
import { RainsComponent } from './components/structured-components/rains/rains.component';
import { LoadingV2Component } from './components/structured-components/loading-v2/loading-v2.component';
import { TextV5Component } from './components/structured-components/text-v5/text-v5.component';
import { MouseMoveV3Component } from './components/structured-components/mouse-move-v3/mouse-move-v3.component';
import { TextV3Component } from './components/structured-components/text-v3/text-v3.component';
import { MouseMoveV2Component } from './components/structured-components/mouse-move-v2/mouse-move-v2.component';
import { ImageScrollingComponent } from './components/structured-components/image-scrolling/image-scrolling.component';
import { TiltV1Component } from './components/structured-components/tilt-v1/tilt-v1.component';
import { TiltV2Component } from './components/structured-components/tilt-v2/tilt-v2.component';
import { TiltV3Component } from './components/structured-components/tilt-v3/tilt-v3.component';
import { MouseMoveV1Component } from './components/structured-components/mouse-move-v1/mouse-move-v1.component';
import { LoadingV1Component } from './components/structured-components/loading-v1/loading-v1.component';
import { CubeComponent } from './components/structured-components/cube/cube.component';

const routes: Routes = [
  {
    path: '', component: ClientLayoutComponent, title: '', children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: '',
        component: HomeComponent,
        title: 'Home page'
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Projects Page'
      },
      {
        path: "exp",
        component: ExpComponent,
        title: "Explanation Page"
      },
      {
        path: 'tabs',
        component: TabsComponent,
        title: 'Tabs Component'
      },
      {
        path: 'video',
        component: CustomVideoComponent,
        title: 'Video Component'
      },
      {
        path: 'blocks',
        component: BackgroundGeneratorComponent,
        title: 'Blocks Generator'
      },
      {
        path: 'animated-typing-text',
        component: AnimatedTextComponent,
        title: 'Animated Typing Text'
      },
      {
        path: 'password-generator-v1',
        component: PasswordGeneratorComponent,
        title: 'Password Generator V1'
      },
      {
        path: 'animated-popup-v1',
        component: AnimatedPopupV1Component,
        title: 'Animated Popup V1'
      },
      {
        path: 'menu-indicator-v1',
        component: MenuIndicatorV1Component,
        title: 'Menu Indicator V1'
      },
      {
        path: 'conic-gradient-generator',
        component: ConicGradientGeneratorComponent,
        title: 'Conic Gradient Generator'
      },
      {
        path: 'solar-system-loading',
        component: SolarSystemLoadingComponent,
        title: 'Solar System Loading'
      },
      {
        path: 'interactive-box-3d',
        component: InteractiveBox3DComponent,
        title: 'Interactive Box 3D'
      },
      {
        path: 'clip-path-scrolling',
        component: ClipPathScrollingComponent,
        title: 'Clip Path Scrolling'
      },
      {
        path: 'glassmorphism-v1',
        component: GlassmorphismV1Component,
        title: 'Glassmorphism V1'
      },
      {
        path: 'animated-3d-gif-image',
        component: AnimatedGIFImage3dComponent,
        title: 'Animated 3D GIF Image'
      },
      {
        path: 'slider-v1',
        component: SliderV1Component,
        title: 'Slider V1'
      },
      {
        path: 'text-stroke-fill-animation',
        component: TextStrokeFillAnimationComponent,
        title: 'Text Stroke Fill Animation'
      },
      {
        path: 'text-stroke-animation',
        component: TextStrokeAnimationComponent,
        title: 'Text Stroke Animation'
      },
      {
        path: 'html-css-js',
        component: HtmlCssJsComponent,
        title: 'HTML CSS JS projects'
      },
      {
        path: 'news-app',
        component: NewsAppComponent,
        title: 'News app project'
      },
      {
        path: 'pie-chart',
        component: PieChartComponent,
        title: 'Pie chart project'
      },
      {
        path: 'text-v4',
        component: TextV4Component,
        title: 'Text Animation V4'
      },
      {
        path: 'rains',
        component: RainsComponent,
        title: 'Rains Animation'
      },
      {
        path: 'loading-v2',
        component: LoadingV2Component,
        title: 'Loading Animation V2'
      },
      {
        path: 'text-v5',
        component: TextV5Component,
        title: 'Text Animation V5'
      },
      {
        path: 'mouse-move-v3',
        component: MouseMoveV3Component,
        title: 'Mouse Move Animation V3'
      },
      {
        path: 'text-v3',
        component: TextV3Component,
        title: 'Text Animation V3'
      },
      {
        path: 'mouse-move-v2',
        component: MouseMoveV2Component,
        title: 'Mouse Move Animation V2'
      },
      {
        path: 'image-scrolling',
        component: ImageScrollingComponent,
        title: 'Image Scrolling Effect'
      },
      {
        path: 'tilt-v1',
        component: TiltV1Component,
        title: 'Tilt Effect V1'
      },
      {
        path: 'tilt-v2',
        component: TiltV2Component,
        title: 'Tilt Effect V2'
      },
      {
        path: 'tilt-v3',
        component: TiltV3Component,
        title: 'Tilt Effect V3'
      },
      {
        path: 'mouse-move-v1',
        component: MouseMoveV1Component,
        title: 'Mouse Move Animation V1'
      },
      {
        path: 'loading-v1',
        component: LoadingV1Component,
        title: 'Loading Animation V1'
      },
      {
        path: 'cube',
        component: CubeComponent,
        title: 'Cube Animation'
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./components/structured-components/buttons/buttons.module').then(m => m.ButtonsModule),
      },
      {
        path: 'night-mode',
        loadChildren: () =>
          import('./components/structured-components/night-mode/night-mode.module').then(m => m.NightModeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientLayoutRoutingModule { }