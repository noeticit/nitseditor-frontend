import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import api from './Models/_api'
import authentication from "ProjectModels/_auth";
import store from './Store/_store';


const auth = new authentication();
Vue.prototype.$auth = auth;

const apis = new api();
Vue.prototype.$api = apis;

require('./Models/_components');

Vue.use(plugin)

const el = document.getElementById('app')

new Vue({
    store: store,
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => import(`NitsPages/${name}`).then(module => module.default),
        },
    }),
}).$mount(el)
