import { NewsPostFeatureState } from '../state/news-post-state';
import { createReducer, Action, on} from '@ngrx/store';
import * as fromNewsPost from '../actions/newspost.action';
import { NewsItem } from 'src/app/interfaces/news-item';

export const initialState: NewsPostFeatureState = {
    id: 0,
    description: 'null'
};

export const reducer = createReducer(initialState,
    on(fromNewsPost.LOAD_NEWS_FAILED, state =>
        ({...state,
             id: null,
             description: null}
             )),
    on(fromNewsPost.LOAD_NEWS_SUCCESS, state =>
        ({...state,
        id: state.id,
        description: state.description}))
);

export function NewsPostReducer(state: NewsPostFeatureState, action: Action) {
    return reducer(state, action) as NewsItem;
}
