import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RssSearchComponent } from '../rss-search/rss-search.component';
import { AboutComponent } from '../about/about.component';
import { RssListComponent } from '../rss-list/rss-list.component';
//import { PageNotFoundComponent} from './rss-pageNotfound/'

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/rssfeed', pathMatch:'full'},
  {path: 'rssfeed', component: RssListComponent}
  //{path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RssRoutingModule { }
