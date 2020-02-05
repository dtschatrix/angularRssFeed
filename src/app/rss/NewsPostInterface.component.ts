export interface NewsPost {
    title?: string,
    pubDate?: Date,
    link?: URL,
    guid?: URL,
    author?: string,
    thumbnail?: string,
    description?: string,
    content?: string,
    enclosure?:{
      link? : URL
        },
    categories?: string[]
  }
