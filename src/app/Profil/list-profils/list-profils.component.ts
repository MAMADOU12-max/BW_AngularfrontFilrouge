import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../../../Services/profil.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-list-profils',
  templateUrl: './list-profils.component.html',
  styleUrls: ['./list-profils.component.css']
})
export class ListProfilsComponent implements OnInit {


  page: number | any = 1;
  totalProfils: number | any;
  profils: any = [];
  libelle = '';
  formGroup: FormGroup | any;

  constructor(private profilService: ProfilService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    // refresh table
    this.profilService.refresNeeded$.subscribe(() => {
          this.getAllProfil();
    });
    this.getAllProfil() ;


    this.formGroup = this.formBuilder.group({
      libelle: ['', [Validators.required]]
    });

  }
  // tslint:disable-next-line:typedef
  addingProfil() {
    // console.log(this.libelle);
    this.profilService.postProfil(this.libelle).subscribe(data => {
      alert('profil added with success');
    });
  }

  // delete profil
  // tslint:disable-next-line:typedef
   deletingprofil(id: number) {
      if (confirm('Are you sure')) {
        // console.log(id);
        this.profilService.deleteProfil(id).subscribe(data => {
          alert('profil deleted with success');
        });
      }
  }

  // get All profil
  // tslint:disable-next-line:typedef
  public getAllProfil() {
    this.profilService.getallprofil().subscribe(data => {
      this.profils = data ;
      this.totalProfils = this.profils.length ;

    });
  }


}




