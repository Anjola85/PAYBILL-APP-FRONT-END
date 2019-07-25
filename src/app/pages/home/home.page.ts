import {AuthService} from '../../services/auth.service';
import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {ToastController, NavController} from '@ionic/angular';
import {Router, ActivatedRoute} from '@angular/router';
import { AppService } from 'src/app/services/app-service.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
// import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    data = '';
    billers: any;
    internet: any;
    utility: any;
    // passing IDs
    user_id: any;

    // tslint:disable-next-line:max-line-length
    constructor(private storage: Storage, private router: Router, private appService: AppService, private route: ActivatedRoute, private nativePageTransitions: NativePageTransitions, private navCtrl: NavController) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            console.log('user_id:', params['user_id']);
            this.user_id = params['user_id'];
        });

        this.appService.get('/api/billers?types=tv-bills').subscribe(res => {
            console.log('res:', res);
            if (res) {
              this.billers = res['data'];
            }
          }, err => {
            console.log('err:', err);
          });

        this.appService.get('/api/billers?types=internet').subscribe(res => {
          console.log('res:', res);
          if (res) {
            this.internet = res['data'];
          }
        }, err => {
          console.log('internetError:', err);
        });

        this.appService.get('/api/billers?types=utility').subscribe(res => {
          console.log('res:', res);
          if (res) {
            this.utility = res['data'];
          }
        }, err => {
          console.log('Utility error:', err);
        });


    }

    flipPage() {
        const options: NativeTransitionOptions = {
          direction: 'up',
          duration: 600
         };

        this.nativePageTransitions.flip(options);
        this.navCtrl.navigateForward('airtime-purchase');
      }


    // go() {
    //     this.router.navigateByUrl('https://www.vtpass.com/');
    //     window.open('https://www.vtpass.com/', '_self');
    // }


    onClickBiller(biller_id, user_id) {
        user_id = this.user_id;
        console.log('biller_id:', biller_id);
        this.router.navigate(['/packages/', user_id, biller_id]);
    }

    onClickNetwork(internet_id, internet_image, user_id, internet_name) {
      user_id = this.user_id;
      // console.log('image:', internet_image);
      this.router.navigate(['/swift-topup', user_id, internet_image, internet_id, internet_name]);
    }

    onClickUtility(biller_id, user_id, biller_name) {
      user_id = this.user_id;
      this.router.navigate(['/utility-packages', biller_id, user_id, biller_name]);
    }

    doo() {
        // window.location.href = 'https://www.vtpass.com';
        this.router.navigate(['airtime-purchase']);
    }


    // paymentDone(event) {
    //     console.log('event:', event);
    // }

    // paymentCancel() {
    //     console.log('close payment');
    // }
}

export default HomePage;
