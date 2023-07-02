<template>
    <div class="simple-editor">
        <div class="simple-editor-toolbar">
            <div class="act-btn">
                <i class="ri-image-line"></i>
            </div>
            <div class="publish-container">
                <strong>{{ inputed }} / 500</strong>
            </div>
        </div>
        <div class="simple-editor-input">
            <textarea
              placeholder="请输入想发表的内容..."
              v-model="content"
              @input="onChange"
            ></textarea>
        </div>
        <!--todo: -->
        <div class="simple-editor-image-upload" style="display:none;"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const content = ref('')
const inputed = ref(0)
function onChange(e:Event){
    //console.log(e)
    inputed.value = content.value.length
}
</script>

<style scoped>
.simple-editor {
    border: 1px solid #e9e9e9;
    border-radius: 3px;
    position: relative;
    width: 100%;
    height: 247px;
}
.simple-editor .simple-editor-toolbar {
    display: flex;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #e9e9e9;
    width: 100%;
    height: 45px;
    padding: 0 10px;
}
.simple-editor .act-btn {
    display: flex;
    width: 44px;
    height: 36px;
    padding: 0 10px;
}
.simple-editor .act-btn i {
    cursor: pointer;
    font-size: 24px;
}
.simple-editor .publish-container {
    height: 24px;
    margin-left: auto;
}

textarea {
    height: 200px;
    width: 100%;
    border: 0;
    position: relative;
    resize: none;
    line-height: 1.8;
    padding: 15px 15px 20px;
    overflow: auto;
    transition: all .1s linear;
    color: #333;
    outline: none;
}
</style>