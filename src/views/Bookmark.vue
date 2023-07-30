<template>
  <main class="home-inner">
    <SearchInput placeholder="Search for bookmarked movies" />
    <section aria-label="bookmarked-movies" class="recommended-movies">
      <h2 id="bookmarked-movies">Bookmarked Movies</h2>
      <div class="inner-recomend">
        <!-- <div v-for="movie in movieList" :key="movie.title">
                <Recommend
                    :movieCategory="movie.category"
                    :movieRating="movie.rating"
                    :movieYear="movie.year"
                    :movieTitle="movie.title" 
                    :movieCover="movie.thumbnail.regular.small"
                />
            </div> -->
      </div>
    </section>
  </main>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue'
import Recommend from '@/components/Recommend.vue'

export default {
  name: 'Home',
  components: {
    SearchInput,
    Recommend
  },
  methods: {},
  computed: {
    ...mapState({
      movie: () => state.movie,
      bookmarkList: () => state.bookmarkList
    }),

    movieList() {
      return JSON.parse(JSON.stringify(this.movie))
    }
  },
  mounted() {
    console.log(this.movieList)
    // console.log(this.bookmarkList)
  }
}
</script>
