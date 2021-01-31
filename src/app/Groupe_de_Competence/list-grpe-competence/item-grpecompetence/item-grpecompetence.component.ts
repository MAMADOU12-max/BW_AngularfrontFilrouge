import {Component, Input, OnInit} from '@angular/core';
import {GroupeCompetenceService} from '../../../../Services/groupe-competence.service';

@Component({
  selector: 'app-item-grpecompetence',
  templateUrl: './item-grpecompetence.component.html',
  styleUrls: ['./item-grpecompetence.component.css']
})
export class ItemGrpecompetenceComponent implements OnInit {

   @Input() ItemgrpeCompetence: any;

  constructor(private groupecompetenceService: GroupeCompetenceService) { }

  ngOnInit(): void {
    // console.log(this.ItemgrpeCompetence);
  }

  // tslint:disable-next-line:typedef
  deleteGrpecompetence(id: number) {
    if (confirm('Are you sure you want delete this?')) {
        // @ts-ignore
      this.groupecompetenceService.deleteGrpecompetencefromdb(id).subscribe(data => {
            alert('competence crew deleted!');
        });
    }
  }

}
