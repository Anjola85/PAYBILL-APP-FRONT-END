import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-service.service';
import {RegTran} from 'src/app/model/makeTransaction';
import { ActivatedRoute } from '@angular/router';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  transaction: RegTran = new RegTran();

  transaction_data;
  message;
  result;
  // passing IDs
  user_id: any;

    // tslint:disable-next-line:max-line-length
  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.user_id = params['user_id'];
      console.log('user_id', params['user_id']);
    });

    this.appService.get('/api/transactions?user_id=' + this.user_id).subscribe(res => {
      console.log('response:', res);
      if (res.status === true) {
        this.message = res.message;
        console.log('successMessage:', this.message);
        this.transaction_data = res['data'];
        // console.log('transaction_data:', this.transaction_data);
        // console.log('package_name:', this.transaction_data[0].package.package_name);
        for (let i = 0; i < this.transaction_data.length; i++) {
          console.log(`For transaction ${i}`, this.transaction_data[i]);
          console.log(`Total number of transactions made: ${i}`);
       }
      }
      if (res.code === 404) {
        console.log('errMessage:', res.message);
        this.message = res.message;
      }
      if (res.code === 400) {
        console.log('errMessage:', res.message);
        this.message = res.message;
      }
    });
  }



}

export default TransactionsPage;
