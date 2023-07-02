<template>
    <div class="comment-form">
        <div class="wrapper">

        <textarea placeholder="请输入要发表的内容..."></textarea>
        <div class="text-editor-bar">
            <div class="text-editor-actions">
                <div class="text-editor-action-item">
                    <i class="ri-image-line"></i>
                    <span>图片</span>
                </div>
            </div>
            <div class="text-editor-btn">
                <span>Ctrl/⌘ + Enter</span>
                <button>发布</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.comment-component .comment-form {
    margin-bottom: 18px;
    padding: 10px;
    height: 161px;
}
.comment-form .wrapper {
    border: 1px solid #e9e9e9;
    border-radius: 4px;
}
.comment-component .comment-form textarea {
    min-height: 120px;
    height: 120px;
    width: 100%;
    /* background-color: #fff; */
    background-color: rgba(247,248,250,.7);
    border: 0;
    outline: 0;
    display: block;
    position: relative;
    resize: none;
    line-height: 1.8;
    padding: 15px 15px 20px;
    overflow: auto;
    overscroll-behavior: contain;
    transition: all .1s linear;
    color: #333;
}
.text-editor-bar {
    background-color: #fff;
    border-top: 1px solid #e9e9e9;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.text-editor-action-item {
    cursor: pointer;
    color: #70727c;
    /* user-select: none; */
    font-size: 16px;
}
.text-editor-btn {
    display: flex;
    align-items: center;
}
.text-editor-btn span {
    font-size: 12px;
    color: #70727c;
    margin-right: 5px;
}
.text-editor-btn button {
    display: flex;
    align-items: center;
    padding: 5px 12px;
    border: 1px;
    font-size: .8rem;
    border-radius: 2px;
    background-color: #48c78e;
    color: #fff;
    cursor: pointer;
}
</style>