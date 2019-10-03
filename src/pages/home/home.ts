import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// Agregamos el plugin Barcode Scanner
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
// Agremos el ToastController para mostrar un mensaje en nuestra app
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public result: any; // creamos una variable para poder usarla en la vista

  constructor(
    public navCtrl        : NavController,
    private barcodeScanner: BarcodeScanner, // lo inyectamos en nuestro constructor
    public toastCtrl      : ToastController) {
  }

  /* scanner */
  scanner() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      if(barcodeData){
        this.result = barcodeData.text;
      }
    }).catch(err => {
      console.log('Error', err);
      this.presentToast("Barcode Scanner no esta disponible en el navegador :(");
    });
  }

  /* show toast message */
  presentToast(message:string) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
