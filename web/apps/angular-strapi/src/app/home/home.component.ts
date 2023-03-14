import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContentComponent } from '@web/domain-home';
import { ArticlesComponent } from '@web/domain-articles';

@Component({
  selector: 'web-home',
  standalone: true,
    imports: [CommonModule, HomeContentComponent, ArticlesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

}
