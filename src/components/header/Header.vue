<template>
    <!--pc-nav与mobile-nav的样式没有scoped，若是scoped，则某些样式失效-->
    <header class="header">
        <div class="container">
            <PcNav></PcNav>
            <MobileNav></MobileNav>
        </div>
    </header>
    <!-- <MobileDropdownMenus></MobileDropdownMenus> -->
    <!-- <MobileNodes></MobileNodes> -->
    <!-- <Overlay></Overlay> -->
    <!-- <Sidebar></Sidebar> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PcNav from './PcNav.vue';
import MobileNav from './MobileNav.vue'
import MobileNodes from './MobileNodes.vue';
import MobileDropdownMenus from './MobileDropdownMenus.vue';
import Sidebar from './Sidebar.vue'
import Overlay from './Overlay.vue'

const avatar =ref("https://randomuser.me/api/portraits/men/32.jpg")

</script>

<style>
header.header{
    width: 100%;
    /* height: 56px; */
    background-color: #fff;
    z-index: 1;
    /*当出现mobile-nodes组件时，设置此处z-index=10 */
    /* z-index: 10; */
}
header.header .container{
    width: 100%;
    display: flex;
}
/* 
*/
/*显示手机端导航,最窄*/
@media screen and (max-width:767px) {
    header.header .pc-nav {
        display: none;
    }
    header.header .mobile-nav {
        display: flex;
        height: 46px;
    }
}

/*显示手机端导航,中等宽*/
@media screen and (min-width:768px) and (max-width:1023px) {
    header.header .pc-nav {
        display: none;
    }
    header.header .mobile-nav {
        display: flex;
        height: 46px;
        width: 100%;
    }
    /* header.header .mobile-nav .center {
        display: none;
    } */
}

/*显示PC端导航,很宽*/
@media screen and (min-width:1024px) and (max-width:1215px) {
    header.header .pc-nav{
        width: 960px;
        height: 56px;
        display: flex;
        margin: 0 auto;
    }
    header.header .mobile-nav {
        display: none;
    }
}

/*显示PC端导航,最宽*/
@media screen and (min-width:1215px) {
    header.header .pc-nav{
        width: 1152px;
        height: 56px;
        display: flex;
        margin: 0 auto;
    }
    header.header .mobile-nav {
        display: none;
    }
}
</style>