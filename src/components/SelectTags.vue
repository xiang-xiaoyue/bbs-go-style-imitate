<template>
    <div class="field">
        <div class="select-tags">

            <!--选中的标签值会放到下面这个input的value属性里-->
            <input type="hidden" name="tags" id="tags">
            <div class="tags-selected">
                <!--里面每个div都是一个标签，选择了才会显示-->
                <div class="tag-item">
                    <span>Python</span>
                    <i class="ri-close-line"></i>
                </div>
            </div>

            <input type="text"
              placeholder="标签"
              class="input"
              @focusin="$emit('showTags')"
              @focusout="$emit('hideTags')"
            >
            <div class="autocomplete-tags" style="display: none;"></div>
            <div class="recommend-tags" :style="{
                display:displayTags?'block':'none'
            }">
                <div class="tags-container">
                    <div class="header">
                        <span>推荐</span>
                        <span class="close-recommend">
                            <i class="ri-close-line"></i>
                        </span>
                    </div>
                    <a class="tag-item">Go语言</a>
                    <a class="tag-item">Java</a>
                    <a class="tag-item">Python</a>
                    <a class="tag-item">JavaScript</a>
                    <a class="tag-item">分享</a>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
const props  = defineProps(['displayTags'])
</script>

<style scoped>
.select-tags {
    display: flex;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
    color: #333;
    padding: 0 8px;
    margin-top: 12px;
}
.tags-selected {
    display: flex;
}
 .tag-item {
    background-color: #f2f3f5;
    margin: 5px;
    padding: 0 10px;
    color: #333;
    line-height: 30px;
    border-radius: 5px;
    font-size: 12px;
    white-space: nowrap;
    text-align: center;
}
.tag-item span {
    display: inline-block;
}
.tag-item i {
    margin-left: 4px;
    font-size: 12px;
}
input.input {
    padding: 0;
    width: 100%;
    height: 40px;
    border: none;
    color: #333;
    font-size: 1rem;
    outline: 0;
}
.select-tags {
    position: relative;
}
.recommend-tags {
    position: absolute;
    top: 42px;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
}
.recommend-tags .tags-container {
    scroll-behavior: smooth;
    position: relative;
    background-color: #f7f7f7;
    border: 1px solid #dcdfe6;
    border-top: none;
    padding: 0 10px 10px;
}
.tags-container .header {
    font-weight: 700;
    font-size: 15px;
    color: #017e66;
    border-bottom: 1px solid #dcdfe6;
    margin-bottom: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
}
.tags-container .close-recommend {
    float: right;
    cursor: pointer;
}
.tags-container .close-recommend i {
    font-size: 16px;
}
.tags-container a.tag-item {
    padding: 0 11px;
    border-radius: 5px;
    display: inline-block;
    color: #017e66;
    background-color: rgba(1,126,102,.08);
    height: 22px;
    line-height: 22px;
    font-size: 13px;
    text-align: center;
}
.tags-container a.tag-item:not(:last-child){
    margin-right: 5px;
}




</style>