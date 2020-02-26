import { Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { RssSearchComponent } from 'src/app/services/rss-search.component';
import { NewsItem } from 'src/app/interfaces/NewsItemInterface';

@Component({
  selector: 'app-rss-thumbnail',
  templateUrl: './rss-thumbnail.component.html' ,
})

export class RssThumbnailComponent {

  @Input() RssData: any;
  newsItem: Observable<NewsItem>;

  constructor(private rss: RssSearchComponent) {}

}
