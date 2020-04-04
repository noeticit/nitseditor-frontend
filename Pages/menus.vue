<template>
    <dashboard-layout-one active="menus">
        <base-bread-crumb-one name="Menus" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <div class="mt-4 flex justify-center">
            <div class="m-2 bg-white w-1/4">
                <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">
                    <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans">Add Menu items</div>
<!--                    <div class="inline-flex items-center rounded-full py-2 px-4 bg-teal-400">-->
<!--                        <span class="text-center text-sm antialiased tracking-tight font-light font-sans text-white">Get it now</span>-->
<!--                    </div>-->
                </div>
                <div class="bg-white rounded-lg shadow-lg mt-1 justify-center">
                    <div class="m-2 p-2">
                        <div class="flex rounded shadow justify-between items-center text-left bg-gray-100 h-8 p-1">
                            <svg class="ml-2 h-4 w-4 text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5 7h1l2-2a2 2 0 010-1L5 2 3 5l1 2h1zM3 9V8L2 6a9 9 0 000 9l2-5-1-1zm7-7l1 1 4-1a9 9 0 00-8-1l2 2 1-1zm3 10v-1l-2-5a2 2 0 01-2 0L7 8a2 2 0 010 1l6 3zm3 2a16 16 0 01-1 3l4-4h-2l-1 1zm-3-1l-7-2a2 2 0 01-1 0l-2 5 3 2 7-5zm3-10l-4 1v1l3 6 2 1 2-1a9 9 0 00-3-8zm-3 11l-5 5a9 9 0 006-1 14 14 0 000-4h-1z"/>
                            </svg>
                            <div class="-ml-32 text-left text-sm antialiased leading-none tracking-wider font-sans font-semibold text-teal-400">Pages</div>
                            <svg class="h-4 w-4 text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16 10l-1 1H5l-1-1 1-1h10l1 1z"/>
                            </svg>
                        </div>
                        <div class="shadow h-32 p-2 px-4 items-center overflow-y-auto">
                            <label class="block leading-6">
                                <input class="mr-2 leading-tight" type="checkbox">
                                <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                Select All
                            </span>
                            </label>
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
                            <label class="block leading-4">
                                <input class="mr-2 leading-tight" type="checkbox">
                                <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                   Tenders
                                </span>
                            </label>
                            <label class="block leading-4">
                                <input class="mr-2 leading-tight" type="checkbox">
                                <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Awards Contracts
                                </span>
                            </label>
                            <label class="block leading-4">
                                <input class="mr-2 leading-tight" type="checkbox">
                                <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Empanelment
                                </span>
                            </label>
                            <label class="block leading-4">
                                <input class="mr-2 leading-tight" type="checkbox">
                                <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                   Professionals
                                </span>
                            </label>
                            <label class="block leading-4">
                                <input class="mr-2 leading-tight" type="checkbox">
                                <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Products
                                </span>
                            </label>
                            <label class="block leading-4">
                                <input class="mr-2 leading-tight" type="checkbox">
                                <span class="text-xs antialiased leading-tight tracking-wide font-sans">
                                    Geo Search
                                </span>
                            </label>
                            <div class="md:flex md:items-center mb-6 mt-4">
                                <div class="md:w-1/3">

                                </div>
                                <div class="md:w-2/3">
                                    <div class="inline-flex items-center px-4 bg-teal-400">
                                        <span class="text-center text-sm antialiased tracking-tight font-light font-sans text-white">Add to Menu</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="m-2 p-2">
                        <div class="flex rounded shadow justify-between items-center text-left bg-gray-100 h-8 p-1">
                            <svg class="ml-2 h-4 w-4 text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5 7h1l2-2a2 2 0 010-1L5 2 3 5l1 2h1zM3 9V8L2 6a9 9 0 000 9l2-5-1-1zm7-7l1 1 4-1a9 9 0 00-8-1l2 2 1-1zm3 10v-1l-2-5a2 2 0 01-2 0L7 8a2 2 0 010 1l6 3zm3 2a16 16 0 01-1 3l4-4h-2l-1 1zm-3-1l-7-2a2 2 0 01-1 0l-2 5 3 2 7-5zm3-10l-4 1v1l3 6 2 1 2-1a9 9 0 00-3-8zm-3 11l-5 5a9 9 0 006-1 14 14 0 000-4h-1z"/>
                            </svg>
                            <div class="-ml-32 text-left text-sm antialiased leading-none tracking-wider font-sans font-semibold text-teal-400">Custom Links</div>
                            <svg class="h-4 w-4 text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16 10l-1 1H5l-1-1 1-1h10l1 1z"/>
                            </svg>
                        </div>
                        <div class="shadow h-32 p-2 px-4 items-center overflow-y-auto">
                            <form class="w-full max-w-sm">
                                <div class="md:flex md:items-center mb-6">
                                    <div class="md:w-1/3">
                                        <label class="block text-gray-500  mb-1 md:mb-0 pr-4">
                                           Url
                                        </label>
                                    </div>
                                    <div class="md:w-2/3">
                                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full px-4 text-gray-700 leading-tight" type="text" value="">
                                    </div>
                                </div>
                                <div class="md:flex md:items-center mb-6">
                                    <div class="md:w-1/3">
                                        <label class="block text-gray-500  mb-1 md:mb-0 pr-4">
                                            Link Text
                                        </label>
                                    </div>
                                    <div class="md:w-2/3">
                                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full px-4 text-gray-700 leading-tight" type="text" value="">
                                    </div>
                                </div>
                                <div class="md:flex md:items-center mb-6">
                                    <div class="md:w-1/3">

                                    </div>
                                    <div class="md:w-2/3">
                                        <div class="inline-flex items-center px-4 bg-teal-400">
                                            <span class="text-center text-sm antialiased tracking-tight font-light font-sans text-white">Add to Menu</span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-2 bg-white w-3/4">
                <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">
                    <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans">Menu Structure</div>
                    <div class="inline-flex items-center rounded-full py-2 px-4 bg-teal-400">
                        <span class="text-center text-sm antialiased tracking-tight font-light font-sans text-white">Save Menu</span>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg mt-1 justify-center">
                    <div class="m-2 p-2">
                        Drag each item into the order you prefer. Click the arrow on the right of the item to reveal additional configuration options.

                        <div id="app" class=" bg-gray-200 flex items-center mt-5 p-5">
                            <draggable tag="ul"
                                       class="w-full max-w-md"
                                       ghost-class="moving-card"
                                       :list="users"
                                       :animation="200">
                                    <li v-for="user in users"
                                        :key="user.id"
                                        class="p-4 mb-3 flex justify-between items-center bg-white shadow rounded-lg cursor-move">
                                        {{user.name}}
                                    </li>
                            </draggable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </dashboard-layout-one>
</template>

<script>
    import Draggable from 'vuedraggable'

    export default {
        name: "menus",
        data() {
            return {
                breadcrumbs: ['Menus', 'Second Link', 'Third Link', 'Fourth Link'],
                users: [
                    {
                        id: 1,
                        name: "Home",
                        avatar: "https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
                    },
                    {
                        id: 2,
                        name: "Projects",
                        avatar: "https://pickaface.net/gallery/avatar/freud51c8b3f65e7dc.png"
                    },
                    {
                        id: 3,
                        name: "Companies",
                        avatar: "https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png"
                    },
                    {
                        id: 4,
                        name: "Tenders",
                        avatar: "https://pickaface.net/gallery/avatar/unr_yassine_191124_2012_3gngr.png"
                    },
                    {
                        id: 5,
                        name: "Professionals",
                        avatar: "https://pickaface.net/gallery/avatar/elmedinilla541c03412955c.png"
                    }
                ]
            }
        },
        components: {
            'DashboardLayoutOne': () => import('./../Layouts/Dashboard/LayoutOne'),
             Draggable
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>

<style lang="scss">
    .moving-card {
        @apply opacity-50 bg-gray-100 border border-blue-500;
    }
</style>