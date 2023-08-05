<template>
  <main class="home-inner">
    <SearchInput placeholder="Search for bookmarked movies" />
    <div class="flex flex-col gap-28 pb-40">
      <MovieSection
        ariaLabel="bookmarked-movies"
        title="Bookmarked Movies"
        :movie-list="bookmarkedMovies"
      />

      <MovieSection
        ariaLabel="bookmarked-series"
        title="Bookmarked Series"
        :movie-list="bookmarkedSeries"
      />
    </div>
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
