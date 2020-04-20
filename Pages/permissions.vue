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
        <div class="bg-white rounded-lg m-4 w-full shadow-lg min-h-full mt-1 justify-center">
            <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">
                <div class="text-left ml-2 text-xl antialiased leading-snug text-teal-600 tracking-normal font-sans">User Access</div>


            </div>
            <div>
                <div >
                    <input class="ml-3 mt-2 mb-2 text-xs py-1 px-4 border rounded w-2/4" placeholder="Add User....." type="text">
                </div>
                <table class="min-w-full">
                    <tr class="bg-teal-500 h-12">
                        <th>
                            <div class="flex justify-center  items-center">
                                <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Name</span>
                            </div>
                        </th>
                        <th>
                            <div class="flex justify-center items-center">
                                <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Super Admin</span>
                            </div>

                        </th>
                        <th>
                            <div class="flex justify-center items-center">
                                <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Admin</span>
                            </div>
                        </th>
                        <th>
                            <div class="flex justify-center items-center">
                                <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Subscriber</span>
                            </div>
                        </th>
                        <th>
                            <div class="flex justify-center items-center">
                                <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Analytics</span>
                            </div>
                        </th>
                        <th>
                            <div class="flex justify-center items-center">
                                <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Remove</span>
                            </div>
                        </th>
                    </tr>
                    <tr v-for="index in 3" :key="index">
                        <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal">Permission</td>
                        <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal"><input type="checkbox"></td>
                        <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal"><input type="checkbox"></td>
                        <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal"><input type="checkbox"></td>
                        <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal"><input type="checkbox"></td>
                        <td class="h-8 text-center border-b border-gray-200 text-sm text-gray-700 antialiased leading-tight tracking-normal  font-sans font-normal">
                            <a @click.prevent="removeElement()" class=" " href="#">
                                <svg class="inline-block text-teal-600 fill-current w-4 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 1.6a8.4 8.4 0 100 16.8 8.4 8.4 0 000-16.8zm4.79 11.46l-1.73 1.73L10 11.73l-3.06 3.06-1.73-1.73L8.27 10 5.21 6.94 6.94 5.2 10 8.27l3.06-3.06 1.73 1.73L11.73 10l3.06 3.06z"/>
                                </svg>
                            </a>
                        </td>
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
        methods:{
            removeElement(){

            }
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