<template>
    <dashboard-layout-one active="form">
        <base-bread-crumb-one name="Form" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <base-portlet-one title="Forms">
            <div slot="toolbox">
                <router-link to="/nits-admin/form/create" class="inline-flex items-center rounded-full py-2 px-4 bg-teal-400">
                    <span class="text-center text-sm antialiased tracking-tight font-light font-sans text-white">Add new</span>
                </router-link>
            </div>
            <div>
                Here list view needs to be implemented
            </div>
        </base-portlet-one>
    </dashboard-layout-one>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                breadcrumbs: ['Forms'],
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../../Layouts/Dashboard/LayoutOne')
        },
    }
</script>

<style scoped>

</style>