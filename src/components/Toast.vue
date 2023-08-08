<template>
  <div class="fixed top-16 right-2 rounded-sm p-4 bg-red z-50 text-white font-light toast">
    {{ info }}
  </div>
</template>

<script setup>
import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'

const store = useMoviesStore()
const { info } = storeToRefs(store)
</script>

<style scoped>
.toast {
  animation: mymove 0.5s ease-in-out;
}

@keyframes mymove {
  from {
    right: -500px;
  }
  to {
    right: 0px;
  }
}
</style>
