import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'rss-search',
  templateUrl: './rss-search.component.html' ,

})

export class RssFormComponent{
  name = new FormControl('');


}
