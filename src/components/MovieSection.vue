<template>
  <Toast v-if="showToast" />
  <section :aria-label="ariaLabel" class="recommended-movies pb-40">
    <h2 :id="ariaLabel" class="text-xl md:text-[1.5rem] my-8">{{ title }}</h2>
    <div class="inner-recomend flex-wrap flex gap-x-4 gap-y-28 xl:gap-y-40">
      <Movie
        class="w-[47%] sm:w-[31%] lg:w-[23%]"
        v-for="movie in movieList"
        :key="movie.title"
        :movie="movie"
        @bookmark="bookmarkMovie(movie)"
      />
    </div>
  </section>
</template>

<script setup>
import Toast from './Toast.vue'
import Movie from './Movie.vue'
import { useMoviesStore } from '@/stores/movies'

const store = useMoviesStore()
import { storeToRefs } from 'pinia'

const { bookmarkMovie } = store
const { showToast } = storeToRefs(store)

defineProps({
  ariaLabel: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  movieList: {
    type: Array,
    default: () => []
  }
})

// const emit = defineEmits(['bookmark']);
// const showToast = ref(false)

// function bookmarkMovie() {
//   emit('bookmark'); // Emit the "bookmark" event without any data
//   showToast.value = true;
// }
</script>
