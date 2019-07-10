import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AirtimePaymentGatewayPage } from './airtime-payment-gateway.page';

const routes: Routes = [
  {
    path: '',
    component: AirtimePaymentGatewayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AirtimePaymentGatewayPage],
  entryComponents: [AirtimePaymentGatewayPage]
})
export class AirtimePaymentGatewayPageModule {}
