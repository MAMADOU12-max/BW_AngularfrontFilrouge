import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompetencesService} from '../../../Services/competences.service';
import {GroupeCompetenceService} from '../../../Services/groupe-competence.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-grpe-competence',
  templateUrl: './edit-grpe-competence.component.html',
  styleUrls: ['./edit-grpe-competence.component.css']
})
export class EditGrpeCompetenceComponent implements OnInit {

  Allcompetences: any;
  competences: any;
  libelle: string | any;
  description: string | any;
  grpeComptence: FormGroup | any;
  submitted = false;
  idGrpeCompetenceUrl: number | any;
  grpeCompetenceToUpdated: string | any;
  uniklibelleBoolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private competenceService: CompetencesService,
              private grpeCompetenceService: GroupeCompetenceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //    get id url
      this.idGrpeCompetenceUrl = this.activatedRoute.snapshot.params.id;
    // console.log(this.idGrpeCompetenceUrl);
      this.grpeCompetenceService.getOneGrpeCompetence(this.idGrpeCompetenceUrl).subscribe(data => {
          this.grpeCompetenceToUpdated = data;
          this.libelle = this.grpeCompetenceToUpdated.libelle;
          this.description = this.grpeCompetenceToUpdated.description;
      });
    // get all competence
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
  optionChoised(id: any) {}

  // tslint:disable-next-line:typedef
  editGrpCompetence() {
     // console.log(this.idGrpeCompetenceUrl);
     // console.log(this.grpeComptence.value);
    this.submitted = true;

    if (this.grpeComptence.invalid) {
      return;
    }

    this.grpeCompetenceService.editGrpeCompetenceOndb(this.idGrpeCompetenceUrl, this.grpeComptence.value).subscribe(data => {
            this.router.navigate(['/listGrpeCompetence']);
            Swal.fire(
              'Good!',
              'Updated with success!',
              'success'
            )
     });
  }

  // tslint:disable-next-line:typedef
  return() {
      this.router.navigate(['/listGrpeCompetence']);
  }
}
