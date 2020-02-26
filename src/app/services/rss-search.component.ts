import { Component} from '@angular/core';
import {RssSearchService} from './rss-search.service';
import { NewsPost } from '../interfaces/NewsPostInterface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rss-search',
  templateUrl: './rss-search.component.html',
  providers: []
})

export class RssSearchComponent {

  rssNewsPost: Observable<NewsPost>;

  constructor(private rss: RssSearchService) { }

  RunService(link: string) {
    this.rssNewsPost = this.rss.getJsonObservable(link);
    this.rss.updateDataSelection(this.rssNewsPost);
  }

}
