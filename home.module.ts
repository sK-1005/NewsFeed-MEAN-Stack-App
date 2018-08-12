import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';

import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { FeedComponent } from './feed/feed.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { RegisterNewsComponent } from '../register-news/register-news.component';
import { FilterPipe } from './filter.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, FormsModule, ModalModule.forRoot()],
  exports: [HomeComponent],
  declarations: [HomeComponent, FeedComponent, FeedCardComponent, RegisterNewsComponent, FilterPipe]
})

export class HomeModule {}
