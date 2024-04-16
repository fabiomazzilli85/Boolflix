<script>
import ApiService from './api';

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
        await ApiService.searchMovies(this.searchQuery);
      } catch (error) {
      }
    },
  },
};
</script>

<template>
   <div>
    <input type="text" v-model="searchQuery" @keyup.enter="search" placeholder="Ricerca un film o una serie TV">
    <button @click="search">Cerca</button>
    <div v-if="searchResults.length > 0">
      <h2>Risultati della ricerca per "{{ searchQuery }}"</h2>
      <ul>
        <li v-for="result in searchResults" :key="result.id">
          {{ result.original_title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
</style>
