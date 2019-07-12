import { Component, OnInit } from '@angular/core';
import {NgForm, FormBuilder} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AppService } from 'src/app/services/app-service.service';
import { AppHelper } from '../helper/app-helper';
import {ChangePassword} from '../../model/changePassword';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  changePassword: ChangePassword = new ChangePassword();
  currentPassword;
  newPassword;
  confirmPassword;
  userInfo;
  user_id: any;
  user_data;
  message;
  form;

  constructor(private appService: AppService, private navCtrl: NavController, formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userInfo = AppHelper.retrieve('userInfo');
    this.user_id = this.userInfo._id;
    console.log('userID:', this.user_id);
  }

  doChange(changePassword: NgForm) {
    this.appService.post('/api/user/changePassword/' + this.user_id, this.changePassword).subscribe(res => {
      console.log('response:', res);
      if (res.status === true) {
        this.message = res.message;
        this.user_data = res['data'];
        this.form = document.getElementsByName('passwordChange')[0];
        this.form.submit();
        this.form.reset();
      }
    },
    err => {
      console.log('error:', err);
    });
  }



}
