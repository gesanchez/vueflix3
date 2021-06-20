<template>
  <div class="container px-4 mx-auto">
    <div class="mt-4 mb-4">
      <TheSearch v-model="search"></TheSearch>
    </div>
    <div v-if="error" class="text-center">
      <p class="text-center text-xl mt-5">Error de comunicaci&oacute;n</p>
      <img class="inline-block mt-5 w-96" src="/500.svg" alt="500" />
    </div>
    <div v-else class="grid grid-cols-4 gap-6">
      <div v-for="movie in movies" :key="movie.id" class="shadow mb-4">
        <TheMovie
          @click="viewDetail(movie.id)"
          :titleProp="movie.title"
          :posterProp="movie.poster"
        ></TheMovie>
      </div>
    </div>
    <div class="mt-4 mb-4 text-center" v-if="showMore">
      <button
        type="button"
        class="rounded bg-black text-white text-center w-40 p-1"
        @click="searchMore"
      >
        Mostrar m&aacute;s
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import TheMovie from "../components/TheMovie.vue";
import TheSearch from "../components/TheSearch.vue";
import { defineComponent, onMounted, watch } from "vue";
import { useHome } from "../composables/useHome";

export default defineComponent({
  name: "Home",
  components: {
    TheMovie,
    TheSearch,
  },
  setup() {
    const {
      movies,
      viewDetail,
      error,
      search,
      searchMovies,
      showMore,
      searchMore,
      getMovies,
    } = useHome();

    onMounted(() => getMovies());

    watch(search, searchMovies);

    return {
      movies,
      viewDetail,
      error,
      search,
      showMore,
      searchMovies,
      searchMore,
    };
  },
});
</script>
