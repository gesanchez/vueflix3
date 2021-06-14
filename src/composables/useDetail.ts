import { computed, Ref } from "vue";
import { Movie } from "../interfaces/movie";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "../store";

export const useDetail = (): {
  movie: Ref<Movie>;
  getDetail: () => Promise<void>;
  back: () => void;
} => {
  const store = useStore();
  const router = useRouter();
  const route = useRoute();

  function getDetail(): Promise<void> {
    return store.dispatch("SELECT_MOVIE", route.params.id);
  }

  function back(): void {
    router.push("/");
  }

  return {
    movie: computed(() => store.getters["GET_SELECTED_MOVIE"]),
    getDetail,
    back,
  };
};
