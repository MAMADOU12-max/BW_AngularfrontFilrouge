import { Component, OnInit } from '@angular/core';
import {PromotionService} from '../../../Services/promotion.service';

@Component({
  selector: 'app-list-promotion',
  templateUrl: './list-promotion.component.html',
  styleUrls: ['./list-promotion.component.css']
})
export class ListPromotionComponent implements OnInit {

  pagebegin = 1;
  allPromo: any;
  totalpromo: number | undefined;
  search: string;
  searchPromo: any;

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

  ToSearch(){
    //no search
    if (this.search == "") {
      this.ngOnInit();
    } else {
      // if research
      this.promotionService.getAllpromofromdb().subscribe( data => {
        this.searchPromo = data;

        this.allPromo = Object.values(this.searchPromo).filter( res => {
            return res.libelle.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
        });
      });
    }
  }

}
