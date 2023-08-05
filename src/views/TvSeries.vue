<template>
  <main class="home-inner">
    <SearchInput placeholder="Search for Tv Series" />
    <MovieSection ariaLabel="Tv-series" title="TV Series" :movie-list="movies" />
  </main>
</template>

<script setup>
import { computed } from 'vue'
import SearchInput from '@/components/SearchInput.vue'
import MovieSection from '../components/MovieSection.vue'
import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'

const store = useMoviesStore()
const { movieList } = storeToRefs(store)

const movies = computed(() => {
  return movieList.value.filter((movie) => {
    return movie.category === 'TV Series'
  })
})
</script>
