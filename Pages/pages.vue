<template>
    <dashboard-layout-one active="pages">
        <base-bread-crumb-one name="Pages" :breadcrumbs="breadcrumbs">

        </base-bread-crumb-one>
        <div class="flex w-full justify-start">
            <div class="m-2 overflow-y-auto h-screen  w-full">
                <div class="bg-white mb-24 rounded-lg min-h-full shadow-lg mt-1 justify-center">
                    <div class=" flex  justify-between border-solid border-b-2 p-2 text-center items-center">
                        <div class="text-left mt-2 mb-2 ml-4 text-xl antialiased leading-snug text-gray-900 tracking-normal font-medium font-sans"> Pages </div>
                        <div class="text-right flex">
                            <button class="bg-yellow-400 hover:bg-yellow-500  text-white font-semibold focus:outline-none hover:text-white py-2 px-4  hover:border-yellow-500 ">
                                <a href="Page/edit">Add</a>
                            </button>
                        </div>
                    </div>
                    <div class="p-4 ml-6 mr-6 mb-5">
<!--                        <list-view :tableData="tableData" :loading="loading" location="blog" :selectedColumns="selectedColumns" :headerStyle="headerStyle" >-->
<!--                            <template slot="index" slot-scope="props">-->
<!--                                {{ tableData.meta.from+ props.index}}-->
<!--                            </template>-->
<!--                        </list-view>-->
                    </div>
                </div>
            </div>
        </div>
    </dashboard-layout-one>
</template>

<script>
    export default {
        name: "pages",
        data() {
            return {
                isOpen: true,
                loading: false,
                tableData: {
                    data:[
                        {index: 1, title: 'xyz'}
                        ],
                },
                selectedColumns: [
                    { title: 'Sr No.', key: 'index'},
                    { title: 'Title', key: 'title'},
                    { title: 'Edit', key: 'edit'},
                    { title: 'Delete', key: 'delete'},
                ],
                headerStyle:{
                    index: 'margin-top: 2px;',
                    title: 'color: white',
                    edit: 'color: white;',
                    delete: 'color: white;',
                },
                breadcrumbs: ['Pages', 'Second Link', 'Third Link', 'Fourth Link'],
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../Layouts/Dashboard/LayoutOne'),
        }
    }
</script>

<style scoped>

</style>