<template>
    <div class="widget">
        <WidgetHeader :title="title" :count="count"></WidgetHeader>
        <div class="widget-content">
            <div class="user-follow-item" v-for="user in fans" v-if="fans">
                <a href="/" class="avatar">
                    <img :src="user.avatar" alt="">
                </a>
                <div class="user-follow-item-info">
                    <div class="nickname">
                        <a href="/">{{ user.nickname }}</a>
                    </div>
                    <div class="desc">{{ user.desc }}</div>
                </div>
                <button class="follow" style="width: 60px;">
                    <i class="ri-add-line"></i>
                    <span>关注</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { User } from './WidgetFollowingUsers.vue';
import WidgetHeader from './WidgetHeader.vue';
const title = ref('粉丝')
const count = ref(2)

const avatar = ref('http://127.0.0.1:3000/uploads/images/d3c9e75481ec4db28917f297663c0848.jpeg')

const fans = reactive<User[]>([{
    nickname:'red',
    avatar:avatar.value,
    desc:'这家伙很懒，什么都没留下',
},
{
    nickname:'AkameRed',
    avatar:avatar.value,
    desc:'这家伙很懒，什么都没留下',
}])

</script>

<style scoped>
/*正在关注的用户 */
.widget-content .user-follow-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
}
.user-follow-item a.avatar {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    display: block;
}
.user-follow-item a.avatar img {
    object-fit: cover;
    transition: all .5s ease-out .1s;
    background-color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.user-follow-item-info {
    margin: auto 10px;
}
.user-follow-item-info .nickname {
    font-size: 14px;
    color: #333;
}
.desc {
    font-size: 12px;
    color: #70727c;
    overflow: hidden;
    text-align: justify;
    word-break: break-all;
    text-overflow: ellipsis;
}
button.follow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: top;
    background-color: #7ba5f9;
    border: 1px solid #7ba5f9;
    font-size: 12px;
    height: 25px;
    color: #fff;
}
button.follow i,
button.follow span{
    font-size: 12px;
}


</style>
