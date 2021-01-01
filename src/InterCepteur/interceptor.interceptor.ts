import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../Services/auth.service";

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      const token = this.authService.getToken() ;
      // console.log(token) ;
      if(token) {
          request = request.clone({
             setHeaders: {
                Authorization: `Bearer ${token}`,
               Accept: 'Application/json'
             }
          })
      }
      return next.handle(request);
  }


}
// export const interceptorAuth = {
//   provide: HTTP_INTERCEPTORS,
//   useClass: InterceptorInterceptor,
//   multi: true
// } ;
