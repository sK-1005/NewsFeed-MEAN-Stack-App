import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { NewsItem } from '../../core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-feed-card',
  template: `
    <app-card>
      <h4>{{ news.title }}</h4>

      <div class="domain">{{ news.domain }}</div>

      <div class="points">{{ news.points }}</div>

      by <span class="author">{{ news.user }}</span>

      <span class="time-ago">{{ news.time_ago }}</span>
    </app-card>
  `,
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent {
  @Input() news: NewsItem;
}
