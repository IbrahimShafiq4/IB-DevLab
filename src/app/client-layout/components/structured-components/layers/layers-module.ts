import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayersRoutingModule } from './layers-routing-module';
import { Layers } from './layers';


@NgModule({
  declarations: [
    Layers
  ],
  imports: [
    CommonModule,
    LayersRoutingModule
  ]
})
export class LayersModule { }
