import { Component, OnInit } from '@angular/core';
import {ProfilDeSortieService} from '../../../Services/profil-de-sortie.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-profil-de-sortie',
  templateUrl: './list-profil-de-sortie.component.html',
  styleUrls: ['./list-profil-de-sortie.component.css']
})
export class ListProfilDeSortieComponent implements OnInit {

  page: number | undefined = 1;
  totalProfilsSortie: number | undefined;
  libelle = '';
  isEdit: boolean | undefined;
  profilSorties: any = [] ;
  search: string;
  profilSearched: any;

  constructor(private profildeSortieService: ProfilDeSortieService) { }

  ngOnInit(): void {
      this.profildeSortieService.refresNeeded$.subscribe( () => {
        this.getAllprofildesortie();
      });
      this.getAllprofildesortie();
  }

  // tslint:disable-next-line:typedef
  public getAllprofildesortie() {
    this.profildeSortieService.getAllprofilDeSortiefromdb().subscribe(data => {
      this.profilSorties = data ;
      this.totalProfilsSortie = this.profilSorties.length;
      // tslint:disable-next-line:no-shadowed-variable
      this.profilSorties.forEach( (element: { isEdit: boolean; }) => {
          element.isEdit = false;
      });
      // console.log(this.profilSorties) ;
    });
  }
  // tslint:disable-next-line:typedef
  deleteProfilSortie(id: number) {
        console.log(id) ;
        if (confirm('Are you sure that you want do this action')) {
         this.profildeSortieService.deleteprofildeSortieondb(id).subscribe( data => {
           alert('this profil deleted with success');
         });
     }
  }

  // tslint:disable-next-line:typedef
  AddProfSortie(libelleps: NgForm) {
    // console.log(libelleps.value) ;
    this.profildeSortieService.postprofildeSortieondb(libelleps.value).subscribe(libelle => {
        alert('profil added');
        libelleps.reset(''); // reset value way2
    });
  }

  // tslint:disable-next-line:typedef
  wantEdit(data: any) {
      data.isEdit = true ;
  }
  // tslint:disable-next-line:typedef
  close(data: any) {
     data.isEdit = false ;
  }

  // tslint:disable-next-line:typedef
  EditProfilSortie(data: any) {
    // console.log(data.libelle) ;
    // console.log(data.id);
    this.profildeSortieService.putProfildeSortieonDb(data.id, data.libelle).subscribe(() => {
            alert('Profil updated');
    });
  }

//  search profil de sortie
  ToSearch() {
    //no search
    if (this.search == "") {
      this.ngOnInit();
    } else {
      // if research
      this.profildeSortieService.getAllprofilDeSortiefromdb().subscribe( data => {
        this.profilSearched = data;

        this.profilSorties = Object.values(this.profilSearched).filter( res => {
          return res.libelle.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
        });
      });
    }
  }
}
