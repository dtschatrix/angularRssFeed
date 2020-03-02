import {Router, CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import {RssSearchService} from '../services/rss-search.service';

@Injectable()
export class RssRouteActivator implements CanActivate {
    constructor(private rss: RssSearchService, private router: Router) { }

    canActivate() {
        const rssExists = !!this.rss.NewsData;
        if (!rssExists) {
            this.router.navigate(['/404']);
        }
        return rssExists;
    }
}
