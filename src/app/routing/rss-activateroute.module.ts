import {Router, ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import {RssSearchService} from '../services/rss-search.service';

@Injectable()
export class RssRouteActivator implements CanActivate {
    constructor(private rss: RssSearchService, private router: Router) { }

    canActivate() {
        const RssExists = !!this.rss.currentData;
        if (!RssExists) {
            this.router.navigate(['/404']);
        }
        return RssExists;
    }
}