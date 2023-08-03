<template>
  <main class="home-inner">
    <SearchInput placeholder="Search for bookmarked movies" />
    <section aria-label="bookmarked-movies" class="recommended-movies">
      <h2 id="bookmarked-movies" class="text-xl md:text-[1.5rem] my-8">Bookmarked Movies</h2>
      <div class="inner-recomend flex-wrap flex gap-x-4 gap-y-28 xl:gap-y-40">
        <Recommend
          class="w-[47%] sm:w-[31%] lg:w-[23%]"
          v-for="movie in bookmarkList"
          :key="movie.title"
          :movie="movie"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import SearchInput from '@/components/SearchInput.vue'
import Recommend from '@/components/Recommend.vue'

import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'

const store = useMoviesStore()
const { movieList } = storeToRefs(store)
const { bookmarkList } = storeToRefs(store)
</script>
