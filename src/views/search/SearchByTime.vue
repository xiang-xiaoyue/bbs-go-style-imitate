<template>
    <div class="search-time-range">
        <select>
            <option value="0">时间不限</option>
            <option value="1">一天内</option>
            <option value="2">一周内</option>
            <option value="3">一月内</option>
            <option value="4">一年内</option>
        </select>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.search-time-range select {
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    cursor: pointer;
    font-size: 12px;
    line-height: 40px;
    max-width: 100%;
    height: 33px;
    display: inline-block;
    position: relative;
    vertical-align: top;
    outline: none;
    background-color: #fff;
}
 select option {
    min-height: 1.2em;
    padding: 0px 2px 1px;
}
</style>