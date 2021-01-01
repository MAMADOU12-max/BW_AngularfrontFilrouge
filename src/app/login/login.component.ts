import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string ='';
  loginForm: FormGroup | any;
  fakeAuth = false;
  submitted = false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
          username: ['',[Validators.required]] ,
          password: ['',[Validators.required]]
      }) ;
  }

  get f() {
    return this.loginForm.controls ;
  }

  onLogin() {
      this.submitted = true ;
      if (this.loginForm.invalid) {
         return ;
      }
      this.authService.Authentification(this.username, this.password).subscribe(data =>{
        this.router.navigate(['/listProfil']) ;
      } , error => {
          console.log(error)
           this.fakeAuth = true ;
           return ;
      })
  }
}
