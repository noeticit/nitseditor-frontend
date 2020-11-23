/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import VueRouter from 'vue-router';
import {router} from "./routes";
import store from './Store/_store';
import authentication from "ProjectModels/_auth";
import api from './Models/_api';
import session from './Models/_session';
import ability from './Models/_ability';
import VueMeta from 'vue-meta';
import vClickOutside from 'v-click-outside';
import * as svgicon from 'vue-svgicon';
import VueVirtualScroller from "vue-virtual-scroller";
import { App, plugin } from '@inertiajs/inertia-vue';

window.Vue = require('vue');

Vue.use(plugin)

Vue.use(VueRouter);

Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
});

Vue.use(svgicon, {
    classPrefix: 'AppIcon-',
});

Vue.use(vClickOutside);
Vue.use(VueVirtualScroller);

const sessions = new session(process.env.MIX_STORAGE_PERSIST, process.env.MIX_INACTIVITY_SESSION);
sessions.start();
Vue.prototype.$session = sessions;

const auth = new authentication();
Vue.prototype.$auth = auth;

const apis = new api();
Vue.prototype.$api = apis;

const able = new ability();
Vue.prototype.$ability = able;
/**
 * Middleware to check authentication
 */

router.beforeEach((to, from, next) => {

    // console.log(store.getters.user_last_url_visited)

    // if(store.getters.user_last_url_visited && (from.name === 'login' || from.name === 'nits-admin-login')) {
    //     if(able.checkPageAccess(to))
    //         next({name: store.getters.user_last_url_visited});
    //     else
    //         next({path: '/nits-admin/not-subscribed'});
    // }
    // else {
    //     store.dispatch('storeLastUrlVisited', to.name);
    console.log(able.checkPageAccess(to))
    if(able.checkPageAccess(to))

        next();
    else
    {
        // console.log(store.getters.user_access_token)
        // if(store.getters.user_access_token)
            next({path: '/nits-admin/not-subscribed'});
        // else{
        //     next({path: '/'});
        // }
    }


    // }
});

//importing one component that uses <style> tag
import Index from './Pages/index';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
//     router: router,
//     store: store,
//     template: '<router-view></router-view>',
//     watch: {
//         '$route' (to, from) {
//             console.log();
//         }
//     }
// });

let app = document.getElementById('app')

new Vue({
    render: h => h(Inertia, {
        props: {
            component: app.dataset.component,
            props: JSON.parse(app.dataset.props),
            resolveComponent: (component) => {
                return import(`@/Pages/${component}`).then(module => module.default)
            },
        },
    }),
}).$mount(app)

// const el = document.getElementById('app')
//
// new Vue({
//     render: h => h(App, {
//         props: {
//             initialPage: JSON.parse(el.dataset.page),
//             resolveComponent: name => require(`./Pages/${name}`).default,
//         },
//     }),
// }).$mount(el)
