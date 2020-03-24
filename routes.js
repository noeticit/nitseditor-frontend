import Vue from 'vue';
import VueRouter from 'vue-router';
// import routes from 'vue-auto-routing';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes:
        [
            // ...routes,
            {
                path: '/nits-admin/login',
                component: Vue.component('login', () => import('./Pages/Login.vue')),
                name: 'login',
                meta: {
                    requiresAuth: false
                }
            },
            {
                path: '/nits-admin/register',
                component: Vue.component('register', () => import('./Pages/Login.vue')),
                name: 'register',
                meta: {
                    requiresAuth: false
                }
            },
            {
                path: '/nits-admin/dashboard',
                component: Vue.component('nits-admin-dashboard', () => import('./Pages/Dashboard.vue')),
                name: 'nits-admin-dashboard',
                meta: {
                    requiresAuth: false
                }
            },
            {
                path: '*',
                component: Vue.component('url-not-found', () => import('./Pages/PageNotFound.vue'))
            }
        ],
    base: '/',
});
