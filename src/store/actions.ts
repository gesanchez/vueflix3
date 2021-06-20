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
    return new Promise((resolve, reject) => {
      client
        .search(q)
        .then((result) => {
          context.commit("SET_MOVIES", {
            movies: result.hits,
            nbHits: result.nbHits,
            page: result.page,
            hitsPerPage: result.hitsPerPage,
            query: result.query,
          });
          resolve();
        })
        .catch((e) => reject(e));
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
    try {
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
    } catch (e) {
      console.log(e);
    }
  },
  /**
   * SELECT_MOVIE
   *
   * @description Accion para buscar una pelicula y setear la data en el storage
   * @param context - Contexto de Vue
   * @param id - Id de la pelicula
   */
  async SELECT_MOVIE(
    context: ActionContext<StateType, StateType>,
    id: string
  ): Promise<void> {
    const { client } = useAlgolia("movies");
    return new Promise((resolve, reject) => {
      client
        .findObject<Movie>((hits) => hits.id === id)
        .then((result) => {
          context.commit("SET_MOVIE", result.object);
          resolve();
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};
