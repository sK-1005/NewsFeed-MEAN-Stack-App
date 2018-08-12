import { Component, Input } from '@angular/core';

import { NewsItem } from '../../core';

@Component({                                            
  selector: 'app-feed',
  template: `
<app-feed-card *ngFor="let item of news.existingFeeds | filter:filterStatus:'title':'user':'url'" [news]="item"></app-feed-card>
  `,
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  @Input() news: NewsItem[] = []; 
  @Input() filterStatus: string;    

  trackingFn(index: number, item: NewsItem) {
    return item.id;
  }
}
