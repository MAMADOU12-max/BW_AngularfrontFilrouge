import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {

  private urlEnv = environment.Url_base ;

  // tslint:disable-next-line:variable-name
  private _refresNeeded$ = new Subject<void>() ;

  // tslint:disable-next-line:typedef
  get refresNeeded$() {
    return this._refresNeeded$ ;
  }

  constructor(private  httpClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  getCompetenceFromdb(){
      return this.httpClient.get(this.urlEnv + '/admin/competences');
  }
  // tslint:disable-next-line:typedef
  getCompetenceFromdbbyId(id: number) {
    return this.httpClient.get(this.urlEnv + '/admin/competences/' + id);
  }
  // tslint:disable-next-line:typedef
  addCompetenceFrombyId(competencePosted: any) {
      return this.httpClient.post(this.urlEnv + '/admin/competences', competencePosted);
  }
}
