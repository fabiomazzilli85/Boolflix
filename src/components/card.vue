<template>
    <ul>
        <li><strong>Titolo</strong>: {{ item.original_title }}</li>
        <li><strong>Lingua:</strong></li>
        <li>
            <img class="flag" :src="getFlag(item.original_language)" alt="Bandiera Nazione">
            
            <!-- <img class="flag" v-if="item.original_language === 'it'" :src="itFlag" alt="Italian Flag">
            <img class="flag" v-if="item.original_language === 'fr'" :src="frFlag" alt="French Flag">
            <img class="flag" v-if="item.original_language === 'en'" :src="enFlag" alt="English Flag"> -->
        </li>
        <li><strong>Voto della critica</strong>: {{ item.vote_average }}</li>
        <img :src="`https://image.tmdb.org/t/p/w154/${item.poster_path}`" alt="Locandina">
    </ul>
</template>

<script>
import itFlag from '../assets/it.jpg';
import frFlag from '../assets/fr.jpg';
import enFlag from '../assets/en.jpg';
import ciFlag from '../assets/ci.jpg';

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
            'ci': ciFlag,
        };
        
        return flags[language];
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
    width: 70px;
    aspect-ratio: 1/1;
}
</style>