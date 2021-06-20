import { StateType } from "./types";
import { Movie } from "../interfaces/movie";

export default {
  movies: [],
  idSelected: "",
  page: 0,
  itemPerPage: 20,
  totalItems: 0,
  query: "",
  movie: {} as Movie,
} as StateType;
