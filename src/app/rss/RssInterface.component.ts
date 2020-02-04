
export interface RssInterface {
  message?: string,
  status? : string,
  feed? : {
    url?: string,
    title?: string,
    link?: URL,
    author?: string,
    description?: string,
    image?: URL
  },
  items?: [{
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
  }]
}


