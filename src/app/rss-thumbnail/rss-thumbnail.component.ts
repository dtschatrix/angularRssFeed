import { Component, OnInit, AfterViewInit} from "@angular/core";
import {RssSearchService} from '../rss-search/rss-search.service';
import {NewsPost} from '../rss/NewsPostInterface.component';
import { RssListComponent } from '../rss-list/rss-list.component';
import { RssInterface } from '../rss/RssInterface.component';


@Component({
  selector: "rss-thumbnail",
  templateUrl:"./rss-thumbnail.component.html" ,
   providers:[RssListComponent]
})


export class RssThumbnailComponent{
  public data : NewsPost[];
  public rss : RssInterface;
  //public rssObserv: Observable<RssInterface>
  //public NewsObserv: Observable<NewsPost>
  //test = this.RssObs.getJsonObservable("http://feeds.twit.tv/brickhouse.xml").pipe(map(info =>this.rss = info));
  constructor(private RssObs: RssSearchService ){
    //this.RssObs.getJsonObservable(this.RssObs.test).subscribe(status => this.rss.message = status.message);
  }

  getData(link:string): void{
    //this.RssObs.getJsonObservable(link).subscribe(name =>this.data = name);
    //this.NewsObserv = this.RssObs.getJsonObservable(link).pipe(map(rss => this.data = rss.));
    //this.RssObs.getJsonObservable(link).pipe(map(info => info.message));
  }


  }


