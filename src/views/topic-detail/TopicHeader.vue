<template>
    <div class="topic-header">
        <div class="left">
            <a href="/">
                <img :src="avatar" />
            </a>
        </div>
        <div class="center">
            <div class="topic-nickname">
                <a href="/">佚名</a>
            </div>
            <div class="topic-meta">
                <span class="meta-item">发布于
                    <time>10天前</time>
                </span>
                <span class="meta-item">IP属地江苏省</span>
            </div>
        </div>
        <!--todo:-->
        <div class="right"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const avatar =ref("https://randomuser.me/api/portraits/men/32.jpg")

</script>

<style scoped>
.topic-header {
    display: flex;
    margin: 0 16px 16px;
}
.left {
    margin: 10px 10px 0 0;
}
.left a {
    display:block;
    position: relative;
    width:45px;
    height:45px;
    border-radius:2px;
}
.left a img {
    width:45px;
    height:45px;
    object-fit:cover;
    transition: all .5s ease-out .1s;
    background-color:#fff;
}
.center {
    margin: 10px 10px 0 0;
    width: 100%;
}
.center .nickname a {
    color: #555;
    font-size:16px;
    font-weight:700;
    overflow:hidden;
}
.center .topic-meta {
    position:relative;
    font-size:12px;
    line-height: 24px;
    color: #70727c;
    margin-top:5px;
}
.center .meta-item {
    font-size:12px;
}
.center .meta-item:not(:last-child){
    margin-right:8px;
}

</style>