<template>
    <!--主页与个人中心页面都用得到，以后或许还有其他页面也用得到，于是放在components目录-->
    <article class="topic-item">
        <div class="topic-avatar">
            <a href="/">
                <img :src="avatar" alt="">
            </a>
        </div>
        <div class="topic-main-content">
            <header class="topic-top">
                <a href="/" class="nickname">萌宠</a>
                <span class="time">发布于五天前</span>
            </header>
            <main class="topic-content">
                <!--上面的topic-content，默认是有标题的，若再加上类topic-tweet，则没有标题-->
                <h1 class="topic-title">
                    <a href="/">这是帖子标题</a>
                </h1>
                <a href="/" class="topic-summary">这是帖子的摘要,不止是一个a标签,加上带其他标签的内容也行</a>
                <ul class="topic-image-list">
                    <li><a href="/" class="image-item"><img :src="pic" alt=""></a></li>
                    <li><a href="/" class="image-item"><img :src="pic" alt=""></a></li>
                </ul>
            </main>
            <footer class="topic-bottom">
                <div class="topic-handlers">
                    <div class="btn liked">
                        <i class="ri-heart-line"></i>已赞
                        <span>2</span>
                    </div>
                    <div class="btn">
                        <i class="ri-message-2-line"></i>评论
                        <span>2</span>
                    </div>
                    <div class="btn">
                        <i class="ri-book-open-line"></i>浏览
                        <span>2</span>
                    </div>
                </div>
                <div class="topic-tags">
                    <a href="/" class="topic-tag">交流</a>
                </div>
            </footer>
        </div>
    </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const avatar =ref("https://randomuser.me/api/portraits/men/32.jpg")
const pic = avatar
</script>

<style scoped>
article {
    /* height: 80px; */
    background-color: blue;
}
article {
    position: relative;
    display: flex;
    padding: 12px;
    overflow: hidden;
    /* transform: background .5s; */
    border-radius: 3px;
    background-color: #fff;
}
article:not(:last-child) {
    margin-bottom: 10px;
}
.topic-avatar a{
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 2px;
    position: relative;
}
.topic-avatar a img {
    width: 50px;
    height: 50px;
    background-color: #fff;
    transition: all .5s ease-out .1s;
    object-fit: cover;
    border-radius: 50%;
}
.topic-main-content {
    margin-left: 12px;
}
/*内容主体的顶部样式：昵称，发布时间 */
.topic-main-content header.topic-top {
    height: 24px;
    margin-bottom: 8px;
}
.topic-top a {
    font-weight: 700;
    font-size: 16px;
    max-width: 250px;
    overflow: hidden;
    color: #70727c;
}
.topic-top span.time{
    font-size: 12px;
    float: right;
    display: flex;
    color: #70727c;
}

/*内容主体的内容样式，有的有标题，有的没有 */
.topic-content h1.topic-title{
    display: inline-block;
    margin-bottom: 6px;
    word-wrap: break-word;
    word-break: break-all;
    width: 100%;
    font-weight: 400;
    font-weight: 600;
    font-size: 16px;
}
.topic-summary {
    font-size: 15px;
    margin-bottom: 6px;
    width: 100%;
    word-wrap: break-word;
    overflow: hidden;
    text-align: justify;
    word-break: break-all;
    text-overflow: ellipsis;
}
/*如果要图片列表，样式如下 */
.topic-content .topic-image-list{
    margin-top: 10px;
}
.topic-content .topic-image-list li {
    cursor: pointer;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    margin: 0 8px 8px 0;
    background-color: rgba(247,248,250, .7);
    background-size: 32px 32px;
    background-position: 50%;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
}
.topic-content .topic-image-list li:first-child:last-child{
    width: 210px;
    height: 210px;
    line-height: 210px;
}
.topic-content .topic-image-list li a.image-item {
    width: 210px;
    height: 210px;
    display: block;
    overflow: hidden;
    transform-style: preserve-3d;
    color: #485fc7;
}
a.image-item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .5s ease-out .1s;
}


/*内容主体的底部样式,点赞，评论，浏览等 */
.topic-bottom {
    display: flex;
}
.topic-handlers {
    display: flex;
    align-items: center;
    margin-top: 6px;
    font-size: 12px;
    flex: 1;
}
.topic-handlers .btn {
    cursor: pointer;
}
.btn:not(:last-child) {
    margin-right: 20px;
}
.topic-handlers .btn i {
    margin-right: 3px;
    font-size: 12px;
    position: relative;
}
.topic-tags a.topic-tag {
    padding: 2px 8px;
    border-radius: 12px;
    margin-right: 10px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #70727c;
    font-size: 12px;
}
</style>