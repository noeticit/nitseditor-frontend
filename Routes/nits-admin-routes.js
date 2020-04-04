function Index() {
  return import(/* webpackChunkName: "index" */ 'NitsAdminPages/index.vue')
}
function Dashboard() {
  return import(
    /* webpackChunkName: "Dashboard" */ 'NitsAdminPages/Dashboard.vue'
  )
}
function Login() {
  return import(/* webpackChunkName: "Login" */ 'NitsAdminPages/Login.vue')
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
function PluginsAddPlugins() {
  return import(
    /* webpackChunkName: "plugins-add-plugins" */ 'NitsAdminPages/plugins/add-plugins.vue'
  )
}
function PluginsMarketplace() {
  return import(
    /* webpackChunkName: "plugins-marketplace" */ 'NitsAdminPages/plugins/marketplace.vue'
  )
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
function UserAdd() {
  return import(
    /* webpackChunkName: "user-add" */ 'NitsAdminPages/user/add.vue'
  )
}

export default [
  {
    name: 'nits-admin-index',
    path: '/nits-admin/',
    component: Index
  },
  {
    name: 'nits-admin-Dashboard',
    path: '/nits-admin/Dashboard',
    component: Dashboard
  },
  {
    name: 'nits-admin-Login',
    path: '/nits-admin/Login',
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
    component: Plugins,
    children: [
      {
        name: 'nits-admin-plugins-add-plugins',
        path: 'add-plugins',
        component: PluginsAddPlugins
      },
      {
        name: 'nits-admin-plugins-marketplace',
        path: 'marketplace',
        component: PluginsMarketplace
      }
    ]
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
  },
  {
    name: 'nits-admin-user-add',
    path: '/nits-admin/user/add',
    component: UserAdd
  }
]
