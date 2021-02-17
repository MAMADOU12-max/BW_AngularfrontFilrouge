import { Component, OnInit } from '@angular/core';
import {GroupeCompetenceService} from "../../../Services/groupe-competence.service";
import {ReferentielService} from "../../../Services/referentiel.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-referentiel',
  templateUrl: './add-referentiel.component.html',
  styleUrls: ['./add-referentiel.component.css']
})
export class AddReferentielComponent implements OnInit {

  submitted = false;
  id: number | any;

  AllgrpeCompetences: any;
  libelle: string | any;
  presentation: string | any;
  critereDevaluation: string | any;
  critereDadmission: string | any;

  groupeCompetence: number | any;
  groupeCompetencesSelected: string | any;
  programme: File | any;
  dataReferentielRecup: FormGroup | any;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private groupeCompeteceService: GroupeCompetenceService, private  referentielService: ReferentielService,
          private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
      this.groupeCompeteceService.getAllGropuecompetencefromdb().subscribe(data =>{
            this.AllgrpeCompetences = data;
          // console.log(this.AllgrpeCompetences);
      });

      this.dataReferentielRecup = this.formbuilder.group({
          libelle: ['',[Validators.required, Validators.minLength(2)]] ,
          presentation: ['',[Validators.required]] ,
          critereDevaluation: ['',[Validators.required]] ,
          critereDadmission: ['',[Validators.required]],
          groupeCompetencesSelected: ['',[Validators.required]],
          programme: ['',[Validators.required]]
      });

      this.dropdownSettings = {
        singleSelection: false,
        idField: 'id',
        textField: 'libelle',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };
  }

  get Validations() {
      return this.dataReferentielRecup.controls;
  }
  onItemSelect(item: any) {
      // console.log(item.id);
  }
  onSelectAll(items: any) {
     // console.log(items);
  }

  uploadFile(event: any) {
      this.programme =  event.target.files[0];   // console.log(this.programme)
  }


  addingReferentiel() {
      // id:number = null;
      this.submitted = true;
      if (this.dataReferentielRecup.invalid) {
          console.log("ERROR!");
          return;
      }

      const formValue = this.dataReferentielRecup.value ;
      // console.log(formValue);return;
      const formData = new FormData()
      for (const key of Object.keys(formValue)) {
          if (key !== 'programme' && key !== 'groupeCompetence'){
                const value =  formValue[key] ;
                formData.append(key, value) ;
          }
      }

      for (const groupeCompetence of formValue.this.selectedItems) {
        this.groupeCompetencesSelected += groupeCompetence.id + ',';
        // console.log(this.groupeCompetencesSelected);
      }
      // groupe Competence
      formData.append('groupeCompetences', this.groupeCompetencesSelected);

      // programme
      formData.append('programme',  this.programme) ;


      this.referentielService.addReferentielOndb(formData).subscribe(data => {
           Swal.fire({
              icon: 'success',
              title: 'Referentiel has been saved',
              showConfirmButton: false,
              timer: 2500
           });
      }, error => {
          Swal.fire(
            'Error!',
            'error compared to the file check that the size is not too heavy please!',
            'warning'
          )
      });

  }

}
