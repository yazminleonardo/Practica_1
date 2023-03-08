import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressIndicatorsPageRoutingModule } from './progress-indicators-routing.module';

import { ProgressIndicatorsPage } from './progress-indicators.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressIndicatorsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProgressIndicatorsPage]
})
export class ProgressIndicatorsPageModule {}
