import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MovieList from "@/views/MovieList.vue";
import MovieDetails from "@/views/MovieDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/foundmovies/:searchQuery",
    name: "movieList",
    component: MovieList,
    props: true,
    meta: {
      title: "Found Movies",
    },
  },
  {
    path: "/movieDetails/:title",
    name: "moviedetails",
    component: MovieDetails,
    props: true,
    meta: {
      title: "Details",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  let title;

  if (to.name === "home") {
    title = `CineHQ | ${to.meta.title}`;
  } else if (to.name === "movieList") {
    title = `${to.meta.title} | ${to.params.searchQuery}`;
  } else if (to.name === "moviedetails") {
    title = `${to.meta.title} | ${to.params.title}`;
  } else {
    title = "CineHQ";
  }

  document.title = title;
  next();
});

export default router;
