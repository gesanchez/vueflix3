import { Movie } from "../interfaces/movie";

export interface StateType {
  movies: Array<Movie>;
  page: number;
  itemPerPage: number;
  totalItems: number;
  query?: string;
  idSelected?: string;
  movie?: Movie;
}

export type MutationsType = {
  SET_MOVIES(
    state: StateType,
    {
      movies,
      nbHits,
      page,
      hitsPerPage,
      query,
    }: {
      movies: Array<Movie>;
      nbHits: number;
      page: number;
      hitsPerPage: number;
      query: string;
    }
  ): void;
  ADD_MOVIES(
    state: StateType,
    {
      movies,
      nbHits,
      page,
      hitsPerPage,
      query,
    }: {
      movies: Array<Movie>;
      nbHits: number;
      page: number;
      hitsPerPage: number;
      query: string;
    }
  ): void;
  SET_MOVIE(state: StateType, object: Movie): void;
};
