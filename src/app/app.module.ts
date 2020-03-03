import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { NavBarComponent } from './html/nav/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { RssRoutingModule } from './routing/rss-routing.module';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/notfound/page-not-found.component';
import { RssRouteActivator } from './routing/rss-activateroute.module';
import {StoreModule} from '@ngrx/store';
import { rssReducer } from './store/reducers/rss.reducer';
import { RssModule } from './shared/rss.module';

@NgModule({
  declarations: [
    NavBarComponent,
    AboutComponent,
    PageNotFoundComponent,
  ],
  imports: [
    RssModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RssRoutingModule,
    StoreModule.forRoot(rssReducer),
  ],
  providers : [RouterModule, RssRouteActivator],
  bootstrap: [NavBarComponent]
})

export class AppModule { }
