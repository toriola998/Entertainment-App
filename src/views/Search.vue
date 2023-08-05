<template>
  <main class="home-inner">
    <SearchInput :placeholder="route.query?.s" />

    <MovieSection
      ariaLabel="search-results"
      :title="`Found ${ searchList.length } result for '${ route.query?.s }'`"
      :movie-list="searchList"
    />
  </main>
</template>

<script setup>
import SearchInput from '@/components/SearchInput.vue'
import MovieSection from '@/components/MovieSection.vue'

import { useRoute } from 'vue-router'
const route = useRoute()

import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'

const store = useMoviesStore()
const { searchList } = storeToRefs(store)
</script>
