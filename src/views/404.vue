<template>
  <div class="container px-4 mx-auto">
    <h1 class="text-6xl text-center mt-4">404</h1>
    <p class="text-center text-xl">
      Oooops, parace que la p&aacute;gina que estas buscando no existe.
    </p>
    <div class="text-center">
      <img src="/404.svg" class="inline-block" alt="404" />
    </div>
    <div class="text-center mt-10">
      <button
        type="button"
        class="rounded bg-black text-white p-2 w-20"
        @click="$router.push('/')"
      >
        Regresar
      </button>
    </div>
  </div>
</template>
