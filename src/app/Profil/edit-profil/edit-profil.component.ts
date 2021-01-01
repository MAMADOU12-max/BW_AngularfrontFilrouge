import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProfilService} from '../../../Services/profil.service';
import {ProfilModal} from '../../../Modal/profilModal';
import {FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  profilRecup: any = [] ;
  editprofil: any = [] ;
  libelle = '' ;

  constructor(private activatedRoute: ActivatedRoute, private profilService: ProfilService) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(
        (p: Params) => {
          const recupid =  +this.activatedRoute.snapshot.params.id ;
          // console.log(recupid) ;
          this.profilRecup = this.profilService.getProfilById(recupid).subscribe( data => {
             this.editprofil = data ;
          }) ;
        }
      );
  }

  editingProfil(profilchange: NgForm) {
   const recupid =  +this.activatedRoute.snapshot.params.id ;
    // console.log(JSON.stringify(profilchange.value)) ;
    // console.log(profilchange.value['libelle']) ;
   this.profilRecup = this.profilService.editProfil(recupid, profilchange.value.libelle)
     .subscribe( edited => {
       // alert('profil updated') ;
    }) ;
  }
}
