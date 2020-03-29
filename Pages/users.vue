<template>
    <dashboard-layout-one active="users">
        <base-bread-crumb-one name="Users" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <div class="flex w-full justify-center">
            <div class="m-2 mt-3 w-1/4">
                <div class="bg-white rounded-lg shadow-lg mt-5 justify-center">
                    <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">
                        <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans">Filters</div>
                        <div class="inline-flex items-center rounded p-2 bg-indigo-400">
                            <span class="text-center text-sm antialiased tracking-wide leading-snug font-semibold font-sans text-white">Save search</span>
                        </div>
                    </div>
                    <div class="m-2 p-2">
                        <div class="flex justify-between items-center text-left bg-gray-200 h-8 p-1">
                            <svg class="ml-2 h-5 w-5 text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 15l-4-3 1-4c0-3-3-6-7-6-3 0-6 3-6 6 0 4 3 7 6 7l4-1 3 4h2l1-1v-2zM4 8c0-2 2-4 4-4 3 0 5 2 5 4 0 3-2 5-5 5-2 0-4-2-4-5z"/>
                            </svg>
                            <div class="-ml-32 text-left text-sm antialiased leading-none tracking-wider font-sans font-semibold text-teal-400">Search</div>
                            <svg class="h-5 w-5 text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16 10l-1 1H5l-1-1 1-1h10l1 1z"/>
                            </svg>
                        </div>
                        <div class="border-solid border-2 border-gray-300 h-20 p-2 items-center">
                            <input type="text" class="w-full border border-teal-400 mt-4 py-1 px-2 bg-white rounded placeholder-teal-600 text-sm focus:outline-none antialiased tracking-wide font-medium text-teal-600 leading-normal" placeholder="Search...">
                        </div>
                    </div>
                    <div class="m-2 p-2">
                        <div class="flex justify-between items-center text-left bg-gray-200 h-8 p-1">
                            <svg class="ml-2 h-4 w-4 text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 15l-4-3 1-4c0-3-3-6-7-6-3 0-6 3-6 6 0 4 3 7 6 7l4-1 3 4h2l1-1v-2zM4 8c0-2 2-4 4-4 3 0 5 2 5 4 0 3-2 5-5 5-2 0-4-2-4-5z"/>
                            </svg>
                            <div class="-ml-32 text-left text-sm antialiased leading-none tracking-wider font-sans font-semibold text-teal-400">Search</div>
                            <svg class="h-4 w-4 text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16 10l-1 1H5l-1-1 1-1h10l1 1z"/>
                            </svg>
                        </div>
                        <div class="border-solid border-2 border-gray-300 h-20 p-2 items-center">
                            <input type="text" class="w-full border border-teal-400 mt-4 py-1 px-2 bg-white rounded placeholder-teal-600 text-sm focus:outline-none antialiased tracking-wide font-medium text-teal-600 leading-normal" placeholder="Search...">
                        </div>
                    </div>
                </div>
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
        }
    }
</script>

<style scoped>

</style>