<template>
    <div v-if="searchResults && searchResults.length > 0 && searchResults !== null">
        <h2>Film trovati nel database:</h2>
        <ul>
            <li v-for="result in searchResults" :key="result.id">
                <strong>Titolo</strong>: {{ result.title }} - <strong>Titolo originale</strong>: {{
                    result.original_title }} -
                <strong>Lingua</strong>: {{ result.original_language }} - <strong>Voto</strong>: {{ result.vote_average
                }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    searchResults: {
      type: Array,
      required: true,
      validator: value => Array.isArray(value) && value.every(item => result.title && item['result.original_title'])

    }
  }
};
</script>

<style lang="scss" scoped>
@use './style/general';

h2 {
  margin: 25px 0;
}

ul,
li {
  list-style: none;
  line-height: 26px;
}
</style>