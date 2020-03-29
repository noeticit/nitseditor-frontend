<template>
    <dashboard-layout-one active="menus">
        <base-bread-crumb-one name="Menus" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
    </dashboard-layout-one>
</template>

<script>
    export default {
        name: "menus",
        data() {
            return {
                breadcrumbs: ['Menus', 'Second Link', 'Third Link', 'Fourth Link'],
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../Layouts/Dashboard/LayoutOne'),
        }
    }
</script>

<style scoped>

</style>