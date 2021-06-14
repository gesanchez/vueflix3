<template>
  <slot name="error" :error="error" v-if="error" />
  <Suspense v-else>
    <template #default>
      <slot name="default" />
    </template>
    <template #fallback>
      <slot name="fallback" />
    </template>
  </Suspense>
</template>
<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from "vue";

export default defineComponent({
  setup() {
    const error = ref<unknown>(null);
    onErrorCaptured((err: unknown) => {
      console.log('asdasdasdasd');
      error.value = err;
    });
    return { error };
  },
});
</script>
