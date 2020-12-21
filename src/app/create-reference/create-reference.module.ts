import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateReferencePageRoutingModule } from './create-reference-routing.module';

import { CreateReferencePage } from './create-reference.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreateReferencePageRoutingModule
  ],
  declarations: [CreateReferencePage]
})
export class CreateReferencePageModule {}
