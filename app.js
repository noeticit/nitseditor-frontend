import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import api from './Models/_api'

const apis = new api();
Vue.prototype.$api = apis;

require('./Models/_components');

Vue.use(plugin)

const el = document.getElementById('app')

new Vue({
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => import(`NitsPages/${name}`).then(module => module.default),
        },
    }),
}).$mount(el)
