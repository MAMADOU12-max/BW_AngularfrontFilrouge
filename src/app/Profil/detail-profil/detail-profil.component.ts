import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../../../Services/profil.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-profil',
  templateUrl: './detail-profil.component.html',
  styleUrls: ['./detail-profil.component.css']
})
export class DetailProfilComponent implements OnInit {

  profils: any = [];
  constructor(private profilService: ProfilService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (p) => {

      const id = this.activatedRoute.snapshot.params.id ;
      console.log(id) ;
     // @ts-ignore
      this.profilService.getDetailProfilfromdb(id).subscribe( data => {
          console.log(data) ;
          this.profils = data;
        });
    });
  }

}
