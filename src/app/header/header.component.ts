import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {JwtHelperService} from "@auth0/angular-jwt";
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token: any;
  idUserConnected: number | any;
  nameUserConnected: string | any;
  imageUser: string | any;
  photoExist = false;
  users: any;
  helper = new JwtHelperService() ;

  constructor(private authService: AuthService, private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  this.token = this.authService.getToken() ;
    const tokenDecoded = this.helper.decodeToken(this.token);
    // console.log(tokenDecoded.username);
    this.nameUserConnected = tokenDecoded.username;

    this.userService.getAllUserfromdb().subscribe(data => {
        this.users = data;
        this.users.forEach((element: any) => {
            // console.log(element);
            if (element.username == this.nameUserConnected) {
               this.idUserConnected = element.id;
              if (element.photo != null) {
                 this.imageUser = element.photo;
                 this.photoExist = true;
                // console.log(this.imageUser);
                 return;
              }
              return;
            }
        }) ;
    });
   // const tokenDecoded = this.helper.decodeToken(response.token) ;
  }

  // tslint:disable-next-line:typedef
  logout() {
    if (window.confirm('Are you sure you want logout?')) {
        const token = localStorage.getItem('token') ;
        this.router.navigate(['/login']);
        localStorage.clear();
    }
  }
}
