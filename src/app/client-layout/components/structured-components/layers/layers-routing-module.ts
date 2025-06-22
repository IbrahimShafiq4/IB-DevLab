import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layers } from './layers';
import { ImageLayer } from './components/image-layer/image-layer';

const routes: Routes = [
  {
    path: '', component: Layers, children: [
      { path: '', redirectTo: 'image-layer', pathMatch: 'full' },
      { path: 'image-layer', component: ImageLayer, title: 'Image Layer' },
    ]
  }
]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayersRoutingModule { }
