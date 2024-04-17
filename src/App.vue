<template>
  <search />
  <results />
  <card />
  <serie />
</template>

<script>
import Search from './components/search.vue';
import Results from './components/results.vue';
import Card from './components/card.vue';
import Serie from './components/serie.vue';

export default {
  components: {
    Search,
    Results,
    Card,
    Serie,
  }
}
</script>

<style lang="scss">
@use './style/general';
</style>