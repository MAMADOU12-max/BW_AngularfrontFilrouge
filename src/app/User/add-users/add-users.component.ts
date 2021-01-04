import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../Services/user.service';
import {UserModal} from '../../../Modal/UserModal';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  formUser: FormGroup | any;
  selectedFile: any ;
  user: UserModal | any;
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  password: string | undefined;
  photo: string | undefined;
  username: string | undefined;
  profils: string | any ;
  formData: any ;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      username: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      profils: ['', [Validators.required]]
    }) ;
  }

  Uploadefiler(event: any): any {
    this.selectedFile = event.target.files[0] ;
    // console.log(this.selectedFile) ;
  }

  // tslint:disable-next-line:typedef
  addUser() {
    const formValue = this.formUser.value ;
    this.formData = new FormData();

    for (const key of Object.keys(formValue)) {
      if (key !== 'photo') {
          const value =  formValue[key] ;
          // console.log(value);
          this.formData.append(key, value) ;
        }
        // console.log(formData) ;
    }
    // const cool = 'test' ;
    this.formData.append('photo',  this.selectedFile) ;
    // this.formData.append('photo',  cool) ;

    // return formData ;
    console.log(this.formData);
    // this.userService.postUseronBack(formData).subscribe( data => {
    //       console.log(data) ;
    // }) ;
  }

}
