import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-swift-topup',
  templateUrl: './swift-topup.page.html',
  styleUrls: ['./swift-topup.page.scss'],
})
export class SwiftTopupPage implements OnInit {

  user_id: any;
  internet_id: any;
  internet_image: any;
  internet_name: any;
  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.user_id = params['user_id'];
      this.internet_id = params['internet_id'];
      this.internet_image = params['internet_image'];
      this.internet_name = params['internet_name'];
      // console.log('Biller_image:', this.internet_image);
      // console.log('Internet Name:', this.internet_name);
    });
  }

}
