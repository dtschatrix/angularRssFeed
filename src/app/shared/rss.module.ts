import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {StoreModule } from '@ngrx/store';
import { RssRoutingModule } from '../routing/rss-routing.module';
import { RssThumbnailListComponent } from '../components/thumbnail-list/rss-thumbnail-list.component';
import { RssSearchComponent } from '../components/search/rss-search.component';
import { ToastrModule } from 'ngx-toastr';
import { RssExtraComponent } from '../components/extra/rss-extra.component';
import { NewsItemReducer } from '../store/reducers/newspost.reducer';

@NgModule({
    declarations: [
        RssThumbnailListComponent,
        RssSearchComponent,
        RssExtraComponent
    ],
    imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RssRoutingModule,
    StoreModule.forFeature('NewsPost', NewsItemReducer),
    ToastrModule.forRoot()
    ],
    providers: [],
})
export class RssModule {}
