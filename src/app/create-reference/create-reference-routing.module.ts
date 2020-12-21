import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateReferencePage } from './create-reference.page';

const routes: Routes = [
  {
    path: '',
    component: CreateReferencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateReferencePageRoutingModule {}
