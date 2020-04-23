import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
	{
		name: 'index',
		path: '/',
		component: Vue.component('index', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/index.vue')),
	},
	{
		name: 'schoolhome',
		path: '/schoolhome',
		component: Vue.component('schoolhome', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/SchoolHome.vue')),
	},
	{
		name: 'users-student-add',
		path: '/Users/student-add',
		component: Vue.component('users-student-add', () => import(/* webpackChunkName: "ProjectPages/Users-component" */ 'ProjectPages/Users/student-add.vue')),
	},
	{
		name: 'users-student',
		path: '/Users/student',
		component: Vue.component('users-student', () => import(/* webpackChunkName: "ProjectPages/Users-component" */ 'ProjectPages/Users/student.vue')),
	},
	{
		name: 'nits-admin-dashboard',
		path: '/nits-admin/dashboard',
		component: Vue.component('nits-admin-dashboard', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/dashboard.vue')),
	},
	{
		name: 'nits-admin-index',
		path: '/nits-admin/',
		component: Vue.component('nits-admin-index', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/index.vue')),
	},
	{
		name: 'nits-admin-listview',
		path: '/nits-admin/listview',
		component: Vue.component('nits-admin-listview', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/ListView.vue')),
	},
	{
		name: 'nits-admin-login',
		path: '/nits-admin/login',
		component: Vue.component('nits-admin-login', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/login.vue')),
	},
	{
		name: 'nits-admin-menus',
		path: '/nits-admin/menus',
		component: Vue.component('nits-admin-menus', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/menus.vue')),
	},
	{
		name: 'nits-admin-pages',
		path: '/nits-admin/pages',
		component: Vue.component('nits-admin-pages', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/pages.vue')),
	},
	{
		name: 'nits-admin-pagination',
		path: '/nits-admin/pagination',
		component: Vue.component('nits-admin-pagination', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/Pagination.vue')),
	},
	{
		name: 'nits-admin-permissions',
		path: '/nits-admin/permissions',
		component: Vue.component('nits-admin-permissions', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/permissions.vue')),
	},
	{
		name: 'nits-admin-plugin-add-plugins',
		path: '/nits-admin/plugin/add-plugins',
		component: Vue.component('nits-admin-plugin-add-plugins', () => import(/* webpackChunkName: "NitsAdminPages/plugin-component" */ 'NitsAdminPages/plugin/add-plugins.vue')),
	},
	{
		name: 'nits-admin-plugin-marketplace',
		path: '/nits-admin/plugin/marketplace',
		component: Vue.component('nits-admin-plugin-marketplace', () => import(/* webpackChunkName: "NitsAdminPages/plugin-component" */ 'NitsAdminPages/plugin/marketplace.vue')),
	},
	{
		name: 'nits-admin-plugins',
		path: '/nits-admin/plugins',
		component: Vue.component('nits-admin-plugins', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/plugins.vue')),
	},
	{
		name: 'nits-admin-settings',
		path: '/nits-admin/settings',
		component: Vue.component('nits-admin-settings', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/settings.vue')),
	},
	{
		name: 'nits-admin-themes',
		path: '/nits-admin/themes',
		component: Vue.component('nits-admin-themes', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/themes.vue')),
	},
	{
		name: 'nits-admin-user-add',
		path: '/nits-admin/user/add',
		component: Vue.component('nits-admin-user-add', () => import(/* webpackChunkName: "NitsAdminPages/user-component" */ 'NitsAdminPages/user/add.vue')),
	},
	{
		name: 'nits-admin-users',
		path: '/nits-admin/users',
		component: Vue.component('nits-admin-users', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/users.vue')),
	},
	{
		name: 'plugin-noetic-excel-sample',
		path: '/nits-plugin/noetic/excel/sample',
		component: Vue.component('plugin-noetic-excel-sample', () => import(/* webpackChunkName: "Plugins/noetic/excel/pages-component" */ 'Plugins/noetic/excel/pages/sample.vue')),
	},
	{
		name: 'page-not-found',
		path: '*',
		component: Vue.component('page-not-found', () => import('NitsAdminPages/page-not-found.vue')),
	},
    ],
    base: '/',
});