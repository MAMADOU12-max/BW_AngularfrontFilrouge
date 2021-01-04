import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Subject} from 'rxjs';
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProfilDeSortieService {

  private urlEnv = environment.Url_base ;

  // tslint:disable-next-line:variable-name
  private _refresNeeded$ = new Subject<void>() ;

  // tslint:disable-next-line:typedef
  get refresNeeded$() {
    return this._refresNeeded$ ;
  }

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAllprofilDeSortiefromdb() {
      return  this.httpClient.get(`${this.urlEnv}/admin/profilsdesortie?Archivage=0`);
  }
  // tslint:disable-next-line:typedef
  postprofildeSortieondb(libelle: string) {
    // @ts-ignore
    return this.httpClient.post(`${this.urlEnv}/admin/profilsdesortie`, libelle).pipe(
        tap(() => {
            this._refresNeeded$.next();
        })
    );
  }
  // tslint:disable-next-line:typedef
  deleteprofildeSortieondb(id: number) {
    // @ts-ignore
    return this.httpClient.delete(`${this.urlEnv}/profil_de_sorties/${id}`).pipe(
      tap( () => {
        this._refresNeeded$.next();
      })
    );
  }
  // tslint:disable-next-line:typedef
  putProfildeSortieonDb(id: number, libelle: string) {
    return this.httpClient.put(`${this.urlEnv}/profil_de_sorties/${id}`, { libelle }).pipe(
      tap( () => {
        this._refresNeeded$.next();
      })
    );
  }
}
