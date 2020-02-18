import { Component, OnInit, Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("interceptor called and get the req : " + req);
    req = req.clone({
      setHeaders:{
        Accept:'application/json'
      }
    })
console.log("altered req : " + req);
return next.handle(req);
    // All HTTP requests are going to go through this method
}
}
