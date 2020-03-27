function Settings() {
  return import(
    /* webpackChunkName: "Settings" */ 'Plugins/noetic/form-builder/Pages/Settings.vue'
  )
}

export default [
  {
    name: 'nits-plugin-noetic-form-builder-Settings',
    path: '/nits-plugin-noetic-form-builder/Settings',
    component: Settings
  }
]
