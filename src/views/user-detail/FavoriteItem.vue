<template>
    <!--个人中心收藏列表需要用-->
    <article class="favorite-item">
        <div class="title" style="display: none;"></div>
        <div class="summary">今天天气不太好</div>
        <div class="meta">
            <span>
                <a href="/">佚名</a>
            </span>
            <span>
                <time>1天前</time>
            </span>
        </div>
    </article>
</template>

<script setup lang="ts">

</script>

<style scoped>
article {
    line-height: 24px;
    padding: 8px 0;
    position: relative;
    overflow: hidden;
    margin: 0;
    border-bottom: 1px solid #e9e9e9;
}
.summary {
    color: #333;
    overflow: hidden;
    text-align: justify;
    padding-top: 6px;
    word-break: break-all;
    text-overflow: ellipsis;
    font-size: 14px;
}
.meta {
    display: inblock;
    font-size: 13px;
    padding-top: 6px;
}
.meta span {
    padding: 0 6px 0 0;
    color: #70727c;
}
.meta span a {
    color: #3273dc;
}

</style>