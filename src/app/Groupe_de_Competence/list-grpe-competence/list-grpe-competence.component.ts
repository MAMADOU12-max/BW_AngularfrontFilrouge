import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-grpe-competence',
  templateUrl: './list-grpe-competence.component.html',
  styleUrls: ['./list-grpe-competence.component.css']
})
export class ListGrpeCompetenceComponent implements OnInit {

  grpecompetences = [1,2,3,4,5,6] ;

  constructor() { }

  ngOnInit(): void {
  }

}
