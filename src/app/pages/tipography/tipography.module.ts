import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipographyPageRoutingModule } from './tipography-routing.module';

import { TipographyPage } from './tipography.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipographyPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TipographyPage]
})
export class TipographyPageModule {}
