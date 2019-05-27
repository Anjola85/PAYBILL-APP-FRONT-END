import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaymentGatewayPage } from './payment-gateway.page';
import { DstvPage } from '../packages/dstv.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentGatewayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaymentGatewayPage]
})
export class PaymentGatewayPageModule {}
