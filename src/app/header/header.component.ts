import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {JwtHelperService} from "@auth0/angular-jwt";
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token: any;
  idUserConnected: number | any;
  nameUserConnected: string | any;
  profilUserConnected: string | any;
  imageUser: string | any;
  photoExist = false;
  userConnected: any;
  helper = new JwtHelperService() ;

  constructor(private authService: AuthService, private userService: UserService,private router: Router) { }

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
          this.profilUserConnected = this.userConnected.roles;

      });
  }

  // tslint:disable-next-line:typedef
  logout() {
      Swal.fire({
        title: 'Are you sure?',
        text: "Are you sure you want logout?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
            const token = localStorage.getItem('token') ;
            this.router.navigate(['/login']);
            localStorage.clear();
        }
      })

  }
}
