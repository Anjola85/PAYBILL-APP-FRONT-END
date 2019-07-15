import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-service.service';
import { NavController } from '@ionic/angular';
import { NgForm, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppHelper } from '../helper/app-helper';
import { UpdateProfile } from 'src/app/model/userProfile';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  updateProfile: UpdateProfile = new UpdateProfile();
  userInfo;
  user_id;
  message;
  user_data;
  user_information;
  firstname: any;
  lastname: any;
  username: any;
  email: any;
  gender: any;
  dob: any;
  phoneNumber: any;

  constructor(private appService: AppService, private navCtrl: NavController, formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userInfo = AppHelper.retrieve('userInfo');
    this.user_id = this.userInfo._id;

    this.appService.get('/api/user/' + this.user_id).subscribe(res => {
      console.log('response:', res);
      if (res) {
        this.user_information = res['data'];
        console.log('user information:', this.user_information);
        this.firstname = this.user_information.firstname;
        this.lastname = this.user_information.lastname;
        this.username = this.user_information.username;
        this.email = this.user_information.email;
        this.gender = this.user_information.gender;
        this.dob = this.user_information.dob;
        this.phoneNumber = this.user_information.phoneNumber;
      }
    },
    err => {
      console.log('error:', err);
    });
  }

  doChange(changeProfile: NgForm) {
    this.appService.put('/api/user/' + this.user_id, this.updateProfile).subscribe(res => {
      console.log('response:', res);
      if (res.status === true) {
        this.message = res.message;
        this.user_data = res['data'];
        this.router.navigate(['/tabs/user-profile']);
      }
    },
    err => {
      console.log('error:', err);
    });
  }
}
