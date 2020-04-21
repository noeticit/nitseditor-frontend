<template>
    <dashboard-layout-one active="users">
        <base-bread-crumb-one name="Users" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <div class="w-full justify-center pr-4">
            <base-table-two></base-table-two>
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
        }
    }
</script>

<style scoped>

</style>