import { NewsItem } from './NewsItemInterface.component';

export interface NewsPost {
   NewsId?: number;
   Message?: string;
   Status?: string;
   Feed?: {
     Id?: number,
     Url?: string,
     Title?: string,
     Link?: URL,
     Author?: string,
     Description?: string,
     Image?: URL
   };
   Items?: NewsItem[];
}
