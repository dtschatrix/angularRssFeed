import * as fromRss from '../actions/rss.action';
import { RssState } from 'src/app/store/state/rss-state';
export const initialState: RssState = {
    data: [
          {
            Id: 1391,
            Title: 'Coronavirus Live Updates: Officials Rush to Respond to a Drumbeat of New Cases',
            PubDate: new Date('2020-02-28T14:29:19'),
            Link: new URL('https://www.nytimes.com/2020/02/28/world/coronavirus-news.html'),
            Guid: new URL('https://www.nytimes.com/2020/02/28/world/coronavirus-news.html'),
            Author: '',
            Thumbnail: '',
            Description: 'More than 83,000 people in at least 53 countries have been infected. Many patients are linked to Iran or Italy.',
            Content: 'More than 83,000 people in at least 53 countries have been infected. Many patients are linked to Iran or Italy.'
          } ],
    loaded: false,
    loading: false
        };

export const getRssFeatureState = (state: RssState) => state.loaded;

export function rssReducer(
    state = initialState,
    action: fromRss.RssActions
): RssState {
    switch (action.type) {
        case fromRss.LOAD_NEWSITEM: {
            console.log('existing state: ', JSON.stringify(state));
            console.log('payload: ', action.type);
            return {
                ...state,
                loading: true
            };
        }
        case fromRss.LOAD_NEWSITEM_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true
            };
        }
        case fromRss.LOAD_NEWSITEM_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }
}
