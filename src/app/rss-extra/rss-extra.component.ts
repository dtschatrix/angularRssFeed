import { Component, OnInit, Input } from '@angular/core';
import { RssListComponent } from '../rss-list/rss-list.component';
import { NewsPost } from '../rss/NewsPostInterface.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'rss-extra',
  templateUrl: './rss-extra.component.html',
  styleUrls: ['./rss-extra.component.css'],
  providers:[RssListComponent]
})


export class RssExtraComponent {
  constructor() { }
  @Input() NewsPost:NewsPost
  
}
