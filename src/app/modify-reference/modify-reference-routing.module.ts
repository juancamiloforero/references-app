import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyReferencePage } from './modify-reference.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyReferencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyReferencePageRoutingModule {}
