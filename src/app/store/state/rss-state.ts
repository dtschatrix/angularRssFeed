import { NewsItem } from '../../interfaces/news-item';

export interface RssState {
    data: NewsItem[];
    loaded: boolean;
    loading: boolean;
}
