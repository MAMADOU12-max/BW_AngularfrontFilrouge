import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlEnv = environment.Url_base ;
  roleuser =  '' ;

  constructor(private httpClient: HttpClient, private router: Router) { }

  helper = new JwtHelperService() ;

  // tslint:disable-next-line:typedef
  Authentification(username: string, password: string) {
      return  this.httpClient.post(this.urlEnv + '/login', {
            username, password
      }).pipe(
          map((response: any) => {
               const tokenDecoded = this.helper.decodeToken(response.token) ;
                // console.log(this.tokenDecoded.roles[0]) ;
               localStorage.setItem('token', response.token) ;
                // this.roleuser = this.tokenDecoded['roles'] ;
               if (tokenDecoded.roles[0] === 'ROLE_ADMIN') {
                // this.router.navigate(['/addUser']) ;
                this.router.navigate(['/listProfil']);
              }else if (tokenDecoded.roles[0] === 'ROLE_FORMATEUR') {
                  this.router.navigate(['addPromotion']) ;
              }else if (tokenDecoded.roles[0] === 'ROLE_CM') {
                this.router.navigate(['cm']) ;
              }
          })
      ) ;
  }

  // tslint:disable-next-line:typedef
  getToken() {
      const token = localStorage.getItem('token') ;
      if (token !== 'undefined') {
          return token ;
      }
      return null ;
  }

  // tslint:disable-next-line:typedef
  logout() {
    const token = localStorage.getItem('token') ;
    return  localStorage.clear();
    return token;
  }
}
