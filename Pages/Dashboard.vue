<template>
    <dashboard-layout-one active="dashboard">
        <base-bread-crumb-one name="Dashboard" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <div class="flex w-full justify-center">
            <div class="m-2 mt-3 w-3/4">
                <site-info-widget></site-info-widget>
                <analytics-overview></analytics-overview>
            </div>
            <div class="m-2 mt-3 w-1/4">
                <email-ad></email-ad>
                <dashboard-task-info></dashboard-task-info>
            </div>
        </div>
    </dashboard-layout-one>
</template>

<script>
    export default {
        name: "Dashboard",
        data() {
            return {
                breadcrumbs: ['Dashboard', 'Second Link', 'Third Link', 'Fourth Link'],
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../Layouts/Dashboard/LayoutOne'),
            'SiteInfoWidget': () => import('./../Components/App/SiteInfoWidget'),
            'AnalyticsOverview': () => import('./../Components/App/AnalyticsOverview'),
            'EmailAd': () => import('./../Components/App/EmailAd'),
            'DashboardTaskInfo': () => import('./../Components/App/DashboardTaskInfo'),
        }
    }
</script>

<style scoped>

</style>