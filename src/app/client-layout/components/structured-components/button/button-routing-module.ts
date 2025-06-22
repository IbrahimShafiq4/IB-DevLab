import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Button } from './button';

const routes: Routes = [{ path: '', component: Button }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonRoutingModule { }
