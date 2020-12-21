import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../service/auth.service';
import { ReferencesService } from '../service/references.service';
import { ReferenceModel } from '../shared/reference.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private references: ReferenceModel[];

  constructor(private authSvc: AuthService, private refSvc: ReferencesService,private router: Router, public alertController: AlertController) {}

  ionViewWillEnter() {
    
  }

  async onDeleteReference(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención!',
      message: 'Está seguro que desea eliminar esta referencia?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Okay',
          handler: () => {
            this.refSvc.deleteReference(id);
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {
    this.loadReferences();
  }

  private loadReferences() {
    this.refSvc.getReferences().then(value => {
      this.references = [];
      value.subscribe((value) => {
        value.subscribe((value) => { 
          value.map(a => {
            this.references.push({
              id: a.payload.doc.id,
              titulo: a.payload.doc.get('titulo'),
              autores: a.payload.doc.get('autores'),
              tipoPub: a.payload.doc.get('tipoPub'),
              evento: a.payload.doc.get('evento'),
              doi: a.payload.doc.get('doi'),
              anioPub: a.payload.doc.get('anioPub'),
              userId: a.payload.doc.get('userId')
            })
          })
        })
      })
    });
  }

  async onLogout() {
    this.authSvc.logout().then(() => {
      this.router.navigate(['start']);
    });
  }

  onCreateReference() {
    this.router.navigate(['create-reference']); 
  }

  onUpdateReference(id) {
    this.router.navigate(['modify-reference', { refId: id }]);
  }

}
