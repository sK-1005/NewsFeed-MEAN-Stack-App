import { Component, OnInit } from '@angular/core';

import { NewsService, NewsItem } from '../core';

import { Injectable, Inject, forwardRef} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <app-register-news></app-register-news>

    <div class="input-container">
      <input type="text" placeholder="Search News" #search (keyup)="onKeyUp(search.value)">
    </div>

    <app-feed *ngIf="!loading" [news]="news" [filterStatus] = "filterStatus"></app-feed> 

    <app-loader *ngIf="loading"></app-loader>
  `,
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  loading = false;
  news: NewsItem[] = [];
  filterStatus: string = '';

  constructor(private hn: NewsService) {}

  ngOnInit() {
    this.loading = true;

    this.hn.get().subscribe(data => {
    
      this.loading = false;
      this.news = data;
        if(this.news){
        }else{
        }
    });
  }

  onKeyUp(value: string) {
      this.filterStatus = value;
  }
}

