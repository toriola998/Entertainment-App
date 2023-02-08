<template>
  <main class="home-inner">
    <SearchInput placeholder="Search for bookmarked movies" />
    <section aria-label="bookmarked-movies" class="recommended-movies">
        <h2 id="bookmarked-movies">Bookmarked Movies</h2>
        <div class="inner-recomend">
            <div v-for="movie in movieList" :key="movie.title">
                <RecommendMovie 
                    :movieCategory="movie.category"
                    :movieRating="movie.rating"
                    :movieYear="movie.year"
                    :movieTitle="movie.title" 
                    :movieCover="movie.thumbnail.regular.small"
                />
            </div>
        </div>
    </section>
  </main>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue';
import RecommendMovie  from '@/components/RecommendMovie.vue';
//import { mapState } from 'vuex'

export default {
    name: 'BookMark',
    components: {
        SearchInput,
        RecommendMovie
    },
    methods: {
        
    },
    // computed: {
    //     ...mapState({
    //         movie: (state : any) => state.movie,
    //         bookmarkList: (state: any) => state.bookmarkList
    //     }),

    //     movieList() {
    //         return JSON.parse(JSON.stringify(this.movie))
    //     },
    // },
    // mounted() {
    //     console.log(this.movieList)
    //     // console.log(this.bookmarkList)
    // }
};
</script>

<style lang="scss" scoped>
</style>
