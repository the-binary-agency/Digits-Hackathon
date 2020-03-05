import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedInfoPageRoutingModule } from './shared-info-routing.module';

import { SharedInfoPage } from './shared-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedInfoPageRoutingModule
  ],
  declarations: [SharedInfoPage]
})
export class SharedInfoPageModule {}
