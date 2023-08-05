<template>
  <section :aria-label="ariaLabel" class="recommended-movies">
    <h2 :id="ariaLabel" class="text-xl md:text-[1.5rem] my-8">{{ title }}</h2>
    <div class="inner-recomend flex-wrap flex gap-x-4 gap-y-28 xl:gap-y-40">
      <Recommend
        class="w-[47%] sm:w-[31%] lg:w-[23%]"
        v-for="movie in movieList"
        :key="movie.title"
        :movie="movie"
        @bookmark="addToBookmarkList(movie)"
      />
    </div>
  </section>
</template>

<script setup>
import Recommend from './Recommend.vue'
import { useMoviesStore } from '@/stores/movies'

const store = useMoviesStore()
const { addToBookmarkList } = store

defineProps({
  ariaLabel: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  movieList: {
    type: Array,
    default: () => []
  }
})
</script>
