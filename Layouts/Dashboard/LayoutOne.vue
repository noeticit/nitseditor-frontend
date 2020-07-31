<template>
    <div class="fixed h-full w-full flex-col justify-between bg-gray-200">
        <div class="flex h-full">
            <div v-if="menuIsOpen" class="px-1">
                <img class="h-16" src="/nits-assets/images/logo.png" alt="NitsEditor Logo">
                <menu-one class="w-48 pb-6 h-full mb-8 mt-8" :active="active"></menu-one>
            </div>
            <div v-if="!menuIsOpen" class="px-2">
                <div class="w-4">
                    <img class="h-16" src="/nits-assets/images/logo.png" alt="NitsEditor Logo">
                    <svg class="mt-8 text-teal-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.56 8.93l6.37-2.12a1 1 0 0 1 1.26 1.26l-2.12 6.37a1 1 0 0 1-.63.63l-6.37 2.12a1 1 0 0 1-1.26-1.26l2.12-6.37a1 1 0 0 1 .63-.63zm-.22 5.73l4-1.33 1.32-4-4 1.34-1.32 4z"/>
                    </svg>
                    <svg class="mt-3 text-gray-600 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path class="heroicon-ui" d="M7 5H5v14h14V5h-2v10a1 1 0 0 1-1.45.9L12 14.11l-3.55 1.77A1 1 0 0 1 7 15V5zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm4 2v8.38l2.55-1.27a1 1 0 0 1 .9 0L15 13.38V5H9z"/>
                    </svg>
                    <svg class="mt-3 text-gray-600 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path class="heroicon-ui" d="M6 2h9a1 1 0 0 1 .7.3l4 4a1 1 0 0 1 .3.7v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm9 2.41V7h2.59L15 4.41zM18 9h-3a2 2 0 0 1-2-2V4H6v16h12V9zm-2 7a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm0-4a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm-5-4a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1z"/>
                    </svg>
                    <svg class="mt-3 text-gray-600 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path class="heroicon-ui" d="M6 2h9a1 1 0 0 1 .7.3l4 4a1 1 0 0 1 .3.7v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm9 2.41V7h2.59L15 4.41zM18 9h-3a2 2 0 0 1-2-2V4H6v16h12V9zm-2 7a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm0-4a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm-5-4a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1z"/>
                    </svg>
                </div>
            </div>
            <div class="w-full bg-gray-200">
                <top-bar v-on:toggle-menu="menuIsOpen = !menuIsOpen"></top-bar>
                <main>
                    <div class="h-screen max-w-7xl mx-auto ">
                        <slot></slot>
                    </div>
                </main>
            </div>
        </div>
        <div class=" w-11/12 ml-48 fixed rounded pl-1 bottom-0 ">
            <div class="h-10 bg-gray-200  rounded justify-between item-center align-center">
                <div class="flex">
                    <div class="text-sm font-serif text-gray-600 mt-3 pl-40 ml-64">
                        <a class="hover:text-blue-600 pl-24 ml-64" href="#">©2020 Noetic IT Services Pvt. Ltd.</a>
                        <a class="text-sm font-serif text-gray-600 mt-3 ml-10" href="#">About Us</a>
                        <a class="text-sm font-serif text-gray-600 mt-3 ml-10" href="#">Disclaimer</a>
                        <a class="text-sm font-serif text-gray-600 mt-3 ml-10" href="#">Support</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "DashboardLayoutOne",
        props: {
            active: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                menuIsOpen: true
            }
        },
        components: {
            'TopBar': () => import('./TopBar')
        },
    }
</script>

<style scoped>

</style>