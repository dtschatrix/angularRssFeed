import { Component} from '@angular/core';
import {RssSearchService} from '../../services/rss-search.service';
import { NewsPost } from '../../interfaces/news-post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rss-search',
  templateUrl: './rss-search.component.html',
  providers: []
})

export class RssSearchComponent {

 public rssNewsPost: Observable<NewsPost>;


  constructor(private rss: RssSearchService) { }

  RunService(link: string) {
    this.rssNewsPost = this.rss.getJsonObservable(link);
  }

}
