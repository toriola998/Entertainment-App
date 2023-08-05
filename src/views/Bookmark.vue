<template>
  <main class="home-inner">
    <SearchInput placeholder="Search for bookmarked movies" />
    <div
      class="flex justify-center mt-20"
      v-if="!bookmarkedMovies?.length && !bookmarkedSeries?.length"
    >
      <div>
        <img
          src="@/assets/icon-empty.png"
          alt=""
          role="presentation"
          class="block mx-auto"
          height="70"
          width="70"
        />
        <h2 class="text-lg md:text-[1.5rem] mt-4 text-center max-w-[300px]">
          You do not have any bookmarked movies yet!
        </h2>
      </div>
    </div>
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
