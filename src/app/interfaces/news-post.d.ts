import { NewsItem } from './news-item';
import { Feed } from './feed';

export interface NewsPost  {
   NewsId?: number;
   Message?: string;
   Status?: string;
   Feed?: Feed;
   Items?: NewsItem[];
}
