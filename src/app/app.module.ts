import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { NavBarComponent } from './html/nav/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { RssThumbnailListComponent } from './components/thumbnail-list/rss-thumbnail-list.component';
import { RssSearchComponent } from './components/search/rss-search.component';
import { ToastrModule } from 'ngx-toastr';
import { RssRoutingModule } from './routing/rss-routing.module';
import { RssExtraComponent } from './components/extra/rss-extra.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/notfound/page-not-found.component';
import { RssRouteActivator } from './routing/rss-activateroute.module';

@NgModule({
  declarations: [
    NavBarComponent,
    RssThumbnailListComponent,
    RssSearchComponent,
    AboutComponent,
    RssExtraComponent,
    PageNotFoundComponent
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
  providers : [RouterModule, RssRouteActivator],
  bootstrap: [NavBarComponent]
})

export class AppModule { }
