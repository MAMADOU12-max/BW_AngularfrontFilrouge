import { Component, OnInit } from '@angular/core';
import {PromotionService} from '../../../Services/promotion.service';

@Component({
  selector: 'app-list-promotion',
  templateUrl: './list-promotion.component.html',
  styleUrls: ['./list-promotion.component.css']
})
export class ListPromotionComponent implements OnInit {

  // promos = [1, 2, 3, 4, 5, 6, 7, 8] ;
  pagebegin = 1;
  allPromo: any;
  totalpromo: number | undefined;
  constructor(private  promotionService: PromotionService) { }

  ngOnInit(): void {
    this.promotionService.getRefresh().subscribe(() => {
      this.getAllpromo();
    });
    this.getAllpromo();
  }

  // tslint:disable-next-line:typedef
  getAllpromo() {
    this.promotionService.getAllpromofromdb().subscribe(data => {
      // console.log(data);
      this.allPromo = data;
      this.totalpromo = this.allPromo.length;
    });
  }

}
