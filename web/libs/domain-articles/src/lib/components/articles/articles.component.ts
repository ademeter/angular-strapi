import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../services/article.service';
import { ArticleCardComponent } from '../article-card/article-card.component';

@Component({
  selector: 'web-articles',
  standalone: true,
    imports: [CommonModule, ArticleCardComponent],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent {

    public articles$;

    constructor(protected _articlesService: ArticleService) {
        this.articles$ = this._articlesService.getArticles$();
    }

    public trackByFn: (index: number) => number = (index: number) => index;

}
