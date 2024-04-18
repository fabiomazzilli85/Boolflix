<template>
    <ul class="flex-film">
        <li><strong>Titolo</strong>: {{ item.original_title }}</li>
        <li><strong>Lingua:</strong></li>
        <li><img class="flag" :src="getFlag(item.original_language)" alt="Bandiera Nazione"></li>
        <li><strong>Voto della critica</strong>: {{ convertToStars(item) }}</li>
        <img :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`" alt="Locandina">
    </ul>
</template>

<script>
import itFlag from '../assets/it.jpg';
import frFlag from '../assets/fr.jpg';
import enFlag from '../assets/en.jpg';


export default {
    props: {
        item: {
            type: Object,
            required: true
        }
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
        convertToStars(item) {
            const numStars = Math.round(item.vote_average / 2);
            return '★'.repeat(numStars);
        }
    }
}
</script>

<style lang="scss" scoped>
ul,
li {
    list-style: none;
    color: white;
}

.flag {
    width: 50px;
    aspect-ratio: 1/1;
}

.flex-film {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px;
}
</style>