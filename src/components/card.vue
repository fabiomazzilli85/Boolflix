<template>
    <ul>
        <li><strong>Titolo originale</strong>: {{ item.original_title }}</li>
        <li><strong>Lingua</strong>: {{ item.original_language }}</li>
        <li><strong>Voto della critica</strong>: {{ item.vote_average }}</li>
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
</style>