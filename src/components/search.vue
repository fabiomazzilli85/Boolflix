<template>
    <div class="search-tag">
        <input type="text" v-model="searchQuery" @keyup.enter="search" placeholder="Ricerca un film o una serie TV">
        <button @click="search">Cerca film</button>
    </div>
</template>

<script>
import axios from 'axios'
import { store } from '../store.js'

export default {
    data() {
        return {
            searchQuery: '',
        };
    },

    methods: {
        search() {
        axios.get('https://api.themoviedb.org/3/search/movie',{
          params: {
            api_key: 'e99307154c6dfb0b4750f6603256716d',
            query: this.searchQuery
          }
        }).then((res) => {
          console.log(res.data.results)
          store.movies = res.data.results
        })

        console.log('recupero i dati di serie tv')
      }
    },
  }
</script>

<style lang="scss" scoped>
@use './style/general';

input {
    margin: 25px 0;
}

button {
    margin: 0 15px;
    padding: 6px;
    background-color: coral;
    color: white;
    border: none;
}
</style>
