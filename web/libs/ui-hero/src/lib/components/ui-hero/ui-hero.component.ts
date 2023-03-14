import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '@env/environment';
import { ArticleListResponseDataItemAttributesHeroimage } from '@web/openapi';

@Component({
  selector: 'ui-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-hero.component.html',
  styleUrls: ['./ui-hero.component.scss'],
})
export class UiHeroComponent {

    public imageUrl?: string;
    @Input() public set image(heroImage: ArticleListResponseDataItemAttributesHeroimage | undefined) {
        if(!heroImage) {
            return;
        }

        this.imageUrl = environment.API_URL + heroImage.data?.attributes?.formats.large?.url;
    }

}
