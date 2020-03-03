import { Component, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { RssSearchComponent } from 'src/app/components/search/rss-search.component';
import { NewsItem } from 'src/app/interfaces/news-item';
import { Store } from '@ngrx/store';
import * as fromRss from '../../store/state/rss-state';

@Component({
  selector: 'app-rss-thumbnail-list',
  templateUrl: './rss-thumbnail-list.component.html' ,
})

export class RssThumbnailListComponent {

  @Input() rssData: any;
  newsItem: Observable<NewsItem>;
  displayCode: boolean;
  constructor(private store: Store<fromRss.RssState>, private rss: RssSearchComponent) {}

  checkChanged(value: boolean): void {
    this.store.dispatch({
      type: '[RssData] Load NewsItem',
      payload: value
    });
  }

}
