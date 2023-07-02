<template>
    <div class="widget">
        <WidgetHeader :title="title"></WidgetHeader>
        <div class="widget-content">
            <div v-if="currentUser">
                <div class="str">
                    <div class="label">昵称</div>
                    <div class="value">AkameRed</div>
                </div>
                <div class="str">
                    <div class="label">签名</div>
                    <div class="value">这家伙很懒，什么都没留下</div>
                </div>
                <div class="str">
                    <div class="label">主页</div>
                    <div class="value"><a href="/">https://www.example.com</a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { User } from './WidgetFollowingUsers.vue';
import WidgetHeader from './WidgetHeader.vue';
const title = ref('个人资料')
const currentUser = reactive<User>({
    nickname:"Akame",
    avatar:'',
    desc:'这家伙很懒，什么也没写',
})
</script>

<style scoped>
.widget-content .str {
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    font-size: 14px;
}
.str .label {
    color: #333;
    flex-shrink: 0;
    margin-right: 18px;
}
.str .value {
    margin-left: 4px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    color: #333;
}


</style>
