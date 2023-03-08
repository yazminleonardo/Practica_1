import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreadcrumbsPageRoutingModule } from './breadcrumbs-routing.module';

import { BreadcrumbsPage } from './breadcrumbs.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreadcrumbsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BreadcrumbsPage]
})
export class BreadcrumbsPageModule {}
