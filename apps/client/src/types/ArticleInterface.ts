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

export interface Thumbnail {
  source: string;
  width: number;
  height: number;
}
