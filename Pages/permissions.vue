<template>
    <dashboard-layout-one active="permissions">
        <base-bread-crumb-one name="Permissions" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>

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
        name: "permissions",
        data() {
            return {
                breadcrumbs: ['Permissions'],
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../Layouts/Dashboard/LayoutOne')
        },
        created() {
            console.log(this.$router.options.routes.map((d) => {
                return {
                    name: d.name,
                    route: d.path
                }
            }))
        }
    }
</script>

<style scoped>

</style>