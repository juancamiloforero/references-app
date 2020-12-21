import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateReferencePageRoutingModule } from './create-reference-routing.module';

import { CreateReferencePage } from './create-reference.page';
import { ComponentsModule } from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CreateReferencePageRoutingModule
  ],
  declarations: [CreateReferencePage]
})
export class CreateReferencePageModule {}
