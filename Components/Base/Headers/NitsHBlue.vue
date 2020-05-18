<template>
    <div class="flex fixed top-0 w-full justify-between items-center shadow-lg py-4 bg-white">
        <div class="flex-shrink-0 ml-10 cursor-pointer">
            <img class="h-16 w-56 pr-5" :src="logo">
        </div>
        <div class="hidden md:flex overflow-x-hidden mr-10 font-semibold">
            <div class="mr-6 p-1 border-b-2 border-orange-500 inline-block" @mouseover="isVisible = true" @mouseleave="isVisible = false" @keydown.enter="isVisible = !isVisible">
                <div class="inline-flex items-center justify-between px-2 py-1 font-medium  transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
                    <span class="flex-shrink-0 tracking-widest text-gray-700 cursor-default text-sm hover:text-blue-500">{{label1}}</span>
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
                    <span class="flex-shrink-0 tracking-widest cursor-default text-gray-700 text-sm hover:text-blue-500">{{label2}}</span>
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
                <a class="text-gray-700 text-sm tracking-widest hover:text-blue-500" href="#">{{label3}}</a>
            </div>
            <div class="mr-6 p-1">
                <a class="text-gray-700 text-sm tracking-widest hover:text-blue-500" href="#">{{label4}}</a>
            </div>
            <div class="mr-6 p-1">
                <a class="text-gray-700 text-sm tracking-widest hover:text-blue-500" href="#">{{label5}}</a>
            </div>
            <div class="mr-6 p-1">
                <a class="text-gray-700 text-sm tracking-widest hover:text-blue-500" href="#">{{label6}}</a>
            </div>
            <div class="mr-6 p-1">
                <a class="text-gray-700 text-sm tracking-widest hover:text-blue-500" href="#">{{label7}}</a>
            </div>
        </div>
<!--        <div v-if="box" class="hero fixed top-0  w-full flex">-->
<!--            <div class="w-full h-24 mb-5 bg-white pl-2 pr-2  border rounded flex justify-between items-center relative shadow">-->
<!--                <input type="search" name="search" id="search" placeholder="Search" class="appearance-none bg-white px-16 w-full outline-none focus:outline-none active:outline-none"/>-->
<!--                <div class="mr-2">-->
<!--                    <svg @click="box = ! box" class="h-6 w-6 mt-2 ml-4 text-gray-500 hover:text-red-700" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
<!--                        <path fill-rule="evenodd" d="M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.939 12.789L10 11.729l-3.061 3.06-1.729-1.728L8.271 10l-3.06-3.061L6.94 5.21 10 8.271l3.059-3.061 1.729 1.729L11.729 10l3.06 3.061-1.728 1.728z"/>-->
<!--                    </svg>-->
<!--                </div>-->
<!--            </div>-->
<!--&lt;!&ndash;            <div class="-mr-16 pl-1">&ndash;&gt;-->
<!--&lt;!&ndash;                &ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--        </div>-->

<!--            <router-link to="/login">-->
        <base-solid-button class="mr-10" Solid="login" url="/login"></base-solid-button>
<!--    </router-link>-->

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
            label7: {
                type: String,
                required: true
            },
            logo: {
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
                box: false
            }
        }
    }
</script>

<style scoped>
    @import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');

</style>