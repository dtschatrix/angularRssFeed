import { Component, Input} from '@angular/core';
import { RssListComponent } from '../list/rss-list.component';
import { NewsPost } from '../Interfaces/NewsPostInterface.component';
import { RssSearchService } from '../search/rss-search.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NewsItem } from '../Interfaces/NewsItemInterface.component';


@Component({
  selector: 'app-rss-extra',
  templateUrl: './rss-extra.component.html',
  styleUrls: ['./rss-extra.component.css'],
  providers: [RssListComponent]
})


export class RssExtraComponent {
   data: Observable<NewsItem>;
  constructor(private RssService: RssSearchService, private route: ActivatedRoute) {
     const id: any = route.snapshot.params.Id;
     this.data = RssService.getNewsItem(this.RssData, id);
   }
  @Input() RssData: Observable<NewsPost>;
}
