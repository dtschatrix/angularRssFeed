import { Component, OnDestroy, OnInit, Input} from '@angular/core';
import { RssSearchService } from '../../services/rss-search.service';
import { ActivatedRoute } from '@angular/router';
import { NewsPost } from '../../interfaces/news-post';
import { Subscription } from 'rxjs';
import { Store} from '@ngrx/store';
import { NewsItem } from 'src/app/interfaces/news-item';

@Component({
  selector: 'app-rss-extra',
  templateUrl: './rss-extra.component.html',
  styleUrls: ['./rss-extra.component.css'],
})

export class RssExtraComponent implements OnDestroy {

  newsPost: NewsItem;
  newsPostFromNgRx: NewsItem;
  subscription: Subscription;
  constructor(private RssService: RssSearchService, private store: Store<NewsPost>, private route: ActivatedRoute) {
    this.subscription = this.RssService.NewsData.subscribe(data => this.newsPost = data.Items
      .find(item => item.Id.toString() === this.route.snapshot.paramMap.get('id')));
  }
  ngOnDestroy(): void {
        this.subscription.unsubscribe();
  }

  LoadData(news: NewsItem): void {
      this.store.dispatch(({
      type: '[News Post] Load Success',
      payload: news,
    }));
  }




}
