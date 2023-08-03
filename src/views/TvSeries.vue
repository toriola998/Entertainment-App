<template>
  <main class="home-inner">
    <SearchInput placeholder="Search for movies" />
    <section aria-label="Tv-series" class="recommended-movies">
      <h2 id="Tv-series" class="text-xl md:text-[1.5rem] my-8">TV Series</h2>
      <div class="inner-recomend flex-wrap flex gap-x-4 gap-y-28 xl:gap-y-40 justify-between">
        <Recommend
          class="w-[47%] sm:w-[31%] lg:w-[23%]"
          v-for="movie in movies"
          :key="movie.title"
          :movie="movie"
          @bookmark="addToBookmarkList(movie)"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import SearchInput from '@/components/SearchInput.vue'
import Recommend from '@/components/Recommend.vue'
import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'

const store = useMoviesStore()
const { movieList } = storeToRefs(store)
const { addToBookmarkList } = store

console.log(movieList)
const movies = computed(() => {
  return movieList.value.filter((movie) => {
    return movie.category === 'TV Series'
  })
})
</script>
