<template>
    <div class="mobile-nodes">
        <div class="row first">
            <div class="item"><span>最新</span></div>
            <div class="item"><span>推荐</span></div>
        </div>
        <div class="row">
            <div class="item"><span>交流</span></div>
            <div class="item"><span>提问</span></div>
            <div class="item"><span>开源</span></div>
        </div>
        <div class="row">
            <div class="item"><span>摸鱼</span></div>
            <div class="item"><span>妹子图</span></div>
            <div class="item"><span>反馈</span></div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.mobile-nodes {
    position: fixed;
    top: 46px;
    left: 0;
    padding: 18px;
    border-top: 1px solid #e9e9e9;
    width: 100%;
    z-index: 10;
    background-color: #fff;
}
.row {
    display: flex;
    flex: 1;
}
.row.first {
    margin-bottom: 8px;
}
.row .item {
    background-color: rbga(247,248,250,0.7);
    border-radius: 4px;
    min-width: 108px;
    height: 40px;
    margin: 0 8px 8px 0;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 14px;
    color: #333;
    letter-spacing: .5px;
    text-align: center;
    cursor: pointer;
}
.row .item:hover{
    background-color: #e9e9e9;
}
</style>