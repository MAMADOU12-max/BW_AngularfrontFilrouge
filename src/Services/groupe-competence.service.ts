import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupeCompetenceService {

  private urlEnv = environment.Url_base;

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:variable-name
  private _refreshNeeded$ = new Subject();

  // tslint:disable-next-line:typedef
  get refreshNeeded$() {
    return this._refreshNeeded$ ;
  }

  // tslint:disable-next-line:typedef
  getAllGropuecompetencefromdb() {
    return this.httpClient.get(this.urlEnv + '/admin/grpecompetences/competences');
  }

  // tslint:disable-next-line:typedef
  deleteGrpecompetencefromdb(id: number) {
      return this.httpClient.delete(
        this.urlEnv + '/admin/grpecompetences/' + id
      ).pipe(
        tap(() => {
            this._refreshNeeded$.next();
        })
      );
  }

  // tslint:disable-next-line:typedef
  postGrpeCompetenceOndb(data: any) {
    return this.httpClient.post(
      this.urlEnv + '/admin/grpecompetences', data
    ).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  // tslint:disable-next-line:typedef
  editGrpeCompetenceOndb(id: number, data: any) {
    return this.httpClient.put(
      this.urlEnv + '/admin/grpecompetences/' + id, data
    ).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  // tslint:disable-next-line:typedef
  getOneGrpeCompetence(id: number) {
    return this.httpClient.get(
      this.urlEnv + '/admin/grpecompetences/' + id
    ).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }
}
