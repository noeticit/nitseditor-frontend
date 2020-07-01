<template>
    <dashboard-layout-one active="menus">
        <base-bread-crumb-one name="Menus" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
        <div class="overflow-y-auto h-screen">
            <button v-if="isOpen " @click="isOpen= false" class="cursor-default focus:outline-none absolute right-0 left-0 bottom-0 top-0 h-full w-full"></button>
            <div class="mt-4 flex justify-center mb-32">
                <div class="m-2 rounded-lg shadow-lg bg-white w-1/4">
                    <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">
                        <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans">Add Menu items</div>
                    </div>
                    <div class="mt-1 justify-center">
                        <div class="m-2 p-2">
                            <div class="flex rounded shadow justify-between items-center text-left bg-gray-100 h-8 p-1" @click.prevent="accordions['page'] = !accordions['page']">
                                <svg class="ml-2 h-4 w-4 text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5 7h1l2-2a2 2 0 010-1L5 2 3 5l1 2h1zM3 9V8L2 6a9 9 0 000 9l2-5-1-1zm7-7l1 1 4-1a9 9 0 00-8-1l2 2 1-1zm3 10v-1l-2-5a2 2 0 01-2 0L7 8a2 2 0 010 1l6 3zm3 2a16 16 0 01-1 3l4-4h-2l-1 1zm-3-1l-7-2a2 2 0 01-1 0l-2 5 3 2 7-5zm3-10l-4 1v1l3 6 2 1 2-1a9 9 0 00-3-8zm-3 11l-5 5a9 9 0 006-1 14 14 0 000-4h-1z"/>
                                </svg>
                                <div class="-ml-32 text-left text-sm antialiased leading-none tracking-wider font-sans font-semibold text-teal-400">Pages</div>
                                <svg class="h-4 w-4 text-teal-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16 10l-1 1H5l-1-1 1-1h10l1 1z"/>
                                </svg>
                            </div>
                            <div class="shadow h-32 p-2 px-4 items-center overflow-y-auto" v-if="accordions['page']">
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
                                <div class="items-center text-center p-2">
                                    <div class="inline-flex items-center rounded-full py-2 px-4 bg-teal-400">
                                        <span class="text-center text-sm antialiased tracking-tight font-light font-sans text-white">Add to Menu</span>
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
                                <div class="flex m-2 justify-between items-center">
                                    <div class="w-1/3">
                                        <label class="block mb-1 pr-4 text-xs antialiased leading-tight tracking-wide font-sans">
                                            URL
                                        </label>
                                    </div>
                                    <div class="w-2/3 p-2">
                                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full px-4 text-gray-700 leading-tight" type="text" placeholder="Link">
                                    </div>
                                </div>
                                <div class="flex m-2 justify-between items-center">
                                    <div class="w-1/3">
                                        <label class="block mb-1 pr-4 text-xs antialiased leading-tight tracking-wide font-sans">
                                            Title
                                        </label>
                                    </div>
                                    <div class="w-2/3 p-2">
                                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full px-4 text-gray-700 leading-tight" type="text" placeholder="Heading/title">
                                    </div>
                                </div>
                                <div class="items-center text-center p-2">
                                    <div class="inline-flex items-center rounded-full py-2 px-4 bg-teal-400">
                                        <span class="text-center text-sm antialiased tracking-tight font-light font-sans text-white">Add to Menu</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-2 rounded-lg shadow-lg bg-white w-3/4">
                    <div class="flex justify-between border-solid border-b-2 p-2 text-center items-center">
                        <div class="text-left ml-2 text-xl antialiased leading-snug tracking-normal font-sans">Menu Structure</div>

                            <div class="relative ml-32 mt-1 w-1/2 h-10 focus:outline-none">
                                <div class="border rounded px-2 pt-1">
                                    <ejs-multiselect :dataSource="Multiselect" :fields="MultiselectData" placeholder=" Select A list" popupWidth="250px" popupHeight="200px"></ejs-multiselect>
                                </div>
<!--                                <span class="inline-block w-64 focus:outline-none rounded-md shadow-sm cursor-pointer">-->
<!--                                    <button @click="isOpen = ! isOpen" type="button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" class="cursor-pointer relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">-->
<!--                                        <span class="block truncate">-->
<!--                                              Select Menu :-->
<!--                                        </span>-->
<!--                                        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">-->
<!--                                            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">-->
<!--                                                <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                                            </svg>-->
<!--                                        </span>-->
<!--                                    </button>-->
<!--                                </span>-->
<!--                            <div class="w-64 absolute " v-if="isOpen">-->
<!--                                <div class="w-full mt-2 focus:outline-none rounded-t cursor-pointer bg-white shadow-lg">-->
<!--                                    <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" class="max-h-56 py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">-->
<!--                                        <li role="option" class="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9">-->
<!--                                            <input type="search" name="search" id="search" placeholder="Search Menu" class="appearance-none bg-white w-full outline-none focus:outline-none active:outline-none"/>-->
<!--                                        </li>-->
<!--                                    </ul>-->
<!--                                </div>-->
<!--                                <div @click="isOpen = false" class="w-full focus:outline-none cursor-pointer bg-white shadow-lg hover:bg-blue-600 hover:text-white">-->
<!--                                    <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" class="max-h-56 py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">-->
<!--                                        <li role="option" class="hover:text-white text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9">-->
<!--                                            <div class="flex items-center space-x-3">-->
<!--                                                <img src="/project-assets/images/mumbai.jpg" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />-->
<!--                                                <span class=" ml-4 font-normal block truncate">-->
<!--                                                    Home Menu-->
<!--                                                </span>-->
<!--                                            </div>-->
<!--                                            <span class="absolute text-white inset-y-0 right-0 flex items-center pr-4">-->
<!--                                                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">-->
<!--                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>-->
<!--                                                </svg>-->
<!--                                            </span>-->
<!--                                        </li>-->
<!--                                    </ul>-->
<!--                                </div>-->
<!--                                <div @click="isOpen = false" class=" w-full bg-white shadow-lg cursor-pointer hover:bg-blue-600 hover:text-white">-->
<!--                                    <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" class="max-h-56  py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">-->
<!--                                        <li role="option" class="hover:text-white text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9">-->
<!--                                            <div class="flex items-center space-x-3">-->
<!--                                                <img src="/project-assets/images/nightmumbai.jpg" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />-->
<!--                                                <span class="ml-4 font-normal block truncate">-->
<!--                                                        Admin Menu-->
<!--                                                </span>-->
<!--                                            </div>-->
<!--                                            <span class="absolute inset-y-0 right-0 flex items-center pr-4">-->
<!--                                                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">-->
<!--                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>-->
<!--                                                </svg>-->
<!--                                            </span>-->
<!--                                        </li>-->
<!--                                    </ul>-->
<!--                                </div>-->
<!--                                <div @click="isOpen = false" class=" w-full bg-white shadow-lg cursor-pointer hover:bg-blue-600 hover:text-white">-->
<!--                                    <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" class="max-h-56 py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">-->
<!--                                        <li role="option" class="text-gray-900 hover:text-white cursor-pointer select-none relative py-2 pl-3 pr-9">-->
<!--                                            <div class="flex items-center space-x-3">-->
<!--                                                <img src="/project-assets/images/themumbai.jpg" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />-->
<!--                                                <span class="ml-4 font-normal block truncate">-->
<!--                                                    Super Admin Menu-->
<!--                                                </span>-->
<!--                                            </div>-->
<!--                                            <span class="absolute inset-y-0 right-0 flex items-center pr-4">-->
<!--                                                <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">-->
<!--                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>-->
<!--                                                </svg>-->
<!--                                            </span>-->
<!--                                        </li>-->
<!--                                    </ul>-->
<!--                                </div>-->
<!--                                <div @click="isOpen = false" class="w-full bg-white shadow-lg cursor-pointer hover:bg-blue-600 hover:text-white">-->
<!--                                    <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" class="max-h-56 rounded-b py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">-->
<!--                                        <li role="option" class="text-gray-900 hover:text-white cursor-pointer select-none relative py-2 pl-3 pr-9">-->
<!--                                            <div class="flex items-center space-x-3">-->
<!--                                                <img src="/project-assets/images/newmumbai.jpg" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />-->
<!--                                                <span class="ml-4 font-normal block truncate">-->
<!--                                                    Subscriber Menu-->
<!--                                                </span>-->
<!--                                            </div>-->
<!--                                            <span class="absolute text-white inset-y-0 right-0 flex items-center pr-4">-->
<!--                                                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">-->
<!--                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>-->
<!--                                                </svg>-->
<!--                                            </span>-->
<!--                                        </li>-->
<!--                                    </ul>-->
<!--                                </div>-->
<!--                            </div>-->
                        </div>
                        <div class="inline-flex ml-5 items-center mr-5 rounded-full py-2 px-4 bg-teal-400">
                            <span class="text-center text-sm antialiased tracking-tight font-light font-sans text-white">Save Menu</span>
                        </div>
                    </div>
                    <div class="mt-1 justify-center">
                        <div class="m-2 p-2">
                            <div class="text-left pb-5  text-sm antialiased tracking-tigh font-sans ">
                                Menu Name :
                                <input class="w-1/4 ml-6 focus:outline-none border border-gray-700 h-8 px-4 rounded" placeholder="Home Menu" type="text" >
                            </div>
                            Drag each item into the order you prefer. Click the arrow on the right of the item to reveal additional configuration options.
                            <div id="app" class=" bg-gray-200 flex items-center mt-5 p-5">
                                <menu-builder v-model="menus"></menu-builder>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </dashboard-layout-one>
</template>

<script>
    import {MultiSelectPlugin} from '@syncfusion/ej2-vue-dropdowns';
    Vue.use(MultiSelectPlugin);
    export default {
        name: "menus",
        data() {
            return {
                breadcrumbs: ['Menus', 'Second Link', 'Third Link', 'Fourth Link'],
                accordions: {},
                Multiselect:[
                    {
                        Id : 1,
                        name : 'Admin',
                    },
                    {
                        Id : 2,
                        name : 'User',
                    },
                    {
                        Id : 3,
                        name : 'Super',
                    },
                    {
                        Id : 4,
                        name : 'Subscriber',
                    }
                ],
                MultiselectData:
                    { value: 'Id', text:'name'},
                isOpen : false,
                menus: [
                    {
                        id: 1,
                        name: 'Home',
                        elements: [

                        ]
                    },
                    {
                        id: 2,
                        name: 'About',
                        elements: [

                        ]
                    },
                    {
                        id: 3,
                        name: 'Level 1',
                        elements: [
                            {
                                id: 4,
                                name: 'Level 2',
                            }
                        ]
                    }

                ],
            }
        },
        created() {
            this.accordions['page'] = true;
        },
        components: {
            'DashboardLayoutOne': () => import('./../Layouts/Dashboard/LayoutOne'),
        }
    }
</script>

<style scoped>

</style>

<style lang="scss">
    @import url(https://cdn.syncfusion.com/ej2/material.css);

    .moving-card {
        @apply opacity-50 bg-gray-100 border border-blue-500;
    }
</style>