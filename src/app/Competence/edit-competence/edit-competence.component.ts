import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {GroupeCompetenceService} from "../../../Services/groupe-competence.service";
import {CompetencesService} from "../../../Services/competences.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-competence',
  templateUrl: './edit-competence.component.html',
  styleUrls: ['./edit-competence.component.css']
})
export class EditCompetenceComponent implements OnInit {

    grpeCompetenceindb: string | any;
    selectedOption: any;
    postedcompetence: FormGroup | any;
    id: number | any;
    nomCompetence: string | any;
    libelle: string | any;
    groupedAction: string | any;
    criteredEvaluation: string | any;

    niveau1: FormGroup | any;
    niveau2: FormGroup | any;
    niveau3: FormGroup | any;

    // Data recup to updated
    niveau1ToUpdated: any;  niveau2ToUpdated: any;  niveau3ToUpdated: any;
    idNiveau1ToUpdated: number | any;
    idNiveau2ToUpdated: number | any;
    idNiveau3ToUpdated: number | any;
    criteredEvaluation1ToUpdated: string | any;
    criteredEvaluation2ToUpdated: string | any;
    criteredEvaluation3ToUpdated: string | any;
    groupeDaction1ToUpdated: string | any;
    groupeDaction2ToUpdated: string | any;
    groupeDaction3ToUpdated: string | any;

    niveaux = new FormArray([]);
    niveauxTabValue: string[] = [];

    //error
    libelleError: boolean =false;
    descriptionError: boolean = false;

    CompetenceToUpdated: string | any;
    idCompetenceToUpdated: number | any;

    constructor(private router: Router, private grpCompetenceService: GroupeCompetenceService, private activated: ActivatedRoute ,
                private formBuilder: FormBuilder, private competenceService: CompetencesService) {
        this.selectedOption = 'selectDefault';

        this.idCompetenceToUpdated = +this.activated.snapshot.params.id ;
        // console.log(this.idCompetenceToUpdated);

        // Origin data to update
        this.competenceService.getCompetenceFromdbbyId(this.idCompetenceToUpdated).subscribe( data =>{
            this.CompetenceToUpdated = data;
            // console.log(this.CompetenceToUpdated);
            this.nomCompetence = this. CompetenceToUpdated.nomCompetence;
            this.libelle = this.CompetenceToUpdated.libelle;
            // console.log(this.nomCompetenceToUpdated, this.descriptionToUpdated);

            this.idNiveau1ToUpdated = this.CompetenceToUpdated.niveaux[0].id;
            this.niveau1ToUpdated = this.CompetenceToUpdated.niveaux[0].level;
            this.criteredEvaluation1ToUpdated = this.CompetenceToUpdated?.niveaux[0].criteredEvaluation;
            this.groupeDaction1ToUpdated = this.CompetenceToUpdated?.niveaux[0].groupedAction;

            this.idNiveau2ToUpdated = this.CompetenceToUpdated.niveaux[1].id;
            this.niveau2ToUpdated = this.CompetenceToUpdated.niveaux[1].level;
            this.criteredEvaluation2ToUpdated = this.CompetenceToUpdated?.niveaux[1].criteredEvaluation;
            this.groupeDaction2ToUpdated = this.CompetenceToUpdated?.niveaux[1].groupedAction;

            this.idNiveau3ToUpdated = this.CompetenceToUpdated.niveaux[2].id;
            this.niveau3ToUpdated = this.CompetenceToUpdated.niveaux[2].level;
            this.criteredEvaluation3ToUpdated = this.CompetenceToUpdated?.niveaux[2].criteredEvaluation;
            this.groupeDaction3ToUpdated = this.CompetenceToUpdated?.niveaux[2].groupedAction;


            this.niveau1 = this.formBuilder.group({
                id: [this.idNiveau1ToUpdated, [Validators.required]],
                level: ['Niveau1', [Validators.required]],
                groupedAction : [`${this.groupeDaction1ToUpdated}`, [Validators.required]],
                criteredEvaluation: [`${this.criteredEvaluation1ToUpdated}`, [Validators.required]]
            });
            this.niveau2 = this.formBuilder.group({
                id: [this.idNiveau2ToUpdated, [Validators.required]],
                level: ['Niveau2', [Validators.required]],
                groupedAction: [`${this.groupeDaction2ToUpdated}`, [Validators.required]],
                criteredEvaluation: [`${this.criteredEvaluation2ToUpdated}`, [Validators.required]],
            });
            this.niveau3 = this.formBuilder.group({
                id: [this.idNiveau3ToUpdated, [Validators.required]],
                level: ['Niveau3', [Validators.required]],
                groupedAction: [`${this.groupeDaction3ToUpdated}`, [Validators.required]],
                criteredEvaluation: [`${this.criteredEvaluation3ToUpdated}`, [Validators.required]],
            });

            this.NiveauxControls.controls.push(this.niveau1);
            this.NiveauxControls.controls.push(this.niveau2);
            this.NiveauxControls.controls.push(this.niveau3);
            //console.log(this.NiveauxControls);
        });

    }

    ngOnInit(): void {

        // Get grpeCompetence from db
        this.grpeCompetenceindb = this.grpCompetenceService.getAllGropuecompetencefromdb().subscribe(data => {
             this.grpeCompetenceindb = data;
            //console.log(this.grpeCompetenceindb);
        });

        // Validations
        this.postedcompetence = this.formBuilder.group({
            nomCompetence: ['', [Validators.required]],
            libelle: ['', [Validators.required]],
            niveaux: new FormArray([], Validators.required)
        });
        //console.log(this.idNiveau1ToUpdated, this.groupeDaction1ToUpdated);

    }

    // get Architecture different niveau
    get NiveauxControls(){
        return (this.postedcompetence.get('niveaux') as FormArray);
    }

    //get VAlue
    get NiveauValue(){
        return this.postedcompetence.controls.niveaux;
    }

    // tslint:disable-next-line:typedef
    editCompetence() {

        if (this.postedcompetence.controls.nomCompetence.invalid) {
            this.libelleError = true;
            return;
        } else if(this.postedcompetence.controls.libelle.invalid) {
            this.descriptionError = true;
            return;
        }
        if (this.niveau1.invalid || this.niveau2.invalid || this.niveau3.invalid) {
            Swal.fire(
              'Good!',
              'You must fill in all the fields of the 3 levels!',
              'error'
            )
            return;
        }
        this.niveauxTabValue.push(this.niveau1.value);
        this.niveauxTabValue.push(this.niveau2.value);
        this.niveauxTabValue.push(this.niveau3.value);
        this.NiveauValue.setValue(this.niveauxTabValue);
          // console.log(this.idCompetenceToUpdated);
       this.competenceService.editCompetence(this.idCompetenceToUpdated ,this.postedcompetence.value).subscribe(data =>{
            Swal.fire(
              'Good!',
              'Competence updated with success!',
              'success'
            )
           this.router.navigate(['/listCompetence']);
        });
    }

    // tslint:disable-next-line:typedef
    return() {
        this.router.navigate(['/listCompetence']);
    }

}
