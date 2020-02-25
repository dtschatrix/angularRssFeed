import { Component} from '@angular/core';
import {RssSearchService} from './rss-search.service';

@Component({
  selector: 'app-rss-search',
  templateUrl: './rss-search.component.html',
  providers: []
})

export class RssSearchComponent {

  data: any;
  constructor(private rss: RssSearchService) { }

  RunService(link: string) {
  return this.rss.getJsonObservable(link);
  }

  GetNews(id: number) {
    return this.rss.getNewsItem(id);
  }


}
