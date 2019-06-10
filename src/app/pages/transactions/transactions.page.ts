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

    // tslint:disable-next-line:max-line-length
  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  // displayTransactionHistory() {
  //   this.appService.get()
  // }

}

export default TransactionsPage;
