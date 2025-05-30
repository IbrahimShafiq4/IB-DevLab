import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ButtonV1Component } from './button-v1/button-v1.component';
import { ButtonsComponent } from './buttons.component';

const routes: Routes = [
  {
    path: '', component: ButtonsComponent, children: [
      { path: '', redirectTo: 'button-v1', pathMatch: 'full' },
      { path: 'button-v1', component: ButtonV1Component, title: 'Button V1 animation' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ButtonsModule { }
