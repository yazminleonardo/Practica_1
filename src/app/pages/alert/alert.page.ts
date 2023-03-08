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
  onclick(){
    this.presentAlert();
  }

  /* Mostrando action sheet de la documentacion*/
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      backdropDismiss:false,
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
