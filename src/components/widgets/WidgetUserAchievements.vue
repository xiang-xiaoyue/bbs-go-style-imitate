<template>
    <div class="widget">
        <WidgetHeader :title="title"></WidgetHeader>
        <div class="widget-content">
            <ul class="extra-info" v-if="as">
                <li v-for="achievement in as">
                    <span>{{ achievement.name }}</span>
                    <br>
                    <a href="/">
                        <b>{{ achievement.value }}</b>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import WidgetHeader from './WidgetHeader.vue';
const title = ref('个人成就')

export interface Achievement {
    name:string,
    value:number,
}
const as = reactive<Achievement[]>([
    {
        name:'积分',
        value:56,
    },
    {
        name:'话题',
        value:2,
    },
    {
        name:'评论',
        value:2,
    },
    {
        name:'注册排名',
        value:2,
    }])


</script>

<style scoped>
ul.extra-info{
    display: flex;
    list-style: none;
}
ul.extra-info li {
    width: 100%;
    text-align: center;
}
ul.extra-info li span{
    font-size: 13px;
    color: #70727c;
}
.ul.extra-info li a b {
    /*#333失败，应该是样式冲突了 */
    color: #333;
}

</style>