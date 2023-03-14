import { Injectable } from '@angular/core';
import { ArticleListResponse } from '@web/openapi';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    constructor(
        private readonly _http: HttpClient,
    ) {}


    public getArticles$(): Observable<ArticleListResponse> {
        return this._http.get<ArticleListResponse>((`${ environment.API_URL }/api/articles?populate=heroimage`));
    }

    public getArticleById$(id: string): Observable<ArticleListResponse> {
        return this._http.get<ArticleListResponse>((`${ environment.API_URL }/api/articles/${ id }?populate=*`));
    }
}
