import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm, AbstractControl} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';
import {AppService} from '../../services/app-service.service';
import {LoginM} from '../../model/loginM';
import {AppHelper} from '../helper/app-helper';
import {HomePage} from '../home/home.page';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: LoginM = new LoginM();
  sucessMessage;


  // tslint:disable-next-line:max-line-length
  constructor(private navCtrl: NavController, public formbuilder: FormBuilder, private appService: AppService) {
}
  ngOnInit() {

  }



  doLogin(loginForm: NgForm) {
  //   //   if (!this.doValidation){
  //   //     return
  //   //   }
    this.appService.post('/api/login', this.login)
        .subscribe(res => {
          console.log('response' , res);
          if (res.status === true) {
            this.sucessMessage = res.message;
            AppHelper.store('token', res.token);
            AppHelper.store('userInfo', res.data);
            this.navCtrl.navigateForward('tabs/home');
          }

        }, error => {
          console.log('error login', error);
        });
  }

  onSubmit() {
  }






}
