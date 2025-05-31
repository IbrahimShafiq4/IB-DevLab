import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NightModeComponent } from './night-mode.component';
import { NightModeV1Component } from './components/night-mode-v1/night-mode-v1.component';
import { NightModeV2Component } from './components/night-mode-v2/night-mode-v2.component';

const routes: Routes = [
  {
    path: '', component: NightModeComponent, children: [
      { path: '', redirectTo: 'night-mode-v1', pathMatch: 'full' },
      { path: 'night-mode-v1', component: NightModeV1Component, title: 'Night Mode Meme' },
      { path: 'night-mode-v2', component: NightModeV2Component, title: 'Night Mode Meme' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NightModeModule { }
