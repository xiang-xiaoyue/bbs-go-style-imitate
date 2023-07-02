<template>
    <div class="info-item avatar">
        <div class="name">
            <label>头像</label>
        </div>
        <div class="value">
            <img :src="avatar" alt="">
        </div>
    </div>
    <div class="info-item nickname">
        <div class="name">
            <label>昵称</label>
        </div>
        <div class="value">
            <input type="text" placeholder="AkameRed">
        </div>
    </div>
    <div class="info-item signature">
        <div class="name">
            <label>个性签名</label>
        </div>
        <div class="value">
            <textarea
                rows="2"
                placeholder="一句话介绍你自己"
                class="textarea"
            ></textarea>
        </div>
    </div>
    <div class="info-item page">
        <div class="name">
            <label>个人主页</label>
        </div>
        <div class="value">
            <input type="text" placeholder="https://www.example.com">
        </div>
    </div>
    <div class="info-item save">
        <div class="name"></div>
        <div class="value">
            <a class="button">保存</a>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const avatar = ref('http://127.0.0.1:3000/uploads/images/d3c9e75481ec4db28917f297663c0848.jpeg')
</script>

<style scoped>
.content .info-item{
    display: flex;
    width: 100%;
    margin-bottom: 10px;
}
.info-item.avatar {
    height: 120px;
}
.info-item .name {
    display: flex;
    align-items: center;
    justify-content: end;
    font-weight: 700;
    margin-right: 24px;
    flex: 1;
}
.info-item .value {
    flex: 5;
}
.content img{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
}
.info-item.nickname {
    height: 40px;
}
.page input,
.nickname input {
    height: 40px;
    border: 1px solid #dbdbdb;
    width: 100%;
    border-radius: 4px;
    color: #333;
    line-height: 44px;
    padding: 7px 12px;
    font-size: 16px;
    font-weight: 500;
}
.nickname input:focus,
.page input:focus,
.signature textarea:focus {
    border: none;
    outline: green solid 1px;
}
.info-item.signature {
    height: 72px;
}
.signature textarea{
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    padding: 12px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    color: #333;
    font-size: 1rem;
}
.info-item.page{
    height: 40px;
}
.info-item a.button {
    display: block;
    width: 66px;
    height: 40px;
    background-color: #48c78e;
    color: #fff;
    padding: 7px 16px;
    border-radius: 4px;
    font-size: 1rem;
}
</style>
