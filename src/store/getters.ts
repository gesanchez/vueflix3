import { Movie } from "../interfaces/movie";
import { StateType } from "./types";

export default {
  GET_MOVIES(state: StateType): Array<Movie> {
    return state.movies;
  },
  SHOWMORE(state: StateType): boolean {
    return state.movies.length < state.totalItems;
  },
  GET_SELECTED_MOVIE(state: StateType): Movie {
    return state.movie as Movie;
  },
};
