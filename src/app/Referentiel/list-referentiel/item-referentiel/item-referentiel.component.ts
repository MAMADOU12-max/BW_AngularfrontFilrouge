import {Component, Input, OnInit} from '@angular/core';
import {ReferentielService} from "../../../../Services/referentiel.service";

@Component({
  selector: 'app-item-referentiel',
  templateUrl: './item-referentiel.component.html',
  styleUrls: ['./item-referentiel.component.css']
})
export class ItemReferentielComponent implements OnInit {

  @Input() ItemReferentiel: any;

  constructor(private referentielService: ReferentielService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  deleteReferentiel(id: number) {
    if (confirm('Are you sure you want delete this?')) {
      // @ts-ignore
      this.referentielService.deleteReferentielfromdb(id).subscribe(data => {
        alert('Referentiel deleted');
      });
    }
  }

}
