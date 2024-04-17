<template>
    <div class="search-tag">
        <input type="text" v-model="searchQuery" @keyup.enter="search" placeholder="Ricerca un film o una serie TV">
        <button @click="search">Cerca film</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            API_KEY: '17411c00243f4aba8f358b714d83efbc',
            searchQuery: '',
            searchResults: [],
        };
    },

    methods: {
        search() {
            console.log("SEARCH");
            try {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: this.API_KEY,
                        query: this.searchQuery,
                        language: 'it-IT',
                    },
                }).then(res => {
                    this.searchResults = res.data.results;
                    console.log(res);
                });

            } catch (error) {
                console.error('Si è verificato un errore durante la ricerca:', error);
            }
        }
    }
};
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