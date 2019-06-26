import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } 
from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  
  intercept(request: HttpRequest<any>, next: HttpHandler):  Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'securitykey': 'key123'
      }
    });
    return next.handle(request);
  }
}