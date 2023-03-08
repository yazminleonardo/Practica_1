import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController : AlertController) { }

  ngOnInit() {
  }
  onClick(){
    this.presentAlert();
  }
   /* Mostrando action sheet de la demostración */
   async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      backdropDismiss:false,
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }
  /* Terminando action sheet */
}
