import { Injectable } from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import { RssSearchService } from 'src/app/services/rss-search.service';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import {  EMPTY } from 'rxjs';
import { LOAD_NEWS, LOAD_ALL_NEWS } from '../actions/newspost.action';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class RssEffects {
    constructor(private toast: ToastrService, private actions$: Actions, private rssService: RssSearchService) {}

    loadNewsPost$ = createEffect( () =>
    this.actions$.pipe(
    ofType(LOAD_NEWS),
    mergeMap(() => this.rssService.NewsData.pipe(
        map(data => ({type: '[News Post] Load Success', payload: data})),
        catchError(() => tap(() => this.toast.success('Rss component successfully created')))
         )
    )
   )
);

    loadAllNews$ = createEffect(() =>
    this.actions$.pipe(
        ofType(LOAD_ALL_NEWS),
        mergeMap(() => this.rssService.NewsData.pipe(
            map(data => ({type: '[News Post] All Post Loaded', payload: data})),
            catchError(() => EMPTY)
        ))
    ));

}
