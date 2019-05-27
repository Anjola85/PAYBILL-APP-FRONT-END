import { Component, OnInit } from '@angular/core';
import { AppHelper } from '../helper/app-helper';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  firstname;
  lastname;
  userInfo;
  firstnameInitial;
  lastnameInitial;
  constructor() { }

  ngOnInit() {
    this.userInfo = AppHelper.retrieve('userInfo');
    this.firstname = this.userInfo.firstName;
    this.lastname = this.userInfo.lastName;
    this.firstnameInitial = this.firstname.charAt(0);
    this.lastnameInitial = this.lastname.charAt(0);
    console.log('firstnameInitial:', this.firstnameInitial);
  }

}

export default UserProfilePage;
