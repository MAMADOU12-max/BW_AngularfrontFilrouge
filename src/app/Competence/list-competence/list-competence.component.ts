import { Component, OnInit } from '@angular/core';
import {CompetencesService} from '../../../Services/competences.service';
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-competence',
  templateUrl: './list-competence.component.html',
  styleUrls: ['./list-competence.component.css']
})
export class ListCompetenceComponent implements OnInit {

  competences: any = [];
  // fiels niveaux
  niveau1: any;  niveau2: any;  niveau3: any;
  criteredEvaluation1: any; groupeDaction1: any;
  criteredEvaluation2: any; groupeDaction2: any;
  criteredEvaluation3: any; groupeDaction3: any;

  selectedOption: any;
  competenceChoised: any;
  idSelected: number | undefined;
  libelle: any;
  constructor(private competencesService: CompetencesService, private router: Router) { }

  ngOnInit(): void {
       this.selectedOption = 'selectDefault';
       this.competencesService.refresNeeded$.subscribe(data => {
            this.getAllcompetence();
       });
      this.getAllcompetence();
  }

  // tslint:disable-next-line:typedef
  getAllcompetence() {
    this.competencesService.getCompetenceFromdb().subscribe(data => {
        this.competences = data ;
    });
  }

  // tslint:disable-next-line:typedef
  optionChoised(id: any) {
    // @ts-ignore
    if (id !== 'select a competence') {
      // console.log(id);
      this.competencesService.getCompetenceFromdbbyId(id).subscribe(competenceChoised => {
        this.competenceChoised = competenceChoised;
        // console.log(competenceChoised);
        this.idSelected = id;
        this.libelle = this.competenceChoised.libelle;

        this.niveau1 = this.competenceChoised.niveaux[0].level;
        this.criteredEvaluation1 = this.competenceChoised?.niveaux[0].criteredEvaluation;
        this.groupeDaction1 = this.competenceChoised?.niveaux[0].groupedAction;

        this.niveau2 = this.competenceChoised.niveaux[1].level;
        this.criteredEvaluation2 = this.competenceChoised?.niveaux[1].criteredEvaluation;
        this.groupeDaction2 = this.competenceChoised?.niveaux[1].groupedAction;

        this.niveau3 = this.competenceChoised.niveaux[2].level;
        this.criteredEvaluation3 = this.competenceChoised?.niveaux[2].criteredEvaluation;
        this.groupeDaction3 = this.competenceChoised?.niveaux[2].groupedAction;
      });
    }
  }

  deleteCompetence() {
      if (this.idSelected == undefined) {
          Swal.fire(
            'Bad Request!',
            'Select a competence before removing please!',
            'warning'
          )
        return;
      }
      const id = this.idSelected;
      Swal.fire({
        title: 'Are you sure?',
        text: "Are you sure that you remove this competence?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
            this.competencesService.deleteCompetenceOndb(id).subscribe( data => {
                Swal.fire(
                'Good',
                'Competence deleted with success',
                'success'
              )
            });
        }
      })

  }

  editCompetence() {
      if (this.idSelected == undefined) {
          Swal.fire(
            'Bad Request!',
            'Select competence to edit please!',
            'warning'
          )
          return;
      }
      this.router.navigate(['/editCompetence/'+this.idSelected])
  }

}
