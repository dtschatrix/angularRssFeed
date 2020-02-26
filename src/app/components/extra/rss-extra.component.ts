import { Component, OnInit, Input} from '@angular/core';
import { RssSearchService } from '../../services/rss-search.service';
import { ActivatedRoute } from '@angular/router';
import { NewsItem } from '../../interfaces/NewsItemInterface';

@Component({
  selector: 'app-rss-extra',
  templateUrl: './rss-extra.component.html',
  styleUrls: ['./rss-extra.component.css'],
})

export class RssExtraComponent {
  NewsPost: NewsItem;

  constructor(private RssService: RssSearchService, private route: ActivatedRoute) {
    this.RssService.currentNewsData.subscribe(data => this.NewsPost = data.Items
      .find(item => item.Id.toString() === this.route.snapshot.paramMap.get("id")));
  }

}
