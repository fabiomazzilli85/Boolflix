<template>
  <div>
    <h2>Film trovati su Netflix:</h2>
    <ul v-if="store.movies.length !== 0">
      <Card v-for="movie in store.movies" :key="movie.id" :item="movie" />
    </ul>
    <p v-else>Il film non è stato trovato</p>
  </div>

  <div>
    <h2>Serie TV trovate su Netflix</h2>
    
    <ul v-if="store.tvs.length !== 0">
      <template v-for="tvShow in store.tvs" :key="tvShow.id">
        <li><strong>Nome</strong>: {{ tvShow.name }}</li>
        <li><img class="flag" :src="getFlag(tvShow.original_language)" alt="Bandiera Nazione"></li>
        <li><strong>Voto della critica</strong>: {{ tvShow.vote_average }}</li>
        <img :src="`https://image.tmdb.org/t/p/w342/${tvShow.poster_path}`" alt="Locandina">
      </template>
    </ul>
    
    <p v-else>La serie TV non è stata trovata</p>
  </div>
</template>

<script>
import { store } from '../store.js'
import Card from './Card.vue'

import itFlag from '../assets/it.png';
import frFlag from '../assets/fr.png';
import enFlag from '../assets/en.jpg';

export default {
  components: {
    Card
  },
  data() {
    return {
        store: store,
        itFlag: itFlag,
        frFlag: frFlag, 
        enFlag: enFlag,
    };
},
methods: {
        getFlag(language) {
        const flags = {
            'it': itFlag,
            'fr': frFlag,
            'en': enFlag
        };
        
        return flags[language];
    }
}
}
</script>

<style lang="scss" scoped>
@use './style/general';

.flag {
    width: 70px;
}

h2 {
  margin: 25px 0;
  color: coral;
}

ul,
li {
  color: white;
  list-style: none;
  line-height: 26px;
}

</style>