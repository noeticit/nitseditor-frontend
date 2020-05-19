<template>
    <dashboard-layout-one active="themes">
        <base-bread-crumb-one name="Themes" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
    </dashboard-layout-one>
</template>

<script>
    export default {
        name: "themes",
        data() {
            return {
                breadcrumbs: ['Themes', 'Second Link', 'Third Link', 'Fourth Link'],
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../Layouts/Dashboard/LayoutOne'),
        }
    }
</script>

<style scoped>

</style>