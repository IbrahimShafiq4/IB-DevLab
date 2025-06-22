import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Loading } from './loading';
import { LoadingV1 } from './components/loading-v1/loading-v1';
import { LoadingV2 } from './components/loading-v2/loading-v2';
import { LoadingV3 } from './components/loading-v3/loading-v3';
import { LoadingV4 } from './components/loading-v4/loading-v4';
import { LoadingV5 } from './components/loading-v5/loading-v5';
import { LoadingV6 } from './components/loading-v6/loading-v6';
import { LoadingV7 } from './components/loading-v7/loading-v7';
import { LoadingV8 } from './components/loading-v8/loading-v8';
import { LoadingV9 } from './components/loading-v9/loading-v9';
import { AllLoaders } from './components/all-loaders/all-loaders';

const routes: Routes = [
  {
    path: '', component: Loading, children: [
      { path: '', redirectTo: 'loading', pathMatch: 'full' },
      { path: 'loading', component: AllLoaders, title: 'All Loaders' },
      { path: 'loading-v1', component: LoadingV1, title: 'Loading V1' },
      { path: 'loading-v2', component: LoadingV2, title: 'Loading V2' },
      { path: 'loading-v3', component: LoadingV3, title: 'loading v3' },
      { path: 'loading-v4', component: LoadingV4, title: 'loading v4' },
      { path: 'loading-v5', component: LoadingV5, title: 'loading v5' },
      { path: 'loading-v6', component: LoadingV6, title: 'loading v6' },
      { path: 'loading-v7', component: LoadingV7, title: 'loading v7' },
      { path: 'loading-v8', component: LoadingV8, title: 'loading v8' },
      { path: "loading-v9", component: LoadingV9, title: 'loading v9' },
      { path: '**', redirectTo: 'loading-v1', pathMatch: 'full' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingRoutingModule { }
