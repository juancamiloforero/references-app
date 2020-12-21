import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authSvc: AuthService, 
    private router: Router, 
    private toastController: ToastController) { }

  ngOnInit() {
  }

  async onRegister(email, password) {
    try {
      const user = await this.authSvc.register(email.value, password.value);

      if (user) {
        this.presentToast("Registro satisfactorio!")
        email.value='';
        password.value='';
        this.router.navigate(['home']);
      }
    } catch(error){
      this.presentToast("Ha ocurrido un error!")
      console.log('Error->', error);
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500
    });
    toast.present();
  }

}
