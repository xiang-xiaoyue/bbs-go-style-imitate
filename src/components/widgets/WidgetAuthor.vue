<template>
    <!--这个部件会在某几个页面重复出现，所以抽取出来-->
    <div class="user-sample">
        <div class="base-info">
            <a class="avatar" href="/">
                <img :src="avatar" alt="">
            </a>
            <div class="nickname">
                <a href="/">佚名</a>
            </div>
            <div class="desc">这家伙很懒，什么也没写！</div>
        </div>
        <div class="extra-info">
            <ul>
                <li>
                    <span>积分</span>
                    <br>
                    <b>12</b>
                </li>
                <li>
                    <span>话题</span>
                    <br>
                    <b>1</b>
                </li>
                <li>
                    <span>评论</span>
                    <br>
                    <b>1</b>
                </li>
                <li>
                    <span>注册排名</span>
                    <br>
                    <b>12</b>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const avatar =ref("https://randomuser.me/api/portraits/men/32.jpg")

</script>

<style scoped>
.user-sample{
    width: 100%;
    background-color: #fff;
    margin: 0 0 10px;
    border-radius: 3px;
}
.base-info{
    padding: 10px;
    text-align: center;
}
.base-info a.avatar {
    display: block;
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 2px;
    margin: 0 auto;
}
.base-info a.avatar img {
    display: block;
    width: 80px;
    height: 80px;
    object-fit: cover;
    transition: all .5s ease-out .1s;
    background-color: #fff;
}
.base-info .nickname {
    font-size: 15px;
    font-weight: 700;
    margin: 10px auto;
}
.base-info .nickname a {
    color: #485fc7;
}
.base-info .desc {
    text-align: center;
    font-size: 13px;
    margin-top: 5px;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
}
.extra-info {
    padding: 5px 0;
    border-top: 1px solid #e9e9e9;
}
.extra-info ul {
    display: flex;
}
.extra-info ul li  {
    width: 100%;
    text-align: center;
}
.extra-info ul li span{
    font-size: 13px;
    color: #70727c;
}
.extra-info ul li b{
    font-weight: bold;
}

</style>