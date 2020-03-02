export interface NewsItem {
     Id?: number;
     Title?: string;
     PubDate?: Date;
     Link?: URL;
     Guid?: URL;
     Author?: string;
     Thumbnail?: string;
     Description?: string;
     Content?: string;
     Enclosure?: {
       link?: URL
  };
}
