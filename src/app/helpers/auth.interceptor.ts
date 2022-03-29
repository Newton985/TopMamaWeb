import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
import { getAccessToken } from "./api.helper";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>{
       const token = getAccessToken();
        request = request.clone({
            setHeaders: {
                Authorization: 'Bearer '+token
            }
        })
        
        return next.handle(request)
    }
}