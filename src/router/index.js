import Vue from "vue"
import VueRouter from 'vue-router'
//安装router插件
Vue.use(VueRouter)
//创建路由对象并导出
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: () => import("views/home/Home")
        },
        {
            path: "/category",
            component: () => import("views/category/Category")
        },
        {
            path: "/shopcart",
            component: () => import("views/shopcart/ShopCart")
        },
        {
            path: "/profile",
            component: () => import("views/profile/Profile")
        },
        {
            path: "/detail/:iid",
            component: () => import("views/detail/Detail")
        }
    ]
})