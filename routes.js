import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
	{
		name: 'admin-awarded-contracts-add',
		path: '/admin/awarded-contracts/add',
		component: Vue.component('admin-awarded-contracts-add', () => import(/* webpackChunkName: "ProjectPages/admin/awarded-contracts-component" */ 'ProjectPages/admin/awarded-contracts/add.vue')),
	},
	{
		name: 'admin-awarded-contracts-view',
		path: '/admin/awarded-contracts/view',
		component: Vue.component('admin-awarded-contracts-view', () => import(/* webpackChunkName: "ProjectPages/admin/awarded-contracts-component" */ 'ProjectPages/admin/awarded-contracts/view.vue')),
	},
	{
		name: 'admin-company-add',
		path: '/admin/company/add',
		component: Vue.component('admin-company-add', () => import(/* webpackChunkName: "ProjectPages/admin/company-component" */ 'ProjectPages/admin/company/add.vue')),
	},
	{
		name: 'admin-company-view',
		path: '/admin/company/view',
		component: Vue.component('admin-company-view', () => import(/* webpackChunkName: "ProjectPages/admin/company-component" */ 'ProjectPages/admin/company/view.vue')),
	},
	{
		name: 'admin-components-admin-layout',
		path: '/admin/components/admin-layout',
		component: Vue.component('admin-components-admin-layout', () => import(/* webpackChunkName: "ProjectPages/admin/components-component" */ 'ProjectPages/admin/components/admin-layout.vue')),
	},
	{
		name: 'admin-components-form-variables-nits-capacity-unit',
		path: '/admin/components/form-variables/nits-capacity-unit',
		component: Vue.component('admin-components-form-variables-nits-capacity-unit', () => import(/* webpackChunkName: "ProjectPages/admin/components/form-variables-component" */ 'ProjectPages/admin/components/form-variables/nits-capacity-unit.vue')),
	},
	{
		name: 'admin-components-form-variables-nits-city',
		path: '/admin/components/form-variables/nits-city',
		component: Vue.component('admin-components-form-variables-nits-city', () => import(/* webpackChunkName: "ProjectPages/admin/components/form-variables-component" */ 'ProjectPages/admin/components/form-variables/nits-city.vue')),
	},
	{
		name: 'admin-components-form-variables-nits-district',
		path: '/admin/components/form-variables/nits-district',
		component: Vue.component('admin-components-form-variables-nits-district', () => import(/* webpackChunkName: "ProjectPages/admin/components/form-variables-component" */ 'ProjectPages/admin/components/form-variables/nits-district.vue')),
	},
	{
		name: 'admin-components-form-variables-nits-end-product',
		path: '/admin/components/form-variables/nits-end-product',
		component: Vue.component('admin-components-form-variables-nits-end-product', () => import(/* webpackChunkName: "ProjectPages/admin/components/form-variables-component" */ 'ProjectPages/admin/components/form-variables/nits-end-product.vue')),
	},
	{
		name: 'admin-components-form-variables-nits-industrial-tag',
		path: '/admin/components/form-variables/nits-industrial-tag',
		component: Vue.component('admin-components-form-variables-nits-industrial-tag', () => import(/* webpackChunkName: "ProjectPages/admin/components/form-variables-component" */ 'ProjectPages/admin/components/form-variables/nits-industrial-tag.vue')),
	},
	{
		name: 'admin-components-form-variables-nits-industry-development-authority',
		path: '/admin/components/form-variables/nits-industry-development-authority',
		component: Vue.component('admin-components-form-variables-nits-industry-development-authority', () => import(/* webpackChunkName: "ProjectPages/admin/components/form-variables-component" */ 'ProjectPages/admin/components/form-variables/nits-industry-development-authority.vue')),
	},
	{
		name: 'admin-components-form-variables-nits-industry',
		path: '/admin/components/form-variables/nits-industry',
		component: Vue.component('admin-components-form-variables-nits-industry', () => import(/* webpackChunkName: "ProjectPages/admin/components/form-variables-component" */ 'ProjectPages/admin/components/form-variables/nits-industry.vue')),
	},
	{
		name: 'admin-components-form-variables-nits-project-type',
		path: '/admin/components/form-variables/nits-project-type',
		component: Vue.component('admin-components-form-variables-nits-project-type', () => import(/* webpackChunkName: "ProjectPages/admin/components/form-variables-component" */ 'ProjectPages/admin/components/form-variables/nits-project-type.vue')),
	},
	{
		name: 'admin-components-form-variables-nits-region',
		path: '/admin/components/form-variables/nits-region',
		component: Vue.component('admin-components-form-variables-nits-region', () => import(/* webpackChunkName: "ProjectPages/admin/components/form-variables-component" */ 'ProjectPages/admin/components/form-variables/nits-region.vue')),
	},
	{
		name: 'admin-components-form-variables-nits-role',
		path: '/admin/components/form-variables/nits-role',
		component: Vue.component('admin-components-form-variables-nits-role', () => import(/* webpackChunkName: "ProjectPages/admin/components/form-variables-component" */ 'ProjectPages/admin/components/form-variables/nits-role.vue')),
	},
	{
		name: 'admin-components-form-variables-nits-segment',
		path: '/admin/components/form-variables/nits-segment',
		component: Vue.component('admin-components-form-variables-nits-segment', () => import(/* webpackChunkName: "ProjectPages/admin/components/form-variables-component" */ 'ProjectPages/admin/components/form-variables/nits-segment.vue')),
	},
	{
		name: 'admin-components-form-variables-nits-specialization',
		path: '/admin/components/form-variables/nits-specialization',
		component: Vue.component('admin-components-form-variables-nits-specialization', () => import(/* webpackChunkName: "ProjectPages/admin/components/form-variables-component" */ 'ProjectPages/admin/components/form-variables/nits-specialization.vue')),
	},
	{
		name: 'admin-components-form-variables-nits-stage',
		path: '/admin/components/form-variables/nits-stage',
		component: Vue.component('admin-components-form-variables-nits-stage', () => import(/* webpackChunkName: "ProjectPages/admin/components/form-variables-component" */ 'ProjectPages/admin/components/form-variables/nits-stage.vue')),
	},
	{
		name: 'admin-components-form-variables-nits-state',
		path: '/admin/components/form-variables/nits-state',
		component: Vue.component('admin-components-form-variables-nits-state', () => import(/* webpackChunkName: "ProjectPages/admin/components/form-variables-component" */ 'ProjectPages/admin/components/form-variables/nits-state.vue')),
	},
	{
		name: 'admin-components-form-variables-nits-tag',
		path: '/admin/components/form-variables/nits-tag',
		component: Vue.component('admin-components-form-variables-nits-tag', () => import(/* webpackChunkName: "ProjectPages/admin/components/form-variables-component" */ 'ProjectPages/admin/components/form-variables/nits-tag.vue')),
	},
	{
		name: 'admin-components-form-variables-nits-tender-tag',
		path: '/admin/components/form-variables/nits-tender-tag',
		component: Vue.component('admin-components-form-variables-nits-tender-tag', () => import(/* webpackChunkName: "ProjectPages/admin/components/form-variables-component" */ 'ProjectPages/admin/components/form-variables/nits-tender-tag.vue')),
	},
	{
		name: 'admin-components-menu-menuone',
		path: '/admin/components/menu/menuone',
		component: Vue.component('admin-components-menu-menuone', () => import(/* webpackChunkName: "ProjectPages/admin/components/menu-component" */ 'ProjectPages/admin/components/menu/MenuOne.vue')),
	},
	{
		name: 'admin-components-menu-menutwo',
		path: '/admin/components/menu/menutwo',
		component: Vue.component('admin-components-menu-menutwo', () => import(/* webpackChunkName: "ProjectPages/admin/components/menu-component" */ 'ProjectPages/admin/components/menu/MenuTwo.vue')),
	},
	{
		name: 'admin-components-menu-topbar',
		path: '/admin/components/menu/topbar',
		component: Vue.component('admin-components-menu-topbar', () => import(/* webpackChunkName: "ProjectPages/admin/components/menu-component" */ 'ProjectPages/admin/components/menu/TopBar.vue')),
	},
	{
		name: 'admin-construction-progress-add',
		path: '/admin/construction-progress/add',
		component: Vue.component('admin-construction-progress-add', () => import(/* webpackChunkName: "ProjectPages/admin/construction-progress-component" */ 'ProjectPages/admin/construction-progress/add.vue')),
	},
	{
		name: 'admin-construction-progress-edit',
		path: '/admin/construction-progress/edit',
		component: Vue.component('admin-construction-progress-edit', () => import(/* webpackChunkName: "ProjectPages/admin/construction-progress-component" */ 'ProjectPages/admin/construction-progress/edit.vue')),
	},
	{
		name: 'admin-construction-progress-view',
		path: '/admin/construction-progress/view',
		component: Vue.component('admin-construction-progress-view', () => import(/* webpackChunkName: "ProjectPages/admin/construction-progress-component" */ 'ProjectPages/admin/construction-progress/view.vue')),
	},
	{
		name: 'admin-contracts-add',
		path: '/admin/contracts/add',
		component: Vue.component('admin-contracts-add', () => import(/* webpackChunkName: "ProjectPages/admin/contracts-component" */ 'ProjectPages/admin/contracts/add.vue')),
	},
	{
		name: 'admin-contracts-edit',
		path: '/admin/contracts/edit',
		component: Vue.component('admin-contracts-edit', () => import(/* webpackChunkName: "ProjectPages/admin/contracts-component" */ 'ProjectPages/admin/contracts/edit.vue')),
	},
	{
		name: 'admin-contracts-view',
		path: '/admin/contracts/view',
		component: Vue.component('admin-contracts-view', () => import(/* webpackChunkName: "ProjectPages/admin/contracts-component" */ 'ProjectPages/admin/contracts/view.vue')),
	},
	{
		name: 'admin-dashboard',
		path: '/admin/dashboard',
		component: Vue.component('admin-dashboard', () => import(/* webpackChunkName: "ProjectPages/admin-component" */ 'ProjectPages/admin/dashboard.vue')),
	},
	{
		name: 'admin-form-variable',
		path: '/admin/form-variable',
		component: Vue.component('admin-form-variable', () => import(/* webpackChunkName: "ProjectPages/admin-component" */ 'ProjectPages/admin/form-variable.vue')),
	},
	{
		name: 'admin-news-add',
		path: '/admin/news/add',
		component: Vue.component('admin-news-add', () => import(/* webpackChunkName: "ProjectPages/admin/news-component" */ 'ProjectPages/admin/news/add.vue')),
	},
	{
		name: 'admin-news-edit',
		path: '/admin/news/edit',
		component: Vue.component('admin-news-edit', () => import(/* webpackChunkName: "ProjectPages/admin/news-component" */ 'ProjectPages/admin/news/edit.vue')),
	},
	{
		name: 'admin-news-view',
		path: '/admin/news/view',
		component: Vue.component('admin-news-view', () => import(/* webpackChunkName: "ProjectPages/admin/news-component" */ 'ProjectPages/admin/news/view.vue')),
	},
	{
		name: 'admin-professionals-add',
		path: '/admin/professionals/add',
		component: Vue.component('admin-professionals-add', () => import(/* webpackChunkName: "ProjectPages/admin/professionals-component" */ 'ProjectPages/admin/professionals/add.vue')),
	},
	{
		name: 'admin-professionals-view',
		path: '/admin/professionals/view',
		component: Vue.component('admin-professionals-view', () => import(/* webpackChunkName: "ProjectPages/admin/professionals-component" */ 'ProjectPages/admin/professionals/view.vue')),
	},
	{
		name: 'admin-project-add',
		path: '/admin/project/add',
		component: Vue.component('admin-project-add', () => import(/* webpackChunkName: "ProjectPages/admin/project-component" */ 'ProjectPages/admin/project/add.vue')),
	},
	{
		name: 'admin-project-view',
		path: '/admin/project/view',
		component: Vue.component('admin-project-view', () => import(/* webpackChunkName: "ProjectPages/admin/project-component" */ 'ProjectPages/admin/project/view.vue')),
	},
	{
		name: 'admin-tenders-add',
		path: '/admin/tenders/add',
		component: Vue.component('admin-tenders-add', () => import(/* webpackChunkName: "ProjectPages/admin/tenders-component" */ 'ProjectPages/admin/tenders/add.vue')),
	},
	{
		name: 'admin-tenders-view',
		path: '/admin/tenders/view',
		component: Vue.component('admin-tenders-view', () => import(/* webpackChunkName: "ProjectPages/admin/tenders-component" */ 'ProjectPages/admin/tenders/view.vue')),
	},
	{
		name: 'admin-user-analyst-add',
		path: '/admin/user/analyst/add',
		component: Vue.component('admin-user-analyst-add', () => import(/* webpackChunkName: "ProjectPages/admin/user/analyst-component" */ 'ProjectPages/admin/user/analyst/add.vue')),
	},
	{
		name: 'admin-user-analyst-view',
		path: '/admin/user/analyst/view',
		component: Vue.component('admin-user-analyst-view', () => import(/* webpackChunkName: "ProjectPages/admin/user/analyst-component" */ 'ProjectPages/admin/user/analyst/view.vue')),
	},
	{
		name: 'admin-user-subscriber-add',
		path: '/admin/user/subscriber/add',
		component: Vue.component('admin-user-subscriber-add', () => import(/* webpackChunkName: "ProjectPages/admin/user/subscriber-component" */ 'ProjectPages/admin/user/subscriber/add.vue')),
	},
	{
		name: 'admin-user-subscriber-view',
		path: '/admin/user/subscriber/view',
		component: Vue.component('admin-user-subscriber-view', () => import(/* webpackChunkName: "ProjectPages/admin/user/subscriber-component" */ 'ProjectPages/admin/user/subscriber/view.vue')),
	},
	{
		name: 'admin-user-super-admin-add',
		path: '/admin/user/super-admin/add',
		component: Vue.component('admin-user-super-admin-add', () => import(/* webpackChunkName: "ProjectPages/admin/user/super-admin-component" */ 'ProjectPages/admin/user/super-admin/add.vue')),
	},
	{
		name: 'admin-user-super-admin-view',
		path: '/admin/user/super-admin/view',
		component: Vue.component('admin-user-super-admin-view', () => import(/* webpackChunkName: "ProjectPages/admin/user/super-admin-component" */ 'ProjectPages/admin/user/super-admin/view.vue')),
	},
	{
		name: 'analytics-awarded-contracts-related-contracts',
		path: '/analytics/awarded-contracts/related-contracts',
		component: Vue.component('analytics-awarded-contracts-related-contracts', () => import(/* webpackChunkName: "ProjectPages/analytics/awarded-contracts-component" */ 'ProjectPages/analytics/awarded-contracts/related-contracts.vue')),
	},
	{
		name: 'analytics-awarded-contracts-search',
		path: '/analytics/awarded-contracts/search',
		component: Vue.component('analytics-awarded-contracts-search', () => import(/* webpackChunkName: "ProjectPages/analytics/awarded-contracts-component" */ 'ProjectPages/analytics/awarded-contracts/search.vue')),
	},
	{
		name: 'analytics-dashboard',
		path: '/analytics/dashboard',
		component: Vue.component('analytics-dashboard', () => import(/* webpackChunkName: "ProjectPages/analytics-component" */ 'ProjectPages/analytics/dashboard.vue')),
	},
	{
		name: 'analytics-industry-network',
		path: '/analytics/industry-network',
		component: Vue.component('analytics-industry-network', () => import(/* webpackChunkName: "ProjectPages/analytics-component" */ 'ProjectPages/analytics/industry-network.vue')),
	},
	{
		name: 'analytics-key-companies-search',
		path: '/analytics/key-companies/search',
		component: Vue.component('analytics-key-companies-search', () => import(/* webpackChunkName: "ProjectPages/analytics/key-companies-component" */ 'ProjectPages/analytics/key-companies/search.vue')),
	},
	{
		name: 'analytics-regional-volumes-search',
		path: '/analytics/regional-volumes/search',
		component: Vue.component('analytics-regional-volumes-search', () => import(/* webpackChunkName: "ProjectPages/analytics/regional-volumes-component" */ 'ProjectPages/analytics/regional-volumes/search.vue')),
	},
	{
		name: 'analytics-tender-insights-search',
		path: '/analytics/tender-insights/search',
		component: Vue.component('analytics-tender-insights-search', () => import(/* webpackChunkName: "ProjectPages/analytics/tender-insights-component" */ 'ProjectPages/analytics/tender-insights/search.vue')),
	},
	{
		name: 'analytics-top-company-list-company-list',
		path: '/analytics/top-company-list/company-list',
		component: Vue.component('analytics-top-company-list-company-list', () => import(/* webpackChunkName: "ProjectPages/analytics/top-company-list-component" */ 'ProjectPages/analytics/top-company-list/company-list.vue')),
	},
	{
		name: 'company-company-directory',
		path: '/company/company-directory',
		component: Vue.component('company-company-directory', () => import(/* webpackChunkName: "ProjectPages/company-component" */ 'ProjectPages/company/company-directory.vue')),
	},
	{
		name: 'company-directory-company-directory-list',
		path: '/company/directory/company-directory-list',
		component: Vue.component('company-directory-company-directory-list', () => import(/* webpackChunkName: "ProjectPages/company/directory-component" */ 'ProjectPages/company/directory/company-directory-list.vue')),
	},
	{
		name: 'company-profile-about',
		path: '/company/profile/about',
		component: Vue.component('company-profile-about', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/about.vue')),
	},
	{
		name: 'company-profile-associated-projects',
		path: '/company/profile/associated-projects',
		component: Vue.component('company-profile-associated-projects', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/associated-projects.vue')),
	},
	{
		name: 'company-profile-awarded-contracts',
		path: '/company/profile/awarded-contracts',
		component: Vue.component('company-profile-awarded-contracts', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/awarded-contracts.vue')),
	},
	{
		name: 'company-profile-awardee-contracts',
		path: '/company/profile/awardee-contracts',
		component: Vue.component('company-profile-awardee-contracts', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/awardee-contracts.vue')),
	},
	{
		name: 'company-profile-building-use',
		path: '/company/profile/building-use',
		component: Vue.component('company-profile-building-use', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/building-use.vue')),
	},
	{
		name: 'company-profile-category',
		path: '/company/profile/category',
		component: Vue.component('company-profile-category', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/category.vue')),
	},
	{
		name: 'company-profile-comments',
		path: '/company/profile/comments',
		component: Vue.component('company-profile-comments', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/comments.vue')),
	},
	{
		name: 'company-profile-companies-empanelled',
		path: '/company/profile/companies-empanelled',
		component: Vue.component('company-profile-companies-empanelled', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/companies-empanelled.vue')),
	},
	{
		name: 'company-profile-company-construction',
		path: '/company/profile/company-construction',
		component: Vue.component('company-profile-company-construction', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/company-construction.vue')),
	},
	{
		name: 'company-profile-company-coverage',
		path: '/company/profile/company-coverage',
		component: Vue.component('company-profile-company-coverage', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/company-coverage.vue')),
	},
	{
		name: 'company-profile-company-documents',
		path: '/company/profile/company-documents',
		component: Vue.component('company-profile-company-documents', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/company-documents.vue')),
	},
	{
		name: 'company-profile-company-empanelment-rfp',
		path: '/company/profile/company-empanelment-rfp',
		component: Vue.component('company-profile-company-empanelment-rfp', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/company-empanelment-rfp.vue')),
	},
	{
		name: 'company-profile-company-empanelment',
		path: '/company/profile/company-empanelment',
		component: Vue.component('company-profile-company-empanelment', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/company-empanelment.vue')),
	},
	{
		name: 'company-profile-company-map',
		path: '/company/profile/company-map',
		component: Vue.component('company-profile-company-map', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/company-map.vue')),
	},
	{
		name: 'company-profile-company-news',
		path: '/company/profile/company-news',
		component: Vue.component('company-profile-company-news', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/company-news.vue')),
	},
	{
		name: 'company-profile-company-relations',
		path: '/company/profile/company-relations',
		component: Vue.component('company-profile-company-relations', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/company-relations.vue')),
	},
	{
		name: 'company-profile-company-summary',
		path: '/company/profile/company-summary',
		component: Vue.component('company-profile-company-summary', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/company-summary.vue')),
	},
	{
		name: 'company-profile-company-tenders',
		path: '/company/profile/company-tenders',
		component: Vue.component('company-profile-company-tenders', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/company-tenders.vue')),
	},
	{
		name: 'company-profile-contacts',
		path: '/company/profile/contacts',
		component: Vue.component('company-profile-contacts', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/contacts.vue')),
	},
	{
		name: 'company-profile-financials',
		path: '/company/profile/financials',
		component: Vue.component('company-profile-financials', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/financials.vue')),
	},
	{
		name: 'company-profile-geographical-distribution',
		path: '/company/profile/geographical-distribution',
		component: Vue.component('company-profile-geographical-distribution', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/geographical-distribution.vue')),
	},
	{
		name: 'company-profile-market-forecast',
		path: '/company/profile/market-forecast',
		component: Vue.component('company-profile-market-forecast', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/market-forecast.vue')),
	},
	{
		name: 'company-profile-metropolitan-region',
		path: '/company/profile/metropolitan-region',
		component: Vue.component('company-profile-metropolitan-region', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/metropolitan-region.vue')),
	},
	{
		name: 'company-profile-offices',
		path: '/company/profile/offices',
		component: Vue.component('company-profile-offices', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/offices.vue')),
	},
	{
		name: 'company-profile-other-bidders',
		path: '/company/profile/other-bidders',
		component: Vue.component('company-profile-other-bidders', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/other-bidders.vue')),
	},
	{
		name: 'company-profile-participated-tenders',
		path: '/company/profile/participated-tenders',
		component: Vue.component('company-profile-participated-tenders', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/participated-tenders.vue')),
	},
	{
		name: 'company-profile-project-area-sqft',
		path: '/company/profile/project-area-sqft',
		component: Vue.component('company-profile-project-area-sqft', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/project-area-sqft.vue')),
	},
	{
		name: 'company-profile-project-status',
		path: '/company/profile/project-status',
		component: Vue.component('company-profile-project-status', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/project-status.vue')),
	},
	{
		name: 'company-profile-project-value',
		path: '/company/profile/project-value',
		component: Vue.component('company-profile-project-value', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/project-value.vue')),
	},
	{
		name: 'company-profile-relationship-analytics',
		path: '/company/profile/relationship-analytics',
		component: Vue.component('company-profile-relationship-analytics', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/relationship-analytics.vue')),
	},
	{
		name: 'company-profile-sector',
		path: '/company/profile/sector',
		component: Vue.component('company-profile-sector', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/sector.vue')),
	},
	{
		name: 'company-profile-swot-analysis',
		path: '/company/profile/swot-analysis',
		component: Vue.component('company-profile-swot-analysis', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/swot-analysis.vue')),
	},
	{
		name: 'company-search',
		path: '/company/search',
		component: Vue.component('company-search', () => import(/* webpackChunkName: "ProjectPages/company-component" */ 'ProjectPages/company/search.vue')),
	},
	{
		name: 'components-columnsort',
		path: '/components/columnsort',
		component: Vue.component('components-columnsort', () => import(/* webpackChunkName: "ProjectPages/components-component" */ 'ProjectPages/components/ColumnSort.vue')),
	},
	{
		name: 'components-constructionpage',
		path: '/components/constructionpage',
		component: Vue.component('components-constructionpage', () => import(/* webpackChunkName: "ProjectPages/components-component" */ 'ProjectPages/components/ConstructionPage.vue')),
	},
	{
		name: 'components-datefilter',
		path: '/components/datefilter',
		component: Vue.component('components-datefilter', () => import(/* webpackChunkName: "ProjectPages/components-component" */ 'ProjectPages/components/DateFilter.vue')),
	},
	{
		name: 'components-listview',
		path: '/components/listview',
		component: Vue.component('components-listview', () => import(/* webpackChunkName: "ProjectPages/components-component" */ 'ProjectPages/components/ListView.vue')),
	},
	{
		name: 'components-pagination',
		path: '/components/pagination',
		component: Vue.component('components-pagination', () => import(/* webpackChunkName: "ProjectPages/components-component" */ 'ProjectPages/components/Pagination.vue')),
	},
	{
		name: 'components-savesearch',
		path: '/components/savesearch',
		component: Vue.component('components-savesearch', () => import(/* webpackChunkName: "ProjectPages/components-component" */ 'ProjectPages/components/SaveSearch.vue')),
	},
	{
		name: 'components-search-param',
		path: '/components/search-param',
		component: Vue.component('components-search-param', () => import(/* webpackChunkName: "ProjectPages/components-component" */ 'ProjectPages/components/Search-Param.vue')),
	},
	{
		name: 'components-search',
		path: '/components/search',
		component: Vue.component('components-search', () => import(/* webpackChunkName: "ProjectPages/components-component" */ 'ProjectPages/components/Search.vue')),
	},
	{
		name: 'components-selectedoptions',
		path: '/components/selectedoptions',
		component: Vue.component('components-selectedoptions', () => import(/* webpackChunkName: "ProjectPages/components-component" */ 'ProjectPages/components/SelectedOptions.vue')),
	},
	{
		name: 'components-variables',
		path: '/components/variables',
		component: Vue.component('components-variables', () => import(/* webpackChunkName: "ProjectPages/components-component" */ 'ProjectPages/components/Variables.vue')),
	},
	{
		name: 'contracts-contract-profile',
		path: '/contracts/contract-profile',
		component: Vue.component('contracts-contract-profile', () => import(/* webpackChunkName: "ProjectPages/contracts-component" */ 'ProjectPages/contracts/contract-profile.vue')),
	},
	{
		name: 'contracts-search',
		path: '/contracts/search',
		component: Vue.component('contracts-search', () => import(/* webpackChunkName: "ProjectPages/contracts-component" */ 'ProjectPages/contracts/search.vue')),
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
		name: 'login',
		path: '/login',
		component: Vue.component('login', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/login.vue')),
	},
	{
		name: 'my-profile',
		path: '/my-profile',
		component: Vue.component('my-profile', () => import(/* webpackChunkName: "ProjectPages-component" */ 'ProjectPages/my-profile.vue')),
	},
	{
		name: 'news-news',
		path: '/news/news',
		component: Vue.component('news-news', () => import(/* webpackChunkName: "ProjectPages/news-component" */ 'ProjectPages/news/news.vue')),
	},
	{
		name: 'professionals-professional-profile',
		path: '/professionals/professional-profile',
		component: Vue.component('professionals-professional-profile', () => import(/* webpackChunkName: "ProjectPages/professionals-component" */ 'ProjectPages/professionals/professional-profile.vue')),
	},
	{
		name: 'professionals-search',
		path: '/professionals/search',
		component: Vue.component('professionals-search', () => import(/* webpackChunkName: "ProjectPages/professionals-component" */ 'ProjectPages/professionals/search.vue')),
	},
	{
		name: 'project-directory-project-directory-list',
		path: '/Project/directory/project-directory-list',
		component: Vue.component('project-directory-project-directory-list', () => import(/* webpackChunkName: "ProjectPages/Project/directory-component" */ 'ProjectPages/Project/directory/project-directory-list.vue')),
	},
	{
		name: 'project-profile-about',
		path: '/Project/profile/about',
		component: Vue.component('project-profile-about', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/about.vue')),
	},
	{
		name: 'project-profile-awarded-contract',
		path: '/Project/profile/awarded-contract',
		component: Vue.component('project-profile-awarded-contract', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/awarded-contract.vue')),
	},
	{
		name: 'project-profile-comments',
		path: '/Project/profile/comments',
		component: Vue.component('project-profile-comments', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/comments.vue')),
	},
	{
		name: 'project-profile-companies',
		path: '/Project/profile/companies',
		component: Vue.component('project-profile-companies', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/companies.vue')),
	},
	{
		name: 'project-profile-company-empanelment-rfp',
		path: '/Project/profile/company-empanelment-rfp',
		component: Vue.component('project-profile-company-empanelment-rfp', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/company-empanelment-RFP.vue')),
	},
	{
		name: 'project-profile-company-empanelment',
		path: '/Project/profile/company-empanelment',
		component: Vue.component('project-profile-company-empanelment', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/company-empanelment.vue')),
	},
	{
		name: 'project-profile-construction-progress',
		path: '/Project/profile/construction-progress',
		component: Vue.component('project-profile-construction-progress', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/construction-progress.vue')),
	},
	{
		name: 'project-profile-contacts',
		path: '/Project/profile/contacts',
		component: Vue.component('project-profile-contacts', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/contacts.vue')),
	},
	{
		name: 'project-profile-coverage',
		path: '/Project/profile/coverage',
		component: Vue.component('project-profile-coverage', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/coverage.vue')),
	},
	{
		name: 'project-profile-documents',
		path: '/Project/profile/documents',
		component: Vue.component('project-profile-documents', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/documents.vue')),
	},
	{
		name: 'project-profile-image-slider',
		path: '/Project/profile/image-slider',
		component: Vue.component('project-profile-image-slider', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/image-slider.vue')),
	},
	{
		name: 'project-profile-news-view',
		path: '/Project/profile/news-view',
		component: Vue.component('project-profile-news-view', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/news-view.vue')),
	},
	{
		name: 'project-profile-news',
		path: '/Project/profile/news',
		component: Vue.component('project-profile-news', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/news.vue')),
	},
	{
		name: 'project-profile-product-empanelment',
		path: '/Project/profile/product-empanelment',
		component: Vue.component('project-profile-product-empanelment', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/product-empanelment.vue')),
	},
	{
		name: 'project-profile-project-location',
		path: '/Project/profile/project-location',
		component: Vue.component('project-profile-project-location', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/project-location.vue')),
	},
	{
		name: 'project-profile-project-map',
		path: '/Project/profile/project-map',
		component: Vue.component('project-profile-project-map', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/project-map.vue')),
	},
	{
		name: 'project-profile-project-profile',
		path: '/Project/profile/project-profile',
		component: Vue.component('project-profile-project-profile', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/project-profile.vue')),
	},
	{
		name: 'project-profile-project-summary',
		path: '/Project/profile/project-summary',
		component: Vue.component('project-profile-project-summary', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/project-summary.vue')),
	},
	{
		name: 'project-profile-status-update',
		path: '/Project/profile/status-update',
		component: Vue.component('project-profile-status-update', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/status-update.vue')),
	},
	{
		name: 'project-profile-technical',
		path: '/Project/profile/technical',
		component: Vue.component('project-profile-technical', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/technical.vue')),
	},
	{
		name: 'project-profile-tenders',
		path: '/Project/profile/tenders',
		component: Vue.component('project-profile-tenders', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/tenders.vue')),
	},
	{
		name: 'project-project-directory',
		path: '/Project/project-directory',
		component: Vue.component('project-project-directory', () => import(/* webpackChunkName: "ProjectPages/Project-component" */ 'ProjectPages/Project/project-directory.vue')),
	},
	{
		name: 'project-search',
		path: '/Project/search',
		component: Vue.component('project-search', () => import(/* webpackChunkName: "ProjectPages/Project-component" */ 'ProjectPages/Project/search.vue')),
	},
	{
		name: 'tender-components-awarded-contracts',
		path: '/tender/components/awarded-contracts',
		component: Vue.component('tender-components-awarded-contracts', () => import(/* webpackChunkName: "ProjectPages/tender/components-component" */ 'ProjectPages/tender/components/awarded-contracts.vue')),
	},
	{
		name: 'tender-components-key-dates',
		path: '/tender/components/key-dates',
		component: Vue.component('tender-components-key-dates', () => import(/* webpackChunkName: "ProjectPages/tender/components-component" */ 'ProjectPages/tender/components/key-dates.vue')),
	},
	{
		name: 'tender-components-key-value',
		path: '/tender/components/key-value',
		component: Vue.component('tender-components-key-value', () => import(/* webpackChunkName: "ProjectPages/tender/components-component" */ 'ProjectPages/tender/components/key-value.vue')),
	},
	{
		name: 'tender-components-tender-details',
		path: '/tender/components/tender-details',
		component: Vue.component('tender-components-tender-details', () => import(/* webpackChunkName: "ProjectPages/tender/components-component" */ 'ProjectPages/tender/components/tender-details.vue')),
	},
	{
		name: 'tender-components-tender-documents',
		path: '/tender/components/tender-documents',
		component: Vue.component('tender-components-tender-documents', () => import(/* webpackChunkName: "ProjectPages/tender/components-component" */ 'ProjectPages/tender/components/tender-documents.vue')),
	},
	{
		name: 'tender-components-tender-status',
		path: '/tender/components/tender-status',
		component: Vue.component('tender-components-tender-status', () => import(/* webpackChunkName: "ProjectPages/tender/components-component" */ 'ProjectPages/tender/components/tender-status.vue')),
	},
	{
		name: 'tender-search',
		path: '/tender/search',
		component: Vue.component('tender-search', () => import(/* webpackChunkName: "ProjectPages/tender-component" */ 'ProjectPages/tender/search.vue')),
	},
	{
		name: 'tender-tender-profile',
		path: '/tender/tender-profile',
		component: Vue.component('tender-tender-profile', () => import(/* webpackChunkName: "ProjectPages/tender-component" */ 'ProjectPages/tender/tender-profile.vue')),
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
		name: 'admin-awarded-contracts-edit',
		path: '/admin/awarded-contracts/:edit',
		component: Vue.component('admin-awarded-contracts-edit', () => import(/* webpackChunkName: "ProjectPages/admin/awarded-contracts-component" */ 'ProjectPages/admin/awarded-contracts/__edit.vue')),
	},
	{
		name: 'admin-company-edit',
		path: '/admin/company/:edit',
		component: Vue.component('admin-company-edit', () => import(/* webpackChunkName: "ProjectPages/admin/company-component" */ 'ProjectPages/admin/company/__edit.vue')),
	},
	{
		name: 'admin-professionals-edit',
		path: '/admin/professionals/:edit',
		component: Vue.component('admin-professionals-edit', () => import(/* webpackChunkName: "ProjectPages/admin/professionals-component" */ 'ProjectPages/admin/professionals/__edit.vue')),
	},
	{
		name: 'admin-project-edit',
		path: '/admin/project/:edit',
		component: Vue.component('admin-project-edit', () => import(/* webpackChunkName: "ProjectPages/admin/project-component" */ 'ProjectPages/admin/project/__edit.vue')),
	},
	{
		name: 'admin-tenders-edit',
		path: '/admin/tenders/:edit',
		component: Vue.component('admin-tenders-edit', () => import(/* webpackChunkName: "ProjectPages/admin/tenders-component" */ 'ProjectPages/admin/tenders/__edit.vue')),
	},
	{
		name: 'admin-user-analyst-edit',
		path: '/admin/user/analyst/:edit',
		component: Vue.component('admin-user-analyst-edit', () => import(/* webpackChunkName: "ProjectPages/admin/user/analyst-component" */ 'ProjectPages/admin/user/analyst/__edit.vue')),
	},
	{
		name: 'admin-user-subscriber-edit',
		path: '/admin/user/subscriber/:edit',
		component: Vue.component('admin-user-subscriber-edit', () => import(/* webpackChunkName: "ProjectPages/admin/user/subscriber-component" */ 'ProjectPages/admin/user/subscriber/__edit.vue')),
	},
	{
		name: 'admin-user-super-admin-edit',
		path: '/admin/user/super-admin/:edit',
		component: Vue.component('admin-user-super-admin-edit', () => import(/* webpackChunkName: "ProjectPages/admin/user/super-admin-component" */ 'ProjectPages/admin/user/super-admin/__edit.vue')),
	},
	{
		name: 'company-profile-slug',
		path: '/company/profile/:slug',
		component: Vue.component('company-profile-slug', () => import(/* webpackChunkName: "ProjectPages/company/profile-component" */ 'ProjectPages/company/profile/__slug.vue')),
	},
	{
		name: 'professionals-id',
		path: '/professionals/:id',
		component: Vue.component('professionals-id', () => import(/* webpackChunkName: "ProjectPages/professionals-component" */ 'ProjectPages/professionals/__id.vue')),
	},
	{
		name: 'professionals-slug',
		path: '/professionals/:slug',
		component: Vue.component('professionals-slug', () => import(/* webpackChunkName: "ProjectPages/professionals-component" */ 'ProjectPages/professionals/__slug.vue')),
	},
	{
		name: 'project-profile-slug',
		path: '/Project/profile/:slug',
		component: Vue.component('project-profile-slug', () => import(/* webpackChunkName: "ProjectPages/Project/profile-component" */ 'ProjectPages/Project/profile/__slug.vue')),
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