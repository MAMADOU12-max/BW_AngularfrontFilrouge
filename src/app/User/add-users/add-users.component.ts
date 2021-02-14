import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../Services/user.service';
import {UserModal} from '../../../Modal/UserModal';
import { MustMatch } from   '../../../Validator/ConfirmedValidator';
import {Router} from '@angular/router';
import Swal from "sweetalert2";


@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  formUser: FormGroup | any;
  submitted = false;
  errorSubmitted = false;
  selectedFile: any ;
  url: any;
  msg = '';
  user: UserModal | any;
  firtname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  photo: string | undefined;
  username: string | undefined;
  profils = '' ;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
      this.formUser = this.formBuilder.group({
          firtname: ['', [Validators.required, Validators.minLength(3)]],
          lastname: ['', [Validators.required, Validators.minLength(2)]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(5)]],
          confirmPassword: ['', [Validators.required]],
          profils: ['', [Validators.required]],
          username: ['', [Validators.required, Validators.minLength(4)]],
      }, {
          validator: MustMatch('password', 'confirmPassword')
      }) ;
  }

  // tslint:disable-next-line:typedef
  get Validations() {
      return this.formUser.controls;
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
  addUser() {
      this.submitted = true;
      if (this.formUser.invalid) {
        console.log("ERROR!");
        this.errorSubmitted = true;
        return;
      }

      const formValue = this.formUser.value ;
      // console.log(formValue);return;
      const formData = new FormData();
      // console.log(formValue);
      // formData.append('firtname', this.formUser.value.firtname);
      // formData.append('lastname', this.formUser.value.lastname);
      // formData.append('email', this.formUser.value.email);
      // formData.append('password', this.formUser.value.password);
      // formData.append('username', this.formUser.value.username);
      // formData.append('profils', this.formUser.value.profils);
      for (const key of Object.keys(formValue)) {
        if (key !== 'photo') {
            const value =  formValue[key] ;
            // console.log(value);
            formData.append(key, value) ;
          }
          // console.log(formData) ;
      }
      if (this.selectedFile) {
          formData.append('photo',  this.selectedFile) ;
      }
      this.userService.postUseronBack(formData).subscribe( data => {
          Swal.fire(
            'Good!',
            'user added with success!',
            'success'
          )
            this.router.navigate(['listUsers']);

      }, error => {
         this.errorSubmitted = true;
      }) ;
  }

  // tslint:disable-next-line:typedef
  return() {
       this.router.navigate(['/listUsers']);
  }

}
