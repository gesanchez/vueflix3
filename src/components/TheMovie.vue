<template>
  <div class="the-movie">
    <div
      class="the-movie__banner"
      :style="{ backgroundImage: 'url(' + poster + ')' }"
    ></div>
    <h4 class="m-4">{{ title }}</h4>
  </div>
</template>
<script lang="ts">
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
    },
  },
  setup(props) {
    return { title: props.titleProp, poster: props.posterProp };
  },
});
</script>
<style lang="css" scoped>
.the-movie {
  cursor: pointer;
}
.the-movie__banner {
  height: 200px;
  background-size: cover;
  background-position: center center;
  background-repeat: none;
}
</style>
