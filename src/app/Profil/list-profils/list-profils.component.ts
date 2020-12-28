import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-profils',
  templateUrl: './list-profils.component.html',
  styleUrls: ['./list-profils.component.css']
})
export class ListProfilsComponent implements OnInit {

  profils = ['ADMIN','APPRENANT','CM','FORMATEUR'] ;

  constructor() { }

  ngOnInit(): void {
  }

}
