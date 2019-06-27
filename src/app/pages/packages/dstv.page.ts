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
  package_image: any;
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

    this.appService.get('/api/packages?biller_id=' + this.biller_id).subscribe(res => {
      console.log('res:', res);
      if (res.status === true) {
        this.packages = res['data'];
        console.log(this.packages);
        this.package_id = this.packages._id;
        this.package_image = this.packages.image;
      }
    }, err => {
      console.log('err:', err);
    });
  }


  onClickPackage(package_name, package_amount, user_id, biller_id, package_id, package_image) {
    // console.log('user_id:', user_id);
    // console.log('package_name:', package_name);
    // console.log('package_amount:', package_amount);
    // console.log('biller_id:', biller_id);
    // console.log('package_id:', package_id);
    // console.log('package_image:', package_image);
    this.router.navigate(['valid-info/', user_id, package_name, package_amount, biller_id, package_id, package_image]);
  }



}
