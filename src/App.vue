<template>
  <div class="home">
    <div>
      <The-nav-bar />
      <Router-view />
    </div>
  </div>
</template>

<script setup>
import TheNavBar from '@/components/TheNavBar.vue'
</script>

<style scoped lang="scss">
.home {
  @apply bg-dark-blue min-h-[100vh];

  > div {
    grid-template-columns: 7% auto;
    @apply lg:grid max-w-[1600px] mx-auto gap-x-8 xl:gap-x-0;
  }
}
</style>
