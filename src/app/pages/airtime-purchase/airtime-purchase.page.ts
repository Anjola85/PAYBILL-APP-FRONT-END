import { Component, OnInit } from '@angular/core';
import { AppHelper } from '../helper/app-helper';
import { AppService } from 'src/app/services/app-service.service';
import {NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-airtime-purchase',
  templateUrl: './airtime-purchase.page.html',
  styleUrls: ['./airtime-purchase.page.scss'],
})
export class AirtimePurchasePage implements OnInit {
  data;
  message;
  userInfo;
  phoneNumber;
  numBer = 500;
  firstname;
  lastname;
  firstnameInitial;
  lastnameInitial;

  constructor(private appService: AppService, private nativePageTransitions: NativePageTransitions, private navCtrl: NavController) { }

  ngOnInit() {
    this.userInfo = AppHelper.retrieve('userInfo');
    this.phoneNumber = this.userInfo.phoneNumber;
    this.firstname = this.userInfo.firstname;
    this.lastname = this.userInfo.lastname;
    this.firstnameInitial = this.firstname.charAt(0);
    this.lastnameInitial = this.lastname.charAt(0);

    this.appService.get('/api/billers?types=mobile_network').subscribe(res => {
      console.log('res:', res);
      if (res.status === true) {
        this.message = res.message;
        console.log('successMessage:', this.message);
        this.data = res['data'];
        for (let i = 0; i < this.data.length; i++) {
          console.log(`Number of mobile networks ${i}`, this.data[i]);
        }
      }
      if (res.status.false === false) {
        this.message = res.message;
        console.log('errorMessage:', this.message);
      }
    });
  }

  goBack() {
    if (this.navCtrl.back) {
      const options: NativeTransitionOptions = {
        direction: 'down',
        duration: 500,
        slowdownfactor: -1,
        slidePixels: 20,
      };
      this.nativePageTransitions.slide(options);
      this.navCtrl.pop();
    } else {
      const options: NativeTransitionOptions = {
        duration: 700
      };
      this.nativePageTransitions.fade(options);
      this.navCtrl.navigateBack('tabs/home');
    }
  }

   increaseValue() {
    let value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }

   decreaseValue() {
    let value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }

}
