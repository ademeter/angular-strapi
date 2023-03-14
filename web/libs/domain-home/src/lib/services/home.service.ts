import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HomeResponse, HomeResponseDataObject } from '@web/openapi';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class HomeService {

    constructor(
        private readonly _http: HttpClient,
    ) {}
    public getHomeData$(): Observable<HomeResponseDataObject | undefined> {
        return this._http.get<HomeResponse>(`${ environment.API_URL }/api/home?populate=*`).pipe(
            filter(response => !!response.data),
            map(response => response.data),
        );
    }
}
