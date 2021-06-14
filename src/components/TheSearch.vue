<template>
  <input
    class="form-input block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="Escribe el nombre de tu pelicula"
  />
</template>
