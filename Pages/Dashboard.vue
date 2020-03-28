<template>
    <div>
        <dashboard-layout-one>
            <base-bread-crumb-one name="Dashboard"></base-bread-crumb-one>
            <div class="flex justify-around">
                <base-portlet-one></base-portlet-one>
            </div>
            <base-table-one></base-table-one>
            <app-description></app-description>
            <!--                <base-modal-one></base-modal-one>-->
            <base-dropdown-button></base-dropdown-button>
        </dashboard-layout-one>
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