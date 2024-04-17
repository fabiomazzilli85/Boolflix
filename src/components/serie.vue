<template>
    <div>
        <h2>Risultati della ricerca di Serie TV</h2>
        <ul v-if="store.tvs.length !== 0">
            <li v-for="tvShow in store.tvs" :key="tvShow.id">{{ tvs.name }}</li>
        </ul>
        <p v-else>La serie TV non è stata trovata</p>
    </div>
</template>

<script>
import { store } from '../store.js';


export default {
    data() {
        return {
            store
        }
    },
};
</script>