<template>
    <div class="topic-actions">
        <div class="action disabled">
            <i class="ri-book-open-fill"></i>
            <div class="action-text">
                <span>浏览</span>
                <span class="action-text">(111)</span>
            </div>
        </div>
        <div class="action">
            <i class="ri-heart-line"></i>
            <div class="action-text">
                <span>点赞</span>
            </div>
        </div>
        <div class="action">
            <i class="ri-star-line"></i>
            <div class="action-text">
                <span>收藏</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.topic-actions {
    margin: 0 16px 16px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #e9e9e9;
}
.topic-actions .action {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #70727c;
    font-size: 14px;
}
.topic-actions .action.disabled {
    cursor: not-allowed;
}
.topic-actions .action>i {
    fill: #8590a6;
    font-size: 16px;
    font-style: normal;
}
.topic-actions .action .action-text {
    color: #333;
    margin-left: 5px;
}
</style>