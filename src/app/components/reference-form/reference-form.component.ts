import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { ReferenceModel } from 'src/app/shared/reference.interface';

@Component({
  selector: 'app-reference-form',
  templateUrl: './reference-form.component.html',
  styleUrls: ['./reference-form.component.scss'],
})
export class ReferenceFormComponent implements OnInit {

  @Input() reference: ReferenceModel;
  @Output() onReferenceAction: EventEmitter<ReferenceModel> = new EventEmitter<ReferenceModel>();

  isSubmitted = false;

  private myReference: ReferenceModel = {
    id: null,
    titulo: null,
    autores: null,
    tipoPub: null,
    evento: null,
    doi: null,
    anioPub: null,
    userId: null
  }
  
  refForm = this.formBuilder.group({
    titulo: [this.myReference.titulo, [Validators.required]],
    autores: [this.myReference.autores, [Validators.required]],
    tipoPub: [this.myReference.tipoPub, [Validators.required]],
    anioPub: [this.myReference.anioPub, [Validators.required]],
    doi: [this.myReference.doi],
    evento: [this.myReference.evento]
  })

  constructor(private authSvc: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (this.reference) {
      this.myReference = this.reference;
    }

    console.log('Reference->', this.reference);
  }

  get errorControl() {
    return this.refForm.controls;
  }

  async onActionButton() {
    console.log(this.refForm.value);
    this.isSubmitted = true;
    /*if (!this.refForm.valid) {

    } else {
      this.authSvc.user$.subscribe(user => {
        let data: ReferenceModel = {
          autores: autores.value,
          tipoPub: tipopub.value,
          titulo: titulopub.value,
          doi: doi.value,
          evento: eventorevista.value,
          anioPub: +aniopub.value,
          userId: user.uid
        }
        if (this.reference) {
          data.id = this.reference.id;
        }
        this.onReferenceAction.emit(data);
      })
    }*/
    
  }

}
