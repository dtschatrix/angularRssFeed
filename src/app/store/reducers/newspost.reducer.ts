
import { createReducer, Action, on} from '@ngrx/store';
import * as fromNewsPost from '../actions/newspost.action';
import { NewsItem } from 'src/app/interfaces/news-item';
import { NewsPost } from 'src/app/interfaces/news-post';

export const newsItemInitialState: NewsItem = {
        Id: 1391,
        Title: 'Coronavirus Live Updates: Officials Rush to Respond to a Drumbeat of New Cases',
        PubDate: new Date('2020-02-28T14:29:19'),
        Link: new URL('https://www.nytimes.com/2020/02/28/world/coronavirus-news.html'),
        Guid: new URL('https://www.nytimes.com/2020/02/28/world/coronavirus-news.html'),
        Author: '',
        Thumbnail: '',
        Description: 'More than 83,000 people in at least 53 countries have been infected. Many patients are linked to Iran or Italy.',
        Content: 'More than 83,000 people in at least 53 countries have been infected. Many patients are linked to Iran or Italy.'

};
export const newsPostInitialState: NewsPost = {
    NewsId: 1,
    Message: 'This is test NewsPost as Initial State',
    Status: 'Dead',
    Feed: null,
    Items: null,
};

export const newsItemReducer = createReducer<NewsItem>(newsItemInitialState,
    on(fromNewsPost.LOAD_NEWS_FAILED, state =>
        ({...state,
             id: null,
             description: null}
             )),
    on(fromNewsPost.LOAD_NEWS_SUCCESS, state =>
        ({...state,
        }))
);

export const newsPostReducer = createReducer<NewsPost>(newsPostInitialState,
    on(fromNewsPost.LOAD_ALL_NEWS, state =>
        ({...state,
            NewsId: state.NewsId,
            Message: state.Message,
            Status: state.Status,
            Feed: null,
            Items: null,

        })));

export function NewsItemReducer(state: NewsItem, action: Action) {
    return newsItemReducer(state, action);
}
export function NewsPostReducer(state: NewsPost, action: Action) {
    return newsPostReducer(state, action);
}

