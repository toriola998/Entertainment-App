<template>
  <main class="home-inner">
    <SearchInput placeholder="Search for movies or Tv Series" />
    <section aria-label="trending" class="trend-wrap">
      <h2 id="trending" class="text-xl md:text-[2rem]">Trending</h2>
      <div>
        <div v-for="movie in movieList" :key="movie.title">
          <Trending v-if="movie.isTrending === true" :movie="movie" @bookmark="ADD_IT"> </Trending>
        </div>
      </div>
    </section>
    <section aria-label="recommended-movies" class="recommended-movies pb-40">
      <h2 id="recommended-movies" class="text-xl md:text-[2rem]">Recommended for you</h2>
      <div
        class="inner-recomend flex-wrap flex gap-x-4 gap-y-28 md:gap-y-40 lg:gap-y-[12rem] justify-between"
      >
        <Recommend
          class="w-[47%] sm:w-[31%]"
          v-for="movie in movieList"
          :key="movie.title"
          :movie="movie"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import SearchInput from '@/components/SearchInput.vue'
import Trending from '@/components/Trending.vue'
import Recommend from '@/components/Recommend.vue'
import { onMounted } from 'vue'

import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'

const store = useMoviesStore()
const { movieList } = storeToRefs(store)
//const { cart } = storeToRefs(store);

onMounted(() => {
  console.log(movieList)
})
// methods: {
//     ADD_IT() {
//         const movieDetail = {
//             movieCategory: this.movie.category
//         }
//         this.$store.commit('ADD_TO_BOOKMARK',  movieDetail)
//     }
// },
// computed: {
//     ...mapState({
//         movie: () => state.movie,
//          isBookmarked: () => state.isBookmarked,
//     }),

//     movieList() {
//         return JSON.parse(JSON.stringify(this.movie))
//     },

// },
</script>
