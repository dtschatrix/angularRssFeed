import { Component, Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import {RssFormComponent} from './rss-search.service';
import {RssInterface} from './RssInterface.component';


@Component({
  selector: "rss-result",
  template: `
  <div class ="p-3 mb-2 bg-info text-black container">
<div class="input-group mb-3">
  <input #box type="text" class="form-control" placeholder="URL" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button class="btn btn-primary" type="button"(click) = "getJsonObservable(box.value)">ShowResult</button>
    <button class="btn btn-primary" type="button"(click) = "getFullUrl(box.value)">ssss</button>
  </div>
</div>
</div>
<div>
</div>

  <button class="btn btn-primary" type="button"(click) = "getData(box.value)"></button>
  <ul>

  <h2>result's are definitely here </h2>
  <p> rss: {{rss?.status}} </p>
              <li>
              <p>{{rss?.status}}
              </li>
              </ul>`,
   providers:[RssFormComponent]
})


export class RssResultComponent{
  public rss: RssInterface;

  constructor(private RssObs: RssFormComponent ){}

  getData(link:string): void{
    this.RssObs.getJsonObservable(link).subscribe(name => this.rss = name)
  }
}
