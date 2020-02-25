import { Component, OnInit} from '@angular/core';
import { RssSearchService } from '../../services/rss-search.service';
import { ActivatedRoute } from '@angular/router';
import { NewsItem } from '../../interfaces/NewsItemInterface';

@Component({
  selector: 'app-rss-extra',
  templateUrl: './rss-extra.component.html',
  styleUrls: ['./rss-extra.component.css'],
})

export class RssExtraComponent implements OnInit {
  NewsData: NewsItem;

  constructor(private RssService: RssSearchService, private route: ActivatedRoute) { }

   ngOnInit() {
      this.RssService.currentData.subscribe
      (newsItem => this.NewsData = newsItem.Items
        .find(this.route.snapshot.paramMap.get["Id"]));
   }

}
