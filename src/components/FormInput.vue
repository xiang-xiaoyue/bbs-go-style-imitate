<template>
    <!--TODO:是放到components目录，还是views/components目录？-->
    <div class="field">
        <label class="label">{{ label }}</label>
        <div class="icon-left">
            <input type="text" :placeholder="placeholder" />
            <span>
                <slot class="icon"></slot>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['placeholder','label'])
</script>

<style scoped>
.field label.label {
    color: #333;
    display: block;
    font-size: 1rem;
    font-weight: 700;
    height: 24px;
}
.field label.label:not(:last-child){
    margin-bottom: .5rem;
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
    width: 40px; /*2.5em*/
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
</style>