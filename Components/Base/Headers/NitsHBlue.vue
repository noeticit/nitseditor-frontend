<template>
    <div class="flex justify-between items-center py-4 bg-blue-900">
        <div class="flex-shrink-0 ml-10 cursor-pointer">
            <i class="fas fa-drafting-compass fa-2x text-orange-500"></i>
            <span class="ml-1 text-3xl text-blue-200 font-semibold">Nits Editor</span>
        </div>
        <i class="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"></i>
        <div class="hidden md:flex overflow-x-hidden mr-10 font-semibold">
            <div class="mr-6 p-1 border-b-2 border-orange-500 inline-block" @mouseover="isVisible = true" @mouseleave="isVisible = false" @keydown.enter="isVisible = !isVisible">
                <div class="inline-flex items-center justify-between px-2 py-1 font-medium  transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
                    <span class="flex-shrink-0 tracking-widest text-blue-200 cursor-defaul text-sm">{{label1}}</span>
                </div>
                <transition enter-active-class="transition duration-300 ease-out transform" enter-class="-translate-y-3 scale-95 opacity-0" enter-to-class="translate-y-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-y-0 opacity-100" leave-to-class="-translate-y-3 opacity-0">
                    <div v-show="isVisible" class="absolute pt-2">
                        <div class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl">
                            <div class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"></div>
                            <div class="relative">
                                <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="mr-6 p-1 " @mouseover="Visible = true" @mouseleave="Visible = false" @keydown.enter="Visible = !Visible">
                <div class="inline-flex items-center justify-between px-2 py-1 font-medium  transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
                    <span class="flex-shrink-0 tracking-widest text-white text-sm">{{label2}}</span>
                </div>
                <transition enter-active-class="transition duration-300 ease-out transform" enter-class="-translate-y-3 scale-95 opacity-0" enter-to-class="translate-y-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-y-0 opacity-100" leave-to-class="-translate-y-3 opacity-0">
                    <div v-show="Visible" class="absolute pt-2">
                        <div class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl">
                            <div class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"></div>
                            <div class="relative">
                                <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                                <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Noetic IT Service</a>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="mr-6 p-1">
                <a class="text-white text-sm hover:text-blue-300" href="#">{{label3}}</a>
            </div>
            <div class="mr-6 p-1">
                <a class="text-white text-sm hover:text-blue-300" href="#">{{label4}}</a>
            </div>
            <div class="mr-6 p-1">
                <a class="text-white text-sm hover:text-blue-300" href="#">{{label5}}</a>
            </div>
            <div class="mr-6 p-1">
                <a class="text-white text-sm hover:text-blue-300" href="#">{{label6}}</a>
            </div>
            <div class="mr-6 p-1">
                <svg class="w-5 h-5  cursor-pointer text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NitsHBlue",
        props: {
            label1: {
                type: String,
                required: true
            },
            label2: {
                type: String,
                required: true
            },
            label3: {
                type: String,
                required: true
            },
            label4: {
                type: String,
                required: true
            },
            label5: {
                type: String,
                required: true
            },
            label6: {
                type: String,
                required: true
            },

        },
        data(){
            return{
                responsive_tab :false,
                menu: false,
                box4: false,
                isVisible: false,
                Visible: false,
                onVisible: false,
                isDropdown: false,
                isDrop: false,
                onDropdown: false,
                onDrop: false,
            }
        }
    }
</script>

<style scoped>
    @import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');

</style>