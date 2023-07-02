<template>
    <div class="widget">
        <div class="widget-header">积分排行</div>
        <div class="widget-content">
            <ul class="score-rank">
                <li class="rank-item" v-for="i in 5">
                    <img :src="avatar" alt="akame">
                    <div class="user-info">
                        <a href="/">akame</a>
                        <p>672 帖子 · 1339 评论</p>
                    </div>
                    <div class="rank-info">
                        <i class="ri-coin-line"></i>
                        <span>3745</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const avatar = ref('http://127.0.0.1:3000/uploads/images/d3c9e75481ec4db28917f297663c0848.jpeg')
</script>

<style scoped>
li.rank-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 13px;
    position: relative;
    padding: 10px  0;
}
ul.score-rank li:not(:last-child){
    border-bottom: 1px solid #e9e9e9;
}

li.rank-item img {
    display: block;
    position: relative;
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 50%;
    transition: all .5s ease-out .1s;
    background-color: #fff;
}
li.rank-item .user-info {
    height: 40px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-left: 9px;
    width: 100%;
    line-height: 1.4;
    font-size: 12px;
}
li.rank-item .user-info a {
    display: inline-block;
    vertical-align: bottom;
    font-size: 14px;
    color: #333;
    line-height: 20px;
}
li.rank-item .user-info p{
    font-size: 11px;
    color: #70727c;
    line-height: 20px;
    display: block;
}
li.rank-item .rank-info {
    width: 60px;
    height: 21px;
    line-height: 21px;
    float: right;
    border-radius: 12px;
    color: #70727c;
    padding: 0 6px;
    text-shadow: 0 0 1px #fff;
    background-color: rgba(247,248,250, 0.7);
    font-size: 12px;
}
li.rank-item .rank-info i {
    margin-right: 3px;
}

</style>