import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
	{
		name: 'admin-blog-create',
		path: '/admin/blog/create',
		component: Vue.component('admin-blog-create', () => import(/* webpackChunkName: "ProjectPages/admin/blog-component" */ 'ProjectPages/admin/blog/create.vue')),
	},
	{
		name: 'admin-blog-view',
		path: '/admin/blog/view',
		component: Vue.component('admin-blog-view', () => import(/* webpackChunkName: "ProjectPages/admin/blog-component" */ 'ProjectPages/admin/blog/view.vue')),
	},
	{
		name: 'admin-category-create',
		path: '/admin/category/create',
		component: Vue.component('admin-category-create', () => import(/* webpackChunkName: "ProjectPages/admin/category-component" */ 'ProjectPages/admin/category/create.vue')),
	},
	{
		name: 'admin-category-view',
		path: '/admin/category/view',
		component: Vue.component('admin-category-view', () => import(/* webpackChunkName: "ProjectPages/admin/category-component" */ 'ProjectPages/admin/category/view.vue')),
	},
	{
		name: 'admin-course-create',
		path: '/admin/course/create',
		component: Vue.component('admin-course-create', () => import(/* webpackChunkName: "ProjectPages/admin/course-component" */ 'ProjectPages/admin/course/create.vue')),
	},
	{
		name: 'admin-course-view',
		path: '/admin/course/view',
		component: Vue.component('admin-course-view', () => import(/* webpackChunkName: "ProjectPages/admin/course-component" */ 'ProjectPages/admin/course/view.vue')),
	},
	{
		name: 'admin-enquiry-view',
		path: '/admin/enquiry/view',
		component: Vue.component('admin-enquiry-view', () => import(/* webpackChunkName: "ProjectPages/admin/enquiry-component" */ 'ProjectPages/admin/enquiry/view.vue')),
	},
	{
		name: 'admin-modules-create',
		path: '/admin/modules/create',
		component: Vue.component('admin-modules-create', () => import(/* webpackChunkName: "ProjectPages/admin/modules-component" */ 'ProjectPages/admin/modules/create.vue')),
	},
	{
		name: 'admin-modules-quiz-create',
		path: '/admin/modules/quiz/create',
		component: Vue.component('admin-modules-quiz-create', () => import(/* webpackChunkName: "ProjectPages/admin/modules/quiz-component" */ 'ProjectPages/admin/modules/quiz/create.vue')),
	},
	{
		name: 'admin-modules-quiz-view',
		path: '/admin/modules/quiz/view',
		component: Vue.component('admin-modules-quiz-view', () => import(/* webpackChunkName: "ProjectPages/admin/modules/quiz-component" */ 'ProjectPages/admin/modules/quiz/view.vue')),
	},
	{
		name: 'admin-modules-resource-create',
		path: '/admin/modules/resource/create',
		component: Vue.component('admin-modules-resource-create', () => import(/* webpackChunkName: "ProjectPages/admin/modules/resource-component" */ 'ProjectPages/admin/modules/resource/create.vue')),
	},
	{
		name: 'admin-modules-resource-view',
		path: '/admin/modules/resource/view',
		component: Vue.component('admin-modules-resource-view', () => import(/* webpackChunkName: "ProjectPages/admin/modules/resource-component" */ 'ProjectPages/admin/modules/resource/view.vue')),
	},
	{
		name: 'admin-modules-view',
		path: '/admin/modules/view',
		component: Vue.component('admin-modules-view', () => import(/* webpackChunkName: "ProjectPages/admin/modules-component" */ 'ProjectPages/admin/modules/view.vue')),
	},
	{
		name: 'checkout',
		path: '/checkout',
		component: Vue.component('checkout', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/checkout.vue')),
	},
	{
		name: 'course-dashboard',
		path: '/course/dashboard',
		component: Vue.component('course-dashboard', () => import(/* webpackChunkName: "ProjectPages/course-component" */ 'ProjectPages/course/dashboard.vue')),
	},
	{
		name: 'course',
		path: '/course',
		component: Vue.component('course', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/course.vue')),
	},
	{
		name: 'dashboard',
		path: '/dashboard',
		component: Vue.component('dashboard', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/dashboard.vue')),
	},
	{
		name: 'index',
		path: '/',
		component: Vue.component('index', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/index.vue')),
	},
	{
		name: 'login-page',
		path: '/login-page',
		component: Vue.component('login-page', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/login-page.vue')),
	},
	{
		name: 'login',
		path: '/login',
		component: Vue.component('login', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/login.vue')),
	},
	{
		name: 'new-landing-page',
		path: '/new-landing-page',
		component: Vue.component('new-landing-page', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/new-landing-page.vue')),
	},
	{
		name: 'nits-admin-dashboard',
		path: '/nits-admin/dashboard',
		component: Vue.component('nits-admin-dashboard', () => import(/* webpackChunkName: "ProjectPages/nits-admin-component" */ 'ProjectPages/nits-admin/dashboard.vue')),
	},
	{
		name: 'nits-admin-form-create',
		path: '/nits-admin/form/create',
		component: Vue.component('nits-admin-form-create', () => import(/* webpackChunkName: "ProjectPages/nits-admin/form-component" */ 'ProjectPages/nits-admin/form/create.vue')),
	},
	{
		name: 'nits-admin-form-index',
		path: '/nits-admin/form/',
		component: Vue.component('nits-admin-form-index', () => import(/* webpackChunkName: "ProjectPages/nits-admin/form-component" */ 'ProjectPages/nits-admin/form/index.vue')),
	},
	{
		name: 'nits-admin-index',
		path: '/nits-admin/',
		component: Vue.component('nits-admin-index', () => import(/* webpackChunkName: "ProjectPages/nits-admin-component" */ 'ProjectPages/nits-admin/index.vue')),
	},
	{
		name: 'nits-admin-login',
		path: '/nits-admin/login',
		component: Vue.component('nits-admin-login', () => import(/* webpackChunkName: "ProjectPages/nits-admin-component" */ 'ProjectPages/nits-admin/login.vue')),
	},
	{
		name: 'nits-admin-menus',
		path: '/nits-admin/menus',
		component: Vue.component('nits-admin-menus', () => import(/* webpackChunkName: "ProjectPages/nits-admin-component" */ 'ProjectPages/nits-admin/menus.vue')),
	},
	{
		name: 'nits-admin-model-create',
		path: '/nits-admin/model/create',
		component: Vue.component('nits-admin-model-create', () => import(/* webpackChunkName: "ProjectPages/nits-admin/model-component" */ 'ProjectPages/nits-admin/model/create.vue')),
	},
	{
		name: 'nits-admin-model-index',
		path: '/nits-admin/model/',
		component: Vue.component('nits-admin-model-index', () => import(/* webpackChunkName: "ProjectPages/nits-admin/model-component" */ 'ProjectPages/nits-admin/model/index.vue')),
	},
	{
		name: 'nits-admin-not-subscribed-old',
		path: '/nits-admin/not-subscribed-old',
		component: Vue.component('nits-admin-not-subscribed-old', () => import(/* webpackChunkName: "ProjectPages/nits-admin-component" */ 'ProjectPages/nits-admin/not-subscribed-old.vue')),
	},
	{
		name: 'nits-admin-not-subscribed',
		path: '/nits-admin/not-subscribed',
		component: Vue.component('nits-admin-not-subscribed', () => import(/* webpackChunkName: "ProjectPages/nits-admin-component" */ 'ProjectPages/nits-admin/not-subscribed.vue')),
	},
	{
		name: 'nits-admin-page-create',
		path: '/nits-admin/page/create',
		component: Vue.component('nits-admin-page-create', () => import(/* webpackChunkName: "ProjectPages/nits-admin/page-component" */ 'ProjectPages/nits-admin/page/create.vue')),
	},
	{
		name: 'nits-admin-page-index',
		path: '/nits-admin/page/',
		component: Vue.component('nits-admin-page-index', () => import(/* webpackChunkName: "ProjectPages/nits-admin/page-component" */ 'ProjectPages/nits-admin/page/index.vue')),
	},
	{
		name: 'nits-admin-pages',
		path: '/nits-admin/pages',
		component: Vue.component('nits-admin-pages', () => import(/* webpackChunkName: "ProjectPages/nits-admin-component" */ 'ProjectPages/nits-admin/pages.vue')),
	},
	{
		name: 'nits-admin-permissions',
		path: '/nits-admin/permissions',
		component: Vue.component('nits-admin-permissions', () => import(/* webpackChunkName: "ProjectPages/nits-admin-component" */ 'ProjectPages/nits-admin/permissions.vue')),
	},
	{
		name: 'nits-admin-plugin-add-plugins',
		path: '/nits-admin/plugin/add-plugins',
		component: Vue.component('nits-admin-plugin-add-plugins', () => import(/* webpackChunkName: "ProjectPages/nits-admin/plugin-component" */ 'ProjectPages/nits-admin/plugin/add-plugins.vue')),
	},
	{
		name: 'nits-admin-plugin-marketplace',
		path: '/nits-admin/plugin/marketplace',
		component: Vue.component('nits-admin-plugin-marketplace', () => import(/* webpackChunkName: "ProjectPages/nits-admin/plugin-component" */ 'ProjectPages/nits-admin/plugin/marketplace.vue')),
	},
	{
		name: 'nits-admin-plugins',
		path: '/nits-admin/plugins',
		component: Vue.component('nits-admin-plugins', () => import(/* webpackChunkName: "ProjectPages/nits-admin-component" */ 'ProjectPages/nits-admin/plugins.vue')),
	},
	{
		name: 'nits-admin-practice',
		path: '/nits-admin/practice',
		component: Vue.component('nits-admin-practice', () => import(/* webpackChunkName: "ProjectPages/nits-admin-component" */ 'ProjectPages/nits-admin/practice.vue')),
	},
	{
		name: 'nits-admin-settings',
		path: '/nits-admin/settings',
		component: Vue.component('nits-admin-settings', () => import(/* webpackChunkName: "ProjectPages/nits-admin-component" */ 'ProjectPages/nits-admin/settings.vue')),
	},
	{
		name: 'nits-admin-themes',
		path: '/nits-admin/themes',
		component: Vue.component('nits-admin-themes', () => import(/* webpackChunkName: "ProjectPages/nits-admin-component" */ 'ProjectPages/nits-admin/themes.vue')),
	},
	{
		name: 'nits-admin-user-add',
		path: '/nits-admin/user/add',
		component: Vue.component('nits-admin-user-add', () => import(/* webpackChunkName: "ProjectPages/nits-admin/user-component" */ 'ProjectPages/nits-admin/user/add.vue')),
	},
	{
		name: 'nits-admin-user-edit',
		path: '/nits-admin/user/edit',
		component: Vue.component('nits-admin-user-edit', () => import(/* webpackChunkName: "ProjectPages/nits-admin/user-component" */ 'ProjectPages/nits-admin/user/edit.vue')),
	},
	{
		name: 'nits-admin-users',
		path: '/nits-admin/users',
		component: Vue.component('nits-admin-users', () => import(/* webpackChunkName: "ProjectPages/nits-admin-component" */ 'ProjectPages/nits-admin/users.vue')),
	},
	{
		name: 'test',
		path: '/test',
		component: Vue.component('test', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/Test.vue')),
	},
	{
		name: 'thank-you',
		path: '/thank-you',
		component: Vue.component('thank-you', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/thank-you.vue')),
	},
	{
		name: 'video-player',
		path: '/video-player',
		component: Vue.component('video-player', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/video-player.vue')),
	},
	{
		name: 'nits-admin-dashboard',
		path: '/nits-admin/dashboard',
		component: Vue.component('nits-admin-dashboard', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/dashboard.vue')),
	},
	{
		name: 'nits-admin-form-create',
		path: '/nits-admin/form/create',
		component: Vue.component('nits-admin-form-create', () => import(/* webpackChunkName: "NitsAdminPages/form-component" */ 'NitsAdminPages/form/create.vue')),
	},
	{
		name: 'nits-admin-form-index',
		path: '/nits-admin/form/',
		component: Vue.component('nits-admin-form-index', () => import(/* webpackChunkName: "NitsAdminPages/form-component" */ 'NitsAdminPages/form/index.vue')),
	},
	{
		name: 'nits-admin-index',
		path: '/nits-admin/',
		component: Vue.component('nits-admin-index', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/index.vue')),
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
		name: 'nits-admin-model-create',
		path: '/nits-admin/model/create',
		component: Vue.component('nits-admin-model-create', () => import(/* webpackChunkName: "NitsAdminPages/model-component" */ 'NitsAdminPages/model/create.vue')),
	},
	{
		name: 'nits-admin-model-index',
		path: '/nits-admin/model/',
		component: Vue.component('nits-admin-model-index', () => import(/* webpackChunkName: "NitsAdminPages/model-component" */ 'NitsAdminPages/model/index.vue')),
	},
	{
		name: 'nits-admin-not-subscribed-old',
		path: '/nits-admin/not-subscribed-old',
		component: Vue.component('nits-admin-not-subscribed-old', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/not-subscribed-old.vue')),
	},
	{
		name: 'nits-admin-not-subscribed',
		path: '/nits-admin/not-subscribed',
		component: Vue.component('nits-admin-not-subscribed', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/not-subscribed.vue')),
	},
	{
		name: 'nits-admin-page-create',
		path: '/nits-admin/page/create',
		component: Vue.component('nits-admin-page-create', () => import(/* webpackChunkName: "NitsAdminPages/page-component" */ 'NitsAdminPages/page/create.vue')),
	},
	{
		name: 'nits-admin-page-index',
		path: '/nits-admin/page/',
		component: Vue.component('nits-admin-page-index', () => import(/* webpackChunkName: "NitsAdminPages/page-component" */ 'NitsAdminPages/page/index.vue')),
	},
	{
		name: 'nits-admin-pages',
		path: '/nits-admin/pages',
		component: Vue.component('nits-admin-pages', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/pages.vue')),
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
		name: 'nits-admin-practice',
		path: '/nits-admin/practice',
		component: Vue.component('nits-admin-practice', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/practice.vue')),
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
		name: 'nits-admin-user-edit',
		path: '/nits-admin/user/edit',
		component: Vue.component('nits-admin-user-edit', () => import(/* webpackChunkName: "NitsAdminPages/user-component" */ 'NitsAdminPages/user/edit.vue')),
	},
	{
		name: 'nits-admin-users',
		path: '/nits-admin/users',
		component: Vue.component('nits-admin-users', () => import(/* webpackChunkName: "NitsAdminPages-component" */ 'NitsAdminPages/users.vue')),
	},
	{
		name: 'admin-blog-edit',
		path: '/admin/blog/:edit',
		component: Vue.component('admin-blog-edit', () => import(/* webpackChunkName: "ProjectPages/admin/blog-component" */ 'ProjectPages/admin/blog/__edit.vue')),
	},
	{
		name: 'admin-course-edit',
		path: '/admin/course/:edit',
		component: Vue.component('admin-course-edit', () => import(/* webpackChunkName: "ProjectPages/admin/course-component" */ 'ProjectPages/admin/course/__edit.vue')),
	},
	{
		name: 'admin-modules-quiz-edit',
		path: '/admin/modules/quiz/:edit',
		component: Vue.component('admin-modules-quiz-edit', () => import(/* webpackChunkName: "ProjectPages/admin/modules/quiz-component" */ 'ProjectPages/admin/modules/quiz/__edit.vue')),
	},
	{
		name: 'admin-modules-resource-edit',
		path: '/admin/modules/resource/:edit',
		component: Vue.component('admin-modules-resource-edit', () => import(/* webpackChunkName: "ProjectPages/admin/modules/resource-component" */ 'ProjectPages/admin/modules/resource/__edit.vue')),
	},
	{
		name: 'admin-modules-edit',
		path: '/admin/modules/:edit',
		component: Vue.component('admin-modules-edit', () => import(/* webpackChunkName: "ProjectPages/admin/modules-component" */ 'ProjectPages/admin/modules/__edit.vue')),
	},
	{
		name: 'nits-admin-form-edit',
		path: '/nits-admin/form/:edit',
		component: Vue.component('nits-admin-form-edit', () => import(/* webpackChunkName: "ProjectPages/nits-admin/form-component" */ 'ProjectPages/nits-admin/form/__edit.vue')),
	},
	{
		name: 'nits-admin-model-edit',
		path: '/nits-admin/model/:edit',
		component: Vue.component('nits-admin-model-edit', () => import(/* webpackChunkName: "ProjectPages/nits-admin/model-component" */ 'ProjectPages/nits-admin/model/__edit.vue')),
	},
	{
		name: 'nits-admin-form-edit',
		path: '/nits-admin/form/:edit',
		component: Vue.component('nits-admin-form-edit', () => import(/* webpackChunkName: "NitsAdminPages/form-component" */ 'NitsAdminPages/form/__edit.vue')),
	},
	{
		name: 'nits-admin-model-edit',
		path: '/nits-admin/model/:edit',
		component: Vue.component('nits-admin-model-edit', () => import(/* webpackChunkName: "NitsAdminPages/model-component" */ 'NitsAdminPages/model/__edit.vue')),
	},
	{
		name: 'page-not-found',
		path: '*',
		component: Vue.component('page-not-found', () => import('NitsAdminPages/page-not-found.vue')),
	},
    ],
    base: '/',
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
});