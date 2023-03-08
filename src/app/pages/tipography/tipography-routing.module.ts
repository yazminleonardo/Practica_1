import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipographyPage } from './tipography.page';

const routes: Routes = [
  {
    path: '',
    component: TipographyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipographyPageRoutingModule {}
