import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TavlaPageRoutingModule } from './tavla-routing.module';

import { TavlaPage } from './tavla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TavlaPageRoutingModule
  ],
  declarations: [TavlaPage]
})
export class TavlaPageModule {}
