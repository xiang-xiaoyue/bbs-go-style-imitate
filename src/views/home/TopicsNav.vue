<template>
    <nav>
        <ul>
            <li class="active">
                <a href="/topics/node/recommend">
                    <img :src="avatar" class="node-logo">
                    <span class="node-name">推荐</span>
                </a>
            </li>
            <li v-for="i in 5">
                <a href="/topics/node/recommend">
                    <img :src="avatar" class="node-logo">
                    <span class="node-name">推荐</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const avatar =ref("https://randomuser.me/api/portraits/men/32.jpg")
</script>

<style scoped>
nav {
    position: sticky;
    top: 10px;
    width: 150px;
    border-radius: 2px;
    transition: all .2s linear;
}
nav ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px 12px;
    background-color: #fff;
}
nav ul li {
    position: relative;
    cursor: pointer;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    border-radius: 3px;
    transition: background-color .2s, color .2s;
    font-weight: 500;
}
nav ul li:hover{
    background-color: #f3f3f3;
    transition: background-color .4s;
}
nav ul li:not(:first-child){
    margin-top: 10px;
}
li a {
    color: #70727c;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 30px;
    padding-left: 10px;
    display: flex;
    align-items: center;
}
li a img {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    margin-right: 10px;
}
li.active {
    background-color: #ea6f5a;
    color: #fff;
}
li.active .node-name {
    color: #fff;
}

</style>