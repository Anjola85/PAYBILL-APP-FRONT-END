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
    this.firstname = this.userInfo.firstname;
    this.lastname = this.userInfo.lastname;
    this.firstnameInitial = this.firstname.charAt(0);
    this.lastnameInitial = this.lastname.charAt(0);
  }

}

export default UserProfilePage;
