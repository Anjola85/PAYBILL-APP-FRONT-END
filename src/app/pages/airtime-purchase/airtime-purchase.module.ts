import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AirtimePurchasePage } from './airtime-purchase.page';

const routes: Routes = [
  {
    path: '',
    component: AirtimePurchasePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AirtimePurchasePage]
})
export class AirtimePurchasePageModule {}
