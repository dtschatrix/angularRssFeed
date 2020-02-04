import { Component, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http"
import {RssInterface} from "../rss/RssInterface.component"
import {  throwError} from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'rss-search-service',
  template: ``


})
@Injectable()
export class RssSearchService {
  constructor(private http: HttpClient, private toast:ToastrService){ }
  apiCall: URL =  new URL("https://api.rss2json.com/v1/api.json?rss_url=");
  api_key: string = "n88tzqqjieiebw9djqqzmmnon9i6zwpljp3yorzc";

  getFullUrl(link:string): string{
    return this.apiCall + link + "&" + this.api_key;
  }
  getJsonObservable(link:string){
    return this.http.
    get<RssInterface>(this.getFullUrl(link))
    .pipe(
        catchError(err => {
            this.toast.error("Something went wrong. Check the link");
            return throwError(err);
               }
            ),
        tap(() => this.toast.success("Rss component successfully created"))
        );
              }
   
  /*  getItemByTitle(rss:RssInterface){
      return .pipe(
        map(find(item => rss.items.title === title))
      ) 
    }        */
   }
