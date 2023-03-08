import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RippleEffectPageRoutingModule } from './ripple-effect-routing.module';

import { RippleEffectPage } from './ripple-effect.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RippleEffectPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RippleEffectPage]
})
export class RippleEffectPageModule {}
