import { Component, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http"
import {RssInterface} from "../rss/RssInterface.component"
import { Subject, Observable } from 'rxjs';
import { NewsPost } from '../rss/NewsPostInterface.component';

@Component({
  selector: 'rss-search-service',
  template: ``


})
@Injectable()
export class RssSearchService {
  constructor(private http: HttpClient){ }
  apiCall: URL =  new URL("https://api.rss2json.com/v1/api.json?rss_url=");
  api_key: string = "n88tzqqjieiebw9djqqzmmnon9i6zwpljp3yorzc";
  test: any;

  getFullUrl(link:string): string{
    return this.apiCall + link + "&" + this.api_key;
  }
  getJsonObservable(link:string): Observable<RssInterface>{
    return this.http.get<RssInterface>(this.getFullUrl(link));
    //return this.http.get<NewsPost>(this.getFullUrl(link));
  }
}
