import {Component, Input, OnInit} from '@angular/core';
import {GroupeCompetenceService} from '../../../../Services/groupe-competence.service';
import Swal from "sweetalert2";

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
      Swal.fire({
        title: 'Are you sure?',
        text: "Are you sure you want delete this?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
            this.groupecompetenceService.deleteGrpecompetencefromdb(id).subscribe(data => {
                Swal.fire(
                  'Good!',
                  'competence crew deleted!',
                  'success'
                )
            });
        }
      })
  }

}
