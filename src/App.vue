<template>
  <Header></Header>
  <section class="main">
        <div class="main-container">
            <RouterView />
        </div>
  </section>
  <Footer></Footer>
</template>
<script setup lang="ts">
import Header from './components/header/Header.vue';
import Footer from './components/Footer.vue';
import { RouterLink, RouterView } from 'vue-router'

//console.log(import.meta.env)
</script>


<style scoped>
section.main{
    width: 100%;
    /* height: 1300px; */
    padding: 1rem;
}
section.main .main-container {
    height: 100%;
    display: flex;
    /* background-color: white; */
}
/*显示手机端导航*/
@media screen and (max-width:767px) {
    .main-container{
        margin: 0;
    }
    .main-container .right-container {
        display: none;
    }
}
/*显示手机端导航*/
@media screen and (min-width:768px) and (max-width:1023px) {
    .main-container{
        width: 100%;
        margin: 0;
    }
    .main-container .right-container {
        display: none;
    }
}


/*显示PC端导航*/
@media screen and (min-width:1024px) and (max-width:1215px) {
    .main-container,
    footer.footer .container{
        width: 960px;
        height: 56px;
        display: flex;
        margin: 0 auto;
    }
    article.topic-item {
        width: 470px;
    }
    article.topic-item .topic-main-content {
        width: 384px;
    }
}

/*显示PC端导航*/
@media screen and (min-width:1215px) {
    .main-container,
    footer.footer .container{
        width: 1152px;
        height: 56px;
        display: flex;
        margin: 0 auto;
    }
    article.topic-item {
        width: 662px;
    }
    article.topic-item .topic-main-content {
        width: 576px;
    }
}



</style>
