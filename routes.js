import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes:
        [
            {
                path: '/',
                component: Vue.component('login', () => import('./Pages/Home.vue')),
                name: 'login',
                meta: {
                    requiresAuth: false
                }
            },
            {
                path: '/login',
                component: Vue.component('login', () => import('./Pages/Login.vue')),
                name: 'login',
                meta: {
                    requiresAuth: false
                }
            },
        ],
    base: '/',
});
