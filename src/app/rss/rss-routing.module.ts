import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { RssListComponent } from './list/rss-list.component';
import { RssExtraComponent } from './extra/rss-extra.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'extra', component: RssExtraComponent},
  {path: '', redirectTo: '/rssfeed', pathMatch:'full'},
  {path: 'rssfeed', component: RssListComponent},
  {path: 'rssfeed/:Id', component: RssExtraComponent}
  //{path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RssRoutingModule { }
