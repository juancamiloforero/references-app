import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyReferencePageRoutingModule } from './modify-reference-routing.module';

import { ModifyReferencePage } from './modify-reference.page';
import { ComponentsModule } from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    ModifyReferencePageRoutingModule
  ],
  declarations: [ModifyReferencePage]
})
export class ModifyReferencePageModule {}
