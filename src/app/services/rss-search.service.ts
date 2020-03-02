import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewsPost} from '../interfaces/news-post';
import { throwError, BehaviorSubject, Observable, pipe} from 'rxjs';
import {catchError, tap, map, first} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class RssSearchService {
  private newsData = new BehaviorSubject<NewsPost>(null);
  get NewsData() {
    return this.newsData.asObservable();
  }
    constructor(private http: HttpClient, private toast: ToastrService) { }

  getJsonObservable(link: string): Observable<NewsPost> {
    this.http.
    get<NewsPost>('https://localhost:44302/api/json/?url=' + link)
    .pipe(
        catchError(err => {
            this.toast.error('Something went wrong. Check the link');
            return throwError(err);
                        }
              ),
        tap(() => this.toast.success('Rss component successfully created')),
        first())
      .subscribe(res =>  this.newsData.next(res));
    return this.newsData;
    }
}
