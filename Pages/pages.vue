<template>
    <dashboard-layout-one active="pages">
        <base-bread-crumb-one name="Pages" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
    </dashboard-layout-one>
</template>

<script>
    export default {
        name: "pages",
        data() {
            return {
                breadcrumbs: ['Pages', 'Second Link', 'Third Link', 'Fourth Link'],
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../Layouts/Dashboard/LayoutOne'),
        }
    }
</script>

<style scoped>

</style>