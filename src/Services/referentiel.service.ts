import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {

    private urlEnv = environment.Url_base;

    constructor(private httpClient: HttpClient) { }

    // tslint:disable-next-line:variable-name
    private _refreshNeeded$ = new Subject();

    // tslint:disable-next-line:typedef
    get refreshNeeded$() {
      return this._refreshNeeded$ ;
    }

    // tslint:disable-next-line:typedef
    getAllReferentielfromdb() {
      return this.httpClient.get(this.urlEnv + '/admin/referentiels');
    }

    // tslint:disable-next-line:typedef
    deleteReferentielfromdb(id: number) {
      return this.httpClient.delete(
        this.urlEnv + '/admin/referentiels/' + id
      ).pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
    }

    // tslint:disable-next-line:typedef
    addReferentielOndb(data: any) {
        return this.httpClient.post(
          this.urlEnv + '/admin/referentiels', data
        ).pipe(
          tap(() => {
            this._refreshNeeded$.next();
          })
        );
    }

    // tslint:disable-next-line:typedef
    editReferentielOndb(id: number, data: any) {
      return this.httpClient.put(
        this.urlEnv + '/admin/referentiels/' + id, data
      ).pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
    }

    // tslint:disable-next-line:typedef
    getOneReferentiel(id: number) {
      return this.httpClient.get(
        this.urlEnv + '/admin/referentiels/' + id
      ).pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
    }
}
