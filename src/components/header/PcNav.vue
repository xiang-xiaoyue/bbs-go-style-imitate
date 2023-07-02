<template>
    <div class="pc-nav">
      <div class="brand">
          <a href="">
              <i class="ri-home-3-line logo"></i>
          </a>
      </div>
      <div class="menu">
          <div class="start">
                  <a class="navbar-item">话题</a>
                  <a class="navbar-item">文章</a>
          </div>
          <div class="end">
              <div class="navbar-item">
                  <div class="searchForm">
                      <div class="search-input">
                          <input type="text" maxlength="30" placeholder="输入想查的内容" autocomplete="off">
                          <span>
                              <i class="ri-search-line"></i>
                          </span>
                      </div>
                      <!-- -->
                      <div class="histories" style="display: none;">
                          <ul>
                              <li>
                                  <span>审核</span>
                                  <i class="ri-close-line"></i>
                              </li>
                              <li>
                                  <span>审核</span>
                                  <i class="ri-close-line"></i>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="navbar-item">
                  <button class="dropdown-list">
                      <i class="ri-add-line"></i>
                      <span>发表</span>
                      <ul class="add-menus">
                          <li>
                              <i class="ri-moon-line"></i>
                              发动态
                          </li>
                          <li>
                              <i class="ri-moon-line"></i>
                              发动态
                          </li>
                      </ul>
                  </button>
              </div>
              <div class="navbar-item">
                  <a class="msgicon" title="消息" href="/">
                      <i class="ri-mail-line"></i>
                      <span>消息</span>
                  </a>
              </div>

              <div class="navbar-item user-menus">
                  <div class="info">
                      <a href="/">
                          <img :src="avatar" alt="AkameRed">
                      </a>
                      <span>AkameRed</span>
                      <i class="ri-arrow-down-s-line"></i>
                  </div>
                  <div class="menus"></div>
              </div>
              <div class="navbar-item toggle">
                  <i class="ri-moon-line"></i>
              </div>
          </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const avatar =ref("https://randomuser.me/api/portraits/men/32.jpg")
</script>

<style scoped>
.pc-nav .brand {
    width: 74px;
    height: 56px;
    display: flex;
    align-items: center;
}
.pc-nav .brand a {
    width: 74px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.4rem;
}
.menu {
    display: flex;
    flex-grow: 1;
}
.menu .start {
    display: flex;
    justify-content: flex-start;
    margin-right: auto;
    align-items: center;
}
.menu .start a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
}
.menu .end {
    justify-content: flex-end;
    display: flex;
    margin-left: auto;
}
.end .searchForm {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 380px;
    height: 34px;
}
.end .searchForm .search-input {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 380px;
    height: 34px;
    border: 1px solid #8590a6;
    border-radius: 17px;
    font-size: 14px;
    transition-property: background-color, border, color;
    transition-duration: .25s;
    transition-timing-function: ease-in;
}
.end .searchForm .search-input input {
    font-size: 13px;
    height: 24px;
    line-height: 24px;
    flex: 1 1;
    margin: 0 5px;
    overflow: hidden;
    border: none;
    outline: none;
    resize: none;
}
.end .searchForm .search-input span {
    padding: 0 4px 0 10px;
    cursor: pointer;
    width: 30px;
    height: 24px;
}
.end .searchForm .search-input span i {
    font-size: 16px;
    color: #0065ff;
}
.end .searchForm .histories {
    position: absolute;
    left: 0;
    top: 48px;
    width: 380px;
    height: auto;
    border:1px solid #e9e9e9;
    border-radius: 4px;
    box-shadow: 0 5px 20px rgba(18,18,18,.1);
}
.end .searchForm .histories ul li {
    display: flex;
    padding: 7px 16px;
    width: 100%;
    text-align: left;
    cursor: pointer;
}
.end .searchForm .histories ul li span{
    width: 100%;
    font-size: 13px;
}
.end .searchForm .histories ul li i{
    font-size: 14px;
    text-align: left;
    margin: 0 10px;
    color: #70727c;
}
.menu .end div{
    height: 56px;
    margin-left: .5rem;
}
.end .dropdown-list {
    position: relative;
    width: 89px;
    height: 40px;
    margin: 8px 12px;
    background-color: #409eff;
    border-color: #409eff;
    color: #fff;
    line-height: 1;
    cursor: pointer;
    border: 1px solid #dcdfe6;
    text-align: center;
    outline: 0;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.end .dropdown-list ul.add-menus {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translate(-50%);
    width: 106px;
    height: 100px;
    padding: 10px 0;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    z-index: 1;
}
.end .dropdown-list ul.add-menus li {
    line-height: 36px;
    padding: 0 20px;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
    /* outline: 0; */
}
.end .dropdown-list ul.add-menus li i {
    margin-right: 2px;
    font-size: 16px;
}
.end .msgicon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 51px;
    height: 18px;
    margin: 0 12px;
    text-align: center;
}
.end .user-menus {
    padding: 8px 12px;
}
.end .info {
    display: flex;
    width: 107px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
.end .user-menus a {
    width: 30px;
    height: 30px;
}
.end .user-menus a img {
    width: 30px;
    height: 30px;
}
.end .toggle {
    position: relative;
    left: -8px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.end .toggle i {
    width: 24px;
    height: 24px;
}

</style>
