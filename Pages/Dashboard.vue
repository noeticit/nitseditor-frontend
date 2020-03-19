<template>
    <div>
        <dashboard-layout-one></dashboard-layout-one>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        components: {
            'DashboardLayoutOne': () => import('./../Layouts/Dashboard/LayoutOne')
        }
    }
</script>

<style scoped>

</style>