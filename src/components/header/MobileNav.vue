<template>
    <div class="mobile-nav">
        <div class="left">
            <i class="ri-menu-2-line"></i>
        </div>
        <div class="center">
            <div class="menu-item">首页</div>
            <div class="menu-item">话题<i class="ri-arrow-drop-down-line"></i></div>
        </div>
        <div class="right">
            <i class="ri-add-circle-line"></i>
        </div>
    </div>
    <!-- <MobileDropdownMenus></MobileDropdownMenus> -->
    <!-- <MobileNodes></MobileNodes> -->
    <!-- <Sidebar></Sidebar> -->

</template>

<script setup lang="ts">
</script>

<style>
.mobile-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 46px;
    width: 100%;
    box-shadow: 0 2px 0 00 #e9e9e9;
    background-color: #fff;
    padding: 0 16px;
    z-index: 3;
} 
.mobile-nav .left {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 56px;
    height: 46px;
    font-size: 24px;
    color: #d8d8d8;
    cursor: pointer;
}
.mobile-nav .center {
    display: flex;
    height: 46px;
}
.mobile-nav .center .menu-item {
    display: flex;
    text-align: left;
    align-items: center;
    font-size: 16px;
    color: #333;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
}
.center .menu-item i {
    font-size: 18px;
    margin-left: -2px;
}
.center .menu-item:not(:last-child){
    margin-right: 10px;
}
.mobile-nav .right {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 28px;
    height: 46px;
    cursor: pointer;
}
.mobile-nav .right i {
    color: #606266;
    font-size: 24px;
}
</style>