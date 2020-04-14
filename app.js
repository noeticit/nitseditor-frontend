/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import VueRouter from 'vue-router';
import routes from './Models/_route';
import Layout from './Layouts/Layout';
import auth from "./Models/_auth";
import api from './Models/_api';
import session from './Models/_session';

window.Vue = require('vue');

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [...routes],
    base: '/',
});

const sessions = new session(process.env.MIX_STORAGE_PERSIST, process.env.MIX_INACTIVITY_SESSION);
sessions.start();
Vue.prototype.$session = sessions;

const authentication = new auth();
Vue.prototype.$auth = authentication;

const apis = new api();
Vue.prototype.$api = apis;
/**
 * Middleware to check authentication
 */

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && authentication.isLoggedIn())
        next();
    if(!to.meta.requiresAuth && authentication.isLoggedIn())
        next();
    if(to.meta.requiresAuth && !authentication.isLoggedIn())
        next ({path: '/'});
        // var pathname=(window.location.pathname)  //      /admin/plugins/Biltrax/project-search

        // console.log(window.location.pathname)
        // var path = (window.location.pathname).replace('/nits-admin/', '/')     //      /plugins/Biltrax/project-search
        // console.log(path)
        // if(path.length>2) {
        //     sessions.set('last_url', path);   // plugins/Biltrax/project-search
        // }

    if(!to.meta.requiresAuth && !authentication.isLoggedIn())
        next()
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router: router,
    render:h=>h(Layout)
});