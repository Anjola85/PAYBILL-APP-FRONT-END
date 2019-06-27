import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/services/app-service.service';
import { RegCard } from 'src/app/model/regCardM';
import {RegTran} from 'src/app/model/makeTransaction';
import { NavController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AppHelper } from '../helper/app-helper';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.page.html',
  styleUrls: ['./payment-gateway.page.scss'],
})
export class PaymentGatewayPage implements OnInit {

  card: any;

  register: RegCard = new RegCard();
  transaction: RegTran = new RegTran();
  // register: any = {card_number: ''};
  loading = false;
  successMessage;
  errorMessage;
  transactionObj: any = {};

  card_id: any;
  // passing params
  user_id: any;
  biller_id: any;
  package_id: any;
  package_name: any;
  package_amount: any;
  firstName;
  lastName;
  // end

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private appService: AppService, private navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log('user_id:', params['user_id']);
      this.user_id = params['user_id'];
      console.log('biller_id:', params['biller_id']);
      this.biller_id = params['biller_id'];
      console.log('package_id:', params['package_id']);
      this.package_id = params['package_id'];
      console.log('package_name:', params['package_name']);
      this.package_name = params['package_name'];
      console.log('package_amount:', params['package_amount']);
      this.package_amount = params['package_amount'];
      console.log('firstName:', params['firstName']);
      this.firstName = params['firstName'];
      console.log('lastName:', params['lastName']);
      this.lastName = params['lastName'];
    });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation of payment',
      subHeader: 'PAYMENT SUCCESSFUL',
      buttons: ['Dismiss']
    });
    await alert.present();
  }



  validateCard(reg: NgForm) {
    if (!this.doValidation()) {
      return;
    }
    this.loading = true;
    const userInfo = AppHelper.retrieve('userInfo');
    this.register.user = userInfo._id;
    console.log('register', this.register);
    this.appService.post('/api/cardValidation', this.register).subscribe(res => {
      console.log('response', res);
      this.loading = false;
      if (res.status === true) {
        this.successMessage = res.message;
        this.card = res['data'];
        this.card_id = this.card._id;
        this.makeTransaction();
        console.log('this is a card register response', res);
        console.log(this.card._id);
      }
      if (res.code === 404) {
        this.errorMessage = res.message;
      }
    }, error => {
      console.log('error:', error);
    });
  }

  makeTransaction() {
    this.transactionObj = {
      card: this.card_id,
      package: this.package_id,
      user_id: this.user_id,
      transaction_reference: this.makeid(5)
    };
    console.log('transaction obj:', this.transactionObj);
    this.appService.post('/api/createTransaction', this.transactionObj).subscribe(res => {
      console.log('response:', res);
      if (res.status === true) {
        this.successMessage = res.message;
        this.presentAlert();
        this.navCtrl.navigateForward(['tabs/transactions/', this.user_id, this.package_id, this.card_id]);
      }
      if (res.code === 404) {
        this.errorMessage = res.message;
      }
    }, error => {
      console.log('error:', error);
    });
  }

  doValidation(): boolean {
    if (this.register.card_number === undefined || this.register.card_number === '') {
      this.errorMessage = 'Card number can\'t be empty';
      return false;
    }
    if (this.register.cvv === undefined || this.register.cvv === null) {
      this.errorMessage = 'cvv field can\'t be empty';
      return false;
    }
    if (this.register.expiry === undefined || this.register.expiry === '') {
      this.errorMessage = 'Expiry field can\'t be empty';
      return false;
    }
    if (this.register.pin === undefined || this.register.pin === '') {
      this.errorMessage = 'Pin field cannot be empty!';
      return false;
    }
    return true;
  }

   makeid(length) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // passIDs(user_id, biller_id, id) {
  // }

  // creditDetails(card_number, amount, name, type, biller_name) {
  //   console.log('card number:', card_number);
  //   console.log('package amount:', amount);
  //   console.log('package name:', name);
  //   console.log('card type:', type);
  //   console.log('biller_name:', biller_name);
  //   this.router.navigate(['transactions/', card_number, amount, name, type, biller_name]);
  // }

    // doregisterCard(reg: NgForm) {
  //   if (!this.doValidation()) {
  //     return;
  //   }
  //   this.loading = true;
  //   const userInfo = AppHelper.retrieve('userInfo');
  //   this.register.user = userInfo._id;
  //   console.log('register', this.register);
  //   this.appService.post('/api/createCard', this.register).subscribe(res => {
  //     this.loading = false;
  //     if (res.status === true) {
  //       reg.reset();
  //       this.presentAlert();
  //       console.log('this is a card register response', res);
  //       this.successMessage = res.message;
  //       this.navCtrl.navigateForward('tabs/transactions');
  //     }
  //   });
  // }
}
