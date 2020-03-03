import { NewsPostState, NewsPostFeatureState } from '../state/news-post-state';
import { NewsPost } from 'src/app/interfaces/news-post';
import { createSelector} from '@ngrx/store';

const featureState = (state: NewsPostState) => state.feature;

export const selectId = createSelector(
    featureState,
    (state: NewsPostFeatureState) => state.id
);