import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserModal} from '../Modal/UserModal';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlEnv = environment.Url_base ;

  // tslint:disable-next-line:variable-name
  private _refresNeeded$ = new Subject<void>() ;

  // tslint:disable-next-line:typedef
  get refresNeeded$() {
    return this._refresNeeded$ ;
  }

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAllUserfromdb() {
      return this.httpClient.get(this.urlEnv + '/admin/users?Archivage=0');
  }

  // tslint:disable-next-line:typedef
  postUseronBack(user: FormData) {
    // @ts-ignore
    return this.httpClient.post(this.urlEnv + '/admin/users', {user});
  }

  // tslint:disable-next-line:typedef
  getUserByIdfromdb(id: number) {
      return this.httpClient.get(this.urlEnv + '/admin/users/' + id);
  }
}
