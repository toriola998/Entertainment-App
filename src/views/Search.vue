<template>
  <main class="home-inner">
    <SearchInput :placeholder="route.query?.s" />
    <section aria-label="Tv-series" class="recommended-movies">
      <h2 id="Tv-series" class="text-xl md:text-[1.5rem] my-8">
        Found {{ searchList.length }} result for '{{ route.query?.s }}'
      </h2>
      <div class="inner-recomend flex-wrap flex gap-x-4 gap-y-28 xl:gap-y-40">
        <Recommend
          class="w-[47%] sm:w-[31%] lg:w-[23%]"
          v-for="movie in searchList"
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

import { useRoute } from 'vue-router'
const route = useRoute()

import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'
const store = useMoviesStore()
const { searchList } = storeToRefs(store)
</script>
