<template>
  <main class="home-inner">
    <SearchInput placeholder="Search for bookmarked movies" />
      <MovieSection
        v-if="bookmarkedMovies?.length"
        ariaLabel="bookmarked-movies"
        title="Bookmarked Movies"
        :movie-list="bookmarkedMovies"
      />

      <MovieSection
        v-if="bookmarkedSeries?.length"
        ariaLabel="bookmarked-series"
        title="Bookmarked Series"
        :movie-list="bookmarkedSeries"
      />
  </main>
</template>

<script setup>
import MovieSection from '../components/MovieSection.vue'
import SearchInput from '@/components/SearchInput.vue'

import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'

const store = useMoviesStore()
const { bookmarkedMovies } = storeToRefs(store)
const { bookmarkedSeries } = storeToRefs(store)
</script>
