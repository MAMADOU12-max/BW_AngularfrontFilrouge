import { Component, OnInit } from '@angular/core';
import {GroupeCompetenceService} from '../../../Services/groupe-competence.service';

@Component({
  selector: 'app-list-grpe-competence',
  templateUrl: './list-grpe-competence.component.html',
  styleUrls: ['./list-grpe-competence.component.css']
})
export class ListGrpeCompetenceComponent implements OnInit {

  page = 1;
  totalGrpecompetences: number | undefined;
  grpeCompetences: any;
  search = '' ;
  grpeCompt: any;

  constructor(private groupecompetenceService: GroupeCompetenceService) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    this.groupecompetenceService.refreshNeeded$.subscribe(() => {
      this.getAllgrpeCompetence();
    });
    this.getAllgrpeCompetence();
  }

  ToSearch(){
    //no search
    if (this.search == "") {
      this.ngOnInit();
    } else {
      // if research
      this.groupecompetenceService.getAllGropuecompetencefromdb().subscribe( data => {
        this.grpeCompt = data;

        this.grpeCompetences = Object.values(this.grpeCompt).filter( (res: any) => {
          return res.libelle.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
        });
      });
    }
  }

  // tslint:disable-next-line:typedef
  getAllgrpeCompetence() {
      this.groupecompetenceService.getAllGropuecompetencefromdb().subscribe( data => {
        this.grpeCompetences = data;
        this.totalGrpecompetences = this.grpeCompetences.length ;
        // console.log(this.totalGrpecompetences);
      });
  }

}
