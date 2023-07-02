<template>
    <div class="topic-create">
        <h1 class="title">发文章</h1>
        <!--这里是markdown编辑器-->
         <MdEditor
           v-model="markdown"
         /> 

        <!--选择标签-->
        <SelectTags 
          @show-tags="displayTags=true"
          @hide-tags="displayTags=false"
          :display-tags="displayTags"
        ></SelectTags>

        <!--todo: 文章需要封面-->
        <div class="field">
            <div class="add-cover-btn">
                <input type="file" multiple accept="image/*">
                <div class="add-cover-btn-wrapper">
                    <div class="add-btn">
                        <i class="ri-add-line"></i>
                        <span>封面</span>
                    </div>

                </div>
            </div>
        </div>
        <!--封面结束-->

        <CaptchaInput label="验证码" placeholder="验证码" :vcodeurl="avatar">
            <i class="ri-shield-cross-line"></i>
        </CaptchaInput>
        <div class="field">
            <Button text="发表动态"></Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import Button from '@/components/Button.vue'
import FormInput from '@/components/FormInput.vue';
import SelectTags from '@/components/SelectTags.vue';
import CaptchaInput from '@/components/CaptchaInput.vue';

const avatar =ref("https://randomuser.me/api/portraits/men/32.jpg")
const displayTags = ref(false)
const markdown = ref('')

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
.simple-editor {
    border: 1px solid #e9e9e9;
    border-radius: 3px;
    position: relative;
    background: blue;
    width: 100%;
    height: 247px;
}
.simple-editor .simple-editor-toolbar {
    display: flex;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #e9e9e9;
    width: 100%;
    height: 45px;
    padding: 0 10px;
}
.simple-editor .act-btn {
    display: flex;
    width: 44px;
    height: 36px;
    padding: 0 10px;
}
.simple-editor .act-btn i {
    margin-left: 0;
    cursor: pointer;
    font-size: 24px;
}
.simple-editor .publish-container {
    height: 24px;
    margin-left: auto;
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
textarea {
    display: block;
    min-height: 200px;
    height: 200px;
    background-color: rgba(247,248,250,0.7);
    width: 100%;
    border: 0;
    outline: 0;
    position: relative;
    resize: none;
    line-height: 1.8;
    padding: 15px 15px 20px;
    overflow: auto;
    overscroll-behavior: contain;
    transition: all .1s linear;
    color: #333;
}
.add-cover-btn {
    width: 120px;
    height: 120px;
    cursor: pointer;
    border: 2px dashed #e9e9e9;
    position: relative;
}
.add-cover-btn input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    opacity: 0;
    display: block;
    cursor: pointer;
}
.add-cover-btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
.add-cover-btn-wrapper .add-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.add-cover-btn-wrapper .add-btn i {
    font-size: 24px;
    color: #1878f3;
}
.add-cover-btn-wrapper .add-btn span {
    font-size: 14px;
    color: #333;
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
button.create {
    width: 98px;
    height: 40px;
    font-size: 1rem;
}

</style>