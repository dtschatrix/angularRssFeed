import { Component, Input} from '@angular/core';
import { NewsPost } from '../Interfaces/NewsPostInterface.component';
import {Observable} from 'rxjs';
import { RssSearchService } from '../search/rss-search.service';


@Component({
  selector: 'app-rss-thumbnail',
  templateUrl: './rss-thumbnail.component.html' ,
})


export class RssThumbnailComponent {
  @Input() RssData: Observable<NewsPost>;
  constructor(private rss: RssSearchService) { }
  GetNews(rssNewsPost: Observable<NewsPost>, id: number) {
      return this.rss.getNewsItem(rssNewsPost, id);
  }
}


