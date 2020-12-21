import { NgModule } from '@angular/core';
import { ReferenceFormComponent } from '../components/reference-form/reference-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ReferenceFormComponent],
    exports: [ReferenceFormComponent]
})
export class ComponentsModule{}