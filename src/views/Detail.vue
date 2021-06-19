<template>
  <div class="container px-4 mx-auto">
    <div class="grid grid-cols-2 gap-6">
      <div class="col-span-1">
        <img :src="movie.poster" :alt="movie.title" />
      </div>
      <div>
        <p class="text-6xl">{{ movie.title }}</p>
        <p class="text-left mt-5 font-bold">Descripci&oacute;n:</p>
        <p class="text-left">{{ movie.overview }}</p>
        <div class="text-center mt-5">
          <button
            type="button"
            class="rounded bg-black text-white p-2 w-20"
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
import { defineComponent } from "vue";
import { useDetail } from "../composables/useDetail";

export default defineComponent({
  async setup() {
    const { movie, getDetail, back } = useDetail();
    await getDetail();
    return { movie, back };
  },
});
</script>
