import { Component, OnInit } from '@angular/core';
import {ReferentielService} from "../../../Services/referentiel.service";

@Component({
  selector: 'app-list-referentiel',
  templateUrl: './list-referentiel.component.html',
  styleUrls: ['./list-referentiel.component.css']
})
export class ListReferentielComponent implements OnInit {

  search: string ;
  pagebegin = 1;
  totalReferentiels: number | undefined;
  referentiels: any = [] ;
  refs: any = [] ;

  constructor(private referentielService: ReferentielService) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    this.referentielService.refreshNeeded$.subscribe(() => {
      this.getAllReferentiel();
    });
    this.getAllReferentiel();
  }

  // tslint:disable-next-line:typedef
  getAllReferentiel() {
    this.referentielService.getAllReferentielfromdb().subscribe( data => {
      this.referentiels = data;
      this.totalReferentiels = this.referentiels.length ;
      // console.log(this.referentiels);
    });
  }

  ToSearch(){
    //no search
    if (this.search == "") {
        this.ngOnInit();
    } else {
      // if research
      this.referentielService.getAllReferentielfromdb().subscribe( data => {
        this.refs = data;

        this.referentiels = Object.values(this.refs).filter( res => {
            return res.libelle.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
          });
        });
    }
  }

}
