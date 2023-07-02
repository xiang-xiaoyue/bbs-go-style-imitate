<template>
    <!--TODO:是放到components目录，还是views/components目录？-->
    <div class="field">
        <div class="icon-left">
            <input type="text" :placeholder="placeholder" />
            <span>
                <slot class="icon"></slot>
            </span>
            <!--下面是验证码，一般的登录、注册输入框没有这个-->
            <a href="/" class="captcha" v-if="vcodeurl">
                <img :src="vcodeurl" alt="">
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import FormInput from './FormInput.vue';
const props = defineProps(['placeholder','vcodeurl'])

</script>


<style scoped>
.field input {
    width: 150px;
}
.field .icon-left {
    position: relative;
    height: 40px;
    box-sizing: border-box;
    clear: both;
    font-size: 1rem;
    display: flex;
}
span {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-flex;
    width: 40px; 
    height: 40px;
    align-items: center;
    justify-content: center;
    color: #dbdbdb;
}

/*下面这些样式属于验证码所有 */
.field a {
    color: #333;
    margin-left: 16px;
    text-decoration:underline;
}
.field a.captcha {
    color: #485fc7;
    margin-left: 22px;
}
.field a.captcha img {
    height: 40px;
    width: 91px;
}
</style>