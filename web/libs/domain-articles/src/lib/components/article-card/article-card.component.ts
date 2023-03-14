import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListResponseDataItem } from '@web/openapi';
import { environment } from '@env/environment';

@Component({
  selector: 'web-article-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent {

    private _article?: ArticleListResponseDataItem;

    public imageUrl?: string;
    @Input() public set article(article: ArticleListResponseDataItem | undefined){

        if (!article) {
            return;
        }

        this._article = article;

        console.log(article);

        this.imageUrl = environment.API_URL + article.attributes?.heroimage?.data?.attributes?.formats.small.url;
    }
    public get article(): ArticleListResponseDataItem | undefined {
        return this._article;
    }
}
