import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=>import('@/views/home/index.vue'),
    },
    {
      path:'/user/:id',
      name:'user-detail',
      component:()=>import('@/views/user-detail/index.vue'),
    },
    {
      path:'/edit-info',
      name:'edit-info',
      component:()=>import('@/views/edit-info/index.vue'),
    },
    {
      path:'/topic/:id',
      name:'topic-detail',
      component:()=>import('@/views/topic-detail/index.vue'),
    },
    {
      path:'/signin',
      name:'signin',
      component:()=>import('@/views/signin/index.vue'),
    },
    {
      path:'/signup',
      name:'signup',
      component:()=>import('@/views/signup/index.vue'),
    },
    {
      path:'/topic/create',
      name:'topic-create',
      component:()=>import('@/views/topic-create/index.vue'),
    },
    {
      path:'/article/create',
      name:'article-create',
      component:()=>import('@/views/article-create/index.vue'),
    },
    {
      path:'/search',
      name:'search',
      component:()=>import('@/views/search/index.vue'),
    },
  ]
})

export default router
