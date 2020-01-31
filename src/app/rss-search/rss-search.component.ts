import { Component, Input } from '@angular/core';
import { RssListComponent } from '../rss-list/rss-list.component';
import {RssSearchService} from './rss-search.service';
import { RssThumbnailComponent } from '../rss-thumbnail/rss-thumbnail.component';

@Component({
  selector: 'rss-search-component',
  templateUrl: './rss-search.component.html',
  providers:[RssListComponent]
})


export class RssSearchComponent {
@Input()
rssfeed: RssThumbnailComponent;
  constructor(private rss:RssSearchService) { }
  test_field: any;
  SetServiceField(full_path:string){
    this.test_field = this.rss.setTest(full_path);
    console.log(this.test_field);
    console.log(this.rss.test);
  }


}
