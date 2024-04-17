<template>
  <search />
  <results />
</template>

<script>
import Search from './components/search.vue';
import Results from './components/results.vue';
import Card from './components/card.vue';


export default {
  components: {
    Search,
    Results,
    Card,
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
@use './style/general';
</style>