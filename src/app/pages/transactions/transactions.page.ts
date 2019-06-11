import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-service.service';
import {RegTran} from 'src/app/model/makeTransaction';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  transaction: RegTran = new RegTran();

  // passing IDs
  // user_id: any;
  // biller_id: any;
  // id: any;

    // tslint:disable-next-line:max-line-length
  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   this.user_id = params['user_id'];
    //   this.biller_id = params['biller_id'];
    //   this.id = params['id'];
    // });
  }


}

export default TransactionsPage;
