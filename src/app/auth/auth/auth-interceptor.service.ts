import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

constructor(private authService:AuthService){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    return this.authService.user.pipe(
      take(1),
      exhaustMap((user:any) => {
        if (!user){
          return next.handle(request)
        }
        const modifiedReq = request.clone({
          params: new HttpParams().set('auth', user?.token)

        })
    return next.handle(modifiedReq);

        })
      )
      }
}
