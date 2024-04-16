<template>
  <div>
    <input type="text" v-model="searchQuery" @keyup.enter="search" placeholder="Ricerca un film o una serie TV">
    <button @click="search">Cerca film</button>
    <div v-if="searchResults.length > 0">
      <h2>Risultati della ricerca per "{{ searchQuery }}"</h2>
      <ul>
        <li v-for="result in searchResults" :key="result.id">
          {{ result.searchQuery }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import movieAPI from './api'; 

export default {
  data() {
    return {
      searchQuery: '',
      searchResults: [],
    };
  },

  methods: {
    async search() {
      try {
        const results = await ApiService.searchMovies(this.searchQuery);

        this.searchResults = results;
      } catch (error) {
        console.error('Si è verificato un errore durante la ricerca:', error);
      }
    },
  },
};
</script>

<style>
@use './style/general';
</style>