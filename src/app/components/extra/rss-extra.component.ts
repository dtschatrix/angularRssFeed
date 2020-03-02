import { Component, OnDestroy} from '@angular/core';
import { RssSearchService } from '../../services/rss-search.service';
import { ActivatedRoute } from '@angular/router';
import { NewsItem } from '../../interfaces/NewsItemInterface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rss-extra',
  templateUrl: './rss-extra.component.html',
  styleUrls: ['./rss-extra.component.css'],
})

export class RssExtraComponent implements OnDestroy {
  newsPost: NewsItem;
  subscription: Subscription;
  constructor(private RssService: RssSearchService, private route: ActivatedRoute) {
    this.subscription = this.RssService.NewsData.subscribe(data => this.newsPost = data.Items
      .find(item => item.Id.toString() === this.route.snapshot.paramMap.get('id')));
  }
  ngOnDestroy(): void {
        this.subscription.unsubscribe();
  }


}
