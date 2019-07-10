import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-airtime-payment-gateway',
  templateUrl: './airtime-payment-gateway.page.html',
  styleUrls: ['./airtime-payment-gateway.page.scss'],
})
export class AirtimePaymentGatewayPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
