import { createAction, props } from '@ngrx/store';
import { NewsPost } from 'src/app/interfaces/news-post';
import { NewsItem } from 'src/app/interfaces/news-item';

export const LOAD_NEWS = createAction('[News Post] Load');
export const LOAD_NEWS_SUCCESS = createAction('[NewsPost] Load Success',
props<{payload: NewsItem}>());
export const LOAD_NEWS_FAILED = createAction('[NewsPost] Load Failed',
props<{payload: any}>());
export const LOAD_ALL_NEWS = createAction('[News Post] All Post Loaded',
props<{payload: NewsPost}>());

