import {Component, Input, OnInit} from '@angular/core';
import {PromotionService} from '../../../../Services/promotion.service';

@Component({
  selector: 'app-item-promotion',
  templateUrl: './item-promotion.component.html',
  styleUrls: ['./item-promotion.component.css']
})
export class ItemPromotionComponent implements OnInit {

  @Input() itemPromo: any ;
  constructor(private promotionService: PromotionService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  deletePromotion(id: number) {
    if (confirm('Are you sure you want to delete this?')) {
       this.promotionService.deletePromofromdb(id).subscribe( data => {
           alert('It\'s deleted with success!');
       });
    }
  }
}
