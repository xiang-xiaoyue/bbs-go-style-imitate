<template>
    <div class="main-body">
        <div class="signin">
            <div class="header">登录</div>
            <div class="content">
                <FormInput placeholder="请输入用户名或邮箱" label="用户名/邮箱">
                    <i class="ri-user-line"></i>
                </FormInput>

                <FormInput placeholder="请输入密码" label="密码">
                            <i class="ri-user-line"></i>
                </FormInput>

                <FormInput
                  placeholder="验证码"
                  label="验证码"
                  :vcodeurl="avatar"
                >
                    <i class="ri-user-line"></i>
                </FormInput>

                <div class="field">
                    <Button text="登录"></Button>
                    <a href="/">没有账号？点击这里去注册>></a>
                </div>
                <ThirdPartyLogin></ThirdPartyLogin>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/Button.vue';
import FormInput from '@/components/FormInput.vue';
import ThirdPartyLogin from '@/components/ThirdPartyLogin.vue';

const avatar =ref("https://randomuser.me/api/portraits/men/32.jpg")
</script>

<style scoped>
.main-body {
    width: 100%;
    padding: 10px;
}
.header {
    padding: 8px 0;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.content {
    padding: 8px 0;
    word-break: break-all;
}



</style>