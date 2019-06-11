import {AuthService} from '../../services/auth.service';
import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {ToastController} from '@ionic/angular';
import {Router, ActivatedRoute} from '@angular/router';
import { AppService } from 'src/app/services/app-service.service';
// import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    data = '';
    billers: any;

    // passing IDs
    user_id: any;

    // @ts-ignore
    constructor(private storage: Storage, private router: Router, private appService: AppService, private route: ActivatedRoute) {
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
    }


    go() {
        this.router.navigateByUrl('https://www.vtpass.com/');
        window.open('https://www.vtpass.com/', '_self');
    }


    onClickBiller(biller_id, user_id) {
        user_id = this.user_id;
        this.router.navigate(['/valid-info/', user_id, biller_id]);
    }

    doo() {
        window.location.href = 'https://www.vtpass.com';
    }

    // paymentDone(event) {
    //     console.log('event:', event);
    // }

    // paymentCancel() {
    //     console.log('close payment');
    // }
}

export default HomePage;
