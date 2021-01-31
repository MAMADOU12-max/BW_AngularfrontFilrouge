import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import {AddGrpeCompetenceComponent} from '../app/Groupe_de_Competence/add-grpe-competence/add-grpe-competence.component';

@Injectable({
  providedIn: 'root'
})
export class UnSavedAddGrpeCompetenceGuard implements CanDeactivate<AddGrpeCompetenceComponent> {
  canDeactivate(
    component: AddGrpeCompetenceComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.grpeComptence.dirty) {
      return window.confirm('You have some unsaved changes. Are you sure you want to navigate?');
    }
    return true;
  }
}
