<template>
  <div>
    <h2>Film trovati nel nostro database:</h2>
    <ul v-if="store.movies.length !== 0">
      <Card v-for="movie in store.movies" :key="movie.id" :item="movie" />
    </ul>
    <p v-else>Il film non è stato trovato</p>
  </div>

  <div>
    <h2>Risultati della ricerca di Serie TV</h2>
    
    <ul v-if="store.tvs.length !== 0">
      <template v-for="tvShow in store.tvs" :key="tvShow.id">
        <li><strong>Nome</strong>: {{ tvShow.name }}</li>
        <li><strong>Lingua</strong>: {{ tvShow.original_language }}</li>
        <li><strong>Voto della critica</strong>: {{ tvShow.vote_average }}</li>
        <li><strong>Paese di Produzione</strong>: {{ tvShow.origin_country }}</li>
      </template>
    </ul>
    
    <p v-else>La serie TV non è stata trovata</p>
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
  color: coral;
}

ul,
li {
  list-style: none;
  line-height: 26px;
}

</style>