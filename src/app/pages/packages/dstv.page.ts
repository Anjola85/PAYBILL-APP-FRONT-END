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
  // id: any;
  // biller: any;


  constructor(private appService: AppService,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   console.log('params:', params['id']);
    //   this.id = params['id'];
    // });
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

  onClickPackage(amount, package_name) {
    console.log('package amount:', amount);
    console.log('package name:', package_name);
    this.router.navigate(['payment-gateway/', amount, package_name]);
  }



}
