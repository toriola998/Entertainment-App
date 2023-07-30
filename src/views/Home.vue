<template>
    <main class="home-inner">
        <SearchInput placeholder="Search for movies or Tv Series"/>
        <section aria-label="trending" class="trend-wrap">
            <h2 id="trending">Trending</h2>
            <div>
                <div v-for="movie in movieList" :key="movie.title">
                    <Trending v-if="movie.isTrending === true"
                        :movieCategory="movie.category"
                        :movieRating="movie.rating"
                        :movieYear="movie.year"
                        :movieTitle="movie.title" 
                        :movieCover="movie.thumbnail.regular.small" 
                        @bookmark="ADD_IT">   
                    </Trending>
                </div>
            </div>
        </section>

        <!-- :image="`url(${movie.thumbnail.regular.small})`" -->
        <section aria-label="recommended-movies" class="recommended-movies">
            <h2 id="recommended-movies">Recommended for you</h2>
            <div class="inner-recomend">
                <Recommend v-for="movie in movieList" :key="movie.title"
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

<script lang="ts">
import { defineComponent } from 'vue';
import SearchInput from '@/components/SearchInput.vue';
import Trending from '@/components/Trending.vue';
import Recommend from '@/components/Recommend.vue';
import { mapState } from 'vuex'

export default defineComponent({
    name: 'Home',
    data() {
        return {
            trender: [],
        }
    },
    components: {
        Trending,
        SearchInput,
        Recommend
    },
    methods: {
        ADD_IT() {
            const movieDetail = {
                movieCategory: this.movie.category 
            }  
            this.$store.commit('ADD_TO_BOOKMARK',  movieDetail)
        }
    },
    computed: {
        ...mapState({
            movie: (state : any) => state.movie,
             isBookmarked: (state : any) => state.isBookmarked,
        }),

        movieList() {
            return JSON.parse(JSON.stringify(this.movie))
        },

    },
    mounted() {
        console.log(this.movieList);
        // console.log(this.trendingList)
    }
});
</script>

<style lang="scss" scoped>
</style>
