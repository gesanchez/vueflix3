<template>
  <div class="container px-4 mx-auto">
    <div class="grid grid-cols-2 gap-6">
      <div class="col-span-1">
        <img :src="movie.poster" alt="movie.title" />
      </div>
      <div>
        <p class="text-6xl">{{ movie.title }}</p>
        <p class="text-left mt-5 font-bold">Descripci&oacute;n:</p>
        <p class="text-left">{{ movie.overview }}</p>
        <div class="text-center mt-5">
          <button
            type="button"
            class="bg-green-400 text-white rounded p-2"
            @click="back"
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useDetail } from "../composables/useDetail";

export default defineComponent({
  setup() {
    const { movie, getDetail, back } = useDetail();
    onMounted(() => {
      getDetail();
    });

    return { movie, back };
  },
});
</script>
