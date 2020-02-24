import { Component, Input, OnInit} from '@angular/core';
import { NewsPost } from '../Interfaces/NewsPostInterface.component';
import {Observable} from 'rxjs';
import { RssSearchService } from '../search/rss-search.service';
import { NewsItem } from '../Interfaces/NewsItemInterface.component';


@Component({
  selector: 'app-rss-thumbnail',
  templateUrl: './rss-thumbnail.component.html' ,
})


export class RssThumbnailComponent implements OnInit {
  item: NewsPost;
  @Input() RssData: Observable<NewsPost>;
  constructor(private rss: RssSearchService) { }

  ngOnInit(): void {
    this.rss.currentData.subscribe(data => this.item = data);
  }

GetNewsItem(id: number) {
  this.rss.getNewsItem(id);


}

}
