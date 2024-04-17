<template>
   <ul>
        <li><strong>Titolo originale</strong>: {{ item.original_title }}</li>
        <li><strong>Lingua</strong>: {{ item.original_language }}</li>
        <li><strong>Voto della critica</strong>: {{ item.vote_average }}</li>
        <li><strong>Uscita nei cinema</strong>: {{ item.release_date }}</li>
    </ul>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
ul,
li {
    list-style: none;
    color: black;
}
ul { 
    background-color: #8DECB4;
    padding: 15px;
    color: white;
    margin: 10px;
}
</style>