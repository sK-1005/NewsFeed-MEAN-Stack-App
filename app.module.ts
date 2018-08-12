import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module'
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewsService } from './core/news.service';
import { HomeComponent } from './home/home.component';
import { FeedCardComponent } from './home/feed-card/feed-card.component';
import { FeedComponent } from './home//feed/feed.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule, FormsModule, HttpClientModule, HomeModule],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
