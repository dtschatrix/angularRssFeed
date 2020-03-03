import { Component, OnDestroy, OnInit, Input} from '@angular/core';
import { RssSearchService } from '../../services/rss-search.service';
import { ActivatedRoute } from '@angular/router';
import { NewsItem } from '../../interfaces/news-item';
import { Subscription } from 'rxjs';
import { Store, select} from '@ngrx/store';
import * as fromNewsPost from '../../store/reducers/newspost.reducer';
import { NewsPost } from 'src/app/interfaces/news-post';
import { NewsPostFeatureState } from 'src/app/store/state/news-post-state';
import { LOAD_NEWS_SUCCESS } from 'src/app/store/actions/newspost.action';

@Component({
  selector: 'app-rss-extra',
  templateUrl: './rss-extra.component.html',
  styleUrls: ['./rss-extra.component.css'],
})

export class RssExtraComponent implements OnDestroy, OnInit {
  newsPost: NewsItem;
  newsPostFromNgRx: NewsItem;
  subscription: Subscription;
  constructor(private RssService: RssSearchService, private store: Store<NewsPostFeatureState>, private route: ActivatedRoute) {
    this.subscription = this.RssService.NewsData.subscribe(data => this.newsPost = data.Items
      .find(item => item.Id.toString() === this.route.snapshot.paramMap.get('id'))); 
  }
  ngOnDestroy(): void {
        this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    // this.LoadData(this.newsPost);
    this.subscription =  this.store.pipe(select(fromNewsPost.NewsPostReducer)).subscribe(
      data => this.newsPostFromNgRx = {Id: data.Id, Description: data.Description });
  }
  // LoadData(news: NewsItem): void { 
  //   this.store.dispatch(LOAD_NEWS_SUCCESS({
  //     payload: news; 
  //   });
  // }




}
