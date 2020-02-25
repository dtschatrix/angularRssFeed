import { Component, Input, OnInit} from '@angular/core';
import { NewsPost } from '../../interfaces/NewsPostInterface';
import {Observable} from 'rxjs';
import { RssSearchService } from '../../services/rss-search.service';

@Component({
  selector: 'app-rss-thumbnail',
  templateUrl: './rss-thumbnail.component.html' ,
})

export class RssThumbnailComponent implements OnInit {

  @Input() RssData: Observable<NewsPost>;

  item: NewsPost;

  constructor(private rss: RssSearchService) { }

  ngOnInit(): void {
    this.rss.currentData.subscribe(data => this.item = data);
  }

  GetNewsItem(id: number) {
    this.rss.getNewsItem(id);
  }

}
