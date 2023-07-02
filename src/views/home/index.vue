<template>
    <div class="left-container">
        <div class="topics-nav">
            <TopicsNav></TopicsNav>
        </div>
        <div class="topics-main">
            <TopicItem v-for="i in 10"></TopicItem>
            <!-- <LoadMore></LoadMore> -->
            <div class="load-more">
                <Button
                  text="加载更多"
                ></Button>
            </div>
        </div>
    </div>
    <div class="right-container">
        <WidgetNotice></WidgetNotice>
    </div>
</template>

<script setup lang="ts">
import WidgetNotice from '@/components/widgets/WidgetNotice.vue'
import Button from '@/components/Button.vue';
import TopicsNav from './TopicsNav.vue';
import TopicItem from '@/components/TopicItem.vue'

</script>

<style scoped>
.left-container {
    display: flex;
    /* width: calc(100%-330px); */
    flex: 1;
    padding-bottom: 10px;
}
.right-container {
    width: 320px;
    margin-left: 10px;
}
    /* 
    load-more下面的按钮需要下面的设置
    width: 150px;
    background-color: #00d1b2;
    border: 1px solid #00d1b2; 
    */
</style>