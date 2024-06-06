import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.page.html',
  styleUrls: ['./promedio.page.scss'],
})
export class PromedioPage implements OnInit {
  numero1!: number;
  numero2!: number;
  numero3!: number;

  mayor!: number;
  menor!: number;
  promedio!: number;

  constructor(private alertController: AlertController) {}

  async calcular() {
    if (isNaN(this.numero1) || isNaN(this.numero2) || isNaN(this.numero3)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message:
          'Debe ingresar los tres números y debe ser mayor o igual que cero',
        buttons: ['Ok'],
      });
      await alert.present();
      return;
    }

    this.mayor = Math.max(this.numero1, this.numero2, this.numero3);

    this.menor = Math.min(this.numero1, this.numero2, this.numero3);

    this.promedio = (this.numero1 + this.numero2 + this.numero3) / 3;
  }

  ngOnInit() {}
}
