<template>
    <ul>
        <li>
            <i class="ri-wireless-charging-line"></i>发动态</li>
        <li>
            <i class="ri-hashtag"></i>发帖子
        </li>
        <li>
            <i class="ri-bill-line"></i>发文章
        </li>
    </ul>
</template>

<script setup lang="ts">
</script>

<style scoped>
ul{
    background-color: pink;
    position: fixed;
    top: 41px;
    right: 5px;
    z-index: 11;
    width: 105px;
    padding: 10px 0;
    margin: 17px 0 5px 0;
    background-color: #fff;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    transform-origin: center top;
}
ul li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 38px;
    width: 100%;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
    outline: 0;
    padding: 0 20px;
}
ul li:hover{
    background-color: #ecf5ff;
    color: #66b1ff;
    text-align: center;
    vertical-align: middle;
}
li i {
    font-size: 16px;
    margin-right: 5px;
}
/*
ul .popper-arrow {
    top: -6px;
    left: 50%;
    border-width: 6px;
    border-top-width: 0;
    filter: drop-shadow(0 2px 12px rgba(0,0,0,.03));
    width: 0;
    height: 0;
    margin-right: 3px;
    border-style: solid;
}
*/
ul::before{
    content: '';
    display: block;
    position: absolute;
    top: -6px;
    right: 20px;
    width: 6px;
    height: 3px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    /* border-bottom: 6px solid #ebeef5; */
    border-bottom: 6px solid #fff;
}
</style>