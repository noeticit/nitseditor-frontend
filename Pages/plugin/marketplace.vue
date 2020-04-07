<template>
    <dashboard-layout-one active="plugins">
        <base-bread-crumb-one name="Plugins" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>

    </dashboard-layout-one>

</template>

<script>
    export default {
        name: "marketplace",
        data() {
            return {
                breadcrumbs: ['Plugins', 'Second Link', 'Third Link', 'Fourth Link'],
            }
        },
        components: {
            'DashboardLayoutOne': () => import('../../Layouts/Dashboard/LayoutOne'),
        }
    }
</script>

<style scoped>

</style>