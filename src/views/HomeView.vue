<template>
  <main class="flex items-center justify-center min-h-screen bg-base-100 px-4">
    <div class="text-center mt-[-200px]">
      <h1 class="text-3xl md:text-5xl font-bold">Welcome to CineHQ!</h1>
      <p class="text-base md:text-lg mt-4">
        Find information about your favorite movies.
      </p>
      <p class="text-sm md:text-base mt-2 text-gray-600">
        Due to certain limitations, some movies might not show up in the search
        results.
      </p>
    </div>
  </main>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next();
  },
  methods: {
    goToMovieList() {
      this.$router.push("/foundmovies");
    },
  },
};
</script>
