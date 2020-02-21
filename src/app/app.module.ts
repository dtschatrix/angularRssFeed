import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { NavBarComponent } from './html/nav/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { RssListComponent } from './rss/list/rss-list.component';
import { RssThumbnailComponent } from './rss/thumbnail/rss-thumbnail.component';
import { RssSearchComponent } from './rss/search/rss-search.component';
import { ToastrModule } from 'ngx-toastr';
import { RssRoutingModule } from './rss/rss-routing.module';
import { RssExtraComponent } from './rss/extra/rss-extra.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app/app.component';


@NgModule({
  declarations: [
    NavBarComponent,
    RssListComponent,
    RssThumbnailComponent,
    RssSearchComponent,
    AboutComponent,
    RssExtraComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    RssRoutingModule,
    ToastrModule.forRoot(),
  ],
  providers : [],
  bootstrap: [NavBarComponent]
})
export class AppModule { }
