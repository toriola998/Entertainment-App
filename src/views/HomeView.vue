<template>
  <main class="home-inner">
    <SearchInput placeholder="Search for movies or Tv Series" />
    <section aria-label="trending" class="trend-wrap">
      <h2 id="trending" class="text-xl md:text-[1.5rem]">Trending</h2>
      <div>
        <div v-for="movie in movieList" :key="movie.title">
          <Trending
            v-if="movie.isTrending === true"
            :movie="movie"
            @bookmark="addToBookmarkList(movie)"
          >
          </Trending>
        </div>
      </div>
    </section>
    <section aria-label="recommended-movies" class="recommended-movies pb-40">
      <h2 id="recommended-movies" class="text-xl md:text-[1.5rem] my-8">Recommended for you</h2>
      <div class="inner-recomend flex-wrap flex gap-x-4 gap-y-28 xl:gap-y-40 justify-between">
        <Recommend
          class="w-[47%] sm:w-[31%] lg:w-[23%]"
          v-for="movie in movieList"
          :key="movie.title"
          :movie="movie"
          @bookmark="addToBookmarkList(movie)"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import SearchInput from '@/components/SearchInput.vue'
import Trending from '@/components/Trending.vue'
import Recommend from '@/components/Recommend.vue'

import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'

const store = useMoviesStore()
const { movieList } = storeToRefs(store)
const { addToBookmarkList } = store
</script>

<style scoped lang="scss">
.trend-wrap {
  > div {
    @apply flex overflow-x-scroll;

    -ms-overflow-style: none; // for Internet Explorer, Edge
    scrollbar-width: none; // for Firefox

    &::-webkit-scrollbar {
      display: none; // for Chrome, Safari and Opera
    }

    > div {
      margin-right: 1rem;
    }
  }
}
</style>
