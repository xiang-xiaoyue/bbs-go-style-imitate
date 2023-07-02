<template>
    <div class="main-body">
        <div class="signup">
            <div class="header">注册</div>
            <div class="content">
                <FormInput
                  placeholder="请输入昵称"
                  label="昵称"
                >
                    <i class="ri-user-line"></i>
                </FormInput>

                <FormInput
                   placeholder="请输入邮箱"
                   label="邮箱"
                >
                    <i class="ri-user-line"></i>
                </FormInput>

                <FormInput
                  label="密码"
                  placeholder="请输入密码"
                >
                    <i class="ri-user-line"></i>
                </FormInput>

                <FormInput
                  label="确认密码"
                  placeholder="请再次输入密码"
                >
                    <i class="ri-user-line"></i>
                </FormInput>

                <FormInput
                  label="验证码"
                  placeholder="验证码"
                  :vcodeurl="avatar"
                >
                    <i class="ri-user-line"></i>
                </FormInput>

                <div class="field">
                    <div class="control">
                        <Button text="注册"></Button>
                        <a href="/">已有账号，前往登录>></a>
                    </div>
                </div>
                <ThirdPartyLogin></ThirdPartyLogin>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/Button.vue';
import ThirdPartyLogin from '@/components/ThirdPartyLogin.vue'
import FormInput from '@/components/FormInput.vue';

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