import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tavla',
  templateUrl: './tavla.page.html',
  styleUrls: ['./tavla.page.scss'],
})
export class TavlaPage implements OnInit {
  numero!: number;
  tabla: string[] = [];

  constructor(private alertController: AlertController) {}

  async generTabla() {
    if (this.numero <= 0) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe ingresar un número mayor que cero.',
        buttons: ['Ok'],
      });
      await alert.present();
      return;
    }

    if (isNaN(this.numero)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El campo es obligatorio y los valores deben ser numericos.',
        buttons: ['Ok'],
      });
      await alert.present();
      return;
    }

    this.tabla = [];
    for (let i: number = 1; i <= 14; i++) {
      this.tabla.push(`${this.numero} x ${i} = ${this.numero * i}`);
    }
  }

  ngOnInit() {}
}
