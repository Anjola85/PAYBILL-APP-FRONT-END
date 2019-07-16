import { Component, OnInit } from '@angular/core';
import { AppHelper } from '../helper/app-helper';
import { AppService } from 'src/app/services/app-service.service';
import {NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';



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
  numBer = 100;
  firstname;
  lastname;
  firstnameInitial;
  lastnameInitial;
  network_id;
  transactionObj: any = {};
  successMessage;
  buttonActive: boolean;


      // tslint:disable-next-line:max-line-length
  constructor(private appService: AppService, private nativePageTransitions: NativePageTransitions, private navCtrl: NavController, private router: Router, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

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
          // console.log(`Biller name: ${this.data[i].biller_name}, Biller ID: ${this.data[i]._id}`);
        }
      }
      if (res.status.false === false) {
        this.message = res.message;
        console.log('errorMessage:', this.message);
      }
    });
  }



  makePayment(network_id, biller_name) {
    // console.log('Phone Number:', this.phoneNumber);
    // console.log('network id:', network_id);
    // console.log('biller_name:', biller_name);
    const value = parseInt((<HTMLInputElement>document.getElementById('number')).value, 10);
    // console.log('amount:', value);
    // console.log('Transaction reference:', this.makeTransactionReference(10));
    this.transactionObj = {
      user_id: this.userInfo._id,
      network_id: network_id,
      phone_number: this.phoneNumber,
      amount: value,
      transaction_reference: this.makeTransactionReference(10)
    };
    console.log('transaction obj:', this.transactionObj);
    this.appService.post('/api/airtimePurchase', this.transactionObj).subscribe(res => {
      console.log('response:', res);
      if (res.status === true) {
        this.successMessage = res.message;
        console.log('Successful:', this.successMessage);
      }
    }, error => {
      console.log('error:', error);
    });
  }


   increaseValue() {
    let value = parseInt((<HTMLInputElement>document.getElementById('number')).value, 10);
    value = isNaN(value) ? 0 : value;
    value += 100;
    (<HTMLInputElement>document.getElementById('number')).value = value.toFixed();
  }

   decreaseValue() {
    let value = parseInt((<HTMLInputElement>document.getElementById('number')).value, 10);
      value = isNaN(value) ? 0 : value;
      if ( value >= 100) {
        value -= 100;
      }
      (<HTMLInputElement>document.getElementById('number')).value = value.toFixed();
  }

  makeTransactionReference(length) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation of payment',
      subHeader: 'Recipient successfully credited!',
      buttons: ['Dismiss']
    });
    await alert.present();
  }








}
