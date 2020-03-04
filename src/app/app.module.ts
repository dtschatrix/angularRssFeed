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
import { StoreModule } from '@ngrx/store';
import { RssModule } from './shared/rss.module';
import { NewsItemReducer } from './store/reducers/newspost.reducer';
import { RssEffects} from './store/effects/rss.effects';
import { EffectsModule } from '@ngrx/effects';

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
    StoreModule.forRoot({news: NewsItemReducer}),
    EffectsModule.forRoot([RssEffects])
  ],
  providers : [RouterModule, RssRouteActivator],
  bootstrap: [NavBarComponent]
})

export class AppModule { }
