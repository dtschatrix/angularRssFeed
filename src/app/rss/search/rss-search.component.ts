import { Component} from '@angular/core';
import { RssListComponent } from '../list/rss-list.component';
import {RssSearchService} from './rss-search.service';
import { NewsPost } from '../Interfaces/NewsPostInterface.component';
import { Observable } from 'rxjs';
import { NewsItem } from '../Interfaces/NewsItemInterface.component';

@Component({
  selector: 'app-rss-search',
  templateUrl: './rss-search.component.html',
  providers: [RssListComponent]
})


export class RssSearchComponent {
  rssNewsPost: Observable<NewsPost>;
  public rssItem: Observable<NewsItem>;
  constructor(private rss: RssSearchService) { }
  RunService(link: string) {
    return this.rssNewsPost = this.rss.getJsonObservable(link);
  }
  GetNews(rssNewsPost: Observable<NewsPost>, id: number): Observable<NewsItem> {
    return this.rssItem = this.rss.getNewsItem(this.rssNewsPost, id);
    }

}
