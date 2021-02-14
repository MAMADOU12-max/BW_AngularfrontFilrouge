import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Services/auth.service";
import {UserService} from "../../Services/user.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  token: any;
  nameUserConnected: string | any;
  idUserConnected: number | any;
  userConnected: any;
  imageUser: string | any;
  photoExist = false;
  users: any;
  helper = new JwtHelperService() ;

  constructor(private authService: AuthService, private userService: UserService) { }


  ngOnInit(): void {

    this.token = this.authService.getToken() ;
    const tokenDecoded = this.helper.decodeToken(this.token);
    this.idUserConnected = tokenDecoded.id;

    this.userService.getUserByIdfromdb(this.idUserConnected).subscribe(data => {
      this.userConnected = data;
      // console.log(this.userConnected);
      if (this.userConnected.photo != null) {
        this.imageUser = this.userConnected.photo;
        this.photoExist = true;
      }
      this.nameUserConnected = this.userConnected.username;

    });
  }

  // tslint:disable-next-line:typedef
  logout() {
    if (confirm('Are you sure you want logout?')) {
      const token = localStorage.getItem('token') ;
      localStorage.clear();
    }
  }

}
