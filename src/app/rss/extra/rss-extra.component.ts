import { Component, Input, OnInit} from '@angular/core';
import { RssSearchService } from '../search/rss-search.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NewsItem } from '../Interfaces/NewsItemInterface.component';


@Component({
  selector: 'app-rss-extra',
  templateUrl: './rss-extra.component.html',
  styleUrls: ['./rss-extra.component.css'],
})


export class RssExtraComponent implements OnInit {
  NewsData:Observable<NewsItem>
  constructor(private RssService: RssSearchService, private route: ActivatedRoute) {
     
   }

   ngOnInit(){
      this.NewsData = this.RssService.data;


   }
}
