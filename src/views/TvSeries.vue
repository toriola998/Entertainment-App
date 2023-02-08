<template>
    <main class="home-inner">
        <SearchInput placeholder="Search for movies" />
        <section aria-label="movies" class="recommended-movies">
            <h2 id="movies">Movies</h2>
            <div class="inner-recomend">
                <div v-for="movie in movieList" :key="movie.title">
                    <RecommendMovie v-if="movie.category === 'TV Series'"
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
import RecommendMovie from '@/components/RecommendMovie.vue';
import { mapState } from 'vuex'

export default {
    name: 'TVSeries',
    components: {
        SearchInput,
        RecommendMovie
    },
    methods: {
        
    },
    computed: {
        ...mapState({
            movie: state => state.movie,
        }),

        movieList() {
            return JSON.parse(JSON.stringify(this.movie))
        },
    },
    mounted() {
        console.log(this.movieList)
    }
};
</script>

<style lang="scss" scoped>
</style>
