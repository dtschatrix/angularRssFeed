import { Component,Input} from "@angular/core";
import {RssSearchService} from '../rss-search/rss-search.service';
import { RssListComponent } from '../rss-list/rss-list.component';
import { RssInterface } from '../rss/RssInterface.component';
import {Observable} from 'rxjs';



@Component({
  selector: "rss-thumbnail",
  templateUrl:"./rss-thumbnail.component.html" ,
   providers:[RssListComponent]
})


export class RssThumbnailComponent{
  public rssObserv: Observable<RssInterface>;
  //public NewsObserv: Observable<NewsPost>
  constructor(private RssObs: RssSearchService ){
    /* this.rssObserv = this.RssObs.getJsonObservable("http://feeds.twit.tv/brickhouse.xml"); */
  }
  @Input() RssData:Observable<RssInterface>;
  @Input() test_string: string;


  }


