import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewsItem} from '../Interfaces/NewsItemInterface.component';
import {NewsPost} from '../Interfaces/NewsPostInterface.component';
import { throwError, Observable, pipe} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';


@Injectable({
    providedIn: 'root',
})
export class RssSearchService {
  data: Observable<NewsItem>;
  service: Observable<NewsPost>
  constructor(private http: HttpClient, private toast: ToastrService){ }
  getJsonObservable(link: string) {
    return this.service =  this.http.
    get<NewsPost>('https://localhost:44302/api/json/?url=' + link)
    .pipe(
        catchError(err => {
            this.toast.error('Something went wrong. Check the link');
            return throwError(err);
               }
            ),
        tap(() => this.toast.success('Rss component successfully created'))
        );
  }

   getNewsItem(obs: Observable<NewsPost>, id: any): Observable<NewsItem> {
     return this.data = this.service.pipe(map(
       data => {
         return data['Items'][id];         
       }
     ));
    }
  }
