import { Component, Injectable, OnInit } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import {RssInterface} from "./RssInterface.component"
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'rss-search',
  templateUrl: './rss-search.component.html' ,

})
@Injectable()
export class RssFormComponent {
  constructor(private http: HttpClient){ }
  apiCall: URL =  new URL("https://api.rss2json.com/v1/api.json?rss_url=");
  api_key: string = "n88tzqqjieiebw9djqqzmmnon9i6zwpljp3yorzc";


  getFullUrl(link:string){
    console.log(this.apiCall + link + "&" + this.api_key);
    return this.apiCall + link + "&" + this.api_key;
  }
  getJsonObservable(link:string): Observable<RssInterface>{
    return this.http.get<RssInterface>(this.getFullUrl(link));
  }


}


