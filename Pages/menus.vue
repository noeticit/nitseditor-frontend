<template>
    <dashboard-layout-one active="menus">
        <base-bread-crumb-one name="Menus" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <div class="mt-4 flex justify-center">
            <div class="m-2 bg-white w-1/4">
                <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">
                    <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans">Add Menu items</div>
                    <div class="inline-flex items-center rounded-full py-2 px-4 bg-teal-400">
                        <span class="text-center text-sm antialiased tracking-tight font-light font-sans text-white">Get it now</span>
                    </div>
                </div>
                <div class="mt-2 p-1 justify-start">
                    <label class="block leading-4">
                        <input class="mr-2 leading-tight" type="checkbox">
                        <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Home
                                </span>
                    </label>
                    <label class="block leading-4">
                        <input class="mr-2 leading-tight" type="checkbox">
                        <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Dashboard
                                </span>
                    </label>
                    <label class="block leading-4">
                        <input class="mr-2 leading-tight" type="checkbox">
                        <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Projects
                                </span>
                    </label>
                    <label class="block leading-4">
                        <input class="mr-2 leading-tight" type="checkbox">
                        <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Companies
                                </span>
                    </label>
                </div>
            </div>
            <div class="m-2 bg-white w-3/4">
                <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">
                    <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans">Menu Structure</div>
                    <div class="inline-flex items-center rounded-full py-2 px-4 bg-teal-400">
                        <span class="text-center text-sm antialiased tracking-tight font-light font-sans text-white">Save</span>
                    </div>
                </div>
            </div>
        </div>
    </dashboard-layout-one>
</template>

<script>
    export default {
        name: "menus",
        data() {
            return {
                breadcrumbs: ['Menus', 'Second Link', 'Third Link', 'Fourth Link'],
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../Layouts/Dashboard/LayoutOne'),
        }
    }
</script>

<style scoped>

</style>