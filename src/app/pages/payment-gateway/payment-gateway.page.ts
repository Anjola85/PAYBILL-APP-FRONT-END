import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/services/app-service.service';
import { RegCard } from 'src/app/model/regCardM';
import { NavController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AppHelper } from '../helper/app-helper';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.page.html',
  styleUrls: ['./payment-gateway.page.scss'],
})
export class PaymentGatewayPage implements OnInit {
  amount: any;
  id: any;
  biller_name: any;
  name: any;

  billers: any;

  register: RegCard = new RegCard();
  // register: any = {card_number: ''};
  loading = false;
  successMessage;
  errorMessage;

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private appService: AppService, private navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log('params:', params['amount']);
      console.log('params:', params['id']);
      console.log('params:', params['biller_name']);
      console.log('params:', params['name']);
      this.name = params['name'];
      this.biller_name = params['biller_name'];
      this.amount = params['amount'];
      this.id = params['id'];
    });

    // this.appService.get('/api/billers/' + this.id).subscribe(res => {
    //   console.log('res:', res);
    //   if (res) {
    //     this.billers = res['data'];
    //   }
    // }, err => {
    //   console.log('err:', err);
    // });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation of payment',
      subHeader: 'PAYMENT SUCCESSFUL',
      buttons: ['Dismiss']
    });
    await alert.present();
  }

  // doregisterCard(reg: NgForm) {
  //   if (!this.doValidation()) {
  //     return;
  //   }
  //   this.loading = true;
  //   const userInfo = AppHelper.retrieve('userInfo');
  //   this.register.address.push({
  //     city: this.register.city,
  //     street: this.register.street,
  //     state: this.register.state,
  //     postal: this.register.postal,
  //     country: this.register.country
  //   });
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

  // doValidation(): boolean {
  //   if (this.register.card_number === undefined || this.register.card_number === '') {
  //     this.errorMessage = 'Card number can\'t be empty';
  //     return false;
  //   }
  //   if (this.register.street === undefined || this.register.street === '') {
  //     this.errorMessage = 'Street field can\'t be empty';
  //     return false;
  //   }
  //   if (this.register.city === undefined || this.register.city === '') {
  //     this.errorMessage = 'City field can\'t be empty';
  //     return false;
  //   }
  //   if (this.register.state === undefined || this.register.state === '') {
  //     this.errorMessage = 'State field can\'t be empty';
  //     return false;
  //   }
  //   if (this.register.postal === undefined || this.register.postal === null) {
  //     this.errorMessage = 'Postal field can\'t be empty';
  //     return false;
  //   }
  //   if (this.register.country === undefined || this.register.country === '') {
  //     this.errorMessage = 'Country field can\'t be empty';
  //     return false;
  //   }
  //   if (this.register.cvv === undefined || this.register.cvv === null) {
  //     this.errorMessage = 'cvv field can\'t be empty';
  //     return false;
  //   }
  //   if (this.register.expiry === undefined || this.register.expiry === '') {
  //     this.errorMessage = 'Expiry field can\'t be empty';
  //     return false;
  //   }
  //   if (this.register.type === undefined || this.register.type === '') {
  //     this.errorMessage = 'Type field is required';
  //     return false;
  //   }
  //   if (this.register.pin !== this.register.confirm_pin) {
  //     this.errorMessage = 'Pin\'s don\'t match';
  //     return false;
  //   }
  //   if (this.register.pin === undefined || this.register.pin === null) {
  //     this.errorMessage = 'Pin needed!';
  //     return false;
  //   }
  //   return true;
  // }

  // creditDetails(card_number, amount, name, type, biller_name) {
  //   console.log('card number:', card_number);
  //   console.log('package amount:', amount);
  //   console.log('package name:', name);
  //   console.log('card type:', type);
  //   console.log('biller_name:', biller_name);
  //   this.router.navigate(['transactions/', card_number, amount, name, type, biller_name]);
  // }

}
