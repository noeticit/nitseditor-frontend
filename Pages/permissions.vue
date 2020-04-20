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

<!--                <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">-->
<!--                    <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans">Performance by Ad Size</div>-->
<!--                </div>-->
                <div class="flex justify-start">
                    <div class="bg-white rounded-lg m-4 w-full shadow-lg min-h-full mt-1 justify-center">
                        <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">
                            <div class="text-left ml-2 text-xl antialiased leading-snug text-teal-600 tracking-normal font-sans">User Access</div>
                            <div>
                                <button class="flex bg-yellow-400 text-gray-800 rounded px-4 py-2 focus:outline-none text-blue hover:bg-yellow-500 justify-around">
                                    <svg class="inline-block mt-1 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16 2H7.979C6.88 2 6 2.88 6 3.98V12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10H8V4h8v8zM4 10H2v6c0 1.1.9 2 2 2h6v-2H4v-6z"/>
                                    </svg>
                                    <span class="font-medium">Add Role</span>
                                </button>
                            </div>


                        </div>
                        <div>
                            <div >
                                <input class="ml-3 mt-2 mb-2 text-xs py-1 px-4 border rounded w-2/4" placeholder="Add Users . . . ." type="text">
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
<!--                                    <th>-->
<!--                                        <div class="flex justify-center items-center">-->
<!--                                            <span class="text-white text-center text-base antialiased leading-snug tracking-normal font-sans font-semibold">Remove</span>-->
<!--                                        </div>-->
<!--                                    </th>-->
                                </tr>
                                <tr v-for="(item,index) in tableData">
                                    <td class="h-8 text-center border-b border-gray-200 text-sm text-teal-700 antialiased leading-tight tracking-normal  font-sans font-normal">{{item.name}}</td>
                                    <td class="h-8 text-center border-b border-gray-200 antialiased leading-tight tracking-normal  font-sans font-normal"><input type="checkbox"></td>
                                    <td class="h-8 text-center border-b border-gray-200 antialiased leading-tight tracking-normal  font-sans font-normal"><input type="checkbox"></td>
                                    <td class="h-8 text-center border-b border-gray-200  antialiased leading-tight tracking-normal  font-sans font-normal"><input type="checkbox"></td>
                                    <td class="h-8 text-center border-b border-gray-200 antialiased leading-tight tracking-normal  font-sans font-normal"><input type="checkbox"></td>
                                </tr>
                            </table>
                        </div>
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
                tableData:[{name:''}]
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
           this.tableData=this.$router.options.routes.map((d) => {
                return {
                    name: d.name,
                    // route: d.path
                }
            })
            // console.log(this.tableData);
        }
    }
</script>

<style scoped>

</style>