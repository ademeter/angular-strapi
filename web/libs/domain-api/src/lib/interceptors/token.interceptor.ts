import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest, HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

const TOKEN_HEADER_KEY = 'Authorization';
@Injectable({
    providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
    public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        let authReq = req;

        const token = environment.API_TOKEN;

        if (token) {
            authReq = req.clone({
                headers: req.headers.set(TOKEN_HEADER_KEY, `Bearer ${ token }`),
            });
        }

        return next.handle(authReq);
    }
}
