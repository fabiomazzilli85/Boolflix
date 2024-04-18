<template>
    <ul>
        <li><strong>Titolo originale</strong>: {{ item.original_title }}</li>
        <img class="flag" v-if="item.original_language === 'it'" :src="itFlag" alt="Italian Flag">
        <img class="flag" v-if="item.original_language === 'fr'" :src="frFlag" alt="French Flag">
        <img class="flag" v-if="item.original_language === 'en'" :src="enFlag" alt="English Flag">
        <li><strong>Voto della critica</strong>: {{ item.vote_average }}</li>
        <li><strong>Uscita nei cinema</strong>: {{ item.release_date }}</li>
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
    color: black;
}

.flag {
    width: 150px;
}
</style>