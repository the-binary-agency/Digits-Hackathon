import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedInfoPage } from './shared-info.page';

const routes: Routes = [
  {
    path: '',
    component: SharedInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedInfoPageRoutingModule {}
