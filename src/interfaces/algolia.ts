export interface Algolia<T> {
  hits: Array<T>;
  nbHits: number;
  page: number;
  hitsPerPage: number;
  query: string;
}
