import { Component, OnInit } from '@angular/core';
import { RssSearchService } from '../rss-search/rss-search.service';

@Component({
  selector: 'app-rss-extra',
  templateUrl: './rss-extra.component.html',
  styleUrls: ['./rss-extra.component.css']
})
export class RssExtraComponent implements OnInit {
  event:any;
  constructor(private rss:RssSearchService) { }

  ngOnInit() {
      //this.event = this.rss.getJsonObservable()
  }

}
