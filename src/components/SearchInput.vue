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

<script>

export default {
    name: 'SearchInput',
    props: {
       placeholder: String
    },
};
</script>