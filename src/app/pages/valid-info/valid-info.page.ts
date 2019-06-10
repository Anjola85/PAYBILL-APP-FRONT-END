import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-valid-info',
  templateUrl: './valid-info.page.html',
  styleUrls: ['./valid-info.page.scss'],
})
export class ValidInfoPage implements OnInit {
  inputValue: String = '';
  information: any;
  successMessage;
  errorMessage;

    // tslint:disable-next-line:max-line-length
  constructor(private appService: AppService, private navCtrl: NavController, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit(): void {
    // this.appService.get('/api/userInfo?transaction_id=' + this.inputValue).subscribe(res => {
    //   console.log('res:', res);
    //   if (res) {
    //     this.information = res['data'];
    //     console.log(this.information);
    //   }
    // }, err => {
    //   console.log('err:', err);
    // });
  }

  validateUser (id) {
      this.appService.get('/api/userInfo?transaction_id=' + this.inputValue).subscribe(res => {
      console.log('res:', res);
      if (res.status === true) {
        this.information = res['data'];
        this.successMessage = res.message;
        console.log(this.successMessage);
        console.log(this.information);
        this.presentPrompt(id);
      }
      if (res.code === 404) {
        this.errorMessage = res.message;
        console.log(this.errorMessage);
      }
      if (res.code === 400) {
        this.errorMessage = res.message;
        console.log(this.errorMessage);
      }
      });
    }


  async presentPrompt(id) {
    const alert = await this.alertCtrl.create({
      header: 'User Information',
      inputs: [
        {
          name: 'firstname',
          placeholder: this.information.user.firstname
        },
        {
          name: 'lastname',
          placeholder: this.information.user.lastname
        },
        {
          name: 'usersPhoneNumber',
          placeholder: this.information.user.phoneNumber
        },
        {
          name: 'emailAddress',
          placeholder: this.information.user.email
        },
        {
          name: 'SmartcardNumber',
          placeholder: this.information.transaction_id
        }
      ],
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel',
          handler: data => {
            console.log('Dismissed information');
          }
        }
      ]
    });
    await alert.present();
    this.navCtrl.navigateForward('packages/', id);
  }

}
