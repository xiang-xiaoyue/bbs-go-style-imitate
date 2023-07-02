<template>
    <div class="topic-create">
        <h1 v-if="topicType===1" class="title">发动态</h1>
        <h1 v-else class="title">发帖子</h1>
        <div class="field">
            <div class="topic-tag selected">交流</div>
            <div class="topic-tag">提问</div>
            <div class="topic-tag">开源</div>
            <div class="topic-tag">摸鱼</div>
            <div class="topic-tag">妹子图</div>
            <div class="topic-tag">反馈</div>
        </div>
        <!--下面这个field是帖子标题，如果是发动态，就不需要显示它-->
        <div class="field" v-if="!topicType">
            <CreateTitle></CreateTitle>
        </div>
        <!--帖子标题结束-->

        <!--下面是“simple-editor”，用于发送动态，若要发布帖子，需要换成v-md-editor-->
        <div class="field">
            <CreateTweet v-if="topicType===1"></CreateTweet>
            <MdEditor
              v-else
              v-model="markdown"
              @on-upload-img="onUploadImg"
            />
        </div>
        <!--选择标签-->
        <SelectTags 
          @show-tags="displayTags=true"
          @hide-tags="displayTags=false"
          :display-tags="displayTags"
        ></SelectTags>



        <CaptchaInput label="验证码" placeholder="验证码" :vcodeurl="avatar">
            <i class="ri-shield-cross-line"></i>
        </CaptchaInput>
        <div class="field">
            <Button text="发表动态"></Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

import { onMounted, ref } from 'vue';
import CreateTitle from '@/components/CreateTitle.vue'
import FormInput from '@/components/FormInput.vue';
import Button from '@/components/Button.vue'
import CaptchaInput from '@/components/CaptchaInput.vue';

import CreateTweet from './CreateTweet.vue';
import SelectTags from '@/components/SelectTags.vue'

const displayTags=ref(false)

const avatar =ref("https://randomuser.me/api/portraits/men/32.jpg")
const routes = useRoute()
const topicType = ref<undefined|number>(undefined)
const markdown = ref('')
onMounted:{
    const createType = routes.query.type
    if(createType) {
        if(Number(createType)===1) {
            console.log('发布动态')
            topicType.value = Number(createType)
        }
    }else{
        console.log('这是发布帖子')
        topicType.value = undefined
    }
}

function onUploadImg(fs:any[]){
    console.log(fs)
}
</script>

<style scoped>
@media screen and (max-width:1024px) {
    .topic-create {
        width: 100%;
    }
}
@media screen and (min-width:1024px) and (max-width:1215px) {
    .topic-create {
        width: 960px;
    }
}
@media screen and (min-width:1215px)  {
    .topic-create {
        width: 1152px;
    }
}
.topic-create{
    background-color: #fff;
    padding: 30px;
}
h1.title {
    margin-bottom: 1.5rem;
    color: #333;
    font-weight: 600;
    line-height: 1.2;
}
.topic-create .topic-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f3f5;
    margin-right: 10px;
    margin-bottom: 10px;
    color: #70727c;
    border-radius: 5px;
    width: 46px;
    height: 27px;
    font-size: 14px;
    font-weight: 700;
}
.topic-create .topic-tag.selected {
    color: #fff;
    background-color: #3273dc;
}
.publish-container strong {
    width: 90px;
    font-size: 14px;
    margin-right: 10px;
    color: #d8d8d8;
} 
.simple-editor .simple-editor-input {
    width: 100%;
    height: 200px;
}
.select-tags {
    display: flex;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
    color: #333;
    padding: 0 8px;
}
.tags-selected {
    display: flex;
}
 .tag-item {
    background-color: #f2f3f5;
    margin: 5px;
    padding: 0 10px;
    color: #333;
    line-height: 30px;
    border-radius: 5px;
    font-size: 12px;
    white-space: nowrap;
    text-align: center;
}
.tag-item span {
    display: inline-block;
}
.tag-item i {
    margin-left: 4px;
    font-size: 12px;
}
input.input {
    width: 100%;
    border: none;
    outline: 0;
}
.recommend-tags {
    position: absolute;
    top: 42px;
    left: 0;
    bottom: 0;
    right: 0;
 /*   z-index: 2;*/
}
.recommend-tags .tags-container {
    scroll-behavior: smooth;
    position: relative;
    background-color: #f7f7f7;
    border: 1px solid #dcdfe6;
    border-top: none;
    padding: 0 10px 10px;
}
.tags-container .header {
    font-weight: 700;
    font-size: 15px;
    color: #017e66;
    border-bottom: 1px solid #dcdfe6;
    margin-bottom: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
}
.tags-container .close-recommend {
    float: right;
    cursor: pointer;
}
.tags-container .close-recommend i {
    font-size: 16px;
}
.tags-container a.tag-item {
    padding: 0 11px;
    border-radius: 5px;
    display: inline-block;
    color: #017e66;
    background-color: rgba(1,126,102,.08);
    height: 22px;
    line-height: 22px;
    font-size: 13px;
    text-align: center;
}
.tags-container a.tag-item:not(:last-child){
    margin-right: 5px;
}
.field.hor {
    display: flex;
    align-items: center;
}
.icon-left span {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5em;
    height: 2.5em;
    pointer-events: none;
    color: #dbdbdb;
}
.icon-left i {
    font-size: 16px;
}
.icon-left input {
    padding-left: 2.5em;
    max-width: 150px;
    margin-right: 2px;
    width: 100%;
    border: 1px solid #dbdbdb;
}
.captcha {
    background-color: orange;
}
</style>
