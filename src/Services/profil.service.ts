import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

    private urlEnv = environment.Url_base ;

  // tslint:disable-next-line:variable-name
    private _refresNeeded$ = new Subject<void>() ;

  // tslint:disable-next-line:typedef
    get refresNeeded$() {
       return this._refresNeeded$ ;
    }

    constructor(private  httpClient: HttpClient) { }

    getallprofil() {
        return this.httpClient.get(this.urlEnv + '/admin/profils?Archivage=0')  ;
    }

    // post profil
  // tslint:disable-next-line:typedef
    postProfil(libelle: string) {
      return this.httpClient.post(`${this.urlEnv}/admin/profils`, {
        libelle
      }).pipe(
        tap(() => {
          this._refresNeeded$.next() ;
        })
      );
    }

    //delete id
    deleteProfil(id: number) {
        return this.httpClient.delete(`${this.urlEnv}/admin/profils/${id}`).pipe(
          tap(() => {
            this._refresNeeded$.next() ;
          })
        );
    }

//    get profil by Id
    getProfilById(id: number) {
        return this.httpClient.get(`${this.urlEnv}/admin/profils/${id}`);
    }
    // edit profil
  // tslint:disable-next-line:typedef
    editProfil(id: number, libelle: string) {
      // @ts-ignore
      return this.httpClient.put(`${this.urlEnv}/admin/profils/${id}`, {
            libelle
      }).pipe(
          tap(() => {
            this._refresNeeded$.next() ;
          })
      );
    }
}
