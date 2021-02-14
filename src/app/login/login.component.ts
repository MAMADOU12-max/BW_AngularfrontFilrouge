import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {JwtHelperService} from "@auth0/angular-jwt";
import Swal from "sweetalert2";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: string | any;
  tokenDecoded: string | any;
  username = '';
  password = '';
  loginForm: FormGroup | any;
  fakeAuth = false;
  submitted = false;
  helper = new JwtHelperService() ;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
          username: ['', [Validators.required]] ,
          password: ['', [Validators.required]]
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
      this.authService.Authentification(this.username, this.password).subscribe(data => {

          this.token = this.authService.getToken() ;
          this.tokenDecoded = this.helper.decodeToken(this.token);
          if (this.tokenDecoded['Archivage'] == true) {
            Swal.fire(
              'Acces denied!',
              'Sorry, your account has been blocked, please contact the Administrator for more information!',
              'warning'
            )
            return;
          }
          // this.idUserConnected = tokenDecoded.id;
         this.router.navigate(['/listUsers']) ;
      } , error => {
          console.log(error);
          this.fakeAuth = true ;
          return ;
      });
  }
}
