function Index() {
  return import(/* webpackChunkName: "index" */ 'ProjectPages/index.vue')
}
function Image() {
  return import(/* webpackChunkName: "Image" */ 'ProjectPages/Image.vue')
}
function RegistrationForm() {
  return import(
    /* webpackChunkName: "RegistrationForm" */ 'ProjectPages/RegistrationForm.vue'
  )
}
function Sample() {
  return import(/* webpackChunkName: "sample" */ 'ProjectPages/sample.vue')
}
function SignIn() {
  return import(/* webpackChunkName: "SignIn" */ 'ProjectPages/SignIn.vue')
}
function UserDetail() {
  return import(
    /* webpackChunkName: "UserDetail" */ 'ProjectPages/UserDetail.vue'
  )
}
function Users() {
  return import(/* webpackChunkName: "Users" */ 'ProjectPages/Users.vue')
}

export default [
  {
    name: 'index',
    path: '/',
    component: Index
  },
  {
    name: 'Image',
    path: '/Image',
    component: Image
  },
  {
    name: 'RegistrationForm',
    path: '/RegistrationForm',
    component: RegistrationForm
  },
  {
    name: 'sample',
    path: '/sample',
    component: Sample
  },
  {
    name: 'SignIn',
    path: '/SignIn',
    component: SignIn
  },
  {
    name: 'UserDetail',
    path: '/UserDetail',
    component: UserDetail
  },
  {
    name: 'Users',
    path: '/Users',
    component: Users
  }
]
