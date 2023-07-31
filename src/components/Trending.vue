<template>
  <article class="trending mt-8 mr-4">
    <img :src="`@/assets/${movieCover}`" alt="" class="movie" />
    <button @click="$emit('bookmark')">
      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          stroke="#FFF"
          stroke-width="1.5"
          fill="none"
        />
      </svg>
    </button>
    <div class="absolute bottom-4 left-4">
      <p class="movie-info">
        <span>{{ movieYear }}</span>
        <span>
          <img src="@/assets/icon-category-movie.svg" alt="" role="presentation" />
          {{ movieCategory }}
        </span>
        <span>{{ movieRating }}</span>
      </p>
      <h3>{{ movieTitle }}</h3>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Home',
  props: {
    movieYear: {
      type: Number,
      required: true,
      default: 2019
    },
    movieCategory: {
      type: String,
      required: true,
      default: ''
    },
    movieRating: {
      type: String,
      required: true,
      default: ''
    },
    movieTitle: {
      type: String,
      required: true,
      default: ''
    },
    movieCover: {
      type: String
      // required: true,
      // default: ''
    }
  }
}
</script>
