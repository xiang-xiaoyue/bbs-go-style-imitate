<template>
    <button>{{ text }}</button>
</template>

<script setup lang="ts">
const props = defineProps(['text'])
</script>

<style scoped>
button{
    width: 98px;
    height: 40px;
    font-size: 1rem;
    background-color: #48c78e;
    color: #fff;
    cursor: pointer;
    border: none;
    padding: 7px 16px;
    border-radius: 4px;
    /* line-height: 1.5; */

}
</style>