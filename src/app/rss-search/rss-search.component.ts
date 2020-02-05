import { Component, Input, Output } from '@angular/core';
import { RssListComponent } from '../rss-list/rss-list.component';
import {RssSearchService} from './rss-search.service';
import { RssInterface } from '../rss/RssInterface.component';
import { Observable } from 'rxjs';
import { NewsPost } from '../rss/NewsPostInterface.component';

@Component({
  selector: 'rss-search-component',
  templateUrl: './rss-search.component.html',
  providers:[RssListComponent]
})


export class RssSearchComponent {
  rssData:Observable<RssInterface>;
  rssNews:Observable<NewsPost>;
  constructor(private rss:RssSearchService) { }
  RunService(link){
    this.rssData = this.rss.getJsonObservable(link);
  }
  GetNews(link){
    this.rssNews = this.rss.getNewsPostObservable(link);
  }

}
