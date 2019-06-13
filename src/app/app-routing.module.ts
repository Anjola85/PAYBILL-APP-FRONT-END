import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule'},
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'payment-gateway/:package_name/:package_amount/:user_id/:biller_id/:id', loadChildren: './pages/payment-gateway/payment-gateway.module#PaymentGatewayPageModule' },
  { path: 'packages/:user_id/:biller_id', loadChildren: './pages/packages/dstv.module#DstvPageModule' },
  { path: 'ionic', loadChildren: './pages/ionic/ionic.module#IonicPageModule' },
  { path: 'valid-info/:user_id/:biller_id', loadChildren: './pages/valid-info/valid-info.module#ValidInfoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

