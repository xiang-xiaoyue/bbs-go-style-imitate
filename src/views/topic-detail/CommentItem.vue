<template>
    <article class="comment">
        <div class="left">
            <a href="/">
                <img :src="avatar" alt="">
            </a>
        </div>
        <div class="main">
            <div class="meta">
                <div>
                    <a class="nickname" href="/">佚名</a>
                    <!--如果是评论以及对评论的回复，则没有下面两行-->
                    <!-- <span>回复</span>
                    <a class="nickname" href="/">其他人</a> -->
                </div>
                <time>2022-10-21 11:15:40</time>
            </div>
            <div class="content-wrapper">
                <div class="comment-content">
                    <div>456</div>
                </div>

                <!--评论以及对评论进行的回复没有comment-quote-->
                <!-- <div class="comment-quote">
                    <div class="comment-quote-content">
                        123
                    </div>
                </div> -->

            </div>
            <div class="actions">
                <div class="action-item">
                    <i class="ri-heart-line"></i>
                    <span>点赞</span>
                    <span>2</span>
                </div>
                <div class="action-item">
                    <i class="ri-message-2-line"></i>
                    <span>评论</span>
                </div>
            </div>
            <!--下面是回复列表-->
            <!-- <div class="replies">
            </div> -->
        </div>
    </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const avatar =ref("https://randomuser.me/api/portraits/men/32.jpg")

</script>

<style scoped>
article.comment {
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    padding: 10px 0;
}
article.comment .left a {
    display: block;
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 2px;
}
article.comment .left a img {
    border: 1px solid #e9e9e9;
    width: 40px;
    height: 40px;
}

article.comment .main {
    flex: 1 1 auto;
    margin-left: 16px;
}
article.comment .main .meta {
    display: flex;
    justify-content: space-between;
}
article.comment .main .meta a.nickname {
    font-size: 14px;
    font-weight: 600;
}
article.comment .main .meta time {
    font-size: 13px;
    color: #70727c;
}
article.comment .main .content-wrapper .comment-content{
    margin-top: 10px;
    margin-bottom: 0;
    color: #333;
    white-space: pre-wrap;
}
article.comment .main .content-wrapper .comment-quote {
    position: relative;
    background-color: #f2f3f5;
    border: 1px solid #dcdfe6;
    color: #70727c;
    padding: 0 12px;
    margin: 5px 0;
    border-radius: 4px;
}
article.comment .main .content-wrapper .comment-quote .comment-quote-content {
    margin: 5px 0;
    color: #70727c;
}
article.comment .main .actions {
    margin-top: 10px;
    display: flex;
    align-items: center;
}
article.comment .main .actions .action-item {
    margin-right: 16px;
    line-height: 22px;
    font-size: 13px;
    cursor: pointer;
    color: #70727c;
    /* user-select: none; */
}
article.comment .main .actions .action-item.active {
    color:#fa5151;
}
article.comment .action-item i {
    font-size: 16px;
}
article.comment .replies {
    margin-top: 10px;
    padding: 1px 10px;
    font-size: 12px;
    background-color: rgba(247,248,250, .7);
}

</style>