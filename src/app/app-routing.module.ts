import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule'},
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'payment-gateway/:user_id/:biller_id/:package_id/:package_name/:package_amount/:firstName/:lastName', loadChildren: './pages/payment-gateway/payment-gateway.module#PaymentGatewayPageModule' },
    // tslint:disable-next-line:max-line-length
  { path: 'packages/:user_id/:biller_id', loadChildren: './pages/packages/dstv.module#DstvPageModule' },
  { path: 'ionic', loadChildren: './pages/ionic/ionic.module#IonicPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'valid-info/:user_id/:package_name/:package_amount/:biller_id/:package_id/:package_image', loadChildren: './pages/valid-info/valid-info.module#ValidInfoPageModule' },
  { path: 'airtime-purchase', loadChildren: './pages/airtime-purchase/airtime-purchase.module#AirtimePurchasePageModule' },
      // tslint:disable-next-line:max-line-length
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'change-password', loadChildren: './pages/change-password/change-password.module#ChangePasswordPageModule' },
    // tslint:disable-next-line:max-line-length
  { path: 'swift-topup/:internet_id/:internet_image/:user_id/:internet_name', loadChildren: './pages/internet-topup/swift-topup.module#SwiftTopupPageModule' },
  { path: 'ekedc', loadChildren: './pages/ekedc/ekedc.module#EkedcPageModule' },
  // tslint:disable
  { path: 'utility-packages/:biller_id/:biller_name/:user_id', loadChildren: './pages/utility-packages/utility-packages.module#UtilityPackagesPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

