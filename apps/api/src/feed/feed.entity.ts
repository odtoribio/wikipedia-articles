export interface Response {
  tfa?: Tfa | null;
  mostread: Mostread;
  news?: News[] | null;
  image: Image;
  onthisday?: Onthisday[] | null;
}
export interface Tfa {
  type: string;
  title: string;
  displaytitle: string;
  namespace: Namespace;
  wikibase_item: string;
  titles: Titles;
  pageid: number;
  thumbnail: Thumbnail;
  originalimage: Thumbnail;
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  description: string;
  description_source: string;
  coordinates: Coordinates;
  content_urls: ContentUrls;
  extract: string;
  extract_html: string;
  normalizedtitle: string;
}
export interface Namespace {
  id: number;
  text: string;
}
export interface Titles {
  canonical: string;
  normalized: string;
  display: string;
}

export interface Coordinates {
  lat: number;
  lon: number;
}
export interface ContentUrls {
  desktop: Urls;
  mobile: Urls;
}
export interface Urls {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}
export interface Mostread {
  date: string;
  articles?: Articles[] | null;
}
export interface Articles {
  views: number;
  rank: number;
  view_history?: ViewHistory[] | null;
  type: string;
  title: string;
  displaytitle: string;
  namespace: Namespace;
  wikibase_item?: string | null;
  titles: Titles;
  pageid: number;
  thumbnail?: Thumbnail | null;
  originalimage?: Thumbnail | null;
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  description?: string | null;
  description_source?: string | null;
  content_urls: ContentUrls;
  extract: string;
  extract_html: string;
  normalizedtitle: string;
  coordinates?: Coordinates | null;
}
export interface ViewHistory {
  date: string;
  views: number;
}

export interface News {
  links?: Links[] | null;
  story: string;
}
export interface Links {
  type: string;
  title: string;
  displaytitle: string;
  namespace: Namespace;
  wikibase_item?: string | null;
  titles: Titles;
  pageid: number;
  thumbnail?: Thumbnail | null;
  originalimage?: Thumbnail | null;
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  description: string;
  description_source: string;
  content_urls: ContentUrls;
  extract: string;
  extract_html: string;
  normalizedtitle: string;
  coordinates?: Coordinates | null;
}

export interface Image {
  title: string;
  thumbnail: Thumbnail;
  image: Thumbnail;
  file_page: string;
  artist: Credit;
  credit: Credit;
  license: License;
  description: Description;
  wb_entity_id: string;
  structured: Structured;
}
export interface Credit {
  html: string;
  text: string;
}
export interface License {
  type: string;
  code: string;
  url: string;
}
export interface Description {
  html: string;
  text: string;
  lang: string;
}
export interface Structured {
  captions: Captions;
}
export interface Captions {
  en: string;
  xmf: string;
}
export interface Onthisday {
  text: string;
  pages?: Pages[] | null;
  year: number;
}
export interface Pages {
  type: string;
  title: string;
  displaytitle: string;
  namespace: Namespace;
  wikibase_item: string;
  titles: Titles;
  pageid: number;
  thumbnail?: Thumbnail | null;
  originalimage?: Thumbnail | null;
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  description?: string | null;
  description_source?: string | null;
  content_urls: ContentUrls;
  extract: string;
  extract_html: string;
  normalizedtitle: string;
  coordinates?: Coordinates | null;
}

export interface Thumbnail {
  source: string;
  width: number;
  height: number;
}
