<template>
    <ul>
        <li><strong>Titolo originale</strong>: {{ item.original_title }}</li>
        <li><strong>Lingua:</strong></li>
        <li><img class="flag" v-if="item.original_language === 'it'" :src="itFlag" alt="Italian Flag"></li>
        <li><img class="flag" v-if="item.original_language === 'fr'" :src="frFlag" alt="French Flag"></li>
        <li><img class="flag" v-if="item.original_language === 'en'" :src="enFlag" alt="English Flag"></li>
        <li><strong>Voto della critica</strong>: {{ item.vote_average }}</li>
        <img :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`" alt="Locandina">
    </ul>
</template>

<script>
import itFlag from '../assets/it.png';
import frFlag from '../assets/fr.png';
import enFlag from '../assets/en.jpg';

export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            itFlag: itFlag,
            frFlag: frFlag, 
            enFlag: enFlag,
        };
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
}
</style>