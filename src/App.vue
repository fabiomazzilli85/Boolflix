<script>
import ApiService from './api';

export default {
  data() {
    return {
      searchQuery: '',
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
    <input type="text" v-model="searchQuery" placeholder="Cerca il tuo film..." @keyup.enter="search">
    <button @click="search">Cerca film</button>
  </div>
</template>

<style>
</style>
