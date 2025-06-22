import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingRoutingModule } from './loading-routing-module';
import { Loading } from './loading';


@NgModule({
  declarations: [
    Loading
  ],
  imports: [
    CommonModule,
    LoadingRoutingModule
  ]
})
export class LoadingModule { }
