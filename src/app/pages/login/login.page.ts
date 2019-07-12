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
  message;
  userInformation: any;


  // tslint:disable-next-line:max-line-length
  constructor(private navCtrl: NavController, public formbuilder: FormBuilder, private appService: AppService) {
}
  ngOnInit() {

  }



  doLogin(loginForm: NgForm, user_id) {
    this.appService.post('/api/login', this.login)
        .subscribe(res => {
          console.log('response' , res);
          if (res.code === 200) {
            this.message = res.message;
            this.userInformation = res['data'];
            AppHelper.store('token', res.token);
            AppHelper.store('userInfo', res.data);
            this.userId(user_id);
          }
        },
        err => {
          console.log('error:', err.error);
          if (err.error.code === 404) {
            this.message = err.error.message;
          } else {
            this.message = err.error.message;
          }
        });
  }

  userId(user_id) {
    user_id = this.userInformation._id;
    this.navCtrl.navigateForward(['tabs/home/', user_id]);
  }






}
