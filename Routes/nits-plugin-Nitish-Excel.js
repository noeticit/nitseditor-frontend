function Home() {
  return import(
    /* webpackChunkName: "Home" */ 'Plugins/Nitish/Excel/Pages/Home.vue'
  )
}

export default [
  {
    name: 'nits-plugin-Nitish-Excel-Home',
    path: '/plugin/Nitish/Excel/Home',
    component: Home
  }
]
