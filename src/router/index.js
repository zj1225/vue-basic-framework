import Vue from 'vue'
import Router from 'vue-router'
import '@/config/axios.js' 


import Index from '@/components/index'

Vue.use(Router)

let router = new Router({
    routes: [
    { path : '/', redirect : 'index' },
    { path : '/index' ,                                 name : 'index' ,                            component : Index },

    
    
    ],
    // 路由跳转，让页面滚动到顶部
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

// 权限判断
router.beforeEach((to, from, next) => {
    console.log('router判断【to】：',to);
    console.log('router判断【from】：',from);
    console.log('router判断【next】：',next);
    if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
        if (localStorage.getItem('token')) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})



export default router

