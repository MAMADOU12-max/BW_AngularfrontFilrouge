import { Component, OnInit } from '@angular/core';
import {ProfilService} from "../../../Services/profil.service";

@Component({
  selector: 'app-list-profil-de-sortie',
  templateUrl: './list-profil-de-sortie.component.html',
  styleUrls: ['./list-profil-de-sortie.component.css']
})
export class ListProfilDeSortieComponent implements OnInit {

  constructor(private profilService:ProfilService) { }

  ngOnInit(): void {

  }

}
