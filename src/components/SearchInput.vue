<template>
    <div class="input-wrap">
        <img src="@/assets/icon-search.svg" 
            alt="" 
            role="presentation" 
            height="20"
            width="20" />
        <input :placeholder="placeholder" type="text" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SearchInput',
    props: {
       placeholder: String
    },
});
</script>