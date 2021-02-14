import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GroupeCompetenceService} from '../../../Services/groupe-competence.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompetencesService} from "../../../Services/competences.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {

  grpeCompetenceindb: string | any;
  selectedOption: any;
  postedcompetence: FormGroup | any;
  nomCompetence: string | any;
  libelle: string | any;
  groupedAction: string | any;
  criteredEvaluation: string | any;
  niveau1: FormGroup | any;
  niveau2: FormGroup | any;
  niveau3: FormGroup | any;
  niveaux = new FormArray([]);
  niveauxTabValue: string[] = [];

  //error
 libelleError: boolean =false;
 descriptionError: boolean = false;

  constructor(private router: Router, private grpCompetenceService: GroupeCompetenceService,
              private formBuilder: FormBuilder, private competenceService: CompetencesService) {
    this.selectedOption = 'selectDefault';
  }

  ngOnInit(): void {
      this.grpeCompetenceindb = this.grpCompetenceService.getAllGropuecompetencefromdb().subscribe(data => {
        this.grpeCompetenceindb = data;
        // console.log(this.grpeCompetenceindb);
      });

      this.postedcompetence = this.formBuilder.group({
          nomCompetence: ['', [Validators.required]],
          libelle: ['', [Validators.required]],
          niveaux: new FormArray([], Validators.required)
      });

      this.niveau1 = this.formBuilder.group({
          level: ['Niveau1', [Validators.required]],
          groupedAction : ['', [Validators.required]],
          criteredEvaluation: ['', [Validators.required]]
      });
      this.niveau2 = this.formBuilder.group({
          level: ['Niveau2', [Validators.required]],
          groupedAction: ['', [Validators.required]],
          criteredEvaluation: ['', [Validators.required]],
      });
      this.niveau3 = this.formBuilder.group({
          level: ['Niveau3', [Validators.required]],
          groupedAction: ['', [Validators.required]],
          criteredEvaluation: ['', [Validators.required]],
      });
      this.NiveauxControls.controls.push(this.niveau1)
      this.NiveauxControls.controls.push(this.niveau2)
      this.NiveauxControls.controls.push(this.niveau3)
    // console.log(this.NiveauxControls);
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
  addCompetence() {
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
      // console.log(this.niveau1.value);
      //  console.log(this.postedcompetence.value);
    this.competenceService.addCompetenceOndb(this.postedcompetence.value).subscribe(data =>{
        Swal.fire(
          'Good!',
          'Competence added with success!',
          'success'
        )
    });
  }

  // // tslint:disable-next-line:typedef
  // optionChoised(id: any) {
  //   // @ts-ignore
  //   // if (id !== 'select a competence') {}
  //   console.log(id);
  // }
  // tslint:disable-next-line:typedef
  return() {
    //if (confirm('You are about to quit this page')) {
      this.router.navigate(['/listCompetence']);
  //  }
  }
}
