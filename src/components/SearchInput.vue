<template>
  <form class="input-wrap" @submit.prevent="search()">
    <img src="@/assets/icon-search.svg" alt="" role="presentation" class="w-6 h-6" />
    <input :placeholder="placeholder" type="text" v-model="searchText" />
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const searchText = ref('')

function search() {
  console.log(searchText.value)
  router.push({ path: '/search', query: { s: searchText.value } })
}
console.log(searchText)

defineProps({
  placeholder: {
    type: String,
    default: 'Search...'
  }
})
</script>

<style scoped lang="scss">
.input-wrap {
  @apply flex py-2 mb-6 items-center;

  input {
    @apply w-full pl-4 text-white outline-none text-[1.1rem] font-light py-[inherit];

    &:focus-within {
      border-bottom: 1px solid var(--greyish-blue);
    }
  }

  input::placeholder {
    @apply opacity-50 text-white font-light text-[15px] md:text-[1rem];
  }
}

@media screen and (min-width: 1024px) {
  .input-wrap input::placeholder {
    font-size: 1.2rem;
  }
}
</style>
