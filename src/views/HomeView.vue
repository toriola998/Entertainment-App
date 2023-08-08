<template>
  <main class="home-inner pb-40">
    <SearchInput placeholder="Search for movies or Tv Series" />
    <section aria-label="trending" class="trend-wrap">
      <h2 id="trending" class="text-xl md:text-[1.5rem]">Trending</h2>
      <div>
        <div v-for="movie in movieList" :key="movie.title">
          <Trending
            v-if="movie.isTrending === true"
            :movie="movie"
            @bookmark="bookmarkMovie(movie)"
          />
        </div>
      </div>
    </section>
    <MovieSection
      ariaLabel="bookmarked-movies"
      title="Recommended for you"
      :movie-list="movieList"
    />
  </main>
</template>

<script setup>
import SearchInput from '@/components/SearchInput.vue'
import Trending from '@/components/Trending.vue'
import MovieSection from '../components/MovieSection.vue'

import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'

const store = useMoviesStore()
const { movieList } = storeToRefs(store)
const { bookmarkMovie } = store
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
