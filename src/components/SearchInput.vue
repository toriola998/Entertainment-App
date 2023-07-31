<template>
  <div class="input-wrap">
    <img src="@/assets/icon-search.svg" alt="" role="presentation" class="w-6 h-6 ml-3" />
    <input :placeholder="placeholder" type="text" />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    placeholder: String
  }
}
</script>
