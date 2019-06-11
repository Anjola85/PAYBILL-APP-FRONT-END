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

  // passing IDs
  user_id: any;
  biller_id: any;

    // tslint:disable-next-line:max-line-length
  constructor(private appService: AppService, private navCtrl: NavController, private router: Router, private alertCtrl: AlertController, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log('user_id:', params['user_id']);
      this.user_id = params['user_id'];
      console.log('biller_id:', params['biller_id']);
      this.biller_id = params['biller_id'];
    });
  }

  validateUser (user_id, biller_id) {
      this.appService.get('/api/userInfo?transaction_id=' + this.inputValue).subscribe(res => {
      console.log('res:', res);
      if (res.status === true) {
        this.information = res['data'];
        this.successMessage = res.message;
        console.log(this.successMessage);
        console.log(this.information);
        this.presentPrompt();
        this.passingIDs(user_id, biller_id);
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


  async presentPrompt() {
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
  }

  passingIDs (user_id, biller_id) {
    this.router.navigate(['packages/', user_id, biller_id]);
  }

}
