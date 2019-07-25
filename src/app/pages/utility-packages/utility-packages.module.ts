import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UtilityPackagesPage } from './utility-packages.page';

const routes: Routes = [
  {
    path: '',
    component: UtilityPackagesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UtilityPackagesPage]
})
export class UtilityPackagesPageModule {}
