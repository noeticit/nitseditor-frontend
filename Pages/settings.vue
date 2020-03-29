<template>
    <dashboard-layout-one active="settings">
        <base-bread-crumb-one name="Settings" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
    </dashboard-layout-one>
</template>

<script>
    export default {
        name: "settings",
        data() {
            return {
                breadcrumbs: ['Settings', 'Second Link', 'Third Link', 'Fourth Link'],
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../Layouts/Dashboard/LayoutOne'),
        }
    }
</script>

<style scoped>

</style>