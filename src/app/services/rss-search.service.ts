import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewsPost} from '../interfaces/NewsPostInterface';
import { throwError, BehaviorSubject, Observable, pipe} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import { NewsItem } from '../interfaces/NewsItemInterface';


@Injectable({
    providedIn: 'root',
})
export class RssSearchService {

  private data = new BehaviorSubject<NewsPost>(null);
  currentData = this.data.asObservable();
  constructor(private http: HttpClient, private toast: ToastrService){ }
  getJsonObservable(link: string) {
    this.currentData = this.http.
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

getNewsItem(id: number) {
     this.currentData.pipe(map(
       dataItem => {
         const itemlist = dataItem.Items;
         return itemlist.find(item => item.Id === id);
       }));
      }
    }
