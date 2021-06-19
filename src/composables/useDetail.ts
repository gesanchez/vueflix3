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

  async function getDetail(): Promise<void> {
    try {
      await store.dispatch("SELECT_MOVIE", route.params.id);
    } catch (e) {
      router.push("/404");
    }
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
