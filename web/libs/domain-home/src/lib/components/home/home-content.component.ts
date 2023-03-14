import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { UiHeroComponent } from '@web/ui-hero';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'web-home-content',
  standalone: true,
    imports: [CommonModule, UiHeroComponent, MarkdownModule],
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
})
export class HomeContentComponent {
    public content$;
    constructor(protected _homeService: HomeService) {
        this.content$ = this._homeService.getHomeData$();
    }
}
