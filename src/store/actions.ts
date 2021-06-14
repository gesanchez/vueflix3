import { ActionContext } from "vuex";
import { StateType } from "./types";
import { Movie } from "../interfaces/movie";
import { useAlgolia } from "../composables/useAlgolia";

export default {
  /**
   * SEARCH_MOVIES
   *
   * @description Action para realizar la busqueda
   * @param context - Contexto de Vue
   * @param query - Cadena de texto a buscar
   */
  async SEARCH_MOVIES(
    context: ActionContext<StateType, StateType>,
    q: string
  ): Promise<void> {
    const { client } = useAlgolia("movies");
    const {
      hits,
      nbHits,
      page,
      hitsPerPage,
      query,
    }: {
      hits: Array<Movie>;
      nbHits: number;
      page: number;
      hitsPerPage: number;
      query: string;
    } = await client.search(q);
    context.commit("SET_MOVIES", {
      movies: hits,
      nbHits,
      page,
      hitsPerPage,
      query,
    });
  },
  /**
   * SEARCH_MORE
   *
   * @description Metodo para retornar mas registros basados en un criterior
   * de busqueda anteriormente realizado
   * @param context - Contexto Vue
   */
  async SEARCH_MORE(
    context: ActionContext<StateType, StateType>
  ): Promise<void> {
    const { client } = useAlgolia("movies");
    const p = context.state.page;
    const itemsPerPage = context.state.itemPerPage;
    const q: string | undefined = context.state.query;
    const {
      hits,
      nbHits,
      page,
      hitsPerPage,
      query,
    }: {
      hits: Array<Movie>;
      nbHits: number;
      page: number;
      hitsPerPage: number;
      query: string;
    } = await client.search(q as string, {
      hitsPerPage: itemsPerPage,
      page: p + 1,
    });
    context.commit("ADD_MOVIES", {
      movies: hits,
      nbHits,
      page,
      hitsPerPage,
      query,
    });
  },
  async SELECT_MOVIE(
    context: ActionContext<StateType, StateType>,
    id: string
  ): Promise<void> {
    const { client } = useAlgolia("movies");
    const { object }: { object: Movie } = await client.findObject(
      (hit) => hit.id === id
    );
    context.commit("SET_MOVIE", object);
  },
};
