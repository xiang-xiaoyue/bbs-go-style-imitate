<template>
    <div class="left-container">
        <div class="main-content">
            <div class="search-topics-nav">
                <ul>
                    <li class="topics-nav-item">全部</li>
                    <li class="topics-nav-item">推荐</li>
                    <li class="topics-nav-item">交流</li>
                    <li class="topics-nav-item">提问</li>
                    <li class="topics-nav-item">开源</li>
                    <li class="topics-nav-item">摸鱼</li>
                    <li class="topics-nav-item">妹子图</li>
                    <li class="topics-nav-item">反馈</li>
                </ul>
                <SearchByTime></SearchByTime>
            </div>
            <div class="empty-results">未搜索到内容</div>
        </div>
    </div>
    <div class="right-container">
        <WidgetCheckin></WidgetCheckin>
        <WidgetNotice></WidgetNotice>
        <WidgetScoreRank></WidgetScoreRank>
    </div>
</template>

<script setup lang="ts">
import WidgetNotice from '@/components/widgets/WidgetNotice.vue'
import WidgetScoreRank from '@/components/widgets/WidgetScoreRank.vue'
import SearchByTime from './SearchByTime.vue'
import WidgetCheckin from '@/components/widgets/WidgetCheckin.vue'

</script>

<style scoped>
.left-container {
    display: flex;
    /* width: calc(100%-330px); */
    flex: 1;
    padding-bottom: 10px;
}
.main-content {
    width: 100%;
    background-color: #fff;
    padding: 0 10px 10px;
    margin-bottom: 10px;
}
.search-topics-nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    border-bottom: 1px solid #e9e9e9;
}
.search-topics-nav ul {
    display: flex;
}
.topics-nav-item {
    display: inline-block;
    line-height: 22px;
    text-align: center;
    font-weight: 500;
    cursor: pointer; 
    position: relative;
    padding: 14px;

}
.empty-results{
    border-radius: 4px;
    position: relative;
    margin-top: 10px;
    padding: 20px 30px;
    background-color: #3e8ed0;
    color: #fff;
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