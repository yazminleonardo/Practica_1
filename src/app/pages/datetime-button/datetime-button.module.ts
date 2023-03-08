import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimeButtonPageRoutingModule } from './datetime-button-routing.module';

import { DatetimeButtonPage } from './datetime-button.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimeButtonPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DatetimeButtonPage]
})
export class DatetimeButtonPageModule {}
