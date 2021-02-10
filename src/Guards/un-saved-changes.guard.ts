import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AddUsersComponent} from '../app/User/add-users/add-users.component';

@Injectable({
  providedIn: 'root'
})
export class UnSavedChangesGuard implements CanDeactivate<AddUsersComponent> {
  canDeactivate(
    component: AddUsersComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.formUser.dirty && !component.submitted) {
         return window.confirm('You have some unsaved changes. Are you sure you want to navigate?');
    }
    return true;
  }

}
