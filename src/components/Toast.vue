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

<style scoped></style>
