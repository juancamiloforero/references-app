import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyReferencePageRoutingModule } from './modify-reference-routing.module';

import { ModifyReferencePage } from './modify-reference.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModifyReferencePageRoutingModule
  ],
  declarations: [ModifyReferencePage]
})
export class ModifyReferencePageModule {}
