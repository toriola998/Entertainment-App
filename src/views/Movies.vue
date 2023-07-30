<template>
    <main class="home-inner">
        <SearchInput placeholder="Search for movies" />
        <section aria-label="movies" class="recommended-movies">
            <h2 id="movies">Movies</h2>
            <div class="inner-recomend">
                <div v-for="movie in movieList" :key="movie.title">
                    <Recommend v-if="movie.category === 'Movie'"
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

<script lang="ts">
import { defineComponent } from 'vue';
import SearchInput from '@/components/SearchInput.vue';
import Recommend from '@/components/Recommend.vue';
import { mapState } from 'vuex'

export default defineComponent({
    name: 'Home',
    components: {
        SearchInput,
        Recommend
    },
    methods: {
        
    },
    computed: {
        ...mapState({
            movie: (state : any) => state.movie,
        }),

        movieList() {
            return JSON.parse(JSON.stringify(this.movie))
        },
    },
    mounted() {
        console.log(this.movieList)
    }
});
</script>

<style lang="scss" scoped>
</style>
