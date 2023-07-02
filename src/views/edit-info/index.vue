<template>
    <div class="left">
        <div class="pc-nav">
            <div class="edit-item">
                <i class="ri-user-line"></i>
                <span>个人资料</span>
            </div>
            <div class="edit-item">
                <i class="ri-user-line"></i>
                <span>账号设置</span>
            </div>
        </div>
    </div>
    <div class="right">
        <div class="mobile-nav tabs">
            <ul>
                <li class="is-active">
                    <a href="/">个人资料</a>
                </li>
                <li>
                    <a href="/">账号设置</a>
                </li>
            </ul>
        </div>
        <div class="profile-widget">
            <div class="header">
                <div>
                    <i class="ri-settings-3-line"></i>
                    <span>个人资料</span>
                </div>
                <div>
                    <i class="ri-arrow-go-back-line"></i>
                    <a href="/">返回个人主页</a>
                </div>
            </div>
            <div class="content">
                <!--个人资料详情设置-->
                <!-- <EditProfile></EditProfile> -->
                <!--账号设置详情-->
                <SetAccount></SetAccount>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import EditProfile from './EditProfile.vue'
import SetAccount from './SetAccount.vue'
import { ref } from 'vue';
const avatar = ref('http://127.0.0.1:3000/uploads/images/d3c9e75481ec4db28917f297663c0848.jpeg')

</script>

<style scoped>
@media screen and (max-width:1024px) {
    .left {
        display: none;
    }
    .right,
    .profile-widget {
        width: 100%;
    }
    .right .mobile-nav {
        display: block;
    }
}
@media screen and (min-width:1024px) and (max-width:1215px) {
    .right,
    .profile-widget {
        width: 690px;
    }
    .right .mobile-nav {
        display: none;
    }
}
@media screen and (min-width:1215px) {
    .right,
    .profile-widget {
        width: 882px;
    }
    .right .mobile-nav {
        display: none;
    }
}
.left {
    width: 260px;
    margin-right: 10px;
    padding: 10px;
    font-size: 1rem;
}
.left .pc-nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
}
.left .edit-item {
    height: 45px;
    width: 100%;
    padding: 10px;
    color: #3273dc;
}
.left .edit-item:hover{
    cursor: pointer;
    background-color: #e8f3ff;
}
.left .edit-item i {
    margin-right: 5px;
}
.right .mobile-nav {
    margin-bottom: 10px;
    width: 100%;
    background-color: #fff;
    font-size: 1rem;
}
.mobile-nav ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #dbdbdb;
}

/*主体部分 */
.profile-widget {
    margin: 0;
    padding: 0 12px;
    background-color: #fff;
}
.profile-widget .header {
    height: 42px;
    padding: 8px 0;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.profile-widget .header a {
    font-size: 13px;
    color: #485fc7;
}
.profile-widget .header i {
    font-size: 16px;
    margin-right: 3px;
}
.profile-widget .content {
    padding: 8px 0;
    word-break: break-all;
}

</style>