import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { RssComponent } from './rss/rss.component';
import { RssFormComponent} from './rss/rss-search.service'
import { RssInterface} from './rss/RssInterface.component'
import { NavBarComponent } from "./html/nav/nav-bar.component";
import { HttpClientModule } from '@angular/common/http';
import { RssResultComponent } from './rss/rss-result.component';
import { RssListComponent } from './rss-list/rss-list.component';

@NgModule({
  declarations: [
    RssComponent,
    RssFormComponent,
    RssResultComponent,
    NavBarComponent,
    RssListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [RssFormComponent],
  bootstrap: [RssComponent]
})
export class AppModule { }
