/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import VueRouter from 'vue-router';
import {router} from "./routes";
import Layout from './Layouts/Layout';
import {authentication} from "ProjectModels/_auth";
import session from './Models/_session';

window.Vue = require('vue');

Vue.use(VueRouter);

const sessions = new session(process.env.MIX_STORAGE_PERSIST, process.env.MIX_INACTIVITY_SESSION);
sessions.start();
Vue.prototype.$session = sessions;

const auth = new authentication();
Vue.prototype.$auth = auth;
/**
 * Middleware to check authentication
 */

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && auth.isLoggedIn())
        next()
    if(!to.meta.requiresAuth && auth.isLoggedIn())
        next()
    if(to.meta.requiresAuth && !auth.isLoggedIn())
        // var pathname=(window.location.pathname)  //      /admin/plugins/Biltrax/project-search

        // console.log(window.location.pathname)
        // var path = (window.location.pathname).replace('/nits-admin/', '/')     //      /plugins/Biltrax/project-search
        // console.log(path)
        // if(path.length>2) {
        //     sessions.set('last_url', path);   // plugins/Biltrax/project-search
        // }
    next ({path: '/'})
    if(!to.meta.requiresAuth && !auth.isLoggedIn())
        next()
})

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