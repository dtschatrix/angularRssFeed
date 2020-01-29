import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rss',
  template: '<nav-bar></nav-bar><rss-search></rss-search>'
})
export class RssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
