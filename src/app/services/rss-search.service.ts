import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewsPost} from '../interfaces/NewsPostInterface';
import { throwError, BehaviorSubject, Observable, pipe} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class RssSearchService {

  private NewsData = new BehaviorSubject<NewsPost>(null);
  currentNewsData = this.NewsData.asObservable();

  constructor(private http: HttpClient, private toast: ToastrService) { }

  getJsonObservable(link: string): Observable<NewsPost> {
    this.currentNewsData = this.http.
    get<NewsPost>('https://localhost:44302/api/json/?url=' + link)
    .pipe(
        catchError(err => {
            this.toast.error('Something went wrong. Check the link');
            return throwError(err);
               }
            ),
        tap(() => this.toast.success('Rss component successfully created'))
        );
    return this.currentNewsData;
  }

  updateDataSelection(data): void {
    this.NewsData.next(data);
  }

}
