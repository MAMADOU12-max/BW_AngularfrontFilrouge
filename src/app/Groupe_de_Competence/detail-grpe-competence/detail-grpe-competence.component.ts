import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupeCompetenceService} from "../../../Services/groupe-competence.service";

@Component({
  selector: 'app-detail-grpe-competence',
  templateUrl: './detail-grpe-competence.component.html',
  styleUrls: ['./detail-grpe-competence.component.css']
})
export class DetailGrpeCompetenceComponent implements OnInit {

    libelle: string | any;
    description: string | any;
    competences: string | any;
    idGrpeCompetenceUrl: number | any;
    detailGrpeCompetence: any;

  // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private groupeCompetenceService: GroupeCompetenceService) { }

    ngOnInit(): void {
        this.idGrpeCompetenceUrl =  this.activatedRoute.snapshot.params.id;
        // console.log(this.idGrpeCompetenceUrl);

        this.groupeCompetenceService.getOneGrpeCompetence(this.idGrpeCompetenceUrl).subscribe(data => {
            this.detailGrpeCompetence = data;
            console.log(this.detailGrpeCompetence.competences);
        });
    }

    // tslint:disable-next-line:typedef
    return() {
      if (confirm('You are about to quit this page')) {
        this.router.navigate(['/listGrpeCompetence']);
      }
    }
}
