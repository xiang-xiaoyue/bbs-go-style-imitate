<template>
    <footer class="footer">
        <div class="container">
        <div>
            <a href="/">关于</a>
            <a href="/">标签</a>
            <a href="/">友链</a>
        </div>
        <div>
            @ 2023 Powered by<a href="/" class="light">AkameRed</a>
            &nbsp; 前端仿于<a href="https://mlog.club" class="light">BBS-GO</a>
        </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
footer{
    width: auto;
    /* min-height: 82px; */
    margin: 0 10px;
    padding: 20px 0;
    font-size: 14px;
    color: #70727c;
    text-align-last: left;
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    width: auto;
}
footer.footer a{
    color: #70727c;
}
footer.footer .light {
    color: #eb5424;
    font-weight: 700;
}
@media screen and (min-width:1024px) and (max-width:1215px) {
    footer.footer .container{
        width: 960px;
        height: 56px;
        display: flex;
        margin: 0 auto;
    }
}

/*显示PC端导航*/
@media screen and (min-width:1215px) {
    footer.footer .container{
        width: 1152px;
        height: 56px;
        display: flex;
        margin: 0 auto;
    }
}
</style>