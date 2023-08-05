<template>
  <main class="home-inner">
    <SearchInput placeholder="Search for bookmarked movies" />

    <div class="flex flex-col gap-40 pb-40">
      <section aria-label="bookmarked-movies" class="recommended-movies">
        <h2 id="bookmarked-movies" class="text-xl md:text-[1.5rem] my-8">Bookmarked Movies</h2>
        <div class="inner-recomend flex-wrap flex gap-x-4 gap-y-28 xl:gap-y-40">
          <Recommend
            class="w-[47%] sm:w-[31%] lg:w-[23%]"
            v-for="movie in bookmarkedMovies"
            :key="movie.title"
            :movie="movie"
          />
        </div>
      </section>

      <section aria-label="bookmarked-movies" class="recommended-movies">
        <h2 id="bookmarked-movies" class="text-xl md:text-[1.5rem] my-8">Bookmarked Series</h2>
        <div class="inner-recomend flex-wrap flex gap-x-4 gap-y-28 xl:gap-y-40">
          <Recommend
            class="w-[47%] sm:w-[31%] lg:w-[23%]"
            v-for="movie in bookmarkedSeries"
            :key="movie.title"
            :movie="movie"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import SearchInput from '@/components/SearchInput.vue'
import Recommend from '@/components/Recommend.vue'

import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'

const store = useMoviesStore()
const { bookmarkedMovies } = storeToRefs(store)
const { bookmarkedSeries } = storeToRefs(store)
</script>
