import { Component, OnInit } from '@angular/core';
import {ReferentielService} from "../../../Services/referentiel.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-referentiel',
  templateUrl: './detail-referentiel.component.html',
  styleUrls: ['./detail-referentiel.component.css']
})
export class DetailReferentielComponent implements OnInit {

  referentielSelected: any;

  constructor(private referentielService: ReferentielService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const idRecup = +this.activatedRoute.snapshot.params.id ;
    this.referentielService.getOneReferentiel(idRecup).subscribe( data => {
      //console.log(data) ;
      this.referentielSelected = data ;
      console.log(this.referentielSelected);
      // this.role = this.userSelected.roles[0];
    });
  }

  b64toBlob(b64Data: any, contentType = 'application/pdf'): any {
    contentType = contentType || '';
    const sliceSize = 512;
    b64Data = b64Data.replace(/^[^,]+,/, '');
    b64Data = b64Data.replace(/\s/g, '');
    const byteCharacters = window.atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  openProgramme(): any {
    const file = this.b64toBlob(this.referentielSelected.programme);
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, '_blank');
  }
}
