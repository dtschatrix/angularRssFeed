import { createAction, props } from '@ngrx/store';
import { NewsPostState } from '../state/news-post-state';

export const LOAD_NEWS_SUCCESS = createAction('[NewsPost] Load Success',
props<{payload: NewsPostState}>());
export const LOAD_NEWS_FAILED = createAction('[NewsPost] Load Failed',
props<{payload: any}>());

