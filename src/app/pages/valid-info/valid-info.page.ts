import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

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

  constructor(private appService: AppService, private navCtrl: NavController, private router: Router) { }

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

  validateUser () {
      this.appService.get('/api/userInfo?transaction_id=' + this.inputValue).subscribe(res => {
      console.log('res:', res);
      if (res.status === true) {
        this.information = res['data'];
        this.successMessage = res.message;
        console.log(this.successMessage);
        console.log(this.information);
        this.navCtrl.navigateForward('packages/:id');
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
}
