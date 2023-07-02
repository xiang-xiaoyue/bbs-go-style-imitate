<template>
    <div class="info-item account">
        <div class="name">
            <label>用户名：</label>
        </div>
        <div class="value">
            <span>AkameRed</span>
        </div>
    </div>
    <div class="info-item account">
        <div class="name">
            <label>邮箱：</label>
        </div>
        <div class="value">
            <span>442160953@qq.com</span>
            <a>修改</a>
        </div>

    </div>
    <div class="info-item account">
        <div class="name">
            <label>密码：</label>
        </div>
        <div class="value">
            <span>密码已设置</span>
            <a>点击修改</a>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.account {
    display: flex;
    height: 32px;
    margin-bottom: 10px;
}
.name {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
    font-weight: 700;
    margin-right: 24px;
}
.value{
    flex: 5;
}
.value a {
    color: #485fc7;
    margin-left: 10px;
}
.value a:hover{
    color: #333;
}

</style>
