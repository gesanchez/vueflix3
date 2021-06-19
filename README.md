# Vueflix 3
---

Aplicacion para buscar peliculas haciendo uso del motor de busquedas de [algolia](https://www.algolia.com/). Demuestra como hacer uso del motor de busquedas de algolia y guardar la informacion con vuex. Todo haciendo uso de la Composition API de Vue 3

Esta aplicacion esta construida con
* [Vue 3](https://v3.vuejs.org/)
* [Vue Router](https://next.router.vuejs.org/) 
* [Vuex](https://next.vuex.vuejs.org/)
* [Algolia](https://www.algolia.com/)
* [Tailwindcss](https://tailwindcss.com/) 

## Requerimientos

* Tener un cuenta en algolia, tiene una version gratis, no requiere de tarjetas de credito.
* Modificar el archivo *.env* con la informcion de tu appID de algolia y tu API KEY de algolia
* Crear un indice en algolia con el nombre de *movies* e importar el archivo *movies_mock.json*

## Iniciacion del proyecto

Para correr el proyecto en modo desarrollo, es necesario, realizar la instalacion de las librerias, para ellos proceder a ejecutar el siguiente comando:

```sh
npm install
```

## Correr el proyecto

Una vez instalada las dependencias, para correr el proyecto se debe ejecutar el siguiente comando:

```sh
npm run serve
```

### Compilar para produccion

Si quieres llevar este proyecto a un entorno de produccion, ejecutar el siguiente comando:

```sh
npm run build
```


### Correr las pruebas unitarias

Si quieres correr las pruebas unitarias, ejecutar el siguiente comando:

```sh
npm run test:unit
```

### Correr el lint
```
npm run lint
```

### Autor

[German Sanchez](https://github.com/gesanchez)
