import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from '@web/domain-api';
import { HomeContentComponent } from '@web/domain-home';
import { ArticlesComponent } from '@web/domain-articles';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        HomeContentComponent,
        ArticlesComponent,
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            // { path: 'articles/:id', component: ArticleComponent },
        ]),
        MarkdownModule.forRoot({
            markedOptions: {
                provide: MarkedOptions,
                useValue: {
                    breaks: true,
                },
            },
        }),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
