<template>
    <dashboard-layout-one active="permissions">
        <base-bread-crumb-one name="Permissions" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
<!--        <div class="flex w-full justify-center">-->
<!--            <div class="m-2 mt-3 w-3/4">-->
<!--                <site-info-widget></site-info-widget>-->
<!--                <analytics-overview></analytics-overview>-->
<!--            </div>-->
<!--            <div class="m-2 mt-3 w-1/4">-->
<!--                <email-ad></email-ad>-->
<!--                <dashboard-task-info></dashboard-task-info>-->
<!--            </div>-->
<!--        </div>-->
        <div class="bg-white rounded-lg m-4 w-full shadow-lg mt-1 min-h-full jsutify-center">
            <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">
                <div class="text-left ml-2 text-xl antialiased leading-snug text-teal-600 tracking-normal font-sans">User Access</div>
                <div>
                </div>

            </div>
            <div>
                <table class="min-w-full">
                    <tr class="bg-teal-500 h-12">
                        <th>
                            <div class="flex justify-around items-center">
                                <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Name</span>
                            </div>
                        </th>
                        <th>
                            <div class="flex justify-around items-center">
                                <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Super Admin</span>
                            </div>

                        </th>
                        <th>
                            <div class="flex justify-around items-center">
                                <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Admin</span>
                            </div>
                        </th>
                        <th>
                            <div class="flex justify-around items-center">
                                <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Subscriber</span>
                            </div>
                        </th>
                        <th>
                            <div class="flex justify-around items-center">
                                <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Analytics</span>
                            </div>
                        </th>
                    </tr>
                    <tr v-for="index in 5" :key="index">
                        <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal">Abuzaid</td>
                        <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal"><input type="checkbox"></td>
                        <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal"><input type="checkbox"></td>
                        <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal"><input type="checkbox"></td>
                        <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal"><input type="checkbox"></td>
                    </tr>
                </table>
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