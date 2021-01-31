import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../Services/user.service';
import {UserModal} from '../../../Modal/UserModal';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from '../../../Validator/ConfirmedValidator';

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
  userUpdated: UserModal | any ;
  users: UserModal | any = [];
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  photo: string | undefined;
  photoExist = false;
  username: string | undefined;
  submitted = false;
  profils = '' ;
  constructor(private activated: ActivatedRoute, private userService: UserService,
              private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
     const idUserUpdated = +this.activated.snapshot.params.id ;
     // console.log(idUserUpdated) ;
     this.userService.getUserByIdfromdb(idUserUpdated).subscribe( data => {
          this.userUpdated = data ;
          this.firstname = this.userUpdated.firtname;
          this.lastname = this.userUpdated.lastname;
          this.email = this.userUpdated.email;
          // this.password = this.userUpdated.password;
          this.username = this.userUpdated.username;
          this.profils = this.userUpdated.profils;
          this.photo = this.userUpdated.photo;
          if (this.userUpdated.photo !== null) {
            this.photoExist = true;
            console.log('photo exist!');
            // console.log(this.userUpdated.photo);
          }
     });
     this.dataUsers = this.formBuilder.group({
       firstname: ['', [Validators.required, Validators.minLength(3)]],
       lastname: ['', [Validators.required, Validators.minLength(2)]],
       email: ['', [Validators.required, Validators.email]],
       // password: ['', [Validators.minLength(5)]],
       // confirmPassword: [''],
       username: ['', [Validators.required]],
       photo: ['', [Validators.required]],
       profils: ['', [Validators.required]]
     }, {
       validator: MustMatch('password', 'confirmPassword')
     });
  }

  // tslint:disable-next-line:typedef
  get Validations() {
    return this.dataUsers.controls;
  }

  Uploadefiler(event: any): any {
    // tslint:disable-next-line:triple-equals
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      console.log('You must select an image');
      return;
    }
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
      console.log(this.dataUsers);
      return;
    }

    console.log(this.dataUsers);

    // this.userService.
  }

  // tslint:disable-next-line:typedef
  return() {
    if (confirm('You are about to quit this page')) {
      this.router.navigate(['/listUsers']);
    }
  }
}
