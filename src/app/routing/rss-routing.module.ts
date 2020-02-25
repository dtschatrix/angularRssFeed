import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { RssExtraComponent } from '../components/extra/rss-extra.component';
import {PageNotFoundComponent} from '../components/notfound/page-not-found.component';
import { RssRouteActivator } from './rss-activateroute.module';
import { RssSearchComponent } from '../services/rss-search.component';

const routes: Routes = [
  {path: '', component: RssSearchComponent},
  {path: 'about', component: AboutComponent},
  {path: 'feed/:id', component: RssExtraComponent},
  {path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RssRoutingModule { }
