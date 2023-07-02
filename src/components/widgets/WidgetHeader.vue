<template>
    <!--widget的数据不是从父组件传来的，还是这个组件自己请求的-->
    <div class="widget-header">
        <div>
            <span>{{ props.title }}</span>
            <span class="count">{{ props.count }}</span>
        </div>
        <div class="slot">
            <a>更多</a>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['title','count'])
</script>

<style scoped>
.widget-header {
    padding: 8px 0;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.widget-header .count {
    color:  #70727c;
    margin-left: 8px;
    font-size: 14px;
}
.widget-header .slot {
    float: right;
    font-size: 0.8rem;
    font-weight: 400;
    color: #333;
}
</style>