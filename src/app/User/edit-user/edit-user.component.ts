import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../Services/user.service';
import {UserModal} from '../../../Modal/UserModal';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from '../../../Validator/ConfirmedValidator';
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
    selectedFile: string | any;
    url: any;
    msg = '';
    dataUsers: FormGroup | any;
    idUserUpdated: number | any;
    userUpdated: UserModal | any ;
    users: UserModal | any = [];
    firtname: string | undefined;
    lastname: string | undefined;
    email: string | undefined;
    // password: string | undefined;
    // confirmPassword: string | undefined;
    photo: string | undefined;
    photoExist = false;
    username: string | undefined;
    submitted = false;
    errorSubmitted = false;
    profils = '' ;

    constructor(private activated: ActivatedRoute, private userService: UserService,
                private formBuilder: FormBuilder, private router: Router) { }

    ngOnInit(): void {
         this.idUserUpdated = +this.activated.snapshot.params.id ;
         // console.log(this.idUserUpdated) ;
         this.userService.getUserByIdfromdb(this.idUserUpdated).subscribe( data => {
              this.userUpdated = data ;
           // console.log(this.userUpdated);
              this.firtname = this.userUpdated.firtname;
              this.lastname = this.userUpdated.lastname;
              this.email = this.userUpdated.email;
              this.username = this.userUpdated.username;
              this.profils = this.userUpdated.roles[0];
              // console.log(this.userUpdated.roles[0])
              this.photo = this.userUpdated.photo;
              if (this.userUpdated.photo !== null) {
                this.photoExist = true;
                // console.log('photo exist!');
                // console.log(this.userUpdated.photo);
              }
         });

         this.dataUsers = this.formBuilder.group({
             firtname: ['', [Validators.required, Validators.minLength(3)]],
             lastname: ['', [Validators.required, Validators.minLength(2)]],
             email: ['', [Validators.required, Validators.email]],
             // password: ['', [Validators.required, Validators.minLength(5)]],
             // confirmPassword: ['', [Validators.required]],
             profils: ['', [Validators.required]],
             username: ['', [Validators.required, Validators.minLength(4)]],
         },
         //   {
         //    validator: MustMatch('password', 'confirmPassword')
         // }
         );
    }

    // tslint:disable-next-line:typedef
    get Validations() {
        return this.dataUsers.controls;
    }

    Uploadefiler(event: any): any {
        // tslint:disable-next-line:triple-equals
        // if (!event.target.files[0] || event.target.files[0].length == 0) {
        //     this.msg = 'You must select an image';
        //     console.log('You must select an image');
        //     return;
        // }
        this.selectedFile = event.target.files[0] ;

        const mimeType = event.target.files[0].type;

        if (mimeType.match(/image\/*/) == null) {
            this.msg = 'Only images are supported';
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);

        // tslint:disable-next-line:variable-name
        reader.onload = (_event) => {
            this.msg = '';
            this.url = reader.result;
        };
    }

    // tslint:disable-next-line:typedef
    UpdatingUser() {

        this.submitted = true;
        if (this.dataUsers.invalid) {
            console.log("ERROR!");
            this.errorSubmitted = true;
            return;
        }

        const formValue = this.dataUsers.value ;
        const formData = new FormData();

        for (const key of Object.keys(formValue)) {
            if (key !== 'photo') {
              const value =  formValue[key] ;
              // console.log(value);
              formData.append(key, value) ;
            }
        }
        if (this.selectedFile) {
          formData.append('photo',  this.selectedFile) ;
        }

      //console.log(formValue);
        this.userService.updateUser(this.idUserUpdated, formData).subscribe(data => {
            Swal.fire(
              'Good!',
              'User updated!',
              'success'
            )
            this.router.navigate(['listUsers']);
        }, error => {
          // this.router.navigate(['listUsers']);
            console.log(error);
            return;
        }) ;

    }

    // tslint:disable-next-line:typedef
    return() {
      Swal.fire({
        title: 'Are you sure?',
        text: "You are about to quit this page!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
          if (result.isConfirmed) {
              this.router.navigate(['/listUsers']);
          }
      })
    }
}
