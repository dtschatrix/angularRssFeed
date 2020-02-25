import { Component} from '@angular/core';
import {RssSearchService} from './rss-search.service';
import { Observable } from 'rxjs';
import { NewsPost } from '../interfaces/NewsPostInterface';

@Component({
  selector: 'app-rss-search',
  templateUrl: './rss-search.component.html',
  providers: []
})

export class RssSearchComponent {

  rssItem: any;
  constructor(private rss: RssSearchService) { }

  RunService(link: string) {
   let data = this.rss.getJsonObservable(link);
   this.rssItem =  this.rss.updateData(data);
   return this.rssItem;
  }

  GetNews(id: number) {
    return this.rss.getNewsItem(id);
  }


}
