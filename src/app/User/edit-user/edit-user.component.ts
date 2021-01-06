import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../Services/user.service';
import {UserModal} from '../../../Modal/UserModal';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  selectedFile: string | any;
  dataUsers: FormGroup | any;
  userUpdated: UserModal | any ;
  users: UserModal | any = [];
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  password: string | undefined;
  photo: string | undefined;
  username: string | undefined;
  profils = '' ;
  constructor(private activated: ActivatedRoute, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
     const idUserUpdated = +this.activated.snapshot.params.id ;
     // console.log(idUserUpdated) ;
     this.userService.getUserByIdfromdb(idUserUpdated).subscribe( data => {
          this.userUpdated = data ;
          this.firstname = this.userUpdated.firtname;
          this.lastname = this.userUpdated.lastname;
          this.email = this.userUpdated.email;
          this.password = this.userUpdated.password;
          this.username = this.userUpdated.username;
          this.profils = this.userUpdated.profils;
          this.photo = '';
     });
     this.dataUsers = this.formBuilder.group({
       firstname: ['', [Validators.required]],
       lastname: ['', [Validators.required]],
       email: ['', [Validators.required]],
       password: ['', [Validators.required]],
       username: ['', [Validators.required]],
       photo: ['', [Validators.required]],
       profils: ['', [Validators.required]]
     });
  }

  Uploadefiler(event: any): any {
    this.selectedFile = event.target.files[0] ;
    // console.log(this.selectedFile) ;
  }
  // tslint:disable-next-line:typedef
  UpdatingUser() {
    console.log(this.dataUsers.value);

    // this.userService.
  }
}
