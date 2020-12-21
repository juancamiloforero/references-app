import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReferencesService } from '../service/references.service';
import { ReferenceModel } from '../shared/reference.interface';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-reference',
  templateUrl: './create-reference.page.html',
  styleUrls: ['./create-reference.page.scss'],
})
export class CreateReferencePage implements OnInit {

  constructor(
    private refSvc: ReferencesService, 
    private router: Router, 
    private formBuilder: FormBuilder, 
    private authSvc: AuthService,
    private toastController: ToastController) { }

  refForm: FormGroup
  isSubmitted = false;

  ngOnInit() {
    this.refForm = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      autores: ['', [Validators.required]],
      tipoPub: [null, [Validators.required]],
      anioPub: [null, [Validators.required]],
      doi: [''],
      evento: ['']
    })
  }

  onCreateReference() {
    this.isSubmitted = true;

    if (!this.refForm.valid) {

    } else {
      this.authSvc.user$.subscribe(usr => {
        let data: ReferenceModel = {
          autores: this.refForm.get('autores').value,
          tipoPub: +this.refForm.get('tipoPub').value,
          titulo: this.refForm.get('titulo').value,
          doi: this.refForm.get('doi').value,
          evento: this.refForm.get('evento').value,
          anioPub: +this.refForm.get('anioPub').value,
          userId: usr.uid,
        }
        this.refSvc.addReference(data).then(() => {
          this.refForm.reset();
          this.presentToast("Referencia creada satisfactoriamente");
          this.router.navigate(['home']);
        })
      });
    }
  }

  get errorControl() {
    return this.refForm.controls;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500
    });
    toast.present();
  }
}
