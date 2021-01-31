import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CompetencesService} from '../../../Services/competences.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GroupeCompetenceService} from '../../../Services/groupe-competence.service';

@Component({
  selector: 'app-add-grpe-competence',
  templateUrl: './add-grpe-competence.component.html',
  styleUrls: ['./add-grpe-competence.component.css']
})
export class AddGrpeCompetenceComponent implements OnInit {

  Allcompetences: any;
  competences: any;
  grpeComptence: FormGroup | any;
  libelle: string | any;
  description: string | any;
  submitted = false;
  uniklibelleBoolean = false;

  constructor(private router: Router, private competenceService: CompetencesService, private formBuilder: FormBuilder,
              private grpeCompetenceService: GroupeCompetenceService ) { }

  ngOnInit(): void {
    this.competenceService.getCompetenceFromdb().subscribe( data => {
        this.Allcompetences = data;
    });

    this.grpeComptence = this.formBuilder.group({
      libelle: ['', [Validators.required]] ,
      description: ['', [Validators.required]],
      competences: ['', [Validators.required]]
    });
  }

  // tslint:disable-next-line:typedef
  get Validations() {
    return this.grpeComptence.controls;
  }

  // tslint:disable-next-line:typedef
  optionChoised(id: any) {
  }

  // tslint:disable-next-line:typedef
  addGrpCompetence() {
    this.submitted = true;

    if (this.grpeComptence.invalid) {
      return;
    }
    // tslint:disable-next-line:no-unused-expression
    // this.grpeComptence.value;
    console.log(this.grpeComptence.value);
    this.grpeCompetenceService.postGrpeCompetenceOndb(this.grpeComptence.value).subscribe(data => {
      alert('groupe de compétence ajouté avec succés');
      this.router.navigate(['/listGrpeCompetence']);
    }, error => {
      this.uniklibelleBoolean = true;
    });

  }

  // tslint:disable-next-line:typedef
  return() {
    if (confirm('You are about to quit this page')) {
      this.router.navigate(['/listGrpeCompetence']);
    }
  }
}
