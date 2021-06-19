import { Movie } from "../interfaces/movie";
import { StateType, MutationsType } from "./types";
import { MutationTree } from "vuex";

export default {
  SET_MOVIES(
    state,
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
  ): void {
    state.movies = movies;
    state.itemPerPage = hitsPerPage;
    state.page = page;
    state.totalItems = nbHits;
    state.query = query;
  },
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
  ): void {
    state.movies = [...state.movies, ...movies];
    state.itemPerPage = hitsPerPage;
    state.page = page;
    state.totalItems = nbHits;
    state.query = query;
  },
  SET_MOVIE(state: StateType, object: Movie): void {
    state.movie = object;
  },
  SET_LOADING(state: StateType, loading: boolean): void {
    state.loading = loading;
    state.error = null;
  },
  SET_ERROR(state: StateType, error: unknown): void {
    state.error = error;
    state.loading = false;
  },
} as MutationTree<StateType> & MutationsType;
