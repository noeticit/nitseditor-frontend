function Index() {
  return import(/* webpackChunkName: "index" */ 'ProjectPages/index.vue')
}

export default [
  {
    name: 'index',
    path: '/',
    component: Index
  }
]
