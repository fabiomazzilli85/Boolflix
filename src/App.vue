<template>
  <search />
  <results />
</template>

<script>
import Search from './components/Search.vue';
import Results from './components/Results.vue';
import Card from './components/Card.vue';


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