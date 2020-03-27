function Index() {
  return import(/* webpackChunkName: "index" */ 'NitsAdminPages/index.vue')
}
function Dashboard() {
  return import(
    /* webpackChunkName: "dashboard" */ 'NitsAdminPages/dashboard.vue'
  )
}
function Login() {
  return import(/* webpackChunkName: "login" */ 'NitsAdminPages/login.vue')
}
function PageNotFound() {
  return import(
    /* webpackChunkName: "page-not-found" */ 'NitsAdminPages/page-not-found.vue'
  )
}

export default [
  {
    name: 'nits-admin-index',
    path: '/nits-admin/',
    component: Index
  },
  {
    name: 'nits-admin-dashboard',
    path: '/nits-admin/dashboard',
    component: Dashboard
  },
  {
    name: 'nits-admin-login',
    path: '/nits-admin/login',
    component: Login
  },
  {
    name: 'nits-admin-page-not-found',
    path: '*',
    component: PageNotFound
  }
]
