import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes:
        [
            {
                path: '/',
                component: Vue.component('home', () => import('./Pages/Home.vue')),
                name: 'home',
                meta: {
                    requiresAuth: false
                }
            },
            {
                path: '/login',
                component: Vue.component('login', () => import('./Layouts/LoginPage/LayoutOne.vue')),
                name: 'login',
                meta: {
                    requiresAuth: false
                }
            },
            {
                path: '/register',
                component: Vue.component('register', () => import('./Layouts/LoginPage/LayoutOne.vue')),
                name: 'register',
                meta: {
                    requiresAuth: false
                }
            },
        ],
    base: '/',
});
