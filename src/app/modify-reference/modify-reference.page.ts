import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReferencesService } from '../service/references.service';
import { ReferenceModel } from '../shared/reference.interface';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-modify-reference',
  templateUrl: './modify-reference.page.html',
  styleUrls: ['./modify-reference.page.scss'],
})
export class ModifyReferencePage implements OnInit {

  private reference: ReferenceModel;
  private refForm: FormGroup;

  isSubmitted = false;

  constructor(
    private refSvc: ReferencesService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    const refId = this.route.snapshot.paramMap.get('refId');
    this.refSvc.getReference(refId).subscribe(ref => {
      ref.subscribe(ref => {
        this.reference = ref;
        this.refForm = this.formBuilder.group({
          titulo: [this.reference.titulo, [Validators.required]],
          autores: [this.reference.autores, [Validators.required]],
          tipoPub: [this.reference.tipoPub+'', [Validators.required]],
          anioPub: [this.reference.anioPub, [Validators.required]],
          doi: [this.reference.doi],
          evento: [this.reference.evento]
        })
      }, err => {
        console.log('Error al obtener la referencia: ', err);
      });
    });
  }

  onModifyReference() {
    this.isSubmitted = true;

    if (!this.refForm.valid) {

    } else {
      let data: ReferenceModel = {
        autores: this.refForm.get('autores').value,
        tipoPub: +this.refForm.get('tipoPub').value,
        titulo: this.refForm.get('titulo').value,
        doi: this.refForm.get('doi').value,
        evento: this.refForm.get('evento').value,
        anioPub: +this.refForm.get('anioPub').value,
        userId: null,
        id: this.reference.id
      }
      this.refSvc.updateReference(data).then(() => {
        this.refForm.reset();
        this.router.navigate(['home']);
      })
    }
  }

  get errorControl() {
    return this.refForm.controls;
  }

}
