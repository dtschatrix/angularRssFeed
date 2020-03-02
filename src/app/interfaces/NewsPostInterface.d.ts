import { NewsItem } from './NewsItemInterface';
import { Feed } from './FeedItemInterface';

export interface NewsPost {
   NewsId?: number;
   Message?: string;
   Status?: string;
   Feed?: Feed;
   Items?: NewsItem[];
}
