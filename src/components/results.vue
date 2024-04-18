<template>
  <div>
    <h2>Film trovati su Netflix:</h2>
    <ul class="flex-show" v-if="store.movies.length !== 0">
      <Card v-for="movie in store.movies" :key="movie.id" :item="movie" />
    </ul>
    <p v-else>Il film non è stato trovato</p>
  </div>

  <div class="margin-top-serie">
    <h2>Serie TV trovate su Netflix:</h2>

    <div class="flex-show" v-if="store.tvs.length !== 0">
      <template v-for="tvShow in store.tvs" :key="tvShow.id">
        <div class="serie-list">
          <ul>
            <li><strong>Nome</strong>: {{ tvShow.name }}</li>
            <li><strong>Lingua:</strong></li>
            <li><img class="flag" :src="getFlag(tvShow.original_language)" alt="Bandiera Nazione"></li>
            <li><strong>Voto della critica</strong>: {{ convertToStars(tvShow) }}</li>
            <img class="locandina" :src="`https://image.tmdb.org/t/p/w154/${tvShow.poster_path}`" alt="Locandina">
          </ul>
        </div>
      </template>
    </div>

    <p v-else>La serie TV non è stata trovata</p>
  </div>
</template>

<script>
import { store } from '../store.js'
import Card from './Card.vue'

import itFlag from '../assets/it.jpg';
import frFlag from '../assets/fr.jpg';
import enFlag from '../assets/en.jpg';
import ciFlag from '../assets/ci.jpg';


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
      ciFlag: ciFlag,


    };
  },
  methods: {
    getFlag(language) {
      const flags = {
        'it': itFlag,
        'fr': frFlag,
        'en': enFlag,
      };

      return flags[language];
    },
    convertToStars(tvShow) {
      const numStars = Math.round(tvShow.vote_average / 2);
      return '★'.repeat(numStars);
    }
  }
}
</script>

<style lang="scss" scoped>
@use './style/general';

.flag {
  width: 50px;
  aspect-ratio: 1/1;
}

h2 {
  margin: 25px 0;
  color: #e3101e;
}

ul,
li {
  color: white;
  list-style: none;
  line-height: 30px;
  padding: 5px 30px;
}

.flex-show {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.serie-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
}

.locandina {
  width: 200px;
  object-fit: cover;
}

.margin-top-serie {
  margin-top: 75px;
}
</style>