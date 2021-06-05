<template>
  <div class="home">
    <div class="grid grid-cols-4 md:grid-cols-4 gap-6">
      <div v-for="movie in movies" :key="movie.id" class="shadow">
        <TheMovie :titleProp="movie.title" :posterProp="movie.poster"></TheMovie>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import TheMovie from "../components/TheMovie.vue";
import { defineComponent } from "vue";
import algoliasearch from "algoliasearch";

export default defineComponent({
  name: "Home",
  components: {
    TheMovie,
  },
  setup() {
    const message = ref("hola");
    const movies = ref([] as any);

    watchEffect(async () => {
      const client = algoliasearch("CSK3YQ9ZQO", "23ceb6d8075e0a3055ce545512ddfa1a");
      const index = client.initIndex("movies");
      const { hits }: { hits: Array<any> } = await index.search("");
      movies.value = hits;
    });
    return { message, movies };
  },
});
</script>
