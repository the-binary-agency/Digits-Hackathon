import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandshakePage } from './handshake.page';

const routes: Routes = [
  {
    path: '',
    component: HandshakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandshakePageRoutingModule {}
