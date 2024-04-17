<template>
  <div>
    <h2>Film trovati nel nostro database:</h2>
    <ul v-if="store.movies.length !== 0">
      <Card v-for="movie in store.movies" :key="movie.id" :item="movie" />
    </ul>
    <p v-else>Il film non è stato trovato</p>
  </div>

  <div>
    <h2>Serie TV trovate nel nostro database:</h2>
    <ul v-if="store.movies.length !== 0">
      <Card v-for="movie in store.movies" :key="movie.id" :item="movie" />
    </ul>
    <p v-else>La serie TV che hai cercato non è stata trovata.</p>
  </div>
</template>

<script>
import { store } from '../store.js'
import Card from './card.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      store: store
    }
  },
}
</script>

<style lang="scss" scoped>
@use './style/general';

h2 {
  margin: 25px 0;
}

ul,
li {
  list-style: none;
  line-height: 26px;
}
</style>