<template>
    <main class="home-inner">
        <SearchInput placeholder="Search for movies or Tv Series"/>
        <section aria-label="trending" class="trend-wrap">
            <h2 id="trending">Trending</h2>
            <div>
                <div v-for="movie in movieList" :key="movie.title">
                    <TrendingMovie  v-if="movie.isTrending === true"
                        :movieCategory="movie.category"
                        :movieRating="movie.rating"
                        :movieYear="movie.year"
                        :movieTitle="movie.title" 
                        :movieCover="movie.thumbnail.regular.small" 
                        @bookmark="ADD_IT">   
                    </TrendingMovie>
                </div>
            </div>
        </section>

        <!-- :image="`url(${movie.thumbnail.regular.small})`" -->
        <section aria-label="recommended-movies" class="recommended-movies">
            <h2 id="recommended-movies">Recommended for you</h2>
            <div class="inner-recomend">
                <RecommendMovie v-for="movie in movieList" :key="movie.title"
                     :movieCategory="movie.category"
                    :movieRating="movie.rating"
                    :movieYear="movie.year"
                    :movieTitle="movie.title" 
                    :movieCover="movie.thumbnail.regular.small"
                    />
            </div>
        </section>
    </main>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue';
import TrendingMovie from '@/components/TrendingMovie.vue';
import RecommendMovie  from '@/components/RecommendMovie.vue';
import { mapState } from 'vuex'

export default {
    name: 'HomeView',
    data() {
        return {
            trender: [],
        }
    },
    components: {
        TrendingMovie,
        SearchInput,
        RecommendMovie
    },
    methods: {
        ADD_IT() {
            const movieDetail = {
                movieCategory: this.movie.category 
            };  
            this.$store.commit('ADD_TO_BOOKMARK',  movieDetail)
        }
    },
    computed: {
        ...mapState({
            movie: state => state.movie,
            isBookmarked: state  => state.isBookmarked,
        }),

        movieList() {
            return this.$store.state.movie;
            //return JSON.parse(JSON.stringify(this.movie))
        },

    },
    mounted() {
        console.log(this.movieList);
        console.log(this.trendingList)
    }
};
</script>

<style lang="scss" scoped>
     article {
        width: 30%;
    }
</style>
