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
function Menus() {
  return import(/* webpackChunkName: "menus" */ 'NitsAdminPages/menus.vue')
}
function PageNotFound() {
  return import(
    /* webpackChunkName: "page-not-found" */ 'NitsAdminPages/page-not-found.vue'
  )
}
function Pages() {
  return import(/* webpackChunkName: "pages" */ 'NitsAdminPages/pages.vue')
}
function Plugins() {
  return import(/* webpackChunkName: "plugins" */ 'NitsAdminPages/plugins.vue')
}
function Settings() {
  return import(
    /* webpackChunkName: "settings" */ 'NitsAdminPages/settings.vue'
  )
}
function Themes() {
  return import(/* webpackChunkName: "themes" */ 'NitsAdminPages/themes.vue')
}
function Users() {
  return import(/* webpackChunkName: "users" */ 'NitsAdminPages/users.vue')
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
    name: 'nits-admin-menus',
    path: '/nits-admin/menus',
    component: Menus
  },
  {
    name: 'nits-admin-page-not-found',
    path: '*',
    component: PageNotFound
  },
  {
    name: 'nits-admin-pages',
    path: '/nits-admin/pages',
    component: Pages
  },
  {
    name: 'nits-admin-plugins',
    path: '/nits-admin/plugins',
    component: Plugins
  },
  {
    name: 'nits-admin-settings',
    path: '/nits-admin/settings',
    component: Settings
  },
  {
    name: 'nits-admin-themes',
    path: '/nits-admin/themes',
    component: Themes
  },
  {
    name: 'nits-admin-users',
    path: '/nits-admin/users',
    component: Users
  }
]
