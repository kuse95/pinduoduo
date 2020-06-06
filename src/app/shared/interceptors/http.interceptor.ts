import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let url = req.url;
    if (req.url.indexOf(environment.baseUrl) === -1) {
      url = `${environment.baseUrl}/${url[0] === '/' ? url.substr(1) : url}`;
    }
    const config = req.clone({
      url,
    });
    return next.handle(config).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log(event);
        }
      })
    );
  }
}
