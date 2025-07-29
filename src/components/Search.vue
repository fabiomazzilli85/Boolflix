<template>
    <div class="search-tag">
        <ul>
            <img class="logo-netflix" src="../assets/netflix-logo.webp" alt="">
            <li>Home</li>
            <li>Film</li>
            <li>Serie TV</li>
            <li>La Mia Lista</li>
            <li>Il Tuo Abbonamento</li>
        </ul>
        <input type="text" v-model="searchQuery" @keyup.enter="search" placeholder="Ricerca un film o una Serie TV...">
        <button @click="search">Cerca film o serie</button>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    data() {
        return {
            searchQuery: '',
        };
    },

    methods: {
        search() {
            // Effettua una chiamata API per cercare i film
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: 'e99307154c6dfb0b4750f6603256716d',
                    language: 'it_IT',
                    query: this.searchQuery
                }
            })
                .then((res) => {
                    console.log(res.data.results);
                    store.movies = res.data.results; // Assegna i risultati alla variabile store.movies
                })
                .catch((error) => {
                    console.error('Errore nella ricerca dei film:', error);
                });

            // Con questa chiamata invece vado alle ricerca di Serie TV. Ho cercato "Big Bang Theory", che in effetti è stato trovato correttamente.
            axios.get('https://api.themoviedb.org/3/search/tv', {
                params: {
                    api_key: 'e99307154c6dfb0b4750f6603256716d',
                    language: 'it_IT',
                    query: this.searchQuery
                }
            })
                .then((res) => {
                    console.log(res.data.results);
                    store.tvs = res.data.results;
                })
                .catch((error) => {
                    console.error('Errore nella ricerca delle serie TV:', error);
                });

            console.log('Recupero i dati dei film e delle serie TV');
        }
    }
}
</script>


<style lang="scss" scoped>
@use './style/general';

input {
    margin: 25px 0;
    width: 230px;
    line-height: 30px;
    border-radius: 4px;
    border:2px solid #ad0c12;
}

ul,
li {
    display: flex;
    gap: 20px;
    color: white;
    list-style: none;
    align-items: center;
}

li:hover {
    color: #ad0c12; 
}

.search-tag {
    background-color: #141414;
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 10px 20px;
    margin-bottom: 50px;
}

button {
    margin: 0 15px;
    padding: 7px 10px;
    background-color: #ad0c12;
    border-radius: 4px;
    color: white;
    border: none;
}

.logo-netflix {
    width: 50px;
    display: block;
}

::placeholder {
    font-family: Arial, Helvetica, sans-serif;
}
</style>
