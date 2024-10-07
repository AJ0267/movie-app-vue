<template>
  <div class="max-w-4xl mx-auto p-6">
    <div class="flex flex-col md:flex-row md:items-center">
      <img
        :src="movie.Poster"
        alt="Movie Poster"
        class="w-full md:w-2/3 lg:w-3/5 xl:w-1/2 h-auto object-cover rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
      />
      <h1 class="text-4xl font-bold mb-4 text-center">{{ movie.Title }}</h1>
      <div class="md:ml-4">
        <p class="text-lg"><strong>Released:</strong> {{ movie.Released }}</p>
        <p class="text-lg"><strong>Genre:</strong> {{ movie.Genre }}</p>
        <p class="text-lg"><strong>Director:</strong> {{ movie.Director }}</p>
        <p class="text-lg"><strong>Cast:</strong> {{ movie.Actors }}</p>
        <p class="text-lg"><strong>Plot:</strong> {{ movie.Plot }}</p>
        <router-link to="/" class="btn bg-[#9400FF] text-base shadow-md mt-4">
          Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      movie: {},
      apiKey: "972dfa6d",
    };
  },
  created() {
    const title = this.$route.params.title; 
    axios
      .get(`http://www.omdbapi.com/?t=${title}&apikey=${this.apiKey}`)
      .then((response) => {
        if (response.data.Response === "True") {
          this.movie = response.data; 
        } else {
          console.error("Error:", response.data.Error);
        }
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  },
};
</script>
