<template>
  <div>
    <div
      class="the-movie__banner"
      :style="{ backgroundImage: 'url(' + poster + ')' }"
    ></div>
    <h4 class="m-4">{{ title }}</h4>
  </div>
</template>
<script lang="ts">
import { useMovie } from "../composables/the-movie";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    titleProp: {
      type: String,
      required: true,
    },
    posterProp: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const { title, poster } = useMovie(props);

    return { title, poster };
  },
});
</script>
<style lang="css" scoped>
.the-movie__banner {
  height: 200px;
  background-size: cover;
  background-position: center center;
  background-repeat: none;
}
</style>
