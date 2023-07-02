<template>
    <div class="widget">
        <div class="widget-header">签到</div>
        <div class="widget-content checkin">
            <div class="checkedin">
                <div class="gold-icon">
                    <i class="ri-money-cny-circle-line"></i>
                </div>
                <div class="gold-info">700</div>
                <div class="checkedin-btn">
                    <i class="ri-calendar-line"></i>
                    <span>今日已签到</span>
                    <!-- <span>立即签到</span> -->
                </div>
            </div>
            <div class="checkedin-tips">
                <i class="ri-shining-line"></i>
                <span>你已经连续签到 <strong>12</strong> 天啦！</span>
            </div>
            <div class="rank">
                <div class="rank-title">今日排行</div>
                <ul>
                    <li v-for="i in 5">
                        <a href="/">
                            <img :src="avatar" alt="">
                        </a>
                        <div class="user-info">
                            <a href="/">akame</a>
                            <p>@2023-07-02 15:49:48</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const avatar = ref('http://127.0.0.1:3000/uploads/images/d3c9e75481ec4db28917f297663c0848.jpeg')
</script>

<style scoped>
.checkedin {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.checkedin>div {
    height: 30px;
    line-height: 30px;
    color: #70727c;
}
.checkedin .gold-icon{
    flex: 1;
}
.checkedin .gold-info  {
    flex: 1;
}
.checkedin .checkedin-btn {
    flex: 2;
    border: 1px solid #dcdfe6;
    background-color: #fff;
    border-radius: 4px;
    font-weight: 500;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:not-allowed;
}
.checkedin .checkedin-btn i {
    margin-right: .5rem;
}

.checkedin-tips {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #70727c;
    padding: 8px 0;
    margin: 8px 0;
    border-radius: 4px;
    font-size: 16px;
    background-color: rgba(247,248,250,0.7);
}
.checkedin-tips i {
    margin-right: 8px;
}
.checkedin-tips strong {
    color: #00a1d6;
}
.rank {
    border-top: 1px solid #e9e9e9;
    margin-top: 10px;
    padding-top: 10px;
}
.rank .rank-title {
    font-size: 14px;
    font-weight: 600;
}
.rank li {
    display: flex;
    margin: 8px 0;
    font-size: 13px;
    position: relative;
    background-color: #fff;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
}
.rank li>a {
    width: 30px;
    height: 30px;
}
.rank li img {
    margin-top: 8px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    object-fit: cover;
    transition: all .5s ease-out .1s;
}
.rank li .user-info {
    width: 100%;
    margin-left: 10px;
    line-height: 1.4;
    font-size: 12px;
}
.rank li .user-info a {
    color: #555;
    font-weight: 700;
}
.rank li .user-info p {
    margin-top: 8px;
}
</style>