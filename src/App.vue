<template>
  <div>
    <div class="navbar shadow-md rounded-lg bg-base-100">
      <div class="flex-1">
        <router-link to="/" class="btn btn-ghost text-2xl text-[#9400FF]"
          >CineHQ</router-link
        >
      </div>
      <div class="flex-none gap-2">
        <div class="form-control">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for movies..."
            class="input input-bordered border-[#9400FF] border-2 w-40 md:w-auto"
          />
        </div>
        <button
          class="btn bg-[#9400FF] text-base shadow-md"
          @click="searchMovies"
        >
          Search
        </button>
      </div>
    </div>
    <div class="flex items-center justify-center h-full mt-2">
      <p v-if="hasSearched && movies.length === 0" class="text-center mt-4">
        No movies found with that name!
      </p>
      <p v-if="isInputEmpty" class="text-center mt-4">
        The input cannot be empty!
      </p>
    </div>

    <router-view
      :movies="movies"
      :hasSearched="hasSearched"
      :isInputEmpty="isInputEmpty"
    />
  </div>
  <div class="fixed bottom-4 right-4 z-50">
    <ThemeControl />
  </div>
</template>

<script>
import axios from "axios";
// import { watch } from "vue";
import ThemeControl from "./components/ThemeControl.vue";

export default {
  components: { ThemeControl },
  data() {
    return {
      searchQuery: "",
      movies: [],
      hasSearched: false,
      isInputEmpty: false,
      apiKey: "972dfa6d",
    };
  },
  methods: {
    searchMovies() {
      if (this.searchQuery) {
        const encodedQuery = encodeURIComponent(this.searchQuery.trim());
        this.$router.push(`/foundmovies/${encodedQuery}`);

        axios
          .get(
            `http://www.omdbapi.com/?s=${this.searchQuery}&type=movie&apikey=${this.apiKey}`
          )
          .then((response) => {
            if (response.data.Response === "True") {
              this.movies = response.data.Search;
              this.searchQuery = "";
            } else {
              this.movies = [];
            }
          })
          .catch((error) => {
            console.error("Error fetching movie data:", error);
          })
          .finally(() => {
            this.hasSearched = true;
            this.isInputEmpty = false;
          });
      } else {
        this.isInputEmpty = true;
        this.hasSearched = false;
      }
    },
  },
  watch: {
    $route(to) {
      if (to.path === "/") {
        this.searchQuery = "";
        this.movies = [];
        this.hasSearched = false;
        this.isInputEmpty = false;
      }
    },
  },
};
</script>
