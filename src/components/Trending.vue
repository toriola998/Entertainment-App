<template>
  <article class="trending mt-8 mr-4">
    <img :src="imageUrl" alt="" class="movie max-w-[unset] h-[200px] w-[450px]" />
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
      <p class="movie-info flex items-center">
        <span>{{ movie.year }}</span>
        <span class="flex items-center">
          <img src="@/assets/icon-category-movie.svg" alt="" role="presentation" class="mr-2" />
          {{ movie.category }}
        </span>
        <span>{{ movie.rating }}</span>
      </p>
      <h3>{{ movie.title }}</h3>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const imageUrl = new URL(`/src/assets/${props.movie.thumbnail.regular.small}`, import.meta.url).href
</script>
