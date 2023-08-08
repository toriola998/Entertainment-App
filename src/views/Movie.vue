<template>
  <main class="home-inner">
    <SearchInput :placeholder="`Search for ${title.toLowerCase()}`" />
    <MovieSection ariaLabel="movies" :title="title" :movie-list="movies" />
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import SearchInput from '@/components/SearchInput.vue'
import MovieSection from '../components/MovieSection.vue'

import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'
const store = useMoviesStore()
const { movieList } = storeToRefs(store)

const route = useRoute()
const title = ref('')

const movies = computed(() => {
  return movieList.value.filter((movie) => {
    if (route.params.movie_type === 'movies') {
      title.value = 'Movies'
      return movie.category === 'Movie'
    } else if (route.params.movie_type === 'tv-series') {
      title.value = 'TV Series'
      return movie.category === 'TV Series'
    }
  })
})
</script>
