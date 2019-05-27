import {Component, OnInit} from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {regUser} from '../../model/registerM';
import {AppService} from '../../services/app-service.service';
import {NgForm} from '@angular/forms';
// @ts-ignore
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    register: regUser = new regUser();
    loading = false;
    successMessage;
    errorMessage;

    constructor(private appService: AppService, private navCtrl: NavController) {
    }

    ngOnInit() {

    }

    doregisterUser(reg: NgForm) {
        if (!this.doValidation()) {
            return;
        }
        this.loading = true;
        console.log('register', this.register);
        this.appService.post('/api/register', this.register)
            .subscribe(res => {
                this.loading = false;
                if (res.status === true) {
                    reg.reset();
                    console.log('this is register response', res);
                    this.successMessage = res.message;
                    this.navCtrl.navigateForward('login');
                    // window.location.href = 'home';
                }
            });

    }

    doValidation(): boolean {
        if (this.register.firstName === undefined || this.register.firstName === null || this.register.firstName === '') {
            this.errorMessage = 'firstname field cant be empty';
            return false;
        }
        if (this.register.lastName === undefined || this.register.lastName === null || this.register.lastName === '') {
            this.errorMessage = 'lastname field cant be empty ';
            return false;
        }

        if (this.register.email === undefined || this.register.email === null || this.register.email === '') {
            this.errorMessage = 'email field cant be empty ';
            return false;
        }

        if (this.register.username === undefined || this.register.username === null || this.register.username === '') {
            this.errorMessage = 'username field cant be empty ';
            return false;
        }

        if (this.register.phoneNumber === undefined || this.register.phoneNumber === null) {
            this.errorMessage = 'You need to put in your mobile number';
        }

        if (this.register.confirm_password !== this.register.password) {
            this.errorMessage = 'passwords don\t match';
        }

        if (this.register.password === undefined || this.register.password === null || this.register.password === '') {
            this.errorMessage = 'password field cant be empty ';
            return false;
        } else {
            return true;
        }
    }


}
