import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GroupeCompetenceService} from '../../../Services/groupe-competence.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  niveau1: string | any;
  niveau2: string | any;
  niveau3: string | any;
  // groupedAction: string | any;
  groupedAction1: string | any;
  groupedAction2: string | any;
  groupedAction3: string | any;
  critereDevaluation1: string | any;
  critereDevaluation2: string | any;
  critereDevaluation3: string | any;

  constructor(private router: Router, private grpCompetenceService: GroupeCompetenceService, private formBuilder: FormBuilder) {
    this.selectedOption = 'selectDefault';
  }

  ngOnInit(): void {
      this.grpeCompetenceindb = this.grpCompetenceService.getAllGropuecompetencefromdb().subscribe(data => {
        this.grpeCompetenceindb = data;
        // console.log(this.grpeCompetenceindb);
      });

      this.postedcompetence = this.formBuilder.group({
        nomCompetence: ['', [Validators.required]],
        groupedAction1: ['', [Validators.required]],
        groupedAction2: ['', [Validators.required]],
        groupedAction3: ['', [Validators.required]],
        critereDevaluation1: ['', [Validators.required]],
        critereDevaluation2: ['', [Validators.required]],
        critereDevaluation3: ['', [Validators.required]]
      });
  }

  // tslint:disable-next-line:typedef
  addCompetence() {
    // this.groupedAction = this.groupedAction1;
    // this.groupedAction = this.groupedAction2;
    // this.groupedAction = this.groupedAction3;
    // console.log(this.libelleCompetence);
    // console.log(this.groupedAction);

    console.log(this.postedcompetence.value);
    // console.log(this.groupedAction2);
    // console.log(this.groupedAction3);
    // console.log(this.critereDevaluation1);
    // console.log(this.critereDevaluation2);
    // console.log(this.critereDevaluation3);
  }

  // // tslint:disable-next-line:typedef
  // optionChoised(id: any) {
  //   // @ts-ignore
  //   // if (id !== 'select a competence') {}
  //   console.log(id);
  // }
  // tslint:disable-next-line:typedef
  return() {
    if (confirm('You are about to quit this page')) {
      this.router.navigate(['/listCompetence']);
    }
  }
}
