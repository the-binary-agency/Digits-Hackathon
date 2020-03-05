import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandshakePageRoutingModule } from './handshake-routing.module';

import { HandshakePage } from './handshake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HandshakePageRoutingModule
  ],
  declarations: [HandshakePage]
})
export class HandshakePageModule {}
