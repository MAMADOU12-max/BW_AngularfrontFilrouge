import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  // tslint:disable-next-line:variable-name
  private _refresh = new Subject();
  private urlbase = environment.Url_base;

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  getRefresh() {
    return this._refresh;
  }
  // tslint:disable-next-line:typedef
  getAllpromofromdb() {
     return this.httpClient.get(this.urlbase + '/admin/promo');
  }

  // tslint:disable-next-line:typedef
  deletePromofromdb(id: number) {
    return this.httpClient.delete(
      this.urlbase + '/admin/promo/' + id
    ).pipe(
        tap(() => {
            this._refresh.next();
        })
    );
  }
}
