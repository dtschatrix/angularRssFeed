import { Action } from '@ngrx/store';
import { NewsPost } from 'src/app/interfaces/news-post';

export const LOAD_NEWSITEM = '[RssData] Load NewsItem';
export const LOAD_NEWSITEM_FAIL = '[RssData] Load NewsItem Failed';
export const LOAD_NEWSITEM_SUCCESS = '[RssData] Load NewsItem Success';

export class LoadRss implements Action {
    readonly type = LOAD_NEWSITEM;
}

export class LoadRssFail implements Action {
    readonly type = LOAD_NEWSITEM_FAIL;
    constructor(public payload: any) {}
}

export class LoadRssSuccess implements Action {
    readonly type = LOAD_NEWSITEM_SUCCESS;
    constructor(public payload: NewsPost) {}
}

export type RssActions = LoadRss | LoadRssFail | LoadRssSuccess;
