function Index() {
  return import(/* webpackChunkName: "index" */ 'ProjectPages/index.vue')
}
function Contact() {
  return import(/* webpackChunkName: "contact" */ 'ProjectPages/contact.vue')
}
function Demo() {
  return import(/* webpackChunkName: "demo" */ 'ProjectPages/demo.vue')
}
function Login() {
  return import(/* webpackChunkName: "login" */ 'ProjectPages/login.vue')
}
function Website() {
  return import(/* webpackChunkName: "website" */ 'ProjectPages/website.vue')
}

export default [
  {
    name: 'index',
    path: '/',
    component: Index
  },
  {
    name: 'contact',
    path: '/contact',
    component: Contact
  },
  {
    name: 'demo',
    path: '/demo',
    component: Demo
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'website',
    path: '/website',
    component: Website
  }
]
