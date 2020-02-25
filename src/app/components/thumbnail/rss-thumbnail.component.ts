import { Component, Input, OnInit} from '@angular/core';
import { NewsPost } from '../../interfaces/NewsPostInterface';
import {Observable} from 'rxjs';
import { RssSearchService } from '../../services/rss-search.service';
import { RssSearchComponent } from 'src/app/services/rss-search.component';

@Component({
  selector: 'app-rss-thumbnail',
  templateUrl: './rss-thumbnail.component.html' ,
})

export class RssThumbnailComponent implements OnInit {

  @Input() RssData: any;

  item: NewsPost;

  constructor(private rss: RssSearchComponent) {}

  ngOnInit(): void {
  }

  GetNewsItem(id: number) {
    //this.rss.getNewsItem(id);
  }

}
