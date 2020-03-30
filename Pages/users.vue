<template>
    <dashboard-layout-one active="users">
        <base-bread-crumb-one name="Users" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <div class="flex w-full justify-center">
            <div class="m-2 w-1/4">
                <search-filters></search-filters>
            </div>
            <div class="m-2 w-3/4">
                <base-table-two></base-table-two>
            </div>
        </div>
    </dashboard-layout-one>
</template>

<script>
    export default {
        name: "users",
        data() {
            return {
                breadcrumbs: ['Users', 'Second Link', 'Third Link', 'Fourth Link'],
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../Layouts/Dashboard/LayoutOne'),
            'SearchFilters': () => import('./../Components/App/SearchFilters'),
        }
    }
</script>

<style scoped>

</style>