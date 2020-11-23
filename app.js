// import Inertia from '@inertiajs/inertia-vue'
// import Vue from 'vue'
//
// let app = document.getElementById('app')
//
// new Vue({
//     render: h => h(Inertia, {
//         props: {
//             component: app.dataset.page.component,
//             props: JSON.parse(app.dataset.page).props,
//             resolveComponent: (component) => {
//                 return import(`@/${component}`).then(module => module.default)
//             },
//         },
//     }),
// }).$mount(app)



import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'

Vue.use(plugin)

const el = document.getElementById('app')

new Vue({
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => require(`./${name}`).default,
        },
    }),
}).$mount(el)