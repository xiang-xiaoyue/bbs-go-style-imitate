<template>
    <div class="third-party-line">
        <div class="title">
            <span>第三方账号登录</span>
        </div>
    </div>
    <div class="third-parties">
        <a href="/" class="button is-black">
            <i class="ri-github-fill"></i>
            <strong>Github登录</strong>
        </a>
        <a href="/" class="button is-info">
            <i class="ri-qq-fill"></i>
            <strong>QQ登录</strong>
        </a>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/*第三方登录相关样式，主要用于signup,signin页面*/
.third-party-line {
    border-bottom: 1px solid #dcdfe6;
    margin-bottom: 24px;
}
.third-party-line .title {
    margin-bottom: -12px;
    text-align: center;
}
.third-party-line .title span {
    background-color: #fff;
    padding: 0 10px;
    font-size: 13px;
}
.third-parties {
    text-align: center;
    margin: 10px 0;
}
.third-parties a:not(:last-child){
    margin-right: 10px;
}
.button {
    color: #333;
    font-size: 1rem;
    height: 2.5rem;
    line-height: 1.5;
    vertical-align: top;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    padding: .5em 1em;
    text-align: center;
    white-space: nowrap;
}
.button.is-black {
    background-color: #0a0a0a;
    color: #fff;
}

</style>