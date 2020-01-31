import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { NavBarComponent } from "./html/nav/nav-bar.component";
import { HttpClientModule } from '@angular/common/http';
import { RssListComponent } from './rss-list/rss-list.component';
import { RssThumbnailComponent } from './rss-thumbnail/rss-thumbnail.component';
import { RssSearchService } from './rss-search/rss-search.service';

@NgModule({
  declarations: [
    NavBarComponent,
    RssListComponent,
    RssThumbnailComponent,
    RssSearchService,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [RssSearchService],
  bootstrap: [RssListComponent]
})
export class AppModule { }
