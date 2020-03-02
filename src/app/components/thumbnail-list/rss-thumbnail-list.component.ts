import { Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import { RssSearchComponent } from 'src/app/components/search/rss-search.component';
import { NewsItem } from 'src/app/interfaces/NewsItemInterface';

@Component({
  selector: 'app-rss-thumbnail-list',
  templateUrl: './rss-thumbnail-list.component.html' ,
})

export class RssThumbnailListComponent {

  @Input() rssData: any;
  newsItem: Observable<NewsItem>;

  constructor(private rss: RssSearchComponent) {}

}
