import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../service/auth.service';
import { ReferencesService } from '../service/references.service';
import { ToastController } from '@ionic/angular';
import { ReferenceModel } from '../shared/reference.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private references: ReferenceModel[];

  constructor(private authSvc: AuthService, 
    private refSvc: ReferencesService,
    private router: Router, 
    public alertController: AlertController, 
    private toastController: ToastController) {}

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
            this.refSvc.deleteReference(id).then(() => {
              this.presentToast("Se ha eliminado la referencia")
            });
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
    this.refSvc.getReferences().subscribe(refs => {
      refs.subscribe(refs => {
        this.references = refs;
      }); 
    },
    err => {
      console.log('Ha ocurrido un error al cargar las referencias: ', err);
    })
  }

  async onLogout() {
    this.authSvc.logout().then(() => {
      this.references = null;
      this.router.navigate(['start']);
    });
  }

  onCreateReference() {
    this.router.navigate(['create-reference']); 
  }

  onUpdateReference(id) {
    this.router.navigate(['modify-reference', { refId: id }]);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500
    });
    toast.present();
  }

}
