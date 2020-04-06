function Index() {
  return import(/* webpackChunkName: "index" */ 'ProjectPages/index.vue')
}
function Dropdowndemo() {
  return import(
    /* webpackChunkName: "dropdowndemo" */ 'ProjectPages/dropdowndemo.vue'
  )
}
function Image() {
  return import(/* webpackChunkName: "Image" */ 'ProjectPages/Image.vue')
}
function PopupForm() {
  return import(
    /* webpackChunkName: "PopupForm" */ 'ProjectPages/PopupForm.vue'
  )
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
    name: 'dropdowndemo',
    path: '/dropdowndemo',
    component: Dropdowndemo
  },
  {
    name: 'Image',
    path: '/Image',
    component: Image
  },
  {
    name: 'PopupForm',
    path: '/PopupForm',
    component: PopupForm
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
