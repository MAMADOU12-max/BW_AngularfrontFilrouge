import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-promotion',
  templateUrl: './list-promotion.component.html',
  styleUrls: ['./list-promotion.component.css']
})
export class ListPromotionComponent implements OnInit {

  promos = [1,2,3,4,5,6] ;
  constructor() { }

  ngOnInit(): void {
  }

}
