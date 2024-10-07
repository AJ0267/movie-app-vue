<script setup>
import CardComponent from "../components/CardComponent.vue";
defineProps({
  movies: Array, 
});
</script>

<template>
  <div class="flex flex-wrap gap-5 mt-5">
    <CardComponent v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
  </div>
</template>
