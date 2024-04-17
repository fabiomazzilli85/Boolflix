<template>
  <search />
  <results />
  <card />
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
      searchResults: [],
    };
  },
  methods: {
    handleSearchResults(results) {
      this.searchResults = results;
    }
  }
};
</script>

<style lang="scss">
@use './style/general';
</style>