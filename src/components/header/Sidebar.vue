<template>
    <div class="side-bar">
        <div class="nav">
            <div class="nav-item">
                <i class="ri-apps-line"></i>
                <a href="/">话题</a>
            </div>
            <div class="nav-item">
                <i class="ri-apps-line"></i>
                <a href="/">话题</a>
            </div>
        </div>
        <div class="message">
            <i class="ri-mail-line"></i>
            <a href="/">消息</a>
        </div>
        <div class="user-info">
            <i class="ri-user-line"></i>
            <span>AkameRed</span>
        </div>
        <div class="menus">
            <div class="menu-item">
                <a href="/">个人中心</a>
            </div>
            <div class="menu-item">
                <a href="/">我的收藏</a>
            </div>
            <div class="menu-item">
                <a href="/">编辑资料</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.side-bar{
    width: 220px;
    align-items: center;
    height: 100vh;
    opacity: 1;
    position: fixed;
    z-index: 15;
    left: 0;
    top: 0;
    padding: 32px 24px;
    font-size: 14px;
    background-color: #fff;
}
.nav {
    padding: 7px 0;
    border-bottom: 1px solid #e9e9e9;
}
.nav .nav-item {
    padding: 12px 0;
}
.message {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 7px 0;
    border-bottom: 1px solid #e9e9e9;
}
.message i {
    margin-right: 5px;
}
.user-info {
    padding: 15px 0 8px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.user-info i {
    margin-right: 5px;
}
.side-bar .menus {
    margin-left: 26px;
}
.menus .menu-item {
    padding: 12px 0;
}
</style>
