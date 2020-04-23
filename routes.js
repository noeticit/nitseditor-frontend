import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
	{
<<<<<<< HEAD
		name: 'campaign-accounts',
		path: '/Campaign/accounts',
		component: Vue.component('campaign-accounts', () => import(/* webpackChunkName: "ProjectPages/Campaign-component" */ 'ProjectPages/Campaign/Accounts.vue')),
	},
	{
		name: 'campaign-coupon',
		path: '/Campaign/coupon',
		component: Vue.component('campaign-coupon', () => import(/* webpackChunkName: "ProjectPages/Campaign-component" */ 'ProjectPages/Campaign/Coupon.vue')),
	},
	{
		name: 'campaign-couponadd',
		path: '/Campaign/couponadd',
		component: Vue.component('campaign-couponadd', () => import(/* webpackChunkName: "ProjectPages/Campaign-component" */ 'ProjectPages/Campaign/CouponAdd.vue')),
	},
	{
		name: 'dashboard',
		path: '/dashboard',
		component: Vue.component('dashboard', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/dashboard.vue')),
	},
	{
		name: 'facilities-chapter',
		path: '/Facilities/chapter',
		component: Vue.component('facilities-chapter', () => import(/* webpackChunkName: "ProjectPages/Facilities-component" */ 'ProjectPages/Facilities/Chapter.vue')),
	},
	{
		name: 'facilities-facilitiesall',
		path: '/Facilities/facilitiesall',
		component: Vue.component('facilities-facilitiesall', () => import(/* webpackChunkName: "ProjectPages/Facilities-component" */ 'ProjectPages/Facilities/FacilitiesAll.vue')),
	},
	{
		name: 'facilities-standard',
		path: '/Facilities/standard',
		component: Vue.component('facilities-standard', () => import(/* webpackChunkName: "ProjectPages/Facilities-component" */ 'ProjectPages/Facilities/Standard.vue')),
	},
	{
		name: 'facilities-stream',
		path: '/Facilities/stream',
		component: Vue.component('facilities-stream', () => import(/* webpackChunkName: "ProjectPages/Facilities-component" */ 'ProjectPages/Facilities/Stream.vue')),
	},
	{
		name: 'facilities-subject',
		path: '/Facilities/subject',
		component: Vue.component('facilities-subject', () => import(/* webpackChunkName: "ProjectPages/Facilities-component" */ 'ProjectPages/Facilities/Subject.vue')),
	},
	{
		name: 'facilities-topic',
		path: '/Facilities/topic',
		component: Vue.component('facilities-topic', () => import(/* webpackChunkName: "ProjectPages/Facilities-component" */ 'ProjectPages/Facilities/Topic.vue')),
	},
	{
=======
>>>>>>> 84b3231d437e7d0acc66bb027b08d01d78de488c
		name: 'index',
		path: '/',
		component: Vue.component('index', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/index.vue')),
	},
	{
<<<<<<< HEAD
		name: 'institute',
		path: '/institute',
		component: Vue.component('institute', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/institute.vue')),
	},
	{
		name: 'login',
		path: '/login',
		component: Vue.component('login', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/login.vue')),
	},
	{
		name: 'studymaterial-studymaterial',
		path: '/StudyMaterial/studymaterial',
		component: Vue.component('studymaterial-studymaterial', () => import(/* webpackChunkName: "ProjectPages/StudyMaterial-component" */ 'ProjectPages/StudyMaterial/StudyMaterial.vue')),
	},
	{
		name: 'studymaterial-studymaterialadd',
		path: '/StudyMaterial/studymaterialadd',
		component: Vue.component('studymaterial-studymaterialadd', () => import(/* webpackChunkName: "ProjectPages/StudyMaterial-component" */ 'ProjectPages/StudyMaterial/StudyMaterialAdd.vue')),
	},
	{
		name: 'studymaterial-videolectures',
		path: '/StudyMaterial/videolectures',
		component: Vue.component('studymaterial-videolectures', () => import(/* webpackChunkName: "ProjectPages/StudyMaterial-component" */ 'ProjectPages/StudyMaterial/VideoLectures.vue')),
	},
	{
		name: 'studymaterial-videolecturesadd',
		path: '/StudyMaterial/videolecturesadd',
		component: Vue.component('studymaterial-videolecturesadd', () => import(/* webpackChunkName: "ProjectPages/StudyMaterial-component" */ 'ProjectPages/StudyMaterial/VideoLecturesAdd.vue')),
=======
		name: 'schoolhome',
		path: '/schoolhome',
		component: Vue.component('schoolhome', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/SchoolHome.vue')),
>>>>>>> 84b3231d437e7d0acc66bb027b08d01d78de488c
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
<<<<<<< HEAD
		name: 'nits-admin-user-edit',
		path: '/nits-admin/user/edit',
		component: Vue.component('nits-admin-user-edit', () => import(/* webpackChunkName: "NitsAdminPages/user-component" */ 'NitsAdminPages/user/edit.vue')),
	},
	{
=======
>>>>>>> 84b3231d437e7d0acc66bb027b08d01d78de488c
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