<template>
    <div class="left-container">
        <div class="main-content">
            <article class="topic-detail">
                <!--详情页面上方的作者信息及发布相关信息-->
                <TopicHeader></TopicHeader>

                <!--内容详情-->
                <div class="topic-content">
                    <h1 class="topic-title">技术交流有以下几个目的</h1>
                    <div class="topic-content-detail">
                        <ol>
                            <li>学习和成长：技术交流可以帮助个人学习更多的知识和技能，了解最新的技术趋势和最佳实践，实现个人的技术成长。 2. 问题解决：技术交流可以帮助解决个人和团队遇到的技术问题，让更多人参与讨论和解决。 3. 知识共享：技术交流可以促进知识共享和团队合作，提高团队整体的技术水平和效率。 4. 建立人脉关系：技术交流可以帮助建立更广泛、更深入的技术人脉关系，扩大自己的人际圈。 5. 推广自己：技术交流可以让个人展示自己的技能和成果，提高自己的知名度和影响力，增加职业发展的机会。</li>
                        </ol>
                    </div>
                </div>

                <!--内容的标签-->
                <div class="topic-tags">
                    <a href="/" class="topic-tag">交流</a>
                    <a href="/" class="topic-tag">#Java</a>
                </div>

                <!--对内容进行的动作-->
                <TopicActions></TopicActions>
            </article>
            <div class="comment-component">
                <div class="comment-header">
                    <span>198条评论</span>
                </div>
                <!--评论发布框开始-->
                <CommentInput></CommentInput>
                <!--评论发布框结束-->

                <!--展示评论及回复列表-->
                <div class="comments">
                    <CommentItem v-for="i in 5"></CommentItem>
                    <!-- <LoadMore></LoadMore> -->
                    <div class="load-more">
                        <Button text="加载更多"></Button>
                    </div>
                </div>
                <!--评论及回复列表结束-->
            </div>
        </div>
    </div>
    <div class="right-container">
        <Author></Author>
    </div>
</template>

<script setup lang="ts">
import Author from '@/components/widgets/WidgetAuthor.vue';
import Button from '@/components/Button.vue';

import TopicActions from './TopicActions.vue'
import TopicHeader from './TopicHeader.vue'

import CommentInput from './CommentInput.vue'
import  CommentItem from './CommentItem.vue';

</script>

<style scoped>
/*页面左边样式 */
.left-container {
    flex: 1;
    transition: width .2s;
}
.main-content {
    margin-bottom: 10px;
}
.main-content article.topic-detail {
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 3px;
}
.topic-content {
    margin: 0 16px 16px;
    font-size: 15px;
    color: #000;
    white-space: normal;
    word-break: break-all;
    padding-top: 0;
}
.topic-content h1.topic-title {
    font-weight: 700;
    font-size: 20px;
    word-wrap: break-word;
    word-break: normal;
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: 10px;
    margin-bottom: 0.5em;
    line-height: 1.125;
    color: #333;
}
/*内容详情主体应当是外部引入CSS样式 */
.topic-content .topic-content-detail {
    font-size: 16px;
    line-height: 24px;
    word-wrap: break-word;
}
.topic-tags {
    margin: 0 16px 16px;
}
.topic-tags a.topic-tag {
    padding: 2px 8px;
    border-radius: 12px;
    margin-right: 10px;
    background-color: rgba(247,248,250,.7);
    border: 1px solid #e9e9e9;
    color: #70727c;
    font-size: 12px;
}

.comment-component {
    background-color: #fff;
    border-radius: 3px;
}
.comment-component .comment-header {
    display: flex;
    padding-top: 20px;
    margin: 0 10px;
    color: #333;
    font-size: 16px;
    font-weight: 500;
}

.comments {
    padding: 10px;
    font-size: 14px;
}

/*页面右边样式 */
.right-container{
    width: 360px;
    height: 231px;
    margin-left: 10px;
}
@media screen and (max-width:1024px) {
    .left-container {
        width: 100%;
        margin-right: 0;
    }
    .right-container {
        display: none;
    }
    
}

</style>