import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TavlaPage } from './tavla.page';

const routes: Routes = [
  {
    path: '',
    component: TavlaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TavlaPageRoutingModule {}
