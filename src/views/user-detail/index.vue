<template>
    <div class="wrapper">
        <div class="profile">
            <div class="change-bg">
                <label class="file-label">
                    <input type="file" class="file-input">
                    <span class="file-cta">
                        <i class="ri-upload-cloud-line"></i>
                        <span>设置背景</span>
                    </span>
                </label>
            </div>
            <a href="/" class="avatar">
                <img :src="avatar" alt="">
            </a>
            <div class="profile-info">
                <div class="metas">
                    <h1 class="nickname">
                        <a href="/">AkameRed</a>
                    </h1>
                    <div class="desc">
                        <p>这家伙很懒，什么都没留下</p>
                    </div>
                </div>
                <!--下面这个应该是只有管理员能看见-->
                <div class="actions-btns" style="display: none;"></div>
            </div>
        </div>
        <div class="main">
            <div class="left">
                <WidgetUserAchievements></WidgetUserAchievements>
                <WidgetUserInfo></WidgetUserInfo>
                <WidgetFans></WidgetFans>
                <WidgetFollowingUsers></WidgetFollowingUsers>
            </div>
            <div class="right">
                <div class="tabs-wrap">
                    <div class="tabs">
                        <ul>
                            <li class="is-active">
                                <a href="/">
                                    <i class="ri-fire-line"></i>
                                    <span>话题</span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i class="ri-bill-line"></i>
                                    <span>文章</span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i class="ri-star-line"></i>
                                    <span>收藏列表</span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i class="ri-mail-line"></i>
                                    <span>消息</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content">
                        <NoContentTip></NoContentTip>
                        <!--自己创建的内容列表：话题或文章:todo:文章没写过，不知道在界面是什么样式-->
                        <!-- <TopicItem v-for="i in 4"></TopicItem>
                        <LoadMore></LoadMore> -->
                        <div class="load-more">
                        <Button text="加载更多"></Button>
                        </div>
                        <!--收藏列表-->
                        <FavoriteItem v-for="i in 4"></FavoriteItem>
                        <div class="more-favorite"><span>查看更多</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import NoContentTip from './NoContentTip.vue'
import FavoriteItem from './FavoriteItem.vue'
import TopicItem from '@/components/TopicItem.vue';
import Button from '@/components/Button.vue';
import WidgetFans from '@/components/widgets/WidgetFans.vue';
import WidgetUserAchievements from '@/components/widgets/WidgetUserAchievements.vue';
import WidgetUserInfo from '@/components/widgets/WidgetUserInfo.vue';
import { reactive, ref } from 'vue';
import WidgetFollowingUsers from '@/components/widgets/WidgetFollowingUsers.vue';

const bg = ref('http://127.0.0.1:3000/uploads/images/2a7977bfe1a2e4d55406d261dcb0c260.png')

const avatar = ref('http://127.0.0.1:3000/uploads/images/d3c9e75481ec4db28917f297663c0848.jpeg')
export interface User {
    avatar:string,
    nickname:string,
    desc:string,
}

const users = reactive<User[]>([{
    nickname:'Red',
    avatar:avatar.value,
    desc:'这家伙很懒，什么都没留下',
},
{
    nickname:'Akame',
    avatar:avatar.value,
    desc:'这家伙很懒，什么都没留下',
}])

</script>

<style scoped>
@media screen and (max-width:1024px) {
    .main .left {
        width: auto;
    }
    .main .right {
        width: 100%;
    }
}
@media screen and (min-width: 1024px) and (max-width:1215px) {
    .main .left {
        width: 320px;
    }
    .main .right {
        width: 630px;
    }
}
@media screen and (min-width: 1215px) {
    .main .left {
        width: 320px;
    }
    .main .right {
        width: 822px;
    }
}
.wrapper {
    width: 100%;
}
.main {
    display: flex;
    justify-content: space-between;
    /*todo:delete bgc */
    background-color: #f2f2f2;
}
.profile {
    position: relative;
    display: flex;
    height: 220px;
    margin-bottom: 10px;
    background-image: url(http://127.0.0.1:3000/uploads/images/2a7977bfe1a2e4d55406d261dcb0c260.png);
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-size: cover;
    background-position: 50%;
}

/**todo */
.profile .change-bg {
    width: 100px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: .5;
}
/*“设置背景”样式 */
.file-label {
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    overflow: hidden;
    cursor: pointer;
}
/*
.file-input {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    outline: none;
    width: 100%;
    height: 100%;
}
*/

.file-cta {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: space-around; 
    line-height: 1.5;
    padding: 7px 10px;
    height: 2.5em;
    background-color: #f5f5f5;
    color: rgba(0,0,0,.7);
    border-radius: 4px;
    font-size: 1rem;
    padding: 0 1em;
    white-space: nowrap;
}
.file-cta i {
    font-size: 1rem;
}
a.avatar {
    position: absolute;
    top: 90px;
    left: 10px;
    width: 100px;
    height: 100px;
}
a.avatar img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    transition: all .5s ease-out .1s;
    background-color: #fff;
    border-radius: 50%;
}

/**todo */
.profile-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* height: 70px; */
    margin-top: 150px;
    padding: 10px 10px 10px 120px;
    background-image: linear-gradient(90deg,#fff,hsla(0,0%,100%,.5),rgba(220,233,242,0));
}
.profile-info .metas {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
}
.metas h1.nickname {
    font-size: 18px;
    font-weight: 700;
    color: #333;
}

.metas .desc {
    font-size: 14px;
    color: #333;
}

/*右侧主体部分样式 */
.tabs-wrap {
    background-color: #fff;
    padding: 0 10px 10px;
}
.tabs-wrap .tabs {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    font-size: 1rem;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
    margin-bottom: 5px;
}
.tabs-wrap .tabs ul {
    display: flex;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: flex-start;
    border-bottom: 1px solid #dbdbdb;
}
.tabs-wrap .tabs ul li {
    display: block;
}
.tabs-wrap .tabs ul li a{
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: -1px;
    padding: .5em 1em;
    vertical-align: top;
    color: #333;
}
.tabs-wrap .tabs ul li.is-active a {
    display: flex;
    justify-content: space-between;
    border-bottom-color: #485fc7;
    color: #485fc7;
}
.tabs-wrap .tabs ul li a i {
    margin-right: .3rem;
    font-size: 16px;
}

.more-favorite {
    text-align: center;
    line-height: 24px;
    padding: 8px 0;
    position: relative;
    overflow: hidden;
    margin: 0;
}
.more-favorite span {
    color: #485fc7;
    cursor: pointer;
}





</style>