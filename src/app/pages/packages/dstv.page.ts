import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dstv',
  templateUrl: './dstv.page.html',
  styleUrls: ['./dstv.page.scss'],
})
export class DstvPage implements OnInit {

  biller: any;
  id: any;


  constructor(private appService: AppService,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log('params:', params['id']);
      this.id = params['id'];
    });
    this.appService.get('/api/billers/' + this.id).subscribe(res => {
      console.log('res:', res);
      if (res) {
        this.biller = res['data'];
      }
    }, err => {
      console.log('err:', err);
    });
  }

  onClickPackage(amount, id, biller_name, name) {
    console.log('package amount:', amount);
    console.log('package id:', id);
    console.log('package name:', name);
    this.router.navigate(['payment-gateway/', amount, id, biller_name, name]);
  }



}
