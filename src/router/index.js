import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({

    routes: [
        {
            path: '/login',
            name: 'login',
            component: require("../views/login.vue").default
        }, {
            path: '/',
            name: 'nav',
            component: require("../views/nav.vue").default
        }
    ]
});
