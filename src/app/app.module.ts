import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RssComponent } from './rss/rss.component';
import { RssFormComponent} from './rss/rss-search.form'

import { NavBarComponent } from "./html/nav/nav-bar.component";

@NgModule({
  declarations: [

  RssComponent,
  RssFormComponent,
  NavBarComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RssComponent]
})
export class AppModule { }
