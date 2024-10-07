<template>
  <router-link :to="`/movieDetails/${movie.Title}`">
    <div
      class="card bg-base-100 w-36 h-64 mx-2 mb-4 ml-5 shadow-lg rounded-lg flex flex-col justify-between p-2"
    >
      <img
        :src="movie.Poster !== 'N/A' ? movie.Poster : defaultImage"
        alt="Movie Poster"
        class="w-full h-64 object-contain rounded-lg"
      />
      <h2 class="text-md font-semibold mt-2 truncate">{{ movie.Title }}</h2>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      defaultImage:
        "https://via.placeholder.com/300x450?text=No+Image+Available",
    };
  },
};
</script>
