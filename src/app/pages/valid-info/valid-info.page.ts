import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-valid-info',
  templateUrl: './valid-info.page.html',
  styleUrls: ['./valid-info.page.scss'],
})
export class ValidInfoPage implements OnInit {
  isHidden: boolean;
  inputValue: String = '';
  user_information: any;
  errorMessage;
  message;

  // passing IDs
  user_id: any;
  biller_id: any;
  package_name: any;
  package_amount: any;
  package_id: any;
  package_image: any;
  firstName;
  lastName;


    // tslint:disable-next-line:max-line-length
  constructor(private appService: AppService, private navCtrl: NavController, private router: Router, private alertCtrl: AlertController, private route: ActivatedRoute, public toastController: ToastController) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log('user_id:', params['user_id']);
      this.user_id = params['user_id'];
      console.log('biller_id:', params['biller_id']);
      this.biller_id = params['biller_id'];
      console.log('package_name:', params['package_name']);
      this.package_name = params['package_name'];
      console.log('package_amount:', params['package_amount']);
      this.package_amount = params['package_amount'];
      console.log('package_id:', params['package_id']);
      this.package_id = params['package_id'];
      console.log('package_image:', params['package_image']);
      this.package_image = params['package_image'];
    });


  }


  validateUser () {
      // tslint:disable-next-line:max-line-length
      this.validateInput();
      this.appService.get('/api/userInfo?transaction_id=' + this.inputValue).subscribe(res => {
      console.log('res:', res);
      if (res.status === true) {
        this.user_information = res['data'];
        console.log('user information:', this.user_information);
        // console.log('firstname:', this.information.user.firstname);
        this.firstName = this.user_information.user.firstname;
        // console.log('lastname:', this.information.user.lastname);
        this.lastName = this.user_information.user.lastname;
        // console.log('user information:', this.user_information);
        // console.log(this.successMessage);
      }
      if (res.code === 404) {
        console.log(this.errorMessage);
      }
      if (res.code === 400) {
        console.log(this.errorMessage);
      }
      });
    }

  validateInput(): boolean {
    if (this.inputValue === undefined || this.inputValue === '') {
      this.message = 'Field cannot be left empty!';
      return false;
    } else {
      this.isHidden = true;
      this.message = 'Validation successful!';
      setTimeout(() => {
        // tslint:disable-next-line:max-line-length
        this.router.navigate(['payment-gateway/', this.user_id, this.biller_id, this.package_id, this.package_name, this.package_amount, this.firstName, this.lastName]);
    }, 2000);
    return true;
    }
  }

  // async presentToast() {
  //   const toast = await this.toastController.create({
  //     message: this.message,
  //     duration: 2000
  //   });
  //   toast.present();
  // }


}
