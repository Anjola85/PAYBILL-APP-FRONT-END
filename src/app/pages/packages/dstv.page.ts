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

  packages: any;

  package_id: any;
  // passing ids
  user_id: any;
  biller_id: any;

  constructor(private appService: AppService,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.user_id = params['user_id'];
      this.biller_id = params['biller_id'];
    });

    this.appService.get('/api/packages?biller_id=5cecf392fc675754d777a903').subscribe(res => {
      console.log('res:', res);
      if (res.status === true) {
        this.packages = res['data'];
        console.log(this.packages);
      }
    }, err => {
      console.log('err:', err);
    });
  }


  onClickPackage(package_name, package_amount, user_id, biller_id, id) {
    console.log('user_id:', user_id);
    console.log('biller_id:', biller_id);
    console.log('package id:', id);
    this.router.navigate(['payment-gateway/', package_name, package_amount, user_id, biller_id, id]);
  }



}
