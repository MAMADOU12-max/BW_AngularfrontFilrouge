import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../Services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        const token = localStorage.getItem('token') ;

        return this.authService.isAuthenticated().then(
          (authenticated: boolean | any) => {
            // authenticated ? true : false ;
            if (authenticated) {
                return true ;
            } else {
                this.router.navigate(['/']) ;
                return false ;
            }
          }
        );
      // const signIn = this.authService.logginIn ;
      //
      //   if (token == 'undefined') {
      //     this.router.navigate(['/']) ;
      //      localStorage.clear();
      //   }
      //   return signIn;

    }

}
