import { Movie } from "../interfaces/movie";
import { Ref, computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";

export const useHome = (): {
  viewDetail: (id: string) => void;
  movies: Ref<Array<Movie>>;
  error: Ref<unknown>;
  search: Ref<string>;
  searchMovies: (query: string) => Promise<void>;
  showMore: Ref<boolean>;
  searchMore: () => Promise<void>;
} => {
  const store = useStore();
  const error = ref<unknown>(null);
  const search = ref<string>("");
  const router = useRouter();
  let timer: number | null = null;

  /**
   * searchMovies
   *
   * @description Metodo para realizar la busqueda de las peliculas
   * @param query - Cadena de texto a buscar
   */
  async function searchMovies(query: string): Promise<void> {
    try {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(async () => {
        await store.dispatch("SEARCH_MOVIES", query);
      }, 600);
    } catch (e) {
      error.value = e;
    }
  }

  /**
   * searchMore
   *
   * @description Metodo para retornar mas resultados en base a una busqueda
   * previamente hecha
   */
  async function searchMore(): Promise<void> {
    return await store.dispatch("SEARCH_MORE");
  }

  /**
   * viewDetail
   *
   * @description Funcion para visualizar el detalle de una pelicula
   * seleccionada.
   * @param id  - Id de la pelicula
   */
  function viewDetail(id: string): void {
    router.push(`/detalle/${id}`);
  }

  return {
    movies: computed(() => store.getters["GET_MOVIES"]),
    showMore: computed(() => store.getters["SHOWMORE"]),
    viewDetail,
    error,
    search,
    searchMovies,
    searchMore,
  };
};
