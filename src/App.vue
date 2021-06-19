<template>
  <div class="mb-5">
    <TheHeader></TheHeader>
  </div>
  <Suspense>
    <router-view />
  </Suspense>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "./components/TheHeader.vue";

export default defineComponent({
  components: {
    TheHeader,
  },
});
</script>
